import { GameObjects, Scene, Types, Math } from "phaser";

interface iLevelData{
    level: number;
    name: string;
};

export class Game extends Scene {
  private player: GameObjects.Sprite;
  private enemy: GameObjects.Sprite;
  private cursors: Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("Game");
  }

  init(data: iLevelData){
    console.log("Data received :", data);
  };
  

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

    // animation
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.player.anims.play("idle");

    // enemy 
    this.enemy = this.add.sprite(200, height / 1.5, "enemy").setDisplaySize(250,250);

    // enable physics for characters
    this.physics.add.existing(this.player);
    this.physics.add.existing(this.enemy);

    this.physics.add.collider(this.player, this.enemy, this.handleCollision)
  }

  setupEventListeners() {
    this.input.keyboard?.on("keydown", this.handleKeydown, this);
    this.input.keyboard?.on("keyup", this.handleKeyUp, this);
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

  handleKeyUp(){
    this.player.anims.play("idle");
  }

  handleMovement(isLeft: boolean) {
    const speed = 20;
    if (isLeft) {
      this.player.x -= speed;
      this.player.setFlipX(false);
      this.player.anims.play("walk", true)
    } else {
      this.player.x += speed;
      this.player.setFlipX(true);
      this.player.anims.play("walk", true)
    }

    // check boundary
    this.player.x = Math.Clamp(this.player.x, 0, this.scale.width);
  }

  update() {
    if (this.cursors && this.cursors.left.isDown) {
      this.handleMovement(true);
    } else if (this.cursors.right.isDown) {
      this.handleMovement(false);
    }
  }

  handleCollision(){
    console.log("collision detected!!");
  }
}
