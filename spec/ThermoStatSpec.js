describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('When initialized', function() {

    it('Has a default temperature of 20', function() {
      expect(thermostat.temp()).toEqual(20);
    });

    it("Has power saver mode 'on' by default", function() {
      expect(thermostat.psm()).toBe(true);
    });
  });

  describe("Temperature functions", function() {

    it("Can increase temp by 1 with 'up button'", function() {
      thermostat.upButton();
      expect(thermostat.temp()).toEqual(21);
    });

    it("Can increase temp by 2 with 'up button'", function() {
      thermostat.upButton();
      thermostat.upButton();
      expect(thermostat.temp()).toEqual(22);
    });

    it("Can decreases temp by 1 with 'down button'", function() {
      thermostat.downButton();
      expect(thermostat.temp()).toEqual(19);
    });

    it("Can decrease temp by 2 with 'down button'", function() {
      thermostat.downButton();
      thermostat.downButton();
      expect(thermostat.temp()).toEqual(18);
    });

    it("Can decrease temperature by 10 with 'down button'", function() {
      for (var i = 1; i < 11; i++) {
        thermostat.downButton();
      };
      expect(thermostat.temp()).toEqual(10);
    });

    it("Has a minimum temperature of 10", function(){
      for (var i = 1; i < 12; i++) {
        thermostat.downButton();
      };
      expect(thermostat.temp()).toEqual(10);
    });
  });


  describe("Reset feature", function(){

    it("Can be reset to default with the 'reset button'", function(){
      thermostat.resetButton();
      expect(thermostat.temp()).toEqual(20);
    });
  });


describe("Power saving features", function() {

    it("Can be turned off", function() {
      thermostat.psm();
      thermostat.psmButton();
      expect(thermostat.psm()).toBe(false);
    });

    it("has a max temp of 25 degrees when on", function() {
      for (i = 1; i < 6; i++) {
        thermostat.upButton();
      };
      expect(thermostat.temp()).toEqual(25);
    });

    it("cannot exceed a higher temp then 25 when on", function() {
      for (i = 1; i < 7; i++) {
        thermostat.upButton();
      };
      expect(thermostat.temp()).toEqual(25);
    });
  });

  describe("Color display features", function(){

    it("is green when the temp less than 18 degrees", function(){
      for (i = 0; i < 20; i++){
        thermostat.downButton();
      };
      expect(thermostat.color()).toBe('green');
    });
  //
  //   it("is yellow when the temp is less than 25 degrees", function(){
  //     for (i = 0; i < 2; i++{
  //       thermostat.upButton();
  //     };
  //     expect(thermostat.color()).toBe('yellow');
  //   });
  //
  //   it("is red when the temp is 25 degrees or above", function(){
  //     for (i = 0; i < 20; i++){
  //       thermostat.upButton();
  //     };
  //     expect(thermostat.color()).toBe('red');
  //   });
  });
});
