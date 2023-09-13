document.addEventListener("DOMContentLoaded", function() {
    // Get references to the range input and the label span
    const rangeInput = document.getElementById("rangeInput");
    const rangeValue = document.getElementById("rangeValue");

    // Add an event listener to update the label when the input value changes
    rangeInput.addEventListener("input", function() {
        rangeValue.textContent = "0 - " + rangeInput.value;
    });

    // Close the dropdown if the user clicks outside of it
});