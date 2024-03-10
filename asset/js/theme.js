const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const themePreference = localStorage.getItem('theme');
const themeicon = document.getElementById('icon-ctrl');

if (themePreference === 'dark' || (themePreference === null && prefersDarkTheme)) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

function toggleTheme(){
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  if (themeicon.classList.contains('fa-moon')){
    themeicon.classList.remove('fa-moon');
    themeicon.classList.add('fa-sun');
  } else {
    themeicon.classList.remove('fa-sun');
    themeicon.classList.add('fa-moon');
  }

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}