const element = document.querySelector('#screen-first-app');
//Create a Pixi Application
const app = new PIXI.Application({width: 256, height: 256});

//Add the canvas that Pixi automatically created for you to the HTML document
element.appendChild(app.view);

const app2 = new PIXI.Application({
  width: 256,         // default: 800
  height: 256,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
}
);

app2.renderer.backgroundColor = 0xffffff;
app2.resizeTo = element;

element.appendChild(app2.view);

const elementCode = document.querySelector('#screen-first-app-code');

