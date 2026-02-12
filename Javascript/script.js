document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENUS & CART ---
    const menuBtn = document.getElementById('menu-btn');
    const cartBtn = document.getElementById('cart-btn');
    const utilityMenu = document.getElementById('utility-menu');
    const cartMenu = document.getElementById('cart-menu');
    const closeUtility = document.getElementById('close-utility');
    const closeCart = document.getElementById('close-cart');
    
    // Cross-links
    const openCartFromMenu = document.getElementById('open-cart-from-menu');
    const openMenuFromCart = document.getElementById('open-menu-from-cart');

    function toggleMenu(menu, show) {
        if(show) menu.classList.add('active');
        else menu.classList.remove('active');
    }

    // Open/Close Events
    if(menuBtn) menuBtn.addEventListener('click', () => { toggleMenu(utilityMenu, true); toggleMenu(cartMenu, false); });
    if(cartBtn) cartBtn.addEventListener('click', () => { toggleMenu(cartMenu, true); toggleMenu(utilityMenu, false); });
    
    if(closeUtility) closeUtility.addEventListener('click', () => { toggleMenu(utilityMenu, false); });
    if(closeCart) closeCart.addEventListener('click', () => { toggleMenu(cartMenu, false); });

    if(openCartFromMenu) openCartFromMenu.addEventListener('click', () => { toggleMenu(cartMenu, true); toggleMenu(utilityMenu, false); });
    if(openMenuFromCart) openMenuFromCart.addEventListener('click', () => { toggleMenu(utilityMenu, true); toggleMenu(cartMenu, false); });

    // --- 2. ACCORDIONS (Product Pages) ---
    const accHeaders = document.querySelectorAll('.accordion-header');
    
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('span');
            
            if (content.style.display === "block") {
                content.style.display = "none";
                if(icon) icon.textContent = "+";
            } else {
                content.style.display = "block";
                if(icon) icon.textContent = "-";
            }
        });
    });

    /* --- COUNTDOWN TIMER --- */
    function startCountdown() {
        var countDownDate = new Date(); 
        countDownDate.setDate(countDownDate.getDate() + 3); 

        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (document.getElementById("days")) {
                document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
                document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
                document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
                document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;
            }

            if (distance < 0) {
                clearInterval(x);
                if (document.getElementById("countdown")) {
                    document.getElementById("countdown").innerHTML = "RELEASED";
                }
            }
        }, 1000);
    }
    startCountdown();
});

/* --- 3. RANDOM FORUM POST GENERATOR --- */
const forumFeed = document.getElementById('forum-feed');

if (forumFeed) {
    const topics = [
        "What makes a watch feel special beyond specs?",
        "Thoughts on the new Novus Flux trend?",
        "Is the SeaMariner actually worth the price tag?",
        "Help me identify my father's timepiece.",
        "Leather vs. NATO straps for daily wear?",
        "The debate: Swiss movement vs. Japanese precision.",
        "Just acquired my grail watch! (Photos)",
        "Maintenance tips for automatic calibers.",
        "Do you think Bayside Blue should be added to colors?",
        "Why do we still love mechanical watches in a digital age?",
        "My watch broke during a fight, where to fix?",
        "HELP!!! I can’t decide what color I should get"
    ];

    const users = [
        { name: "MartinDLux", initial: "MDL" },
        { name: "ChronoTrigger", initial: "CT" },
        { name: "HorologyFan", initial: "HF" },
        { name: "WristCheck", initial: "WC" },
        { name: "TimeKeeper88", initial: "TK" },
        { name: "LuxeCollector", initial: "LC" },
        { name: "BrainOConner", initial: "BOC" },
        { name: "JamesBond", initial: "JB" },
        { name: "VintageSoul", initial: "VS" }
    ];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let htmlContent = "";
    for (let i = 0; i < 6; i++) {
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const replies = getRandomInt(1, 45); 
        const hoursAgo = getRandomInt(1, 12); 

        htmlContent += `
            <div class="forum-post">
                <div class="avatar-circle">${randomUser.initial}</div>
                <div class="post-content">
                    <h4>${randomTopic}</h4>
                    <div class="post-meta">${randomUser.name} &nbsp;&nbsp; ${replies} Replies</div>
                </div>
            </div>
            <div class="post-time">Last posted ${hoursAgo} hours ago</div>
        `;
    }
    forumFeed.innerHTML = htmlContent;
}

/* --- 4. REGISTRATION API --- */
document.addEventListener('DOMContentLoaded', () => {

    const registerForm = document.getElementById('registration-form');

    if (!registerForm) return;

    registerForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get Elements
        const firstNameEl = document.getElementById('FirstName');
        const lastNameEl = document.getElementById('LastName');
        const emailEl = document.getElementById('email');
        const mobileEl = document.getElementById('mobile');
        const passEl = document.getElementById('password');
        const confirmPassEl = document.getElementById('confirm-password');

        // Safety check
        if (!firstNameEl || !lastNameEl || !emailEl || !mobileEl || !passEl || !confirmPassEl) {
            console.error('Missing elements:', {
                firstNameEl,
                lastNameEl,
                emailEl,
                mobileEl,
                passEl,
                confirmPassEl
            });
            alert('Form error. Please refresh the page.');
            return;
        }

        const firstName = firstNameEl.value.trim();
        const lastName = lastNameEl.value.trim();
        const email = emailEl.value.trim().toLowerCase();
        const mobile = mobileEl.value.trim();
        const password = passEl.value;
        const confirmPassword = confirmPassEl.value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const birthdateEl = document.getElementById('birthdate');

const userData = {
    email: email,
    FirstName: firstName,
    LastName: lastName,
    mobile_number: Number(mobile),
    password: password,
    birthdate: birthdateEl.value || null
};

     

        const dbUrl = 'https://contielleprisca-ad78.restdb.io/rest/app-users';
        const apiKey = '698cb182bf4bcc683253e4c3';

        const submitBtn = registerForm.querySelector('button[type="submit"]');
        const defaultBtnText = submitBtn ? submitBtn.innerText : 'Register';

        if (submitBtn) {
            submitBtn.innerText = 'Processing...';
            submitBtn.disabled = true;
        }

        try {
            const response = await fetch(dbUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': apiKey,
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                const detail = data?.list?.[0]?.message || data?.message || 'Unknown error';
                alert(`Registration Failed: ${detail}`);
                return;
            }

            alert('Registration Successful!');
            registerForm.reset();
            window.location.href = 'login.html';

        } catch (error) {
            console.error('Network Error:', error);
            alert('Network Error. Please try again.');
        } finally {
            if (submitBtn) {
                submitBtn.innerText = defaultBtnText;
                submitBtn.disabled = false;
            }
        }
    });
});

/* --- 5. LOGIN AUTHENTICATION --- */
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        console.log("Login Script Loaded"); // This will show in Console (F12) if it works

        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 

            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const errorMsg = document.getElementById('login-error');
            const submitBtn = loginForm.querySelector('.btn-login');

            // Reset Error
            errorMsg.style.display = 'none';
            errorMsg.innerText = '';

            const email = emailInput.value.trim().toLowerCase();
            const password = passwordInput.value;

            // Database Info
            const dbUrl = 'https://contielleprisca-ad78.restdb.io/rest/app-users';
            const apiKey = '698cb182bf4bcc683253e4c3';

            // Loading State
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Checking...';
            submitBtn.disabled = true;

            try {
                // Query Database
                const query = `?q={"email": "${email}"}`;
                const response = await fetch(dbUrl + query, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-apikey': apiKey,
                        'Cache-Control': 'no-cache'
                    }
                });

                const users = await response.json();

                if (users.length === 0) {
                    errorMsg.innerText = 'Account not found. Please register.';
                    errorMsg.style.display = 'block';
                } else {
                    const user = users[0];
                    if (user.password === password) {
                        // Success!
                        window.location.href = 'index.html';
                    } else {
                        errorMsg.innerText = 'Incorrect password.';
                        errorMsg.style.display = 'block';
                    }
                }

            } catch (error) {
                console.error(error);
                errorMsg.innerText = 'Connection Error.';
                errorMsg.style.display = 'block';
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});