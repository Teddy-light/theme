const handlePaymentPeriod = ({monthlyPrice, yearlyPrice}) => {
    let toogler = document.getElementById("toogler")
    let priceAmount = document.getElementById("price-amount");
    let isMonthly = toogler.className === "toogle-month"
    if(isMonthly) {
        toogler.className = "toogle-year"
        priceAmount.childNodes[1].data = yearlyPrice
        priceAmount.lastChild.innerText  = " /an"
    } else {
        toogler.className = "toogle-month"
        priceAmount.childNodes[1].data = monthlyPrice
        priceAmount.lastChild.innerText = " /mois"

    }
}

const handlePaymentPeriodWithPost = ({monthlyPrice, yearlyPrice}) => {
    let toogler = document.getElementById("toogler")
    let priceAmount = document.getElementById("price-amount");
    let isMonthly = toogler.className === "toogle-month"
    if(isMonthly) {
        priceAmount.childNodes[1].data = monthlyPrice
        priceAmount.lastChild.innerText = " /mois"
    } else {
        priceAmount.childNodes[1].data = yearlyPrice
        priceAmount.lastChild.innerText  = " /an"

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

    const switchFirst = ({state}) => {
        if(state === "off") {
            firstPost.style.color = "black";
            firstText.style.color = "black"
        } else if (state === "on") {
            firstPost.style.color = "white";
            firstText.style.color = "white";
            handlePaymentPeriodWithPost({monthlyPrice: "10.000", yearlyPrice: "90.000"})

        }
    }

    const switchSecond = ({state}) => {
        if(state === "off") {
            secondPost.style.color = "black";
            secondText.style.color = "black"
        } else if (state === "on") {
            secondPost.style.color = "white";
            secondText.style.color = "white";
            handlePaymentPeriodWithPost({monthlyPrice: "35.000", yearlyPrice: "320.000"})

        }
    }

    if(post === 1) {
        bar.style.marginLeft = "0%"
        switchFirst({state: "on"});
        switchSecond({state: "off"});
    }else {
        bar.style.marginLeft = "60%"
        switchSecond({state: "on"});
        switchFirst({state: "off"});
    }


}