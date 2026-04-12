import { GameObjects, Scene, Types } from "phaser";

export class Game extends Scene {
  private player: GameObjects.Sprite;
  private cursors : Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("Game");
  }

  create() {
    const { width, height } = this.scale;

    // setup event listeners
    this.setupEventListeners();

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
    this.player = this.add
      .sprite(width / 1.5, height / 1.5, "player")
      .setDisplaySize(250, 250);
    // .setScale(4,4)
  }

  setupEventListeners() {
    // this.input.keyboard?.on("keydown", this.handleKeydown, this);
    this.cursors = this.input.keyboard!.createCursorKeys()
  }

  handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case "a":
        this.handleMovement(true);
        break;
      case "d":
        this.handleMovement(false);
        break;
    }
  }

  handleMovement(isLeft: boolean) {
    const speed = 20;
    if (isLeft) {
      this.player.x -= speed;
      this.player.setFlipX(false)
    } else {
      this.player.x += speed;
      this.player.setFlipX(true);
    }

    // check boundary
    this.player.x = Phaser.Math.Clamp(this.player.x, 0, this.scale.width);
  }

  update(){
    if(this.cursors.left.isDown){
        this.handleMovement(true);
    }else if(this.cursors.right.isDown){
        this.handleMovement(false);
    }
  }
}


