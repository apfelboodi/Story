
import { GoogleGenAI, Type } from "@google/genai";

const textModel = 'gemini-3-flash-preview';

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
        const { level, topic } = req.body;

        if (!level || !topic) {
            return res.status(400).json({ error: 'Level and topic are required' });
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

        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to generate story' });
    }
}
