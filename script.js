document.addEventListener('DOMContentLoaded', () => {
    
    // DOM Elements
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    
    // Icons
    const hamburgerIcon = leftBtn.querySelector('.icon-hamburger');
    const leftCloseIcon = leftBtn.querySelector('.icon-close');
    const userIcon = rightBtn.querySelector('.icon-user');
    const rightCloseIcon = rightBtn.querySelector('.icon-close');

    // View Containers
    const homeView = document.getElementById('home-view');
    const utilityView = document.getElementById('utility-view');
    const accountView = document.getElementById('account-view');

    // State
    let currentMode = 'home'; // Options: 'home', 'utility', 'account'

    function updateUI() {
        // 1. Hide all views
        homeView.classList.remove('active');
        utilityView.classList.remove('active');
        accountView.classList.remove('active');

        // 2. Reset icons
        hamburgerIcon.style.display = 'block';
        leftCloseIcon.style.display = 'none';
        userIcon.style.display = 'block';
        rightCloseIcon.style.display = 'none';

        // 3. Activate specific view
        if (currentMode === 'home') {
            homeView.classList.add('active');
        
        } else if (currentMode === 'utility') {
            utilityView.classList.add('active');
            hamburgerIcon.style.display = 'none';
            leftCloseIcon.style.display = 'block';
        
        } else if (currentMode === 'account') {
            accountView.classList.add('active');
            userIcon.style.display = 'none';
            rightCloseIcon.style.display = 'block';
        }
    }

    // Toggle Left Menu (Utility)
    leftBtn.addEventListener('click', () => {
        if (currentMode === 'utility') {
            currentMode = 'home';
        } else {
            currentMode = 'utility';
        }
        updateUI();
    });

    // Toggle Right Menu (Account)
    rightBtn.addEventListener('click', () => {
        if (currentMode === 'account') {
            currentMode = 'home';
        } else {
            currentMode = 'account';
        }
        updateUI();
    });

    // Init
    updateUI();
});