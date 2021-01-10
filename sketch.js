var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,rect20,rect21,rect22,rect23,rect24,rect25,rect26,rect27,rect28,rect30,rect31,rect32,rect33,rect34,rect35,rect36,rect37,rect38,rect39,rect40,rect41,rect42,rect43,rect44,rect45,rect46,rect47,rect48,rect49,rect50,rect51,rect52,rect53,rect54,rect55,rect56,rect57,rect58,rect59,rec60;
var arm;
var armImage;
var apple;
var oak;
var cstone;
var health;
var cstoneImage;
var randomImage;
var oakImage;
var bImage;
var woodImage;
var sheerImage;
var cImage;
var hImage;
var appleImage;
var desertImage;
var ironImage;
var diaImage;
var left;
var up;
var huskyImage;
var boneImage;
var mghostImage;
var gameState=null
var gsImage;
var base;
var diamond;
var chestImage;
function preload(){
armImage= loadImage("usearm.png")
cstoneImage= loadImage("cstone.png")
randomImage= loadImage("random.png")
oakImage= loadImage("oak.jpg")
bImage= loadImage("Screenshot (44).png")
woodImage= loadImage("wood.png")
sheerImage= loadImage("usesheer.png")
cImage= loadImage("cactus.png")
hImage= loadImage("health.png")
appleImage= loadImage("redapple.png")
desertImage= loadImage("usebg.png")
ironImage= loadImage("ironb.jpg")
diaImage= loadImage("dia.jpg")
huskyImage= loadImage("huskyd.png")
mghostImage= loadImage("useblueghost.png")
gsImage= loadImage("gs.png")
chestImage= loadImage("chest.png")
}
function setup() {
  createCanvas( windowWidth, windowHeight);
  
  rect1=createSprite(width/1.1-width/2,height/2-154,50,50)
  rect1.addImage("r",oakImage)
  rect1.scale=.05

 rect2=createSprite(width/.82-width/2,height/2-40,10,10)
rect2.shapeColor="black"

 rect3=createSprite(width/1.1-width/2,height/2-201.9,50,50)
 rect3.addImage("r2",oakImage)
 rect3.scale=.05

rect4=createSprite(width/1.1-width/2,height/2-231.25,50,50)
rect4.addImage("r4",appleImage)
rect4.scale=.1

rect5=createSprite(width/1.057-width/2,height/2-231.25,50,50)
rect5.addImage("r5",appleImage)
rect5.scale=.1


rect10=createSprite(width/1.142-width/2,height/2-231.25,50,50)
rect10.addImage("r10",appleImage)
rect10.scale=.1

rect11=createSprite(width/1.12-width/2,height/2-281.25,50,50)
rect11.addImage("r10",appleImage)
rect11.scale=.1

rect12=createSprite(width/1.08-width/2,height/2-281.25,50,50)
rect12.addImage("r10",appleImage)
rect12.scale=.1

rect13=createSprite(width/.65-width/2,height/2-481.25,50,50)
rect13.addImage("r10",appleImage)
rect13.scale=.1

rect6=createSprite(width/.72-width/2,height/2-381.25,50,50)
rect6.addImage("r6",cstoneImage)
rect6.scale=.03

rect7=createSprite(width/.7-width/2,height/2-321.25,50,50)
rect7.addImage("r7",cstoneImage)
rect7.scale=.03

rect14=createSprite(width/.75-width/2,height/2-321.25,50,50)
rect14.addImage("r14",cstoneImage)
rect14.scale=.03


 arm= createSprite(width/.8-width/2,height/2+100)
 arm.addImage("armI",armImage)
 arm.scale=.9
                    
 rect8=createSprite(width/1.83-width/2,height/2-164.25,50,50)
 rect8.addImage("r6",cstoneImage)
 rect8.scale=.01

 rect9=createSprite(width/1.83-width/2,height/2-204,50,50)
 rect9.addImage("r",oakImage)
 rect9.scale=.015

 rect15=createSprite(width/2-width/2,height/2-344,50,50)
 rect15.addImage("r15",woodImage)
 rect15.scale=.125

 rect16=createSprite(width/2.3-width/2,height/2-364,50,50)
 rect16.addImage("r16",woodImage)
 rect16.scale=.125

 
 rect17=createSprite(width/1.3-width/2,height/2-124,50,50)
 rect17.addImage("r17",sheerImage)
 rect17.scale=.13

  
 rect18=createSprite(width/2.4-width/2,height/2-124,50,50)
 rect18.addImage("r18",oakImage)
 rect18.scale=.05

 rect19=createSprite(width/2.4-width/2,height/2-76,50,50)
 rect19.addImage("r19",oakImage)
 rect19.scale=.05

 rect20=createSprite(width/2.4-width/2,height/2-173,50,50)
 rect20.addImage("r20",appleImage)
 rect20.scale=.1

 
 rect21=createSprite(width/.35-width/2,height/2-173,50,50)
 rect21.addImage("r21",cImage)
 rect21.scale=.2

 rect22=createSprite(width/.4-width/2,height/2-303,50,50)
 rect22.addImage("r22",cImage)
 rect22.scale=.2

 rect23=createSprite(width/1.8-width/2,height/2+120,50,50)
 rect23.addImage("r23",hImage)
 rect23.scale=.07

 rect24=createSprite(width/.35-width/2,height/2-100,1500,1000)
rect24.visible=false

rect25=createSprite(width/.41-width/2,height/2-343,50,50)
rect25.addImage("r25",cImage)
rect25.scale=.2

rect26=createSprite(width/.4-width/2,height/2+350,50,50)
rect26.addImage("r26",cImage)
rect26.scale=.2

rect27=createSprite(width/2-width/2,height/2+1031.25,30,30)
rect27.addImage("r27",ironImage)
rect27.scale=.2

rect28=createSprite(width/6-width/2,height/2+1630,30,30)
rect28.addImage("r28",diaImage)
rect28.scale=.08

rect29=createSprite(width/100-width/1,height/2-1000,30,30)
rect29.addImage("r29",huskyImage)
rect29.scale=.16

rect30=createSprite(width/2.5-width/2,height/2+1331.25,30,30)
rect30.addImage("r30",ironImage)
rect30.scale=.2

rect31=createSprite(width/3.5-width/2,height/2,50,50)
 rect31.addImage("r31",woodImage)
 rect31.scale=.125

 rect32=createSprite(width/5-width/2,height/2-150,50,50)
 rect32.addImage("r32",woodImage)
 rect32.scale=.125
//rect30= createSprite(width/1.3-width/2+50,50,50)
rect33=createSprite(width/4-width/2,height/2-150,50,50)
rect33.addImage("r33",mghostImage)
rect33.scale=.125


rect34=createSprite(width/10-width/1,height/2-570,30,10)
rect34.addImage("r34",woodImage)
rect34.scale=.125

rect35=createSprite(width/5-width/1,height/2+500)
rect35.addImage("r35",gsImage)
rect35.scale=.15

rect36=createSprite(width/.35-width/2,height/2+400,50,50)
rect36.addImage("r36",cImage)
rect36.scale=.2


base=createSprite(width/1.5-width/2,height/2-100,100,50)
base.addImage("base1",chestImage)
base.scale=.15
rect37=createSprite(width/.33-width/2,height/2+430,50,50)
rect37.addImage("r37",cImage)
rect37.scale=.2

rect38=createSprite(width/8-width/1,height/2+1430,50,50)
rect38.addImage("r38",diaImage)
rect38.scale=.08

rect39=createSprite(width/2-width/1,height/2+1231.25,30,30)
rect39.addImage("r39",ironImage)
rect39.scale=.2

rect40=createSprite(width/4-width/1,height/2+76,50,50)
rect40.addImage("r40",oakImage)
rect40.scale=.05

rect41=createSprite(width/4-width/1,height/2+46,50,50)
rect41.addImage("r41",oakImage)
rect41.scale=.05

rect42=createSprite(width/1.5-width/2,height/2,100,50)
rect42.shapeColor="red"

rect43=createSprite(width/.35-width/2,height-1500,1500,500)
rect43.shapeColor="blue"

rect44=createSprite(width/.31-width/2,height/2+410,50,50)
rect44.addImage("r44",cImage)
rect44.scale=.2


rect45=createSprite(width/2.5-width/1,height/2+381.25,50,50)
rect45.addImage("r45",cstoneImage)
rect45.scale=.03


rect46=createSprite(width/2.9-width/1,height/2+411.25,50,50)
rect46.addImage("r46",cstoneImage)
rect46.scale=.03

rect47=createButton("To Move left")
rect47.position(width/1.83-width/2,height/2+50)

rect48=createButton("To Move right")
rect48.position(width/1.6-width/2,height/2+50)

rect49=createButton("To Move Upwards")
rect49.position(width/1.725-width/2,height/2+20)

rect50=createButton("To Move Downwards")
rect50.position(width/1.75-width/2,height/2+80)

rect51=createButton("To move The chest Left")
rect51.position(width/.9-width/2,height/2+50)

rect52=createButton("To move The chest Right")
rect52.position(width/.75-width/2,height/2+50)

oak=""
apple=0
cstone=""
health=5000
left=0
up=0
diamond=0
}

function draw() {
  background(bImage);


fill("black")
  text(": "+ oak,width/1.8-width/2,height/2-200)
  text("Apple: "+ apple,width/1.8-width/2,height/2-180)
  text(": "+ cstone,width/1.8-width/2,height/2-160)
  text(": "+ health,width/1.7-width/2,height/2+125)
  text("X- Direction: "+left,width/1.75-width/2,height/2-250)
  text("/Y- Direction: "+up,width/1.52-width/2,height/2-250)

  text("Diamond: "+diamond,width/1-width/2,height/2-250)



 /* rect2.velocityX=0
  rect2.velocityY=0
    
  arm.velocityX=0
  arm.velocityY=0

  rect1.velocityX=0
  rect1.velocityY=0

  rect3.velocityX=0
  rect3.velocityY=0

  rect4.velocityX=0
  rect4.velocityY=0

  rect5.velocityX=0
  rect5.velocityY=0

  
  rect6.velocityX=0
  rect6.velocityY=0

  
  rect7.velocityX=0
  rect7.velocityY=0

  rect10.velocityX=0
  rect10.velocityY=0

  rect11.velocityX=0
  rect11.velocityY=0

  rect12.velocityX=0
  rect12.velocityY=0

  rect13.velocityX=0
  rect13.velocityY=0

  rect14.velocityX=0
  rect14.velocityY=0

  
  rect15.velocityX=0
  rect15.velocityY=0

  rect16.velocityX=0
  rect16.velocityY=0

  rect17.velocityX=0
  rect17.velocityY=0

  rect18.velocityX=0
  rect18.velocityY=0

  rect19.velocityX=0
  rect19.velocityY=0

  rect20.velocityX=0
  rect20.velocityY=0

  rect21.velocityX=0
  rect21.velocityY=0

  rect22.velocityX=0
  rect22.velocityY=0

  rect24.velocityX=0
  rect24.velocityY=0

  rect25.velocityX=0
  rect25.velocityY=0

  rect26.velocityX=0
  rect26.velocityY=0

  rect27.velocityX=0
  rect27.velocityY=0

  
  rect28.velocityX=0
  rect28.velocityY=0

  rect29.velocityX=0
  rect29.velocityY=0

  rect30.velocityX=0
  rect30.velocityY=0

  rect31.velocityX=0
  rect31.velocityY=0

  rect32.velocityX=0
  rect32.velocityY=0*/


  rect33.velocityX=random(-10,10)
  rect33.velocityY= random(-10,10)


 /* rect34.velocityX=0
  rect34.velocityY=0

  

  rect35.velocityX=0
  rect35.velocityY=0

  rect36.velocityX=0
  rect36.velocityY=0

  base.velocityX=0
  base.velocityY=0

  rect37.velocityX=0
  rect37.velocityY=0

  rect38.velocityX=0
  rect38.velocityY=0

  rect39.velocityX=0
  rect39.velocityY=0

  
  rect40.velocityX=0
  rect40.velocityY=0


    
  rect41.velocityX=0
  rect41.velocityY=0

  rect43.velocityX=0
  rect43.velocityY=0

  
  rect44.velocityX=0
  rect44.velocityY=0

  
  rect45.velocityX=0
  rect45.velocityY=0

  
  rect46.velocityX=0
  rect46.velocityY=0*/
  base.velocityX=0
  base.velocityY=0

 

health--
 /* if(keyDown("LEFT_ARROW")){
    rect29.velocityX=-5
    rect29.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    rect29.velocityX=5
    rect29.velocityY=0
  }
  if(keyDown("UP_ARROW")){
    rect29.velocityX=0
    rect29.velocityY=-5
  }
  if(keyDown("DOWN_ARROW")){
    rect29.velocityX=0
    rect29.velocityY=5
  }
*/




  if(keyDown("a")){
   /* arm.velocityX=-5
    arm.velocityY=0*/

    left--
    rect1.velocityX=5
    rect1.velocityY=0

    rect3.velocityX=5
    rect3.velocityY=0

    rect4.velocityX=5
    rect4.velocityY=0

    rect5.velocityX=5
    rect5.velocityY=0

    rect6.velocityX=5
    rect6.velocityY=0

    
    rect7.velocityX=5
    rect7.velocityY=0

        
    rect10.velocityX=5
    rect10.velocityY=0

    rect11.velocityX=5
    rect11.velocityY=0

    rect12.velocityX=5
    rect12.velocityY=0

    rect13.velocityX=5
    rect13.velocityY=0

    rect14.velocityX=5
    rect14.velocityY=0

    
    rect15.velocityX=5
    rect15.velocityY=0

    rect16.velocityX=5
    rect16.velocityY=0

    rect17.velocityX=5
    rect17.velocityY=0

    rect18.velocityX=5
    rect18.velocityY=0

    rect19.velocityX=5
    rect19.velocityY=0

    rect20.velocityX=5
    rect20.velocityY=0

    
    rect21.velocityX=5
    rect21.velocityY=0

    
    rect22.velocityX=5
    rect22.velocityY=0

    rect24.velocityX=5
    rect24.velocityY=0

    rect25.velocityX=5
    rect25.velocityY=0

    rect26.velocityX=5
    rect26.velocityY=0

    
    rect27.velocityX=5
    rect27.velocityY=0

    rect28.velocityX=5
    rect28.velocityY=0

    rect29.velocityX=5
    rect29.velocityY=0

    rect30.velocityX=5
    rect30.velocityY=0

    
    rect31.velocityX=5
    rect31.velocityY=0

    
    rect32.velocityX=5
    rect32.velocityY=0

    
    rect33.velocityX=5
    rect33.velocityY=0

    rect34.velocityX=5
    rect34.velocityY=0

    
    rect35.velocityX=5
    rect35.velocityY=0

    
    rect36.velocityX=5
    rect36.velocityY=0

    base.velocityY=0
    base.velocityX=5

    rect37.velocityX=5
    rect37.velocityY=0

    rect38.velocityX=5
    rect38.velocityY=0

    rect39.velocityX=5
    rect39.velocityY=0

    rect40.velocityX=5
    rect40.velocityY=0

    rect41.velocityX=5
    rect41.velocityY=0

    rect43.velocityX=5
    rect43.velocityY=0

    rect44.velocityX=5
    rect44.velocityY=0

    rect45.velocityX=5
    rect45.velocityY=0

    rect46.velocityX=5
    rect46.velocityY=0


  }
   rect47.mousePressed(()=>{

    left--
    rect1.velocityX=5
    rect1.velocityY=0

    rect3.velocityX=5
    rect3.velocityY=0

    rect4.velocityX=5
    rect4.velocityY=0

    rect5.velocityX=5
    rect5.velocityY=0

    rect6.velocityX=5
    rect6.velocityY=0

    
    rect7.velocityX=5
    rect7.velocityY=0

        
    rect10.velocityX=5
    rect10.velocityY=0

    rect11.velocityX=5
    rect11.velocityY=0

    rect12.velocityX=5
    rect12.velocityY=0

    rect13.velocityX=5
    rect13.velocityY=0

    rect14.velocityX=5
    rect14.velocityY=0

    
    rect15.velocityX=5
    rect15.velocityY=0

    rect16.velocityX=5
    rect16.velocityY=0

    rect17.velocityX=5
    rect17.velocityY=0

    rect18.velocityX=5
    rect18.velocityY=0

    rect19.velocityX=5
    rect19.velocityY=0

    rect20.velocityX=5
    rect20.velocityY=0

    
    rect21.velocityX=5
    rect21.velocityY=0

    
    rect22.velocityX=5
    rect22.velocityY=0

    rect24.velocityX=5
    rect24.velocityY=0

    rect25.velocityX=5
    rect25.velocityY=0

    rect26.velocityX=5
    rect26.velocityY=0

    
    rect27.velocityX=5
    rect27.velocityY=0

    rect28.velocityX=5
    rect28.velocityY=0

    rect29.velocityX=5
    rect29.velocityY=0

    rect30.velocityX=5
    rect30.velocityY=0

    
    rect31.velocityX=5
    rect31.velocityY=0

    
    rect32.velocityX=5
    rect32.velocityY=0

    
    rect33.velocityX=5
    rect33.velocityY=0

    rect34.velocityX=5
    rect34.velocityY=0

    
    rect35.velocityX=5
    rect35.velocityY=0

    
    rect36.velocityX=5
    rect36.velocityY=0

    base.velocityY=0
    base.velocityX=5

    rect37.velocityX=5
    rect37.velocityY=0

    rect38.velocityX=5
    rect38.velocityY=0

    rect39.velocityX=5
    rect39.velocityY=0

    rect40.velocityX=5
    rect40.velocityY=0

    rect41.velocityX=5
    rect41.velocityY=0

    rect43.velocityX=5
    rect43.velocityY=0

    rect44.velocityX=5
    rect44.velocityY=0

    rect45.velocityX=5
    rect45.velocityY=0

    rect46.velocityX=5
    rect46.velocityY=0

  })
  
  if(keyDown("d")){
   /* arm.velocityX=5
    arm.velocityY=0*/

    left++
    rect1.velocityX=-5
    rect1.velocityY=0

    rect3.velocityX=-5
    rect3.velocityY=0

    rect4.velocityX=-5
    rect4.velocityY=0

    rect5.velocityX=-5
    rect5.velocityY=0

    rect6.velocityX=-5
    rect6.velocityY=0

    rect7.velocityX=-5
    rect7.velocityY=0

    rect10.velocityX=-5
    rect10.velocityY=0

    rect11.velocityX=-5
    rect11.velocityY=0

    rect12.velocityX=-5
    rect12.velocityY=0

    rect13.velocityX=-5
    rect13.velocityY=0

    
    rect14.velocityX=-5
    rect14.velocityY=0

        
    rect15.velocityX=-5
    rect15.velocityY=0

    rect16.velocityX=-5
    rect16.velocityY=0

    rect17.velocityX=-5
    rect17.velocityY=0

    rect18.velocityX=-5
    rect18.velocityY=0

    rect19.velocityX=-5
    rect19.velocityY=0

    rect20.velocityX=-5
    rect20.velocityY=0

    rect21.velocityX=-5
    rect21.velocityY=0

    rect22.velocityX=-5
    rect22.velocityY=0

    rect24.velocityX=-5
    rect24.velocityY=0

    rect25.velocityX=-5
    rect25.velocityY=0

    
    rect26.velocityX=-5
    rect26.velocityY=0

        
    rect27.velocityX=-5
    rect27.velocityY=0

            
    rect28.velocityX=-5
    rect28.velocityY=0

                
    rect29.velocityX=-5
    rect29.velocityY=0

                  
    rect30.velocityX=-5
    rect30.velocityY=0

                      
    rect31.velocityX=-5
    rect31.velocityY=0

                      
    rect32.velocityX=-5
    rect32.velocityY=0

                      
    rect33.velocityX=-5
    rect33.velocityY=0

                          
    rect34.velocityX=-5
    rect34.velocityY=0

                            
    rect35.velocityX=-5
    rect35.velocityY=0

                              
    rect36.velocityX=-5
    rect36.velocityY=0

    base.velocityY=0
    base.velocityX=-5

    rect37.velocityX=-5
    rect37.velocityY=0

    rect38.velocityX=-5
    rect38.velocityY=0

    
    rect39.velocityX=-5
    rect39.velocityY=0

        
    rect40.velocityX=-5
    rect40.velocityY=0

    rect41.velocityX=-5
    rect41.velocityY=0

    
    rect43.velocityX=-5
    rect43.velocityY=0

    rect44.velocityX=-5
    rect44.velocityY=0

    rect45.velocityX=-5
    rect45.velocityY=0

    rect46.velocityX=-5
    rect46.velocityY=0
 

  }
  rect48.mousePressed(()=>{

    left++
    rect1.velocityX=-5
    rect1.velocityY=0

    rect3.velocityX=-5
    rect3.velocityY=0

    rect4.velocityX=-5
    rect4.velocityY=0

    rect5.velocityX=-5
    rect5.velocityY=0

    rect6.velocityX=-5
    rect6.velocityY=0

    rect7.velocityX=-5
    rect7.velocityY=0

    rect10.velocityX=-5
    rect10.velocityY=0

    rect11.velocityX=-5
    rect11.velocityY=0

    rect12.velocityX=-5
    rect12.velocityY=0

    rect13.velocityX=-5
    rect13.velocityY=0

    
    rect14.velocityX=-5
    rect14.velocityY=0

        
    rect15.velocityX=-5
    rect15.velocityY=0

    rect16.velocityX=-5
    rect16.velocityY=0

    rect17.velocityX=-5
    rect17.velocityY=0

    rect18.velocityX=-5
    rect18.velocityY=0

    rect19.velocityX=-5
    rect19.velocityY=0

    rect20.velocityX=-5
    rect20.velocityY=0

    rect21.velocityX=-5
    rect21.velocityY=0

    rect22.velocityX=-5
    rect22.velocityY=0

    rect24.velocityX=-5
    rect24.velocityY=0

    rect25.velocityX=-5
    rect25.velocityY=0

    
    rect26.velocityX=-5
    rect26.velocityY=0

        
    rect27.velocityX=-5
    rect27.velocityY=0

            
    rect28.velocityX=-5
    rect28.velocityY=0

                
    rect29.velocityX=-5
    rect29.velocityY=0

                  
    rect30.velocityX=-5
    rect30.velocityY=0

                      
    rect31.velocityX=-5
    rect31.velocityY=0

                      
    rect32.velocityX=-5
    rect32.velocityY=0

                      
    rect33.velocityX=-5
    rect33.velocityY=0

                          
    rect34.velocityX=-5
    rect34.velocityY=0

                            
    rect35.velocityX=-5
    rect35.velocityY=0

                              
    rect36.velocityX=-5
    rect36.velocityY=0

    base.velocityY=0
    base.velocityX=-5

    rect37.velocityX=-5
    rect37.velocityY=0

    rect38.velocityX=-5
    rect38.velocityY=0

    
    rect39.velocityX=-5
    rect39.velocityY=0

        
    rect40.velocityX=-5
    rect40.velocityY=0

    rect41.velocityX=-5
    rect41.velocityY=0

    
    rect43.velocityX=-5
    rect43.velocityY=0

    rect44.velocityX=-5
    rect44.velocityY=0

    rect45.velocityX=-5
    rect45.velocityY=0

    rect46.velocityX=-5
    rect46.velocityY=0
  })


  

  if(keyDown("w")){
    up++
    rect1.velocityY=5
  rect1.velocityX=0

  rect3.velocityY=5
  rect3.velocityX=0

  rect4.velocityY=5
  rect4.velocityX=0

  rect5.velocityY=5
  rect5.velocityX=0

  rect6.velocityY=5
  rect6.velocityX=0

  
  rect7.velocityY=5
  rect7.velocityX=0

  rect10.velocityY=5
  rect10.velocityX=0

  
  rect11.velocityY=5
  rect11.velocityX=0

  
  rect12.velocityY=5
  rect12.velocityX=0

  
  rect13.velocityY=5
  rect13.velocityX=0

    
  rect14.velocityY=5
  rect14.velocityX=0

      
  rect15.velocityY=5
  rect15.velocityX=0

  rect16.velocityY=5
  rect16.velocityX=0

  rect17.velocityY=5
  rect17.velocityX=0

  rect18.velocityY=5
  rect18.velocityX=0

  rect19.velocityY=5
  rect19.velocityX=0

  rect20.velocityY=5
  rect20.velocityX=0

  rect21.velocityY=5
  rect21.velocityX=0

  rect22.velocityY=5
  rect22.velocityX=0

  rect24.velocityY=5
  rect24.velocityX=0

  rect25.velocityY=5
  rect25.velocityX=0

  
  rect26.velocityY=5
  rect26.velocityX=0

  rect27.velocityY=5
  rect27.velocityX=0


  rect28.velocityY=5
  rect28.velocityX=0

  

  rect29.velocityY=5
  rect29.velocityX=0

  rect30.velocityY=5
  rect30.velocityX=0

  rect31.velocityY=5
  rect31.velocityX=0

  rect32.velocityY=5
  rect32.velocityX=0

  
  rect33.velocityY=5
  rect33.velocityX=0

  rect34.velocityY=5
  rect34.velocityX=0

  
  rect35.velocityY=5
  rect35.velocityX=0

    
  rect36.velocityY=5
  rect36.velocityX=0


  base.velocityY=5
  base.velocityX=0

  rect37.velocityY=5
  rect37.velocityX=0

  
  rect38.velocityY=5
  rect38.velocityX=0

  rect39.velocityY=5
  rect39.velocityX=0

  rect40.velocityY=5
  rect40.velocityX=0

  rect41.velocityY=5
  rect41.velocityX=0

  
  rect43.velocityY=5
  rect43.velocityX=0

  rect44.velocityY=5
  rect44.velocityX=0

  rect45.velocityY=5
  rect45.velocityX=0

  rect46.velocityY=5
  rect46.velocityX=0



  }
  rect49.mousePressed(()=>{
    up++
    rect1.velocityY=5
  rect1.velocityX=0

  rect3.velocityY=5
  rect3.velocityX=0

  rect4.velocityY=5
  rect4.velocityX=0

  rect5.velocityY=5
  rect5.velocityX=0

  rect6.velocityY=5
  rect6.velocityX=0

  
  rect7.velocityY=5
  rect7.velocityX=0

  rect10.velocityY=5
  rect10.velocityX=0

  
  rect11.velocityY=5
  rect11.velocityX=0

  
  rect12.velocityY=5
  rect12.velocityX=0

  
  rect13.velocityY=5
  rect13.velocityX=0

    
  rect14.velocityY=5
  rect14.velocityX=0

      
  rect15.velocityY=5
  rect15.velocityX=0

  rect16.velocityY=5
  rect16.velocityX=0

  rect17.velocityY=5
  rect17.velocityX=0

  rect18.velocityY=5
  rect18.velocityX=0

  rect19.velocityY=5
  rect19.velocityX=0

  rect20.velocityY=5
  rect20.velocityX=0

  rect21.velocityY=5
  rect21.velocityX=0

  rect22.velocityY=5
  rect22.velocityX=0

  rect24.velocityY=5
  rect24.velocityX=0

  rect25.velocityY=5
  rect25.velocityX=0

  
  rect26.velocityY=5
  rect26.velocityX=0

  rect27.velocityY=5
  rect27.velocityX=0


  rect28.velocityY=5
  rect28.velocityX=0

  

  rect29.velocityY=5
  rect29.velocityX=0

  rect30.velocityY=5
  rect30.velocityX=0

  rect31.velocityY=5
  rect31.velocityX=0

  rect32.velocityY=5
  rect32.velocityX=0

  
  rect33.velocityY=5
  rect33.velocityX=0

  rect34.velocityY=5
  rect34.velocityX=0

  
  rect35.velocityY=5
  rect35.velocityX=0

    
  rect36.velocityY=5
  rect36.velocityX=0


  base.velocityY=5
  base.velocityX=0

  rect37.velocityY=5
  rect37.velocityX=0

  
  rect38.velocityY=5
  rect38.velocityX=0

  rect39.velocityY=5
  rect39.velocityX=0

  rect40.velocityY=5
  rect40.velocityX=0

  rect41.velocityY=5
  rect41.velocityX=0

  
  rect43.velocityY=5
  rect43.velocityX=0

  rect44.velocityY=5
  rect44.velocityX=0

  rect45.velocityY=5
  rect45.velocityX=0

  rect46.velocityY=5
  rect46.velocityX=0
  })
  
  if(keyDown("s")){
    up--
   rect1.velocityY=-5
   rect1.velocityX=0

   rect3.velocityY=-5
  rect3.velocityX=0

  rect4.velocityY=-5
  rect4.velocityX=0

  rect5.velocityY=-5
  rect5.velocityX=0

  
  rect6.velocityY=-5
  rect6.velocityX=0

  rect7.velocityY=-5
  rect7.velocityX=0

  
  rect10.velocityY=-5
  rect10.velocityX=0

  rect11.velocityY=-5
  rect11.velocityX=0

  rect12.velocityY=-5
  rect12.velocityX=0

  rect13.velocityY=-5
  rect13.velocityX=0

  
  rect14.velocityY=-5
  rect14.velocityX=0

    
  rect15.velocityY=-5
  rect15.velocityX=0

  rect16.velocityY=-5
  rect16.velocityX=0

  rect17.velocityY=-5
  rect17.velocityX=0

  rect18.velocityY=-5
  rect18.velocityX=0

  rect19.velocityY=-5
  rect19.velocityX=0

  rect20.velocityY=-5
  rect20.velocityX=0

  rect21.velocityY=-5
  rect21.velocityX=0

  rect22.velocityY=-5
  rect22.velocityX=0

  rect24.velocityY=-5
  rect24.velocityX=0

  rect25.velocityY=-5
  rect25.velocityX=0

  rect26.velocityY=-5
  rect26.velocityX=0


  rect27.velocityY=-5
  rect27.velocityX=0

  rect28.velocityY=-5
  rect28.velocityX=0

  rect29.velocityY=-5
  rect29.velocityX=0

  rect30.velocityY=-5
  rect30.velocityX=0

  rect31.velocityY=-5
  rect31.velocityX=0

  rect32.velocityY=-5
  rect32.velocityX=0
  
  rect33.velocityY=-5
  rect33.velocityX=0

  rect34.velocityY=-5
  rect34.velocityX=0

  rect35.velocityY=-5
  rect35.velocityX=0

  
  rect36.velocityY=-5
  rect36.velocityX=0

  base.velocityY=-5
  base.velocityX=0

  rect37.velocityY=-5
  rect37.velocityX=0

  rect38.velocityY=-5
  rect38.velocityX=0

  
  rect39.velocityY=-5
  rect39.velocityX=0

    
  rect40.velocityY=-5
  rect40.velocityX=0
  
      
  rect41.velocityY=-5
  rect41.velocityX=0

  rect43.velocityY=-5
  rect43.velocityX=0

  
  rect44.velocityY=-5
  rect44.velocityX=0

  rect45.velocityY=-5
  rect45.velocityX=0

  
  rect46.velocityY=-5
  rect46.velocityX=0

 
  }
  rect50.mousePressed(()=>{
    up--
    rect1.velocityY=-5
    rect1.velocityX=0
 
    rect3.velocityY=-5
   rect3.velocityX=0
 
   rect4.velocityY=-5
   rect4.velocityX=0
 
   rect5.velocityY=-5
   rect5.velocityX=0
 
   
   rect6.velocityY=-5
   rect6.velocityX=0
 
   rect7.velocityY=-5
   rect7.velocityX=0
 
   
   rect10.velocityY=-5
   rect10.velocityX=0
 
   rect11.velocityY=-5
   rect11.velocityX=0
 
   rect12.velocityY=-5
   rect12.velocityX=0
 
   rect13.velocityY=-5
   rect13.velocityX=0
 
   
   rect14.velocityY=-5
   rect14.velocityX=0
 
     
   rect15.velocityY=-5
   rect15.velocityX=0
 
   rect16.velocityY=-5
   rect16.velocityX=0
 
   rect17.velocityY=-5
   rect17.velocityX=0
 
   rect18.velocityY=-5
   rect18.velocityX=0
 
   rect19.velocityY=-5
   rect19.velocityX=0
 
   rect20.velocityY=-5
   rect20.velocityX=0
 
   rect21.velocityY=-5
   rect21.velocityX=0
 
   rect22.velocityY=-5
   rect22.velocityX=0
 
   rect24.velocityY=-5
   rect24.velocityX=0
 
   rect25.velocityY=-5
   rect25.velocityX=0
 
   rect26.velocityY=-5
   rect26.velocityX=0
 
 
   rect27.velocityY=-5
   rect27.velocityX=0
 
   rect28.velocityY=-5
   rect28.velocityX=0
 
   rect29.velocityY=-5
   rect29.velocityX=0
 
   rect30.velocityY=-5
   rect30.velocityX=0
 
   rect31.velocityY=-5
   rect31.velocityX=0
 
   rect32.velocityY=-5
   rect32.velocityX=0
   
   rect33.velocityY=-5
   rect33.velocityX=0
 
   rect34.velocityY=-5
   rect34.velocityX=0
 
   rect35.velocityY=-5
   rect35.velocityX=0
 
   
   rect36.velocityY=-5
   rect36.velocityX=0
 
   base.velocityY=-5
   base.velocityX=0
 
   rect37.velocityY=-5
   rect37.velocityX=0
 
   rect38.velocityY=-5
   rect38.velocityX=0
 
   
   rect39.velocityY=-5
   rect39.velocityX=0
 
     
   rect40.velocityY=-5
   rect40.velocityX=0
   
       
   rect41.velocityY=-5
   rect41.velocityX=0
 
   rect43.velocityY=-5
   rect43.velocityX=0
 
   
   rect44.velocityY=-5
   rect44.velocityX=0
 
   rect45.velocityY=-5
   rect45.velocityX=0
 
   
   rect46.velocityY=-5
   rect46.velocityX=0
  })

  if(touches.length>0){
    rect2.velocityX=0
    rect2.velocityY=0
      
    arm.velocityX=0
    arm.velocityY=0
  
    rect1.velocityX=0
    rect1.velocityY=0
  
    rect3.velocityX=0
    rect3.velocityY=0
  
    rect4.velocityX=0
    rect4.velocityY=0
  
    rect5.velocityX=0
    rect5.velocityY=0
  
    
    rect6.velocityX=0
    rect6.velocityY=0
  
    
    rect7.velocityX=0
    rect7.velocityY=0
  
    rect10.velocityX=0
    rect10.velocityY=0
  
    rect11.velocityX=0
    rect11.velocityY=0
  
    rect12.velocityX=0
    rect12.velocityY=0
  
    rect13.velocityX=0
    rect13.velocityY=0
  
    rect14.velocityX=0
    rect14.velocityY=0
  
    
    rect15.velocityX=0
    rect15.velocityY=0
  
    rect16.velocityX=0
    rect16.velocityY=0
  
    rect17.velocityX=0
    rect17.velocityY=0
  
    rect18.velocityX=0
    rect18.velocityY=0
  
    rect19.velocityX=0
    rect19.velocityY=0
  
    rect20.velocityX=0
    rect20.velocityY=0
  
    rect21.velocityX=0
    rect21.velocityY=0
  
    rect22.velocityX=0
    rect22.velocityY=0
  
    rect24.velocityX=0
    rect24.velocityY=0
  
    rect25.velocityX=0
    rect25.velocityY=0
  
    rect26.velocityX=0
    rect26.velocityY=0
  
    rect27.velocityX=0
    rect27.velocityY=0
  
    
    rect28.velocityX=0
    rect28.velocityY=0
  
    rect29.velocityX=0
    rect29.velocityY=0
  
    rect30.velocityX=0
    rect30.velocityY=0
  
    rect31.velocityX=0
    rect31.velocityY=0
  
    rect32.velocityX=0
    rect32.velocityY=0
  
  
    rect33.velocityX=random(-10,10)
    rect33.velocityY= random(-10,10)
  
  
    rect34.velocityX=0
    rect34.velocityY=0
  
    
  
    rect35.velocityX=0
    rect35.velocityY=0
  
    rect36.velocityX=0
    rect36.velocityY=0
  
    base.velocityX=0
    base.velocityY=0
  
    rect37.velocityX=0
    rect37.velocityY=0
  
    rect38.velocityX=0
    rect38.velocityY=0
  
    rect39.velocityX=0
    rect39.velocityY=0
  
    
    rect40.velocityX=0
    rect40.velocityY=0
  
  
      
    rect41.velocityX=0
    rect41.velocityY=0
  
    rect43.velocityX=0
    rect43.velocityY=0
  
    
    rect44.velocityX=0
    rect44.velocityY=0
  
    
    rect45.velocityX=0
    rect45.velocityY=0
  
    
    rect46.velocityX=0
    rect46.velocityY=0
touches=[]
  }
  if(keyDown("LEFT_ARROW")){
base.velocityX=-7
base.velocityY=0

  }
  rect51.mousePressed(()=>{
base.velocityX=-7
base.velocityY=0
  })

  if(keyDown("RIGHT_ARROW")){
    base.velocityX=7
    base.velocityY=0
    
      }
      rect52.mousePressed(()=>{
        base.velocityX=7
        base.velocityY=0
          })
      if(keyDown("UP_ARROW")){
        base.velocityX=0
        base.velocityY=-7
        
          }
          if(keyDown("DOWN_ARROW")){
            base.velocityX=0
            base.velocityY=7
            
              }
  if(mousePressedOver(rect1)){
 // rect1.x=mouseX
  //rect1.y=mouseY
  
  rect1.x=base.x
  rect1.y=base.y

  }

  if(mousePressedOver(rect3)){
   // rect3.x=mouseX
    //rect3.y=mouseY

rect3.x=base.x
rect3.y=base.y
  
  }
  if(mousePressedOver(base)){
    base.x=mouseX
    base.y=mouseY
  }
  if(mousePressedOver(rect4)){

    apple=apple+1
    health=health+50

    rect4.destroy();
  }
 
  if(mousePressedOver(rect5)){
    rect5.destroy();

    apple=apple+1
    health=health+50
  }

  if(mousePressedOver(rect6)){
   // rect6.x=mouseX
    //rect6.y=mouseY
    rect6.x=base.x
    rect6.y=base.y
  }
  
  if(mousePressedOver(rect7)){
   // rect7.x=mouseX
    //rect7.y=mouseY
    rect7.x=base.x
    rect7.y=base.y
 
  }
  if(mousePressedOver(rect10)){
    rect10.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect11)){
    rect11.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect12)){
    rect12.destroy();

    apple=apple+1
    health=health+50
  }

  if(mousePressedOver(rect13)){
    rect13.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect14)){
   // rect14.x=mouseX
    //rect14.y=mouseY
    rect14.x=base.x
    rect14.y=base.y
  
  }
  if(mousePressedOver(rect15)){
    //rect15.x=mouseX
    //rect15.y=mouseY

    rect15.x=base.x
    rect15.y=base.y
  }
  if(mousePressedOver(rect16)){
   // rect16.x=mouseX
    //rect16.y=mouseY
    rect16.x=base.x
    rect16.y=base.y
  
  }
  if(mousePressedOver(rect17)){
    //rect17.x=mouseX
    //rect17.y=mouseY

    rect17.x=base.x
    rect17.y=base.y
  }
  if(mousePressedOver(rect18)){
  //  rect18.x=mouseX
   // rect18.y=mouseY
   rect18.x=base.x
   rect18.y=base.y
  
  }
  if(mousePressedOver(rect19)){
   // rect19.x=mouseX
    //rect19.y=mouseY
    rect19.x=base.x
    rect19.y=base.y
  
  }
  if(mousePressedOver(rect20)){
    rect20.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect21)){
   // rect21.x=mouseX
//    rect21.y=mouseY
rect21.x=base.x
rect21.y=base.y
  
  }
  if(mousePressedOver(rect22)){
    rect22.x=base.x
    rect22.y=base.y

  
  }

  if(mousePressedOver(rect25)){
    rect25.x=base.x
    rect25.y=base.y

  
  }
  if(mousePressedOver(rect26)){
    rect26.x=base.x
    rect26.y=base.y

  
  }
  if(mousePressedOver(rect27)){
    rect27.x=base.x
    rect27.y=base.y


  
  }
  if(mousePressedOver(rect28)){
    rect28.x=base.x
    rect28.y=base.y

  }
  if(mousePressedOver(rect29)){
    rect29.x=base.x
    rect29.y=base.y


  }
  if(mousePressedOver(rect30)){
    rect30.x=base.x
    rect30.y=base.y


  }
  if(mousePressedOver(rect31)){
    rect31.x=base.x
    rect31.y=base.y


  }
  if(mousePressedOver(rect32)){
    rect32.x=base.x
    rect32.y=base.y


  }
  if(mousePressedOver(rect34)){
    rect34.x=base.x
    rect34.y=base.y


  }
  if(mousePressedOver(rect35)){
    rect35.x=base.x
    rect35.y=base.y


  }

  if(mousePressedOver(rect36)){
    rect36.x=base.x
    rect36.y=base.y


  }
  if(mousePressedOver(rect37)){
    rect37.x=base.x
    rect37.y=base.y


  }

  if(mousePressedOver(rect38)){
    rect38.x=base.x
    rect38.y=base.y


  }
 

  if(mousePressedOver(rect39)){
    rect39.x=base.x
    rect39.y=base.y


  }

  if(mousePressedOver(rect40)){
    rect40.x=base.x
    rect40.y=base.y


  }

  if(mousePressedOver(rect41)){
    rect41.x=base.x
    rect41.y=base.y


  }
 
  if(mousePressedOver(rect44)){
    rect44.x=base.x
    rect44.y=base.y


  }
  if(mousePressedOver(rect45)){
    rect45.x=base.x
    rect45.y=base.y


  }
  if(mousePressedOver(rect46)){
    rect46.x=base.x
    rect46.y=base.y


  }
 
  if(rect38.isTouching(rect42)){
    diamond=diamond+2
    rect38.destroy();
  }
  if(rect28.isTouching(rect42)){
    diamond=diamond+2
    rect28.destroy();
  }
  if(diamond>2){
    text("Husky is located in the normal biome",width/.8-width/2,height/2-270)
  }
  if(diamond>3){
    text("German Shepard puppy is located in normal biome",width/.82-width/2,height/2-250)
  }
 
  // mob
  if(arm.isTouching(rect33)){
health=health-20
  }
  

  /*if(rect30.isTouching(rect29)){
    rect29.velocityX=0
    rect29.velocityY=0
  }*/
 
  if(rect17.isTouching(rect1)){
    rect1.scale=.025
  }
  if(rect17.isTouching(rect3)){
    rect3.scale=.025
  }
  if(rect17.isTouching(rect15)){
    rect15.scale=.065
  }
  if(rect17.isTouching(rect16)){
    rect16.scale=.065
  }
  if(rect17.isTouching(rect6)){
    rect6.scale=.017
  }
  if(rect17.isTouching(rect7)){
    rect7.scale=.017
  }
  if(rect17.isTouching(rect14)){
    rect14.scale=.017
  }
  if(rect17.isTouching(rect18)){
    rect18.scale=.025
  }
  if(rect17.isTouching(rect19)){
    rect19.scale=.025
  }
  if(rect17.isTouching(rect21)){
    rect21.scale=.15
  }
  if(rect17.isTouching(rect22)){
    rect22.scale=.15
  }
  if(rect17.isTouching(rect25)){
    rect25.scale=.15
  }
  if(rect17.isTouching(rect26)){
    rect26.scale=.15
  }

  if(rect17.isTouching(rect27)){
    rect27.scale=.1
  }
  if(rect17.isTouching(rect28)){
    rect28.scale=.04
  }
  if(rect17.isTouching(rect30)){
    rect30.scale=.1
  }
  if(rect17.isTouching(rect31)){
    rect31.scale=.065
  }
  if(rect17.isTouching(rect32)){
    rect32.scale=.065
  }
  if(rect17.isTouching(rect34)){
    rect34.scale=.065
  }
  if(rect17.isTouching(rect37)){
    rect37.scale=.15
  }
  if(rect17.isTouching(rect38)){
    rect38.scale=.04
  }

  if(rect17.isTouching(rect39)){
    rect39.scale=.1
  }

  if(rect17.isTouching(rect40)){
    rect40.scale=.025
  }
  if(rect17.isTouching(rect41)){
    rect41.scale=.025
  }

  if(rect17.isTouching(rect44)){
    rect44.scale=.15
  }
  if(rect17.isTouching(rect45)){
    rect45.scale=.017
  }
  if(rect17.isTouching(rect46)){
    rect46.scale=.017
  }
  if(rect2.isTouching(rect24)){
    background(desertImage)
    fill("black")
    textSize(40)
    text("Desert Biome",width/1.5-width/2,height/2-250)
textSize(15)
text(": "+ health,width/1.7-width/2,height/2+125)
    text("X- Direction: "+left,width/1.75-width/2,height/2-200)
    text("/Y- Direction: "+up,width/1.52-width/2,height/2-200)
  
  }
if(health<0){
background("black")
}
 if(gameState==="black"){
  background("black")
 }
 drawSprites();
    
}
