// Track current step and form data
let currentStep = 1;
const formData = {
    name: '',
    email: '',
    phone: '',
    plan: '',
    billing: 'monthly', // 'monthly' or 'yearly'
    addons: []
};

// Plans pricing
const plans = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 }
};

// Add-ons pricing
const addons = {
    'online-service': { monthly: 1, yearly: 10 },
    'larger-storage': { monthly: 2, yearly: 20 },
    'custom-profile': { monthly: 2, yearly: 20 }
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateStepIndicators();
});

function setupEventListeners() {
    // Step 1 - Form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    nameInput.addEventListener('blur', () => {
        formData.name = nameInput.value;
        validateName();
    });

    emailInput.addEventListener('blur', () => {
        formData.email = emailInput.value;
        validateEmail();
    });

    phoneInput.addEventListener('blur', () => {
        formData.phone = phoneInput.value;
        validatePhone();
    });

    // Step 2 - Billing toggle
    const billingToggle = document.getElementById('billing-toggle');
    billingToggle.addEventListener('change', () => {
        formData.billing = billingToggle.checked ? 'yearly' : 'monthly';
        updatePlanDisplay();
    });

    // Step 2 - Plan selection
    const planRadios = document.querySelectorAll('input[name="plan"]');
    planRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            formData.plan = e.target.value;
            updatePlanCards();
        });
    });

    // Step 3 - Add-ons selection
    const addonCheckboxes = document.querySelectorAll('input[name="addons"]');
    addonCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            updateFormDataAddons();
            updateAddonCards();
            updateSummary();
        });
    });

    // Navigation buttons
    document.getElementById('back-btn').addEventListener('click', () => goToPreviousStep());
    document.getElementById('next-btn').addEventListener('click', () => goToNextStep());

    // Step indicator clicks
    const stepNumbers = document.querySelectorAll('.step-number');
    stepNumbers.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const step = index + 1;
            if (step < currentStep || (step <= currentStep && isStepValid(currentStep))) {
                goToStep(step);
            }
        });
    });
}

function updateStepIndicators() {
    const stepNumbers = document.querySelectorAll('.step-number');
    stepNumbers.forEach((num, index) => {
        const step = index + 1;
        num.classList.toggle('active', step === currentStep);
    });
}

function updatePlanDisplay() {
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const monthlyOffers = document.querySelectorAll('.monthly-offer');

    if (formData.billing === 'yearly') {
        monthlyPrices.forEach(price => price.style.display = 'none');
        yearlyPrices.forEach(price => price.style.display = 'inline');
        monthlyOffers.forEach(offer => offer.style.display = 'block');
    } else {
        monthlyPrices.forEach(price => price.style.display = 'inline');
        yearlyPrices.forEach(price => price.style.display = 'none');
        monthlyOffers.forEach(offer => offer.style.display = 'none');
    }

    updateSummary();
}

function updatePlanCards() {
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio.checked) {
            card.classList.add('checked');
        } else {
            card.classList.remove('checked');
        }
    });
}

function updateAddonCards() {
    const addonCards = document.querySelectorAll('.addon-card');
    addonCards.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            card.classList.add('checked');
        } else {
            card.classList.remove('checked');
        }
    });
}

function updateFormDataAddons() {
    formData.addons = [];
    const addonCheckboxes = document.querySelectorAll('input[name="addons"]:checked');
    addonCheckboxes.forEach(checkbox => {
        formData.addons.push(checkbox.value);
    });
}

function updateSummary() {
    if (!formData.plan) return;

    const planName = formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1);
    const billing = formData.billing === 'yearly' ? 'per year' : 'per month';
    const price = plans[formData.plan][formData.billing];

    document.getElementById('summary-plan-label').textContent = `${planName} (${formData.billing === 'yearly' ? 'Yearly' : 'Monthly'})`;
    document.getElementById('summary-plan-price').textContent = `$${price}/${formData.billing === 'yearly' ? 'yr' : 'mo'}`;

    // Update add-ons summary
    const summaryAddons = document.getElementById('summary-addons');
    summaryAddons.innerHTML = '';

    formData.addons.forEach(addon => {
        const price = addons[addon][formData.billing];
        const addonName = addon.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const item = document.createElement('div');
        item.className = 'summary-addon-item';
        item.innerHTML = `<span>${addonName}</span><span>+$${price}/${formData.billing === 'yearly' ? 'yr' : 'mo'}</span>`;
        summaryAddons.appendChild(item);
    });

    // Calculate total
    let total = plans[formData.plan][formData.billing];
    formData.addons.forEach(addon => {
        total += addons[addon][formData.billing];
    });

    const totalLabel = formData.billing === 'yearly' ? 'Total (per year)' : 'Total (per month)';
    document.getElementById('total-label').textContent = totalLabel;
    document.getElementById('total-price').textContent = `$${total}/${formData.billing === 'yearly' ? 'yr' : 'mo'}`;
}

// Validation functions
function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const value = nameInput.value.trim();

    if (!value) {
        nameInput.classList.add('invalid');
        nameError.textContent = 'This field is required';
        nameError.classList.add('show');
        return false;
    } else if (value.length < 2) {
        nameInput.classList.add('invalid');
        nameError.textContent = 'Please enter a valid name';
        nameError.classList.add('show');
        return false;
    } else {
        nameInput.classList.remove('invalid');
        nameError.classList.remove('show');
        formData.name = value;
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
        emailInput.classList.add('invalid');
        emailError.textContent = 'This field is required';
        emailError.classList.add('show');
        return false;
    } else if (!emailRegex.test(value)) {
        emailInput.classList.add('invalid');
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('show');
        return false;
    } else {
        emailInput.classList.remove('invalid');
        emailError.classList.remove('show');
        formData.email = value;
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const value = phoneInput.value.trim();
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

    if (!value) {
        phoneInput.classList.add('invalid');
        phoneError.textContent = 'This field is required';
        phoneError.classList.add('show');
        return false;
    } else if (!phoneRegex.test(value)) {
        phoneInput.classList.add('invalid');
        phoneError.textContent = 'Please enter a valid phone number';
        phoneError.classList.add('show');
        return false;
    } else {
        phoneInput.classList.remove('invalid');
        phoneError.classList.remove('show');
        formData.phone = value;
        return true;
    }
}

function isStepValid(step) {
    switch (step) {
        case 1:
            return validateName() && validateEmail() && validatePhone();
        case 2:
            const planSelected = document.querySelector('input[name="plan"]:checked');
            if (!planSelected) {
                alert('Please select a plan');
                return false;
            }
            formData.plan = planSelected.value;
            return true;
        case 3:
            return true; // Add-ons are optional
        case 4:
            return true;
        default:
            return true;
    }
}

function goToNextStep() {
    if (!isStepValid(currentStep)) {
        return;
    }

    if (currentStep === 3) {
        updateFormDataAddons();
        updateSummary();
    }

    if (currentStep < 5) {
        currentStep++;
        updateStepView();
    }

    if (currentStep === 5) {
        // Thank you page - disable next button
        document.getElementById('next-btn').textContent = 'Confirm';
        document.getElementById('next-btn').style.pointerEvents = 'none';
        document.getElementById('next-btn').style.opacity = '0.5';
    }
}

function goToPreviousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepView();
    }
}

function goToStep(step) {
    if (step >= 1 && step <= 5) {
        currentStep = step;
        updateStepView();
    }
}

function updateStepView() {
    // Hide all steps
    const stepContents = document.querySelectorAll('.step-content');
    stepContents.forEach(content => content.classList.remove('active'));

    // Show current step
    const currentContent = document.getElementById(`step-${currentStep}`);
    if (currentContent) {
        currentContent.classList.add('active');
    }

    // Update step indicators
    updateStepIndicators();

    // Update button visibility
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');

    if (currentStep === 1) {
        backBtn.style.display = 'none';
        nextBtn.textContent = 'Next Step';
        nextBtn.style.pointerEvents = 'auto';
        nextBtn.style.opacity = '1';
    } else if (currentStep === 5) {
        backBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
        nextBtn.textContent = 'Next Step';
        nextBtn.style.display = 'block';
        nextBtn.style.pointerEvents = 'auto';
        nextBtn.style.opacity = '1';
    }

    // Restore form data when returning to a step
    if (currentStep === 1) {
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('phone').value = formData.phone;
    } else if (currentStep === 2) {
        if (formData.plan) {
            document.querySelector(`input[name="plan"][value="${formData.plan}"]`).checked = true;
            updatePlanCards();
        }
        document.getElementById('billing-toggle').checked = formData.billing === 'yearly';
        updatePlanDisplay();
    } else if (currentStep === 3) {
        formData.addons.forEach(addon => {
            document.querySelector(`input[name="addons"][value="${addon}"]`).checked = true;
        });
        updateAddonCards();
    }
}

// Initialize the form on load
window.addEventListener('load', () => {
    updateStepView();
    updatePlanDisplay();
});
