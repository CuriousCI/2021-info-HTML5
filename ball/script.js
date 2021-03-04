let ball = {
  
  ballJump: function(){

    $("#palla").addClass('ballJump');
  },

  ballFall: function(){

    if($("#palla").css("top") == 202.797 + "px"){

      $("#palla").removeClass('ballJump');
    }
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

  setInterval(onTimerTick, 33)

  function onTimerTick() {

    $("#jumpButton").on("click", ball.ballJump);
    ball.ballFall();
  }
}

$(document).ready(init);