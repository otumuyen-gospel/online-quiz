<?php
include('processor.php');
$proc = new Processor();
$proc->initDb();
$proc->prevStatistic();
?>