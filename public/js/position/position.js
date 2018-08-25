function Position(){
    this.loadHeader();
}
$.extend(Position.prototype, {  
   loadHeader(){
       $(".position-nav li:first").removeClass("active").siblings().addClass("active");
   }
});
new Position();