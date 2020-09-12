var dog,dogHappy,database,foodS,foodStock;
var feed, addFood;
var fedTime, lastFed;
var foodObj;
function preload()
{
  dog=("dogImg.png");
  dogHappy=("dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);

  dog.createSprite(350,650,75,75);

  /*if(keyWentdown(UP_ARROW)){
    foodStock.value=foodStock.value-1;
  }

  if(keyWentdown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy); 
  } */

  foodObj = new Food(200,200);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood());
}

function draw(){
  display();

  
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
})
  
  
  drawSprites();
}

function readStock(data) {  
  foodS=data.val();
}

function writeStock(x){

  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function AddFood(){
  position++
  database.ref('/').update({
    Food:position
  })
}

function FeedDog(){

  dog.addImage(dogHappy);
  foodobject.updateFoodStock(foodobject.getFoodStock()-1);
   database.ref('/').update({
     Food:foodobject.getFoodStock(),
     FeedTime:hour ()
   })
  }