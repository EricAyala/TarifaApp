/**-----------------------------
 * backend.js
 * 
 * Desarrollado por EricAyala
 -----------------------------*/



/** Método que calcula el precio total de la tarifa mediante en número de 
 * usuarios introducidos en el selector y el tipo de tarifa seleccionada.
 * - Desarrollado por EricAyala
 */
function calcularPagoTarifa() {
    // A) Instanciamos valores del FRONT
    let selectorTarifasUsuarios = document.getElementById("selTiposTarifa") // Selector de usuarios
    let selectorUsuarios = document.getElementById("selUsuariosTarifa") // Selector de tipos de tarifas
    let txtUsuarios= document.getElementById("usuariosPagoTarifa") //Texto donde se mostrará el número de usuarios
    let txtValor = document.getElementById("valorPagoTarifa") //Texto donde se mostrarán los datos

    // B) Obtenemos el valor seleccionado
    let valorUsuarios = selectorUsuarios.selectedOptions[0].value //Valor de usuarios seleccionado
    let valorTarifas = selectorTarifasUsuarios.selectedOptions[0].value //Valor de tipo de tarifa seleccionado
    
    // C) Calculamos el valor 
    let precio = ""
    switch(valorTarifas) {
        case "Mensual":
            precio = valorUsuarios * 1
            txtValor.innerText = precio+"€ cada mes"
            break;
        
          case "Anual":
            precio = valorUsuarios * 0.9 * 12
            txtValor.innerText = precio+"€ cada año"
            break;
        
          case "Bianual":
            precio = valorUsuarios * 0.8 * 24
            txtValor.innerText = precio+"€ cada dos años"
            break;
        
          default:
          //Nothing
            break;
      }

    // D) Instanciamos el nº de usuarios y el precio en el FRONT
    txtUsuarios.innerText = valorUsuarios
}



/** Método que calcula el precio único de la tarifa mediante en número de 
 * usuarios introducidos en el selector.
 * - Desarrollado por EricAyala
 */
function calcularPagoUnico() {
    // A) Instanciamos valores del FRONT
    let selector = document.getElementById("selPagoUnico") // Selector
    let txtUsuarios= document.getElementById("usuariosPagoUnico") //Texto donde se mostrará el número de usuarios
    let txtValor = document.getElementById("valorPagoUnico") //Texto donde se mostrarán los datos

    // B) Obtenemos el valor seleccionado
    let valor = selector.selectedOptions[0].value //Valor seleccionado
    
    // C) Calculamos el valor (400€ cada 10 usuarios -> 1 usuario - 40€)
    let precio = valor * 40

    // D) Instanciamos el nº de usuarios y el precio en el FRONT
    txtUsuarios.innerText = valor
    txtValor.innerText = precio+"€"
}