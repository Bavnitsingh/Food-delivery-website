// Theme Toggle Functionality
let themeToggleBtn = document.getElementById('theme-toggle');
let bodyElement = document.body;

themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('dark');

  // Update button text based on theme
  if (bodyElement.classList.contains('dark')) {
    themeToggleBtn.textContent = 'Light Theme';
  } else {
    themeToggleBtn.textContent = 'Dark Theme';
  }
});
