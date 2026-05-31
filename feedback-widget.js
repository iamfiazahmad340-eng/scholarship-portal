// ========================================================
// EXTENSION ADDON: FLOATING FEEDBACK & SUPPORT WIDGET
// (Bilkul Nayi File - Zero modification to old files)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic CSS for the Feedback Widget
    const feedbackStyle = document.createElement('style');
    feedbackStyle.textContent = `
        .floating-feedback-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #002d62;
            color: white;
            padding: 12px 20px;
            border-radius: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            cursor: pointer;
            z-index: 9999;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }
        .floating-feedback-btn:hover {
            transform: translateY(-3px);
            background: #004085;
        }
        .feedback-panel {
            position: fixed;
            bottom: 90px;
            right: 30px;
            width: 320px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            z-index: 9999;
            display: none;
            flex-direction: column;
            overflow: hidden;
            animation: slideInUp 0.3s ease;
        }
        [data-theme="dark"] .feedback-panel {
            background: #2d3748;
            color: white;
        }
        .feedback-header {
            background: #002d62;
            color: white;
            padding: 15px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .feedback-body {
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .feedback-body textarea {
            width: 100%;
            height: 100px;
            padding: 10px;
            border: 1px solid #cbd5e0;
            border-radius: 6px;
            resize: none;
            font-family: inherit;
        }
        [data-theme="dark"] .feedback-body textarea {
            background: #1a202c;
            color: white;
            border-color: #4a5568;
        }
        .feedback-submit-btn {
            background: #48bb78;
            color: white;
            border: none;
            padding: 8px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.2s;
        }
        .feedback-submit-btn:hover {
            background: #38a169;
        }
        @keyframes slideInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(feedbackStyle);

    // 2. Injecting HTML Structure to Body
    const widgetContainer = document.createElement('div');
    widgetContainer.innerHTML = `
        <div class="floating-feedback-btn" id="openFeedbackBtn">
            <i class="fas fa-comment-alt"></i> Help & Feedback
        </div>
        
        <div class="feedback-panel" id="feedbackPanel">
            <div class="feedback-header">
                <span><i class="fas fa-envelope-open-text"></i> Send Feedback</span>
                <i class="fas fa-times" id="closeFeedbackBtn" style="cursor:pointer;"></i>
            </div>
            <div class="feedback-body">
                <p style="margin: 0 0 5px 0; font-size: 13px; color: #718096;">Facing issues or want to suggest a scholarship? Let us know!</p>
                <textarea id="feedbackText" placeholder="Type your message here..."></textarea>
                <button class="feedback-submit-btn" id="submitFeedbackBtn">Submit Query</button>
            </div>
        </div>
    `;
    document.body.appendChild(widgetContainer);

    // 3. Event Listeners Logic
    const openBtn = document.getElementById('openFeedbackBtn');
    const closeBtn = document.getElementById('closeFeedbackBtn');
    const panel = document.getElementById('feedbackPanel');
    const submitBtn = document.getElementById('submitFeedbackBtn');
    const textarea = document.getElementById('feedbackText');

    openBtn.addEventListener('click', () => {
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    });

    closeBtn.addEventListener('click', () => {
        panel.style.display = 'none';
    });

    submitBtn.addEventListener('click', () => {
        if (textarea.value.trim() === '') {
            alert('Please enter some text before submitting.');
            return;
        }

        // Action Simulation
        submitBtn.innerText = "Sending...";
        submitBtn.style.background = "#718096";
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you! Your response has been recorded successfully.');
            textarea.value = '';
            submitBtn.innerText = "Submit Query";
            submitBtn.style.background = "#48bb78";
            submitBtn.disabled = false;
            panel.style.display = 'none';
        }, 1200);
    });
});