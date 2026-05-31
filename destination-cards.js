// ==========================================
// MODULE: DYNAMIC DESTINATION EXPLORER & POPUPS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('eligibility-checker-section') || document.body.lastElementChild;
    if (!target || document.getElementById('country-explorer-section')) return;

    const html = `
        <section id="country-explorer-section" style="background: white; padding: 50px 20px; border-radius: 12px; margin: 40px auto; max-width: 1200px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
            <div style="text-align: center; margin-bottom: 35px;">
                <h2 style="color: #1e3a8a; font-size: 1.8rem; font-weight: bold;">Explore Destinations</h2>
                <p style="color: #64748b;">Click on a country to instantly view its top dedicated international scholarships</p>
            </div>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                <div class="country-btn" data-country="usa" style="padding: 15px 30px; border: 2px solid #e2e8f0; border-radius: 30px; cursor: pointer; font-weight: 600; color: #475569; background: #f8fafc; transition: all 0.2s;">🇺🇸 United States</div>
                <div class="country-btn" data-country="uk" style="padding: 15px 30px; border: 2px solid #e2e8f0; border-radius: 30px; cursor: pointer; font-weight: 600; color: #475569; background: #f8fafc; transition: all 0.2s;">🇬🇧 United Kingdom</div>
                <div class="country-btn" data-country="germany" style="padding: 15px 30px; border: 2px solid #e2e8f0; border-radius: 30px; cursor: pointer; font-weight: 600; color: #475569; background: #f8fafc; transition: all 0.2s;">🇩🇪 Germany</div>
                <div class="country-btn" data-country="canada" style="padding: 15px 30px; border: 2px solid #e2e8f0; border-radius: 30px; cursor: pointer; font-weight: 600; color: #475569; background: #f8fafc; transition: all 0.2s;">🇨🇦 Canada</div>
            </div>

            <div id="countryModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 9999999; justify-content: center; align-items: center; padding: 20px;">
                <div style="background: white; padding: 30px; border-radius: 12px; max-width: 550px; width: 100%; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); position: relative;">
                    <span id="closeModalBtn" style="position: absolute; top: 15px; right: 20px; font-size: 1.5rem; cursor: pointer; color: #64748b; font-weight: bold;">&times;</span>
                    <div id="modalContent"></div>
                </div>
            </div>
        </section>
    `;
    target.insertAdjacentHTML('afterend', html);

    const countryData = {
        usa: { title: "🇺🇸 United States", name: "Fulbright Program", coverage: "Fully Funded (Tuition & Living)", deadline: "October 15, 2026", desc: "Flagship educational exchange program sponsored by the U.S. government." },
        uk: { title: "🇬🇧 United Kingdom", name: "Chevening Scholarships", coverage: "Fully Funded (Tuition + Flights)", deadline: "November 03, 2026", desc: "UK government's global scholarship program for master's degrees." },
        germany: { title: "🇩🇪 Germany", name: "DAAD Scholarships", coverage: "Monthly Stipend (€934 - €1,200)", deadline: "August 31, 2026", desc: "Offers funding for postgraduate courses at state-recognized German universities." },
        canada: { title: "🇨🇦 Canada", name: "Vanier Graduate Awards", coverage: "$50,000 per year allocation", deadline: "November 01, 2026", desc: "Supports world-class doctoral students with high leadership criteria." }
    };

    const modal = document.getElementById('countryModal');
    const modalContent = document.getElementById('modalContent');
    
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selected = countryData[btn.dataset.country];
            if (selected) {
                modalContent.innerHTML = `
                    <h3 style="color: #1e3a8a; font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">${selected.title}</h3>
                    <p style="color: #0d9488; font-weight: bold; font-size: 1.1rem; margin-bottom: 15px;">${selected.name}</p>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #0d9488; margin-bottom: 15px;">
                        <p style="margin: 0; font-size: 0.95rem;"><strong>Coverage:</strong> ${selected.coverage}</p>
                        <p style="margin: 5px 0 0 0; font-size: 0.95rem; color: #b91c1c;"><strong>Deadline:</strong> ${selected.deadline}</p>
                    </div>
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin-bottom: 20px;">${selected.desc}</p>
                    <button onclick="document.getElementById('countryModal').style.display='none'; alert('Opening application workflow...')" style="background: #1e3a8a; color: white; border: none; padding: 12px 20px; border-radius: 6px; font-weight: bold; width: 100%; cursor: pointer;">Apply Through Portal</button>
                `;
                modal.style.display = 'flex';
            }
        });
    });

    document.getElementById('closeModalBtn').addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});