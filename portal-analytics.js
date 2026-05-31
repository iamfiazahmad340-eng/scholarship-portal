// ==========================================
// MODULE: PORTAL METRICS & ELIGIBILITY ENGINE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Statistics Counter
    const target = document.querySelector('.search-section') || document.getElementById('searchForm');
    if (target && !document.getElementById('stats-section')) {
        const statsHtml = `
            <section id="stats-section" style="background: linear-gradient(135deg, #1e3a8a, #0d9488); color: white; padding: 40px 20px; border-radius: 12px; margin: 40px auto; max-width: 1200px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.15);">
                <div style="display: flex; flex-wrap: wrap; justify-content: space-around; gap: 20px;">
                    <div><h2 style="font-size: 2.5rem; margin-bottom: 5px; font-weight: bold;">5,000+</h2><p style="font-size: 1rem; opacity: 0.9;">Active Scholarships</p></div>
                    <div><h2 style="font-size: 2.5rem; margin-bottom: 5px; font-weight: bold;">120+</h2><p style="font-size: 1rem; opacity: 0.9;">Available Countries</p></div>
                    <div><h2 style="font-size: 2.5rem; margin-bottom: 5px; font-weight: bold;">$45M+</h2><p style="font-size: 1rem; opacity: 0.9;">Total Stipends Awarded</p></div>
                    <div><h2 style="font-size: 2.5rem; margin-bottom: 5px; font-weight: bold;">98%</h2><p style="font-size: 1rem; opacity: 0.9;">Success Rate</p></div>
                </div>
            </section>
        `;
        target.insertAdjacentHTML('afterend', statsHtml);
    }

    // 2. Eligibility System
    const statsSec = document.getElementById('stats-section');
    if (statsSec && !document.getElementById('eligibility-checker-section')) {
        const eligHtml = `
            <section id="eligibility-checker-section" style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 40px 20px; border-radius: 12px; margin: 40px auto; max-width: 1200px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h2 style="color: #1e3a8a; font-size: 1.8rem; font-weight: bold;">Check Your Scholarship Eligibility</h2>
                    <p style="color: #64748b;">Enter academic criteria to instantly evaluate profiles</p>
                </div>
                <form id="eligibilityForm" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: flex-end;">
                    <div style="flex: 1; min-width: 200px;">
                        <label style="display: block; margin-bottom: 8px; color: #334155; font-weight: 500;">Current CGPA / Percentage</label>
                        <input type="number" id="userCgpa" step="0.1" min="0" max="4" placeholder="e.g. 3.5" required style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;">
                    </div>
                    <div style="flex: 1; min-width: 200px;">
                        <label style="display: block; margin-bottom: 8px; color: #334155; font-weight: 500;">Desired Degree</label>
                        <select id="userDegree" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; background: white;">
                            <option value="bachelors">Bachelors</option>
                            <option value="masters">Masters / MS</option>
                            <option value="phd">PhD</option>
                        </select>
                    </div>
                    <div style="flex: 1; min-width: 200px;">
                        <button type="submit" style="width: 100%; background: #0d9488; color: white; padding: 13px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Evaluate Profile</button>
                    </div>
                </form>
                <div id="eligibilityResult" style="margin-top: 25px; padding: 15px; border-radius: 8px; text-align: center; display: none; font-weight: 500;"></div>
            </section>
        `;
        statsSec.insertAdjacentHTML('afterend', eligHtml);

        document.getElementById('eligibilityForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const cgpa = parseFloat(document.getElementById('userCgpa').value);
            const resultDiv = document.getElementById('eligibilityResult');
            resultDiv.style.display = 'block';
            if (cgpa >= 3.5) {
                resultDiv.style.backgroundColor = '#dcfce7'; resultDiv.style.color = '#166534';
                resultDiv.innerHTML = "🎉 Excellent Profile! You qualify for <strong>Fully Funded Scholarships</strong> like Fulbright & DAAD.";
            } else if (cgpa >= 3.0) {
                resultDiv.style.backgroundColor = '#e0f2fe'; resultDiv.style.color = '#0369a1';
                resultDiv.innerHTML = "👍 Good Profile! You qualify for <strong>75% Tuition Fee Waivers</strong> in Europe.";
            } else {
                resultDiv.style.backgroundColor = '#fef3c7'; resultDiv.style.color = '#92400e';
                resultDiv.innerHTML = "📋 Eligible! You qualify for <strong>Partial & Need-Based Funding</strong>.";
            }
        });
    }
});