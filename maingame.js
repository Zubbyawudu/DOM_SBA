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
  answer: "Mercedes"
},{
  image:"https://quizbash.com/assets/img/games/logo-audi.jpg",
  options: ["Lamborghini", "Audi", "Jaguar", "Maxus"],
  answer: "Audi"
},
];

//options Section