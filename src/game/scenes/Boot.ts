import { Scene } from 'phaser';

export class Boot extends Scene{
    constructor (){
        super('Boot');
    }

    init(){
        console.log("Boot Init");
    }

    preload () {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.image('background', 'assets/bg.png');
        console.log("Boot preload");
    }

    create (){
        console.log("Boot create");

        this.events.on("shutdown", this.shutdown, this);
        this.events.on("destroy", this.destroy, this);
        this.scene.start('Preloader');
    }

    destroy(){
        console.log("destroy() : Boot scene is removed from memory")
    }

    shutdown(){
        console.log("shutdown() : Boot scene is not current scene anymore")
    }

    update(){
        console.log("Boot: update running")
    }
}
