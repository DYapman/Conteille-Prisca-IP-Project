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

  /* --- COUNTDOWN TIMER --- */
function startCountdown() {
    // Set the date we're counting down to (Example: 3 days from now)
    // You can change this to a specific date like: new Date("Oct 15, 2026 12:00:00").getTime();
    var countDownDate = new Date(); 
    countDownDate.setDate(countDownDate.getDate() + 3); // Currently set to 3 days from now

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements with id="days", "hours", etc.
        // We check if the element exists first to avoid errors on other pages
        if (document.getElementById("days")) {
            document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
            document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
            document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
            document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;
        }

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            if (document.getElementById("countdown")) {
                document.getElementById("countdown").innerHTML = "RELEASED";
            }
        }
    }, 1000);
}

// Start the timer when the page loads
startCountdown();
});