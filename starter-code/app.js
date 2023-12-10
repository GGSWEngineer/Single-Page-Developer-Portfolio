// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events for all elements with the class 'underline-text'
function handleScrollForAll() {
    const elements = document.querySelectorAll('.underline-text');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('underlined');
        } else {
            element.classList.remove('underlined');
        }
    });
}

// Attach the scroll event listener
document.addEventListener('scroll', handleScrollForAll);

// Initial check on page load
handleScrollForAll();