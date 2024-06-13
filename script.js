document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const additionalContent = document.getElementById('additionalContent');

    toggleButton.addEventListener('click',() => {
        if (additionalContent.style.display === 'none') {
            additionalContent.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            additionalContent.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });
});
