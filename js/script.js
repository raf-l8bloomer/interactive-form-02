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

// const shirtColors = document.querySelector('#color');
// shirtColors.disabled = true;

// const shirtColorsOptions = document.querySelectorAll('#color option')


// const shirtDesign = document.querySelector('#design');
// shirtDesign.addEventListener("change", () => {
//     const shirtDesignValue = shirtDesign.value;
//     shirtColors.disabled = false;
//     shirtColorsOptions.forEach((shirtColorsOption) => {
//         const dataTheme = shirtColorsOption.getAttribute('data-theme');
//         if (dataTheme === shirtDesignValue) {
//             shirtColorsOption.style.display = "block";
//         } else {
//             shirtColorsOption.style.display = "none";
//         }
//     }
//     )
// })


// const shirtDesigns = document.querySelectorAll('#design');
const shirtDesignsOptions = document.querySelectorAll('#design option')
const shirtColors = document.querySelectorAll('#color');
const shirtColorsOptions = document.querySelectorAll('#color option');

// console.log(shirtDesigns);
console.log(shirtDesignsOptions);
console.log(shirtColors);
console.log(shirtColorsOptions);


const jsPuns = shirtDesignsOptions[1];
const heartJs = shirtDesignsOptions[2];

const shirtDesignSelector = document.querySelector('#design')
console.log(shirtDesignSelector);

shirtDesignSelector.addEventListener("change", () => {
    console.log('event listener works')
    let jsPunsOptions = [];
    let heartJsOptions = [];
    for (let i = 0; i < shirtColorsOptions.length; i++) {
        const dataTheme = shirtColorsOptions[i].getAttribute('data-theme')
        if (dataTheme === "js puns") {
            jsPunsOptions.push(shirtColorsOptions[i]);

        } else if (dataTheme === "heart js") {
            heartJsOptions.push(shirtColorsOptions[i]);

        }
    }

    if (jsPuns.selected) {
        heartJsOptions.forEach(heartJsOption => heartJsOption.setAttribute('hidden', true));
        jsPunsOptions.forEach(jsPunOption => jsPunOption.removeAttribute('hidden'));
    } else if (heartJs.selected) {
        jsPunsOptions.forEach(jsPunOption => jsPunOption.setAttribute('hidden', true));
        heartJsOptions.forEach(heartJsOption => heartJsOption.removeAttribute('hidden'));
    }


})
