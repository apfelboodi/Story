
import { GoogleGenAI, Modality } from "@google/genai";

const ttsModel = 'gemini-2.5-flash-preview-tts';

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }
    
    const API_KEY = process.env.API_KEY;
    if (!API_KEY) {
        console.error("API_KEY environment variable not set on Vercel.");
        return new Response(JSON.stringify({ error: "Server configuration error: API key not found." }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    try {
        const { text, level } = await request.json();

        if (!text || !level) {
            return new Response(JSON.stringify({ error: 'Text and level are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
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
        
        // Decode base64 to binary
        const binaryString = atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Return the raw audio data as a blob
        return new Response(bytes.buffer, {
            status: 200,
            headers: { 'Content-Type': 'audio/pcm' },
        });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to generate audio' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
