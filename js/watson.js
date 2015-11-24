// Post a question to Watson.
function AskWatson(){
	
    var qText = document.getElementById("questionText").value;
    
    $.ajax({

        type: "POST",

        async: 'false',

        url: "proxy.php",

        cache: 'false',

        data: {question: qText},

        success: function (data, status, xhr){

            console.log("Question Asked: " + qText);

            var answer = JSON.parse(data);
            $('#answerText').html(String(answer.question.evidencelist[0].text));
            $('#confidenceText').html("Confidence: " + String(Math.round(Number(answer.question.evidencelist[0].value) * 100)) + "%");
        },

        error: function(xhr){

            console.log("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
};

// Open or Close Notebook Panel
function ToggleMoveQAArea(){

    // Close Notebook
    if (document.getElementById('openclosenotebook').firstChild.data == "Close Notebook"){

        document.getElementById('openclosenotebook').firstChild.data = "Open Notebook";

        $('#mainQA').toggleClass('col-sm-6 col-sm-offset-1 col-sm-6 col-sm-offset-3');
        $('#mainQA').removeClass('col-sm-6 col-sm-offset-1');
        $('#mainQA').addClass('col-sm-6 col-sm-offset-3');

        $('#notebookarea').toggleClass('hidden col-sm-3 col-sm-offset-1');
        $('#notebookarea').removeClass('col-sm-3 col-sm-offset-1');
        $('#notebookarea').addClass('hidden');

        $('#openclosenotebook').addClass('buzz-out');
    }
    // Open Notebook
    else {

        document.getElementById('openclosenotebook').firstChild.data = "Close Notebook";

        $('#mainQA').toggleClass('col-sm-6 col-sm-offset-3 col-sm-6 col-sm-offset-1');
        $('#mainQA').removeClass('col-sm-6 col-sm-offset-3');
        $('#mainQA').addClass('col-sm-6 col-sm-offset-1');

        $('#openclosenotebook').removeClass('buzz-out');
    }

    setTimeout(ToggleMoveNBArea, 300);
};

function ToggleMoveNBArea(){

    // Open Notebook Wrap-up
    if (document.getElementById('openclosenotebook').firstChild.data == "Close Notebook"){  

        $('#notebookarea').toggleClass('hidden col-sm-3 col-sm-offset-1');
        $('#notebookarea').addClass('wow fadeInRight animated hidden col-sm-3 col-sm-offset-1');
        $('#notebookarea').removeClass('hidden');
    }
};

function AddToNotebook(){

    var qText = document.getElementById("questionText").value;

    var aText = document.getElementById("answerText").innerHTML;

    var divToWriteTo = document.getElementById('scroll');

    divToWriteTo.innerHTML += '<h5>' + qText + '</h5><p class="small">' + aText + '</p><br>';
};

// Fade in Answers
function ToggleAnswersArea(){

    $("#answers").addClass("wow fadeIn animated");
    $("#answers").removeClass("hidden");
};

// New instance of WOW.
new WOW().init();

// Pick random background.
bgSel = new Array(27);

bgSel[0] = "img/parks1.jpg";
bgSel[1] = "img/parks2.jpg";
bgSel[2] = "img/parks3.jpg";
bgSel[3] = "img/parks4.jpg";
bgSel[4] = "img/parks5.jpg";
bgSel[5] = "img/parks6.jpg";
bgSel[6] = "img/parks7.jpg";
bgSel[7] = "img/parks8.jpg";
bgSel[8] = "img/parks9.jpg";
bgSel[9] = "img/parks10.jpg";
bgSel[10] = "img/parks11.jpg";
bgSel[11] = "img/parks12.jpg";
bgSel[12] = "img/parks13.jpg";
bgSel[13] = "img/parks14.jpg";
bgSel[14] = "img/parks15.jpg";
bgSel[15] = "img/parks16.jpg";
bgSel[16] = "img/parks17.jpg";
bgSel[17] = "img/parks18.jpg";
bgSel[18] = "img/parks19.jpg";
bgSel[19] = "img/parks20.jpg";
bgSel[20] = "img/parks21.jpg";
bgSel[21] = "img/parks22.jpg";
bgSel[22] = "img/parks23.jpg";
bgSel[23] = "img/parks24.jpg";
bgSel[24] = "img/parks25.jpg";
bgSel[25] = "img/parks26.jpg";
bgSel[26] = "img/parks27.jpg";

var bgNum = Math.round(Math.random() * (bgSel.length - 1));
var base = bgSel[bgNum];