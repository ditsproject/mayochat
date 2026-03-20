import { renderApp } from './render.js';

// ==================== TEMPLATES DATA ====================
const templatesData = [
    { id: 1, name: "Cara Order Simple",         category: "order", content: `aloo kakk, gas order\n\nklik robux via login, nanti muncul list harga robux, pilih nominal yang mau kamu beli lalu klik\n\nisi data login kamu\nnanti otomatis muncul qr pembayaran\nqr nya bisa untuk semua metode pembayaran, tinggal scan aja\n\nkalo sudah bayar, pesanan kamu akan masuk antrian secara otomatis dan akan di proses sesuai antrian ^,^` },
    { id: 32, name: "Bc Simple",                category: "keamanan", content: `Cara Buat Backup Code:\n1. Buka aplikasi Roblox di HP kamu.\n2. Login ke akun → tekan ikon tiga titik (≡ / More) di pojok kanan bawah.\n3. Scroll ke bawah → pilih Settings (Pengaturan).\n4. Masuk ke menu Security (Keamanan).\n5. Aktifkan dulu 2-Step Verification (2SV) pakai email atau authenticator.\n6. Setelah aktif, akan muncul pilihan Generate Backup Codes (Buat Kode Cadangan).\n7. Tekan itu → kode cadangan akan muncul.\n8. Simpan kode tersebut (catat, screenshot, atau copy ke password manager).\n\n⚠️ Penting: kode cadangan cuma bisa ditampilkan sekali saat dibuat. Jadi jangan sampai lupa ss ya.` },
    { id: 52, name: "Gabisa",                   category: "other",    content: `Untuk Robux via Login, tidak bisa beli sesuai budget ya kak.\nGak bisa: 50k pas dapet berapa, 100 robux pas berapa, dll.\n\nVia login cuma bisa pilih nominal yang ada di pricelist.\n\nKalau mau beli sesuai uang pas (misal 50k pas), itu lewat via Gamepass\nTapi via Gamepass pending 5–8 hari.` },
    { id: 14, name: "Terima Kasih",             category: "other",    content: `terimakacii kembali kakkk jangan lupa ganti pw dan reset kode backupnya yaahh       \n\nditunggu orderan berikutnya ^_^` },
    { id: 99, name: "Klik List",                category: "other", content: `aloo kak, gasss di klik nominal yang mau dibeli,\n\nisi data login akun kamu: usn, pw dan kode backup\n\nnanti otomatis muncul qr pembayaran.\nqr nya bisa untuk semua metode pembayaran, tinggal scan aja\n\nlalu mimin proses sesuai antrian ^,^` },
    { id: 15, name: "Order Web",                category: "order",    content: `\n📌 Cara Order di Website\nBuka https://mayoblox.com/robux/checkout/via-login\nPakai Chrome atau Safari biar gak error.\n\n1. Pilih Robux via Login\n2. Klik Order via Website\n3. Isi: Usn, Pw, Kode Backup \nMasukkan nomor WhatsApp yang aktif (jangan asal)\n4. Ikuti tutorial di website\n5. Pilih nominal → bayar via QR` },
    { id: 8,  name: "Salah Klik QR",            category: "status",   content: `❗️ Salah Klik / Mau Ganti Nominal?\n\nKalau sudah klik harus tunggu sekitar 1 jam sampai transaksi batal otomatis baru bisa order lagi.\n\nOrdernya lewat website aja yaa kak biar ga nunggu.\n\nBuka mayoblox.com/robux di browser \nPilih "Robux via Login"` },
    { id: 20, name: "Bocil Rese Nanya Antrian", category: "other",    content: `udah masuk antrian kak ditunggu aja yaa kalo udah nanti di kabarin` },
    { id: 25, name: "Perbaikan Tele",           category: "problem",  content: `oke kak udah aku data ulang, wet yahh nanti di kabarin lagihh` },
    { id: 6,  name: "PW Salah",                 category: "problem",  content: `Username / Passwordnya salah, kak 😅\n\nCara benerin:\n1. Coba login sendiri dulu di roblox.com\n2. Kalau berhasil kirim data barunya ke mimin → pastikan data yang dikirim sama\n3. Kalau gagal → reset password dulu\n\nCara reset password:\n1. Buka roblox.com di browser di form login klik "Forgot Username or Password"\n2. Masukkan email/nomor yang terdaftar di akun kamu\n3. Cek pesan email → klik link reset\n4. Buat password baru\n5. Kirim password barunya ke mimin\n\n⚠️ KALAU SALAH LAGI = DI MASUKIN KE ANTRIAN PALING BELAKANG!\n\nKirim ulang:\nUsername: \nPassword baru:` },
    { id: 4,  name: "Cara Buat Kode Backup",    category: "problem",  content: `📌 CARA BUAT KODE BACKUP (WAJIB BACA)\n\n⚠️ Email akun HARUS sudah terverifikasi.\nKalau belum, gak bisa bikin kode backup.\n\n⚠️ Tombol "Verifikasi" atau "Buat" cukup klik SATU KALI.\nKalau spam klik, bakal muncul error "Terlalu Banyak Percobaan".\n\n📧 CEK EMAIL SUDAH VERIFIED ATAU BELUM\n\n1. Buka Roblox → ikon tiga garis (≡) → Pengaturan → Info Akun\n2. Cek bagian Email\n\n✅ Kalau tertulis Terverifikasi → lanjut bikin kode backup\n❌ Kalau Tidak ada / Pending → verifikasi email dulu\n\n📩 CARA VERIFIKASI EMAIL (kalau belum verified)\n\n1. Masuk ke Info Akun\n2. Tambahkan email aktif kamu (kalau belum ada)\n3. Kalau statusnya "Pending", klik Verifikasi Email\n4. Buka email kamu → cari email dari Roblox\n5. Klik Verifikasi Email\n6. Balik ke Roblox, pastikan status jadi Terverifikasi\n\nKalau sudah verified, lanjut buat kode backup.\n\n🎏 CARA BUAT KODE BACKUP\n\n🔐 1. Aktifkan Verifikasi 2 Langkah\n\n1. Ke Pengaturan → Keamanan\n2. Aktifkan Verifikasi 2 Langkah via Email\n3. Buka email → ambil kode 6 digit\n4. Masukkan kodenya → Verifikasi\n\n⚠️ Klik sekali aja, jangan spam.\n\n🧩 2. Buat Kode Backup\n\n1. Masih di menu Keamanan\n2. Scroll ke Kode Pemulihan\n3. Klik Buat (SATU KALI AJA)\n4. Masukkan kode verifikasi email\n5. Nanti muncul 10 kode backup\n\n📌 Kirim 5 kode pertama ke mimin\n📌 5 kode sisanya simpan buat kamu\n\n❌ KALAU ERROR\n\n• Jangan spam klik tombol\n• Pastikan email sudah Terverifikasi\n• Kalau muncul "Terlalu Banyak Percobaan", tunggu 10–15 menit\n\nKalau masih error, screenshot dan kirim ke mimin.` },
    { id: 9,  name: "Bikin BC GK",              category: "order",    content: `Buat masuk ke akun kamu, admin butuh kode backup untuk verifikasi login.\nJadi kamu harus bikin kode backup dulu, baru admin bisa proses akun kamu.\n\nKenapa harus pake kode backup?\nKarena lebih simpel dan cepet.\nKamu gak perlu standby chat, dan admin juga gak perlu nunggu kode email atau approve login dari kamu.\nJadinya orderan kamu dan orderan yang lain bisa lebih cepet selesai.\n\nSekali bikin kode backup, kamu bakal dapet 10 kode.\n1 kode cuma bisa dipake buat 1 kali login.\nJadi total 10 kode bisa dipake buat 10 kali order tanpa harus bikin kode baru lagi.\n\nKalau semua kode udah kepake atau gak valid, kamu harus generate kode backup yang baru dan kirim kode barunya ke admin.` },
    { id: 29, name: "Hubungi CS",               category: "status",   content: `kaka chat ke cs yaa biar di bantu @mayobloxcs` },
    { id: 2,  name: "Cek Login Tanpa BC",        category: "problem",  content: `Kak, cek dulu ya akunnya:\n\n1. Buka: roblox.com/login di browser\n2. Login pakai username & passwordmu, klik login\n\nKALO LANGSUNG MASUK:\n✅ Akun TIDAK pakai verifikasi\n• Tidak perlu kirim backup code\n• Cukup username & password\n\nKALAU MINTA KODE VERIFIKASI:\n❌ Akun PAKAI verifikasi\n• WAJIB kirim 5 kode backup\n• Tanpa backup code, mimin gabisa login\n• Kalo gabisa login, mimin jadi gabisa proses akun kaka\n\nKalo masih bingung bisa tanya mimin lagi yaa kak` },
    { id: 3,  name: "Cek Status Email",          category: "problem",  content: `📌 Cara Cek Status Akun\n1️⃣ Cek Status Email\n\nMasuk ke Settings → Account Info\nLihat bagian Email:\n\n✅ Verified = sudah diverifikasi\n❌ Not Verified = belum diverifikasi\n\n2️⃣ Kalau Belum Verified\n\n• Klik Verify Email\n• Buka email dari Roblox\n• Klik link verifikasi sampai status jadi Verified\n\n3️⃣ Kalau Sudah Verified Tapi Masih Error\n\n• Logout dari Roblox\n• Login lagi\n• Tunggu sebentar lalu coba ulang` },
    { id: 5,  name: "Kode Verif Gk Masuk",       category: "problem",  content: ` ❗️ Email Verifikasi Gak Masuk?\n\nCoba ini dulu:\n\n1. Klik Resend Code di Roblox\n2. Buka email kamu → refresh inbox\n3. Cari email dari Roblox → masukin kode verifikasinya ke Roblox\n4. Pastikan email yang kamu buka itu memang email yang terdaftar di akun Roblox kamu\n\n❓ Masih Gak Masuk?\n\n1. Masuk ke Settings → Account Info\n2. Cek status email:\n\n   Verified = sudah diverifikasi\n   Not Verified = belum diverifikasi\n\nKalau masih Not Verified:\n• Klik Verify Email\n• Cek email dari Roblox\n• Klik link verifikasi di email (ini wajib supaya status jadi Verified)\n\nIkutin stepnya pelan-pelan, jangan loncat-loncat. Biasanya gagal karena salah email atau gak dicek inbox nya.` },
    { id: 7,  name: "Ke Logout Abis Topup",      category: "problem",  content: `\n❗️ Habis Top-Up Kok Ke-Logout?\n\nAman. Itu cuma bug top-up dari Roblox aja, bukan akun kamu kenapa-kenapa.\n\n🔐 Cara Login Lagi\n\n1. Buka roblox.com/login\n2. Login pakai password terbaru yang kamu kasih\n3. Kalau diminta kode verifikasi → pakai kode dari email atau backup code\n\n📌 Mimin TIDAK Pernah:\n\n• Ganti password kamu\n• Ganti email kamu\n\n🔄 Kalau Masih Gak Bisa Login\n\nReset password aja:\n\n1. Buka roblox.com → klik Forgot Username or Password\n2. Masukkan email / nomor yang terdaftar\n3. Cek email → klik link reset\n4. Buat password baru\n5. Login pakai password baru itu\n\nMasih bingung juga?\nScreenshot kendalanya, kirim ke mimin biar dicek.\n` },
    { id: 10, name: "Prem Explain",              category: "status",   content: `📌 Apa Itu Roblox Premium?\n\nRoblox Premium itu langganan 1 bulan yang kasih keuntungan tambahan ke akun Roblox kamu.\n\n🎁 Benefit Roblox Premium\n\nDapet Robux sesuai paket yang dibeli:\n\n• Premium 450 → dapet 450 Robux\n• Premium 1000 → dapet 1000 Robux\n• Premium 2200 → dapet 2200 Robux\n➜ Pas sesuai paket, gak kurang gak lebih\n\n• Dapet bonus 10% Robux setiap top up (selama Premium masih aktif)\n• Bisa trade item (fitur khusus akun Premium)\n\n⏳ Masa Aktif Premium\n\n• Aktif selama 1 bulan\n• Tidak otomatis perpanjang\n• Sekali beli → aktif 1 bulan → selesai\n\n🚫 Premium Tidak Bisa Di-Stack\n\n• Kalau Premium masih aktif, gak bisa beli Premium lagi\n\n📌 Ringkasan\n\n• Premium aktif 1 bulan\n• Gak otomatis perpanjang\n• Gak bisa di-stack\n• Bonus 10% cuma saat Premium aktif\n• Beli lagi cuma setelah masa aktif habis` },
    { id: 11, name: "Reset PW",                  category: "security", content: `Cara reset password:\n\n1. Buka roblox.com di browser\n2. Klik "Forgot Username or Password"\n3. Masukkan email/username yang terdaftar → Submit\n4. Buka email → cari email dari Roblox\n5. Klik link reset di email\n6. Buat password baru\n7. Konfirmasi password → Submit\n8. Login dengan password baru\n\nSETELAH RESET:\nKirim ulang usn dan password baru kamu` },
    { id: 16, name: "Order Gamepass",            category: "order",    content: `\n📌 CARA ORDER ROBUX VIA GAMEPASS (WEB)\n\nOrder lewat web ya.\nBuka: mayoblox.com/robux\nPakai Chrome atau Safari biar gak error.\n\n1. Pilih "Robux Gamepass PO"\n2. Masukkan username Roblox kamu\n3. Isi nominal Robux yang mau dibeli\n4. Masukkan nomor WhatsApp yang aktif (jangan asal)\n\n💳 Lanjut Pembayaran\n\n5. Pilih metode pembayaran\n6. Klik Beli Sekarang\n\n🎥 Tonton tutorial sampai selesai biar gak salah langkah.\n\n🎮 Buat Gamepass\n\n7. Atur harga gamepass sesuai ketentuan di web\n8. Kalau gamepass sudah dibuat, klik Bayar\n9. Selesaikan pembayaran\n\n⏳ Kalau Robux Belum Masuk\nChat ke CS @mayobloxcs` },
    { id: 17, name: "Hubungi CS Gamepass",       category: "other",    content: `untuk robux via gamepass \ncara order, cara buat gamepass, pertanyaan dan kendala, kaka bisa chat ke cs ya biar di bantu @mayobloxcs 💓 ini csnya yang di tag , kamu chat kesitu yahh` },
    { id: 21, name: "Problem Web",               category: "problem",  content: `Data login kamu salah, jadi belum bisa diproses.\n\nTolong perbaiki dulu dan coba login sendiri sampai benar-benar bisa masuk.\nKalo udah bisa masuk, baru kirim ulang data yang benar.\n\nPastikan datanya valid dan lengkap biar orderan kamu langsung di diproses tanpa kendala lagi.` },
    { id: 22, name: "Regenerate Kode Baru",      category: "security", content: `📌 Harus Generate Kode Backup Baru Yaa Kak\n\nCaranya sama kayak waktu pertama bikin.\n\nSTEP BY STEP:\n\n1. Buka aplikasi Roblox\n2. Login → tekan ikon tiga garis (≡) → Settings\n3. Masuk ke Security → scroll ke bawah\n4. Klik Buat / Generate (klik 1x aja, tunggu sampai popup muncul biar gak error)\n5. Masukkan kode verifikasi dari email\n6. Tunggu 5–10 detik sampai 10 kode muncul\n7. Screenshot semua kodenya buat kamu simpan\n8. Salin 5 kode pertama → kirim ke mimin (jangan kirim screenshot)\n\nIkutin pelan-pelan. Jangan spam klik biar gak kena limit.` },
    { id: 23, name: "Error Generate Backup Code",category: "problem",  content: `❌ ERROR SAAT GENERATE BACKUP CODE?\n\nBiasanya karena ini:\n\n🔎 PENYEBAB ERROR\n\n1. Klik Generate berkali-kali sampai kena limit\n2. Email belum diverifikasi\n3. Verifikasi 2 Langkah (2-Step) belum aktif\n\n✅ SOLUSI SESUAI ERROR\n\nKASUS 1: "Too many attempts"\nTunggu 10–15 menit, lalu coba lagi (klik 1x aja)\n\nKASUS 2: "Email not verified"\nSettings → Account Info → Klik Verify Email\n\nKASUS 3: "2-Step not enabled"\nSettings → Security → Aktifkan 2-Step Verification\n\n⚠️ TIPS BIAR GAK ERROR\n\n• Klik Generate cukup 1x, lalu tunggu popup muncul\n• Pastikan email sudah Verified\n• Gunakan Chrome atau Safari\n\nMasih error juga? Screenshot errornya, kirim ke mimin biar dicek.` },
];

// ==================== CONSTANTS ====================
const INV_PRICELIST = [
    80,160,240,320,500,1000,1080,1160,1240,1320,1500,
    2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,
    7000,7500,8000,8500,9000,9500,10000,450,2200
];
const INV_WORD_BLOCK = new Set(["dimainkan","pemulihan","pengisian","prosesnya","transaksi"]);
const ROBLOX_PROXY_URL = 'https://roblox-proxy.mayocuak.workers.dev';

// ==================== STATE ====================
let templatesHidden = true;
let activeCategory  = 'all';

// ==================== HELPERS ====================
function getCategoryName(cat) {
    return {order:'Order',problem:'Problem',status:'Status',security:'Security',other:'Lainnya',keamanan:'Keamanan'}[cat]||'Lainnya';
}
function getCategoryIcon(cat) {
    return {order:'fa-shopping-cart',problem:'fa-exclamation-triangle',status:'fa-info-circle',security:'fa-shield-alt',keamanan:'fa-shield-alt',other:'fa-ellipsis-h'}[cat]||'fa-tag';
}

// ==================== LOAD TEMPLATES ====================
function loadTemplates() {
    const grid = document.getElementById('templatesGrid');
    grid.innerHTML = '';
    document.getElementById('templateCount').textContent = templatesData.length;
    templatesData.forEach(t => {
        const used = localStorage.getItem(`template-${t.id}-used`) || 0;
        const card = document.createElement('div');
        card.className = 'template-card';
        card.setAttribute('data-id', t.id);
        card.setAttribute('data-category', t.category);
        card.innerHTML = `
            <div class="tc-accent-bar"></div>
            <div class="tc-body">
                <div class="tc-header">
                    <div class="tc-category-badge"><i class="fas ${getCategoryIcon(t.category)}"></i>${getCategoryName(t.category)}</div>
                    <span class="tc-used-badge">${used}×</span>
                </div>
                <h4 class="tc-name">${t.name}</h4>
                <div class="tc-preview ${templatesHidden?'':'hidden'}">${t.content.trim().substring(0,120)}${t.content.length>120?'...':''}</div>
                <div class="tc-content ${templatesHidden?'hidden':''}">${t.content}</div>
            </div>
            <div class="tc-footer">
                <span class="tc-tap-hint"><i class="fas fa-hand-pointer"></i> Tap to copy</span>
                <button class="tc-copy-btn" data-id="${t.id}"><i class="fas fa-copy"></i> Copy</button>
            </div>`;
        grid.appendChild(card);
    });
    addTemplateEventListeners();
}
function addTemplateEventListeners() {
    document.querySelectorAll('.tc-copy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) { e.stopPropagation(); copyTemplate(this.getAttribute('data-id')); });
    });
    document.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', function(e) { if (!e.target.closest('.tc-copy-btn')) copyTemplate(this.getAttribute('data-id')); });
    });
}

// ==================== QUICK ACTIONS ====================
function handleQuickAction(type) {
    const map = {
        'order':1,'backup':4,'list':99,'error':7,'2step':23,
        'qr':8,'queue':20,'prem':10,'thanks':14,'premium':15,
        'fix':25,'wrongpw':6,'estimation':9,'checklogin':2,
        'checkemail':3,'reset':11,'webproblem':21,'regencode':22,
        'gp':16,'gkmsk':5
    };
    if (map[type]) copyTemplate(map[type]);
}

// ==================== COPY TEMPLATE ====================
function copyTemplate(id) {
    const t = templatesData.find(t => t.id == id); if (!t) return;
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(t.content).then(() => handleCopySuccess(id, t.name)).catch(() => fallbackCopy(t.content, id, t.name));
    } else { fallbackCopy(t.content, id, t.name); }
}
function handleCopySuccess(id, name) {
    let n = parseInt(localStorage.getItem(`template-${id}-used`) || 0) + 1;
    localStorage.setItem(`template-${id}-used`, n);
    const card = document.querySelector(`.template-card[data-id="${id}"]`);
    if (card) { const badge = card.querySelector('.tc-used-badge'); if (badge) badge.textContent = n+'×'; card.classList.add('copied'); setTimeout(() => card.classList.remove('copied'), 1200); }
    updateStats();
    showToast(`✅ "${name}" dicopy ke clipboard! 📋`);
}
function fallbackCopy(text, id, name) {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { document.execCommand('copy') ? handleCopySuccess(id, name) : showToast('❌ Gagal copy'); }
    catch { showToast('❌ Gagal copy'); }
    finally { document.body.removeChild(ta); }
}

// ==================== SEARCH ====================
function initializeSearch() {
    document.getElementById('searchInput').addEventListener('input', function() {
        const q = this.value.toLowerCase().trim();
        document.querySelectorAll('.template-card').forEach(card => {
            if (!q) { card.style.display = activeCategory==='all'||card.getAttribute('data-category')===activeCategory?'':'none'; return; }
            const n = card.querySelector('.tc-name').textContent.toLowerCase();
            const c = card.querySelector('.tc-content').textContent.toLowerCase();
            const matchCat = activeCategory==='all'||card.getAttribute('data-category')===activeCategory;
            card.style.display = ((n.includes(q)||c.includes(q))&&matchCat)?'':'none';
        });
    });
}
function filterTemplatesByCategory(cat) {
    activeCategory = cat;
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    document.querySelectorAll('.template-card').forEach(card => {
        const matchCat = cat==='all'||card.getAttribute('data-category')===cat;
        const n = card.querySelector('.tc-name').textContent.toLowerCase();
        const c = card.querySelector('.tc-content').textContent.toLowerCase();
        card.style.display = (matchCat&&(!q||n.includes(q)||c.includes(q)))?'':'none';
    });
}

// ==================== THEME ====================
function toggleTheme() {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    localStorage.setItem('theme', dark?'dark':'light');
    document.querySelector('#themeToggle i').className = dark?'fas fa-sun':'fas fa-moon';
    showToast(`${dark?'🌙 Dark':'☀️ Light'} mode aktif`);
}
function initializeTheme() {
    function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark');
        document.querySelector('#themeToggle i').className = 'fas fa-moon';
    } else {
        document.body.classList.add('dark');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
        if (!savedTheme) localStorage.setItem('theme', 'dark');
    }
}

// ==================== TOGGLE TEMPLATES ====================
function toggleAllTemplates() {
    const grid = document.getElementById('templatesGrid'), btn = document.getElementById('toggleAllBtn');
    templatesHidden = !templatesHidden;
    if (templatesHidden) {
        grid.classList.add('hidden'); btn.innerHTML='<i class="fas fa-eye"></i><span>Tampilkan</span>';
        document.querySelectorAll('.tc-preview').forEach(c=>c.classList.remove('hidden'));
        document.querySelectorAll('.tc-content').forEach(c=>c.classList.add('hidden'));
        showToast('👁️ Semua template disembunyikan');
    } else {
        grid.classList.remove('hidden'); btn.innerHTML='<i class="fas fa-eye-slash"></i><span>Sembunyikan</span>';
        document.querySelectorAll('.tc-preview').forEach(c=>c.classList.add('hidden'));
        document.querySelectorAll('.tc-content').forEach(c=>c.classList.remove('hidden'));
        showToast('👁️ Semua template ditampilkan');
    }
}

// ==================== STATS ====================
function updateStats() {
    let total = 0;
    templatesData.forEach(t => { total += parseInt(localStorage.getItem(`template-${t.id}-used`)||0); });
    const el = document.getElementById('totalUsed'); if (el) el.textContent = total;
    const badge = document.querySelector('.stat-badge'); if (badge) badge.textContent = total;
}
function showStats() {
    let total = 0;
    templatesData.forEach(t => { total += parseInt(localStorage.getItem(`template-${t.id}-used`)||0); });
    alert(`📊 STATISTIK TEMPLATE\n====================\nTotal Template: ${templatesData.length}\nTotal Dipakai: ${total}\nTheme: ${document.body.classList.contains('dark')?'Dark':'Light'}`);
}

// ==================== TOAST ====================
function showToast(msg) {
    const t = document.getElementById('toast');
    if (t.timeoutId) clearTimeout(t.timeoutId);
    t.textContent = msg; t.classList.add('show');
    t.timeoutId = setTimeout(() => t.classList.remove('show'), 3000);
}

// ==================== TOOLS TABS ====================
function switchToolTab(tab) {
    const pB=document.getElementById('paneBackup'), pI=document.getElementById('paneInvoice');
    const tB=document.getElementById('tabBackup'),  tI=document.getElementById('tabInvoice');
    if (tab==='invoice') { pI.style.display='block'; pB.style.display='none'; tI.classList.add('active'); tB.classList.remove('active'); }
    else { pB.style.display='block'; pI.style.display='none'; tB.classList.add('active'); tI.classList.remove('active'); }
}

// ==================== SCROLL BUTTONS ====================
function initializeScrollButtons() {
    const scrollTo = sel => { const el=document.querySelector(sel); if(!el) return; window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-120,behavior:'smooth'}); };
    document.getElementById('scrollToResellerFab').addEventListener('click', () => scrollTo('.reseller-section'));
    document.getElementById('scrollToToolsFab').addEventListener('click',    () => scrollTo('.tools-section'));
    document.getElementById('scrollToTopFab').addEventListener('click',      () => { window.scrollTo({top:0,behavior:'smooth'}); showToast('🏠 Kembali ke atas'); });
}

// ==================== BACKUP CODE FORMATTER ====================
function initializeBackupFormatter() {
    const input = document.getElementById('backupInput');
    document.getElementById('clearBackupBtn').addEventListener('click', clearBackupFields);
    document.getElementById('copyBackupBtn').addEventListener('click', copyBackupResult);
    document.getElementById('autoPasteBtn').addEventListener('click', pasteFromClipboard);
    let timer;
    input.addEventListener('input', function() { clearTimeout(timer); timer=setTimeout(()=>{ if(this.value.trim()) generateBackupFormat(); },300); });
    document.getElementById('backupOutput').addEventListener('click', function(e) { e.stopPropagation(); if(!this.textContent.includes('code back up 1: \n')) copyBackupResult(); });
}
// shared extractBackupCodes — juga dipakai invoice
function extractBackupCodes(text) {
    if (!text) return [];
    const codes=[], lines=text.split(/\n/);
    const isCode = s => { const t=s.toLowerCase().trim().replace(/[`'"]/g,''); return t.length===9&&/^[a-z0-9]+$/.test(t)&&!/^\d+$/.test(t)&&!INV_WORD_BLOCK.has(t); };
    const addCode = s => { const t=s.toLowerCase().trim().replace(/[`'"]/g,''); if(isCode(t)&&!codes.includes(t)) codes.push(t); return codes.length>=5; };
    const lp=/(?:code\s*back\s*up|backup\s*kode|kode\s*(?:backup|pemulihan|cadangan)|bc)\s*\d*\s*[:\-=]?\s*/i;
    for (const l of lines) { if(!lp.test(l)) continue; const v=l.replace(lp,'').replace(/[-•\s`'"]/g,'').trim(); if(addCode(v)&&codes.length>=5) return codes; }
    if (codes.length>=5) return codes;
    for (const l of lines) { const m=l.match(/^\s*\d+[.)]\s*([a-z0-9]{9})\s*$/i); if(m&&addCode(m[1])&&codes.length>=5) return codes; }
    if (codes.length>=5) return codes;
    for (const l of lines) { const t=l.trim().replace(/^[-•·*\s]+/,'').trim(); if(/^[a-z0-9]{9}$/i.test(t)&&addCode(t)&&codes.length>=5) return codes; }
    if (codes.length>=5) return codes;
    for (const l of lines) {
        if (/(?:cara|klik|login|akses|pilih|salin|kirim|jangan|supaya|proses|wajib|minimal|backup|roblox|generate|settings|security|transaksi|silahkan|silakan|menggunakan)\b/i.test(l)) continue;
        for (const tok of l.split(/[\s,;|]+/)) { if(addCode(tok)&&codes.length>=5) return codes; }
    }
    return codes.slice(0,5);
}
function generateBackupFormat() {
    const input=document.getElementById('backupInput').value.trim(), out=document.getElementById('backupOutput');
    const empty='🔍 WAJIB DIISI 5 CODE BACKUP!!\n- code back up 1: \n- code back up 2: \n- code back up 3: \n- code back up 4: \n- code back up 5:';
    if (!input) { out.textContent=empty; return; }
    const codes=extractBackupCodes(input);
    if (!codes.length) { out.textContent=empty; showToast('❌ Kode tidak ditemukan'); return; }
    const final=[...codes]; while(final.length<5) final.push(codes[codes.length-1]);
    out.textContent=`🔍 WAJIB DIISI 5 CODE BACKUP!!\n${final.map((c,i)=>`- code back up ${i+1}: \`${c}\``).join('\n')}`;
    showToast(codes.length<5?`⚠️ ${codes.length} kode ditemukan`:`✅ ${codes.length} kode diformat!`);
}
function clearBackupFields() {
    document.getElementById('backupInput').value='';
    document.getElementById('backupOutput').textContent='🔍 WAJIB DIISI 5 CODE BACKUP!!\n- code back up 1: \n- code back up 2: \n- code back up 3: \n- code back up 4: \n- code back up 5:';
    showToast('🧹 Field dibersihkan!');
}
async function pasteFromClipboard() {
    try { const text=await navigator.clipboard.readText(); document.getElementById('backupInput').value=text; generateBackupFormat(); showToast('📋 Paste berhasil!'); }
    catch { showToast('❌ Gagal baca clipboard'); }
}
function copyBackupResult() {
    const text=document.getElementById('backupOutput').textContent;
    const doCopy=t=>{ const ta=document.createElement('textarea'); ta.value=t; ta.style.cssText='position:fixed;left:-9999px'; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy')?showToast('✅ Format dicopy!'):showToast('❌ Gagal');}catch{showToast('❌ Gagal');}finally{document.body.removeChild(ta);}};
    if (navigator.clipboard&&window.isSecureContext) { navigator.clipboard.writeText(text).then(()=>{ showToast('✅ Format dicopy!'); const btn=document.getElementById('copyBackupBtn'); btn.innerHTML='<i class="fas fa-check"></i> Copied!'; setTimeout(()=>{btn.innerHTML='<i class="fas fa-copy"></i> Copy Format';},2000); }).catch(()=>doCopy(text)); } else { doCopy(text); }
}

// ==================== INVOICE PARSER UTILS ====================
function invFormatRobux(raw) {
    if (!raw) return '';
    const s=raw.trim(), isPrem=/prem(?:ium)?/i.test(s);
    let work=s.replace(/r(?:ob(?:ux|ix)?|bx?)\b/gi,'').replace(/prem(?:ium)?\b/gi,'').replace(/[+&]/g,' ').trim();
    work=work.replace(/(\d)[.,](\d{3})(?!\d)/g,'$1$2').replace(/\b(\d+)[kK]\b/g,(_,n)=>String(parseInt(n)*1000));
    const nums=(work.match(/\d+/g)||[]).map(Number).filter(n=>n>0);
    if (!nums.length) return isPrem?'1000R + Premium':'';
    if (isPrem) {
        const P=[450,1000,2200];
        for (const n of nums) if(P.includes(n)) return n+'R + Premium';
        if (nums.includes(2000)) return '2200R + Premium';
        const b=nums.filter(n=>n>=100); if(b.length){const c=P.reduce((a,v)=>Math.abs(a-b[0])<=Math.abs(v-b[0])?a:v); return c+'R + Premium';}
        return '1000R + Premium';
    }
    for (const n of nums) if(INV_PRICELIST.includes(n)) return n+' Robux';
    const best=nums.reduce((a,b)=>{const da=Math.min(...INV_PRICELIST.map(p=>Math.abs(a-p))),db=Math.min(...INV_PRICELIST.map(p=>Math.abs(b-p))); return da<=db?a:b;});
    return best+' Robux';
}
function invExtractUsername(text) {
    const lp=/(?:🫧\s*)?(?:username|user\s*name|roblox\s*(?:id|username|user)|nama\s*akun|akun|usn|usr|user|id)\s*(?:\(@\)\s*)?[:\-–=]\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/gi;
    const ep=/👤\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/;
    const tryX=m1=>{ if(!m1) return ''; return m1.trim().replace(/^[🫧🌸✨👤🔑🛡\s@*_]+|[🫧🌸✨👤🔑🛡\s@*_]+$/g,'').split(/\s+/)[0].trim(); };
    const em=text.match(ep); if(em){const v=tryX(em[1]); if(v&&v.length>=2) return v;}
    let m; lp.lastIndex=0; while((m=lp.exec(text))!==null){const v=tryX(m[1]); if(v&&v.length>=2) return v;}
    return '';
}
function invExtractPassword(text) {
    const lp=/(?:🫧\s*)?(?:password|pasword|pass\s*word|kata\s*sandi|kunci|sandi|pass|pw|pin)\s*[:\-–=]\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/gi;
    const ep=/🔑\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/;
    const tryX=m1=>{ if(!m1) return ''; return m1.trim().replace(/^[🫧🌸✨👤🔑🛡\s]+|[🫧🌸✨👤🔑🛡\s]+$/g,'').trim(); };
    const em=text.match(ep); if(em){const v=tryX(em[1]); if(v&&v.length>=1) return v;}
    let m; lp.lastIndex=0; while((m=lp.exec(text))!==null){const v=tryX(m[1]); if(v&&v.length>=1) return v;}
    return '';
}
function invExtractRobux(text) {
    const sl=text.split('\n').filter(l=>!/(?:backup|code\s*back|kode\s*(?:backup|bc|bekap|pemulihan|cadangan)|sisa\s*rob)/i.test(l));
    const st=sl.join('\n');
    const isPrem=/prem(?:ium)?/i.test(sl.filter(l=>/(?:order|beli|jumlah|nominal|topup|mau|pengen|butuh|request)/i.test(l)||/(?:\d\s*r?\s*(?:\+\s*)?prem|prem\b.*\d|\d+\s*prem)/i.test(l)).join('\n'));
    const norm=st.replace(/(\d+)\s*r(?:ob(?:ux|ix)?|bx?)?\b/gi,'$1').replace(/(\d)[.,](\d{3})(?!\d)/g,'$1$2').replace(/\b(\d+)[kK]\b/g,(_,n)=>String(parseInt(n)*1000));
    const op=/(?:order(?:\s*(?:brp|brap|berapa|robux|rbx|rb))?|top\s*up|topup|beli|jumlah|nominal|mau(?:\s*beli)?|pengen?(?:\s*beli)?|butuh|request)\s*[:\-–=]?\s*([^\n\r]+)/gi;
    let m; op.lastIndex=0;
    while((m=op.exec(norm))!==null){
        if(!/\d/.test(m[1])) continue;
        const nums=(m[1].match(/\d+/g)||[]).map(Number).filter(n=>n>=80);
        if(isPrem){const P=[450,1000,2200]; for(const n of nums) if(P.includes(n)) return n+'prem'; if(nums.includes(2000)) return '2200prem'; if(nums.length){const c=P.reduce((a,b)=>Math.abs(a-nums[0])<=Math.abs(b-nums[0])?a:b); return c+'prem';} return '1000prem';}
        else{for(const n of nums) if(INV_PRICELIST.includes(n)) return String(n);}
    }
    const all=(norm.match(/\b\d+\b/g)||[]).map(Number).filter(n=>n>=80);
    if(isPrem){const P=[450,1000,2200]; for(const n of all) if(P.includes(n)) return n+'prem'; if(all.includes(2000)) return '2200prem'; if(all.length){const c=P.reduce((a,b)=>Math.abs(a-all[0])<=Math.abs(b-all[0])?a:b); return c+'prem';} return '1000prem';}
    for(const n of all) if(INV_PRICELIST.includes(n)) return String(n);
    return '';
}
function invExtractCodes(text) {
    if (!text) return [];
    const codes=[], lines=text.split(/\n/);
    const addCode=tok=>{ const t=tok.toLowerCase().trim().replace(/[`'"]/g,''); if(t.length===9&&/^[a-z0-9]+$/.test(t)&&!/^\d+$/.test(t)&&!INV_WORD_BLOCK.has(t)&&!codes.includes(t)){codes.push(t); return codes.length>=5;} return false; };
    const blp=/(?:code\s*back\s*up|backup\s*kode|kode\s*(?:backup|pemulihan|cadangan)|cadangan|bc)\s*\d*\s*[:\-–=]?\s*/i;
    for(let i=0;i<lines.length;i++){
        const line=lines[i]; if(!blp.test(line)) continue;
        const chunk=[line];
        for(let j=i+1;j<=i+2&&j<lines.length;j++){const nx=lines[j].trim(); if(blp.test(nx)&&!/^[a-z0-9]{9}$/i.test(nx.replace(/\W/g,''))) break; if(/(?:username|password|order|bukti|payment|foto)/i.test(nx)&&!/^[a-z0-9]{9}$/i.test(nx.replace(/\W/g,''))) break; chunk.push(nx);}
        for(const tok of chunk.join(' ').replace(blp,' ').split(/[\s,;|`'\-]+/)){ if(addCode(tok)&&codes.length>=5) return codes; }
    }
    if(codes.length>=5) return codes.slice(0,5);
    for(const l of lines){const m=l.match(/^\s*\d+[.)]\s*([a-z0-9]{9})\s*$/i); if(m&&addCode(m[1])&&codes.length>=5) return codes;}
    if(codes.length>=5) return codes.slice(0,5);
    for(const l of lines){const m=l.match(/^\s*[-•·*]\s*([a-z0-9]{9})\s*$/i); if(m&&addCode(m[1])&&codes.length>=5) return codes;}
    if(codes.length>=5) return codes.slice(0,5);
    const fl=lines.filter(l=>!/(?:username|usn|usr|user|password|pasword|pw|pass|order|nominal|jumlah|sisa|bukti|payment|format|topup|harap|wajib|tuliskan|minimal|roblox|mimin|admin|cara|klik|login|akses|pilih|salin|kirim|jangan|supaya|proses|biar)\b/i.test(l)&&!/^[A-Z\s!?,.-]+$/.test(l.trim()));
    for(const tok of fl.join('\n').replace(/[^\w\s\n]/g,' ').split(/[\s\n\r]+/)){ if(addCode(tok)&&codes.length>=5) return codes; }
    return codes.slice(0,5);
}

// ==================== INVOICE KONSEP 4 — STATE ====================
let inv4State = { robux:'', user:'', pass:'', codes:[], lookupTimer:null, lookupAbort:null };

// ==================== INV4: AUTO PASTE — klik → baca clipboard → parse langsung ====================
async function inv4DoPaste() {
    try {
        const text = await navigator.clipboard.readText();
        if (!text.trim()) { showToast('❌ Clipboard kosong!'); return; }
        document.getElementById('inv4RawPaste').value = text;
        inv4Parse(text);
        showToast('📋 Paste & parse berhasil!');
    } catch { showToast('❌ Gagal baca clipboard. Izinkan akses dulu.'); }
}

// auto parse saat user paste langsung ke textarea
let inv4RawTimer = null;
function inv4OnRawPaste() {
    clearTimeout(inv4RawTimer);
    // sedikit delay biar paste selesai dulu
    inv4RawTimer = setTimeout(() => {
        const val = document.getElementById('inv4RawPaste').value.trim();
        if (val.length > 15) inv4Parse(val);
    }, 100);
}
function inv4OnRawInput() {
    clearTimeout(inv4RawTimer);
    inv4RawTimer = setTimeout(() => {
        const val = document.getElementById('inv4RawPaste').value.trim();
        if (val.length > 20) inv4Parse(val);
    }, 600);
}

// ==================== INV4: CLEAR ====================
function inv4Clear() {
    if (inv4State.lookupAbort) { inv4State.lookupAbort(); inv4State.lookupAbort = null; }
    clearTimeout(inv4State.lookupTimer);
    clearTimeout(inv4RawTimer);
    inv4State = { robux:'', user:'', pass:'', codes:[], lookupTimer:null, lookupAbort:null };

    const rawPaste = document.getElementById('inv4RawPaste'); if (rawPaste) rawPaste.value = '';
    ['inv4Robux','inv4User','inv4Pass'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
    const raw = document.getElementById('inv4BackupRaw'); if(raw) { raw.value=''; raw.style.display='none'; }

    inv4SetStatus('inv4StatusRobux','','');
    inv4SetStatus('inv4StatusUser','','');
    inv4SetStatus('inv4StatusPass','','');
    inv4SetStatus('inv4StatusBackup','','');

    inv4RenderChips([]);
    inv4ResetAvatar();

    ['inv4CardRobux','inv4CardUser','inv4CardPass','inv4CardBackup'].forEach(id => {
        const el=document.getElementById(id); if(el) el.classList.remove('state-ok','state-err');
    });

    const btn=document.getElementById('inv4EditBtn'); if(btn) btn.innerHTML='<i class="fas fa-edit"></i> Edit';
    const chips=document.getElementById('inv4ChipsWrap'); if(chips) chips.style.display='flex';

    showToast('🧹 Cleared!');
}

// ==================== INV4: PARSE ====================
function inv4Parse(raw) {
    if (!raw || !raw.trim()) return;

    let cleaned = raw.replace(/\[\d{1,2}\/\d{1,2}\/\d{2,4}[^\]]*\]\s*[^:\n]+:\s*/g,'').trim();
    cleaned = cleaned.split('\n').filter(l =>
        !/harap\s+diisi|jika\s+prem\s+tulis|tulis\s+order\s+brp|wajib\s+diisi\s+dengan\s+lengkap|tuliskan\s+minimal|boleh\s+sambil\s+dimainkan|tidak\s+mengganggu|meski\s+kamu\s+offline|robux\s+tetap\s+bisa|harap\s+dibaca/i.test(l)
    ).join('\n');

    const username       = invExtractUsername(cleaned);
    const password       = invExtractPassword(cleaned);
    const robuxRaw       = invExtractRobux(cleaned);
    const codes          = invExtractCodes(cleaned);
    const robuxFormatted = robuxRaw ? (invFormatRobux(robuxRaw) || robuxRaw) : '';

    document.getElementById('inv4Robux').value = robuxFormatted;
    document.getElementById('inv4User').value  = username;
    document.getElementById('inv4Pass').value  = password;

    inv4State.robux = robuxFormatted;
    inv4State.user  = username;
    inv4State.pass  = password;
    inv4State.codes = codes;

    inv4RenderChips(codes);
    inv4UpdateStatuses();

    if (username) inv4TriggerLookup(username);
}

// ==================== INV4: FIELD CHANGED (oninput dari HTML) ====================
function inv4FieldChanged() {
    inv4State.robux = document.getElementById('inv4Robux').value.trim();
    inv4State.user  = document.getElementById('inv4User').value.trim();
    inv4State.pass  = document.getElementById('inv4Pass').value.trim();
    inv4UpdateStatuses();
}

// format robux saat blur field robux
function inv4FormatRobuxField() {
    const el = document.getElementById('inv4Robux');
    const formatted = invFormatRobux(el.value.trim());
    if (formatted) { el.value = formatted; inv4State.robux = formatted; }
    inv4UpdateStatuses();
}

// ==================== INV4: BACKUP RAW INPUT ====================
function inv4BackupRawChanged() {
    const raw = document.getElementById('inv4BackupRaw').value;
    const codes = invExtractCodes(raw);
    inv4State.codes = codes;
    inv4UpdateStatuses();
    // update chips di background (masih tersembunyi tapi siap saat simpan)
}

// ==================== INV4: TOGGLE BACKUP EDIT ====================
function inv4ToggleBackupEdit() {
    const raw   = document.getElementById('inv4BackupRaw');
    const chips = document.getElementById('inv4ChipsWrap');
    const btn   = document.getElementById('inv4EditBtn');

    if (raw.style.display === 'none') {
        // buka raw textarea
        raw.value = inv4State.codes.join('\n');
        raw.style.display = 'block';
        chips.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-check"></i> Simpan';
        raw.focus();
    } else {
        // simpan → render chips
        const codes = invExtractCodes(raw.value);
        inv4State.codes = codes;
        inv4RenderChips(codes);
        raw.style.display = 'none';
        chips.style.display = 'flex';
        btn.innerHTML = '<i class="fas fa-edit"></i> Edit';
        inv4UpdateStatuses();
    }
}

// ==================== INV4: STATUS BADGES ====================
function inv4SetStatus(id, cls, text) {
    const el = document.getElementById(id); if (!el) return;
    el.textContent = text;
    el.className = 'inv4-card-status' + (cls ? ' '+cls : '');
}
function inv4UpdateStatuses() {
    const r = document.getElementById('inv4Robux').value.trim();
    inv4SetStatus('inv4StatusRobux', r?'ok':'warn', r?'✓':'—');
    const cR = document.getElementById('inv4CardRobux'); if(cR) { cR.classList.toggle('state-ok',!!r); cR.classList.remove('state-err'); }

    const u = document.getElementById('inv4User').value.trim();
    // status user diatur oleh lookup — hanya update jika kosong
    if (!u) { inv4SetStatus('inv4StatusUser','warn','—'); const cU=document.getElementById('inv4CardUser'); if(cU){cU.classList.remove('state-ok','state-err');} }

    const p = document.getElementById('inv4Pass').value.trim();
    inv4SetStatus('inv4StatusPass', p?'ok':'warn', p?'✓':'—');
    const cP = document.getElementById('inv4CardPass'); if(cP) { cP.classList.toggle('state-ok',!!p); cP.classList.remove('state-err'); }

    const n = inv4State.codes.length;
    inv4SetStatus('inv4StatusBackup', n>=5?'ok':'warn', n>=5?'5/5 ✓':n+'/5');
    const cB = document.getElementById('inv4CardBackup'); if(cB) { cB.classList.toggle('state-ok',n>=5); cB.classList.remove('state-err'); }
}

// ==================== INV4: CHIPS RENDER ====================
function inv4RenderChips(codes) {
    inv4State.codes = codes;
    const wrap = document.getElementById('inv4ChipsWrap'); if (!wrap) return;
    wrap.innerHTML = '';
    if (!codes.length) {
        wrap.innerHTML = '<span style="font-size:0.68rem;color:var(--muted);opacity:0.5;font-style:italic;">Belum ada kode…</span>';
        return;
    }
    codes.forEach(c => {
        const chip = document.createElement('span');
        chip.className = 'inv4-chip'; chip.textContent = c;
        wrap.appendChild(chip);
    });
    for (let i = codes.length; i < 5; i++) {
        const chip = document.createElement('span');
        chip.className = 'inv4-chip miss'; chip.textContent = 'kode '+(i+1);
        wrap.appendChild(chip);
    }
}

// ==================== INV4: COPY ====================
function inv4Copy() {
    const robux = inv4State.robux || document.getElementById('inv4Robux').value.trim();
    const user  = inv4State.user  || document.getElementById('inv4User').value.trim();
    const pass  = inv4State.pass  || document.getElementById('inv4Pass').value.trim();
    const codes = inv4State.codes;

    if (!robux && !user && !pass) { showToast('❌ Isi dulu data customernya!'); return; }

    const cp = []; for (let i=0;i<5;i++) cp.push(codes[i]||'???');

    const text =
        'DETAIL PESANAN KAMU\n\n' +
        '✨ Jumlah Robux: `' + (robux||'???') + '`\n' +
        '👤 Username: `'    + (user ||'???') + '`\n' +
        '🔑 Password: `'    + (pass ||'???') + '`\n' +
        '🛡 Backup Code: `' + cp.join(', ')  + '`';

    const doCopy = () => {
        const ta=document.createElement('textarea'); ta.value=text; ta.style.cssText='position:fixed;left:-9999px';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        showToast('✅ Invoice dicopy! Paste ke Telegram 🎉');
    };
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => showToast('✅ Invoice dicopy! Paste ke Telegram 🎉')).catch(doCopy);
    } else { doCopy(); }
}

// ==================== INV4: AVATAR STATES ====================
function inv4ResetAvatar() {
    const show=['inv4AvatarEmpty'], hide=['inv4AvatarLoading','inv4AvatarFound','inv4AvatarErr','inv4UserCheck','inv4UserX'];
    show.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='flex';});
    hide.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});
    const wrap=document.getElementById('inv4UsernameWrap');
    if(wrap){wrap.classList.remove('state-found','state-err');}
    inv4SetStatus('inv4StatusUser','','');
    const card=document.getElementById('inv4CardUser'); if(card) card.classList.remove('state-ok','state-err');
}
function inv4ShowAvatarLoading(msg) {
    const show=['inv4AvatarLoading'], hide=['inv4AvatarEmpty','inv4AvatarFound','inv4AvatarErr','inv4UserCheck','inv4UserX'];
    show.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='flex';});
    hide.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});
    const card=document.getElementById('inv4CardUser'); if(card) card.classList.remove('state-ok','state-err');
    inv4SetStatus('inv4StatusUser','warn', msg || '⏳ Mencari...');
}
function inv4ShowAvatarFound(userId) {
    const show=['inv4AvatarFound','inv4UserCheck'], hide=['inv4AvatarEmpty','inv4AvatarLoading','inv4AvatarErr','inv4UserX'];
    show.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='flex';});
    hide.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});

    const img = document.getElementById('inv4AvatarImg');
    if (img) img.src = ROBLOX_PROXY_URL + '/avatar?userId=' + userId;

    const card = document.getElementById('inv4CardUser');
    if (card) { card.classList.add('state-ok'); card.classList.remove('state-err'); }

    inv4SetStatus('inv4StatusUser', 'ok', '✓');

    // cek premium — badge di pojok kanan bawah avatar
    fetch(ROBLOX_PROXY_URL + '/premium?userId=' + userId)
        .then(r => r.json())
        .then(d => {
            const prem = document.getElementById('inv4AvatarPrem');
            if (prem) prem.style.display = d.isPremium ? 'block' : 'none';
        })
        .catch(() => {});
}
function inv4ShowAvatarErr(msg) {
    const show=['inv4AvatarErr','inv4UserX'], hide=['inv4AvatarEmpty','inv4AvatarLoading','inv4AvatarFound','inv4UserCheck'];
    show.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='flex';});
    hide.forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});

    const card = document.getElementById('inv4CardUser');
    if (card) { card.classList.remove('state-ok'); card.classList.add('state-err'); }

    inv4SetStatus('inv4StatusUser', 'err', msg || 'tidak ditemukan');
}

// ==================== INV4: USERNAME LOOKUP — Roblox API, retry tanpa batas sampai berhasil ====================
function inv4TriggerLookup(username) {
    // batalkan lookup sebelumnya
    if (inv4State.lookupAbort) { inv4State.lookupAbort(); inv4State.lookupAbort = null; }
    clearTimeout(inv4State.lookupTimer);

    if (!username || username.trim().length < 3) { inv4ResetAvatar(); return; }

    // reset status dulu biar tidak sisa teks dari state sebelumnya
    inv4ShowAvatarLoading('⏳ Mencari...');

    let cancelled = false;
    inv4State.lookupAbort = () => { cancelled = true; };

    inv4State.lookupTimer = setTimeout(async () => {
        const clean = username.trim().replace(/\s+/g, '');
        let attempt = 0;
        const delays = [0, 500, 1000, 1500, 2000];

        while (!cancelled) {
            const delay = attempt < delays.length ? delays[attempt] : 2000;

            if (delay > 0) {
                // delay yang bisa dibatalkan
                await new Promise(resolve => {
                    const t = setTimeout(resolve, delay);
                    const check = setInterval(() => {
                        if (cancelled) { clearTimeout(t); clearInterval(check); resolve(); }
                    }, 100);
                    setTimeout(() => clearInterval(check), delay + 100);
                });
            }

            if (cancelled) break;

            // update status teks per percobaan
            if (attempt === 0) {
                inv4ShowAvatarLoading('⏳ Mengecek username...');
            } else {
                inv4ShowAvatarLoading(`⚠️ Gagal, mencoba ulang (percobaan ${attempt + 1})...`);
            }

            try {
                const ctrl  = new AbortController();
                const timer = setTimeout(() => ctrl.abort(), 8000);

                const res = await fetch(ROBLOX_PROXY_URL, {
                    method:  'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body:    JSON.stringify({ usernames: [clean] }),
                    signal:  ctrl.signal,
                });
                clearTimeout(timer);
                if (cancelled) break;

                if (!res.ok) { attempt++; continue; } // retry

                const data = await res.json();
                if (cancelled) break;

                if (data?.data && data.data.length > 0) {
                    inv4ShowAvatarFound(data.data[0].id);
                    return;
                }

                // response valid tapi kosong = username memang tidak ada di Roblox, stop retry
                if (res.ok && data && !data.error) {
                    inv4ShowAvatarErr('"' + clean + '" tidak ditemukan di Roblox');
                    return;
                }

                // error dari server = retry
                attempt++;

            } catch (e) {
                if (cancelled) break;
                attempt++;
            }
        }
        // hanya sampai sini kalau cancelled
    }, 400);
}

// ==================== WORKER WARMUP ====================
function warmUpWorker() { fetch(ROBLOX_PROXY_URL, { method: 'GET' }).catch(() => {}); }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') warmUpWorker(); });

// ==================== RESELLER ====================
const nominalData = [
    {amount:"80robux",price:"Rp 14.700"},{amount:"80robux 2",price:"Rp 29.400"},
    {amount:"80robux 3",price:"Rp 44.100"},{amount:"80robux 4",price:"Rp 58.800"},
    {amount:"450prem",price:"Rp 73.500"},{amount:"500robux",price:"Rp 73.500"},
    {amount:"1000prem",price:"Rp 147.000"},{amount:"1000robux",price:"Rp 147.000"},
    {amount:"1500robux",price:"Rp 220.500"},{amount:"2000robux",price:"Rp 294.000"},
    {amount:"2200prem",price:"Rp 294.000"},{amount:"2500robux",price:"Rp 367.500"},
    {amount:"3000robux",price:"Rp 441.000"},{amount:"4000robux",price:"Rp 588.000"},
    {amount:"4500robux",price:"Rp 661.500"},{amount:"5000robux",price:"Rp 735.000"},
    {amount:"10000robux",price:"Rp 1.470.000"},{amount:"22500robux",price:"Rp 3.013.500"}
];
const resellerData = [
    {displayName:"𝐴.",username:"@thelaxdy",color:"#F59E0B"},{displayName:".",username:"@rnachye",color:"#6B7280"},
    {displayName:"Adrian",username:"@adrianfpp",color:"#7C3AED"},{displayName:"Ayy",username:"@babiayy",color:"#F97316"},
    {displayName:"Bang Raf",username:"@M eowzstor_2",color:"#EAB308"},{displayName:"BiBi",username:"@antariixca",color:"#EC4899"},
    {displayName:"BW S",username:"@bws45",color:"#059669"},{displayName:"cainecha.",username:"@ceakecaine",color:"#84CC16"},
    {displayName:"celeste",username:"@sixiSiwhh",color:"#06B6D4"},{displayName:"ceyyyyy🎀",username:"@cherrybwryy",color:"#EC4899"},
    {displayName:"cerr",username:"@realceri",color:"#6366F1"},{displayName:"cher",username:"@renaissancht",color:"#F43F5E"},
    {displayName:"Cinamonroll Store",username:"@Cinamonrollstore",color:"#A855F7"},{displayName:"ciyAak.🪞",username:"@mriacle",color:"#06B6D4"},
    {displayName:"deuk",username:"@deukiemuws",color:"#A855F7"},{displayName:"Dito.",username:"@Sergeanzt",color:"#0EA5E9"},
    {displayName:"ಇ. Sagii",username:"@moocsi",color:"#8B5CF6"},{displayName:"fibi",username:"@fibiclouds",color:"#84CC16"},
    {displayName:"Freya🧸",username:"@madamerels",color:"#F43F5E"},{displayName:"Han",username:"@Jenieus",color:"#10B981"},
    {displayName:"hunter x",username:"@syayays",color:"#36D399"},{displayName:"iLoblox [OPEN]",username:"@iLoblox",color:"#F59E0B"},
    {displayName:"Jendap",username:"@uywell",color:"#6366F1"},{displayName:"JIU",username:"@fldkdi",color:"#3B82F6"},
    {displayName:"kachi",username:"@maoakiho",color:"#EF4444"},{displayName:"Kenzie N.",username:"@8ubueK",color:"#3B82F6"},
    {displayName:"Kim Dokja",username:"@tantebocil",color:"#DC2626"},{displayName:"Kristoper kennedy",username:"@kristoperr",color:"#D97706"},
    {displayName:"Mello",username:"@fluoridaa",color:"#10B981"},{displayName:"𝒎𝒂𝒔𝒉𝒂",username:"@mashabear",color:"#FF6B8B"},
    {displayName:"Nado",username:"@itsnadorable",color:"#10B981"},{displayName:"Nayy",username:"@NayShiiee02",color:"#8B5CF6"},
    {displayName:"ndutt.roblox",username:"@nduttroblox",color:"#8B5CF6"},{displayName:"Oliv",username:"@oliv",color:"#14B8A6"},
    {displayName:"oyas",username:"@oyasstore",color:"#84CC16"},{displayName:"P",username:"@ptriramadhani",color:"#64748B"},
    {displayName:"pakong",username:"@p4kong",color:"#D97706"},{displayName:"racha",username:"@caxzik",color:"#EF4444"},
    {displayName:"Robuxrich",username:"@Robuxrichstore",color:"#059669"},{displayName:"ryn",username:"@fruwit",color:"#8B5CF6"},
    {displayName:"sha",username:"@ryouvtine",color:"#EC4899"},{displayName:"Sheéya",username:"@cepatE",color:"#F97316"},
    {displayName:"Shiro",username:"@shirobloxid",color:"#64748B"},{displayName:"shiyee slebew",username:"@Shyevieur",color:"#0EA5E9"},
    {displayName:"vanessa",username:"@eldavanessa",color:"#84CC16"},{displayName:"wawaaa",username:"@jawaawa",color:"#F59E0B"},
    {displayName:"Wendywx",username:"@wendywxshop",color:"#EC4899"},{displayName:"Wid",username:"@Wid12123",color:"#22C55E"},
    {displayName:"zal",username:"@zalgol13",color:"#3B82F6"},{displayName:"ZEPHYR KANG ROBUX",username:"@ZephyrKangRobux",color:"#0EA5E9"},
    {displayName:"zoya",username:"@deartwork",color:"#EC4899"},{displayName:"♡! ﹏",username:"@THOTIANA",color:"#8B5CF6"}
];
let rsState = {command:'proses',nominal:null,reseller:null};
function initializeResellerBot() { renderResellerUI(); }
function renderResellerUI() {
    const container=document.querySelector('.reseller-container'); if(!container) return;
    container.innerHTML=`
        <div class="rs-tabs">
            <button class="rs-tab ${rsState.command==='proses'?'active':''}" data-cmd="proses"><i class="fas fa-play-circle"></i> /proses</button>
            <button class="rs-tab ${rsState.command==='addsaldo'?'active':''}" data-cmd="addsaldo"><i class="fas fa-plus-circle"></i> /addsaldo</button>
            <button class="rs-tab ${rsState.command==='kurangsaldo'?'active':''}" data-cmd="kurangsaldo"><i class="fas fa-minus-circle"></i> /kurangsaldo</button>
        </div>
        <div class="rs-section ${rsState.command!=='proses'?'hidden':''}">
            <div class="rs-section-label"><i class="fas fa-coins"></i> Pilih Nominal</div>
            <div class="rs-nominal-wrap">${nominalData.map(n=>`<button class="rs-nominal-chip ${rsState.nominal===n.amount?'selected':''}" data-amount="${n.amount}"><span class="rs-chip-amount">${n.amount}</span><span class="rs-chip-price">${n.price}</span></button>`).join('')}</div>
        </div>
        <div class="rs-section">
            <div class="rs-section-label"><i class="fas fa-users"></i> Pilih Reseller</div>
            <div class="rs-search-wrap"><i class="fas fa-search rs-search-icon"></i><input type="text" class="rs-search-input" id="rsSearchInput" placeholder="Cari nama atau username..."><button class="rs-clear-search" id="rsClearSearch" style="display:none"><i class="fas fa-times"></i></button></div>
            <div class="rs-reseller-grid" id="rsResellerGrid">${resellerData.map((r,i)=>`<button class="rs-reseller-card ${rsState.reseller===r.username?'selected':''}" data-username="${r.username}" data-index="${i}"><div class="rs-avatar" style="background:${r.color}">${[...r.displayName.trim()][0]||'?'}</div><div class="rs-rinfo"><div class="rs-rname">${r.displayName}</div><div class="rs-rusername">${r.username}</div></div><i class="fas fa-check rs-check-icon"></i></button>`).join('')}</div>
        </div>
        <div class="rs-result-bar ${(rsState.reseller&&(rsState.command!=='proses'||rsState.nominal))?'active':''}" id="rsResultBar">
            <div class="rs-result-preview" id="rsResultPreview">—</div>
            <button class="rs-copy-btn" id="rsCopyBtn"><i class="fas fa-copy"></i> Copy</button>
        </div>`;
    container.querySelectorAll('.rs-tab').forEach(tab=>{ tab.addEventListener('click',function(){ rsState.command=this.dataset.cmd; rsState.nominal=null; rsState.reseller=null; renderResellerUI(); }); });
    container.querySelectorAll('.rs-nominal-chip').forEach(chip=>{ chip.addEventListener('click',function(){ rsState.nominal=this.dataset.amount; container.querySelectorAll('.rs-nominal-chip').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); updateRsResult(); }); });
    container.querySelectorAll('.rs-reseller-card').forEach(card=>{ card.addEventListener('click',function(){ rsState.reseller=this.dataset.username; container.querySelectorAll('.rs-reseller-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); updateRsResult(); }); });
    const si=document.getElementById('rsSearchInput'), cb=document.getElementById('rsClearSearch');
    si.addEventListener('input',function(){ const q=this.value.toLowerCase().trim(); cb.style.display=q?'flex':'none'; filterResellers(q); });
    cb.addEventListener('click',function(){ si.value=''; this.style.display='none'; filterResellers(''); });
    document.getElementById('rsCopyBtn').addEventListener('click',copyRsResult);
    updateRsResult();
}
function filterResellers(q) { document.querySelectorAll('.rs-reseller-card').forEach(card=>{ const r=resellerData[parseInt(card.dataset.index)]; if(!q){card.style.display='flex';return;} card.style.display=(r.displayName.toLowerCase().includes(q)||r.username.toLowerCase().includes(q))?'flex':'none'; }); }
function buildRsCommand() { if(!rsState.reseller) return null; if(rsState.command==='proses'){if(!rsState.nominal) return null; return `/proses ${rsState.nominal} ${rsState.reseller}`;} return `/${rsState.command} ${rsState.reseller}`; }
function updateRsResult() {
    const cmd=buildRsCommand(), bar=document.getElementById('rsResultBar'), preview=document.getElementById('rsResultPreview'); if(!bar||!preview) return;
    if(cmd){preview.textContent=cmd;bar.classList.add('active');}
    else{let h='—'; if(!rsState.reseller&&rsState.command==='proses'&&!rsState.nominal) h='Pilih nominal & reseller'; else if(rsState.command==='proses'&&!rsState.nominal) h='Pilih nominal dulu'; else if(!rsState.reseller) h='Pilih reseller dulu'; preview.textContent=h; bar.classList.remove('active');}
}
function copyRsResult() {
    const cmd=buildRsCommand(); if(!cmd){showToast('❌ Pilih nominal & reseller dulu!');return;}
    const dc=()=>{const ta=document.createElement('textarea');ta.value=cmd;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);showToast(`✅ Command dicopy: ${cmd}`);};
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(cmd).then(()=>showToast(`✅ Command dicopy: ${cmd}`)).catch(dc);}else{dc();}
}

// ==================== ADDRESS MODAL ====================
function addressModalOpen() { document.getElementById('addressKeyInput').value=''; document.getElementById('addressKeyError').textContent=''; document.getElementById('addressKeyScreen').style.display='block'; document.getElementById('addressContent').style.display='none'; document.getElementById('addressModalOverlay').classList.add('open'); setTimeout(()=>document.getElementById('addressKeyInput').focus(),100); }
function addressModalClose() { document.getElementById('addressModalOverlay').classList.remove('open'); }
function addressModalCloseOutside(e) { if(e.target===document.getElementById('addressModalOverlay')) addressModalClose(); }
function addressToggleKey(btn) { const inp=document.getElementById('addressKeyInput'); const hide=inp.type==='password'; inp.type=hide?'text':'password'; btn.querySelector('.toggle-icon').textContent=hide?'🙈':'👁️'; }
function addressCheckKey() {
    const val=document.getElementById('addressKeyInput').value.trim(), err=document.getElementById('addressKeyError');
    if(val==='ambatukam'){err.textContent='';document.getElementById('addressKeyScreen').style.display='none';document.getElementById('addressContent').style.display='block';}
    else{err.textContent='❌ Secret key salah!';document.getElementById('addressKeyInput').value='';document.getElementById('addressKeyInput').focus();}
}
function addressCopy(text, el) {
    const done=()=>{ el.classList.add('copied'); el.querySelector('.addr-copy-icon').className='fas fa-check addr-copy-icon'; showToast('✅ "'+text+'" dicopy!'); setTimeout(()=>{el.classList.remove('copied');el.querySelector('.addr-copy-icon').className='fas fa-copy addr-copy-icon';},1500); };
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done).catch(()=>{const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;left:-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);done();});}
    else{const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;left:-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);done();}
}
document.addEventListener('keydown', e => { if(e.key==='Escape') addressModalClose(); });

// ==================== EXPOSE TO GLOBAL ====================
window.addressModalOpen     = addressModalOpen;
window.addressModalClose    = addressModalClose;
window.addressCheckKey      = addressCheckKey;
window.addressToggleKey     = addressToggleKey;
window.addressCopy          = addressCopy;
window.switchToolTab        = switchToolTab;
window.inv4DoPaste          = inv4DoPaste;
window.inv4OnRawInput       = inv4OnRawInput;
window.inv4OnRawPaste       = inv4OnRawPaste;
window.inv4Clear            = inv4Clear;
window.inv4FieldChanged     = inv4FieldChanged;
window.inv4FormatRobuxField = inv4FormatRobuxField;
window.inv4TriggerLookup    = inv4TriggerLookup;
window.inv4BackupRawChanged = inv4BackupRawChanged;
window.inv4ToggleBackupEdit = inv4ToggleBackupEdit;
window.inv4Copy             = inv4Copy;

// ==================== MAIN INIT ====================
document.addEventListener('DOMContentLoaded', function() {
    renderApp(); 
    loadTemplates();
    initializeTheme();
    initializeSearch();
    initializeResellerBot();
    updateStats();
    initializeScrollButtons();
    initializeBackupFormatter();
    warmUpWorker();

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('showStats').addEventListener('click', showStats);
    document.getElementById('toggleAllBtn').addEventListener('click', toggleAllTemplates);

    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function() { handleQuickAction(this.getAttribute('data-template')); });
    });
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterTemplatesByCategory(this.getAttribute('data-category'));
        });
    });
});
