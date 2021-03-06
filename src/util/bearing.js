class Bearing {
  constructor(rad) {
    this.setRadians(rad);
  }

  setRadians(rad) {
    this.rad = (rad + Bearing.MAX) % Bearing.MAX;
    return this;
  }

  getRadians() {
    return this.rad;
  }

  setDegrees(degrees) {
    this.rad = degrees * (Math.PI / 180);
    return this;
  }

  getDegrees() {
    return this.getRadians() * (180 / Math.PI);
  }

  addRadians(radToAdd) {
    this.setRadians(this.rad + radToAdd);
    return this;
  }

  addDegrees(degreeToAdd) {
    let radToAdd = degreeToAdd * (Math.PI / 180);
    this.addRadians(radToAdd);
    return this;
  }

  static between(positionA, positionB) {
    let dx = positionB.x - positionA.x;
    let dy = positionA.y - positionB.y;

    let theta = Math.atan2(dx, dy);

    return new Bearing(theta);
  }

  clone() {
    return new Bearing(this.getRadians());
  }
}

Bearing.MAX = Math.PI * 2;

export default Bearing;
