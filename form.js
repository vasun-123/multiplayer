class Form{
    constructor(){

    }
    display(){
     var title = createElement("h2");
     title.html("Car Racing Game");
     title.position(460,90);

     var input = createInput("Name");
     input.position(450,170);
     var button = createButton("PLAY");
     button.position(450,200);
     var greeting = createElement("h3");
    


     button.mousePressed(function(){
    input.hide();
    button.hide();

    var name = input.value();
    greeting.html("HELLO" + name )
    greeting.position(450,170);
     }
     );

    }
}