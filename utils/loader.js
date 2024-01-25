export const load = {
    fonts: () => {
        loadFont("Round", "./assets/SuperMangojs/Round9x13.ttf");
    },
    assets: () => {
        loadSprite("castle-background", "./assets/SuperMangojs/Castle_Background_0.png");
        loadSprite("sky-background-0", "./assets/SuperMangojs/Sky_Background_0.png");
        loadSprite("sky-background-1", "./assets/SuperMangojs/Sky_Background_1.png");
        loadSprite("sky-background-2", "./assets/SuperMangojs/Sky_Background_2.png");
        // castle background
        loadSprite("up", "./assets/SuperMangojs/Arrow_Up_Key_Dark.png");
        loadSprite("down", "./assets/SuperMangojs/Arrow_Down_Key_Dark.png");
        loadSprite("left", "./assets/SuperMangojs/Arrow_Left_Key_Dark.png");
        loadSprite("right", "./assets/SuperMangojs/Arrow_Right_Key_Dark.png");
        loadSprite("space", "./assets/SuperMangojs/Space_Key_Dark.png");
        loadSprite("forest-background", "./assets/SuperMangojs/Forest_Background_0.png");
        loadSprite("logo", "./assets/SuperMangojs/Logo.png");
        loadSprite("coin", "./assets/SuperMangojs/Coin.png");
        loadSprite("bridge", "./assets/SuperMangojs/Bridge.png");
        loadSprite("coin-icon", "./assets/SuperMangojs/Coins_UI.png");
        loadSprite("star-icon", "./assets/SuperMangojs/Stars_UI.png");
        loadSprite("water", "./assets/SuperMangojs/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave:{
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true
                },
                "wave-reversed":{ 
                    from: 7,
                    to: 0,
                    speed: 16,
                    loop: true
                }
            }
        });
        loadSprite("lava", "./assets/SuperMangojs/Lava.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave:{
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true
                },
                "wave-reversed":{ 
                    from: 7,
                    to: 0,
                    speed: 16,
                    loop: true
                }
            }
        });
        loadSprite("cloud", "./assets/SuperMangojs/Clouds.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave:{
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true
                },
                "wave-reversed":{ 
                    from: 7,
                    to: 0,
                    speed: 16,
                    loop: true
                }
            }
        });
        loadSprite("grass-tileset", "./assets/SuperMangojs/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims:{
                tl : 0,
                tm : 1,
                tr : 2,
                ml : 3,
                mm : 4,
                mr : 5,
                bl : 6,
                bm : 7,
                br : 8
            }
        })
        loadSprite("grass-tileset", "./assets/SuperMangojs/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims:{
                tm : 1,
                tr : 2,
                ml : 3,
                mm : 4,
                mr : 5,
                bl : 6,
                bm : 7,
                br : 8
            }
        })
        loadSprite("brick-tileset", "./assets/SuperMangojs/Brick_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims:{
                tl : 0,
                tm : 1,
                tr : 2,
                ml : 3,
                mm : 4,
                mr : 5,
                bl : 6,
                bm : 7,
                br : 8
            }
        })
        loadSprite("brick-oneway-tileset", "./assets/SuperMangojs/Brick_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims:{
                tm : 1,
                tr : 2,
                ml : 3,
                mm : 4,
                mr : 5,
                bl : 6,
                bm : 7,
                br : 8
            }
        })
        loadSprite("rock-tileset", "./assets/SuperMangojs/Grass_Rock_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims:{
                tl : 0,
                tm : 1,
                tr : 2,
                ml : 3,
                mm : 4,
                mr : 5,
                bl : 6,
                bm : 7,
                br : 8
            }
        })
        loadSprite("rock-oneway-tileset", "./assets/SuperMangojs/Grass_Rock_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims:{
                tm : 1,
                tr : 2,
                ml : 3,
                mm : 4,
                mr : 5,
                bl : 6,
                bm : 7,
                br : 8
            }
        })
    loadSprite("player", "./assets/SuperMangojs/Player.png", {
        sliceX: 4,
        sliceY: 6,
        anims: {
            idle: {
                from: 0,
                to: 3,
                loop: true,
            },
            run: {
                from: 4,
                to: 7,
                loop: true,
            },
            "jump-up": 8,
            "jump-down": 9
            // climb : { from: 10, to: 11, loop: true },

        }
    });
    loadSprite("spider-1", "./assets/SuperMangojs/Spider_1.png", {
        sliceX: 3,
        sliceY: 1,
        anims: {
          crawl: { from: 0, to: 2, loop: true },
          idle: 0,
        },
      })
      loadSprite("spider-2", "./assets/SuperMangojs/Spider_2.png", {
        sliceX: 3,
        sliceY: 1,
        anims: {
          crawl: { from: 0, to: 2, loop: true },
          idle: 0,
        },
      })

      loadSprite("fish", "./assets/SuperMangojs/Fish_1.png", {
        sliceX: 2,
        sliceY: 1,
        anims: {
          swim: { from: 0, to: 1, loop: true }
        }
    })
      
    loadSprite("flame", "./assets/SuperMangojs/Flame_1.png", {
        sliceX: 2,
        sliceY: 1,
        anims: {
          burn: { from: 0, to: 1, loop: true }
        }
    })
    loadSprite("axe", "./assets/SuperMangojs/Axe_Trap.png");
    loadSprite("saws", "./assets/SuperMangojs/Circular_Saw.png");
    loadSprite("bird", "./assets/SuperMangojs/Bird_1.png",{
        sliceX: 3,
        sliceY: 1,
        anims:{
            fly: {from: 0, to: 2,speed: 1, loop: true}
        }
    });
    },
    sounds: () => {
        loadSound("confirm-ui", "./sounds/soundswav/confirm-ui.wav");   
        loadSound("jump", "./sounds/soundswav/jump.wav");
        loadSound("hit", "./sounds/soundswav/hit.wav");  
        loadSound("coin", "./sounds/soundswav/coin.wav");
        loadSound("spider-attack", "./sounds/soundswav/spider-attack.mp3");
        loadSound("swinging-axe", "./sounds/soundswav/swinging-axe.mp3");
        loadSound("saws", "./sounds/soundswav/saw.wav");
        loadSound("dive", "./sounds/soundswav/dive.wav");
        loadSound("woohoo", "./sounds/soundswav/cartoon-woohoo.mp3");
        loadSound("water-ambience", "./sounds/soundswav/water-ambience.mp3");
        loadSound("lava-ambience", "./sounds/soundswav/lava.wav");
        loadSound("strong-wind", "./sounds/soundswav/strong-wind.wav");
    }
}