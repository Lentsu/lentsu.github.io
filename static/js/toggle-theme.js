document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('icon-sun');
  const moonIcon = document.getElementById('icon-moon');

  function selectTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    } else {
      document.body.classList.remove('dark');
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    }
    localStorage.setItem('theme', theme);
  }

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  selectTheme(savedTheme);

  toggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    selectTheme(newTheme);
  });
});
