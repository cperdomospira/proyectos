<!doctype html>
<html>
<head>
<?php
//------------------------------------------------------------Valida que el usuario este logueado----------------------------------------------
    session_start();
    if(!isset($_SESSION["session_username"])) {
	header("location:../../login.php");
    } else {
    $url=$_SERVER["REQUEST_URI"];
?>
<link rel="stylesheet" href="../../css/bootstrap.min.css">
<link rel="stylesheet" href="css/estilo.css">
<script src="../../js/jquery-1.11.1.min.js" charset="iso-8859-1"></script>
<script src="../../js/bootstrap.min.js"></script>
<script src="../../js/bootstrap.js"></script>
<script src="js/addcontent.js"></script>
</head>
<body>
<!------------------------------------------------------------div Principal de la pagina---------------------------------------------------->
    <div id="principal">
        <div id="contenido">
        </div>
        <div class="col-xs-12" align="center">
            <button id="seccion" onclick="agregar_seccion()">Agregar Sección</button>
        </div>   
    </div>
</body>
<?php } ?>
</html>