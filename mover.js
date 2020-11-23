class Mover {

  constructor(x, y) {
    this.position = new Vector2D(x, y)
    this.velocity = new Vector2D(0, 0)
    this.acceleration = new Vector2D(0, 0)

    this.mass = 1
  }

  set_mass(mass) {
    this.mass = mass
  }

  apply_force(force) {
    force = force.copy()
    // acceleration = force / mass
    this.acceleration.add(force.div(this.mass))
  }

  update() {

    // calculating velocity
    this.velocity.add(this.acceleration)

    // calculating position
    this.position.add(this.acceleration)
  }

  display() {
    noStroke()
    fill(160)
    circle(this.position.x, this.position.y, this.mass * 20)
  }

}