         // Age slider
         var ageSlider = document.getElementById("ageRange");
         var ageOutput = document.getElementById("ageOutput");
         ageOutput.innerHTML = ageSlider.value;
         
         ageSlider.oninput = function() {
           ageOutput.innerHTML = this.value;
         }
         
         // Contribution slider
         var contributionSlider = document.getElementById("contributionRange");
         var contributionOutput = document.getElementById("contributionOutput");
         contributionOutput.innerHTML = contributionSlider.value;
         
         contributionSlider.oninput = function() {
           contributionOutput.innerHTML = this.value;
         }