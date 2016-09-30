function down(e){//把down发布为一个事件；让别人能够约定的标识符；
    //识别符："selfDragStart" ;
    this.x=this.offsetLeft;
    this.y=this.offsetTop;
    this.mouseX= e.pageX;
    this.mouseY= e.pageY;
    console.log("offsetLeft;offsetTop+e.pageX+e.pageY"+this.x+"==>"+this.y+"==>"+this.mouseX+"==>"+this.mouseY);
    if(this.setCapture){
        this.setCapture();
        on(this,"mousemove",move);
        on(this,"mouseup",up);
    }else{
        this._move=bindThis(this,move);
        this._up=bindThis(this,up);
        on(document,"mousemove",this._move);
        on(document,"mouseup",this._up);
    }
    e.preventDefault();//阻止默认行为，解决盒子因为加了图片，站住鼠标的BUG；
    fire.call(this,"selfDragStart",e);//这个是接口；
}
function move(e){
    this.style.left=this.x+ (e.pageX-this.mouseX)+"px";
    this.style.top=this.y+ (e.pageY-this.mouseY)+"px";
    fire.call(this,"selfDragMove",e);//这个是接口；
}
function up(e){
    if(this.releaseCapture){
        this.releaseCapture();
        off(this,"mousemove",move);
        off(this,"mouseup",up);
    }else{
        off(document,"mousemove",this._move);
        off(document,"mouseup",this._up);
    }
    fire.call(this,"selfDragEnd",e);//这个是接口；
}