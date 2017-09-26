var age = parseInt(prompt("¿Cuantos años tiénes?"))
  switch (age) {
  case ( age >= 0 && age <= 1):
    alert ("baby");
    break;
  case ( age > 1 && age <= 3 ):
    alert ("Toddler");
    break;
  case ( age > 3 && age <= 5 ):
    alert ("Preschool");
    break;
  case ( age > 5 && age <= 12 ):
    alert ("Gradeschooler");
    break;
  case ( age > 12 && age <= 18 ):
    alert ("Teen");
    break;
  case :
      alert ("Adult");
    break;
}
