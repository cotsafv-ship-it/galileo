function sine(a ,b ,c , y){ //where in the form of y =a sin(bx) +c for a point on the graph
    let x = 180 * (Math.asin((y -c)/a)/b) / Math.PI //get x in terms of y
    let data = [x,y] 
    return data
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
} //need to modify


function drawsine(a,b,c){
    //put in a loop
    let current = sine(a,b,c,3)
    console.log(current[0],current[1])
}

drawsine(3,2,1)
