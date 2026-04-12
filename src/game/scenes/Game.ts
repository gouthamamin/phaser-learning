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
  }
}
