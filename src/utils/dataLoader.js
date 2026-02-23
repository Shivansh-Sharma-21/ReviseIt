// Utility to dynamically find and load chapters for a specific subject
// This allows the app to automatically detect new .js files in subject-specific folders

export const getAvailableChapters = async (subject) => {
    const sub = subject.toLowerCase();
    const allMindmapFiles = import.meta.glob('../data/*/mindmaps/*.js');
    const allFlashcardFiles = import.meta.glob('../data/*/flashcards/*.js');
    const allQuestionFiles = import.meta.glob('../data/*/questions/*.js');

    const mindmapFiles = Object.keys(allMindmapFiles).reduce((acc, path) => {
        if (path.includes(`/data/${sub}/mindmaps/`)) {
            acc[path] = allMindmapFiles[path];
        }
        return acc;
    }, {});

    if (Object.keys(mindmapFiles).length === 0) {
        return [];
    }

    const chapters = [];

    for (const path in mindmapFiles) {
        const fileName = path.split('/').pop().replace('.js', '');

        try {
            const module = await mindmapFiles[path]();
            const mindmap = module.mindmap;

            // Find matching flashcards and questions
            const flashcardPath = `../data/${sub}/flashcards/${fileName}.js`;
            const questionPath = `../data/${sub}/questions/${fileName}.js`;

            let flashcards = [];
            let questions = [];

            if (allFlashcardFiles[flashcardPath]) {
                const fcModule = await allFlashcardFiles[flashcardPath]();
                flashcards = fcModule.flashcards || [];
            }

            if (allQuestionFiles[questionPath]) {
                const qModule = await allQuestionFiles[questionPath]();
                questions = qModule.questions || [];
            }

            chapters.push({
                id: fileName,
                subject: sub,
                title: mindmap.title || fileName.toUpperCase(),
                flow: mindmap.flow || [],
                flashcards,
                questions,
                path: path
            });
        } catch (error) {
            console.error(`Error loading chapter ${fileName} for ${subject}:`, error);
        }
    }

    return chapters;
};
