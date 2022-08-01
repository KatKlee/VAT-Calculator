const vatPlusMinus = document.forms[0].vat
const vatRates = document.getElementsByName('vatRate')
const yourAmount = document.getElementById('yourAmount')
const text1 = document.getElementById('onChangeAmount1')
const text2 = document.getElementById('onChangeAmount2')
const mwstBetrag = document.getElementById('mwstBetrag')
const endergebnis = document.getElementById('final')

const nettoText = 'Nettobetrag (Preis ohne Mehrwertsteuer) in Euro'
const bruttoText = 'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro'

const nettoResultText = 'Bruttobetrag (Endpreis)'
const bruttoResultText = 'Nettobetrag'


function calculate() {
    console.log(vatRates[0].checked)
}


/* function netto() {
    console.log(Number(netAmount.value))
} */


function changeText() {
    if (vatPlusMinus.value == 'true') {
        text1.innerHTML = nettoText
        text2.innerHTML = nettoResultText
    } else {
        text1.innerHTML = bruttoText
        text2.innerHTML = bruttoResultText
    }
}

/* Zwischenspeicherung des Ergebnisses aus der Funktion  */
function calculate() {
    /* Wenn Mehrwertsteuer "aufschlagen" = true */
    if (vatPlusMinus.value == 'true') {
        /* dann Werte aus multi und das in innerHTML ausgeben */
        endergebnis.innerHTML = (multi())

        /* Andernfalls */
    } else {
        /* dann Werte aus division ins innerHTML ausgeben */
        endergebnis.innerHTML = (division())
    }

    mwstBetrag.innerHTML = (MehrwertsteuerBetrag())
}

/* Multiplikation bei Mehrwertsteuer aufschlagen (Netto zu Brutto)  – Zwischenspeicher in der Konstante "multi"*/
const multi = () => {
    const price = Number(yourAmount.value)

    if (vatRates[0].checked == 'true') {
        return price * 1.19

    } else {
        return price * 1.07
    }
}

/* Division bei Mehrwertsteuer abziehen (Brutto zu Netto) – Zwischenspeicher in Konstante "division"*/
const division = () => {
    const price = (Number(yourAmount.value))

    if (vatRates[0].checked == 'true') {
        return price / 1.19
    } else {
        return price / 1.07
    }
}

const MehrwertsteuerBetrag = () => {
    const price = (Number(yourAmount.value))

    if (vatRates[0].checked == 'true') {
        return price * 0.19
    } else {
        return price * 0.07
    }
}
