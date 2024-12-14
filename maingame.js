const logoContainer = document.querySelector(".logocontainer");
const options = document.querySelectorAll(".options");
const answerContainer = document.querySelector(".answercontainer");
const previousbtn = document.querySelector(".previous");
const nextbtn = document.querySelector(".next");
const score = document.querySelector(".score");
const scoreContainer = document.querySelector(".scorecontainer");

let scoreCount = 0;



// Alert Section
const welcomeMessage = () => {
  alert('Welcome to the BRAND QUIZ GAME');

}
welcomeMessage();

//Logos Array section 
const logosArray = [{
  image: "https://i.pinimg.com/736x/9d/d7/5f/9dd75f3cb13b4680260c8a67857ae34c.jpg",
  options: ["Infinity", "Lamborghini", "Ferrari", "Tesla"],
  correct: "Infinity"
}
  
]

//options Section