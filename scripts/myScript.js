window.onload = function () {
  if(window.innerHeight > window.innerWidth){
      document.getElementsByTagName("body").style.opacity = ".5";
}
}

let startGame = function(){
  document.getElementById("startPage").style.display = "none";
  document.getElementById("main").style.display = "flex";

  for (var i = 0; i < 3; i++) {
    document.getElementById("firstSel" + (i + 1)).style.display = "none";
  }
  //disableBtns();
  setTimeout(splitNmubers,500,true);

}

let masterArr = [];
let arrOne = [];
let arrTwo = [];
let arrThree = [];
let selection = 0;
let counter = 0;
let firstSelectionBool = false;
let usersNumber = [];
let hintsBool = false;
let tutorialBtnClick = false;
let slideAffectBool = false;

let splitNmubers = function () {

  createDeck();
  shuffleCards();

  for(var i = 0; i < masterArr.length; i++) {

    if (i < 9){

      arrOne.push(masterArr[i]);

    }else if (i > 8 && i < 18) {

      arrTwo.push(masterArr[i]);

    }else if (i > 17) {

      arrThree.push(masterArr[i]);

    }

  }

  masterArr = [];
  main("Please choose a card and memorize it!");
}


let main = function (message) {

  var listOne = document.getElementById("list1").children;
  var listTwo = document.getElementById("list2").children;
  var listThree = document.getElementById("list3").children;


  for (var i = 0; i < 9; i+=1) {

    if(arrOne[i].value > 10){

      listOne[i].innerHTML = "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img class='cardStyle' src='images/backofcard.png' alt='Avatar' ></div><div class='flip-card-back'><img class='royalCard' src='images/" + arrOne[i].card + arrOne[i].value + ".png'></div></div></div>";


    }else{

      listOne[i].innerHTML = "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img class='cardStyle' src='images/backofcard.png' alt='Avatar' ></div><div class='flip-card-back'><img class='cardStyle' src='images/" + arrOne[i].card + arrOne[i].value + ".png'></div></div></div>";


    }

  }
  for (var i = 0; i < arrTwo.length; i+=1) {

    if(arrTwo[i].value > 10){

      listTwo[i].innerHTML = "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img class='cardStyle' src='images/backofcard.png' alt='Avatar' ></div><div class='flip-card-back'><img class='royalCard' src='images/" + arrTwo[i].card + arrTwo[i].value + ".png'></div></div></div>";


    }else{

      listTwo[i].innerHTML = "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img class='cardStyle' src='images/backofcard.png' alt='Avatar' ></div><div class='flip-card-back'><img class='cardStyle' src='images/" + arrTwo[i].card + arrTwo[i].value + ".png'></div></div></div>";


    }

  }

  for (var i = 0; i < arrThree.length; i+=1) {

    if(arrThree[i].value > 10){

      listThree[i].innerHTML = "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img class='cardStyle' src='images/backofcard.png' alt='Avatar' ></div><div class='flip-card-back'><img class='royalCard' src='images/" + arrThree[i].card + arrThree[i].value + ".png'></div></div></div>";


    }else{

      listThree[i].innerHTML = "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img class='cardStyle' src='images/backofcard.png' alt='Avatar' ></div><div class='flip-card-back'><img class='cardStyle' src='images/" + arrThree[i].card + arrThree[i].value + ".png'></div></div></div>";


    }
  }

  if (tutorialBtnClick === false) {
    enableBtns();
  }

  document.getElementById("message").innerHTML = message;

}

let firstSelection = function (num) {

  firstSelectionBool = true;



  //disableBtns();
  for (var i = 1; i < 4; i++) {
    document.getElementById("firstSel" + i).style.display = "none";
  }

  document.getElementById("selection" + num).style.display = "none";
  document.getElementById("btn" + num).style.display = "inline-block";

  switch (num) {

      case 1:
        choiceThree();
        break;
      case 2:
        choiceOne();
        break;
      case 3:
        choiceTwo();
        break;
    }

  }



  let createDeck = function () {

    let values = [1,2,3,4,5,6,7,8,9,10];
    let suits = ["spades","hearts","diamonds","clubs"];
    let kings = ["kd","ks","kh","kc"];
    let queens = ["qd","qs","qh","qc"];
    let jacks = ["jd","js","jh","jc"];
    let deck1 = [];


    for(let i = 0;i < suits.length;i++){
      for(let j = 0;j < values.length;j++){
    let cardObject = {card:suits[i],value:values[j]};
    deck1.push(cardObject);
    }
    }


    for(let k = 0; k < kings.length; k++){
    let cardObject = {card:kings[k],value:13};
    deck1.push(cardObject);

    }

    for(let o = 0; o < queens.length; o++){
    let cardObject = {card:queens[o],value:12};
    deck1.push(cardObject);
    }
    for(let q = 0; q < jacks.length; q++){
    let cardObject = {card:jacks[q],value:11};
    deck1.push(cardObject);
    }

    for (var i = 0; i < 27; i++) {
      let rand = randomNumbers(deck1.length);
      masterArr.push(deck1[rand]);
      deck1.splice(rand,1);
    }

 }

 let choice = function (num) {

   shuffleNumbers(num);
   selection = parseInt(num);
   document.getElementById("selection" + num).style.display = "none";
   document.getElementById("btn" + num).style.display = "inline-block";

 }

 let shuffleNumbers = function (num) {

   switch (num) {
     case 1:
       choiceOne();
       break;
     case 2:
       choiceTwo();
       break;
     case 3:
       choiceThree();
       break;
   }

 }

 let choiceOne = function () {

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrOne[i]);
   }

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrThree[i]);
   }

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrTwo[i]);
   }

   splitMaster();

 }

 let choiceTwo = function () {

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrTwo[i]);
   }

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrOne[i]);
   }

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrThree[i]);
   }

   splitMaster();

 }

 let choiceThree = function () {

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrThree[i]);
   }

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrTwo[i]);
   }

   for (var i = 0; i < 9; i++) {
     masterArr.push(arrOne[i]);
   }

   splitMaster();

  }


let shuffleCards = function () {

  for(let m = masterArr.length-1;m > 0;m--){
    let rand = [Math.floor(Math.random() * masterArr.length)];
  [masterArr[m], masterArr[rand]] = [masterArr[rand], masterArr[m]];

}

}

let splitMaster = function () {

  disableBtns();
  slideAffect();
  arrOne = [];
  arrTwo = [];
  arrThree = [];

  for (var i = 0; i < 27; i+=3) {
    arrOne.push(masterArr[i]);
    arrTwo.push(masterArr[i + 1]);
    arrThree.push(masterArr[i + 2]);
  }

  masterArr = [];

  if(counter === 2){

    usersNumber = arrThree[0];
    counter++;

    changeNumberPos();

    displayPopUp("Please select the row your card is in!");

  }else if(counter === 3){

    displayUserNumber();

  }else{

    counter++;

    displayPopUp("Please select the row your card is in!");

  }

}


let displayPopUp = function (message) {

    document.getElementById("main").classList.add("dimBody");
    document.getElementById("popUp").style.display = "flex";
    document.getElementById("popUpMessage").innerHTML = "Shuffling.....";
    document.getElementsByClassName("hint")[1].style.display = "none";
    document.getElementsByClassName("hint")[1].innerHTML = "";
    slideAffect();
    setTimeout(function () {
      document.getElementById("main").classList.remove("dimBody");
      document.getElementById("popUp").style.display = "none";
      document.getElementById("popUpMessage").innerHTML = "";
      slideAffect();

      if(hintsBool === true){

        hintControl(4);

      }

      main(message);

    },3000);

}

let changeNumberPos = function () {

  let randChoice = randomNumbers(3);

  let randNum = randomNumbers(9);

  switch (randChoice) {
    case 0:
      arrThree[0] = arrOne[randNum];
      arrOne[randNum] = usersNumber;
      break;
    case 1:
      arrThree[0] = arrTwo[randNum];
      arrTwo[randNum] = usersNumber;
      break;
    case 2:
      arrThree[0] = arrThree[randNum];
      arrThree[randNum] = usersNumber;
      break;
  }


}

let removeElements = function () {

  var listOne = document.getElementById("list1").children;
  var listTwo = document.getElementById("list2").children;
  var listThree = document.getElementById("list3").children;

  for (var i = 0; i < 9; i++) {
    listOne[i].innerHTML = "";
  }
  for (var i = 0; i < 9; i++) {
    listTwo[i].innerHTML = "";
  }
  for (var i = 0; i < 9; i++) {
    listThree[i].innerHTML = "";
  }

}

let displayManager = function (num) {

  let maxNum = 9;
  let increment = 0;

  if(hintsBool === false && tutorialBtnClick === false){

    document.getElementById("hintIcon").style.visibility = "hidden";

  }else{

  if(num < 2){
    hintControl(2);
  }else if(num === 2){
    hintControl(3);
  }

}

  for (var i = 1; i < 4; i++) {
    document.getElementById("btn" + i).style.display = "inline-block";
    document.getElementById("selection" + i).style.display = "none";
    if(firstSelectionBool === false){ document.getElementById("firstSel" + i).style.display = "none";}
  }
  for (var i = 0; i < 27; i++) {
    document.getElementsByClassName("flip-card-inner")[i].style.transform = "none";
  }

  document.getElementById("btn" + num).style.display = "none";

  if (num === 2) {
    increment = 9;
    maxNum = 18;
  }else if (num === 3) {
    increment = 18;
    maxNum = 27;
  }

  for (var i = increment; i < maxNum; i++) {
    document.getElementsByClassName("flip-card-inner")[i].style.transform = "rotateY(180deg)";
  }

  if(firstSelectionBool === false){

    document.getElementById("firstSel" + num).style.display = "block";

  }else{

    document.getElementById("selection" + num).style.display = "block";

  }
}

let displayUserNumber = function (){

  document.getElementById("main").style.display = "none";
  document.getElementById("usersNumberDiv").style.display = "flex";
  document.getElementById("messageAnswer").innerHTML = "Your card is!";
  document.getElementById("messageEnd").innerHTML = "Want to try again? Click play again!";
  document.getElementById("usersNumber").innerHTML = "<img class='cardStyle' src='images/" + usersNumber.card + usersNumber.value + ".png'>";

}

let disableBtns = function () {
  let btn = document.getElementsByTagName("button");
  for (var i = 0; i < 9; i++) {

    btn[i].disabled = true;

  }
}

let enableBtns = function () {
  let btn = document.getElementsByTagName("button");
  for (var i = 0; i < 9; i++) {

    btn[i].disabled = false;

  }
}

let tutorialBtn = function () {
  tutorialBtnClick = true;
  document.getElementById("hintIcon").style.visibility = "hidden";
  displayHints();
  startGame();
}

let displayHints = function () {

  if(hintsBool === false && tutorialBtnClick === true){
    tutorialBtnClick = true;
    hintsBool = true;
    hintControl(1);

  }else{

    hintsBool = false;
    for (var i = 0; i < 3; i++) {

    document.getElementsByClassName("hint")[i].style.display = "none";
    document.getElementsByClassName("hint")[i].innerHTML = "";

    }

  }
}

let hintControl = function (num) {
    disableBtns();
  if(hintsBool === true){

    switch (num) {
      case 1:

        document.getElementsByClassName("hint")[0].style.display = "block";
        document.getElementsByClassName("hint")[0].innerHTML = "Click show button!";
        document.getElementById("list1").classList.add("ulHint");
        document.getElementById("btn1").disabled = false;
        dimAffectTutorial(1);
        break;
      case 2:
        document.getElementsByClassName("hint")[0].style.display = "none";
        document.getElementsByClassName("hint")[0].innerHTML = "";
        document.getElementById("list1").classList.remove("ulHint");
        document.getElementById("list2").classList.add("ulHint");
        document.getElementById("btn2").disabled = false;
        dimAffectTutorial(2);
        document.getElementsByClassName("hint")[1].style.display = "block";
        document.getElementsByClassName("hint")[1].innerHTML = "Click show button!";
        break;
      case 3:
        document.getElementsByClassName("hint")[1].style.display = "block";
        document.getElementsByClassName("hint")[1].innerHTML = "Think of a card and click choose!";
          document.getElementsByClassName("hint")[1].style.width = "25%";
          document.getElementById("firstSel2").disabled = false;
        break;
      case 4:
        dimAffectTutorial(0);
        for (var i = 0; i < 3; i++) {
        hintsBool = false;
        tutorialBtnClick = false;
        document.getElementsByClassName("hint")[i].style.display = "block";
        document.getElementsByClassName("hint")[i].style.fontSize = "16px";
        document.getElementById("list2").classList.remove("ulHint");
        document.getElementById("list2").classList.remove("ulDim");
        document.getElementsByClassName("hint")[i].innerHTML = "Click show on each pile until you find your card!";
        }
        setTimeout(function () {
          for (var i = 0; i < 3; i++) {

          document.getElementsByClassName("hint")[i].style.display = "block";
          document.getElementsByClassName("hint")[i].style.fontSize = "16px";
          document.getElementsByClassName("hint")[i].innerHTML = "And continue the process!";

          }
          setTimeout(function () {
            displayHints();
          }, 3000);

        }, 5000);
        break;
    }

  }else{

    document.getElementById("hintIcon").disabled = true;

    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("hint")[i].style.display = "none";
      document.getElementsByClassName("hint")[i].innerHTML = "";
    }
  }

}

let dimAffectTutorial = function (num) {

  if (num === 0) {

    for (var i = 1; i < 4; i++) {

        document.getElementById("div" + i).classList.remove("ulDim");

      }

  }else{

    for (var i = 1; i < 4; i++) {

        document.getElementById("div" + i).classList.add("ulDim");

      }

      document.getElementById("div" + num).classList.remove("ulDim");

    }
}

let slideAffect = function () {

  let element = document.getElementsByClassName("flip-card");

  if(slideAffectBool === false){

    setTimeout(function () {

        for (var i = 0; i < 27; i++) {
        element[i].classList.add("slideBack");
        slideAffectBool = true;

      }
    },1000);

  }else {

  setTimeout(function (){

      for (var i = 0; i < 27; i++) {
      element[i].classList.remove("slideBack");
        slideAffectBool = false;

      }
    },1000);

  }

}

let playAgain = function () {

  document.getElementById("main").style.display = "flex";
  document.getElementById("usersNumberDiv").style.display = "none";
  masterArr = [];
  arrOne = [];
  arrTwo = [];
  arrThree = [];
  selection = 0;
  counter = 0;
  firstSelectionBool = false;
  usersNumber = [];
  hintsBool = false;
  slideAffectBool = false;
  for (var i = 0; i < 27; i++) {
    document.getElementsByTagName("li")[i].innerHTML = "";
  }
  document.getElementById("message").innerHTML = "Please choose a card and memorize it!";
  startGame();

}
let randomNumbers = function(max){

  let rand = Math.floor(Math.random() * max);

  return rand;

}
