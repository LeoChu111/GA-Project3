// Dark Mode Toggle
let darkModeToggle = document.getElementById('dark-mode-toggle');

let isDarkMode = document.body.classList.contains('dark');

if (isDarkMode) {
  darkModeToggle.textContent = "Light Mode";
} else {
  darkModeToggle.textContent = "Dark Mode";
}

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      darkModeToggle.textContent = "Light Mode";
  } else {
      darkModeToggle.textContent = "Dark Mode";
  }
});



/* Hot Key for hiding sidebars */
function toggleSidebars() {
  const bodyElement = document.querySelector('body');
  
  if (bodyElement.classList.contains('sidebar-hidden')) {
    bodyElement.classList.remove('sidebar-hidden');
  } else {
    bodyElement.classList.add('sidebar-hidden');
  }
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.code === 'KeyB') {
    toggleSidebars();
  }
});