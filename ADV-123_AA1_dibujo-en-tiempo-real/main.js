narizx=0;
narizy=0;
mano_der_x=0;
mano_izq_x=0;
diferencia=0;
function setup(){
 camara=createCapture(VIDEO);
 camara.size(550, 550);
 lienzo=createCanvas(550, 550);
 lienzo.position(760, 100);
 posenet1=ml5.poseNet(camara, modelloaded);
 posenet1.on('pose', gotposes);
}
function modelloaded(){
    console.log("posenet se inicio");
}
function gotposes(results){
    if(results.length>0){
    console.log(results);
    narizx=results[0].pose.nose.x;
    narizy=results[0].pose.nose.x;
    mano_der_x=results[0].pose.rightWrist.x;
    mano_izq_x=results[0].pose.leftWrist.x;
    diferencia=floor(mano_der_x-mano_izq_x);
    }
}
function draw(){
    background('#090505');
    document.getElementById("square_side").innerHTML="El ancho y Alto del cuadrado es: "+diferencia+"px";
    fill('#59FDFD');
    stroke('#59FDFD');
    square(narizx, narizy, diferencia);

    
}
