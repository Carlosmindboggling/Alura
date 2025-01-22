let x = [22];
console.log(x);

let lenguajesDeProgramacion= ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('java','goland','ruby');

function mostrarArays(){
console.log(lenguajesDeProgramacion);
console.log(lenguajesDeProgramacion.reverse());

}

mostrarArays();


/* por ahí no era ptmsfunction arrayBackwards(){
    n=1;
    while (n<=8){
        let y = lenguajesDeProgramacion[lenguajesDeProgramacion.length - n];
        console.log(y); 
        n++;
    }
}
arrayBackwards();*/

let numerosPromedio = [1,2,3,4,5,6];
function promedio(){
    console.log(numerosPromedio.reduce((acumulador, valorActual)=> acumulador+valorActual,0)/numerosPromedio.length);
    //el reduce sirve para sumar todos lo valores de un arreglo o para reducir los valores a un solo hueco
}
promedio();

function maxAndMin(){
    console.log(Math.max(...numerosPromedio));
    console.log(Math.min(...numerosPromedio));
}
maxAndMin();

function suma(){
    console.log(numerosPromedio.reduce((acumulador, valorActual)=> acumulador+valorActual,0 ));
}
suma();