const handlePaymentPeriod = ({monthlyPrice, yearlyPrice}) => {
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

const handleMoveBar = (post) => {
    let bar = document.getElementsByClassName("selection-bar");
    bar = bar[0];
    if(post === 1) {
        bar.style.marginLeft = "0%"
    }else {
        bar.style.marginLeft = "60%"
    }
}