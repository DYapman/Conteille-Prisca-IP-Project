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
        const birthdateEl = document.getElementById('birthdate');

        // Safety check
        if (!firstNameEl || !lastNameEl || !emailEl || !mobileEl || !passEl || !confirmPassEl) {
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

        const userData = {
            email: email,
            FirstName: firstName,
            LastName: lastName,
            mobile_number: Number(mobile),
            password: password,
            birthdate: birthdateEl ? (birthdateEl.value || null) : null
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
                        // SAVE USER TO SESSION BEFORE REDIRECTING
                        localStorage.setItem('currentUser', JSON.stringify(user)); 
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

/* --- 6. SHOPPING CART LOGIC --- */
const cartKey = 'contielle_cart';
let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

window.cartFunctions = {
    updateQty: (index, change) => {
        if (cart[index].qty + change <= 0) {
            cart.splice(index, 1); 
        } else {
            cart[index].qty += change;
        }
        updateCartStorage();
    },
    removeItem: (index) => {
        cart.splice(index, 1);
        updateCartStorage();
    },
    checkout: () => {
        if(cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert(`Proceeding to checkout. Total: $${getCartTotal().toLocaleString()}`);
    }
};

function updateCartStorage() {
    localStorage.setItem(cartKey, JSON.stringify(cart));
    renderCart();
}

function getCartTotal() {
    return cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
}

function renderCart() {
    const cartContent = document.querySelector('.cart-content');
    if(!cartContent) return;

    const total = getCartTotal();
    const count = cart.reduce((acc, item) => acc + item.qty, 0);

    let html = `<div style="font-weight:bold; margin-bottom:20px;">YOUR CART (${count})</div>`;
    
    if (cart.length === 0) {
        html += `<div style="text-align:center; padding:20px; color:#666;">Your cart is empty.</div>`;
    } else {
        cart.forEach((item, index) => {
            html += `
            <div class="cart-item" style="display: flex; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <img src="${item.img}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
                <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 5px;">${item.name}</div>
                    <div class="qty-selector" style="display: flex; align-items: center; gap: 5px;">
                        <button class="qty-btn" onclick="window.cartFunctions.updateQty(${index}, -1)" style="width:25px; height:25px;">-</button>
                        <input class="qty-input" value="${item.qty}" readonly style="width: 30px; text-align: center; border: 1px solid #ddd;">
                        <button class="qty-btn" onclick="window.cartFunctions.updateQty(${index}, 1)" style="width:25px; height:25px;">+</button>
                    </div>
                    <div class="cart-price" style="margin-top: 5px; font-weight: bold;">$${(item.price * item.qty).toLocaleString()}</div>
                </div>
                <button onclick="window.cartFunctions.removeItem(${index})" style="background: none; border: none; color: #ff4444; font-size: 1.2rem; cursor: pointer; height: fit-content;">&times;</button>
            </div>`;
        });
    }

    html += `
    <div class="delivery-box" style="background: #f9f9f9; padding: 10px; font-size: 0.9rem; text-align: center; margin-top: 15px;">Delivery within 48 hours</div>
    <div style="margin: 15px 0; font-weight: bold; font-size: 1.1rem; display: flex; justify-content: space-between;">
        <span>Total:</span>
        <span>SGD $${total.toLocaleString()}</span>
    </div>
    <div class="cart-footer">
        <button class="checkout-btn" onclick="window.cartFunctions.checkout()" style="width: 100%; padding: 12px; background: #000; color: #fff; border: none; font-weight: bold; cursor: pointer;">CHECKOUT</button>
    </div>`;

    cartContent.innerHTML = html;
}

function addItemToCart(product) {
    const existing = cart.find(x => x.name === product.name);
    if(existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartStorage();
    const cartMenu = document.getElementById('cart-menu');
    const utilityMenu = document.getElementById('utility-menu');
    if(cartMenu) {
        cartMenu.classList.add('active');
        if(utilityMenu) utilityMenu.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();

    const productBtn = document.querySelector('.product-info .btn-primary');
    if(productBtn) {
        productBtn.addEventListener('click', () => {
            const title = document.querySelector('.product-title').innerText;
            const priceText = document.querySelector('.price').innerText; 
            const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            const img = document.querySelector('.product-images img').src;
            addItemToCart({ name: title, price: price, img: img });
        });
    }

    const accButtons = document.querySelectorAll('.acc-btn');
    accButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.acc-item');
            const title = container.querySelector('.acc-name').innerText;
            const img = container.querySelector('img').src;
            const priceAttr = btn.getAttribute('data-price');
            const price = priceAttr ? parseFloat(priceAttr) : 150;
            addItemToCart({ name: title, price: price, img: img });
        });
    });
});

/* --- 7. SETTINGS & PROFILE UPDATE (FINAL FIX) --- */
document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.querySelector('.settings-form');
    if (!settingsForm) return;

    // 1. Check if user is logged in
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
        alert("You must be logged in to edit settings.");
        window.location.href = 'login.html';
        return;
    }

    let user;
    try {
        user = JSON.parse(storedUser);
    } catch (e) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
        return;
    }
    
    // Check for ID
    if (!user._id) {
        alert("System Error: User ID is missing in the session. Please Log Out and Log In again to fix this.");
        return;
    }

    // 2. Populate fields
    const idInput = document.getElementById('settings-id');
    const mobileInput = document.getElementById('settings-mobile');
    const emailInput = document.getElementById('settings-email');
    const passInput = document.getElementById('settings-pass');
    const dobInput = document.getElementById('settings-dob');
    
    if (idInput) idInput.value = user._id;
    if (mobileInput) mobileInput.value = user.mobile_number || '';
    if (emailInput) emailInput.value = user.email || '';
    if (passInput) passInput.value = user.password || '';
    if (dobInput) dobInput.value = user.birthdate ? user.birthdate.split('T')[0] : ''; // Format date for input

    // Update Header
    const headerName = document.querySelector('.profile-header h1');
    const headerId = document.querySelector('.profile-header .member-id');
    if(headerName) headerName.textContent = (user.FirstName || 'User') + ' ' + (user.LastName || '');
    if(headerId) headerId.textContent = 'Member ID: ' + user._id.substr(-6).toUpperCase();

    // 3. Handle Update
    settingsForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const updateBtn = settingsForm.querySelector('.update-btn');
        const originalText = updateBtn.innerText;
        updateBtn.innerText = "Updating...";
        updateBtn.disabled = true;

        const dbUrl = 'https://contielleprisca-ad78.restdb.io/rest/app-users';
        const apiKey = '698cb182bf4bcc683253e4c3';
        const userId = user._id;

        // Data to send
        const updatedData = {
            mobile_number: Number(mobileInput.value),
            email: emailInput.value,
            password: passInput.value,
            birthdate: dobInput.value || null
        };

        try {
            // Using PATCH instead of PUT (Safer for partial updates)
            const response = await fetch(`${dbUrl}/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': apiKey,
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify(updatedData)
            });

            if (response.ok) {
                const responseData = await response.json();
                const newUserObj = { ...user, ...responseData };
                localStorage.setItem('currentUser', JSON.stringify(newUserObj));
                alert("Profile updated successfully!");
                location.reload(); 
            } else {
                const errData = await response.json();
                console.error("Server Error Data:", errData);
                alert("Update failed: " + (errData.message || "Unknown error"));
            }

        } catch (error) {
            console.error("FULL NETWORK ERROR:", error);
            alert("Network Error: The database blocked the request.\n\nCHECK THIS: Go to RestDB > Settings > API Keys. Make sure your key has 'PUT' and 'PATCH' permissions checked (not just GET).");
        } finally {
            updateBtn.innerText = originalText;
            updateBtn.disabled = false;
        }
    });
});


/* =========================================================
   8. PROFILE PAGE LOGIC (PERSONALIZATION)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Only run this if we are on the profile page
    if (!document.querySelector('.profile-page')) return;

    // 1. Get Logged In User
    const storedUser = localStorage.getItem('currentUser');
    
    // Redirect if not logged in
    if (!storedUser) {
        window.location.href = 'login.html';
        return;
    }

    const user = JSON.parse(storedUser);

    // 2. Populate Header
    const fullName = (user.FirstName || "User") + " " + (user.LastName || "");
    document.getElementById('profile-name').innerText = fullName;

    // Generate Initials
    const firstInitial = user.FirstName ? user.FirstName.charAt(0).toUpperCase() : "";
    const lastInitial = user.LastName ? user.LastName.charAt(0).toUpperCase() : "";
    document.getElementById('profile-initials').innerText = firstInitial + lastInitial;

    // 3. Generate "Random" Badges based on User ID
    let idSum = 0;
    if(user._id) {
        for(let i = 0; i < user._id.length; i++) {
            idSum += user._id.charCodeAt(i);
        }
    } else {
        idSum = Math.floor(Math.random() * 100);
    }

    const badgeCount = idSum % 5; 

    // Define Available Badges
    const allBadges = [
        { name: "Lapis Rank", colorClass: "badge-navy", img: "../Photos/bluefish.png" }, 
        { name: "Jade Rank", colorClass: "badge-green", img: "../Photos/greenfish.png" }, 
        { name: "Ruby Rank", colorClass: "badge-red", img: "../Photos/redfish.png" },   
        { name: "Citrine Rank", colorClass: "badge-gold", img: "../Photos/yellowfish.png" } 
    ];

    const earnedBadges = allBadges.slice(0, badgeCount);

    // 4. Render Badges (ONLY Full Badges in Badge Tab now)
    const fullContainer = document.getElementById('full-badges-list');

    if (earnedBadges.length === 0) {
        fullContainer.innerHTML = '<div style="padding:20px; color:#777;">No badges earned yet.</div>';
    } else {
        earnedBadges.forEach(badge => {
            // Render Full Badge (Tab)
            const fullDiv = document.createElement('div');
            fullDiv.className = 'badge-card';
            fullDiv.innerHTML = `
                <div class="badge-img-large ${badge.colorClass}" 
                     style="background-image: url('${badge.img}'); background-size: cover; background-position: center;">
                </div>
                <div class="badge-info">
                    <div class="badge-title">${badge.name}</div>
                    <div class="badge-desc"></div>
                </div>
            `;
            fullContainer.appendChild(fullDiv);
        });
    }
});