const element = document.querySelector('#screen-primitives');

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

const setup = async () => {
  const rectangle = new PIXI.Graphics();

  rectangle.beginFill(0x005675);
  rectangle.drawRect(0, 0, 64, 64);
  rectangle.endFill();

  rectangle.anchor = { x: 0.5, y: 0.5 };
  rectangle.x = 100;
  rectangle.y = 100;

  const circle = new PIXI.Graphics();
  circle.beginFill(0x80093a);
  circle.drawCircle(0, 0, 64);
  circle.endFill();
  circle.x = 300;
  circle.y = 300;

  const text = new PIXI.Text("Привет, Unity!");
  text.position.set(300, 100)

  app.stage.addChild(text);
  
  const style = new PIXI.TextStyle({
    fontFamily: "Manrope",
    fontSize: 36,
    fill: "white",
    stroke: "#005675",
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });
  const coolerText = new PIXI.Text("Крутое 'Привет, Unity!'", style);
  text.position.set(400, 200)

  app.stage.addChild(coolerText);

  app.stage.addChild(circle);
  app.stage.addChild(rectangle);
}

setup();