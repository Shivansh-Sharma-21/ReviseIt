// Utility to dynamically find and load chapters for a specific subject
// This allows the app to automatically detect new .js files in subject-specific folders

export const getAvailableChapters = async (subject) => {
    const sub = subject.toLowerCase();

    try {
        const response = await fetch('/data/manifest.json');
        if (!response.ok) {
            throw new Error('Failed to fetch manifest');
        }
        const manifest = await response.json();
        const subjectChapters = manifest[sub] || [];

        const chapters = [];

        for (const chap of subjectChapters) {
            const fileName = chap.id;

            try {
                // Fetch mindmap
                let mindmap = {};
                const mmRes = await fetch(`/data/${sub}/mindmaps/${fileName}.json`);
                if (mmRes.ok) {
                    mindmap = await mmRes.json();
                }

                // Fetch flashcards
                let structuredFlashcards = [];
                const fcRes = await fetch(`/data/${sub}/flashcards/${fileName}.json`);
                if (fcRes.ok) {
                    structuredFlashcards = await fcRes.json();
                }

                // Create flattened flashcards for the traditional FlashcardsView
                const flattenedFlashcards = structuredFlashcards.reduce((acc, current) => {
                    if (current.cards && Array.isArray(current.cards)) {
                        return [...acc, ...current.cards];
                    }
                    return acc;
                }, []);

                // Fetch questions
                let questions = [];
                const qRes = await fetch(`/data/${sub}/questions/${fileName}.json`);
                if (qRes.ok) {
                    questions = await qRes.json();
                }

                chapters.push({
                    id: fileName,
                    subject: sub,
                    title: mindmap.title || fileName.toUpperCase(),
                    flow: mindmap.flow || [],
                    flashcards: flattenedFlashcards,
                    structuredFlashcards: structuredFlashcards,
                    questions,
                    path: `/data/${sub}/mindmaps/${fileName}.json`
                });
            } catch (error) {
                console.error(`Error loading chapter ${fileName} for ${subject}:`, error);
            }
        }

        return chapters;
    } catch (error) {
        console.error(`Error loading chapters for ${subject}:`, error);
        return [];
    }
};
