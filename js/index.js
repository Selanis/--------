// function mainSliderFuncNext(slider, sliderCount) {
//     slider[sliderCount].classList.add('hidden');
//     if (sliderCount > slider.length) {
//         sliderCount == 0;
//     } else {
//         sliderCount++;
//     }
//     slider[sliderCount].classList.remove('hidden');
//     // slider[sliderCount].classList.add('');
// }

// function mainSliderFuncBack(slider, sliderCount) {
//     slider[sliderCount].classList.add('hidden');
//     if (sliderCount < slider.length) {
//         sliderCount == slider.length;
//     } else {
//         sliderCount--;
//     }
//     slider[sliderCount].classList.remove('hidden');
//     // slider[sliderCount].classList.add('');
// }

var sliderCount = 0;
let mainSlider = document.getElementsByClassName("main-container");
let buttonRight = document.getElementById('right-main');
let buttonLeft = document.getElementById('left-main');

let progressBar = document.querySelector(".gradient-main-bar");

console.log(progressBar.classList);

buttonRight.addEventListener('click', function () {
    mainSlider[sliderCount].classList.add('hidden');
    if (sliderCount + 1 == mainSlider.length) {
        sliderCount = 0;
    } else {
        sliderCount++;
    }
    mainSlider[sliderCount].classList.remove('hidden');
    progressBar.classList.remove(progressBar.classList[1]);
    progressBar.classList.add("bar" + String(sliderCount + 1))
    // slider[sliderCount].classList.add('');
});

buttonLeft.addEventListener('click', function() {
    mainSlider[sliderCount].classList.add('hidden');
    if (sliderCount == 0) {
        sliderCount = mainSlider.length - 1;
    } else {
        sliderCount--;
    }
    mainSlider[sliderCount].classList.remove('hidden');
    progressBar.classList.remove(progressBar.classList[1]);
    progressBar.classList.add("bar" + String(sliderCount + 1))
    // slider[sliderCount].classList.add('');
});