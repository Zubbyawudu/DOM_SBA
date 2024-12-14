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
  answer: "Infinity"
},{
  image:"https://i.pinimg.com/736x/71/4a/af/714aaf04e8121573a8cfb89d35030615.jpg",
  options: ["Infinity", "Volkswagen", "Land Rover", "Tesla"],
  answer: "Volkswagen"
},{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiCCQyPjcOm_00crlQNhsFH13Wa61VygKKQ&s",
  options: ["Lamborghini", "Volkswagen", "Acura", "Land Rover"],
  answer: "Acura"
},{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADGDwwspYsQrsz6H8PNo7JlMTfKjUIwvwLgFveKn8TsrT5vMrj0jcAqwmhyqSDUO7Xoo&usqp=CAU",
  options: ["Acura", "Renault", "Jaguar", "Land Rover"],
  answer: "Jaguar"
},{
  image:"https://www.jetpunk.com/img/user-img/7e/7e354a846f-450.webp",
  options: ["mercedes", "BMW", "Dodge", "Tesla"],
  answer: "BMW"
},{

}
  
]

//options Section