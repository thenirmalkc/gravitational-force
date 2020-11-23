class Attractor {

  constructor(x, y) {
    this.position = new Vector2D(x, y)
    this.mass = 1
  }

  set_mass(mass) {
    this.mass = mass
  }

  calculate_attraction_force(obj) {

    // Gravitational constant
    const G = 2

    // calculating distance between 2 masses
    const r = this.position
      .copy()
      .sub(obj.position)
      .mag()

    // calculating attraction force
    // f = G * m1 * m2 / (r^2)
    const attraction_force = this.position
      .copy()
      .sub(obj.position)
      .normalize()
      .mult(G * this.mass * obj.mass)
      .div(Math.pow(r, 2))
      .constraint(1, 2)

    return attraction_force
  }

  display() {
    noStroke()
    fill(80)
    circle(this.position.x, this.position.y, this.mass * 20)
  }

}