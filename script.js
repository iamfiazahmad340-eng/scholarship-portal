// --- SCHOLARSHIP DATA HUB (Aap yahan mazeed scholarships add kar sakte hain) ---
const scholarshipsData = [
    {
        id: "fulbright-usa",
        title: "Fulbright Scholarship Program 2027",
        country: "USA",
        countryKey: "usa",
        degree: ["masters", "phd"],
        fundingType: "fully-funded",
        deadline: "Oct 15, 2026",
        shortDesc: "Offers full tuition fee, textbooks, airfare, a living stipend, and health insurance for Masters and PhD studies.",
        longDesc: "The Fulbright Scholarship is a flagship international educational exchange program sponsored by the U.S. government. It is designed to foster mutual understanding between the United States and other countries. This scholarship covers full tuition, textbooks, airfare, a monthly living stipend, and health insurance for the entire duration of studies.",
        eligibility: [
            "Must be a citizen of an eligible Fulbright partner country.",
            "Strong academic background with a valid 16 years of education for Masters, and 18 years for PhD.",
            "GRE General Test score is required.",
            "English Proficiency (TOEFL or IELTS) might be requested depending on the host university."
        ],
        documents: [
            "Application Form (Submitted online).",
            "Three Letters of Recommendation (Academic or Professional).",
            "Official Transcripts and Degrees.",
            "Research Proposal & Statement of Purpose (SOP)."
        ],
        officialLink: "https://www.foreign.fulbrightonline.org/"
    },
    {
        id: "daad-germany",
        title: "DAAD EPOS Scholarship",
        country: "Germany",
        countryKey: "germany",
        degree: ["masters"],
        fundingType: "fully-funded",
        deadline: "Varies (Aug - Dec 2026)",
        shortDesc: "Focuses on development-related postgraduate courses for professionals from developing countries at top German universities.",
        longDesc: "The DAAD EPOS program offers foreign graduates from development and newly industrialized countries all disciplines the chance to take a postgraduate or Master's degree at a state or state-recognized German university, and in exceptional cases to take a doctoral degree, and to obtain a university qualification in Germany.",
        eligibility: [
            "Bachelor's degree in a related subject (usually 4 years).",
            "At least two years of professional experience after Bachelor's.",
            "Academic degrees should normally not be older than six years.",
            "English or German language proof depending on the chosen course."
        ],
        documents: [
            "DAAD Application Form.",
            "Hand-signed CV (Europass format).",
            "Hand-signed Letter of Motivation (with reference to current occupation).",
            "Proof of employment (at least 2 years)."
        ],
        officialLink: "https://www.daad.de/"
    },
    {
        id: "rhodes-uk",
        title: "Rhodes Scholarships at Oxford",
        country: "United Kingdom",
        countryKey: "uk",
        degree: ["bachelors", "masters"],
        fundingType: "partially-funded",
        deadline: "Aug 01, 2026",
        shortDesc: "Supporting exceptional all-round students to study postgraduate courses at the University of Oxford.",
        longDesc: "The Rhodes Scholarship is the oldest and perhaps most prestigious international scholarship program, enabling outstanding young people from around the world to study at the University of Oxford.",
        eligibility: [
            "First-class honors degree or equivalent.",
            "Age criteria must be met (usually between 18 and 24 years).",
            "Exceptional leadership qualities and commitment to public service.",
            "Excellent English language proficiency."
        ],
        documents: [
            "Official University Transcripts.",
            "Birth Certificate or Proof of Nationality.",
            "Comprehensive Curriculum Vitae (CV).",
            "Personal Statement explaining your academic aims."
        ],
        officialLink: "https://www.rhodeshouse.ox.ac.uk/"
    }

    // Yeh dono blocks aapne script.js ke scholarshipsData array ke andar daalne hain:
,{
    id: "chevening-uk",
    title: "Chevening Scholarships 2027",
    country: "United Kingdom",
    countryKey: "uk",
    degree: ["masters"],
    fundingType: "fully-funded",
    deadline: "Nov 03, 2026",
    shortDesc: "UK government's global scholarship program offering future leaders the unique opportunity to study in the UK.",
    longDesc: "Chevening Scholarships are awarded to outstanding emerging leaders from all over the world to pursue a one-year master's degree in any subject at any UK university. It provides full schooling fees, a living allowance, economy class return airfare, and additional grants.",
    eligibility: [
        "Be a citizen of a Chevening-eligible country.",
        "Return to your country of citizenship for a minimum of two years after your award has ended.",
        "Have an undergraduate degree that will enable you to gain entry onto a postgraduate course at a UK university.",
        "Have at least two years (equivalent to 2,800 hours) of work experience."
    ],
    documents: [
        "Three different master's course choices at UK universities.",
        "Two reference letters in English.",
        "Valid Passport / National ID.",
        "Official University Transcripts."
    ],
    officialLink: "https://www.chevening.org/"
},
{
    id: "erasmus-europe",
    title: "Erasmus Mundus Joint Masters",
    country: "Europe",
    countryKey: "europe",
    degree: ["masters"],
    fundingType: "fully-funded",
    deadline: "Feb 15, 2027",
    shortDesc: "High-level integrated study programmes delivered jointly by an international consortium of higher education institutions.",
    longDesc: "The Erasmus Mundus Joint Master Degree (EMJMD) is a prestigious, integrated, international study programme, jointly delivered by an international consortium of higher education institutions. It aims to enhance the internationalization of higher education, students, and staff.",
    eligibility: [
        "Open to students from all over the world who hold a first higher education degree.",
        "Must not have targeted or received more than one Erasmus Mundus scholarship before.",
        "Excellent academic record and motivation letter.",
        "English proficiency certificate (IELTS/TOEFL) is highly recommended."
    ],
    documents: [
        "Motivation Letter (SOP).",
        "Two Academic Recommendation Letters.",
        "Curriculum Vitae (CV) usually in Europass format.",
        "Degree Certificate and Academic Transcripts."
    ],
    officialLink: "https://erasmus-plus.ec.europa.eu/"
},
{
    id: "nayi-scholarship-id",
    title: "Scholarship ka Naam Yahan Likhein",
    shortDesc: "Choti si tafseel yahan likhein.",
    longDesc: "Poori tafseel yahan likhein jo details page par dikhegi.",
    countryKey: "usa", // Ya 'germany', 'china' jo aapne dropdown mein rakha hai
    deadline: "December 31, 2026"
}

];

// --- HOME PAGE LOGIC (Render Cards and Handle Filters) ---
document.addEventListener('DOMContentLoaded', () => {
    const scholarshipGrid = document.getElementById('scholarshipGrid');
    
    // Sirf Home Page par cards render karein
    if (scholarshipGrid) {
        renderScholarshipCards(scholarshipsData);
        
        const filterForm = document.getElementById('filterForm');
        if (filterForm) {
            filterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                filterScholarships();
            });
        }

        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', filterScholarships);
        }
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

        function renderScholarshipCards(data) {
    const scholarshipGrid = document.getElementById('scholarshipGrid');
    if (!scholarshipGrid) return;

    scholarshipGrid.innerHTML = ''; 
    const savedBookmarks = JSON.parse(localStorage.getItem('savedScholarships')) || [];

    data.forEach(item => {
        const degreeClass = item.degree.join(' '); 
        const isBookmarked = savedBookmarks.includes(item.id);
        const heartIcon = isBookmarked ? 'fas fa-heart' : 'far fa-heart';
        const activeClass = isBookmarked ? 'bookmarked' : '';

        // --- COUNTDOWN TIMER CALCULATION ---
        const deadlineDate = new Date(item.deadline.split('(')[0]); // Date extract karne ke liye
        const today = new Date();
        const timeDiff = deadlineDate - today;
        let countdownText = "";

        if (timeDiff > 0) {
            const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            if (daysLeft > 30) {
                const months = Math.floor(daysLeft / 30);
                countdownText = `<i class="far fa-clock"></i> ${months} month(s) left`;
            } else {
                countdownText = `<i class="far fa-clock"></i> ${daysLeft} days left`;
            }
        } else {
            countdownText = `<span style="color: #e53e3e;"><i class="fas fa-exclamation-circle"></i> Deadline Passed</span>`;
        }

        scholarshipGrid.innerHTML += `
            <div class="scholarship-card" 
                 data-degree="${degreeClass}" 
                 data-country="${item.countryKey}" 
                 data-type="${item.fundingType}">
                <button class="bookmark-btn ${activeClass}" onclick="toggleBookmark('${item.id}', this)">
                    <i class="${heartIcon}"></i>
                </button>
                <span class="countdown-badge">${countdownText}</span>
                <h3>${item.title}</h3>
                <p>${item.shortDesc}</p>
                <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span style="font-size: 13px; color: #718096;"><i class="fas fa-calendar-alt"></i> ${item.deadline}</span>
                    <a href="details.html?id=${item.id}" class="view-details-btn">View Details</a>
                </div>
            </div>
        `;
    });
}


// Filtering Logic
function filterScholarships() {
    const searchText = document.getElementById('searchInput').value.toLowerCase().trim();
    const selectedDegree = document.getElementById('degreeFilter').value;
    const selectedCountry = document.getElementById('countryFilter').value;
    const selectedType = document.getElementById('typeFilter').value;
    const cards = document.querySelectorAll('.scholarship-card');

    cards.forEach(card => {
        const cardDegrees = card.getAttribute('data-degree').split(' ');
        const cardCountry = card.getAttribute('data-country');
        const cardType = card.getAttribute('data-type');
        const cardTitle = card.querySelector('h3').innerText.toLowerCase();
        const cardDesc = card.querySelector('p').innerText.toLowerCase();

        const matchesSearch = searchText === "" || cardTitle.includes(searchText) || cardDesc.includes(searchText);
        const matchesDegree = selectedDegree === "" || cardDegrees.includes(selectedDegree);
        const matchesCountry = selectedCountry === "" || cardCountry === selectedCountry;
        const matchesType = selectedType === "" || cardType === selectedType;

        if (matchesSearch && matchesDegree && matchesCountry && matchesType) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
    checkVisibleCards();
}

// --- ELIGIBILITY QUIZ LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const elgForm = document.getElementById('eligibilityForm');
    const quizResult = document.getElementById('quizResult');

    if (elgForm) {
        elgForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cgpa = parseFloat(document.getElementById('quizCgpa').value);
            const englishTest = document.getElementById('quizEnglish').value;

            quizResult.style.display = 'block';

            if (cgpa >= 3.5 && englishTest === 'yes') {
                quizResult.style.backgroundColor = '#c6f6d5';
                quizResult.style.color = '#22543d';
                quizResult.innerHTML = '🎉 <strong>Excellent Profile!</strong> Aap Fulbright (USA) aur Rhodes (UK) jaisi top prestigious scholarships ke liye highly eligible hain.';
            } else if (cgpa >= 3.0) {
                quizResult.style.backgroundColor = '#feebc8';
                quizResult.style.color = '#744210';
                quizResult.innerHTML = '👍 <strong>Good Profile!</strong> Aap Germany (DAAD) aur Europe ke kafi programs ke liye eligible hain. English test score behtar karne se aapke chances barh jayenge.';
            } else {
                quizResult.style.backgroundColor = '#fed7d7';
                quizResult.style.color = '#742a2a';
                quizResult.innerHTML = 'ℹ️ <strong>Profile Needs Improvement:</strong> Fully funded scholarships ke liye kam az kam 3.0 CGPA behtar samjha jata hai. Aap partial ya tuition-waiver opportunities check kar sakte hain.';
            }
        });
    }
});

// ==========================================
// ADVANCED FEATURE 1: DARK MODE TOGGLE LOGIC
// ==========================================
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';
    const themeBtn = document.getElementById('themeToggle');

    if (currentTheme !== 'dark') {
        targetTheme = 'dark';
        if(themeBtn) themeBtn.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
    } else {
        targetTheme = 'light';
        if(themeBtn) themeBtn.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
}

// LocalStorage se saved theme load karna page load par
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.innerHTML = savedTheme === 'dark' 
                ? `<i class="fas fa-sun"></i> Light Mode` 
                : `<i class="fas fa-moon"></i> Dark Mode`;
        }
    }
});

// ==============================================
// ADVANCED FEATURE 2: AUTO-COMPLETE SUGGESTIONS
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('searchSuggestions');

    if (searchInput && suggestionsBox) {
        searchInput.addEventListener('input', () => {
            const val = searchInput.value.toLowerCase().trim();
            suggestionsBox.innerHTML = '';

            if (val === '') {
                suggestionsBox.style.display = 'none';
                return;
            }

            // Scholarships data array se matching titles nikalna
            const matches = scholarshipsData.filter(item => 
                item.title.toLowerCase().includes(val)
            );

            if (matches.length > 0) {
                matches.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.innerText = item.title;
                    
                    // Click karne par input fill ho jaye aur search ho jaye
                    div.addEventListener('click', () => {
                        searchInput.value = item.title;
                        suggestionsBox.style.display = 'none';
                        filterScholarships(); // Filter apply kiya
                    });
                    suggestionsBox.appendChild(div);
                });
                suggestionsBox.style.display = 'block';
            } else {
                suggestionsBox.style.display = 'none';
            }
        });

        // Agar user kahin aur click kare toh box band ho jaye
        document.addEventListener('click', (e) => {
            if (e.target !== searchInput) {
                suggestionsBox.style.display = 'none';
            }
        });
    }
});

// Function: Check karna ke screen par koi card bacha ya nahi
function checkVisibleCards() {
    const cards = document.querySelectorAll('.scholarship-card');
    const noResultsDiv = document.getElementById('noResults');
    let visibleCount = 0;

    cards.forEach(card => {
        if (card.style.display !== 'none') {
            visibleCount++;
        }
    });

    if (visibleCount === 0) {
        if (noResultsDiv) noResultsDiv.style.display = 'block';
    } else {
        if (noResultsDiv) noResultsDiv.style.display = 'none';
    }
}

// Function: Reset Button dabane par sab wapis normal karne ke liye
function resetPortalFilters() {
    const form = document.getElementById('filterForm');
    if (form) form.reset(); // Saare input dropdowns khali karein

    const cards = document.querySelectorAll('.scholarship-card');
    cards.forEach(card => {
        card.style.display = 'flex'; // Saare cards dubara show karein
    });

    const noResultsDiv = document.getElementById('noResults');
    if (noResultsDiv) noResultsDiv.style.display = 'none';
}

// ========================================================
// PREMIUM FEATURE: DYNAMIC BACK TO TOP BUTTON WITH PROGRESS
// (Auto-injected via JavaScript - Single File Addition)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic HTML Injection (Bina HTML file chhede button lagana)
    const topBtnContainer = document.createElement('div');
    topBtnContainer.id = 'scrollBackToTop';
    topBtnContainer.innerHTML = `
        <svg class="progress-circle" width="50" height="50" viewBox="0 0 50 50">
            <circle class="progress-bg" cx="25" cy="25" r="22" fill="none" stroke="#e2e8f0" stroke-width="4"/>
            <circle class="progress-bar" cx="25" cy="25" r="22" fill="none" stroke="#002d62" stroke-width="4" 
                    stroke-dasharray="138" stroke-dashoffset="138" stroke-linecap="round"/>
        </svg>
        <button class="arrow-click-btn" aria-label="Back to top">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;
    document.body.appendChild(topBtnContainer);

    // 2. Dynamic CSS Injection (Bina CSS file chhede style lagana)
    const style = document.createElement('style');
    style.textContent = `
        #scrollBackToTop {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s, transform 0.2s;
        }
        #scrollBackToTop.show-btn {
            opacity: 1;
            visibility: visible;
        }
        #scrollBackToTop:hover {
            transform: scale(1.1);
        }
        .progress-circle {
            transform: rotate(-90deg);
            position: absolute;
            top: 0;
            left: 0;
        }
        .arrow-click-btn {
            background: #002d62;
            color: white;
            border: none;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            z-index: 2;
            cursor: pointer;
        }
        [data-theme="dark"] .arrow-click-btn {
            background: #4a5568;
        }
        [data-theme="dark"] .progress-bar {
            stroke: #edf2f7;
        }
        [data-theme="dark"] .progress-bg {
            stroke: #2d3748;
        }
    `;
    document.head.appendChild(style);

    // 3. Scroll and Progress Logic
    const progressBar = topBtnContainer.querySelector('.progress-bar');
    const totalLength = 138; // 2 * Math.PI * r (2 * 3.1415 * 22)

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (docHeight > 0) {
            // Calculate progress percentage
            const scrollPercent = scrollTop / docHeight;
            const offset = totalLength - (scrollPercent * totalLength);
            progressBar.style.strokeDashoffset = offset;

            // Show or hide button based on scroll position
            if (scrollTop > 300) {
                topBtnContainer.classList.add('show-btn');
            } else {
                topBtnContainer.classList.remove('show-btn');
            }
        }
    });

    // 4. Click Execution (Smooth Scroll to Top)
    topBtnContainer.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ========================================================
// PREMIUM FEATURE: LIVE NETWORK STATUS & SPEED MONITOR
// (Auto-injected via JavaScript - Single File Addition)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Status Bar HTML Injection
    const statusBar = document.createElement('div');
    statusBar.id = 'networkStatusBar';
    statusBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        z-index: 9999;
        transition: transform 0.3s ease, background-color 0.3s;
        transform: translateY(-100%);
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    `;
    document.body.appendChild(statusBar);

    // 2. Helper Functions to Show/Hide Status
    function updateOnlineStatus() {
        if (navigator.onLine) {
            // Jab internet wapis aaye
            statusBar.style.backgroundColor = '#48bb78'; // Green
            statusBar.style.color = 'white';
            statusBar.innerHTML = `<i class="fas fa-wifi"></i> Internet Connected! Portal is fully active.`;
            statusBar.style.transform = 'translateY(0)';
            
            // 3 seconds baad bar ko chhupa do
            setTimeout(() => {
                statusBar.style.transform = 'translateY(-100%)';
            }, 3000);
        } else {
            // Jab internet chala jaye
            statusBar.style.backgroundColor = '#f56565'; // Red
            statusBar.style.color = 'white';
            statusBar.innerHTML = `<i class="fas fa-wifi-slash"></i> Connection Lost! Please check your router or internet speed.`;
            statusBar.style.transform = 'translateY(0)';
        }
    }

    // 3. Connection Event Listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // 4. Smart Speed Check (Optional Notification for Slow Internet)
    if (navigator.connection) {
        const connection = navigator.connection;
        function checkNetworkSpeed() {
            // Agar bandwidth 1.5 Mbps se kam ho (Slow Connection)
            if (connection.downlink < 1.5) {
                statusBar.style.backgroundColor = '#ed8936'; // Orange
                statusBar.style.color = 'white';
                statusBar.innerHTML = `<i class="fas fa-tachometer-alt"></i> Slow internet detected. Scholarship images or details might load slowly.`;
                statusBar.style.transform = 'translateY(0)';
                
                setTimeout(() => {
                    statusBar.style.transform = 'translateY(-100%)';
                }, 5000);
            }
        }
        // Connection change hone par speed track karein
        connection.addEventListener('change', checkNetworkSpeed);
        // Page load par aik dafa check karein
        checkNetworkSpeed();
    }
});

// ========================================================
// PREMIUM FEATURE: DYNAMIC LOGIN & REGISTER MODAL SYSTEM
// (Auto-injected via JavaScript - Single File Addition)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Modal HTML Structure Injection
    const modalContainer = document.createElement('div');
    modalContainer.id = 'authModalOverlay';
    modalContainer.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
        display: flex; align-items: center; justify-content: center;
        z-index: 10000; opacity: 0; visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    `;

    modalContainer.innerHTML = `
        <div id="authModalCard" style="background: white; padding: 35px; border-radius: 12px; width: 100%; max-width: 400px; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.2); transform: scale(0.8); transition: transform 0.3s ease;">
            <button id="closeAuthModal" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 20px; cursor: pointer; color: #a0aec0;">&times;</button>
            <h2 id="modalTitle" style="color: #002d62; margin-bottom: 20px; text-align: center; font-size: 24px;">Login</h2>
            
            <form id="authForm" onsubmit="event.preventDefault(); handleAuthSubmit();">
                <div style="margin-bottom: 15px;" id="regNameGroup">
                    <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #4a5568; font-size: 14px;">Full Name</label>
                    <input type="text" id="authName" placeholder="Enter your name" style="width: 100%; padding: 10px; border: 1px solid #cbd5e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #4a5568; font-size: 14px;">Email Address</label>
                    <input type="email" id="authEmail" required placeholder="name@example.com" style="width: 100%; padding: 10px; border: 1px solid #cbd5e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #4a5568; font-size: 14px;">Password</label>
                    <input type="password" required placeholder="••••••••" style="width: 100%; padding: 10px; border: 1px solid #cbd5e0; border-radius: 6px;">
                </div>
                <button type="submit" id="authSubmitBtn" style="width: 100%; background: #002d62; color: white; border: none; padding: 12px; font-size: 16px; font-weight: 600; border-radius: 6px; cursor: pointer; transition: background 0.2s;">Login</button>
            </form>
            
            <p id="toggleAuthMode" style="text-align: center; margin-top: 15px; font-size: 14px; color: #718096; cursor: pointer; font-weight: 500;">Don't have an account? <span style="color: #002d62; font-weight: 600;">Register</span></p>
        </div>
    `;
    document.body.appendChild(modalContainer);

    // Dark mode support injection for Modal Card
    const styleRule = document.createElement('style');
    styleRule.textContent = `
        [data-theme="dark"] #authModalCard { background: #2d3748 !important; color: #f7fafc !important; }
        [data-theme="dark"] #authModalCard label { color: #cbd5e0 !important; }
        [data-theme="dark"] #authModalCard input { background: #1a202c; border-color: #4a5568; color: white; }
        [data-theme="dark"] #authSubmitBtn { background: #4a5568; }
    `;
    document.head.appendChild(styleRule);

    // 2. Variables for toggling mode
    let currentMode = 'login'; // Can be 'login' or 'register'
    const authOverlay = document.getElementById('authModalOverlay');
    const authCard = document.getElementById('authModalCard');
    const regNameGroup = document.getElementById('regNameGroup');

    // 3. Setup Click Events on YOUR existing Navbar links
    // Dhoondte hain jahan bhi website me Login ya Register likha hai
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        const text = link.innerText.toLowerCase().trim();
        if (text.includes('login')) {
            link.addEventListener('click', (e) => { e.preventDefault(); openModal('login'); });
        } else if (text.includes('register')) {
            link.addEventListener('click', (e) => { e.preventDefault(); openModal('register'); });
        }
    });

    // 4. Modal Open/Close Logic functions
    window.openModal = function(mode) {
        currentMode = mode;
        authOverlay.style.opacity = '1';
        authOverlay.style.visibility = 'visible';
        authCard.style.transform = 'scale(1)';
        
        if (currentMode === 'login') {
            document.getElementById('modalTitle').innerText = 'Login';
            document.getElementById('authSubmitBtn').innerText = 'Login to Dashboard';
            regNameGroup.style.display = 'none';
            document.getElementById('toggleAuthMode').innerHTML = `Don't have an account? <span style="color: #002d62; font-weight:600;">Register</span>`;
        } else {
            document.getElementById('modalTitle').innerText = 'Create Account';
            document.getElementById('authSubmitBtn').innerText = 'Register Now';
            regNameGroup.style.display = 'block';
            document.getElementById('toggleAuthMode').innerHTML = `Already have an account? <span style="color: #002d62; font-weight:600;">Login</span>`;
        }
    };

    function closeModal() {
        authOverlay.style.opacity = '0';
        authOverlay.style.visibility = 'hidden';
        authCard.style.transform = 'scale(0.8)';
    }

    document.getElementById('closeAuthModal').addEventListener('click', closeModal);
    authOverlay.addEventListener('click', (e) => { if (e.target === authOverlay) closeModal(); });

    // Inline Switch toggle click inside modal
    document.getElementById('toggleAuthMode').addEventListener('click', () => {
        if (currentMode === 'login') {
            openModal('register');
        } else {
            openModal('login');
        }
    });

    // 5. Submit Event handling
    window.handleAuthSubmit = function() {
        const email = document.getElementById('authEmail').value;
        closeModal();
        
        // Show success alert message bar
        const successToast = document.createElement('div');
        successToast.style.cssText = `
            position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
            background: #28a745; color: white; padding: 12px 30px; border-radius: 30px;
            font-weight: 600; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 100000;
            transition: opacity 0.3s;
        `;
        successToast.innerText = currentMode === 'login' 
            ? `Successfully Logged In as ${email}!` 
            : `Account Registered Successfully! Welcome aboard.`;
        
        document.body.appendChild(successToast);
        document.getElementById('authForm').reset();
        
        setTimeout(() => { successToast.style.opacity = '0'; setTimeout(() => successToast.remove(), 300); }, 3000);
    };
});


// ========================================================
// PREMIUM FEATURE: INSTANT ELIGIBILITY CHECKER & MATCHING
// (Auto-injected via JavaScript - Single File Addition)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Apni existing HTML form aur inputs ko link karna
    // Taake image 4ab64940 ke mutabik inputs dynamic ho sakein
    const eligibilityForm = document.querySelector('form button, #checkEligibilityBtn') || document.querySelector('.eligibility-card button');
    const cgpaInput = document.querySelector('input[placeholder*="3.4"]') || document.querySelector('input[type="number"]');
    const testSelect = document.querySelector('select') || document.querySelector('.eligibility-card select');

    // Agar safely HTML elements milte hain toh logic attach karein
    if (cgpaInput) {
        // Form submit ya button click ko handle karna
        const parentForm = cgpaInput.closest('form') || cgpaInput.closest('div');
        
        if (parentForm) {
            parentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                processEligibility();
            });
            
            // Agar button direct click ho
            const clickBtn = parentForm.querySelector('button');
            if (clickBtn) {
                clickBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    processEligibility();
                });
            }
        }
    }

    // 2. CORE ELIGIBILITY EVALUATION LOGIC
    window.processEligibility = function() {
        // Values read karna
        const cgpaVal = parseFloat(cgpaInput ? cgpaInput.value : 0);
        const hasEnglishTest = testSelect ? (testSelect.value.toLowerCase().includes('yes') || testSelect.value === '1') : true;

        if (!cgpaVal || cgpaVal < 0 || cgpaVal > 4.0) {
            alert("Please enter a valid CGPA between 0.0 and 4.0");
            return;
        }

        // Scholarships check karne ke liye eligibility rules set karna
        const cards = document.querySelectorAll('.scholarship-card');
        let matchedCount = 0;

        cards.forEach(card => {
            const titleEl = card.querySelector('h3');
            const cardTitle = titleEl ? titleEl.innerText.toLowerCase() : '';
            
            let isEligible = true;

            // Rule 1: Fulbright ke liye minimum 3.0 CGPA aur English Test lazmi hai
            if (cardTitle.includes('fulbright')) {
                if (cgpaVal < 3.0 || !hasEnglishTest) isEligible = false;
            }
            // Rule 2: Chevening ke liye minimum 2.8 CGPA chahiye
            else if (cardTitle.includes('chevening')) {
                if (cgpaVal < 2.8) isEligible = false;
            }
            // Rule 3: Erasmus ke liye minimum 2.5 CGPA chahiye
            else if (cardTitle.includes('erasmus')) {
                if (cgpaVal < 2.5) isEligible = false;
            }

            // Screen par filter apply karna
            if (isEligible) {
                card.style.display = 'flex';
                card.style.border = '2px solid #48bb78'; // Green border for matched ones
                matchedCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Result Notification Banner dynamically top par show karna
        const resultNotification = document.createElement('div');
        resultNotification.style.cssText = `
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background: ${matchedCount > 0 ? '#002d62' : '#e53e3e'}; color: white; 
            padding: 15px 35px; border-radius: 30px; font-weight: 600; 
            box-shadow: 0 5px 20px rgba(0,0,0,0.3); z-index: 100000; text-align: center;
        `;
        
        resultNotification.innerHTML = matchedCount > 0 
            ? `<i class="fas fa-check-circle"></i> Found ${matchedCount} Scholarships Matching Your Profile!`
            : `<i class="fas fa-times-circle"></i> Sorry, no scholarships match your criteria right now.`;
            
        document.body.appendChild(resultNotification);

        // Smooth scroll karke grid ki taraf le jana taake result dikhe
        const grid = document.getElementById('scholarshipGrid');
        if (grid) {
            grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // 4 seconds baad toast badal dena
        setTimeout(() => {
            resultNotification.style.opacity = '0';
            resultNotification.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                resultNotification.remove();
                // Border color wapis normal karna
                cards.forEach(card => card.style.border = '1px solid #e2e8f0');
            }, 500);
        }, 4000);
    };
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Checklist Box ka Container dynamically website ke bottom me insert karna
    const gridSection = document.getElementById('scholarshipGrid')?.parentElement;
    if (!gridSection) return;

    const checklistWrapper = document.createElement('div');
    checklistWrapper.id = 'applicationChecklistContainer';
    checklistWrapper.style.cssText = `
        max-width: 1200px;
        margin: 40px auto;
        padding: 25px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        font-family: inherit;
    `;

    checklistWrapper.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; border-bottom: 2px solid #edf2f7; padding-bottom: 15px;">
            <div style="background: #002d62; color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                <i class="fas fa-tasks"></i>
            </div>
            <div>
                <h3 style="color: #002d62; margin: 0; font-size: 22px;">My Application Document Tracker</h3>
                <p style="color: #718096; margin: 5px 0 0 0; font-size: 14px;">Select core documents you have prepared to track your international application readiness.</p>
            </div>
        </div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 20px;" id="checklistItemsGrid">
            </div>

        <div style="margin-top: 20px; background: #f7fafc; padding: 15px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;" id="progressChecklistBarRow">
            <span style="font-weight: 600; color: #4a5568; font-size: 14px;">Preparation Progress:</span>
            <div style="flex: 1; margin: 0 20px; background: #e2e8f0; height: 10px; border-radius: 10px; overflow: hidden;">
                <div id="checklistProgressBar" style="width: 0%; height: 100%; background: #48bb78; transition: width 0.3s ease;"></div>
            </div>
            <span id="checklistPercentText" style="font-weight: 700; color: #48bb78; font-size: 14px;">0%</span>
        </div>
    `;
    
    gridSection.appendChild(checklistWrapper);

    // Support dark mode styling dynamically
    const checklistStyle = document.createElement('style');
    checklistStyle.textContent = `
        [data-theme="dark"] #applicationChecklistContainer { background: #2d3748 !important; }
        [data-theme="dark"] #applicationChecklistContainer h3 { color: #edf2f7 !important; }
        [data-theme="dark"] #progressChecklistBarRow { background: #1a202c !important; }
        .checklist-item-box {
            background: #f7fafc; padding: 15px; border-radius: 8px; width: calc(33.33% - 14px); 
            min-width: 250px; display: flex; align-items: center; gap: 12px; cursor: pointer; transition: background 0.2s;
        }
        [data-theme="dark"] .checklist-item-box { background: #1a202c; color: white; }
        .checklist-item-box input { width: 18px; height: 18px; cursor: pointer; }
    `;
    document.head.appendChild(checklistStyle);

    // 2. Standard Global Global Documents Data
    const coreDocuments = [
        { id: 'doc_passport', label: 'Valid International Passport' },
        { id: 'doc_transcripts', label: 'Official Academic Transcripts' },
        { id: 'doc_lor', label: 'Letters of Recommendation (LOR)' },
        { id: 'doc_cv', label: 'Professional Europass CV' },
        { id: 'doc_sop', label: 'Statement of Purpose / Motivation Letter' },
        { id: 'doc_ielts', label: 'English Proficiency Test (IELTS/TOEFL)' }
    ];

    const itemsGrid = document.getElementById('checklistItemsGrid');
    
    // LocalStorage se puraana data nikalna
    const savedDocsStatus = JSON.parse(localStorage.getItem('userPreparedDocs')) || {};

    // 3. Render Checklist Items
    coreDocuments.forEach(doc => {
        const isChecked = savedDocsStatus[doc.id] ? 'checked' : '';
        
        const itemBox = document.createElement('div');
        itemBox.className = 'checklist-item-box';
        itemBox.innerHTML = `
            <input type="checkbox" id="${doc.id}" ${isChecked}>
            <label for="${doc.id}" style="cursor:pointer; font-size: 14px; font-weight: 500; width: 100%;">${doc.label}</label>
        `;
        
        itemsGrid.appendChild(itemBox);

        // Checkbox click event listener
        const checkbox = itemBox.querySelector('input');
        checkbox.addEventListener('change', () => {
            savedDocsStatus[doc.id] = checkbox.checked;
            localStorage.setItem('userPreparedDocs', JSON.stringify(savedDocsStatus));
            calculateProgress();
        });
    });

    // 4. Progress Percentage Calculation Function
    function calculateProgress() {
        const checkboxes = itemsGrid.querySelectorAll('input[type="checkbox"]');
        const total = checkboxes.length;
        let checkedCount = 0;

        checkboxes.forEach(cb => {
            if (cb.checked) checkedCount++;
        });

        const percent = total > 0 ? Math.round((checkedCount / total) * 100) : 0;
        
        const progressBar = document.getElementById('checklistProgressBar');
        const percentText = document.getElementById('checklistPercentText');
        
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (percentText) percentText.innerText = `${percent}%`;
    }

    // Initial load par progress calculate karein
    calculateProgress();
});

// Data push karne ka tareeqa
async function addScholarship(scholarshipData) {
    const response = await fetch('https://YOUR_DB_URL.firebaseio.com/scholarships.json', {
        method: 'POST',
        body: JSON.stringify(scholarshipData)
    });
    console.log("Scholarship Added!");
}

// Example usage:
addScholarship({
    name: "Punjab Education Scholarship",
    amount: "50,000 PKR",
    deadline: "2026-12-31"
});

const list = document.getElementById('data-list');

// Error ko screen par dikhane wala function
function showError(msg) {
    list.innerHTML = "<div style='color:red; border:1px solid red; padding:10px;'>" + msg + "</div>";
}

// Data fetch karo
fetch("https://YOUR_DATABASE_URL_HERE.firebaseio.com/queries.json")
.then(response => {
    if (!response.ok) {
        showError("Error: Database link check karo, status code: " + response.status);
    }
    return response.json();
})
.then(data => {
    if (!data) {
        list.innerHTML = "Database khali hai.";
        return;
    }
    list.innerHTML = "";
    for (let key in data) {
        list.innerHTML += `<p><b>${data[key].name}:</b> ${data[key].msg}</p>`;
    }
})
.catch(err => {
    showError("Network Error: Internet ya URL mein masla hai.");
});

const faqItems = document.querySelectorAll(".faq");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.querySelector(".faq-question").addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Deadline date set karein (yahan apni date likhein)
const deadline = new Date("June 30, 2026 23:59:59").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

function getRecommendations() {
    let major = document.getElementById("major").value.toLowerCase();
    let gpa = parseFloat(document.getElementById("gpa").value);
    let result = document.getElementById("matchResult");

    // Sample Scholarship Data
    const scholarships = [
        { name: "DAAD Scholarship", minGPA: 3.0, field: "computer science" },
        { name: "Global UGRAD", minGPA: 2.5, field: "general" },
        { name: "Chevening Scholarship", minGPA: 2.5, field: "general" }
    ];

    let found = scholarships.filter(s => s.minGPA <= gpa && (s.field === major || s.field === "general"));

    if (found.length > 0) {
        result.innerHTML = "Recommended for you: " + found.map(s => s.name).join(", ");
    } else {
        result.innerHTML = "No exact match found, try broadening your search.";
    }
}

// Form submit handler (do not include <script> tags inside this JS file)
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Success! Your application has been submitted.");
    document.getElementById("myForm").reset();
    return false; // prevent form submission
}

function submitForm(event) {
    // Ab yahan 'event' parameter kaam karega
    event.preventDefault(); 
    
    alert("Success! Your application has been submitted.");
    
    // Agar aap chahti hain ke data mit jaye to ye line rakhein
    // Agar data waisa hi rakhna hai to ye line hata dein
    document.getElementById("myForm").reset();
}
document.getElementById("searchButton").addEventListener("click", function() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".scholarship-card");

    cards.forEach(card => {
        let cardName = card.getAttribute("data-name").toLowerCase();
        
        // Agar naam match kare to show karo, warna hide karo
        if (cardName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
// ... baaki ka code ...

// Search form submit listener
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    filterScholarships(); 
});

// ... baaki ka code ...
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Yeh line page refresh hone se rok degi
        });
    });
});