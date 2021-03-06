let ball = {
  
  ballJump: function(){

    $("#palla").addClass('ballJump');
  },

  ballFall: function(){

    if($("#palla").css("top") == 220 + "px"){

      $("#palla").removeClass('ballJump');
    }
  },

  /*move: function(){

    $("#palla").addClass("ballMoveLeft");

    console.log($("#palla").css("left"));

    if($("#palla").css("left") == 0){

      $("#palla").removeClass("ballMoveLeft").addClass("ballMoveRight");
    }
},*/

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

  

  setInterval(onTimerTick, 33);

  function onTimerTick() {

    $("#jumpButton").on("click", ball.ballJump);
    ball.ballFall();

    //ball.move();
  }
}

$(document).ready(init);