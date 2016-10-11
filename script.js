"use strict";
let rectangle1 = {x1 : 100, y1 : 400, x2 : 350, y2 : 200};
let rectangle2 = {x1 : 200, y1 : 300, x2 : 400, y2 : 100};

let array = [];
var cx = document.querySelector("canvas").getContext("2d");

if ( (rectangle1.x1 > rectangle2.x2) || (rectangle2.x1 > rectangle1.x2) || (rectangle1.y1 < rectangle2.y2) || (rectangle2.y1 < rectangle1.y2) ) {
    console.log('rectangles do not intersect');
} else if ((rectangle2.x1 == rectangle1.x2 & rectangle2.x2 > rectangle1.x2) || (rectangle1.x1 == rectangle2.x2 & rectangle1.x2 > rectangle2.x2) ||
    (rectangle1.y2 == rectangle2.y1 & rectangle1.y1 > rectangle2.y1) || (rectangle2.y2 == rectangle1.y1 & rectangle2.y1 > rectangle1.y1) ) {
    console.log('rectangles touch');
} else  {
    let rectangle3 = {
        x1 : (rectangle2.x1 > rectangle1.x1) ? rectangle2.x1 : rectangle1.x1,
        y1 : (rectangle2.y1 < rectangle1.y1) ? rectangle2.y1 : rectangle1.y1,
        x2 : (rectangle2.x2 < rectangle1.x2) ? rectangle2.x2 : rectangle1.x2,
        y2 : (rectangle2.y2 > rectangle1.y2) ? rectangle2.y2 : rectangle1.y2
    }

    let a = (rectangle3.x2 - rectangle3.x1)/2;
    let b = (rectangle3.y1 - rectangle3.y2)/2;
    let x0 = rectangle3.x1 + a;
    let y0 = rectangle3.y2 + b;



    while (array.length < 10) {

        var x = Math.random()*(rectangle3.x2 - rectangle3.x1) + rectangle3.x1;
        var y = Math.random()*(rectangle3.y1 - rectangle3.y2) + rectangle3.y2;

        if ( ((Math.pow( (x-x0) , 2))/a/a + (Math.pow((y-y0) , 2))/b/b) <1  ) {
            array.push({x: x, y: y});
            cx.beginPath();
            cx.ellipse(x, y, 5, 5, 0, 0, 2 * Math.PI);
            cx.fill();
        }


    };

    cx.strokeRect(rectangle1.x1 , rectangle1.y1  , rectangle1.x2-rectangle1.x1 , rectangle1.y2-rectangle1.y1);
    cx.strokeRect(rectangle2.x1 , rectangle2.y1 , rectangle2.x2-rectangle2.x1, rectangle2.y2-rectangle2.y1);
    cx.strokeStyle = 'red';
    cx.strokeRect(rectangle3.x1 , rectangle3.y1 , rectangle3.x2-rectangle3.x1, rectangle3.y2-rectangle3.y1);

    cx.beginPath();
    cx.ellipse(x0, y0, a, b, 0, 0, 2 * Math.PI);
    cx.stroke();

}






