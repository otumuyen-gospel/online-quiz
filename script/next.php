<?php
include('processor.php');
$proc = new Processor();
$proc->init();
if(isset($_GET["answer"]) && $_GET["answer"] != ""){
    $proc->getFeedback(trim($_GET['answer']));
    $proc->sendQuiz();
}
?>