/*let hoa = document.querySelector ('h1');
hoa.innerHTML =('Hora del desafío');


function clicker(){
    console.log ('el boton fue presionado');
}

function alerta(){
    let x = prompt ('dime una ciudad de brasil');
    alert(`estuve en ${x} y me acorde de vos`);
}

function loving(){
    alert('love js');
}

function sum(){
    let a = parseInt(prompt('dime un numero'));
    let b = parseInt(prompt('dime otro numero'));
    r = a + b ;
    alert(r);
}

function writeDown(){
    console.log('hola'); 
    return;
}
writeDown(); //así se hace para que no dependa de nada en el html

//EJERCICIO N Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function helloThere(){
   let nameFromInput =  document.querySelector('input').value;
   console.log (`hola ${nameFromInput}`) ;
   return;
}
//paso 1 poner un id en el input
//paso 2 crear la funcion que extraiga los valores del input
// paso 3 guardar los datos en la consola
//paso 4 que mediante el click del boton se ejecute la funcion (onclick= nombre de la funcion())


//EJERCICIO N+1 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function timesTwo(){
   let number = document.querySelector('#input1').value; //se pone el # pq es un id 
   console.log (number*2);
}

//EJERCICIO N+2 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function mean(){
    let x = document.querySelector('#input2').value; //pido
    let y = x.split(','); //separo
    let y1 = parseFloat(y[0]); //asigno una variable a cada uno q ingresa
    let y2 = parseFloat(y[1]);
    let y3 = parseFloat(y[2]);
    let z = (y1+y2+y3)/3;
    console.log(z);
}

//EJERCICIO N+3 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function biggerThan(){
    const input = document.querySelector('#input3').value;
    //ahi se guardan los datos que vienen del html
    const datos = input.split(",");
    //aqui se separan los datos por comas
    const datos1= parseFloat(datos[0]);
    const datos2= parseFloat(datos[1]);
    //lo que se hace aqui es tomar dos datos pq en el input se toman dos datos
    console.log(datos1, datos2);

    if(datos1>datos2){
        console.log(`es más grande ${datos1}`);
    }else if (datos2>datos1){
        console.log(`es más grande ${datos2}`);

    }else{
        console.log('son igules')
    }}

function timesTime(){
        let number = document.querySelector('#input4').value; //se pone el # pq es un id 
        console.log (number*number);
     }


     function imcCalculator(){
        let peso = document.querySelector('#peso').value;
        let altura = document.querySelector('#altura').value;

        
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            console.log("Por favor, ingresa valores válidos para peso y altura.");
            return;
        } else{
            
        let imc = peso / (altura**2);
        console.log (imc.toFixed(1));
        }
     }

// Ejericicio n+n de pesos a dolares
function convertidorDls(){
    let q = document.querySelector('#convertidor').value;
    let dollars = q /4500;
    let p = document.querySelector('#show');
   p.innerHTML=(`es igual a esta cantidad de dolares ${dollars.toFixed(2)}`);
    console.log (dollars);
}

function calcularArea(){
    let altura =parseFloat( document.querySelector('#altura').value);
    let anchura =  parseFloat(document.querySelector('#anchura').value);
    let area = anchura*altura;
    let peri= 2*(altura+anchura);
    alert(`el area del rectangulo en cuestion es de ${area} y su perimetro es de ${peri}`);
}

function calcularAreaCirculo(){
    let r = document.querySelector('#radio').value;
    let area = 3.14*r**2;
    let perimetro= 2*3.14*r;

    alert(`el area del circulo en cuestion es de ${area} y su perimetro es de ${perimetro}`);
}

function tablitas(){
    let x = document.querySelector('#input5').value;
    let y = 1;
    while (y<=10){
        z= x*y;
        alert(`${x} * ${y} = ${z}`);
        y++;
    }
}*/

let listaVacia = [""];
console.log = (listaVacia);