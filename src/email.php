<?php


//var_dump($_POST);
mail("francesca.muia91@gmail.com",$_POST["name"],$_POST["comment"],"From:".$_POST["mail"]);
echo "<script>window.close();</script>";

 ?> 