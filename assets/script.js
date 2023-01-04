var today = moment();
$('#currentDay').text(today.format("LLLL"));

$(document).ready( function(){
    colChange ();
    renderText ();
});

function colChange() {
    var currentTime = today.hours();


// deternine time among the blocks
        var time = (today.format("hh:mm"));

        if (currentTime > time){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    }
