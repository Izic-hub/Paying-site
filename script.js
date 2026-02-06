function payGo(){
   alert('YOU ARE WELCOME TO IZIC✨ PAY~GO');
}
// ||hamburgerMenu
   const hamburgerMenu = document.querySelector('.hamburger-menu');
   const navMenu = document.querySelector('ul');
   hamburgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
   });

   // ||copywright
const yearP = document.querySelector('#year');
const date = new Date();
const year = date.getFullYear()

yearP.textContent = year;
console.log(year);


   // ||sign_up Form validation
   document.querySelector('#signup-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const createPassword = document.querySelector('#create-password').value;
      const confirmPassword = document.querySelector('#confirm-password').value;
      const couponCode = document.querySelector('#coupon').value;
      
      // Check if passwords match
      if (createPassword !== confirmPassword) {
         alert('Passwords do not match!');
         return;
      }
      
      // Check if coupon code is valid
      if (couponCode !== '135700') {
         alert('Invalid coupon code! Please enter the correct code.');
         return;
      }
      
      alert('Form submitted successfully!');
      this.submit(); 
   });

   
   // || sign_in Form validation
   document.querySelector('#signup-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const createPassword = document.querySelector('#create-password').value;
      
      const couponCode = document.querySelector('#coupon').value;
      
      // Check if coupon code is valid
      if (couponCode !== '135700') {
         alert('Invalid coupon code! Please enter the correct code.');
         return;
      }
      
      alert('Form submitted successfully!');
      this.submit(); 
   });

      // ||Reward store botten _@main
   function showRewardStore() {
      // Implement reward redemption system here
      alert('Reward Store Coming Soon!');
   }
      //withdraw
   function withDraw() {
      alert('Withdrawal pending...');
   }
   