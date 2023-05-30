generateAdvice.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice").then((response) => {
        response.json().then((data) => {
            document.querySelector("#advice-number").innerHTML = data.slip.id;
            document.querySelector('.desc').innerHTML = `"${data.slip.advice}"`;
        });
    })
})