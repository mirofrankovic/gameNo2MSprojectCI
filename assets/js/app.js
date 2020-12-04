/////////////////////////////////Initialization/////////////////////////////////////////
const QUIZ_API = 'application.json';
const RESULT_API = 'result.json';

        let currentQuestionNo=0;
        let score=0;    //    user current score
        let maxScore=0;
        let answerSubmited=false;

 function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");  // assets/data/application.json
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("assets/data/application.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});       



function loadQuestion (){

    $(document).ready(function(){
    $.getJSON('assets/data/application.json', function(data){                
        // console.log(data);

        for(i=0;i<data.questionary.length;i++){                 
            var data= questionary[i] 
            
            // console.log(questionary.question);
        }

    })//JSON

});

}

loadQuestion();

// $.getJSON("assets/data/application.json", function(json) {
//     console.log(json); // this will show the info it in console
// });


   // Create XMLHttpRequest object. ###### This is to road full file on the screen and create a table
    // var oXHR = new XMLHttpRequest();

    // // Initiate request.
    // oXHR.onreadystatechange = reportStatus;
    // oXHR.open("GET", "assets/data/application.json", true);  // get json file.
    // oXHR.send();

    // function reportStatus() {
    //     if (oXHR.readyState == 4) {		// Check if request is complete.
    //         // Write data to a DIV element.
    //         document.getElementById('question').innerHTML = this.responseText;
    //     }
    // }


    function scoreGame(){


         document.getElementById("after-submit").style.visibility = "visible";
         document.getElementById("number-total-score").innerHTML = "Your Total Score Is: " + score + "score. ";
    }