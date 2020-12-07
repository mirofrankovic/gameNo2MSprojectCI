/////////////////////////////////Initialization/////////////////////////////////////////
let gameData;                    // my global  Json data
let currentQuestionIndex=0;          // text question?????????????? is this also "question" from JSON?
let score=0;                        // user current score
let maxScore=0;
let answerSubmited=true;
let showQuestion=true;


// $(document).ready(function(){
/**
   * Fetches game data from json file and writes response to global variable
   */

   function getGameData() {
       fetch("assets/data/gameData.json")                         //promise
    //    .then(response => {
        //    response = response.json();
        //    gameData = response;
        
        // })                                // parse 
       .then(response => response.json())
            .then(function (data) {
                gameData = data;
                loadQuestion();
            })
       .catch(error => {
           alert("Failed to get game data.");
           console.log(error);
           });
        // loadQuestion();

   }
// getGameData();


function loadingGame() {
    $("#main-page").css("background-color", "red"
    // "url(https://images.app.goo.gl/mRFUenjEXmQ3NWws7)" // json file 
    );
    $("#after-submit").hide();
    $("#game-show").show();
}  


   // load Qiuz Questions

function loadQuestion() {  


    // for loop


    let totalQuestion=0;                       // total questions 10
    let currentQuestionIndex=0; 

     console.log(gameData);
}

getGameData();




         // play the game

        // for(i=0;i<data.questionary.length;i++){                 
        //      var data= questionary[i] 
            
        //      console.log(questionary.question);
        //  }



function scoreGame(){


         document.getElementById("after-submit").style.visibility = "visible";
         document.getElementById("number-total-score").innerHTML = "Your Total Score Is: " + score + "score. ";
    }










// });








