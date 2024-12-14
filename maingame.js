const logoContainer = document.querySelector(".logocontainer");
const nextbtn = document.querySelector(".next");


// Alert SECTION
const welcomeMessage = () => {
  alert('Welcome to the BRAND QUIZ GAME');

}
welcomeMessage();

//image section
const image = document.createElement("img");
image.src = "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
image.alt = "image";
image.classList
logoContainer.appendChild(image);
image.style.width = "100%";
image.style.height = "100%";

//options section
const options = document.querySelectorAll(".options");
const answerContainer = document.querySelector(".answercontainer");
const previousbtn = document.querySelector(".previous");
const score = document.querySelector(".score");
const scoreContainer = document.querySelector(".scorecontainer");
let scoreCount = 0;

options.forEach((option) => {
  option.addEventListener("click", () => {
    
    
    score.textContent = `Score: ${scoreCount}`;
  });
});
