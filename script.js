import kaboom from "./libs/kaboom.mjs";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { Level } from "./utils/Level.js";
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js";
import { Player } from "./entites/Player.js";
import { Camera } from "./utils/Camera.js";
import { level1Config } from "./content/level1/config.js";
import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js";
import { level2Config } from "./content/level2/config.js";
import { level3Layout, level3Mappings } from "./content/level3/level3Layout.js";
import { level3Config } from "./content/level3/config.js";
import { Spiders } from "./entites/Spiders.js";
import { Projectiles } from "./entites/Projectiles.js";
import { Axes } from "./entites/Axes.js";
import { Saws } from "./entites/Saws.js";
import { Birds } from "./entites/Birds.js";

// Coyote Run Special Extra


kaboom({
   width: 1280,
   height: 720,
   letterbox: true
});

load.assets();
load.fonts();
load.sounds();


const scenes = {
    menu: () => {
     uiManager.displayMainMenu();
    },
    controls: () => {
    uiManager.displayControlsMenu();
    },
    1: () => {
        const waterambience = play("water-ambience", {volume: 0.15, loop: true});
        onSceneLeave(() => {
            waterambience.paused = true;
        });
        setGravity(1400);

    const level1 = new Level()
    level1.drawBackground("forest-background")
    level1.drawMapLayout(level1Layout, level1Mappings);
    const player = new Player(level1Config.playerStartPosX, level1Config.playerStartPosY, level1Config.playerSpeed,level1Config.JumpForce, level1Config.nbLives ,level1Config.level,false);
        player.update();
        player.enablePassThrough();
        player.enableCoinPickUp();
        player.enableMobVulnerability();

        if(player.currentLevelScene === 2)go("2");




        const camera = new Camera();
        camera.attach(player.gameObj, 0, 200);

        const spiders = new Spiders(level1Config.spiderPosition.map(spiderPos => spiderPos()), level1Config.spiderRanges, level1Config.spiderDuration, level1Config.spiderType);
        spiders.setMovementPattern();
        spiders.enablePassThrough();
       
        const fish = new Projectiles(level1Config.fishPositions.map(fishPos => fishPos()), level1Config.fishRanges, level1Config.fishType); 
        fish.setMovementPattern();
        level1.drawWaves("water", "wave");
        // Add dark background behind by putting it first in the uiManager
        uiManager.addDarkBackground();

    uiManager.displayCoinCount();
    player.updateCoinCount(uiManager.coinCountUI);
    uiManager.displayLivesCount();
    player.updateLives(uiManager.livesCountUI);

    },
    2: () => {
        const lavaambience = play("lava-ambience", {volume: 0.8, loop: true});
        onSceneLeave(() => {
            lavaambience.paused = true;
        });
    
        setGravity(1400);

    const level2 = new Level()
    level2.drawBackground("castle-background")
    level2.drawMapLayout(level2Layout, level2Mappings);
    const player2 = new Player(level2Config.playerStartPosX, level2Config.playerStartPosY, level2Config.playerSpeed,level2Config.JumpForce, level2Config.nbLives ,level2Config.level,false);
        player2.update();
        player2.enablePassThrough();
        player2.enableCoinPickUp();
        player2.enableMobVulnerability();
        if(player2.currentLevelScene === 3)go("3");

        const spiders2 = new Spiders(level2Config.spiderPositions.map(spidercoord => spidercoord()), level2Config.spiderRanges, level2Config.spiderDuration, level2Config.spiderType);
        spiders2.setMovementPattern();
        spiders2.enablePassThrough();
        

        const flames = new Projectiles(level2Config.flamePositions.map(flamePos => flamePos()), level2Config.flameRanges, level2Config.flameType);
        flames.setMovementPattern();
        
        const axes = new Axes(level2Config.axesPositions.map(axePos => axePos()), level2Config.axesSwingTimes);
        axes.setMovementPattern();
        const saws = new Saws(level2Config.sawPositions.map(sawPos => sawPos()), level2Config.sawRanges);
        saws.setMovementPattern();
        const camera = new Camera();
        camera.attach(player2.gameObj, 0, 200);
        
    level2.drawWaves("lava", "wave");
        // Add dark background behind by putting it first in the uiManager
        uiManager.addDarkBackground();

    uiManager.displayCoinCount();
    player2.updateCoinCount(uiManager.coinCountUI);
    uiManager.displayLivesCount();
    player2.updateLives(uiManager.livesCountUI);

    },  
    3: () => {
        const windambience = play("strong-wind", {volume: 0.15, loop: true});
        onSceneLeave(() => {
            windambience.paused = true;
        });
        setGravity(1400);

        const level3 = new Level()
        level3.drawBackground("sky-background-0");
        level3.drawBackground("sky-background-1");
        level3.drawBackground("sky-background-2");
        level3.drawMapLayout(level3Layout, level3Mappings);
        const player3 = new Player(level3Config.playerStartPosX, level3Config.playerStartPosY, level3Config.playerSpeed,level3Config.JumpForce, level3Config.nbLives ,level3Config.level,true);
            player3.update();
            player3.enablePassThrough();
            player3.enableCoinPickUp();
            player3.enableMobVulnerability();
        
            const birds = new Birds(level3Config.birdPositions.map(birdPos => birdPos()), level3Config.birdRanges);
            birds.setMovementPattern();
            
            
            if(player3.currentLevelScene === 3)go("3");
            const camera = new Camera();
            camera.attach(player3.gameObj, 0, 200);
        
        level3.drawWaves("cloud", "wave");
            // Add dark background behind by putting it first in the uiManager
            uiManager.addDarkBackground();
    
        uiManager.displayCoinCount();
        player3.updateCoinCount(uiManager.coinCountUI);
        uiManager.displayLivesCount();
        player3.updateLives(uiManager.livesCountUI);
    },
    gameover: () => {
    uiManager.displayGameOverScreen();
    },
    end: () =>{
       uiManager.displayEndGameScreen(); 
    }
    
};

for(const key in scenes){
    scene(key, scenes[key]);
}

go("menu");
