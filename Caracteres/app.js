do{
  var phrase = prompt("Ingresa una frase");

  if(phrase != " "){
    countCharacters(phrase);
    printCharacters(phrase);
    countWhiteespaces(phrase);
  } else {
    console.log("Error, debes ingresar una frase");
  }while(phrase === " ")

  function printCharacters(text){
    for ( var i = 0; i < text.length; 1++){
      console.log(text[i].toUpperCase());
    }
  }

  function countCharacters(text){ //para contar sin .lengh
    var count = 0;
    while (true){
      var charFromText = text.charAt(count);
      if(charFromText == " "){
        break;
      }
      count = count +1; //count++
    }
    console.log("El número de caracteres que componen el string ingresado es + count")
  }

  function countWhitescapes(text){
    var counter = 0;
    for (var i = 0; text.lengh; i++){
      if(text[i]==" "){
        counter=counter+1; //counter++
      }
    }
    console.log("El total de espacios en blancos es " + counter);
  }
}
