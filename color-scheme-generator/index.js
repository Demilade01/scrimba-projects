// DOM Elements
const seedColorInput = document.getElementById('seed-color');
const schemeModeSelect = document.getElementById('scheme-mode');
const getSchemeBtn = document.getElementById('get-scheme-btn');
const colorResults = document.getElementById('color-results');

// API Base URL
const API_URL = 'https://www.thecolorapi.com/scheme';

// Initialize with placeholder
renderPlaceholder();

// Event Listeners
getSchemeBtn.addEventListener('click', fetchColorScheme);

// Allow pressing Enter to fetch scheme
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchColorScheme();
    }
});

/**
 * Fetch color scheme from The Color API
 */
async function fetchColorScheme() {
    const seedColor = seedColorInput.value.slice(1); // Remove # from hex
    const mode = schemeModeSelect.value;

    // Build API URL
    const url = `${API_URL}?hex=${seedColor}&mode=${mode}&count=5`;

    // Show loading state
    getSchemeBtn.disabled = true;
    getSchemeBtn.textContent = 'Loading...';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch color scheme');
        }

        const data = await response.json();
        renderColors(data.colors);
    } catch (error) {
        console.error('Error fetching color scheme:', error);
        colorResults.innerHTML = `
            <div class="placeholder-text">
                Error fetching colors. Please try again.
            </div>
        `;
    } finally {
        // Reset button state
        getSchemeBtn.disabled = false;
        getSchemeBtn.textContent = 'Get Color Scheme';
    }
}

/**
 * Render color boxes from API response
 * @param {Array} colors - Array of color objects from API
 */
function renderColors(colors) {
    colorResults.innerHTML = colors.map(color => `
        <div class="color-box"
             style="background-color: ${color.hex.value};"
             data-hex="${color.hex.value}"
             title="Click to copy ${color.hex.value}">
            <span class="hex-value">${color.hex.value}</span>
            <span class="copied-tooltip">Copied!</span>
        </div>
    `).join('');

    // Add click event listeners for copy functionality
    const colorBoxes = colorResults.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('click', handleCopyToClipboard);
    });
}

/**
 * Handle copying hex value to clipboard
 * @param {Event} event - Click event
 */
async function handleCopyToClipboard(event) {
    const colorBox = event.currentTarget;
    const hexValue = colorBox.dataset.hex;
    const tooltip = colorBox.querySelector('.copied-tooltip');

    try {
        await navigator.clipboard.writeText(hexValue);

        // Show copied tooltip
        tooltip.classList.add('show');

        // Hide tooltip after 1.5 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 1500);
    } catch (error) {
        console.error('Failed to copy to clipboard:', error);

        // Fallback for older browsers
        fallbackCopyToClipboard(hexValue, tooltip);
    }
}

/**
 * Fallback copy method for browsers that don't support clipboard API
 * @param {string} text - Text to copy
 * @param {HTMLElement} tooltip - Tooltip element to show
 */
function fallbackCopyToClipboard(text, tooltip) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 1500);
    } catch (error) {
        console.error('Fallback copy failed:', error);
    }

    document.body.removeChild(textArea);
}

/**
 * Render placeholder when no colors are displayed
 */
function renderPlaceholder() {
    colorResults.innerHTML = `
        <div class="placeholder-text">
            Pick a seed color and mode, then click "Get Color Scheme"
        </div>
    `;
}
