var thermostat = new Thermostat();

  $(document).ready(function(){


$('#psm').click(function(){
  thermostat.psm();
  $('#defaultTemp').html(thermostat.defaultTemp);
  $('body').css({backgroundColor: thermostat.colour});
});


$('#upButton').click(function(){
  thermostat.upButton();
  $('#defaultTemp').html(thermostat.defaultTemp);
  $('body').css({backgroundColor: thermostat.colour});
});

$('#downButton').click(function(){
  thermostat.downButton();
  $('#defaultTemp').html(thermostat.defaultTemp);
  $('body').css({backgroundColor: thermostat.colour});
});

$('#resetButton').click(function(){
  thermostat.resetButton();
  $('#defaultTemp').html(thermostat.defaultTemp);
  $('body').css({backgroundColor: thermostat.colour});
});

});
