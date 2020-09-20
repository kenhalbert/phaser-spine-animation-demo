import Phaser from 'phaser';
import Goblin from '../entities/Goblin';
import CharacterControls from '../controls/CharacterControls';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });

    this.sceneData = {
      player: null,
      characterControls: null,
      text: {
        title: null,
        controls: null
      }
    };
  }

  preload () {
    this.load.setPath('assets/spine/');
    this.load.spine('goblin', 'goblins.json', 'goblins.atlas');
  }

  create() {
    this.sceneData.player = new Goblin(this, 'player');
    this.sceneData.player.initialize(400, 600);

    this.sceneData.characterControls = new CharacterControls(this);
    this.sceneData.characterControls.onChangeSkin(
      () => {
        this.sceneData.player.toggleSkin();
      }
    );

    this.createText();
  }

  update() {
    if (this.sceneData.characterControls.isMoveLeftActive()) {
      this.sceneData.player.walkLeft();
    } else if (this.sceneData.characterControls.isMoveRightActive()) {
      this.sceneData.player.walkRight();
    } else {
      this.sceneData.player.idle();
    }
  }

  createText() {
    this.sceneData.text.title = this.add.text(
      0,
      0,
      "Physics-enabled character animated with Spine",
      {
        fontFamily: 'monospace',
        fontSize: 24,
        fontStyle: 'bold',
        color: '#ffffff'
      }
    );

    this.sceneData.text.controls = this.add.text(
      0,
      50,
      "a:  move left \nd:  move right\nspace:  change skin",
      {
        fontFamily: 'monospace',
        fontSize: 24,
        fontStyle: 'bold',
        color: '#ffffff'
      }
    );
  }
}

export default MainScene;