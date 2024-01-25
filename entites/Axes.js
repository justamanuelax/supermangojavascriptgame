export class Axes{
    constructor(positions, swingDurations){
        this.positions = positions;
        this.swingDurations = swingDurations;
        this.axes = [];

        for(const position of positions){
            this.axes.push(add([
                sprite("axe"),
                pos(position),
                area({shape: new Rect(vec2(0, 40), 30, 10),}),
                anchor(vec2(0, -0.75)),
                state("swing-left", ["swing-left", "swing-right"]),
                rotate(),
                offscreen(),
                scale(4),
                "axes"
            ]))
        }
    }

    async swing(axe, TargetAngle, swingDuration){
        if(!axe.isOffScreen()){
            play("swinging-axe", {volume: 0.7});
        }
            await tween(
                axe.angle,
                TargetAngle,
                swingDuration,
                (val) => axe.angle = val,
                easings.easeInOutSine
            )
        
    }

 
    setMovementPattern(){
        for(const [index, axe] of this.axes.entries()){
            const swingLeft = axe.onStateEnter("swing-left", async() => {
                await this.swing(axe, 90, this.swingDurations[index]);
                axe.enterState("swing-right");
            })
    
            const swingRight = axe.onStateEnter("swing-right", async() => {
                await this.swing(axe, -90, this.swingDurations[index]);
                axe.enterState("swing-left");
            })
    
            onSceneLeave(() => {
                swingLeft.cancel();
                swingRight.cancel();
            })
        }
    }
}
