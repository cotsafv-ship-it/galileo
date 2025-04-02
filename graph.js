function sine(a ,b ,c , limit){ //where in the form of y =a sin(bx) +c and limit of limit of curve
    console.log("for the curve " + a + "sin(" + b + "x) + " + c + ", ")
    let y
    for (let i = 0; i <= limit; i = i + 10){
        i = Math.PI * i/180 //torad
        y = a * Math.sin(b * i) + c
        console.log("x:" + i + " " + "y:" + y)
        i = i/Math.PI * 180 //unpi
    }
}

function cosine(a ,b ,c , limit){ //where in the form of y =a cos(bx) +c and limit of limit of curve
    console.log("for the curve " + a + "cos(" + b + "x) + " + c + ", ")
    let y
    for (let i = 0; i <= limit; i = i + 10){
        i = Math.PI * i/180 //torad
        y = a * Math.cos(b * i) + c
        console.log("x:" + i + " " + "y:" + y)
        i = i/Math.PI * 180 //unpi
    }
}




//test values
//sine(1,2,3,360)
//cosine(1,2,3,360)

//2a is height of curve in asin(bx) +c

let space = "."

console.log(space.repeat(9) + "O")
