let ball = {

  //ballY: 0,

  ballJump: function(){

    $("#palla").addClass('ballJump');
  },

  ballFall: function(){

     $("#palla").removeClass('ballJump')
  },

  changeBckground: function(mousePosition){

    if(mousePosition == "in"){

      $("body").css('background-color', "#ffff00");
    }else if(mousePosition == "out"){

      $("body").css('background-color', "#ffffff");
    }
  }
}

let init = function(){

  $("#palla").addClass("ballInit");

  $("#palla").hover(_ => ball.changeBckground("in"), _ => ball.changeBckground("out"));

  $("#jumpButton").on("click", ball.ballJump);
  $("#palla").on("click", ball.ballFall);
}

$(document).ready(init);