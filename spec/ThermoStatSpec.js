describe ('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('When initialized', function(){
    it('Has a default temperature of 20', function(){
      expect(thermostat.temp()).toBe(20);
    });

    it("Has power saver mode 'on' by default", function(){
      expect(thermostat.psm()).toBe(true);
    });

    it("Has a maximum temperature of 25 limit when psm is on", function(){
      expect(thermostat.psm()).toBe(true);
      thermostat.ecoLimit();
      expect(thermostat.temp()).toBe(25);
    });
  });

  describe('Increase or decrease the temperature', function(){
    it("Increase temp by 1 with 'up button'", function(){
      thermostat.upButton();
      expect(thermostat.temp()).toBe(21);
    });

    it("Decreases temp by 1 with 'down button'", function(){
      thermostat.downButton();
      expect(thermostat.temp()).toBe(19);
    });
  });
















});
