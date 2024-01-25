export class Player{

    // Coyote Run Special Normal mode

    isRespawning = false;
    heightDelta = 0;
    isMoving = false;
    coyoteLapse = 0.7;
    coins = 0;
    hasJumpedOnce = false;    
    currentLevelScene = 1;
    constructor(posX, posY, speed, jumpForce, nbLives, currentLevelScene, isInTerminal){
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.jumpForce = jumpForce;
        this.nbLives = nbLives;
        this.currentLevelScene = currentLevelScene;
        this.isInTerminal = isInTerminal;
        this.initialX = posX;
        this.initialY = posY;
        this.makePlayer();
        this.setPlayerControls();
        this.speed = speed;
        this.jumpForce = jumpForce;
        this.lives = nbLives;
        this.previousHeight = this.gameObj.pos.y;
    }

    enablePassThrough(){
        this.gameObj.onBeforePhysicsResolve((collision) => {
            if(collision.target.is("passthrough") && this.gameObj.isJumping()){
                collision.preventResolution();
            }
        
            if(collision.target.is("passthrough") && isKeyDown("down")){
                collision.preventResolution();
            }
        });
            
    }

    makePlayer(){
        this.gameObj = add([
            sprite("player", {anim: "idle"}),
            area({shape: new Rect(vec2(0,3), 8, 8)}),
            anchor("center"),
            pos(this.initialX, this.initialY),
            scale(4),
            body()
            
            

        ]);

    }

    enableCoinPickUp(){
        this.gameObj.onCollide("coin",(coin) => {
            this.coins++;
            destroy(coin);
            play("coin", {speed: 1});
        });
 
    }

    setPlayerControls(){
        onKeyDown("left", () => {
            if(this.gameObj.curAnim() !== "run" && !this.isRespawning) this.gameObj.play("run");
            this.gameObj.flipX = true;
            if(!this.isRespawning)this.gameObj.move(-this.speed, 0);
            // vertically the player is not moving and is set to 0 and horizontall moves at the set speed.
            this.isMoving = true;
        });
        // Coyote Run Special Normal mode 
        onKeyDown("right", () => {
            if(this.gameObj.curAnim() !== "run" && !this.isRespawning) this.gameObj.play("run");
            this.gameObj.flipX = false;
            if(!this.isRespawning)this.gameObj.move(this.speed, 0);
            // vertically the player is not moving and is set to 0 and horizontall moves at the set speed.
            this.isMoving = true;
        });
        onKeyPress("space", () => {
        if(this.gameObj.isGrounded() && !this.isRespawning && !this.hasJumpedOnce){
            this.hasJumpedOnce = true;
            if(!this.isRespawning)this.gameObj.jump(this.jumpForce);
            play("jump");
        }   
    if(!this.gameObj.isGrounded() && time() - this.timeSinceLastGrounded < this.coyoteLapse ){
        
        if(!this.isRespawning)this.gameObj.jump(this.jumpForce);
            play("jump");
    } });
    
    
    

        onKeyRelease(() =>{
            if(isKeyReleased("left") || isKeyReleased("right")){
                this.gameObj.play("idle");
                this.isMoving = false;
            }
        })

    }
    respawnPlayer(){
        if(this.lives > 0){
            this.gameObj.pos = vec2(this.initialX, this.initialY);
            this.isRespawning = true;
            this.lives--;
            setTimeout(() => {
                this.isRespawning = false;
            }, 500);
            return
        }
        go("gameover");
    }
    update(){
    onUpdate(() => {
        if(this.gameObj.isGrounded()){
            this.hasJumpedOnce = false;
        
            this.timeSinceLastGrounded = time();
        }

        this.heightDelta = this.previousHeight - this.gameObj.pos.y;
        this.previousHeight = this.gameObj.pos.y;
        
        if(!this.isMoving && this.gameObj.curAnim() !== "idle"){
            this.gameObj.play("idle");
        }

        if(this.gameObj.pos.y > 1000){
            play("hit", {speed: 1});
            this.respawnPlayer();
        }
        
        if(!this.gameObj.isGrounded() && this.heightDelta > 0 &&  this.gameObj.curAnim() !== "jump-up"){
            this.gameObj.play("jump-up");
        }
        
        if(!this.gameObj.isGrounded() && this.heightDelta < 0 &&  this.gameObj.curAnim() !== "jump-down"){
            this.gameObj.play("jump-down");
        }
    })   
}

updateLives(livesCountUI){
    onUpdate(() => {
        livesCountUI.text = `${this.lives}`;
    });
}
updateCoinCount(coinCountUI){
    onUpdate(() => {
        coinCountUI.text = `${this.coins} / ${coinCountUI.fullCoinCount} `;
        if(this.coins === coinCountUI.fullCoinCount){
            go(`${++this.currentLevelScene}`);
            if(this.isInTerminal){
                go("end");
            }
        }
    });
}
enableMobVulnerability(){
    function hitandRespawn(context){
        play("hit", {speed: 1});
        context.respawnPlayer();
    }
    this.gameObj.onCollide("spiders", () => hitandRespawn(this));
    this.gameObj.onCollide("fish", () => hitandRespawn(this));
    this.gameObj.onCollide("flame", () => hitandRespawn(this));
    this.gameObj.onCollide("axes", () => hitandRespawn(this));
    this.gameObj.onCollide("saws", () => hitandRespawn(this));
    this.gameObj.onCollide("birds", () => hitandRespawn(this));
}
}