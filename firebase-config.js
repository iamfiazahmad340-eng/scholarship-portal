// =============================== // Firebase Realtime Database Setup (NEW FILE) // Do NOT merge directly into your existing index.html // Link this file in HTML using: // <script type="module" src="firebase-config.js"></script> // ===============================

// 1. Import Firebase modules (modular SDK) import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"; import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// 2. Your Firebase configuration (REPLACE WITH YOUR OWN) const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT.firebaseapp.com", databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com/", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_PROJECT.appspot.com", messagingSenderId: "YOUR_SENDER_ID", appId: "YOUR_APP_ID" };

// 3. Initialize Firebase const app = initializeApp(firebaseConfig); const db = getDatabase(app);

// =============================== // 4. SAVE SCHOLARSHIP DATA // =============================== export function submitScholarship(data) { // data example: // { title, country, degree, deadline, link }

const dbRef = ref(db, "scholarships");
const newRef = push(dbRef);

set(newRef, data)
    .then(() => {
        console.log("Scholarship saved successfully");
    })
    .catch((error) => {
        console.error("Error saving data:", error);
    });



// =============================== // 5. FETCH / DISPLAY SCHOLARSHIPS // =============================== export function getScholarships(callback) { const dbRef = ref(db, "scholarships");

onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
});



// =============================== // 6. EXAMPLE USAGE (DO NOT AUTO RUN) // =============================== /* submitScholarship({ title: "Full Bright Scholarship", country: "USA", degree: "Masters", deadline: "2026-12-31", link: "https://example.com" 
// });

getScholarships((data) => { console.log(data); }); 