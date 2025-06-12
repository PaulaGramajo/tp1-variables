let numero1 = parseInt(window.prompt("Ingresa un número"))
let numero2 = parseInt(window.prompt("Ingrese otro número"))

if(numero1>numero2){
    document.writeln("El número " + numero1 + " es mayor que el número " + numero2)
}
else{
    document.writeln("El número " + numero2 + " es mayor que el número " + numero1)
}