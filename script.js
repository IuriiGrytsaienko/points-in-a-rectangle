function initRectangle(rec) {
    for (var key in rec) {
        rec[key] = Math.floor(Math.random()*10);
    }
};

let rectangle1 = {x1 : null, y1 : null, x2 : null, y2 : null};
let rectangle2 = {x1 : null, y1 : null, x2 : null, y2 : null};

let array = [];

var cx = document.querySelector("canvas").getContext("2d");

initRectangle(rectangle1);
initRectangle(rectangle2);

let r1 = {
    left: Math.min(rectangle1.x1, rectangle1.x2),
    top: Math.max(rectangle1.y1, rectangle1.y2),
    right: Math.max(rectangle1.x1, rectangle1.x2),
    bottom: Math.min(rectangle1.y1, rectangle1.y2)
};

let r2 = {
    left: Math.min(rectangle2.x1, rectangle2.x2),
    top: Math.max(rectangle2.y1, rectangle2.y2),
    right: Math.max(rectangle2.x1, rectangle2.x2),
    bottom: Math.min(rectangle2.y1, rectangle2.y2)
};



if ( !((r1.left >= r2.right)||(r1.right <= r2.left)||(r1.top <= r2.bottom)||(r1.bottom >= r2.top)) ) {
    var r3 = {
        left: Math.max(r1.left, r2.left),
        top: Math.min(r1.top, r2.top),
        right: Math.min(r1.right, r2.right),
        bottom: Math.max(r1.bottom, r2.bottom)
    };

    let a = (r3.right - r3.left)/2;
    let b = (r3.top - r3.bottom)/2;
    let x0 = r3.left + a;
    let y0 = r3.bottom + b;

    cx.beginPath();
    cx.ellipse(x0*30, y0*30, a*30, b*30, 0, 0, 2 * Math.PI);
    cx.stroke();



    while (array.length < 10) {
        var x = Math.random()*(r3.right - r3.left) + r3.left;
        var y = Math.random()*(r3.top - r3.bottom) + r3.bottom;
        if ( (((x-x0) ** 2)/a/a + ((y-y0) ** 2)/b/b) <1 ) {
            array.push({x: x, y: y});
            cx.beginPath();
            cx.ellipse(x*30, y*30, 5, 5, 0, 0, 2 * Math.PI);
            cx.fill();
        }
    }


};

for (var key in array) {
    console.log(array[key]);
};


cx.strokeRect(r1.left * 30 , r1.bottom * 30 , (r1.right - r1.left) * 30, (r1.top - r1.bottom) * 30 );
cx.strokeRect(r2.left * 30 , r2.bottom * 30 , (r2.right - r2.left) * 30, (r2.top - r2.bottom) * 30);