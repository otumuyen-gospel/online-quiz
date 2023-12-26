<?php
include('processor.php');
 $proc = new Processor();
 $proc->initDb();
if(isset($_GET["answer"])){
    $proc->getFeedback($_GET['answer']);
}
$proc->endQuiz($_GET['level']);
?>