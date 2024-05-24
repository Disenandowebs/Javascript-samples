# GENERADOR DE HISTORIAS TONTAS

Se ha proporcionado algo de HTML/CSS sin formato y algunas cadenas de texto y funciones de JavaScript; necesitas escribir el JavaScript necesario para convertir esto en un programa funcional, que hace lo siguiente:

- Genera una historia tonta cuando se presiona el botón "Generar historia aleatoria".
- Reemplaza el nombre predeterminado "Bob" en la historia con un nombre personalizado, solo si se ingresa un nombre personalizado en el campo de texto "Ingresar nombre personalizado" antes de presionar el botón generar.
- Convierte las cantidades y unidades predeterminadas de peso y temperatura de EE. UU. en la historia a equivalentes del Reino Unido si se marca el botón de opción del Reino Unido antes de presionar el botón Generar.
- Genera una nueva historia tonta aleatoria cada vez que se presiona el botón.

Pasos para completar
Las siguientes secciones describen lo que debe hacer.

Configuración básica:

Cree un nuevo archivo llamado main.js, en el mismo directorio que su index.htmlarchivo.
Aplique el archivo JavaScript externo a su HTML insertando un <script>elemento en su referencia HTML main.js. Ponlo justo antes de la </body>etiqueta de cierre.
Variables y funciones iniciales:

En el archivo de texto sin formato, copie todo el código debajo del título "1. DEFINICIONES COMPLETAS DE VARIABLES Y FUNCIONES" y péguelo en la parte superior del main.jsarchivo. Esto le brinda tres variables que almacenan referencias al campo de texto "Ingresar nombre personalizado" ( customName), el botón "Generar historia aleatoria" ( randomize) y el <p>elemento en la parte inferior del cuerpo HTML en el que se copiará la historia ( story). respectivamente. Además, tienes una función llamada randomValueFromArray()que toma una matriz y devuelve uno de los elementos almacenados dentro de la matriz al azar.
Ahora mire la segunda sección del archivo de texto sin formato: "2. CADENAS DE TEXTO SIN PROCESAR". Este contiene cadenas de texto que actuarán como entrada en nuestro programa. Nos gustaría que contengas estas variables internas dentro main.js:
Almacene la primera cadena de texto grande y larga dentro de una variable llamada storyText.
Almacene el primer conjunto de tres cadenas dentro de una matriz llamada insertX.
Almacene el segundo conjunto de tres cadenas dentro de una matriz llamada insertY.
Almacene el tercer conjunto de tres cadenas dentro de una matriz llamada insertZ.
Colocando el controlador de eventos y la función incompleta:

Ahora regrese al archivo de texto sin formato.
Copie el código que se encuentra debajo del título "3. OYENTE DE EVENTOS Y DEFINICIÓN DE FUNCIÓN PARCIAL" y péguelo en la parte inferior de su main.jsarchivo. Este:
Agrega un detector de eventos de clic a la randomizevariable para que cuando se haga clic en el botón que representa, result()se ejecute la función.
Agrega una definición de función parcialmente completada result()a su código. Durante el resto de la evaluación, deberá completar líneas dentro de esta función para completarla y hacer que funcione correctamente.
Completando la result()función:

Cree una nueva variable llamada newStoryy establezca su valor en igual storyText. Esto es necesario para que podamos crear una nueva historia aleatoria cada vez que se presiona el botón y se ejecuta la función. Si hiciéramos cambios directamente en storyText, solo podríamos generar una nueva historia una vez.
Cree tres nuevas variables llamadas xItem, yItemy zItem, y hágalas iguales al resultado de llamar randomValueFromArray()a sus tres matrices (el resultado en cada caso será un elemento aleatorio de cada matriz a la que se llama). Por ejemplo, puede llamar a la función y hacer que devuelva una cadena aleatoria insertXescribiendo randomValueFromArray(insertX).
A continuación queremos reemplazar los tres marcadores de posición en la newStorycadena — :insertx:, :inserty:y :insertz:— con las cadenas almacenadas en xItem, yItemy zItem. Hay dos posibles métodos de cadena que le ayudarán en este caso: en cada caso, haga que la llamada al método sea igual a newStory, de modo que cada vez que se llame, newStoryse haga igual a sí mismo, pero con sustituciones realizadas. Entonces, cada vez que se presiona el botón, estos marcadores de posición se reemplazan con una cadena tonta aleatoria. Como sugerencia adicional, dependiendo del método que elija, es posible que deba realizar una de las llamadas dos veces.
Dentro del primer ifbloque, agregue otra llamada al método de reemplazo de cadena para reemplazar el nombre 'Bob' que se encuentra en la newStorycadena con la namevariable. En este bloque decimos "Si se ingresó un valor en la customNameentrada de texto, reemplace a Bob en la historia con ese nombre personalizado".
Dentro del segundo ifbloque, estamos verificando si ukse ha seleccionado el botón de opción. Si es así, queremos convertir los valores de peso y temperatura en la historia de libras y Fahrenheit a piedras y grados centígrados. Lo que debes hacer es lo siguiente:
Busque las fórmulas para convertir libras a piedras y Fahrenheit a centígrados.
Dentro de la línea que define la weightvariable, reemplace 300 con un cálculo que convierta 300 libras en piedras. Concatenar ' stone'al final del resultado de la Math.round()llamada general.
Dentro de la línea que define la temperaturevariable, reemplace 94 con un cálculo que convierta 94 Fahrenheit en centígrados. Concatenar ' centigrade'al final del resultado de la Math.round()llamada general.
Justo debajo de las dos definiciones de variables, agregue dos líneas más de reemplazo de cadenas que reemplacen '94 fahrenheit' con el contenido de la temperaturevariable y '300 libras' con el contenido de la weightvariable.
Finalmente, en la penúltima línea de la función, haga que la textContentpropiedad de la storyvariable (que hace referencia al párrafo) sea igual a newStory.
