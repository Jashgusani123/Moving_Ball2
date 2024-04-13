window.onload = alert("Get the blue ball to the end without hitting the red pillar")

let ball = document.getElementById("ball");
let body = document.querySelector("body");

let top1 = 0;
let left = 0;

let bodyh = document.documentElement.clientHeight;
let bodyw = document.documentElement.clientWidth;
let ew = ball.offsetWidth;
let eh = ball.offsetHeight;


let u = document.getElementById("up");
let d = document.getElementById("down");
let l = document.getElementById("left");
let r = document.getElementById("right");


let rest = document.getElementById("bt")

if(bodyw  < 608){
    u.addEventListener("click", function () {
        top1 = top1 - 10;
        if (top1 < 0) {
            top1 = 0;
            ball.style.top = `${top1}px`;
        } else if ((left > 109 && left < 230 && top1 == 490) ) {
            top1 = 0;
            left = 0;
            ball.style.left = `${left}px`;
            ball.style.top = `${top1}px`;
        }
        else {
            ball.style.top = `${top1}px`;
        }
    })
    d.addEventListener("click", function () {
        if (top1 + eh + 10 <= bodyh) {
            if (( left < 70 && top1 == 20)) {
                top1 = 0;
                left = 0;
                ball.style.left = `${left}px`;
                ball.style.top = `${top1}px`;
            }
            top1 = top1 + 10;
            ball.style.top = `${top1}px`;
        }
    })
    l.addEventListener("click", function () {
        if (left < 0) {
            left = 0;
            ball.style.left = `${left}px`;
        }
        else {
            if ((left == 70 && top1 >= 90) || (left  == 230 && top1 <= 450)) {
                top1 = 0;
                left = 0;
                ball.style.left = `${left}px`;
                ball.style.top = `${top1}px`;

            }
            else {
                left=left-10;
                ball.style.left = `${left}px`;
            }
        }
    })
    r.addEventListener("click", function () {
        if (left + ew + 10 <= bodyw) {
            if ((left == 90 && top1 < 510)) {
                top1 = 0;
                left = 0;
                ball.style.left = `${left}px`;
                ball.style.top = `${top1}px`;

            }
            left = left + 10;
            ball.style.left = `${left}px`;
        }
    
    })
    // rest.addEventListener("click", function () {
    //     ball.style.top = "0px";
    //     ball.style.left = "0px";
    // })
    
    
    body.addEventListener("keydown", moveBall);
    
    function moveBall(e) {
    
        if (e.keyCode === 38 || e.keyCode === 87) {
            top1 = top1 - 10;
            if (top1 < 0) {
                top1 = 0;
                ball.style.top = `${top1}px`;
            } else if ((left > 109 && left < 230 && top1 == 490) ) {
                top1 = 0;
                left = 0;
                ball.style.left = `${left}px`;
                ball.style.top = `${top1}px`;
            }
            else {
                ball.style.top = `${top1}px`;
            }
    
        } else if (e.keyCode === 40 || e.keyCode === 83) {
            if (top1 + eh + 10 <= bodyh) {
                if (( left < 70 && top1 == 20)) {
                    top1 = 0;
                    left = 0;
                    ball.style.left = `${left}px`;
                    ball.style.top = `${top1}px`;
                }
                top1 = top1 + 10;
                ball.style.top = `${top1}px`;
            }
    
        } else if (e.keyCode === 39 || e.keyCode === 68) {
            if (left + ew + 10 <= bodyw) {
                if ((left == 90 && top1 < 510)) {
                    top1 = 0;
                    left = 0;
                    ball.style.left = `${left}px`;
                    ball.style.top = `${top1}px`;
    
                }
                left = left + 10;
                ball.style.left = `${left}px`;
            }
    
        } else if (e.keyCode === 37 || e.keyCode === 65) {
    
            if (left < 0) {
                left = 0;
                ball.style.left = `${left}px`;
            }
            else {
                if ((left == 70 && top1 >= 90) || (left  == 230 && top1 <= 450)) {
                    top1 = 0;
                    left = 0;
                    ball.style.left = `${left}px`;
                    ball.style.top = `${top1}px`;
    
                }
                else {
                    left=left-10;
                    ball.style.left = `${left}px`;
                }
            }
        }
    
    
    }
}
else{

   
    rest.addEventListener("click", function () {
        ball.style.top = "0px";
        ball.style.left = "0px";
    })


body.addEventListener("keydown", moveBall);

function moveBall(e) {

    if (e.keyCode === 38 || e.keyCode === 87) {
        top1 = top1 - 10;
        if (top1 < 0) {
            top1 = 0;
            ball.style.top = `${top1}px`;
        } else if ((left > 309 && left < 500 && top1 == 670) || (left > 840 && left < 1000 && top1 == 670)) {
            top1 = 0;
            left = 0;
            ball.style.left = `${left}px`;
            ball.style.top = `${top1}px`;
        }
        else {
            ball.style.top = `${top1}px`;
        }

    } else if (e.keyCode === 40 || e.keyCode === 83) {
        if (top1 + eh + 10 <= bodyh) {
            if ((left >= 0 && left < 250 && top1 == 20) || (left > 590 && left < 710 && top1 == 20) || (left > 1090 && left < 1210 && top1 == 20)) {
                top1 = 0;
                left = 0;
                ball.style.left = `${left}px`;
                ball.style.top = `${top1}px`;
            }
            top1 = top1 + 10;
            ball.style.top = `${top1}px`;
        }

    } else if (e.keyCode === 39 || e.keyCode === 68) {
        if (left + ew + 10 <= 1366) {
            if ((left == 300 && top1 < 680) || (left == 550 && top1 > 90) || (left == 800 && top1 <= 590) || (left == 1050 && top1 > 110)) {
                top1 = 0;
                left = 0;
                ball.style.left = `${left}px`;
                ball.style.top = `${top1}px`;

            }
            left = left + 10;
            ball.style.left = `${left}px`;
        }

    } else if (e.keyCode === 37 || e.keyCode === 65) {

        left = left - 10;
        if (left < 0) {
            left = 0;
            ball.style.left = `${left}px`;
        }
        else {
            if ((left == 250 && top1 >= 120) || (left == 500 && top1 <= 580) || (left == 750 && top1 >= 120) || (left == 1000 && top1 <= 590) || (left == 1250 && top1 >= 110)) {
                top1 = 0;
                left = 0;
                ball.style.left = `${left}px`;
                ball.style.top = `${top1}px`;

            }
            else {
                ball.style.left = `${left}px`;
            }
        }
    }


}
}