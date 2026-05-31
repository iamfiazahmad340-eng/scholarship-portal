// ========================================================
// INDEPENDENT CALCULATION LOGIC ENGINE (calc-logic.js)
// (Nayi standalone file - Zero layout effect, No Jumping)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {

    // Exchange Rates Reference (USD Base)
    const ratesTable = {
        USD: 1.0,      
        EUR: 1.08,     
        GBP: 1.27,     
        PKR: 0.0036,   
        INR: 0.012     
    };

    function executeConversion() {
        // Elements ko target karna bina unki positions chhede
        const amountInput = document.getElementById('stipendValue') || document.getElementById('stipendAmount');
        const fromDropdown = document.getElementById('fromCurrency');
        const toDropdown = document.getElementById('toCurrency');
        const displayBox = document.getElementById('convertedResult');

        if (!amountInput || !fromDropdown || !toDropdown || !displayBox) return;

        const rawValue = parseFloat(amountInput.value) || 0;
        const currentFrom = fromDropdown.value;
        const currentTo = toDropdown.value;

        if (rawValue === 0) {
            displayBox.innerText = `${currentTo} 0`;
            return;
        }

        // Live conversion math
        const valueInUSD = rawValue * ratesTable[currentFrom];
        const finalCalculatedOutput = valueInUSD / ratesTable[currentTo];

        // Format and display output
        displayBox.innerText = `${currentTo} ${Math.round(finalCalculatedOutput).toLocaleString()}`;
    }

    // Attach silent observers that don't trigger layout shifting or scrolling
    function bindCalcEvents() {
        const inputSource = document.getElementById('stipendValue') || document.getElementById('stipendAmount');
        const selectFrom = document.getElementById('fromCurrency');
        const selectTo = document.getElementById('toCurrency');

        const structuralElements = [inputSource, selectFrom, selectTo];

        structuralElements.forEach(element => {
            if (element && !element.dataset.mathBound) {
                element.dataset.mathBound = "true";
                
                // Content change par render logic run karna safely
                element.addEventListener('input', executeConversion);
                element.addEventListener('change', executeConversion);
            }
        });
    }

    // Run engine cycles smoothly
    setTimeout(() => {
        bindCalcEvents();
        executeConversion();
    }, 500);

    setInterval(bindCalcEvents, 1500);
});