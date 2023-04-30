export default class Player {
  rightPressed = false;
  leftPressed = false;
  shootPressed = false;
  downPressed = false;
  upPressed = false;
  

  constructor(canvas, velocity, bulletController) {
    this.canvas = canvas;
    this.velocity = velocity;
    this.bulletController = bulletController;

  // Generate random values for x and y within the canvas bounds
    this.x = Math.floor(Math.random() * (this.canvas.width - 50)) + 25;
    this.y = Math.floor(Math.random() * (this.canvas.height));

    // Ensure the player does not start too close to the edges of the canvas
    if (this.x < 25) {
      this.x = 25;
    } else if (this.x > this.canvas.width - 25) {
      this.x = this.canvas.width - 25;
    }
    if (this.y < (this.canvas.height * 0.6)) {
      this.y = (this.canvas.height * 0.6);
    } else if (this.y > (this.canvas.height)-50) {
      this.y = (this.canvas.height)-50;
    }
    this.y = (this.canvas.height)-50;
    this.x_player = this.x;
    this.y_player = (this.canvas.height)-50;
    
    this.width = 50;
    this.height = 48;

    this.image = new Image();
    this.image.src = "images/player.png";

    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }

  draw(ctx) {
    if (this.shootPressed) {
      this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }
    this.move();
    this.collideWithWalls();
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collideWithWalls() {
    //left
    if (this.x < 0) {
      this.x = 0;
    }

    //right
    if (this.x > this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
    }

    if (this.y < 0) {
      this.x = 0;
    }
  }

  move() {
    if (this.rightPressed) {
      this.x += this.velocity;
    } else if (this.leftPressed) {
      this.x -= this.velocity;
    } else if (this.upPressed && this.y > game1.height * 0.6) {
      this.y -= this.velocity;
    } else if (this.downPressed ) {
      this.y += this.velocity;
    }
  }
  
  keydown = (event) => {
    if(document.getElementById("RightKey").value=="Right"){
      if (event.code == "ArrowRight") {
        this.rightPressed = true;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("RightKey").value) {
      this.rightPressed = true;
    }
    if (document.getElementById("LeftKey").value=="Left"){
      if (event.code == "ArrowLeft") {
      this.leftPressed = true;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("LeftKey").value) {
      this.leftPressed = true;
    }
    if(document.getElementById("UpKey").value=="Up"){
      if (event.code == "ArrowUp") {
      this.upPressed = true;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("UpKey").value) {
      this.upPressed = true;
    }

    if(document.getElementById("DownKey").value=="Down"){
      if (event.code == "ArrowDown") {
        this.downPressed = true;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("DownKey").value) {
      this.downPressed = true;
    }
    if(document.getElementById("ShootKey").value=="Shoot"){
      if (event.code == "Space") {
        this.shootPressed = true;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("ShootKey").value) {
      this.shootPressed = true;
    }
    // else if (event.code == "Space") {
    //   this.shootPressed = true;
    // }
  };

  keyup = (event) => {
    if(document.getElementById("RightKey").value=="Right"){
      if (event.code == "ArrowRight") {
        this.rightPressed = false;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("RightKey").value) {
      this.rightPressed = false;
    }
    if (document.getElementById("LeftKey").value=="Left"){
      if (event.code == "ArrowLeft") {
      this.leftPressed = false;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("LeftKey").value) {
      this.leftPressed = false;
    }
    if(document.getElementById("UpKey").value=="Up"){
      if (event.code == "ArrowUp") {
      this.upPressed = false;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("UpKey").value) {
      this.upPressed = false;
    }
    if(document.getElementById("DownKey").value=="Down"){
      if (event.code == "ArrowDown") {
        this.downPressed = false;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("DownKey").value) {
      this.downPressed = false;
    }
    if(document.getElementById("ShootKey").value=="Shoot"){
      if (event.code == "Space") {
        this.shootPressed = false;
      }
    }
    else if (String.fromCharCode(event.keyCode) == document.getElementById("ShootKey").value) {
      this.shootPressed = false;
    }

  };

  
}
