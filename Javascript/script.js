document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menu Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const userBtn = document.getElementById('user-btn');
    const utilityMenu = document.getElementById('utility-menu');
    const accountMenu = document.getElementById('account-menu');
    const closeUtility = document.getElementById('close-utility');
    const closeAccount = document.getElementById('close-account');

    // Open Left Menu
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            utilityMenu.classList.add('active');
        });
    }

    // Open Right Menu
    if(userBtn) {
        userBtn.addEventListener('click', () => {
            accountMenu.classList.add('active');
        });
    }

    // Close Menus
    if(closeUtility) {
        closeUtility.addEventListener('click', () => {
            utilityMenu.classList.remove('active');
        });
    }

    if(closeAccount) {
        closeAccount.addEventListener('click', () => {
            accountMenu.classList.remove('active');
        });
    }

    // --- Accordion Logic (Product Pages) ---
    const accHeaders = document.querySelectorAll('.accordion-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('span');
            
            // Toggle current
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.textContent = "+";
            } else {
                content.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});