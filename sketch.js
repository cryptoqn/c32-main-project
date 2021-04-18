    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var engine, world;
    var backgroundImg;

    var bg=0 ;
    var time;

    function preload() {
        // create getBackgroundImg( ) here
    getBackgroundImg();
    }

    function setup(){
        var canvas = createCanvas(1200,700);
        engine = Engine.create();
        world = engine.world;

    }

    function draw(){
if(backgroundImg){
        // add condition to check if any background image is there to add
    background(backgroundImg);
bg=1;}
  
        Engine.update(engine);

        //textSize(20);
       
      
        // write code to display time in correct format here

if(bg===1){
        text ("Time:"+time,100,200);}
    }

    async function getBackgroundImg(){

        // write code to fetch time from API
    var response= await fetch("https:worldtimeapi.org/api/timezone/Asia/Kolkata")
        //change the data in JSON format
    var responseJSON=await response.json();

        // write code slice the datetime
    var datetime=responseJSON.datetime;
    var hour= datetime.slice(11,13);
    console.log(hour);
    time=hour;

        // add conditions to change the background images from sunrise to sunset
    if(hour>=4&&hour<5){
        backgroundImg=loadImage("sunrise1.png");
       

       

    }
    else if(hour>=05&&hour<=06){
       
        backgroundImg=loadImage("sunrise2.png");
     
        }
        else if(hour>=06&&hour<=08){
            backgroundImg=loadImage("sunrise3.png");
        // text ("Time:",+time ,200,200);
            
            }

            else if(hour>=08&&hour<=10){
                backgroundImg=loadImage("sunrise4.png");
                
                }

                else if(hour>>=10&&hour<=12){
                    backgroundImg=loadImage("sunrise5.png");
                    
                    }
                    else  if(hour>=12&&hour<=16){
                        backgroundImg=loadImage("sunrise6.png");
                        
                        }


                        else if(hour<=16&&hour<=17){
                            backgroundImg=loadImage("sunset7.png");
                            
                            }
                            else if(hour<=17&&hour<=18){
                                backgroundImg=loadImage("sunset8.png");
                                
                                }
        
                                else  if(hour<=18&&hour<=23){
                                    backgroundImg=loadImage("sunset9.png");
                                
                                }

                                else  if(hour<=23&&hour==0){
                                    backgroundImg=loadImage("sunset10.png");
                                    
                           }  else if(hour<=0&&hour<=03){
                            backgroundImg=loadImage("sunset11.png");
        
                                        }
                                        else{
                                            backgroundImg=loadImage("sunset12.png");
                                            
                                        }
                    
            






    //load the image in backgroundImg variable here

}
