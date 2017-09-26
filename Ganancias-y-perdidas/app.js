// Ingresos
var income = prompt("¿Cuánto es el ingreso?");
// Costo
var costs = prompt("¿Cuánto es el costo?");
// Porcentaje de impuestos
var taxPersent = prompt("¿Cuánto es el porcentaje(%) de impuestos?");
// Ganancia bruta
var grossProfit = income-costs;
// Obteniendo cantidad de impuestos
var tax = grossProfit*taxPersent/100;
// Ganancia neta
var netIncome = grossProfit-tax;
// Mostrando ganancia neta
document.write("Tu ganancia neta es $" + netIncome);
