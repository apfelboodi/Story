
import type { Level } from '../types';

// This function now calls our OWN backend endpoint, not Google's.
export async function generateStoryAndTranslation(level: Level, topic: string): Promise<{ germanStory: string; persianTranslation: string; }> {
    const response = await fetch('/api/generateText', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ level, topic }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch story from backend');
    }

    return response.json();
}
