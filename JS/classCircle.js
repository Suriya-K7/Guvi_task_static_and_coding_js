console.log(`
********************class for Circle*******************

`);

class Circle {
  constructor(radius = 1, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  get Radius() {
    return this.radius;
  }
  get Color() {
    return this.color;
  }
  get Diameter() {
    return this.radius * 2;
  }
  set Diameter(diameter) {
    this.radius = diameter / 2;
  }
  get Area() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
  get Circumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
  get toString() {
    return `Circle[radius=${this.radius},color=${this.color}]`;
  }
}
let circle = new Circle(4);
console.log("area of circle using radius - 4");
console.log(circle.Area);
console.log("area of circle using diameter-4 by using setter method");
circle.Diameter = 4;
console.log(circle.Area);
