const width = 800;
const height = 600;


let attractor
let movers = []


function setup() {
	const canvas = createCanvas(width, height);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2)
	background(240);

  attractor = new Attractor(width / 2, height / 2)
  attractor.set_mass(4)

  for(let i = 0; i < 6; i ++) {
    movers.push(new Mover(Math.floor(Math.random() * width), Math.floor(Math.random() * height)))
    movers[i].set_mass(Math.random() * 2 + 1)
  }
}


function draw() {
  background(240)
  for(let i = 0; i < movers.length; i ++) {
    attraction_force = attractor.calculate_attraction_force(movers[i])

    // applying attraction force
    movers[i].apply_force(attraction_force)
    movers[i].update()

    movers[i].display()
  }
  attractor.display()
}


function mouseDragged() {
  if(mouseX < 0 || mouseY < 0 || mouseX > width - 1 || mouseY > height - 1) return
  attractor.position.set_x(mouseX)
  attractor.position.set_y(mouseY)
}
