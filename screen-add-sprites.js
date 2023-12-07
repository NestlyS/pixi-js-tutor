const element = document.querySelector('#screen-add-sprites');

const app = new PIXI.Application({
  width: 500,
  height: 500,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1,      // default: 1
  resizeTo: element,
  backgroundColor: 0xffffff,
}
);

element.appendChild(app.view);

const SUN_URL = "public/Солнце.png";
const BACK_URL = "public/Фон.png";
const IMP_URL = "public/Верховная жрица.png";


const init = async () => {
  await PIXI.Assets.load(SUN_URL);
  await PIXI.Assets.load(BACK_URL);
  await PIXI.Assets.load(IMP_URL);
  console.log('All loaded!');
}



const setup = async () => {
  await init();
  const sunSprite = PIXI.Sprite.from(PIXI.Assets.cache.get(SUN_URL));
  const backSprite = PIXI.Sprite.from(PIXI.Assets.cache.get(BACK_URL));
  const impSprite = PIXI.Sprite.from(PIXI.Assets.cache.get(IMP_URL));

  app.stage.addChild(backSprite);
  app.stage.addChild(sunSprite);
  app.stage.addChild(impSprite);

  sunSprite.x = app.view.width / 2;
  sunSprite.y = app.view.height / 2;
  sunSprite.anchor.x = 0.5;
  sunSprite.anchor.y = 0.5;

  sunSprite.scale.x = 0.25;
  sunSprite.scale.y = 0.25;

  impSprite.x = sunSprite.x;
  impSprite.y = sunSprite.y;

  impSprite.anchor.x = 1;
  impSprite.anchor.y = 0.5;
  impSprite.scale = sunSprite.scale;
  impSprite.rotation = -0.25;

  backSprite.width = app.view.width;
  backSprite.anchor.y = 0.25;
}

setup();