document.addEventListener('DOMContentLoaded', () => {
    
    // --- Select Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const userBtn = document.getElementById('user-btn');
    const utilityMenu = document.getElementById('utility-menu');
    const accountMenu = document.getElementById('account-menu');
    const closeUtility = document.getElementById('close-utility');
    const closeAccount = document.getElementById('close-account');

    // --- Menu Functions ---
    if(menuBtn && utilityMenu) {
        menuBtn.addEventListener('click', () => {
            utilityMenu.classList.add('active');
        });
    }

    if(userBtn && accountMenu) {
        userBtn.addEventListener('click', () => {
            accountMenu.classList.add('active');
        });
    }

    if(closeUtility && utilityMenu) {
        closeUtility.addEventListener('click', () => {
            utilityMenu.classList.remove('active');
        });
    }

    if(closeAccount && accountMenu) {
        closeAccount.addEventListener('click', () => {
            accountMenu.classList.remove('active');
        });
    }

    // --- Accordion Functions ---
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
});