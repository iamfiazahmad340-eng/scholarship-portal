// ========================================================
// ADVANCED EXTENSION ADDON: SUCCESS STORIES SLIDER PANEL
// (Nayi Independent File - Auto-injects at the very end)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {

    // 1. DYNAMIC CSS INJECTION: Design ko premium aur clean banana
    const styles = document.createElement('style');
    styles.textContent = `
        .stories-section {
            max-width: 1200px;
            margin: 60px auto;
            padding: 20px;
            font-family: inherit;
        }
        .stories-title {
            color: #002d62;
            text-align: center;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        [data-theme="dark"] .stories-title { color: #edf2f7 !important; }
        
        .stories-subtitle {
            text-align: center;
            color: #718096;
            margin-bottom: 40px;
            font-size: 15px;
        }

        .stories-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            justify-content: center;
        }

        .story-card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            padding: 30px;
            width: calc(33.33% - 20px);
            min-width: 300px;
            position: relative;
            border-top: 4px solid #002d62;
            transition: transform 0.3s ease;
        }
        [data-theme="dark"] .story-card { background: #2d3748; color: white; }
        
        .story-card:hover {
            transform: translateY(-5px);
        }

        .quote-icon {
            position: absolute;
            top: 20px;
            right: 25px;
            font-size: 35px;
            color: #e2e8f0;
            z-index: 1;
        }
        [data-theme="dark"] .quote-icon { color: #4a5568; }

        .story-text {
            color: #4a5568;
            font-size: 14px;
            line-height: 1.6;
            font-style: italic;
            margin-bottom: 20px;
            position: relative;
            z-index: 2;
        }
        [data-theme="dark"] .story-text { color: #cbd5e0; }

        .alumni-profile {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .alumni-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            background: #edf2f7;
        }

        .alumni-info h4 {
            margin: 0;
            color: #2d3748;
            font-size: 16px;
            font-weight: 600;
        }
        [data-theme="dark"] .alumni-info h4 { color: #edf2f7; }

        .alumni-info p {
            margin: 3px 0 0 0;
            color: #48bb78;
            font-size: 13px;
            font-weight: 600;
        }
    `;
    document.head.appendChild(styles);

    // 2. TARGET IDENTIFICATION: Isay website ke bilkul end par inject karna hai
    // Agar applicationChecklist ya koi aur block milta hai toh uske baad, warna body ke end par
    const mainContainer = document.getElementById('applicationChecklistContainer') || document.getElementById('scholarshipGrid')?.parentElement;
    if (!mainContainer) return;

    // 3. STRUCTURE CREATION
    const storiesWrapper = document.createElement('div');
    storiesWrapper.className = 'stories-section';
    storiesWrapper.innerHTML = `
        <h2 class="stories-title"><i class="fas fa-graduation-cap"></i> Success Stories & Alumni Spotlight</h2>
        <p class="stories-subtitle">See how global students cracked fully-funded international scholarships using this portal layout.</p>
        
        <div class="stories-grid">
            <div class="story-card">
                <i class="fas fa-quote-right quote-icon"></i>
                <p class="story-text">"The dynamic eligibility checker helped me filter out exactly what I needed. I tracked my documents through the checklist and today I am studying at Oxford!"</p>
                <div class="alumni-profile">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60" class="alumni-avatar" alt="Alumni 1">
                    <div class="alumni-info">
                        <h4>Ayesha Khan</h4>
                        <p>Chevening Scholar (UK)</p>
                    </div>
                </div>
            </div>

            <div class="story-card" style="border-top-color: #48bb78;">
                <i class="fas fa-quote-right quote-icon"></i>
                <p class="story-text">"Bina kisi confusion ke mujhe Erasmus Mundus ki saari details aur images ek hi grid me mil gayin. Stipend calculator ne toh meri poori planning aasan kar di."</p>
                <div class="alumni-profile">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60" class="alumni-avatar" alt="Alumni 2">
                    <div class="alumni-info">
                        <h4>Zain Ahmed</h4>
                        <p>Erasmus Alumnus (Europe)</p>
                    </div>
                </div>
            </div>

            <div class="story-card" style="border-top-color: #ecc94b;">
                <i class="fas fa-quote-right quote-icon"></i>
                <p class="story-text">"Applying for Fulbright was overwhelming until I used this tracking dashboard. The clean segmented alignment makes preparing documents incredibly fast."</p>
                <div class="alumni-profile">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60" class="alumni-avatar" alt="Alumni 3">
                    <div class="alumni-info">
                        <h4>Bilal Mustafa</h4>
                        <p>Fulbright Fellow (USA)</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Isay purane dynamic components ke bulkul niche lagana
    mainContainer.parentNode.insertBefore(storiesWrapper, mainContainer.nextSibling);
});