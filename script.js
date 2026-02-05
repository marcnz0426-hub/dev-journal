// 1. Select elements
const themeButton = document.getElementById('theme-toggle');
const body = document.body;

// 2. CHECK MEMORY: Run this immediately when the page loads
// "Hey browser, do we have a saved theme in the 'theme' folder?"
const savedTheme = localStorage.getItem('theme');

// If the saved theme is 'dark', turn it on right now
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeButton.textContent = '☀️ Light Mode';
}

// 3. LISTEN FOR CLICKS
themeButton.addEventListener('click', () => {
    // Toggle the class
    body.classList.toggle('dark-mode');

    // Check if we are now in dark mode
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️ Light Mode';
        // SAVE TO MEMORY: "Write 'dark' in the 'theme' folder"
        localStorage.setItem('theme', 'dark');
    } else {
        themeButton.testContent = '🌙 Dark Mode';
        // SAVE TO MEMORY: "Write 'light' in the 'theme' folder"
        localStorage.setItem('theme', 'light');
    }
});