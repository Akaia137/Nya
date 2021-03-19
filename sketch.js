//let nb;
//let nb2;
//let nb3;
let nbarray = [];
// 初始內容
function setup() {
  createCanvas(600, 600, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<10;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/10)*i,0,20));
  }
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
}
function draw() {
  background(100);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
}
// 自訂一個類別物件

class myBox{
  // 怎樣建構這個物件 只執行一次
    
    
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
  }
  // 定義一些能力 我們呼叫時 執行 
  
  display(){
    let step = frameCount % 20;
    let angle = map(step, 0, 20, 0, TWO_PI);
    let cos_a = cos(angle);
    let sin_a = sin(angle);
  // 能力1:顯現這box
    push();
     fill(80,255 ,255);
    stroke(250);
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
        this.mx = this.mx-0.1;
        noFill();
        stroke(60,255 ,255);
        this.size=this.size+1;
        
        }
      box(this.size);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
}