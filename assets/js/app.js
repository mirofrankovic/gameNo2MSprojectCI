/////////////////////////////////Initialization/////////////////////////////////////////
let gameData=[];        // my global data
let currentQuestionIndex=0;
let score=0;              //    user current score
let maxScore=0;
let answerSubmited=true;
let showQuestion=true;





$(document).ready(function(){
/**
   * Fetches game data from json file and writes response to global variable
   */

   function getGameData(){
       fetch("assets/data/gameData.json'")
       .then(response => {
           return response.json();            // parse
       })
       .then(fetchedData => {
           gameData = fetchedData;
       })
       .catch(error => {
           alert("Failed to get game data.");
           console.log(error);
           });

   }


function loadingGame() {
    $("#main-page").css("background-color", "red"
    // "url(https://images.app.goo.gl/mRFUenjEXmQ3NWws7)" // json file 
    );
    $("#after-submit").hide();
    $("#game-show").show();
}  


   
function loadQuestion (){

        // for(i=0;i<data.questionary.length;i++){                 
        //     var data= questionary[i] 
            
        //     // console.log(questionary.question);
        // }

}

loadQuestion();





function scoreGame(){


         document.getElementById("after-submit").style.visibility = "visible";
         document.getElementById("number-total-score").innerHTML = "Your Total Score Is: " + score + "score. ";
    }










});








