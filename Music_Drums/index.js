window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "goldenrod",
        "gray",
        "hotpink",
        "indigo",
        "khaki",
        "lightpink"
    ];
    


    //Lets grab the sound
    pads.forEach((pad, index) =>{
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0; //reset the time so we can click multiple times
            sounds[index].play();

            createBubble(index);
        });
    });

    //create the function that creates bubbles
    const createBubble = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };
});

