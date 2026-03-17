// ==================== RENDER APP ====================
// Semua HTML ada di sini, ter-bundle di dalam JS yang ter-minify
// Pas ctrl+U index.html cuma keliatan: <div id="app"></div>

export function renderApp() {
    document.getElementById('app').innerHTML = `

<!-- Navigation -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-brand">
            <div class="logo">
                <a href="#" class="logo-link" title="Alamat Bill Gates" id="logoLink">
                    <img src="./foto/fas.png" alt="Logo" width="40" height="40">
                </a>
                <h1>Take Order</h1>
            </div>
            <p class="tagline">Created by Dits ^.^</p>
        </div>
        <div class="nav-controls">
            <div class="search-box">
                <i class="fa fa-search"></i>
                <input type="text" id="searchInput" placeholder="Cari template...">
            </div>
            <button id="themeToggle" class="theme-btn"><i class="fas fa-moon"></i></button>
            <button id="showStats" class="stats-btn">
                <i class="fas fa-chart-bar"></i>
                <span class="stat-badge">0</span>
            </button>
        </div>
    </div>
</nav>

<main class="main-container">

    <!-- Hero -->
    <section class="hero">
        <div class="container-main">
            <div class="container-banner">
                <div class="image-banner-hero">
                    <img src="foto/banner2.jpeg" alt="Banner Mayoblox">
                </div>
                <div class="title-banner-hero">
                    <div>
                        <h1><i class="fas fa-fire"></i> Template Chat</h1>
                        <p>Click to Copy 📋</p>
                        <div class="hero-stats">
                            <div class="stat">
                                <i class="fas fa-copy"></i>
                                <span><strong id="totalUsed">0</strong> template dipakai hari ini</span>
                            </div>
                            <div class="stat">
                                <i class="fas fa-clock"></i>
                                <span>Online: <strong>24 jam</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Actions -->
    <section class="quick-actions-section">
        <h3><i class="fas fa-bolt"></i> Quick Actions</h3>
        <div class="quick-actions">
            <button class="quick-btn" data-template="order"><i class="fas fa-shopping-cart"></i><span>Cara Order</span></button>
            <button class="quick-btn" data-template="thanks"><i class="fas fa-heart"></i><span>Masamaa</span></button>
            <button class="quick-btn" data-template="list"><i class="fas fa-bars"></i><span>Klik List</span></button>
            <button class="quick-btn" data-template="premium"><i class="fas fa-crown"></i><span>Order Web</span></button>
            <button class="quick-btn" data-template="fix"><i class="fas fa-tools"></i><span>Perbaikan Tele</span></button>
            <button class="quick-btn" data-template="qr"><i class="fas fa-qrcode"></i><span>Salah Klik</span></button>
            <button class="quick-btn" data-template="wrongpw"><i class="fas fa-key"></i><span>PW Salah</span></button>
            <button class="quick-btn" data-template="backup"><i class="fas fa-key"></i><span>Backup Code</span></button>
            <button class="quick-btn" data-template="reset"><i class="fas fa-redo"></i><span>Reset PW</span></button>
            <button class="quick-btn" data-template="estimation"><i class="fas fa-exclamation"></i><span>Bikin BC GK</span></button>
            <button class="quick-btn" data-template="queue"><i class="fas fa-users"></i><span>Antrian</span></button>
            <button class="quick-btn" data-template="checklogin"><i class="fas fa-sign-in-alt"></i><span>Cek Login</span></button>
            <button class="quick-btn" data-template="regencode"><i class="fas fa-sync"></i><span>Reset BC</span></button>
            <button class="quick-btn" data-template="checkemail"><i class="fas fa-envelope"></i><span>Cek Email</span></button>
            <button class="quick-btn" data-template="gp"><i class="fas fa-cart-plus"></i><span>Via Gamepass</span></button>
            <button class="quick-btn" data-template="webproblem"><i class="fas fa-globe"></i><span>Problem Web</span></button>
            <button class="quick-btn" data-template="error"><i class="fas fa-exclamation-triangle"></i><span>Ke Logout</span></button>
            <button class="quick-btn" data-template="2step"><i class="fas fa-shield-alt"></i><span>2-Step Error</span></button>
            <button class="quick-btn" data-template="prem"><i class="fas fa-check-circle"></i><span>Prem Explain</span></button>
            <button class="quick-btn" data-template="gkmsk"><i class="fas fa-thumbs-down"></i><span>Kode Gk Msk</span></button>
        </div>
    </section>

    <!-- Tools Section -->
    <section class="tools-section">
        <h3><i class="fas fa-tools"></i> Tools</h3>
        <div class="backup-formatter">
            <div class="tools-tabs">
                <button class="tools-tab active" id="tabInvoice" onclick="switchToolTab('invoice')">
                    <i class="fas fa-file-invoice"></i> Invoice Maker
                </button>
                <button class="tools-tab" id="tabBackup" onclick="switchToolTab('backup')">
                    <i class="fas fa-code"></i> Backup Code
                </button>
            </div>
            <div id="paneInvoice" class="tools-pane">
                <div class="inv4-top">
                    <textarea
                        class="inv4-textarea"
                        id="inv4RawPaste"
                        placeholder="Paste chat customer di sini — username, password, nominal robux, kode backup, berantakan pun oke…"
                        rows="4"
                        oninput="inv4OnRawInput()"
                        onpaste="inv4OnRawPaste()"
                    ></textarea>
                    <div class="inv4-top-btns">
                        <button class="inv4-btn-paste" onclick="inv4DoPaste()">
                            <i class="fas fa-paste"></i> Auto Paste
                        </button>
                        <button class="inv4-btn-clear" onclick="inv4Clear()">
                            <i class="fas fa-trash-alt"></i> Clear
                        </button>
                    </div>
                </div>
                <div class="inv4-grid">
                    <div class="inv4-card" id="inv4CardRobux">
                        <div class="inv4-card-label">✨ Jumlah Robux</div>
                        <input class="inv4-card-input" id="inv4Robux" placeholder="1000, 500, 2200prem…" oninput="inv4FieldChanged()" onblur="inv4FormatRobuxField()">
                        <div class="inv4-card-status" id="inv4StatusRobux"></div>
                    </div>
                    <div class="inv4-card inv4-card-user" id="inv4CardUser">
                        <div class="inv4-card-label">👤 Username</div>
                        <div class="inv4-user-row" id="inv4UsernameWrap">
                            <div class="inv4-avatar-slot">
                                <div class="inv4-av-state" id="inv4AvatarEmpty"><i class="fas fa-user-circle inv4-av-empty-icon"></i></div>
                                <div class="inv4-av-state" id="inv4AvatarLoading" style="display:none;"><div class="inv4-skel-circle"></div><div class="inv4-av-spinner"></div></div>
                                <div class="inv4-av-state" id="inv4AvatarFound" style="display:none;"><img id="inv4AvatarImg" src="" alt="" class="inv4-av-img"><img id="inv4AvatarPrem" src="foto/prem.png" class="inv4-prem-badge" style="display:none;"></div>
                                <div class="inv4-av-state" id="inv4AvatarErr" style="display:none;"><i class="fas fa-user-circle inv4-av-err-icon"></i></div>
                            </div>
                            <input class="inv4-card-input inv4-user-input" id="inv4User" placeholder="username Roblox" oninput="inv4FieldChanged(); inv4TriggerLookup(this.value.trim());">
                            <span class="inv4-check-icon" id="inv4UserCheck" style="display:none;"><i class="fas fa-check-circle"></i></span>
                            <span class="inv4-x-icon" id="inv4UserX" style="display:none;"><i class="fas fa-times-circle"></i></span>
                        </div>
                        <div class="inv4-card-status" id="inv4StatusUser"></div>
                    </div>
                    <div class="inv4-card" id="inv4CardPass">
                        <div class="inv4-card-label">🔑 Password</div>
                        <input class="inv4-card-input" id="inv4Pass" placeholder="password akun" oninput="inv4FieldChanged()">
                        <div class="inv4-card-status" id="inv4StatusPass"></div>
                    </div>
                    <div class="inv4-card inv4-card-backup" id="inv4CardBackup">
                        <div class="inv4-card-label">🔐 Backup Code</div>
                        <div class="inv4-chips-wrap" id="inv4ChipsWrap"></div>
                        <textarea class="inv4-card-input inv4-backup-raw" id="inv4BackupRaw" placeholder="Paste 5 kode backup…" rows="2" style="display:none;" oninput="inv4BackupRawChanged()"></textarea>
                        <div class="inv4-backup-footer">
                            <div class="inv4-card-status" id="inv4StatusBackup"></div>
                            <button class="inv4-edit-btn" id="inv4EditBtn" onclick="inv4ToggleBackupEdit()"><i class="fas fa-edit"></i> Edit</button>
                        </div>
                    </div>
                </div>
                <button class="inv4-copy-btn" onclick="inv4Copy()"><i class="fas fa-copy"></i> Copy ke Telegram</button>
            </div>
            <div id="paneBackup" class="tools-pane" style="display:none;">
                <div class="formatter-header">
                    <div class="formatter-header-buttons">
                        <button class="auto-paste-btn" id="autoPasteBtn"><i class="fas fa-paste"></i> Auto Paste</button>
                        <button class="btn-clear" id="clearBackupBtn"><i class="fas fa-trash-alt"></i> Clear</button>
                    </div>
                </div>
                <div class="formatter-container">
                    <div class="formatter-input">
                        <div class="formatter-label"><i class="fas fa-keyboard"></i><span>Masukkan 5 Kode Backup (format apa saja)</span></div>
                        <textarea class="code-input" id="backupInput" placeholder="Masukkan 5 kode backup" rows="8"></textarea>
                        <div class="input-info"><i class="fas fa-info-circle"></i><span>Bot hanya membaca format yang benar. Fitur ini mengubah semua format menjadi format yang benar.</span></div>
                    </div>
                    <div class="formatter-output">
                        <div class="formatter-label"><i class="fas fa-clipboard-check"></i><span>Hasil Format untuk Bot</span></div>
                        <div class="code-output" id="backupOutput">🔍 WAJIB DIISI 5 CODE BACKUP!!
- code back up 1: 
- code back up 2: 
- code back up 3: 
- code back up 4: 
- code back up 5: </div>
                        <button class="copy-btn" id="copyBackupBtn"><i class="fas fa-copy"></i> Copy Format</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Template Categories -->
    <section class="categories-section">
        <h3><i class="fas fa-folder"></i> Kategori Template</h3>
        <div class="categories">
            <button class="category-btn active" data-category="all">Semua</button>
            <button class="category-btn" data-category="order">Order</button>
            <button class="category-btn" data-category="problem">Masalah</button>
            <button class="category-btn" data-category="status">Status</button>
            <button class="category-btn" data-category="security">Keamanan</button>
            <button class="category-btn" data-category="other">Lainnya</button>
        </div>
    </section>

    <!-- Templates Section -->
    <section class="templates-section">
        <div class="templates-header">
            <h3><i class="fas fa-copy"></i> Semua Template</h3>
            <div class="templates-controls">
                <div class="templates-count"><span id="templateCount">0</span> template tersedia</div>
                <button class="toggle-all-btn" id="toggleAllBtn"><i class="fas fa-eye"></i><span>Tampilkan</span></button>
            </div>
        </div>
        <div class="templates-grid hidden" id="templatesGrid"></div>
    </section>

    <!-- Reseller Section -->
    <section class="reseller-section">
        <h3><i class="fas fa-robot"></i> Reseller Proses</h3>
        <br>
        <div class="reseller-container"></div>
    </section>

</main>

<!-- Toast -->
<div id="toast" class="toast"></div>

<!-- FABs -->
<button class="fab fab-tools"    id="scrollToToolsFab"    title="Tools"><i class="fas fa-tools"></i></button>
<button class="fab fab-reseller" id="scrollToResellerFab" title="Reseller"><i class="fas fa-users"></i></button>
<button class="fab fab-home"     id="scrollToTopFab"      title="Home"><i class="fas fa-home"></i></button>

<!-- Address Modal -->
<div class="inv-modal-overlay" id="addressModalOverlay">
    <div class="inv-modal-box">
        <div class="inv-modal-header">
            <h3><i class="fas fa-map-marker-alt"></i> Alamat Bill Gates</h3>
            <button class="inv-modal-close" id="addressModalCloseBtn"><i class="fas fa-times"></i></button>
        </div>
        <div id="addressKeyScreen">
            <div class="inv-form-group">
                <label>Secret Key</label>
                <div class="password-container">
                    <input class="inv-form-control" id="addressKeyInput" type="password" placeholder="Masukkan secret key…">
                    <button class="toggle-password" id="addressToggleBtn" type="button">
                        <span class="toggle-icon">👁️</span>
                    </button>
                </div>
                <div id="addressKeyError" class="addr-key-error"></div>
            </div>
            <button class="inv-btn inv-btn-pink" id="addressUnlockBtn" style="width:100%;justify-content:center;">
                <i class="fas fa-unlock"></i> Unlock
            </button>
        </div>
        <div id="addressContent" style="display:none;">
            <div class="addr-row">
                <div class="inv-form-group">
                    <label>Street</label>
                    <div class="addr-copy-box" id="addrStreet"><span>475 S Imperial Ave</span><i class="fas fa-copy addr-copy-icon"></i></div>
                </div>
                <div class="inv-form-group">
                    <label>City</label>
                    <div class="addr-copy-box" id="addrCity"><span>Burns</span><i class="fas fa-copy addr-copy-icon"></i></div>
                </div>
                <div class="inv-form-group">
                    <label>State</label>
                    <div class="addr-copy-box" id="addrState"><span>Oregon</span><i class="fas fa-copy addr-copy-icon"></i></div>
                </div>
                <div class="inv-form-group">
                    <label>ZIP Code</label>
                    <div class="addr-copy-box" id="addrZip"><span>97720-2349</span><i class="fas fa-copy addr-copy-icon"></i></div>
                </div>
            </div>
            <div class="inv-hint" style="margin-top:0.5rem;">
                <i class="fas fa-info-circle"></i> Klik field untuk copy ke clipboard
            </div>
        </div>
    </div>
</div>
    `;

    // Re-attach event listeners yang pakai inline onclick di HTML lama
    // karena sekarang HTML dirender via JS, inline onclick tetap jalan
    // tapi untuk modal kita pakai addEventListener biar lebih clean

    // Logo link → buka modal
    document.getElementById('logoLink').addEventListener('click', (e) => {
        e.preventDefault();
        addressModalOpen();
    });

  document.getElementById('addressModalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('addressModalOverlay')) window.addressModalClose();
});

document.getElementById('addressModalCloseBtn').addEventListener('click', () => window.addressModalClose());

    // Modal close button
    document.getElementById('addressModalCloseBtn').addEventListener('click', addressModalClose);

    // Toggle password visibility
    document.getElementById('addressToggleBtn').addEventListener('click', function() {
        addressToggleKey(this);
    });

    // Unlock button
    document.getElementById('addressUnlockBtn').addEventListener('click', addressCheckKey);

    // Enter key di input secret key
    document.getElementById('addressKeyInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addressCheckKey();
    });

    // Address copy boxes
    const addrMap = {
        addrStreet: '475 S Imperial Ave',
        addrCity:   'Burns',
        addrState:  'Oregon',
        addrZip:    '97720-2349'
    };
    Object.entries(addrMap).forEach(([id, val]) => {
        document.getElementById(id).addEventListener('click', function() {
            addressCopy(val, this);
        });
    });
}
