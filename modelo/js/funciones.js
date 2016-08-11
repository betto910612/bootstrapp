function CargarVistas(){

}
jQuery(document).ready(function() {
	jQuery.post("vista/vw_login.php", function(result){
                        jQuery("#vistaL").html(result);
                });
     });

