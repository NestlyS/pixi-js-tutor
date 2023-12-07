const element = document.querySelector('#screen-bonus');

const app = new PIXI.Application({
  width: 500,
  height: 500,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1,      // default: 1
  resizeTo: element,
  backgroundColor: 0xe2f5ff,
}
);

element.appendChild(app.view);

const setup = async () => {

  const body = new PIXI.Container();

  const circle = new PIXI.Graphics();
  circle.beginFill(0xffffff);
  circle.drawCircle(0, 50, 64);
  circle.endFill();

  body.addChild(circle);

  const circle2 = new PIXI.Graphics();
  circle2.beginFill(0xffffff);
  circle2.drawCircle(0, 0, 48);
  circle2.endFill();

  body.addChild(circle2);

  const circle3 = new PIXI.Graphics();
  circle3.beginFill(0xffffff);
  circle3.drawCircle(0, -50, 32);
  circle3.endFill();

  body.addChild(circle3);

  const hat = new PIXI.Container();
  
  const hat1 = new PIXI.Graphics();
  hat1.beginFill(0x232323);
  hat1.drawRect(0, 0, 50, 5);
  hat1.endFill();
  hat.addChild(hat1);

  const hat2 = new PIXI.Graphics();
  hat2.beginFill(0x232323);
  hat2.drawRect(10, -60, 30, 60);
  hat2.endFill();
  hat.addChild(hat2);

  hat.position.set(-25, -80);
  
  const face = new PIXI.Container();
  const eyes = new PIXI.Container();
  const mount = new PIXI.Container();

  const eye1 = new PIXI.Graphics();
  eye1.beginFill(0x232323);
  eye1.drawCircle(-8, 0, 4);
  eye1.endFill();
  eyes.addChild(eye1);

  const eye2 = new PIXI.Graphics();
  eye2.beginFill(0x232323);
  eye2.drawCircle(8, 0, 4);
  eye2.endFill();
  eyes.addChild(eye2);

  eyes.position.set(0, -70);
  
  const mount1 = new PIXI.Graphics();
  mount1.beginFill(0x232323);
  mount1.drawCircle(-8, 0, 3);
  mount1.endFill();
  mount.addChild(mount1);

  const mount2 = new PIXI.Graphics();
  mount2.beginFill(0x232323);
  mount2.drawCircle(0, 3, 3);
  mount2.endFill();
  mount.addChild(mount2);

  const mount3 = new PIXI.Graphics();
  mount3.beginFill(0x232323);
  mount3.drawCircle(8, 4, 3);
  mount3.endFill();
  mount.addChild(mount3);
  
  const mount4 = new PIXI.Graphics();
  mount4.beginFill(0x232323);
  mount4.drawCircle(16, 3, 3);
  mount4.endFill();
  mount.addChild(mount4);
  
  const mount5 = new PIXI.Graphics();
  mount5.beginFill(0x232323);
  mount5.drawCircle(24, 0, 3);
  mount5.endFill();
  mount.addChild(mount5);

  mount.position.set(-5, -50);

  
  const nose = new PIXI.Graphics();
  nose.beginFill(0xffa343);
  nose.drawPolygon([
    0, 4,
    8, 8,
    32, 0,
    8, -8,
    0, -4,
  ]);
  nose.endFill();
  nose.position.set(0, -60);

  face.addChild(nose);
  face.addChild(eyes);
  face.addChild(mount);

  const hand1 = new PIXI.Container();

  const hand11 = new PIXI.Graphics();
  hand11.beginFill(0x8b4513);
  hand11.drawRect(0, 0, 60, 5);
  hand11.endFill();
  hand1.addChild(hand11);
  
  const hand12 = new PIXI.Graphics();
  hand12.beginFill(0x8b4513);
  hand12.drawRect(0, 0, 60, 5);
  hand12.endFill();
  hand12.anchor = {x: 0.5, y: 0.5};
  hand12.rotation = 1.27;
  hand12.position.x = 60;
  hand1.addChild(hand12);

  const hand13 = new PIXI.Graphics();
  hand13.beginFill(0x8b4513);
  hand13.drawRect(0, 0, 30, 5);
  hand13.endFill();
  hand13.rotation = 0.9;
  hand13.position.x = 75;
  hand13.position.y = 50;
  hand1.addChild(hand13);

  const hand14 = new PIXI.Graphics();
  hand14.beginFill(0x8b4513);
  hand14.drawRect(0, 0, 30, 5);
  hand14.endFill();
  hand14.rotation = 0.12;
  hand14.position.x = 75;
  hand14.position.y = 50;
  hand1.addChild(hand14);

  const hand15 = new PIXI.Graphics();
  hand15.beginFill(0x8b4513);
  hand15.drawRect(0, 0, 30, 5);
  hand15.endFill();
  hand15.rotation = 0.50;
  hand15.position.x = 75;
  hand15.position.y = 50;
  hand1.addChild(hand15);

  hand1.rotation = 10;
  hand1.position.set(-35, 0);

  
  const hand2 = new PIXI.Container();

  const hand21 = new PIXI.Graphics();
  hand21.beginFill(0x8b4513);
  hand21.drawRect(0, 0, 60, 5);
  hand21.endFill();
  hand2.addChild(hand21);
  
  const hand22 = new PIXI.Graphics();
  hand22.beginFill(0x8b4513);
  hand22.drawRect(0, 0, 60, 5);
  hand22.endFill();
  hand22.anchor = {x: 0.5, y: 0.5};
  hand22.rotation = 1.27;
  hand22.position.x = 60;
  hand2.addChild(hand22);

  const hand23 = new PIXI.Graphics();
  hand23.beginFill(0x8b4513);
  hand23.drawRect(0, 0, 30, 5);
  hand23.endFill();
  hand23.rotation = 0.9;
  hand23.position.x = 75;
  hand23.position.y = 50;
  hand2.addChild(hand23);

  const hand24 = new PIXI.Graphics();
  hand24.beginFill(0x8b4513);
  hand24.drawRect(0, 0, 30, 5);
  hand24.endFill();
  hand24.rotation = 0.12;
  hand24.position.x = 75;
  hand24.position.y = 50;
  hand2.addChild(hand24);

  const hand25 = new PIXI.Graphics();
  hand25.beginFill(0x8b4513);
  hand25.drawRect(0, 0, 30, 5);
  hand25.endFill();
  hand25.rotation = 0.50;
  hand25.position.x = 75;
  hand25.position.y = 50;
  hand2.addChild(hand25);

  hand2.rotation = 40;
  hand2.position.set(30, 0);
  hand2.scale.x = -1;

  const snowMan = new PIXI.Container();
  snowMan.addChild(body);
  snowMan.addChild(hat);
  snowMan.addChild(face);
  snowMan.addChild(hand1);
  snowMan.addChild(hand2);

  snowMan.x = 300;
  snowMan.y = 300;

  const style = new PIXI.TextStyle({
    fontFamily: "Manrope",
    fontSize: 25,
    fill: "white",
    stroke: "#005675",
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });
  const coolerText = new PIXI.Text("Это бонус, всем спасибо!", style);
  const coolerText2 = new PIXI.Text("С новым годом!", style);
  coolerText.position.set(300, 100);
  coolerText2.position.set(350, 150);

  app.stage.addChild(coolerText);
  app.stage.addChild(coolerText2);

  app.stage.addChild(snowMan);

  let leftArmMult = 1;
  let rightArmMult = 1;

  app.ticker.add((delta) => {
    if (hand1.rotation > 10.5 ) {
      leftArmMult = -1;
    }

    if (hand1.rotation < 9.5 ) {
      leftArmMult = 1;
    }

    if (hand2.rotation < 39.5 ) {
      rightArmMult = 1;
    }

    if (hand2.rotation > 40.5 ) {
      rightArmMult = -1;
    }

    hand1.rotation += delta * leftArmMult * 0.03;
    hand2.rotation += delta * rightArmMult * 0.03;
  })
}

setup();