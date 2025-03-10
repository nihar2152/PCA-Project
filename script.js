//Need to use modal method, siince the alert function will not work if the user chooses to not recieve popup alerts.

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("popup-modal");
    const modalText = document.getElementById("modal-text");
    const closeButton = document.querySelector(".close");

    // Hide Modal when page loads up
    modal.style.display = "none";

    // Function to show modal
    function showPopup(message) {
        console.log("Opening modal with message: " + message);
        modal.style.display = "block";
        modalText.innerHTML = message;
    }

    // Close modal 
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            console.log("Closing modal");
            modal.style.display = "none";
        });
    } else {
        console.error("Close button not found");
    }

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            console.log("Clicked outside modal, closing it.");
            modal.style.display = "none";
        }
    });

    // Listeners/Messages for the images
    document.getElementById("image1").addEventListener("click", function () {
        showPopup(`Shadowing in Atlanta was one of the best experiences for my role at Power. As a Cost Analyst, I handle accounting entries and help manage projects across multiple territories, Atlanta being one of them. Getting to meet the people behind the emails and Connect messages, visiting an install, and spending time with the Installers that I process payments for really gave me a clearer picture of how my work ties into the RIO's operations and how our roles correlate.`);
    });

    document.getElementById("image2").addEventListener("click", function () {
        showPopup(`Emerge 2024 was hands down one of the best Power Events I’ve been a part of. I met so many awesome people who are now good friends, and the whole experience was both eye-opening with all the deep conversations we had, and a ton of fun with all the group activities.`);
    });

    document.getElementById("image4").addEventListener("click", function () {
        showPopup(`I have a big immediate family—it’s me, my parents, a younger sister, and an older brother and sister. My extended family is also massive with countless cousins, aunts and uncles.`);
    });

    document.getElementById("image5").addEventListener("click", function () {
        showPopup(`I had a pretty colorful childhood. I was born in India on May 2, 1999, and lived there until January 21, 2007, the day we moved to the U.S. Growing up in India felt different because I was always surrounded by friends, family, and a culture that my family had known for generations. Moving to a whole new country as a kid was a huge culture shock! Everything felt unfamiliar, I didn't know anyone, and it took time to get properly adjusted.`);
    });
});
// WHILE TESTING, IF THE USER ELECTED TO NOT RECIEVE POP-UP'S THIS WHOLE SCRIPT BECAME REDUNDANT, NEED TO USE POPUP-MODAL
//Create Pop-Up messages for each image clicked create a const to retrieve image by id, then use a click event listener function

// const image1 = document.getElementById("image1");

//image1.addEventListener('click', function () {
//    alert(`Shadowing in Atlanta was one of the best experiences for my role at Power. As a Cost Analyst, I handle accounting entries and managing margins across multiple territories, Atlanta being one of them. Getting to meet the people behind the emails and Connect messages, visiting an install, and spending time with the Installers that I process payments for really gave me a clearer picture of how my work ties into the RIO's operations and how our roles coorelate.`)
//})

//const image2 = document.getElementById("image2");

//image2.addEventListener('click', function () {
//    alert(`Emerge 2024 was hands down one of the best Power Events I’ve been a part of. I met so many awesome people who are now good friends, and the whole experience was both eye-opening with all the deep conversations we had, and a ton of fun with all the group activities.`)
//})

//const image4 = document.getElementById("image4");

//image4.addEventListener('click', function () {
//   alert(`I have a big immediate family—it’s me, my parents, a younger sister, and an older brother and sister. My entended family is also massive with countless cousins, aunts and uncles.`)
//})

//const image5 = document.getElementById("image5");

//image5.addEventListener('click', function () {
//    alert(`I had a pretty colorful childhood. I was born in India on May 2, 1999, and lived there until January 21, 2007, the day we moved to the U.S. Growing up in India felt different because I was always surrounded by friends, family, and a culture that my family had known for generations. Moving to a whole new country as a kid was a huge culture shock! Everything felt unfamiliar, I didn't know anyone, and it took time to get properly adjusted.`)
//})
