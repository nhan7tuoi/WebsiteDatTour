window.onload = function() {
    // Get all custom number input containers
    const customNumberContainers = document.querySelectorAll('.custom-number-input');

    // Add click event listener using event delegation
    customNumberContainers.forEach(container => {
        container.addEventListener('click', (event) => {
            const action = event.target.getAttribute('data-action');
            const input = container.querySelector('input');

            if (action === 'increment') {
                input.stepUp();
            } else if (action === 'decrement') {
                input.stepDown();
            }
        });
    });
}