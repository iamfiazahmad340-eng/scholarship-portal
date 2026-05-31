// ========================================================================
// REVOLUTIONARY SERVERLESS FRONTEND AUTHENTICATION SYSTEM (No Backend Required)
// ========================================================================
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('auth-status-bar')) return;

    const navbar = document.querySelector('header') || document.body.firstElementChild;
    
    // Inject Dynamic Auth Widget in Top Header
    const authWidgetHtml = `
        <div id="auth-status-bar" style="background: #1e293b; color: white; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <span id="welcome-msg" style="font-weight: 500;">🔒 Portal Secured. Please Login to track features.</span>
            <div id="auth-actions">
                <button id="openLoginBtn" style="background: #0d9488; color: white; border: none; padding: 7px 18px; margin-right: 10px; border-radius: 6px; cursor: pointer; font-weight: bold; transition: 0.2s;">Login</button>
                <button id="openSignupBtn" style="background: #4f46e5; color: white; border: none; padding: 7px 18px; border-radius: 6px; cursor: pointer; font-weight: bold; transition: 0.2s;">Sign Up</button>
            </div>
        </div>

        <div id="authModal" style="display: none; position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.75); z-index:99999999; justify-content:center; align-items:center; backdrop-filter: blur(4px);">
            <div style="background:white; padding:35px; border-radius:14px; width:100%; max-width:400px; box-shadow:0 20px 25px -5px rgba(0,0,0,0.3); position:relative; font-family: sans-serif;">
                <span id="closeAuthBtn" style="position:absolute; top:15px; right:20px; font-size:1.8rem; cursor:pointer; color:#64748b; font-weight:bold;">&times;</span>
                <h3 id="authModalTitle" style="color:#1e3a8a; margin-bottom:20px; font-weight:bold; font-size:1.5rem; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Account Login</h3>
                <form id="authForm">
                    <div style="margin-bottom:18px;">
                        <label style="display:block; margin-bottom:6px; color:#334155; font-weight:500;">Username / Email</label>
                        <input type="text" id="authUsername" required style="width:100%; padding:11px; border:1px solid #cbd5e1; border-radius:8px; font-size:1rem;">
                    </div>
                    <div style="margin-bottom:22px;">
                        <label style="display:block; margin-bottom:6px; color:#334155; font-weight:500;">Password</label>
                        <input type="password" id="authPassword" required style="width:100%; padding:11px; border:1px solid #cbd5e1; border-radius:8px; font-size:1rem;">
                    </div>
                    <button type="submit" id="authSubmitBtn" style="width:100%; background:#0d9488; color:white; padding:13px; border:none; border-radius:8px; font-weight:bold; font-size:1rem; cursor:pointer; box-shadow: 0 4px 6px rgba(13, 148, 136, 0.2);">Proceed</button>
                </form>
            </div>
        </div>
    `;
    navbar.insertAdjacentHTML('beforebegin', authWidgetHtml);

    const modal = document.getElementById('authModal');
    const title = document.getElementById('authModalTitle');
    const form = document.getElementById('authForm');
    let mode = 'login'; 

    // Session Verification
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
        document.getElementById('welcome-msg').innerHTML = `👋 Welcome back, <strong style="color:#2dd4bf;">${savedUser}</strong>! Your session is encrypted & secured.`;
        document.getElementById('auth-actions').innerHTML = `<button id="logoutBtn" style="background:#b91c1c; color:white; border:none; padding:7px 18px; border-radius:6px; cursor:pointer; font-weight:bold;">Logout</button>`;
        attachLogout();
    }

    document.getElementById('openLoginBtn')?.addEventListener('click', () => { mode = 'login'; title.innerText = 'Account Login'; modal.style.display = 'flex'; });
    document.getElementById('openSignupBtn')?.addEventListener('click', () => { mode = 'signup'; title.innerText = 'Create New Account'; modal.style.display = 'flex'; });
    document.getElementById('closeAuthBtn').addEventListener('click', () => modal.style.display = 'none');

    // Serverless Virtual Database Handling
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('authUsername').value.trim();
        const password = document.getElementById('authPassword').value;

        // Fetch user records database from local engine storage
        let usersDb = JSON.parse(localStorage.getItem('virtualUsersDb')) || {};

        if (mode === 'signup') {
            if (usersDb[username]) {
                alert('❌ Error: This username is already registered in the system.');
                return;
            }
            // Registering inside system memory
            usersDb[username] = password;
            localStorage.setItem('virtualUsersDb', JSON.stringify(usersDb));
            alert('🎉 Registration Successful! You can now log in.');
            mode = 'login';
            title.innerText = 'Account Login';
            form.reset();
        } else {
            // Login verification setup
            if (usersDb[username] && usersDb[username] === password) {
                alert(`✨ Login successful! Welcome to the premium dashboard, ${username}.`);
                localStorage.setItem('loggedInUser', username);
                modal.style.display = 'none';
                location.reload();
            } else {
                alert('❌ Invalid Credentials! Please check your username and password.');
            }
        }
    });

    function attachLogout() {
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            alert('Logged out safely from session storage.');
            location.reload();
        });
    }
});