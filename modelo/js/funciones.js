function CargarVistas(){

}
<<<<<<< HEAD
jQuery(document).ready(function() {
	jQuery.post("vista/vw_login.php", function(result){
                        jQuery("#vistaL").html(result);
                });
     });

=======

$(document).ready(function() {
	alert("Hola k ase");
   $.ajax({
            type: "GET",
            url: "vista/vw_login.php",
            data: dataString,
            success: function(data) {
                //Cargamos finalmente el contenido deseado
                $('#Menu').fadeIn(1000).html(data);
            }
        });
     }

function cargar(){

    }
>>>>>>> origin/master
