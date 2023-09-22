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

    activityValidator();
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

paymentSelector[1].setAttribute('selected', true);
console.log("Payment selected is", paymentSelector);

const creditCard = document.querySelector('.credit-card');
const creditYear = document.querySelector('.year-box');
const creditZip = document.querySelector('.zip-box');
const creditCvv = document.querySelector('.cvv-box');
const paypal = document.querySelector('.paypal');
const bitcoin = document.querySelector('.bitcoin');

let payment = "";

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
        return payment = "credit-card";
        console.log(payment);
    } else if (chosen === "paypal") {
        creditCard.hidden = true;
        creditYear.hidden= true;
        creditZip.hidden = true;
        creditCvv.hidden = true;
        paypal.hidden = false;
        bitcoin.hidden = true;
        return payment = "paypal";
        console.log(payment);

    } else if (chosen === "bitcoin") {
        creditCard.hidden = true;
        creditYear.hidden= true;
        creditZip.hidden = true;
        creditCvv.hidden = true;
        paypal.hidden = true;
        bitcoin.hidden = false;
        return payment = "bitcoin";
        console.log(payment);

    }
})

const form = document.querySelector('form');
const nameElement = document.querySelector('#name');
const email = document.querySelector('#email');
// use activity cost for validation

const nameValidator = () => {
    const nameValue = nameElement.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    console.log(`Name validation test on "${nameValue}" evaluates to ${nameIsValid}`);


    if (nameIsValid) {
        validationPass(nameElement);
    } else {
        validationFail(nameElement);
    }

    return nameIsValid;
}

const emailValidator = () => {
    const emailValue = email.value;
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);

    if (email) {
        validationPass(email);
    } else {
        validationFail(email);
    }

    return emailIsValid;
}

const activityValidator = () => {
    const activityIsValid = activityCost > 0;

    console.log(`Activity section validation test evaluates to ${activityIsValid}`);


    if (activityIsValid) {
        validationPass(activityCost);
    } else {
        validationFail(activityCost);
    }

    return activityIsValid
}

const ccNum = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

const ccHint = document.querySelector('#cc-hint');
const zipHint = document.querySelector('#zip-hint');
const cvvHint = document.querySelector('#cvv-hint');

const ccValidator = () => {
    // const ccNumValue = ccNum.value;
    // console.log("CC Num:", ccNumValue);

    // const zipCodeValue = zipCode.value;
    // console.log("Zip Code:", zipCodeValue);

    // const cvvValue = cvv.value;
    // console.log("CVV:", cvvValue)

    // const ccNumIsValid = /\b\d{13,16}\b/.test(ccNumValue);
    // const zipCodeIsValid = /^\d{5}$/.test(zipCodeValue);
    // const cvvIsValid = /^\d{3}$/.test(cvvValue);

    // if (!ccNumisValid){
        
    // }

    let ccIsValid = false;

    if (ccNum.value.length > 13 && ccNum.value.length < 16) {
        ccIsValid = true;
        validationPass(ccNum);
    } else {
        ccIsValid = false;
        console.log("CC Num must be 13-16 digits")
        validationFail(ccNum);
        
    }

    if (zipCode.value.length !== 5) {
        ccIsValid = false;
        console.log("Zip Code must be 5 digits");
        validationPass(zipCode);

    } else {
        ccIsValid = true
        validationFail(zipCode);

    }

    if (cvv.value.length !== 3) {
        ccIsValid = false;
        console.log("CVV must be 3 digits")
        validationPass(cvv);

    } else {
        ccIsValid = true;
        validationFail(cvv);

    }

    return ccIsValid;

}

const validationPass = (element) => {
    const elementParent = element.parentElement;
    elementParent.classList.add('.valid');
    elementParent.classList.remove('.not-valid');
    elementParent.lastElementChild.display = 'none';
}

const validationFail = (element) => {
    const elementParent = element.parentElement;
    elementParent.classList.add('.not-valid');
    elementParent.classList.remove('.valid');
    elementParent.lastElementChild.display = 'block';
}

nameElement.addEventListener('keyup', nameValidator);
email.addEventListener('keyup', emailValidator);
ccNum.addEventListener('keyup', ccValidator);
zipCode.addEventListener('keyup', ccValidator);
cvv.addEventListener('keyup', ccValidator);


form.addEventListener('submit', e => {
    
e.preventDefault();
    if (!nameValidator()){e.preventDefault()};
    if (!emailValidator()){e.preventDefault()};
    if (!activityValidator()){e.preventDefault()};
    if (!ccValidator()){e.preventDefault()};
    console.log('Submit handler is functional!');

})

