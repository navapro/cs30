
// the following matter.js fuctions can be used without "matter.js" prefix.
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

// define all varialbles.
let ground;
let box1, box2, box3;
let bird;
let world, engine;
let mConstraint;
let slingshot;
let birdImg, boxImg, bkgImg, minnionPigImg, metalImg, metalHorizontalImg, woodHorizontalImg;
let slingShotImgLeft, slingShotImgRight;
let slingShotBandFront, slingShotBandBack;
let slingShotRemoval = false;
let birdX, birdY;
let collitionForce;
let state = "menu";
let play;
let coin, goBack;
let coinCounter = 0;
let menuClicked;
let levelBackground, levelList;
let levels = [];
let levelClicked;
let levelWait = 0;
let stateLevel;
let metal1, metal2, metal3;
let level1 = level2 = level3 = false;
let glassImg, glassHorizontalImg;
let glass1, glass2, glass3;
let galss3Wait;
let gameEnd = false;
let minnionPig, minnionPig2, minnionPig3;
let woodWidth;
let minnionPig1Die, minnionPig2Die, minnionPig3Die;
let gameEndImg, redo, goToLevels, next, closeImg;
let counter;
let currentLevel = 0;
let pause = false;
let backgroundMusic;