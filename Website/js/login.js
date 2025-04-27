const signUpBtn = document.getElementById('sign-up-btn');
const loginBtn = document.getElementById('login-btn');
const sliderToggleLeft = document.querySelector('.slider-toggle.left');
const sliderToggleRight = document.querySelector('.slider-toggle.right');

function sliderToggle(showSlider, hideSlider) {
    showSlider.style.display = 'flex';
    hideSlider.style.display = 'none';
    
    setTimeout(() => {
        hideSlider.style.opacity = '0';
        showSlider.style.opacity = '1';
    }, 50);
}

signUpBtn.addEventListener('click', () => sliderToggle(sliderToggleRight, sliderToggleLeft));
loginBtn.addEventListener('click', () => sliderToggle(sliderToggleLeft, sliderToggleRight));


// Login as user or doctor
const loginForm = document.querySelector('.login-form');
const loginMainHeading = loginForm.querySelector('main');
const loginAsBtn = document.querySelector('.login-as-btn');
const registerForm = document.querySelector('.register-form');
const registerMainHeading = registerForm.querySelector('main');

const toggleLoginType = () => {
  const isDoctor = loginMainHeading.querySelector('h1').textContent.includes('Doctor');
  
  loginMainHeading.innerHTML = `<h1>Login As a ${isDoctor ? 'User' : 'Doctor'}</h1>
    <p>Login using social Networks</p>`;
  
  registerMainHeading.innerHTML = `<h1>Create Account as ${isDoctor ? 'User' : 'Doctor'}</h1>`;

  const iconType = isDoctor ? 'user' : 'doctor';
  const buttonText = isDoctor ? 'Doctor' : 'User';
  
  loginForm.querySelector('form').innerHTML = `
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button class="forget-password-btn" type="button">Forget Password ?</button>
    <input class="submit" type="submit" value="Login">
    <button type="button" class="login-as-btn">
      <span>
        <img src="./Images/Icons/Login/${iconType}-login.svg" alt="${iconType} icon">
        <p>Login As a ${buttonText}</p>
      </span>
    </button>
  `;

  registerForm.querySelector('form').innerHTML= `
    <label for="user-image-upload" class="image-upload">
      <img src="./Images/Icons/Login/syndicate-image-icon.svg" alt="user profile image">
      <input type="file" id="user-image-upload" accept="image/*" style="display: none;">
      <p>Syndicate Image</p>
    </label>
    <div class="input-group">
      <input type="text" placeholder="first name">
      <input type="text" placeholder="last name">
    </div>
    <input type="number" placeholder="National Number">
    <input type="text" placeholder="Address">
    <input type="number" placeholder="Phone Number">
    <input type="datetime" placeholder="Birth Date">
    <input type="text" placeholder="Gender">
    <input type="text" placeholder="Major">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <input type="password" placeholder="Confirm Password">
    <input class="submit" type="submit" value="Sign Up">
  `
  
  document.querySelector('.login-as-btn').addEventListener('click', toggleLoginType);
};

loginAsBtn.addEventListener('click', toggleLoginType);
