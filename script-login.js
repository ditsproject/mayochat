// ==================== DATABASE USER ====================
const users = {
    'dits': { 
        password: 'onlydits', 
        name: 'Dits',
        role: 'admin'
    },
    'cs': { 
        password: 'akucape', 
        name: 'CS',
        role: 'cs'
    },
    'floppa': { 
        password: 'floppazakaria', 
        name: 'Floppa',
        role: 'floppa'
    },
    'suci': { 
        password: 'sucimaharani', 
        name: 'Suci',
        role: 'suci'
    },
};

// ==================== LOADING SYSTEM ====================
let loadingProgress = 0;
let loadingInterval;

function showLoadingScreen() {
    const loadingScreen = document.getElementById('neoleafLoading');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
        startLoadingAnimation();
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('neoleafLoading');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            loadingScreen.style.opacity = '1';
            loadingScreen.style.visibility = 'visible';
        }, 800);
    }
}

function startLoadingAnimation() {
    loadingProgress = 0;
    clearInterval(loadingInterval);
    
    const loadingPercentage = document.getElementById('loadingPercentage');
    const loadingFinal = document.getElementById('loadingFinal');
    
    loadingInterval = setInterval(() => {
        loadingProgress += Math.random() * 5 + 1;
        
        if (loadingProgress >= 100) {
            loadingProgress = 100;
            clearInterval(loadingInterval);
            
            setTimeout(() => {
                if (loadingFinal) {
                    loadingFinal.classList.add('animate');
                    
                    setTimeout(() => {
                        window.location.href = 'index2.html';
                    }, 1200);
                } else {
                    window.location.href = 'index2.html';
                }
            }, 300);
        }
        
        if (loadingPercentage) {
            loadingPercentage.textContent = `loading ${Math.floor(loadingProgress)}%`;
        }
    }, 100);
}

// ==================== THEME MANAGEMENT ====================
function initLoginTheme() {
    const themeToggle = document.getElementById('theme-toggle-login');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

// ==================== LOGIN HANDLER ====================
function initializeLogin() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const themeToggle = document.getElementById('theme-toggle-login');
    const loginBtn = document.getElementById('loginBtn');
    const togglePassword = document.getElementById('togglePassword');
    
    if (!loginForm) return;
    
    // Cek jika sudah login
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'index2.html';
        return;
    }
    
    // Toggle Password
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.innerHTML = '<span class="toggle-icon">🙈</span>';
            } else {
                passwordInput.type = 'password';
                this.innerHTML = '<span class="toggle-icon">👁️</span>';
            }
            
            passwordInput.focus();
        });
    }
    
    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            
            if (isDark) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Login Form Handler
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validasi login
        if (users[username] && users[username].password === password) {
            // Login sukses
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            localStorage.setItem('userDisplayName', users[username].name);
            localStorage.setItem('userRole', users[username].role);
            
            // Update tombol login
            if (loginBtn) {
                loginBtn.textContent = '🔄 Memuat Data...';
                loginBtn.disabled = true;
            }
            
            // Tampilkan loading screen
            document.querySelector('.login-container').style.display = 'none';
            showLoadingScreen();
            
            console.log('🔄 Login successful, redirecting to admin panel...');
            
        } else {
            // Login gagal
            showError('Username atau password salah!');
        }
    });
    
    // Enter key untuk submit
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });
    }
    
    // Fallback untuk GIF
    const loginGif = document.querySelector('.login-gif');
    if (loginGif) {
        loginGif.addEventListener('error', function() {
            this.style.display = 'none';
        });
    }
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Login page initialized! 🔐');
    initLoginTheme();
    initializeLogin();
});