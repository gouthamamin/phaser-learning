import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    const { width, height } = this.scale;

    // background image
    this.add
      .image(0, 0, "sky-background")
      .setOrigin(0, 0)
      .setDisplaySize(width, height);

    // Game title
    this.add
      .text(width / 2, 250, "Test Game app", {
        fontSize: 48,
        color: "#fff",
        stroke: "#000",
        strokeThickness: 4,
      })
      .setOrigin(0.5, 0.5);

    // player sprite
    this.add
        .sprite(width / 1.5, height / 1.5, "player")
        .setDisplaySize(250, 250);
        // .setScale(4,4)


  }

  
}
