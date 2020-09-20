import Phaser from 'phaser';

class CharacterControls {
  constructor (scene) {
    this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  isMoveLeftActive() {
    return this.keyA.isDown;
  }

  isMoveRightActive() {
    return this.keyD.isDown;
  }

  onChangeSkin(callback) {
    this.keySpace.on('down', callback);
  }
}

export default CharacterControls;