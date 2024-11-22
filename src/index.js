require("../style/main.scss");
require('./images/newsifylogobig.png');
require('./images/newsifyphone.png')
require('./images/newsifyphonesettings.png')
require('./images/newsifyphonetwo.png')
require('./images/newsifylogosmall.png')
//Splash screen

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("onboarding-1").style.display = "block";
    }, 3000);
});

// Onboarding
window.nextOnboarding = function (currentStep) {
    document.getElementById(`onboarding-${currentStep}`).classList.remove('active');

    document.getElementById('onboarding-1').style.display = "none"

    const nextStep = currentStep + 1;
    const nextOnboardingScreen = document.getElementById(`onboarding-${nextStep}`);
    if (nextOnboardingScreen) {
        nextOnboardingScreen.classList.add('active');
    }
};