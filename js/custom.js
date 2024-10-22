// Age slider
var ageSlider = document.getElementById("ageRange");
var ageOutput = document.getElementById("ageOutput");
ageOutput.innerHTML = ageSlider.value;

// Function to change slider color
function updateSliderBackground(slider) {
    var value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = 'linear-gradient(to right, #5178e0 ' + value + '%, #e0e0e0 ' + value + '%)';
}

// Initial background setup for age slider
updateSliderBackground(ageSlider);

ageSlider.oninput = function() {
    ageOutput.innerHTML = this.value;
    updateSliderBackground(this);  // Update the background color as the slider moves
}

// Contribution slider
var contributionSlider = document.getElementById("contributionRange");
var contributionOutput = document.getElementById("contributionOutput");
contributionOutput.innerHTML = contributionSlider.value;

// Initial background setup for contribution slider
updateSliderBackground(contributionSlider);

contributionSlider.oninput = function() {
    contributionOutput.innerHTML = this.value;
    updateSliderBackground(this);  // Update the background color as the slider moves
}
