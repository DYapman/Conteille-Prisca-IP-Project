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
                // Optional: Close others
                // document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
                content.style.display = "block";
                if(icon) icon.textContent = "-";
            }
        });
    });

    // --- 3. COUNTDOWN TIMER (Accessories Page) ---
    // If you want a real timer, you can add logic here. For now, it's static HTML or we can animate it lightly.
});