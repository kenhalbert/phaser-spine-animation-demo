import Phaser from 'phaser';
import SpineArcadePhysicsContainer from '../physics/SpineArcadePhysicsContainer';

class Goblin {
  constructor(scene, key) {
    this.scene = scene;
    this.key = key;

    this.animationData = {
      skins: ['goblin', 'goblingirl'],
      attachments: ['spear', 'dagger', null],
      animations: ['walk', 'idle']
    };

    this.spineObject = null;
    this.spinePhysicsContainer = null;

    this.state = {
      skin: 'goblin',
      attachment: null,
      animation: 'idle',
      currentState: 'IDLE'
    };

    this.walkSpeed = 200;

    this.isInitialized = false;
  }

  initialize(x, y) {
    if (this.isInitialized) throw Error(`${this.key} already initialized`);

    // create spine object at 0,0 since its position will be inherited from its container
    this.spineObject = this.scene.add.spine(0, 0, 'goblin', this.state.animation, true);

    // use a physics-enabled Container to resolve issues with physics-enabled Spine game objects
    this.spinePhysicsContainer = new SpineArcadePhysicsContainer(
      this.scene,
      `${this.key}_container`,
      x,
      y,
      this.spineObject
    );
    this.spinePhysicsContainer.initialize();

    this.spineObject.setSkinByName(this.state.skin);

    // smoothly transitions between animations instead of switching immediately
    this.spineObject.setMix('walk', 'idle', 0.3);
    this.spineObject.setMix('idle', 'walk', 0.3);

    this.spineObject.skeleton.setAttachment('right hand item', this.state.attachment);

    this.isInitialized = true;
  }

  toggleSkin() {
    const skinToUse = this.state.skin === 'goblin'
      ? 'goblingirl'
      : 'goblin';

    this.state.skin = skinToUse;

    this.setSkin(skinToUse);
  }

  walkLeft() {
    if (this.currentState === 'WALK_LEFT') return;

    this.spineObject.setScale(-1, 1);

    this.setAnimation('walk', true);

    this.spinePhysicsContainer.setVelocityX(-this.walkSpeed);

    this.currentState = 'WALK_LEFT';
  }

  walkRight() {
    if (this.currentState === 'WALK_RIGHT') return;

    this.spineObject.setScale(1, 1);

    this.setAnimation('walk', true);

    this.spinePhysicsContainer.setVelocityX(this.walkSpeed);

    this.currentState = 'WALK_RIGHT';
  }

  idle() {
    if (this.currentState === 'IDLE') return;

    this.setAnimation('idle', true);

    this.spinePhysicsContainer.setVelocityX(0);

    this.currentState = 'IDLE';
  }

  setAttachment(slotName, attachmentName) {
    this.spineObject.skeleton.setAttachment(slotName, attachmentName)
  }

  setSkin(skinName) {
    this.spineObject.setSkinByName(skinName)
  }

  setAnimation(animation, loop = false) {
    this.spineObject.play(animation, loop)
  }
}

export default Goblin;