$(document).ready(function(){
    $('#photo1').on({
      mouseenter:function(){
 $( "#photo1" ).fadeToggle( "slow", function() {
$( "#photo2" ).fadeToggle( "slow" );
});
      },
    })
	$('#photo2').on({
      mouseleave:function(){
 $( "#photo2" ).fadeToggle( "slow", function() {
$( "#photo1" ).fadeToggle( "slow" );
});
      },
    })
        $('#photo5').on({
      mouseenter:function(){
 $( "#photo5" ).fadeToggle( "slow", function() {
$( "#photo9" ).fadeToggle( "slow" );
});
      },
    })
	$('#photo9').on({
      mouseleave:function(){
 $( "#photo9" ).fadeToggle( "slow", function() {
$( "#photo5" ).fadeToggle( "slow" );
});
      },
    })
            $('#photo3').on({
      mouseenter:function(){
 $( "#photo3" ).fadeToggle( "slow", function() {
$( "#photo11" ).fadeToggle( "slow" );
});
      },
    })
	$('#photo11').on({
      mouseleave:function(){
 $( "#photo11" ).fadeToggle( "slow", function() {
$( "#photo3" ).fadeToggle( "slow" );
});
      },
    })
            $('#photo4').on({
      mouseenter:function(){
 $( "#photo4" ).fadeToggle( "slow", function() {
$( "#photo8" ).fadeToggle( "slow" );
});
      },
    })
	$('#photo8').on({
      mouseleave:function(){
 $( "#photo8" ).fadeToggle( "slow", function() {
$( "#photo4" ).fadeToggle( "slow" );
});
      },
    })
            $('#photo7').on({
      mouseenter:function(){
 $( "#photo7" ).fadeToggle( "slow", function() {
$( "#photo6" ).fadeToggle( "slow" );
});
      },
    })
	$('#photo6').on({
      mouseleave:function(){
 $( "#photo6" ).fadeToggle( "slow", function() {
$( "#photo7" ).fadeToggle( "slow" );
});
      },
    })
});