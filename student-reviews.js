// ==========================================
// MODULE: RESOURCE CENTER & ALUMNI SUCCESS HUB
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('country-explorer-section') || document.body.lastElementChild;
    if (!target || document.getElementById('resource-hub-section')) return;

    // 1. Resource Download Section
    const resourceHtml = `
        <section id="resource-hub-section" style="background: #f1f5f9; padding: 50px 20px; border-radius: 12px; margin: 40px auto; max-width: 1200px; text-align: center;">
            <h2 style="color: #1e3a8a; font-size: 1.8rem; font-weight: bold; margin-bottom: 10px;">Premium Application Resources</h2>
            <p style="color: #64748b; margin-bottom: 30px;">Download field-tested templates approved by scholarship alumni</p>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                <a href="#" onclick="alert('Downloading Statement of Purpose Template...'); return false;" style="background: white; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; text-decoration: none; color: #1e3a8a; font-weight: bold; width: 250px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">📝 SOP Template (.docx)</a>
                <a href="#" onclick="alert('Downloading Recommendation Letters...'); return false;" style="background: white; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; text-decoration: none; color: #0d9488; font-weight: bold; width: 250px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">✉️ LoR Guide Package</a>
                <a href="#" onclick="alert('Downloading Academic Europass CV...'); return false;" style="background: white; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; text-decoration: none; color: #4f46e5; font-weight: bold; width: 250px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">💼 Academic CV Blueprint</a>
            </div>
        </section>
    `;
    target.insertAdjacentHTML('afterend', resourceHtml);

    // 2. Testimonials Slider Components
    const resourceSec = document.getElementById('resource-hub-section');
    if (resourceSec) {
        const testHtml = `
            <section id="testimonials-section" style="background: white; padding: 50px 20px; border-radius: 12px; margin: 40px auto; max-width: 1200px; border: 1px solid #e2e8f0;">
                <div style="text-align: center; margin-bottom: 35px;">
                    <h2 style="color: #1e3a8a; font-size: 1.8rem; font-weight: bold;">Alumni Success Stories</h2>
                    <p style="color: #64748b;">Hear from students who secured fully funded rides using our portal structures</p>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 25px; justify-content: center;">
                    <div style="background: #f8fafc; padding: 25px; border-radius: 8px; max-width: 350px; border-top: 4px solid #0d9488;">
                        <p style="font-style: italic; color: #475569; margin-bottom: 15px;">"The stipend conversion module and the static checklists streamlined my DAAD submission effortlessly."</p>
                        <h4 style="font-weight: bold; color: #1e3a8a;">Ali Khan</h4><span style="font-size: 0.85rem; color: #64748b;">🇩🇪 Technical University of Munich</span>
                    </div>
                    <div style="background: #f8fafc; padding: 25px; border-radius: 8px; max-width: 350px; border-top: 4px solid #4f46e5;">
                        <p style="font-style: italic; color: #475569; margin-bottom: 15px;">"Filtering packages by CGPA ranges and region limits made discovering matching options extremely seamless."</p>
                        <h4 style="font-weight: bold; color: #1e3a8a;">Ayesha Ahmed</h4><span style="font-size: 0.85rem; color: #64748b;">🇬🇧 University of Oxford</span>
                    </div>
                </div>
            </section>
        `;
        resourceSec.insertAdjacentHTML('afterend', testHtml);
    }
});