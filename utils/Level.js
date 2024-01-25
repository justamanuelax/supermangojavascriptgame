export class Level{
    
    drawWaves(type, anim){
        let offset = -100;
        for(let i = 0; i < 21; i++){
            add([sprite(type, {anim}), pos(offset, 600), scale(4), fixed()])
            offset += 64;
        }
    }
    
    drawBackground(bgSpriteName){
        add([
            sprite(bgSpriteName),
            fixed(),
            scale(4) 
        ]);
    }

    drawMapLayout(levelLayout, mappings){
        const layourSettings = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings
        }

        this.map = [];

        for(const layerLayout of levelLayout){
            this.map.push(addLevel(layerLayout, layourSettings));
            // add the level to the map array
        }

        for(const layer of this.map){
            layer.use(scale(4)); // use add new components after they are created.
            // tag the map layers so we can reference them later
        }
    }
}