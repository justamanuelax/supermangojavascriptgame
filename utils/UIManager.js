class UIManager {
    displayLivesCount(player){
        this.livesCountUI = add([
            text("",{ fount : "Round" , size : 50}),
            fixed(),
            pos(70, 40)
            // pos( x, y) coordinates in the position
        ])
        this.livesCountUI.add([sprite("star-icon"), pos(-60, -5), scale(3), fixed()]);
    }


    displayCoinCount(player){
        this.coinCountUI = add([
            text("",{ font : "Round", size : 50}),
            {
                fullCoinCount : get("coin",{recursive : true}).length
            },
            fixed(),
            pos(70,90)
            // pos( x, y) coordinates in the position
        ]);

        this.coinCountUI.add([sprite("coin") , pos(-60, 0) , scale(3)]);
    }
    displayBlinkingUIMessage(content, position){
         const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position.x, position.y),
            opacity(),
            state("flash-up",["flash-up", "flash-down"]),
        ]);

        message.onStateEnter("flash-up", async() => {
            await tween(
                message.opacity,
                0,0.8, (opacity) => message.opacity = opacity, easings.linear
            );
            message.enterState("flash-down");

        });
        message.onStateEnter("flash-down", async() => {
            await tween(
                message.opacity,
                1,0.8, (opacity) => message.opacity = opacity, easings.linear
            );
            message.enterState("flash-up");

        });
    }
    displayMainMenu(){
        add([
            sprite("forest-background"),
        scale(4)]);
        add([
            sprite("logo"),
        area(),
    anchor("center"),
    pos(center().x, center().y - 100),
scale(5) ]);
        this.displayBlinkingUIMessage("Press Space to Start Game", vec2(center().x, center().y + 100));
         // The position is the center of the screen and the center().x and center().y 
         // vec2 is a vector with two components, x and y from kaboom.js
    
        
         onKeyPress("space", () => {
            play("confirm-ui", {speed: 1.5});

        go("controls");
     });
        }   
        displayControlsMenu(){
            add([
                sprite("forest-background"),
            scale(4)]);
            add([text("Controls", {font: "Round", size: 50}),
            area(),
        anchor("center"),
    pos(center().x, center().y - 200),]);
    const controlPrompts = add([
        pos(center().x + 30, center().y),
    ])
    controlPrompts.add([
        // add the method to the controlPrompt object.
        sprite("up"), pos(0, -80)

    ]);
    controlPrompts.add([
        // add the method to the controlPrompt object.
        sprite("down")

    ]);
    controlPrompts.add([
        // add the method to the controlPrompt object.
        sprite("left"), pos(-80, 0)

    ]);
    controlPrompts.add([
        // add the method to the controlPrompt object.
        sprite("right"), pos(80, 0)

    ]);

    controlPrompts.add([ sprite("space"), pos(-200, 0)]);
    
    
    controlPrompts.add([ text("JUMP"), pos(-190, 100)]);
    
    controlPrompts.add([ text("MOVE"), pos( 0, 100)]);
    
    this.displayBlinkingUIMessage("Press [ Enter ] To Start The Game !", vec2(center().x, center().y + 300));
    // The position is the center of the screen and the center().x and center().y 
    // vec2 is a vector with two components, x and y from kaboom.js
    
    onKeyPress("enter", () => {
                play("confirm-ui", {speed: 1.5});

                go("1");
         });
        }
addDarkBackground(){
    add([
        rect(270, 155),
        color(0,0,0),
        fixed()
    ]);
}

displayGameOverScreen(){
    add([rect(1280, 720), color(0,0,0)]);
    add([text("Game Over", {font: "Round", size: 50}), area(), anchor("center"), pos(center())]);
    this.displayBlinkingUIMessage("Press [ Enter ] To Start The Game !", vec2(center().x, center().y + 100));
    onKeyPress("enter", () => {
        play("confirm-ui");
        
        go("1");
    });
}

displayEndGameScreen(){ 
    add([rect(1280, 720), color(0,0,0)]);
    add([text("Congratulations Champion You Won !!!", {font: "Round", size: 50}), area(), anchor("center"), pos(center())]);
        play("woohoo", {speed: 0.8, },);
      
    
 
this.displayBlinkingUIMessage("!", vec2(center().x, center().y + 500));
onKeyPress("enter", () => {
    play("confirm-ui");
    
    go("1");
});
}
}
export const uiManager = new UIManager();