export function Triangle(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}


Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
  else if ((this.side1 === this.side2) && ((this.side1 === this.side3)) && ((this.side2 === this.side3))) {
    return "equilateral triangle";
  }
  else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "scalene triangle";
  }
  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
    return "isosceles triangle";
  }
};


export function Rectangle(side1, side2, side3, side4){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Rectangle.prototype.checkSides = function() {
  if ((this.side1 === this.side3) && (this.side2 === this.side4)){
    return "rectangle";
  }
};


Rectangle.prototype.isSquare = function() {
  if ((this.side1 === this.side2) && (this.side2 === this.side3) && (this.side3 === this.side4) && (this.side4 === this.side1)){
    return "square"
  }
}

export function add(num1, num2){
  var total = num1 + num2;
  return total;
}

export function multiply(num1, num2, num3){
  var total = num1 * num2 * num3;
  return total;
}
