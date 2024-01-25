export class Camera {
    attachObj = null;

    attach(gameObj, offsetX = 0, fixedY){
        this.attachObj = gameObj;

        onUpdate(() => {
            camPos(this.attachObj.pos.x + offsetX, fixedY);
        })
    }
}