/************************************************** CAPITULO 1 ***********************************/

//El signo $(.. tambien puede llamarse con
//jQuery(.. significa que se está interactuando
//con jQuery.

//La funcion $document.ready es llamada cuando la pagina ha finalizado de cargar

$(document).ready( function(){

        //alert("Hello World!");
        //Simple alerta Hello World!    

        alert( $('img').attr('alt') ); 
        alert(jQuery('img').attr('height'));
        //Tomara la primera imagen 
        //del documento y consulta el atributo dentro de attr('atributo_a_consultar')
       
});





