<?php


//var_dump($_POST);
mail("contactme@francescamuia.it",$_POST["name"],$_POST["comment"]." ".$_POST["mail"],"From: website@francescamuia.it");
echo "<script>window.close();</script>";

 ?> 