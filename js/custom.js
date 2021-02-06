let handlePaymentPeriod = ({monthlyPrice, yearlyPrice}) => {
    let toogler = document.getElementById("toogler")
    let priceAmount = document.getElementById("price-amount");
    let isMonthly = toogler.className === "toogle-month"
    if(isMonthly) {
        toogler.className = "toogle-year"
        priceAmount.childNodes[1].data = yearlyPrice
        priceAmount.lastChild.innerText  = " /month"
    } else {
        toogler.className = "toogle-month"
        priceAmount.childNodes[1].data = monthlyPrice
        priceAmount.lastChild.innerText = " /year"

    }
}