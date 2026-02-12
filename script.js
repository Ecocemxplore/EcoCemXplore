const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Hide all content
        contents.forEach(content => content.classList.remove("active"));

        // Show selected tab
        const target = button.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    });
});
