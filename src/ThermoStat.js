var Thermostat = function(){
  this._Temp = 20;
  this._PowersaverMode = true;
};

Thermostat.prototype.temp = function(){
  return this._Temp;
};

Thermostat.prototype.psm = function(){
  return this._PowersaverMode
};

Thermostat.prototype.upButton = function(){
  if (this._PowersaverMode && this._Temp < 25) {
    this._Temp ++;
  };
  if (!this._PowersaverMode && this._Temp < 32) {
    this._Temp ++;
  };
};

Thermostat.prototype.downButton = function(){
  if (this._Temp > 10){
   this._Temp --;
 };
};

Thermostat.prototype.resetButton = function(){
  return this._Temp
};


Thermostat.prototype.psmButton = function(){
  this._PowersaverMode = !this._PowersaverMode;
  if (this._Temp > 25) {
      this._Temp = 25;
  };
};

Thermostat.prototype.color = function(){
  if(this._Temp < 18){
    return 'green';
  };
  if(this._Temp < 25){
    return 'yellow';
  };
  return 'red';
};
