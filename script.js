/* =============================================
   PAY-GO — MAIN SCRIPT
   ============================================= */

// ── Welcome alert (logo click on index)
function payGo() {
  alert('YOU ARE WELCOME TO IZIC✨ PAY-GO');
}

// ── Auto copyright year
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ── Hamburger menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');
if (hamburgerMenu && navMenu) {
  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// ── Sign-Up Form validation (singup.html only)
const signupForm = document.querySelector('#signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const createPassword  = document.querySelector('#create-password');
    const confirmPassword = document.querySelector('#confirm-password');
    const couponCode      = document.querySelector('#coupon');

    // Only run password-match check on sign-up page (has confirm-password field)
    if (confirmPassword) {
      if (createPassword.value !== confirmPassword.value) {
        alert('Passwords do not match. Please try again.');
        return;
      }
    }

    // Coupon validation
    if (couponCode && couponCode.value !== '135700') {
      alert('Invalid coupon code. Please enter the correct code.');
      return;
    }

    alert('Account created successfully! Welcome to Pay-Go ✨');
    this.submit();
  });
}

// ── Dashboard: progress bar animation
const progressFill = document.querySelector('#progressFill');
const progressPct  = document.querySelector('#progress-pct');
if (progressFill) {
  // Simulate a progress value (replace with real logic later)
  const progress = Math.floor(Math.random() * 60) + 10;
  setTimeout(() => {
    progressFill.style.width = progress + '%';
    if (progressPct) progressPct.textContent = progress + '%';
  }, 300);
}

// ── Reward store
function showRewardStore() {
  alert('🎁 Reward Store Coming Soon!');
}

// ── Withdraw
function withDraw() {
  alert('💰 Withdrawal request received. Processing...');
}
