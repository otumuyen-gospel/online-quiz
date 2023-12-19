<?php
include('processor.php');
$proc = new Processor();
$proc->init();
echo $proc->getCorrect();
?>