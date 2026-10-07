const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll("[data-section]");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");


function showSection(id) {

    sections.forEach(section => {
        section.classList.remove("active");
    });

    navButtons.forEach(button => {
        button.classList.remove("active");
    });

    const selectedSection = document.getElementById(id);
    const selectedButton = document.querySelector(
        `[data-section="${id}"]`
    );

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    if (selectedButton) {
        selectedButton.classList.add("active");
    }

    mainNav.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const section = button.dataset.section;

        showSection(section);

    });

});


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        mainNav.classList.toggle("open");

    });

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        mainNav.classList.remove("open");
    }

});


const startButton = document.querySelector(".main-button");

if (startButton) {

    startButton.addEventListener("click", () => {

        showSection("o-que-e");

    });

}