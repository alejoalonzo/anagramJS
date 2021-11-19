/*Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse si
uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios.*/
alert("Hola");
function comprobarSiLapalabraEsAnagrama() {
  var text1 = document.getElementById("textArea1").value; //obtener datos
  var text2 = document.getElementById("textArea2").value;
  if (text1 != "" && text2 != "") {
    //commprobacion de introducción
    text1 = text1.toLowerCase(); //convierto a minusculas
    text2 = text2.toLowerCase();

    var array = text1.split(""); //la palabra obtenida la separo en caracteres y los meto en un array

    for (i = 0; i < array.length; i++) {
      array = text1 //limbio la palabra de caracteres no deseados y espacios.
        .replace(" ", "")
        .replace("-", "")
        .replace("_", "")
        .replace(".", "")
        .replace(",", "");
    }
    // console.log(array);

    var array2 = text2.split("");
    for (i = 0; i < array2.length; i++) {
      array2 = text2 //Lo mismo para la segunda palabra
        .replace(" ", "")
        .replace("-", "")
        .replace("_", "")
        .replace(".", "")
        .replace(",", "");
    }

    var normalizada = array.split(""); //tengo que volver a convertir a array el string de la palabra normaliza
    var normalizada2 = array2.split("");
    // console.log(normalizada);

    if (normalizada.length == normalizada2.length) {
      //compruebo si tiene el mismo numero de caracteres (filtro)
      //Se ordenan ambos arrays
      var final1 = normalizada.sort();
      var final2 = normalizada2.sort();

      final1 = final1.toString();
      final2 = final2.toString();
      console.log(final1);
      console.log(final2);

      // y se realiza la comparación de cada elemento
      if (final1 == final2) {
        alert("Enviado, es un anagrama");
      } else {
        alert("No se puede enviar porque no es anagrama");
      }
    } else {
      alert("No se puede enviar porque no es anagrama");
    }
  } else {
    alert("Te falta introducir datos");
  }
}
