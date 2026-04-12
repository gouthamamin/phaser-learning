import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  create() {
    const levelData = {
      level: 1,
      name: "Beginner",
    };
    this.scene.start("Game", levelData);
  }
}
