function Airport(capacity) {
  this.planes = [];
  this.capacity = capacity
}

Airport.prototype.land = function(plane) {
  if(this.planes.length < this.capacity) {
    this.planes.push(plane)
  } else {
    throw new Error("Airport is full!")
  }
  
}

Airport.prototype.takeOff = function() {
  if(this.planes.length > 0) {
    this.planes.pop()
  } else {
    throw new Error("No planes in the airport!")
  }
}



Airport.prototype.isStormy = function () {
  if(randNumber(4) < 3) {
    return false
  } else {
    return true
  }
}


var randNumber = function (max) {
  return Math.floor(Math.random()*Math.floor(max))
}