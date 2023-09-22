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

/*This way works too and is a lot leaner*/

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


// Pulls all shirt designs and color options

const shirtDesignsOptions = document.querySelectorAll('#design option')
const shirtColors = document.querySelectorAll('#color');
const shirtColorsOptions = document.querySelectorAll('#color option');


console.log(shirtDesignsOptions);
console.log(shirtColors);
console.log(shirtColorsOptions);

// setting each design option to variables
const jsPuns = shirtDesignsOptions[1];
const heartJs = shirtDesignsOptions[2];

const shirtDesignSelector = document.querySelector('#design')
console.log(shirtDesignSelector);

// when the design changed, this loops though the options and saves them to their corresponding arrays
shirtDesignSelector.addEventListener("change", () => {
    console.log('event listener works')
    let jsPunsOptions = [];
    let heartJsOptions = [];

    // for (let i = 0; i < shirtColorsOptions.length; i++) {
    //     const dataTheme = shirtColorsOptions[i].getAttribute('data-theme')
    //     if (dataTheme === "js puns") {
    //         jsPunsOptions.push(shirtColorsOptions[i]);

    //     } else if (dataTheme === "heart js") {
    //         heartJsOptions.push(shirtColorsOptions[i]);

    //     }
    // }

    shirtColorsOptions.forEach(shirtColorsOption => {
        const dataTheme = shirtColorsOption.getAttribute('data-theme');
        if (dataTheme === "js puns") {
            jsPunsOptions.push(shirtColorsOption);
        } else if (dataTheme === "heart js") {
            heartJsOptions.push(shirtColorsOption);
        }
    })

    // when one design is selected, the other design is hidden

    if (jsPuns.selected) {
        heartJsOptions.forEach(heartJsOption => heartJsOption.setAttribute('hidden', true));
        jsPunsOptions.forEach(jsPunOption => jsPunOption.removeAttribute('hidden'));
    } else if (heartJs.selected) {
        jsPunsOptions.forEach(jsPunOption => jsPunOption.setAttribute('hidden', true));
        heartJsOptions.forEach(heartJsOption => heartJsOption.removeAttribute('hidden'));
    }
})

const activitiesFieldset = document.querySelector('.activities');
const activitiesCost = document.querySelector('.activities-cost');
let activityCost = 0;

// when an activity is selected, the total cost adds up the cost of the selected
activitiesFieldset.addEventListener('change', e => {
    // pulls input of the clicked checkbox
    const clicked = e.target;
    // if the clicked type is a check box, pull the checkbox's data-cost and turn it into a number
    if (clicked.type === 'checkbox') {
        const checkboxCost = parseInt(clicked.getAttribute('data-cost'));
        // if the checkbox is checked, add the data cost of the checkbox to the total activityCost otherwise, subtract it if clicked again
        if (clicked.checked) {
            activityCost += checkboxCost;
            activitiesCost.textContent = `Total: ${activityCost}`
        } else {
            activityCost -= checkboxCost;
            activitiesCost.textContent = `Total: ${activityCost}`

        }
    }
})


// set Credit Card payment as default upon load
// when user selects, form should display only the chosen payment method
const paymentSelector = document.querySelector('#payment')
console.log(payment);

payment[1].setAttribute('selected', 'selected');

const creditCard = document.querySelector('.credit-card');
const creditYear = document.querySelector('.year-box');
const creditZip = document.querySelector('.zip-box');
const creditCvv = document.querySelector('.cvv-box');
const paypal = document.querySelector('.paypal');
const bitcoin = document.querySelector('.bitcoin');

paymentSelector.addEventListener('change', e => {
    const chosen = e.target.value;
    console.log(chosen);

    // if selected payment method is credit card, hide paypal and bitcoin
    // if selected is paypal, hide credit card and bitcoin
    // if selected is bitcoin, hide credit card and paypal

    if (chosen === "credit-card") {
        creditCard.hidden = false;
        creditYear.hidden= false;
        creditZip.hidden = false;
        creditCvv.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;
    } else if (chosen === "paypal") {
        creditCard.hidden = true;
        creditYear.hidden= true;
        creditZip.hidden = true;
        creditCvv.hidden = true;
        paypal.hidden = false;
        bitcoin.hidden = true;
    } else if (chosen === "bitcoin") {
        creditCard.hidden = true;
        creditYear.hidden= true;
        creditZip.hidden = true;
        creditCvv.hidden = true;
        paypal.hidden = true;
        bitcoin.hidden = false;
    }
})

const form = document.querySelector('form');
