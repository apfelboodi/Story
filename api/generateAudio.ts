// FIX: Import `Modality` for use in the API call and `Buffer` to resolve the type error.
import { GoogleGenAI, Modality } from "@google/genai";
import { Buffer } from "buffer";

const ttsModel = 'gemini-2.5-flash-preview-tts';

// Using the standard Vercel Node.js handler signature
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    const API_KEY = process.env.API_KEY;
    if (!API_KEY) {
        console.error("API_KEY environment variable not set on Vercel.");
        return res.status(500).json({ error: "Server configuration error: API key not found." });
    }
    
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    try {
        const { text, level } = req.body;

        if (!text || !level) {
            return res.status(400).json({ error: 'Text and level are required' });
        }
        
        const speedInstructions: Record<string, string> = {
            A1: 'Sprechen Sie diesen Text sehr langsam und deutlich vor:',
            A2: 'Sprechen Sie diesen Text langsam und deutlich vor:',
            B1: 'Sprechen Sie diesen Text in einem normalen, klaren Tempo vor:',
            B2: 'Sprechen Sie diesen Text in einem natürlichen Sprechtempo vor:',
        };

        const audioPrompt = `${speedInstructions[level]} ${text}`;

        const response = await ai.models.generateContent({
            model: ttsModel,
            contents: [{ parts: [{ text: audioPrompt }] }],
            config: {
                // FIX: Use `Modality.AUDIO` enum as per Gemini API guidelines instead of a string literal.
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) {
            console.error('No audio data in Gemini response:', JSON.stringify(response, null, 2));
            throw new Error("Audio generation failed, the API did not return audio data.");
        }
        
        const audioBuffer = Buffer.from(base64Audio, 'base64');
        res.setHeader('Content-Type', 'audio/pcm');
        return res.status(200).send(audioBuffer);

    } catch (error) {
        console.error("--- ERROR IN /api/generateAudio ---", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during audio generation.';
        return res.status(500).json({ 
            error: 'Fehler bei der Audioerstellung auf dem Server.',
            details: errorMessage 
        });
    }
}
