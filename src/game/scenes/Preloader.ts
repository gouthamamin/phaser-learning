import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor (){
        super('Preloader');
    }

    preload (){
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');
        this.load.image('sky-background','sky-bg.png');
    }

    create ()
    {
        //  Move to the MainMenu.
        console.log("Inside preloader")
        this.scene.start('MainMenu');
    }
}
