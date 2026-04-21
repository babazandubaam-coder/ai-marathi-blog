// माहिती बदलण्याचे फंक्शन
function showContent(topic) {
    const title = document.getElementById('content-title');
    const text = document.getElementById('content-text');
    const button = document.getElementById('content-button');

    if (topic === 'ai-info') {
        title.innerText = "AI म्हणजे काय?";
        text.innerText = "Artificial Intelligence (AI) म्हणजे मशिनला दिलेली मानवी बुद्धिमत्ता. याद्वारे संगणक स्वतः निर्णय घेऊ शकतो आणि शिकू शकतो.";
        button.style.display = "block";
    } else if (topic === 'ai-tools') {
        title.innerText = "AI Tools 2026";
        text.innerText = "आजच्या काळात ChatGPT, Midjourney आणि अनेक नवीन AI टूल्स उपलब्ध आहेत जे आपले काम सोपे करतात.";
        button.style.display = "block";
    } else if (topic === 'ai-future') {
        title.innerText = "AI चे भविष्य";
        text.innerText = "भविष्यात AI आरोग्य, शिक्षण आणि उद्योग क्षेत्रात मोठी क्रांती घडवून आणणार आहे.";
        button.style.display = "block";
    }
}

// डार्क मोड टॉगल
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = "☀️ लाईट मोड";
    } else {
        themeToggle.innerText = "🌙 डार्क मोड";
    }
});
