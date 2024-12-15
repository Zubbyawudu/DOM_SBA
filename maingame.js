const logoContainer = document.querySelector(".logocontainer");
const options = document.querySelectorAll(".options");
const answerContainer = document.querySelector(".answercontainer");
const previousbtn = document.querySelector(".previous");
const nextbtn = document.querySelector(".next");
const score = document.querySelector(".score");
const scoreContainer = document.querySelector(".scorecontainer");
const restartbtn = document.querySelector(".restart");
let scoreCount = 0;
let randomIndex = 0;
let visitedlogos = [];


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
  image:"https://media.proprofs.com/images/QM/user_images/2503852/BMW(2).jpg",
  options: ["mercedes", "BMW", "Dodge", "Tesla"],
  answer: "BMW"
},{
  image:"https://logodix.com/logo/1308852.jpg",
  options: ["Peugeot", "BMW", "Buick", "Toyota"],
  answer: "Peugeot"
},{
  image:"https://www.jetpunk.com/img/user-img/78/781b709a44-450.webp",
  options: ["Renault", "BMW", "Buick", "Toyota"],
  answer: "Buick"
},{
  image:"https://image.slidesharecdn.com/carlogos-141026165350-conversion-gate02/85/Guess-The-Car-Logos-54-320.jpg",
  options: ["Mayhem", "Mazda", "Buick", "Maybach"],
  answer: "Maybach"
},{
  image:"https://e1.pxfuel.com/desktop-wallpaper/809/970/desktop-wallpaper-car-logos-the-biggest-archive-of-car-company-logos-1024x768-for-your-mobile-tablet-company-logos.jpg",
  options: ["Chevrolet", "Honda", "Toyota", "Mazda"],
  answer: "Chevrolet"
},{
  image:"https://www.jetpunk.com/img/user-img/13/132f2b17a2-450.webp",
  options: ["Chevrolet", "McLaren", "Land Rover", "Tacoma"],
  answer: "McLaren"
},{
  image:"https://t3.ftcdn.net/jpg/09/77/21/92/360_F_977219249_zaySrrg3QtBFRbdf4RQE1KvKtawbNgr0.jpg",
  options: ["Chevrolet", "Mercedes Benz", "Jaguar", "Benz"],
  answer: "Mercedes Benz"
},{
  image:"https://quizbash.com/assets/img/games/logo-audi.jpg",
  options: ["Lamborghini", "Audi", "Jaguar", "Maxus"],
  answer: "Audi"
},{
  image:"https://blog.logomaster.ai/hs-fs/hubfs/ferrari-logo-1929.jpg?width=1700&height=1148&name=ferrari-logo-1929.jpg",
  options: ["Lamborghini", "Audi", "Jaguar", "Ferrari"],
  answer: "Ferrari"
},{
  image:"https://i.pinimg.com/736x/6e/d4/d7/6ed4d7da41fc086258d5499e9a3cfbe8.jpg",
  options: ["Toyota", "Renault", "Ferrari", "Mercedes Benz"],
  answer: "Toyota"
},{ 
  image:"https://i.pinimg.com/736x/ea/c3/df/eac3dfab9034814d5775cdc2710f9b86.jpg",
  options: ["Infinity", "Suzuki", "Ferrari", "Subaru"],
  answer: "Suzuki"
},{
  image:"https://m.media-amazon.com/images/I/31saptF44VL.jpg",
  options: ["Tesla", "Bentley", "Ferrari", "Tata"],
  answer: "Bentley"
},{
  image:"https://i.pinimg.com/564x/7f/1e/ce/7f1ecec019caa2531d35a6c5d756cf73.jpg",
  options: ["Wagon", "Honda", "Hyundai", "Audi"],
  answer: "Honda"
},{
  image:"https://natalex-images.s3.eu-north-1.amazonaws.com/9b3ea6a7-40c7-447b-a651-77f902f9e2b2.webp",
  options: ["Hyundai", "Honda", "Dodge", "Subaru"],
  answer: "Dodge"
},{
  image:"https://www.factorywarrantylist.com/uploads/3/3/9/4/3394652/lincoln-logo-11_orig.png",
  options: ["Renault", "Tesla", "lincoln", "Lamborghini"],
  answer: "lincoln"
}

];




//function to load next image and ques
const loadNextImage = () => {
  
  // To check if all logos have been Viewed 
  if (visitedlogos.length === logosArray.length) {
    visitedlogos = [];
    console.log("All logos have been visited.");
    alert("Your score is: " + scoreCount +  " . Click OK to view your price");
    alert("Congratulations! You just won $1000");
    return;
  }
  do {
    randomIndex = Math.floor(Math.random() * logosArray.length);
  } while (visitedlogos.includes(randomIndex));
  visitedlogos.push(randomIndex);
  


  const currentLogo = logosArray[randomIndex];
  // console.log(currentLogo);
  logoContainer.innerHTML = `<img src="${currentLogo.image}" alt="Logo">`;
  
  //Applying  animation
  logoContainer.classList.add('slide_in')
  // logoContainer.classList.add('slide_out')

  logoContainer.addEventListener('transitioned', () =>{
    logoContainer.classList.add('slide_out')
    logoContainer.classList.remove('slide_in');
    logoContainer.classList.add('reset');
  })

  options.forEach((option, number) => {
    option.textContent = currentLogo.options[number];
  });

  // To reset the background color of the options 
  options.forEach(option => {
    option.style.backgroundColor = "";
    option.style.color = "";
  });

  
};
nextbtn.addEventListener("click",loadNextImage);

//function to load previous image and question



const loadPreviousImage = () => {
  const currrentIndex = 0;
  const previousIndex = ( currrentIndex - 1 + logosArray.length) % logosArray.length;
  const previousLogo = logosArray[previousIndex];
  logoContainer.innerHTML = `<img src="${previousLogo.image}" alt="Logo">`;
  options.forEach((option, number) => {
    option.textContent = previousLogo.options[number];
  });
}
previousbtn.addEventListener("click",loadPreviousImage);



// Function for correct answer
const correctAnswer = (selectedOption) => {
  const currentLogo = logosArray[randomIndex];
 
  if (selectedOption === currentLogo.answer) { 
    scoreCount++;
    score.textContent = "Score: " + scoreCount;
  }
  
}



//Function for wrong answer
const wrongAnswer = (selectedOption , event) => {
  const currentLogo = logosArray[randomIndex];
  if (selectedOption !== currentLogo.answer){
    scoreCount;
    
  }
  options.forEach(option => {
    if (option !== event.target) {
      option.style.backgroundColor = "";
      option.style.color = "";
    }
  });
  loadNextImage();
  
}


answerContainer.addEventListener("click", (event) => {
  const selectedOption = event.target.textContent;
  // to be able to select only one option
  options.forEach(option => {
    if (option !== event.target) {
      option.style.backgroundColor = "";
      option.style.color = "";
    }
  });
  // To check if the selected option is correct when clicked
  if (selectedOption === logosArray[randomIndex].answer) {
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
    correctAnswer(selectedOption);
  }else{
    wrongAnswer(selectedOption, event);
    event.target.style.color = "white";
    event.target.style.backgroundColor = "red";
  }
  
});

//Function to restart Quiz
const restartQuiz = () => {
  scoreCount = 0;
  randomIndex = 0;
  visitedlogos = [];
  score.textContent = "Score: " + scoreCount;
  loadNextImage();
}
restartbtn.addEventListener("click", restartQuiz);


