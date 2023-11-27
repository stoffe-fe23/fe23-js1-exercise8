
let countViolet = 0;
let countOrange = 0;
let countSkyblue = 0;

const buttons = document.querySelector("#buttons-colors");

buttons.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        const resSkyblue = document.querySelector("#count-skyblue");
        const resOrange = document.querySelector("#count-orange");
        const resViolet = document.querySelector("#count-violet");

        event.currentTarget.style.backgroundColor = event.target.innerText;

        switch (event.target.innerText) {
            case "skyblue": resSkyblue.innerText = `Skyblue: ${++countSkyblue}`; break;
            case "orange": resOrange.innerText = `Orange: ${++countOrange}`; break;
            case "violet": resViolet.innerText = `Violet: ${++countViolet}`; break;
        }
    }
});


////////////////////////////////////////////////////////////////////

const tagButtons = document.querySelector("#buttons-tags");

tagButtons.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        const newElement = document.createElement(event.target.innerText);
        newElement.innerText = `Nytt ${event.target.innerText}-element`;
        document.body.appendChild(newElement);
    }
});


////////////////////////////////////////////////////////////////////

const hideButtons = document.querySelector("#buttons-hide");

hideButtons.addEventListener("click", (event) => {
    const hideElement = document.querySelector("#hidemessage");
    console.log(event.target.innerText);
    if (event.target.innerText == "Hide") {
        hideElement.style.visibility = "hidden";
        console.log("HIDE");
    }
    else {
        hideElement.style.visibility = "visible";
        console.log("SHOW");
    }
});