var Thermostat = function(){
  this._defaultTemp = 20;
  this._PowersaverMode = true;
  this._ecoLimit = 25;
};

Thermostat.prototype.temp = function(){
  return this._defaultTemp;
};

Thermostat.prototype.psm = function(){
  return this._PowersaverMode;
};

Thermostat.prototype.upButton = function(){
  return this._defaultTemp ++
};

Thermostat.prototype.downButton = function(){
  return this._defaultTemp --
};
