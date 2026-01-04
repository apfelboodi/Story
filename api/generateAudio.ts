
import { GoogleGenAI, Modality } from "@google/genai";

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
            throw new Error("Audio generation failed, no audio data received.");
        }
        
        // FIX: Replaced manual base64 decoding with the standard Node.js `Buffer.from` method.
        // This is more efficient and corrects the "Cannot find name 'Buffer'" error in a Node.js environment
        // when TypeScript is configured with Node types.
        const audioBuffer = Buffer.from(base64Audio, 'base64');

        // Return the raw audio data
        res.setHeader('Content-Type', 'audio/pcm');
        return res.status(200).send(audioBuffer);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to generate audio' });
    }
}
