
import { GoogleGenAI, Type } from "@google/genai";

// This is a Vercel serverless function.
// The API key is read from Vercel's environment variables, NOT from the client.
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const textModel = 'gemini-flash-latest';

// By exporting a default function, we create a Vercel serverless function.
export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const { level, topic } = await request.json();

        if (!level || !topic) {
            return new Response(JSON.stringify({ error: 'Level and topic are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        
        const storyLength = {
            A1: 'approximately 50-70 words',
            A2: 'approximately 90-120 words',
            B1: 'approximately 150-200 words',
            B2: 'approximately 220-280 words',
        };

        const prompt = `
          You are an expert German language teacher. Create a compelling and engaging narrative or story in German for a language learner at the ${level} level.
          **Topic:** "${topic}"
          **Requirements:**
          1.  **Story Format:** The output must be a proper story or a narrative of an event, not just a descriptive text. It should have a clear beginning, middle, and end.
          2.  **Level Appropriateness:** The vocabulary, grammar, and sentence structure must be strictly appropriate for the ${level} level.
          3.  **Length:** The story should be ${storyLength[level]} long.
          4.  **Translation:** Provide a professional and accurate Persian translation of the story.
          **Output Format:**
          Return the result as a single, valid JSON object with two keys: "germanStory" and "persianTranslation". Do not include any markdown formatting like \`\`\`json.
        `;

        const response = await ai.models.generateContent({
            model: textModel,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        germanStory: { type: Type.STRING },
                        persianTranslation: { type: Type.STRING },
                    },
                    required: ["germanStory", "persianTranslation"],
                }
            }
        });
        
        const jsonStr = response.text.trim();
        const data = JSON.parse(jsonStr);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to generate story' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
