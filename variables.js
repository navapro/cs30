const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
let ground;
let box1,box2,box3;
let bird;
let world, engine;
let mConstraint;
let slingshot;
let birdImg, boxImg, bkgImg, minnionPigImg;
let slingShotImgLeft, slingShotImgRight;
let slingShotBandFront, slingShotBandBack;
let minnionPig;
let slingShotRemoval = false;
let birdX, birdY;
let collitionForce;
let state = "menu";
let play;
let coin;
let coinCounter = 0;
let goBack;
let killPoint;