function orderFood(){
  var ceviche = true;
  var tacosAlPastor = false;
  var empanadaChilena = false;
if (ceviche) {
  return "Justo lo que quería";
} else if (tacosAlPastor) {
  return "Nada mal";
} else if (empanadaChilena) {
  return "bueno, no está mal";
} else (hamburguesa) {
  alert("Tendré que comer hamburguesa");
}
}
console.log(orderFood());
