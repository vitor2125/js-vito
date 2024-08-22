function setup() {
    createCanvas(400, 400);
    background(125);
  }
  
  function draw() {
    
    stroke(" blue ");
    fill(" red ");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }             
  }
  