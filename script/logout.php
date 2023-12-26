<?php
include("processor.php");
$proc = new Processor();
$proc->destroy();
header("location: ../index.html");
die();
?>