function showMenu() {
  push();
  imageMode(CENTER)
    image(play, width / 2, height / 2, width / 6,width /6.1);
  pop();
  }
  
  // check if mouse is clicked and if the mouse pointer is inside the playbutton.
  function checkIfButtonClicked() {
  
    if (mouseIsPressed) {
    click = collidePointCircle(mouseX,mouseY,width/2, height/2,  width / 6);
  
    // if the mouse pointer is inside the play button then switch the state to game.
    if(click === true){
      state = "level";
      clickSound.play();
    }
  }

  }
  function checkIfMenuIsClicked(){
    if (mouseIsPressed) {
    menuClicked = collidePointCircle(mouseX,mouseY,width / 1.059,  width / 24, width / 15)
  
    }
    else{
      menuClicked = false;
    }
    if (menuClicked){
      
      pause = true;
    }

   
  }
  