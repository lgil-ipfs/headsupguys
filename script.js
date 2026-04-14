document.addEventListener('DOMContentLoaded', () => {
    let currentChapterIndex = 0;
    const TOTAL_CHAPTERS = courseContent.length;
    
    // DOM Elements
    const progressContainer = document.getElementById('progress-container');
    const contentArea = document.getElementById('content-area');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Initialize Progress Bar
    function initProgress() {
        progressContainer.innerHTML = '';
        courseContent.forEach((_, index) => {
            const segment = document.createElement('div');
            segment.className = 'progress-segment';
            if (index === currentChapterIndex) segment.classList.add('active');
            if (index < currentChapterIndex) segment.classList.add('completed');
            progressContainer.appendChild(segment);
        });
    }

    // Load Assignment States
    function getStoredAnswer(assignmentId) {
        return localStorage.getItem(`hug_course_${assignmentId}`) || '';
    }

    function saveAnswer(assignmentId, value) {
        localStorage.setItem(`hug_course_${assignmentId}`, value);
    }

    // Render Content
    function renderChapter() {
        const chapter = courseContent[currentChapterIndex];
        
        // Update Progress Bar
        const segments = progressContainer.querySelectorAll('.progress-segment');
        segments.forEach((seg, idx) => {
            seg.className = 'progress-segment';
            if (idx === currentChapterIndex) seg.classList.add('active');
            if (idx < currentChapterIndex) seg.classList.add('completed');
        });

        // Build Chapter HTML
        let html = `
            <div class="chapter-header">
                ${chapter.chapterNumber ? `<span class="chapter-label">Chapter ${chapter.chapterNumber}</span>` : ''}
                <h1 class="chapter-title">${chapter.title}</h1>
                <p class="chapter-subtitle">${chapter.subtitle}</p>
            </div>
            <div class="chapter-body">
                ${chapter.content}
                
                ${chapter.assignments ? renderAssignments(chapter.assignments) : ''}
            </div>
        `;

        contentArea.innerHTML = html;
        window.scrollTo(0, 0);

        // Update Buttons
        prevBtn.disabled = currentChapterIndex === 0;
        nextBtn.textContent = currentChapterIndex === TOTAL_CHAPTERS - 1 ? 'Finish' : (currentChapterIndex === 0 ? 'Start Course' : 'Next Chapter');

        // Add Listeners to Textareas
        if (chapter.assignments) {
            chapter.assignments.forEach(assign => {
                const textareas = document.querySelectorAll(`[data-assign-id="${assign.id}"]`);
                textareas.forEach((ta, qIdx) => {
                    ta.addEventListener('input', (e) => {
                        const answers = JSON.parse(localStorage.getItem(`hug_course_${assign.id}`) || '[]');
                        answers[qIdx] = e.target.value;
                        saveAnswer(assign.id, JSON.stringify(answers));
                    });
                });
            });
        }
    }

    function renderAssignments(assignments) {
        return assignments.map(assign => {
            const storedAnswers = JSON.parse(getStoredAnswer(assign.id) || '[]');
            
            return `
                <div class="assignment-container" id="assign-${assign.id}">
                    <div class="assignment-header">
                        <span class="assignment-icon">✏️</span>
                        <h3 class="assignment-title">${assign.title}</h3>
                    </div>
                    ${assign.questions.map((q, i) => `
                        <div class="assignment-question">
                            <p>${i + 1}. ${q}</p>
                            <textarea 
                                class="assignment-textarea" 
                                data-assign-id="${assign.id}" 
                                placeholder="Share your thoughts here..."
                            >${storedAnswers[i] || ''}</textarea>
                        </div>
                    `).join('')}
                    <div class="participation-tag">✅ ${assign.tag}</div>
                </div>
            `;
        }).join('');
    }

    // Navigation Listeners
    nextBtn.addEventListener('click', () => {
        if (currentChapterIndex < TOTAL_CHAPTERS - 1) {
            currentChapterIndex++;
            renderChapter();
        } else {
            alert('Congratulations! You have completed the course. Your answers have been saved locally for your review.');
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentChapterIndex > 0) {
            currentChapterIndex--;
            renderChapter();
        }
    });

    // Start App
    initProgress();
    renderChapter();
});
