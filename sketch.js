function setup() {
    createCanvas(800, 800);
     background("white");
  }
  
  function draw() {
   
  
    stroke("black");
    fill("yellow");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  