const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const themePreference = localStorage.getItem('theme');

if (themePreference === 'dark' || (themePreference === null && prefersDarkTheme)) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

function toggleTheme(){
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}