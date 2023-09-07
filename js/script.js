console.log('test');

// Add focus to name input
const name = document.querySelector('#name');
name.focus();

// Program input field to display only when job role is 'other'
const otherJobRole = document.querySelector('#other-job-role')
const jobRole = document.querySelector('#title');


jobRole.addEventListener("change", () => {
    jobRoleValue = jobRole.value.toUpperCase();
    if (jobRoleValue != "OTHER") {
        otherJobRole.style.display = "none";
    } else {
        otherJobRole.style.display = "block"
    }
})

// shirt colors appear according to shirt design

const shirtColors = document.querySelector('#color');
shirtColors.disabled = true;

const shirtDesign = document.querySelector('#design');
shirtDesign.addEventListener("change", () => {
    let shirtDesignValue = shirtDesign.value.toUpperCase();
    console.log(shirtDesignValue);
    if (shirtDesignValue == "JS PUNS") {
        console.log('js puns worked')
        shirtColors.disabled = false;

        const heartsJs = document.querySelectorAll('[data-theme="heart js"]');
        heartsJs.forEach((heartJs) => {
            heartJs.disabled = true;
        })

    } else if (shirtDesignValue == "HEART JS") {
        shirtColors.disabled = false;
        console.log('heart js worked')

        const jsPuns = document.querySelectorAll('[data-theme="js puns"]');

        jsPuns.forEach((jsPun) =>
            jsPun.disabled = true);
    }
})

