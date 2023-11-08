function suma(a, b, callback) {
  let c = a + b;
  callback(c);
}

function imprimirResultado(resultado) {
  console.log("El resultado de la suma es: " + resultado);
}
