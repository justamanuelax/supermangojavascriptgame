export class Projectiles{
    constructor(positions, ranges, type){
        this.ranges = ranges;
        this.projectile = [];
        this.type = type;
        const animMap ={
            "fish" : "swim",
            "flame" : "burn"
        }
        for(const position of positions){
            this.projectile.push(add([
              sprite(type, {anim : type === animMap[type]}),
              area({shape: new Rect(vec2(0), 12, 12),}),
                anchor("center"),
                pos(position),
                scale(4),
                rotate(type === "fish" ? 90 : 0),
                state("launch", ["launch", "rotate", "fall"]),
                offscreen(),
                "fish"
            ])
            )
        }
    }

    setMovementPattern(){
        for( const [index, projectile] of this.projectile.entries()){
            const launch = projectile.onStateEnter("launch", async() => {
                projectile.flipX = false;
                if(this.type === "flame") projectile.flipY = false;
                await tween(
                    projectile.pos.y,
                    projectile.pos.y - this.ranges[index],
                    10,
                    (posY) => projectile.pos.y = posY,
                    easings.easeOutSine
                )
                projectile.enterState("fall");
                });           
     
                const fall = projectile.onStateEnter("fall", async() => {
                    projectile.flipX = true;
                    if(this.type === "flame") projectile.flipY = true;
                    await tween(
                        projectile.pos.y,
                        projectile.pos.y + this.ranges[index],
                        10,
                        (posY) => projectile.pos.y = posY,
                        easings.easeOutSine
                    )
                    projectile.enterState("launch");



                });

                onSceneLeave(()=> {
                    launch.cancel();
                    fall.cancel();
                })
     
            }
    }

    }