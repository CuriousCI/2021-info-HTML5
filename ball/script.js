let ball = {

  xPosition: 50,
  yPosition: 85,

  isAtRight: false,
  isAtLeft : true,

  jump: function(){

    $("#palla").addClass('ballJump'); 
  },

  fall: function(){

    if($("#palla").css("top") == 220 + "px"){

     $("#palla").removeClass('ballJump');
    }
  },

  move: function(){
    
    if(ball.isAtLeft == true){

      ball.xPosition += 1;
      $("#palla").css("left", ball.xPosition + "%");

        if(ball.xPosition == 95){

          ball.isAtLeft = false;
          ball.isAtRight = true;
        }
     }

    if(ball.isAtRight == true){

      ball.xPosition -= 1;
      $("#palla").css("left", ball.xPosition + "%");

      if(ball.xPosition == 0){

        ball.isAtLeft = true;
        ball.isAtRight = false;
      }
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

  $("#jumpButton").on("click", ball.jump);

  setInterval(onTimerTick, 33);

  function onTimerTick() {

    ball.fall();
    ball.move();
  }
}

$(document).ready(init);