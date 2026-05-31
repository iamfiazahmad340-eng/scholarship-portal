// ========================================================================
// INTEGRATED SYSTEM PATCH: CONTACT CENTER, SECURITY PANEL & INTERACTIVE FAQ
// ========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Duplicate execution handler guard
    if (document.getElementById('integrated-contact-section')) return;

    const systemThemeHtml = `
        <section id="integrated-contact-section" style="background: #f8fafc; padding: 60px 20px; border-radius: 12px; margin: 40px auto; max-width: 1200px; border: 1px solid #e2e8f0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <div style="text-align: center; margin-bottom: 35px;">
                <h2 style="color: #1e3a8a; font-size: 2rem; font-weight: 700; margin-bottom: 8px;">Have Questions? Contact Help Desk</h2>
                <p style="color: #64748b; font-size: 1.05rem;">Submit your application queries and our team will evaluate your document checklist</p>
            </div>
            
            <form id="patchContactForm" style="max-width: 650px; margin: 0 auto; background: white; padding: 35px; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); border: 1px solid #f1f5f9;">
                <div style="margin-bottom: 18px;">
                    <label style="display: block; margin-bottom: 6px; color: #334155; font-weight: 600; font-size: 0.95rem;">Full Name</label>
                    <input type="text" id="patchMsgName" required style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 18px;">
                    <label style="display: block; margin-bottom: 6px; color: #334155; font-weight: 600; font-size: 0.95rem;">Email Address</label>
                    <input type="email" id="patchMsgEmail" required style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 22px;">
                    <label style="display: block; margin-bottom: 6px; color: #334155; font-weight: 600; font-size: 0.95rem;">Your Message / Query</label>
                    <textarea id="patchMsgContent" rows="4" required style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; resize: none; box-sizing: border-box;"></textarea>
                </div>
                <button type="submit" style="width: 100%; background: #1e3a8a; color: white; padding: 14px; border: none; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: background 0.2s; box-shadow: 0 4px 6px rgba(30, 58, 138, 0.15);">Send Message</button>
            </form>

            <div style="text-align: center; margin-top: 40px; border-top: 1px dashed #cbd5e1; padding-top: 20px;">
                <button id="patchTriggerAdminBtn" style="background: transparent; color: #94a3b8; border: 1px dashed #cbd5e1; padding: 7px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500;">🔒 Access System Admin Console</button>
            </div>
        </section>

        <section id="patch-admin-dashboard" style="display: none; background: #0f172a; color: #f8fafc; padding: 45px 25px; border-radius: 12px; margin: 40px auto; max-width: 1200px; font-family: 'Courier New', Courier, monospace; border: 1px solid #334155;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #334155; padding-bottom: 15px; margin-bottom: 25px;">
                <h2 style="color: #38bdf8; font-size: 1.6rem; margin: 0; font-weight: bold;">🛠️ Central Administrative Control Panel</h2>
                <button id="patchCloseAdminBtn" style="background: #ef4444; color: white; border: none; padding: 6px 15px; border-radius: 6px; cursor: pointer; font-family: sans-serif; font-weight: bold;">Exit Admin</button>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 30px;">
                <div style="flex: 1; min-width: 290px; background: #1e293b; padding: 22px; border-radius: 10px; border: 1px solid #334155;">
                    <h3 style="color: #34d399; margin-top: 0; border-bottom: 1px solid #334155; padding-bottom: 10px; font-size: 1.2rem;">Registered Accounts DB</h3>
                    <ul id="patchAdminUserList" style="list-style: none; padding: 0; margin: 0; line-height: 2; color: #cbd5e1;"></ul>
                </div>

                <div style="flex: 1; min-width: 290px; background: #1e293b; padding: 22px; border-radius: 10px; border: 1px solid #334155;">
                    <h3 style="color: #fbbf24; margin-top: 0; border-bottom: 1px solid #334155; padding-bottom: 10px; font-size: 1.2rem;">Received User Queries</h3>
                    <div id="patchAdminMsgList" style="display: flex; flex-direction: column; gap: 12px;"></div>
                </div>
            </div>
        </section>

        <section id="patch-faq-section" style="background: white; padding: 60px 20px; border-radius: 12px; margin: 40px auto; max-width: 1200px; border: 1px solid #e2e8f0; font-family: sans-serif;">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="color: #1e3a8a; font-size: 2rem; font-weight: 700; margin-bottom: 8px;">Frequently Asked Questions (FAQs)</h2>
                <p style="color: #64748b; font-size: 1.05rem;">Find instant clarity regarding global scholarship criteria & documentation structures</p>
            </div>

            <div style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px;">
                
                <div class="patch-faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; transition: 0.2s;">
                    <div class="patch-faq-toggle" style="background: #f8fafc; padding: 18px 22px; font-weight: 600; color: #1e3a8a; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; font-size: 1.05rem;">
                        <span>❓ What are the baseline documents needed for fully-funded applications?</span>
                        <strong style="color: #0d9488; font-size: 1.3rem;">+</strong>
                    </div>
                    <div class="patch-faq-content" style="display: none; padding: 20px 22px; border-top: 1px solid #e2e8f0; color: #475569; line-height: 1.6; background: #fff; font-size: 0.95rem;">
                        Typically, you will require an updated Academic CV (Europass format preferred), an aligned Statement of Purpose (SOP), 2 Letters of Recommendation (LoRs) from university professors, official attested academic transcripts, and valid language proficiency marks (IELTS/TOEFL or English Proficiency Certificate).
                    </div>
                </div>

                <div class="patch-faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; transition: 0.2s;">
                    <div class="patch-faq-toggle" style="background: #f8fafc; padding: 18px 22px; font-weight: 600; color: #1e3a8a; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; font-size: 1.05rem;">
                        <span>❓ Can I apply for European scholarships if my CGPA is below 3.0?</span>
                        <strong style="color: #0d9488; font-size: 1.3rem;">+</strong>
                    </div>
                    <div class="patch-faq-content" style="display: none; padding: 20px 22px; border-top: 1px solid #e2e8f0; color: #475569; line-height: 1.6; background: #fff; font-size: 0.95rem;">
                        Yes, absolutely! While highly competitive awards like Erasmus Mundus favor strong scores, many state universities in Italy, Germany, and Hungary offer need-based structural waivers and partial grant scholarships where strong work profiles or research proposals balance out lower GPA margins.
                    </div>
                </div>

                <div class="patch-faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; transition: 0.2s;">
                    <div class="patch-faq-toggle" style="background: #f8fafc; padding: 18px 22px; font-weight: 600; color: #1e3a8a; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; font-size: 1.05rem;">
                        <span>❓ Is IELTS mandatory for all English-taught degree courses?</span>
                        <strong style="color: #0d9488; font-size: 1.3rem;">+</strong>
                    </div>
                    <div class="patch-faq-content" style="display: none; padding: 20px 22px; border-top: 1px solid #e2e8f0; color: #475569; line-height: 1.6; background: #fff; font-size: 0.95rem;">
                        Not necessarily. Various structural engineering and computer science divisions across Europe and Asia accept a validated English Proficiency Certificate issued directly by your home university registrar, confirming your entire curriculum medium was delivered fully in English.
                    </div>
                </div>

            </div>

            <div style="margin-top: 45px; background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 18px; border-radius: 10px; text-align: center; font-size: 0.95rem; font-weight: 500; line-height: 1.4;">
                💡 <strong>Important Academic Notice:</strong> Application tracks, selection parameters, criteria benchmarks, and global financial stipend matrix metrics are bound to fluctuate dynamically per regional session session updates.
            </div>
        </section>
    `;

    // Force strict bottom placement at the absolute end of the body rendering architecture
    document.body.insertAdjacentHTML('beforeend', systemThemeHtml);

    // --- INTEGRATED EVENT ROUTINES ---

    // 1. Safe Processing Routine for Help Desk Form
    document.getElementById('patchContactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('patchMsgName').value.trim();
        const email = document.getElementById('patchMsgEmail').value.trim();
        const content = document.getElementById('patchMsgContent').value.trim();

        const dataPayload = { name, email, content, timestamp: new Date().toLocaleTimeString() };
        let currentQueries = JSON.parse(localStorage.getItem('portalQueries')) || [];
        currentQueries.push(dataPayload);
        localStorage.setItem('portalQueries', JSON.stringify(currentQueries));

        alert('🚀 Your support ticket has been logged inside the virtual database memory successfully!');
        document.getElementById('patchContactForm').reset();
        
        if (document.getElementById('patch-admin-dashboard').style.display === 'block') {
            refreshConsoleMemory();
        }
    });

    // 2. Security Handshake Loop for Console Execution
    document.getElementById('patchTriggerAdminBtn')?.addEventListener('click', () => {
        const token = prompt('🔑 System Verification Needed.\nEnter Admin Console Security Token Key:');
        if (token === 'admin123') {
            document.getElementById('patch-admin-dashboard').style.display = 'block';
            refreshConsoleMemory();
            document.getElementById('patch-admin-dashboard').scrollIntoView({ behavior: 'smooth' });
        } else if (token !== null) {
            alert('❌ Security Violation: Invalid System Password Token!');
        }
    });

    document.getElementById('patchCloseAdminBtn')?.addEventListener('click', () => {
        document.getElementById('patch-admin-dashboard').style.display = 'none';
    });

    function refreshConsoleMemory() {
        const userContainer = document.getElementById('patchAdminUserList');
        const userMap = JSON.parse(localStorage.getItem('virtualUsersDb')) || {};
        const listings = Object.keys(userMap);

        if (userContainer) {
            if (listings.length === 0) {
                userContainer.innerHTML = '<li style="color: #64748b;">[Console Message] No system accounts registered inside virtual cluster storage.</li>';
            } else {
                userContainer.innerHTML = listings.map(u => `<li>🟢 active_user_id: <strong style="color: #f1f5f9; font-family: monospace;">"${u}"</strong></li>`).join('');
            }
        }

        const msgContainer = document.getElementById('patchAdminMsgList');
        const queryLogs = JSON.parse(localStorage.getItem('portalQueries')) || [];

        if (msgContainer) {
            if (queryLogs.length === 0) {
                msgContainer.innerHTML = '<p style="color: #64748b; margin: 0;">[Console Message] No unread client data payloads found inside log channels.</p>';
            } else {
                msgContainer.innerHTML = queryLogs.map(m => `
                    <div style="background: #0f172a; padding: 14px; border-radius: 8px; border-left: 4px solid #fbbf24; font-family: monospace; border-top: 1px solid #1e293b;">
                        <p style="margin: 0 0 6px 0; color: #38bdf8; font-size: 0.85rem;"><strong>Payload From:</strong> ${m.name} (${m.email}) <span style="float: right; color: #64748b;">${m.timestamp}</span></p>
                        <p style="margin: 0; color: #cbd5e1; font-size: 0.85rem; line-height: 1.5;">"${m.content}"</p>
                    </div>
                `).join('');
            }
        }
    }

    // 3. SECURE COLLAPSIBLE HARNESS PROCEDURES (ACCORDIONS)
    document.querySelectorAll('.patch-faq-toggle').forEach(element => {
        element.addEventListener('click', () => {
            const outputPanel = element.nextElementSibling;
            const statusNode = element.querySelector('strong');
            
            if (outputPanel.style.display === 'block') {
                outputPanel.style.display = 'none';
                statusNode.innerText = '+';
                element.style.backgroundColor = '#f8fafc';
            } else {
                outputPanel.style.display = 'block';
                statusNode.innerText = '−';
                element.style.backgroundColor = '#f1f5f9';
            }
        });
    });
});