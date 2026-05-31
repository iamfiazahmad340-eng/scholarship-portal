// ========================================================
// ERASMUS IMAGE FORCE PATCH (Separate New File)
// ========================================================
(function() {
    function forceErasmusImage() {
        const cards = document.querySelectorAll('.scholarship-card');
        cards.forEach(card => {
            const titleEl = card.querySelector('h3');
            if (titleEl && titleEl.innerText.toLowerCase().includes('erasmus')) {
                
                // Erasmus ki absolute correct educational image URL
                const correctUrl = "https://images.unsplash.com/photo-1541178735493-479c3a2839f2?w=500&auto=format&fit=crop&q=60";
                
                // 1. Agar addon file ne broken image (`/Scholarship Banner`) banayi hui hai
                const addonImg = card.querySelector('.addon-banner-img');
                if (addonImg) {
                    addonImg.src = correctUrl;
                }
                
                // 2. Agar default image tag bna hua hai usko check karna
                const standardImg = card.querySelector('img');
                if (standardImg) {
                    standardImg.src = correctUrl;
                }
            }
        });
    }

    // Page load hone par aur live filters change hone par baar-baar check karega
    window.addEventListener('load', () => setTimeout(forceErasmusImage, 300));
    setInterval(forceErasmusImage, 1000); // Har 1 second baad force reload karega taake pic gayab na ho
})();