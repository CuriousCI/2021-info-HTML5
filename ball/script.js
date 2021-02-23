let ball = {

  //ballTopPosition: 0,

  ballFallDown: function(){

    let ballTopPosition = parseFloat($(this).css("width"));
    console.log(this.ballTopPosition);
  },

  changeBckground: function(mousePosition){

    if(mousePosition == "in"){

      $("body").css('background-image', "url('/ball/assets/erba.png')");
    }else if(mousePosition == "out"){

      $("body").css('background-image', "none");
    }
  }
}

let init = function(){

  $("#palla").hover(_ => ball.changeBckground("in"), _ => ball.changeBckground("out"));
}

$(document).ready(init);