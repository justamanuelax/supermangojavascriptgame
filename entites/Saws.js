// Define a class named Saws
export class Saws {
    // Constructor function that takes positions and ranges as parameters
    constructor(positions, ranges) {
        // Assign the positions and ranges to the instance variables
        this.positions = positions;
        this.ranges = ranges;
        // Create an empty array to store the saws
        this.saws = [];
        // Iterate over each position in the positions array
        for (const positiony of this.positions) {
            // Create a new saw object and add it to the saws array
            this.saws.push(
                add([
                    sprite("saws"),
                    area(),
                    anchor("center"),
                    pos(positiony),
                    scale(4),
                    rotate(),
                    state("rotate-left", ["rotate-left", "rotate-right"]),
                    offscreen(),
                    "saws"
                ])
            );
        }
    }
    async moveAndRotate(saw, moveBy){
        if(!saw.isOffScreen()){
            play("saws", {volume: 0.5, seek: 10});
        }
        await Promise.all([
            tween( // moving
                saw.pos.x,
                saw.pos.x + moveBy,
                1,
                (posX) => (saw.pos.x = posX),
                easings.linear
            ),
            tween( // rotating
                saw.angle,
                360,
                2,
                (currAngle) => (saw.angle = currAngle),
                easings.linear
            )
        ]);
        
    }

    // Define a method named setMovementPattern
    setMovementPattern() {
        // Iterate over each [index, saw] pair in the saws array
        for (const [index, saw] of this.saws.entries()) {
            // Define a function that will be called when the saw enters the "rotate-left" state
            const rotateLeft = saw.onStateEnter("rotate-left", async () => {
                // If the saw is not offscreen, play the "saw" sound with a volume of 0.9
                await this.moveAndRotate(saw, -this.ranges[index]);

                // Reset the angle of the saw to 0
                saw.angle = 0;
                // Change the state of the saw to "rotate-right"
                saw.enterState("rotate-right");
            });

            const rotateRight = saw.onStateEnter("rotate-right", async () => { 
                await this.moveAndRotate(saw, this.ranges[index]);
                saw.angle = 0;
                saw.enterState("rotate-left");

            });

            onSceneLeave(() =>{
                
                rotateLeft.cancel();
                rotateRight.cancel();
            })
        }
    }
}