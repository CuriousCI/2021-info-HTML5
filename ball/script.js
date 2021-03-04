let ball = {

  //ballY: 0,

  ballJump: function(){

    $("#palla").css("top", 10 + "%");
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

  //$("#palla").mouseenter(ball.changeBckground("in")).mouseleave(ball.changeBckground("out"));
  $("#palla").hover(_ => ball.changeBckground("in"), _ => ball.changeBckground("out"));

  $("#jumpButton").on("click", ball.ballJump);

  //$("#palla").css("left", 95 + "%");
  //$("#palla").css("left", 0 + "%");
}

$(document).ready(init);