// ========================================================
// CORE ADVANCED INTEGRATION ENGINE (features-hub.js)
// (Nayi standalone file - Saare features isi se chalenge)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. TOP DESTINATIONS CLICK LOGIC (Image 55d141f8) ---
    function initDestinationCards() {
        // Saare potential container divs dhoondna jo destination cards ho sakte hain
        const allDivs = document.querySelectorAll('div');
        const countrySelect = document.getElementById('countryFilter');

        allDivs.forEach(card => {
            // Text check karna (USA, Europe, UK, Canada)
            const text = card.innerText ? card.innerText.toLowerCase() : '';
            let countryValue = '';

            if (text.includes('united states') || text.includes('institutional and government')) {
                countryValue = 'usa';
            } else if (text.includes('europe') || text.includes('erasmus programs')) {
                countryValue = 'germany'; // Data key mapping for Europe/Germany
            } else if (text.includes('united kingdom') || text.includes('chevening')) {
                countryValue = 'uk';
            } else if (text.includes('canada') || text.includes('vanier')) {
                countryValue = 'canada';
            }

            // Agar valid card mil jaye toh effects apply karna
            if (countryValue && card.children.length > 0 && card.offsetHeight > 50) {
                card.style.cursor = 'pointer';
                card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

                // Hover lifting effect
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-6px)';
                    card.style.boxShadow = '0 8px 20px rgba(0,2,20,0.12)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = 'none';
                });

                // Click filter routine
                card.addEventListener('click', () => {
                    if (countrySelect) {
                        countrySelect.value = countryValue;
                        // Trigger script.js filter if exists
                        if (typeof filterScholarships === 'function') {
                            filterScholarships();
                        }
                    }
                    // Smooth scroll to results
                    const grid = document.getElementById('scholarshipGrid') || document.querySelector('.scholarship-card')?.parentElement;
                    if (grid) {
                        grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                });
            }
        });
    }

    // --- 2. ELIGIBILITY CHECKER ENGINE (Image 4ab64940) ---
    function initEligibilityChecker() {
        const cgpaInput = document.querySelector('input[placeholder*="3.4"]') || document.querySelector('input[type="number"]');
        const testSelect = document.querySelector('.eligibility-card select') || document.querySelector('select');
        const checkBtn = document.querySelector('button[id*="Check"]') || document.querySelector('.eligibility-card button') || document.getElementById('checkEligibilityBtn');

        if (!cgpaInput) return;

        const handleCheck = (e) => {
            e.preventDefault();
            const cgpa = parseFloat(cgpaInput.value);
            const testStatus = testSelect ? testSelect.value.toLowerCase() : 'yes';
            const hasIelts = testStatus.includes('yes') || testStatus === '1';

            if (isNaN(cgpa) || cgpa < 0 || cgpa > 4.0) {
                alert("Please enter a valid academic CGPA between 0.0 and 4.0");
                return;
            }

            const cards = document.querySelectorAll('.scholarship-card');
            let matches = 0;

            cards.forEach(card => {
                const title = card.querySelector('h3')?.innerText.toLowerCase() || '';
                let eligible = true;

                if (title.includes('fulbright') && (cgpa < 3.0 || !hasIelts)) eligible = false;
                if (title.includes('chevening') && cgpa < 2.8) eligible = false;
                if (title.includes('erasmus') && cgpa < 2.5) eligible = false;

                if (eligible) {
                    card.style.display = 'flex';
                    card.style.border = '2px solid #48bb78';
                    matches++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Status feedback banner creation
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed; top: 30px; left: 50%; transform: translateX(-50%);
                background: ${matches > 0 ? '#002d62' : '#e53e3e'}; color: white;
                padding: 15px 30px; border-radius: 50px; font-weight: bold;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2); z-index: 10000; text-align: center;
            `;
            toast.innerHTML = matches > 0 
                ? `🎉 Success! Found ${matches} Matching Scholarships for your profile.` 
                : `❌ No direct matching awards found for current criteria.`;
            
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.4s';
                setTimeout(() => { toast.remove(); }, 400);
                cards.forEach(c => c.style.border = 'none');
            }, 3500);

            const grid = document.getElementById('scholarshipGrid');
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };

        if (checkBtn) checkBtn.addEventListener('click', handleCheck);
        const form = cgpaInput.closest('form');
        if (form) form.addEventListener('submit', handleCheck);
    }

    // Delay execute taake core cards pehle render ho jayein
    setTimeout(() => {
        initDestinationCards();
        initEligibilityChecker();
    }, 600);
});