let post = 5

const handlePaymentPeriod = () => {
    let toogler = document.getElementById("toogler")
    let priceAmount = document.getElementById("price-amount");
    let isMonthly = toogler.className === "toogle-month"
    if (post === 1) {
        if(isMonthly) {
            toogler.className = "toogle-year"
            priceAmount.childNodes[1].data = "90.000"
            priceAmount.lastChild.innerText  = " /an"
        } else {
            toogler.className = "toogle-month"
            priceAmount.childNodes[1].data = "10.000"
            priceAmount.lastChild.innerText = " /mois"
    
        }
    } else if (post === 5) {
        if(isMonthly) {
            toogler.className = "toogle-year"
            priceAmount.childNodes[1].data = "320.000"
            priceAmount.lastChild.innerText  = " /an"
        } else {
            toogler.className = "toogle-month"
            priceAmount.childNodes[1].data = "35.000"
            priceAmount.lastChild.innerText = " /mois"
    
        }
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

const handleMoveBar = (newPost) => {
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

    post = newPost

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

    if(newPost === 1) {
        bar.style.marginLeft = "0%"
        switchFirst({state: "on"});
        switchSecond({state: "off"});
    }else {
        bar.style.marginLeft = "60%"
        switchSecond({state: "on"});
        switchFirst({state: "off"});
    }


}


/* Second Price Card functions */

let post2 = 5

const handlePaymentPeriodBis = () => {
    let toogler = document.getElementById("toogler2")
    let priceAmount = document.getElementById("price-amount2");
    let isMonthly = toogler.className === "toogle-month"
    if (post2 === 1) {
        if(isMonthly) {
            toogler.className = "toogle-year"
            priceAmount.childNodes[1].data = "1.300.000"
            priceAmount.lastChild.innerText  = " /an"
        } else {
            toogler.className = "toogle-month"
            priceAmount.childNodes[1].data = "150.000"
            priceAmount.lastChild.innerText = " /mois"
    
        }
    } else if (post2 === 5) {
        if(isMonthly) {
            toogler.className = "toogle-year"
            priceAmount.childNodes[1].data = "2.500.000"
            priceAmount.lastChild.innerText  = " /an"
        } else {
            toogler.className = "toogle-month"
            priceAmount.childNodes[1].data = "270.000"
            priceAmount.lastChild.innerText = " /mois"
    
        }
    }

}

const handlePaymentPeriodWithPostBis = ({monthlyPrice, yearlyPrice}) => {
    let toogler = document.getElementById("toogler2")
    let priceAmount = document.getElementById("price-amount2");
    let isMonthly = toogler.className === "toogle-month"
    if(isMonthly) {
        priceAmount.childNodes[1].data = monthlyPrice
        priceAmount.lastChild.innerText = " /mois"
    } else {
        priceAmount.childNodes[1].data = yearlyPrice
        priceAmount.lastChild.innerText  = " /an"

    }
}

const handleMoveBarBis = (newPost) => {
    let bar = document.getElementsByClassName("selection-bar");
    let firstPost = document.getElementsByClassName("first-light");
    firstPost = firstPost[2];
    let firstText = document.getElementsByClassName("first-light");
    firstText = firstText[3];
    let secondPost = document.getElementsByClassName("second-light");
    secondPost = secondPost[2]
    let secondText = document.getElementsByClassName("second-light");
    secondText = secondText[3];

    bar = bar[1];

    post2 = newPost

    const switchFirst = ({state}) => {
        if(state === "off") {
            firstPost.style.color = "black";
            firstText.style.color = "black"
        } else if (state === "on") {
            firstPost.style.color = "white";
            firstText.style.color = "white";
            handlePaymentPeriodWithPostBis({monthlyPrice: "150.000", yearlyPrice: "1.300.000"})

        }
    }

    const switchSecond = ({state}) => {
        if(state === "off") {
            secondPost.style.color = "black";
            secondText.style.color = "black"
        } else if (state === "on") {
            secondPost.style.color = "white";
            secondText.style.color = "white";
            handlePaymentPeriodWithPostBis({monthlyPrice: "270.000", yearlyPrice: "2.500.000"})

        }
    }

    if(newPost === 1) {
        bar.style.marginLeft = "0%"
        switchFirst({state: "on"});
        switchSecond({state: "off"});
    }else {
        bar.style.marginLeft = "60%"
        switchSecond({state: "on"});
        switchFirst({state: "off"});
    }


}


const moveMore = (index) => {
        if (index === "1") {
            const more1 = document.getElementById("more1")
            more1.style.animationDuration = "infinite"
        } else if (index === "2") {
            const more2 = document.getElementById("more2")
            more1.style.animationDuration = "infinite"
        }
}