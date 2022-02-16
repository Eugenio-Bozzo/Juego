$(function(){
    var winWidth = $(document).width();
    var duration = 1000;
    $( document ).keydown( function ( event ){
      var keyCode = event.keyCode || event.which;
      var keyMap = {left: 37, up: 38, right: 39, down: 40};
      
      switch( keyCode ){
        case keyMap.left: 
          $( '#spaceShip' ).animate({
            left: '-=10'
          }, 50);
          break;
        case keyMap.up: 
          var ufoLeft = $( '#spaceShip' ).offset().left;
          var ufoTop = $( '#spaceShip' ).offset().top;
  
          $( '#laser' ).offset({
            left: ufoLeft + 58,
            top: ufoTop - 10
          });
          
          $( '#laser' ).css( 'display', 'block' ).animate({ top: 10 }, 1000, function(){
            var invaderLeft = $('#invader').offset().left;
            var invaderLeft2 = $('#invader2').offset().left;
            var invaderLeft3 = $('#invader3').offset().left;
            var invaderLeft4 = $('#invader4').offset().left;
            var invaderLeft5 = $('#invader5').offset().left;
            var invaderLeft6 = $('#invader6').offset().left;
            var laserLeft = $( '#laser' ).offset().left;
            
            if ( laserLeft >= invaderLeft && laserLeft <= invaderLeft + 288 ){
              $( '#invader').hide();
            }
                else if (laserLeft >= invaderLeft2 && laserLeft <= invaderLeft2 + 288 ){
                $( '#invader2').hide();
              }
                    else if (laserLeft >= invaderLeft3 && laserLeft <= invaderLeft3 + 288 ){
                $( '#invader3').hide();
              }
                        else if (laserLeft >= invaderLeft4 && laserLeft <= invaderLeft4 + 288 ){
                $( '#invader4').hide();
              }
                            else if (laserLeft >= invaderLeft5 && laserLeft <= invaderLeft5 + 288 ){
                $( '#invader5').hide();
              }     
                                else if (laserLeft >= invaderLeft6 && laserLeft <= invaderLeft6 + 288 ){
                $( '#invader6').hide();
              }
            $( '#laser' ).offset({
              top: 0,
              left: 0
            });
            
            $( '#laser' ).css( 'display', 'none' );
          });
          break;
          
        case keyMap.right: 
          $( '#spaceShip' ).animate({
            left: '+=10'
          }, 50);
          break;
      }
    });
  });
  