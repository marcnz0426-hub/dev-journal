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

// 1. Select the form element
const form = document.getElementById('contact-form');

// 2. Listen for the 'submit' event (Not 'click' on the button!)
form.addEventListener('submit', (event) => {

    // CRITICAL: Stop the page from refreshing
    event.preventDefault();

    // 3. Grab the data from the inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // 4. For now, just log it to the console (Simulating sending)
    console.log(`Form Submitted! Name: ${name}, Email: ${email}`);

    // 5. User Feedback: Show an alert or clear the form 
    alert(`Thank you, ${name}! Your message has been received (in theory).`);
    form.reset(); // Wipes the inputs clean
})

// --- WEEK 3: API FETCHING ---

// 1. Select elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteBtn = document.getElementById('new-quote-btn');

// 2. Define the function to get data
async function getQuote() {
    // Show loading state (User Experience 101)
    quoteText.textContent = "Fetching wisdom...";
    quoteAuthor.textContent = "";

    try {
        // A. Send the "Waiter" (fetch) to the API URL
        const response = await fetch('https://dummyjson.com/quotes/random');

        // B. Wait for the "Waiter" to return with JSON (Data)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // C. Update the HTML with the fresh data
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `- ${data.author}`;

    } catch (error) {
        // D. Handle errors (if the internet is down)
        quoteText.textContent = "Oops! Failed to fetch a quote.";
        console.error('API Error:', error);
    }
}

// 3. Attach the function to the button
quoteBtn.addEventListener('click', getQuote);

// Automatically load a quote when the page opens
getQuote();