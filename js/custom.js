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
    let firstPost = document.getElementsByClassName("first-light");
    firstPost = firstPost[0];
    let firstText = document.getElementsByClassName("first-light");
    firstText = firstText[1];
    let secondPost = document.getElementsByClassName("second-light");
    secondPost = secondPost[0]
    let secondText = document.getElementsByClassName("second-light");
    secondText = secondText[1];

    bar = bar[0];
    if(post === 1) {
        bar.style.marginLeft = "0%"
    }else {
        bar.style.marginLeft = "60%"
    }

    const switchFirst = () => {
        
    }
}