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
    $('img').removeAttr('width');


    /* Cambiando contenido HTMl*/
    // si existe codigo html en el text del tag, lo tomará como código
    var strongContent = $('strong').html()
    var pContent = $('p').html()

    console.log('Strong:' + strongContent + ' P:' + pContent)
    
    //Cambia el text de todos los strong que consiga por el
    // contenido de pContent
    //$('strong').html(pContent);
    
    //Cambia el text de todos los 'p' que consiga por el
    // contenido de strongContent
    //$('p').html(strongContent);

    /* Cambiando contenido del texto*/
    //si existe codigo html en el text del tag, lo tomará interpretado 

    var strongContent = $('strong').text();
    var pContent = $('p').text();
    
    console.log('2-Strong:' + strongContent + ' 2-P:' + pContent)
    
    $('strong').text(pContent);
    $('p').text(strongContent);



});
