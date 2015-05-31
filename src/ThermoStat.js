var Thermostat = function(){
  this._defaultTemp = 20;
  this._PowersaverMode = true;
};

Thermostat.prototype.temp = function(){
  return this._defaultTemp;
};

Thermostat.prototype.psm = function(){
  return this._PowersaverMode
};

Thermostat.prototype.upButton = function(){
  if (this._PowersaverMode && this._defaultTemp < 25) {
    this._defaultTemp ++;
  };
  if (!this._PowersaverMode && this._defaultTemp < 32) {
    this._defaultTemp ++;
  };
};

Thermostat.prototype.downButton = function(){
  if (this._defaultTemp > 10){
   this._defaultTemp --;
 };
};

Thermostat.prototype.resetButton = function(){
  return this._defaultTemp
};


Thermostat.prototype.psmButton = function(){
  this._PowersaverMode = !this._PowersaverMode;
  if (this._defaultTemp > 25) {
      this._defaultTemp = 25;
  };
};

Thermostat.prototype.color = function(){
  if(this._defaultTemp < 18){
    return 'green';
  };
  if(this._defaultTemp < 25){
    return 'yellow';
  };
  return 'red';
};
