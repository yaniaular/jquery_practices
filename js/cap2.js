/********************************** Accesando a Elmentos HTML CAPITULO 2 *************************/

//El signo $(.. tambien puede llamarse con
//jQuery(.. significa que se está interactuando
//con jQuery.

//La funcion $document.ready es llamada cuando la pagina ha finalizado de cargar

$(document).ready( function(){

    /*Consultando elementos*/
    
    //Toma el valor de src de la primera imagen que encuentre
    var imageSource = $('img').attr('src');
    console.log(imageSource);  
   
    //Consulta el texto de los tags 'p'
    var pContent = $('p').text();
    console.log(pContent);

    /*Configurando o reemplazando valor de los elementos*/
    
    //Los atributos a todas las imagenes que encuentre
    $('img').attr({src: 'images/tomate.jpg', alt: 'tomate'});

    /* Remover los atributos de un elemento*/
    
    //Remueve el atributo height de todos los elementos img
    $('img').removeAttr('height');




});
