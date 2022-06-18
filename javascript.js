//array of all the words in the game 
const myFriendsName =["aayush","avishek","amit","anuj","anup","arahanta","ayush","bikrant","dipesh","bishal","prabin"
                   ,"nishant","nikhil","ngawang","mishan","nandan","nistha","kshitiz","grishma","manjil","aakash"
                   ,"kanchan","anish"]
const countryList = ["Afghanistan",
                   "Albania",
                   "Algeria",
                   "Andorra",
                   "Angola",
                   "Anguilla",
                   "Antarctica",
                   "Argentina",
                   "Armenia",
                   "Aruba",
                   "Australia",
                   "Austria",
                   "Bahrain",
                   "Bangladesh",
                   "Barbados",
                   "Belarus",
                   "Belgium",
                   "Belize",
                   "Benin",
                   "Bermuda",
                   "Bhutan",
                   "Brazil",
                   "Bulgaria",
                   "Cambodia",
                   "Cameroon",
                   "Canada",
                   "Chad",
                   "Chile",
                   "China",
                   "Colombia",
                   "Comoros",
                   "Congo",
                   "CostaRica",
                   "Croatia",
                   "Cuba",
                   "Curacao",
                   "Cyprus",
                   "Czechia",
                   "Denmark",
                   "Djibouti",
                   "Dominica",
                   "Ecuador",
                   "Egypt",
                   "ElSalvador",
                   "England",
                   "Eritrea",
                   "Estonia",
                   "Eswatini",
                   "Ethiopia",
                   "Fiji",
                   "Finland",
                   "France",
                   "Gabon",
                   "Georgia",
                   "Germany",
                   "Ghana",
                   "Gibraltar",
                   "Greece",
                   "Greenland",
                   "Grenada",
                   "Guatemala",
                   "Guernsey",
                   "Guinea",
                   "Guyana",
                   "Haiti",
                   "Honduras",
                   "HongKong",
                   "Hungary",
                   "Iceland",
                   "India",
                   "Indonesia",
                   "Iran",
                   "Iraq",
                   "Ireland",
                   "Israel",
                   "Italy",
                   "Jamaica",
                   "Japan",
                   "Jersey",
                   "Jordan",
                   "Kazakhstan",
                   "Kenya",
                   "Kiribati",
                   "Korea",
                   "Kuwait",
                   "Kyrgyzstan",
                   "Latvia",
                   "Lebanon",
                   "Lesotho",
                   "Liberia",
                   "Libya",
                   "Liechtenstein",
                   "Lithuania",
                   "Luxembourg",
                   "Macao",
                   "Madagascar",
                   "Malawi",
                   "Malaysia",
                   "Maldives",
                   "Mali",
                   "Malta",
                   "Martinique",
                   "Mauritania",
                   "Mauritius",
                   "Mayotte",
                   "Mexico",
                   "Moldova",
                   "Monaco",
                   "Mongolia",
                   "Montenegro",
                   "Montserrat",
                   "Morocco",
                   "Mozambique",
                   "Myanmar",
                   "Namibia",
                   "Nauru",
                   "Nepal",
                   "Netherlands",
                   "NewZealand",
                   "Nigeria",
                   "Niue",
                   "Norway",
                   "Oman",
                   "Pakistan",
                   "Palau",
                   "Palestine",
                   "Panama",
                   "Paraguay",
                   "Peru",
                   "Philippines",
                   "Pitcairn",
                   "Poland",
                   "Portugal",
                   "Puerto Rico",
                   "Qatar",
                   "NorthMacedonia",
                   "Romania",
                   "Russia",
                   "Rwanda",
                   "Samoa",
                   "SanMarino",
                   "SaudiArabia",
                   "Senegal",
                   "Serbia",
                   "Seychelles",
                   "SierraLeone",
                   "Singapore",
                   "Slovakia",
                   "Slovenia",
                   "Somalia",
                   "SouthAfrica",
                   "Spain",
                   "SriLanka",
                   "Sudan",
                   "Suriname",
                   "Sweden",
                   "Switzerland",
                   "Syria",
                   "Taiwan",
                   "Tajikistan",
                   "Tanzania",
                   "Thailand",
                   "Togo",
                   "Tokelau",
                   "Tonga",
                   "Tunisia",
                   "Turkey",
                   "Turkmenistan",
                   "Tuvalu",
                   "Uganda",
                   "Ukraine",
                   "UAE",
                   "USA",
                   "Uruguay",
                   "Uzbekistan",
                   "Vanuatu",
                   "Venezuela",
                   "VietNam",
                   "Yemen",
                   "Zambia",
                   "Zimbabwe",
                 ];



//words for the hangman
var hangmanWords= countryList[Math.floor(Math.random()*countryList.length)];
//counting the mistakes
var mistakes =0;
//counting the correct
var correctGuess =0;
//max wrong one can commit before game over
var maxWrong=8;
//total number of correct guess to win the game
var totalCorrect = hangmanWords.length;

//making array for keyboard keys
const keys=  [ "q", "w", "e","r", "t", "y","u", "i", "o","p"
               ,"a", "s", "d","f", "g", "h","j", "k", "l"
               ,"z", "x", "c","v", "b", "n","m"
            ];

//putting all the keys in the keyboard div
Array.from(keys).forEach(function(key){

    //creating a button 
    let createkey = document.createElement("button");
    //setting an id name
    //createkey.setAttribute("id",key);
    //giving value to the keys
    createkey.setAttribute("value",key);
    //setting class name
    createkey.setAttribute("class","keyboardKey")
    //setting dataset 
    createkey.setAttribute("data-clicked","0")
    //adding onclivk funciton
    createkey.setAttribute("onclick","myFunction(this)")
    //creating a text node of the key        
    var text = document.createTextNode(key);
    //adding the text node to the button        
    createkey.appendChild(text);
    
    //adding this key to the keyboardiv             
    document.getElementById("keyboardKeysId").appendChild(createkey)      

    //for inserting line break after p,l
    if(key=="p" || key=="l"){
        let breakMe = document.createElement("br")
        document.getElementById("keyboardKeysId").appendChild(breakMe)
    }
    
})


//creating blanks as per the length of the word
for(let i =0; i<hangmanWords.length;i++){
    //creating a button 
    let createkey = document.createElement("button");
    //setting an id name
    createkey.setAttribute("id",i);
    //setting class name
    createkey.setAttribute("class","blankSpace")
    //postion fixed 
    createkey.style.position = "relative"
    //creating a text node of the key        
    let text = document.createTextNode("-");
    //adding the text node to the button        
    createkey.appendChild(text);
    //adding this key to the keyboardiv             
    document.getElementById("guessWordId").appendChild(createkey)
}

//this the the function to be called to draw the hangman 
function drawHangman(){
    //getting the canvas element into a constant
    const canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d")

    //switch case start
    switch(mistakes) {
        case 1:
          // code block
            ctx.beginPath();
            ctx.moveTo(50, 25);
            ctx.lineTo(250, 25);
            ctx.closePath();
            ctx.stroke();
          break;
        case 2:
          // code block
          ctx.beginPath();
          ctx.moveTo(150,25);
          ctx.lineTo(150,45);
          ctx.closePath();
          ctx.stroke();
          break;
        case 3:
            // code block
            ctx.beginPath();
            ctx.arc(150,60, 15, 0, 360);
            ctx.stroke();
            ctx.closePath();
            break;
        case 4:
            // code block
            ctx.beginPath();
            ctx.moveTo(150,75);
            ctx.lineTo(150,115);
            ctx.closePath();
            ctx.stroke();
            break;  
        case 5:
          // code block
          ctx.beginPath();
          ctx.moveTo(150,85);
          ctx.lineTo(125,100);
          ctx.closePath();
          ctx.stroke();
          break;
        case 6:
           // code block
          ctx.beginPath();
          ctx.moveTo(150,85);
          ctx.lineTo(175,100);
          ctx.closePath();
          ctx.stroke();
          break;
        case 7:
          // code block
          ctx.beginPath();
          ctx.moveTo(150,115);
          ctx.lineTo(125,130);
          ctx.closePath();
          ctx.stroke();
          break;
        case 8:
          // code block
          ctx.beginPath();
          ctx.moveTo(150,115);
          ctx.lineTo(175,130);
          ctx.closePath();
          ctx.stroke();
          break;
      }
    //switch case end

    // Stroked triangle

}

//function after onclick on the keyboard buttons
function myFunction(id){
    //counter hai 
    let count = false;
    //disabling the button as it's been clicked
    id.disabled=true;
    console.log(id)
//starting of the for loop
for(i=0;i<hangmanWords.length;i++){
    //checking if the selected button is right
    if(id.value == hangmanWords[i].toLowerCase()){   //yes right guess then
        let getguess = document.getElementById(i);
        //getguess.appendChild(document.createTextNode(id.value))
        getguess.textContent = id.value;
        correctGuess++;
        count =true;
    }
    
} 
//ending of the for loop

//color green if correct or red if wrong
if(count == true){  //guess is correct
    id.style.backgroundColor="#90EE90";
    
}else{  //wrong guess
    id.style.backgroundColor="red";
    //increasing the mistake integer
    mistakes++;
    console.log(mistakes)
    //draw the hangman as per the mistake increases
    drawHangman();
}

//if total mistakes outrun value six
if(mistakes==maxWrong){
  //get the modal2 div by id
  let modal2 = document.getElementById("myModal2");
  //show the modal 
  modal2.style.display="block"

  //get the div to show the correct name 
  let showCorrect = document.getElementById("correctWord")
  //creating a text node of the correct word    
  var text = document.createTextNode(hangmanWords);
  //adding the text node to the button        
  showCorrect.appendChild(text);
}else if(correctGuess == totalCorrect){
  //get the modal1 div by id
  let modal1 = document.getElementById("myModal1");
  //show the modal 
  modal1.style.display="block"
  //get the div to show the correct name 
  let showCorrect = document.getElementById("correctWord1")
  //creating a text node of the correct word    
  var text = document.createTextNode(hangmanWords);
  //adding the text node to the button        
  showCorrect.appendChild(text);
}


}

//directing to the home page
function gotoHomePage(){
  window.location.href = "base.html";
}

function playAgain(){
  window.location.href="game.html"
}



