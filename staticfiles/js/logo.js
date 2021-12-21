var illoElem = document.querySelector('canvas');
var illoSize = 64;
var minWindowSize = Math.min(window.innerWidth - 20, window.innerHeight - 80);
var zoom = Math.floor(minWindowSize / illoSize);
illoElem.setAttribute('width', illoSize * zoom);
illoElem.setAttribute('height', illoSize * zoom);

var isSpinning = true;
var TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
    element: illoElem,
    zoom: zoom,
    rotate: { x: -TAU / 32 },
    dragRotate: true,
    onDragStart: function () {
        isSpinning = false;
    },
});

// colors
var magenta = '#F49';
var midnight = '#103';
var white = 'white';


// -- illustration shapes --- //

var cat = new Zdog.Group({
    addTo: illo,
    updateSort: true,
});

// body
new Zdog.Shape({
    path: [{ y: -1 }, { y: 1 }],
    scale: { y: 3 },
    addTo: cat,
    stroke: 14,
    color: magenta,
});

var face = new Zdog.Anchor({
    addTo: cat,
    translate: { y: -4, z: 6.5 },
});

// nose
new Zdog.Shape({
    path: [
        { x: -1 },
        { x: 1 },
        { y: 1 },
    ],
    scale: { x: 0.25, y: 0.25 },
    addTo: face,
    translate: { z: 1.5 },
    stroke: 1,
    color: midnight,
});

// tummy
new Zdog.RoundedRect({
    width: 5,
    height: 7,
    cornerRadius: 2.5,
    addTo: cat,
    translate: { y: 3.5, z: 5 },
    // rotate: { x: TAU/64 },
    color: white,
    stroke: 3,
    fill: true,
});

// chin
new Zdog.Shape({
    path: [{ x: -1 }, { x: 1 }],
    scale: { x: 2 },
    addTo: cat,
    translate: { y: -3, z: 4 },
    stroke: 4,
    color: magenta,
});

// tail
new Zdog.Shape({
    path: [{ y: 0 }, { y: 8 }],
    addTo: cat,
    translate: { y: 7, z: -4 },
    rotate: { x: -TAU / 32 },
    stroke: 1,
    color: magenta,
});

var backLine = new Zdog.Shape({
    path: [{ x: -1 }, { x: 1 }],
    scale: { x: 3 },
    addTo: cat,
    translate: { y: 0, z: -6.5 },
    stroke: 0.5,
    color: '#F7A',
});
backLine.copy({
    translate: { y: -3, z: -6.5 },
});
backLine.copy({
    translate: { y: 3, z: -6.5 },
});

[-1, 1].forEach(function (xSide) {
    // eye
    new Zdog.Shape({
        path: [{ y: -1 }, { y: 1 }],
        scale: { y: 0.3 },
        addTo: face,
        translate: { x: 0.75 * xSide, y: -1.5 },
        stroke: 0.8,
        color: midnight,
    });

    // maw
    new Zdog.Shape({
        path: [{ x: -1 }, { x: 1 }],
        scale: { x: 0.4 },
        addTo: face,
        translate: { x: 1 * xSide, y: 0.5, z: 0.5 },
        stroke: 1.5,
        color: white,
    });

    // whisker
    var whisker = new Zdog.Shape({
        path: [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
        ],
        scale: { x: xSide * 3, y: 0.75 },
        addTo: face,
        translate: { x: 2.5 * xSide, y: 0.5 },
        color: white,
        stroke: 0.25,
    });
    whisker.copy({
        scale: { x: xSide * 3, y: -0.75 },
    });

    // ear
    new Zdog.Shape({
        path: [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: -1 },
        ],
        scale: { x: 2 * xSide, y: 1.5 },
        addTo: cat,
        translate: { x: 2 * xSide, y: -8 },
        color: magenta,
        stroke: 3,
        fill: true,
    });

    // arm
    var arm = new Zdog.Shape({
        path: [{ y: 0 }, { y: 3.5 }],
        addTo: cat,
        translate: { x: 3.5 * xSide, y: -1, z: 5.5 },
        rotate: { x: TAU / 16 },
        stroke: 3,
        color: magenta,
    });

    // leg
    arm.copy({
        translate: { x: 3.5 * xSide, y: 8, z: 2 },
        rotate: {},
    });
});

var diamondPanel = new Zdog.Shape({
    path: [
        { x: 0, y: 1, z: -0 },
        { x: -1, y: 0, z: 1 },
        { x: 1, y: 0, z: 1 },
    ],
    scale: { x: 12, y: 30, z: -12 },
    addTo: illo,
    stroke: false,
    fill: true,
    color: 'hsla(60, 100%, 50%, 0.1)',
});
diamondPanel.copy({
    rotate: { y: TAU / 4 * 1 },
    color: 'hsla(60, 100%, 50%, 0.2)',
});
diamondPanel.copy({
    rotate: { y: TAU / 4 * 2 },
    color: 'hsla(60, 100%, 50%, 0.3)',
});
diamondPanel.copy({
    rotate: { y: TAU / 4 * 3 },
    color: 'hsla(60, 100%, 50%, 0.4)',
});
diamondPanel.copy({
    scale: { x: 12, y: -30, z: -12 },
    rotate: { y: TAU / 4 * 0 },
    color: 'hsla(60, 100%, 50%, 0.4)',
});
diamondPanel.copy({
    scale: { x: 12, y: -30, z: -12 },
    rotate: { y: TAU / 4 * 1 },
    color: 'hsla(60, 100%, 50%, 0.3)',
});
diamondPanel.copy({
    scale: { x: 12, y: -30, z: -12 },
    rotate: { y: TAU / 4 * 2 },
    color: 'hsla(60, 100%, 50%, 0.2)',
});
diamondPanel.copy({
    scale: { x: 12, y: -30, z: -12 },
    rotate: { y: TAU / 4 * 3 },
    color: 'hsla(60, 100%, 50%, 0.1)',
});

// ----- animate ----- //

function animate() {
    illo.rotate.y += isSpinning ? -TAU / 150 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();

