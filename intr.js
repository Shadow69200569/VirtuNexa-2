// Get references to the input and output elements
const markdownInput = document.getElementById('markdown-input');
const markdownOutput = document.getElementById('markdown-output');

// Function to convert Markdown to HTML
function renderMarkdown(markdown) {
    // Use a simple Markdown parser (e.g., marked.js)
    return marked.parse(markdown);
}

// Event listener for input changes
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    const htmlOutput = renderMarkdown(markdownText);
    markdownOutput.innerHTML = htmlOutput;
});

// Initialize with empty input
markdownInput.dispatchEvent(new Event('input'));