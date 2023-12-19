<?php
include("database.php");
class Processor{
    private  $db;
    function init(){
        session_start();
        if(!isset($_SESSION["offset"])){
            $_SESSION["offset"] = random_int(0,11);
            $_SESSION["id"]  = "";
            $_SESSION["score"] = 0;
        }
        $this->db = new Database("quiz","localhost","root","");
    }
    function sendQuiz(){
        $data = $this->db->queryDb("select question, id,
        option1, option2, option3, option4 from quizzes limit 1 offset ".$_SESSION['offset']);
        if(count($data) == 0){
            $_SESSION["offset"] = 0;
            $data = $this->db->queryDb("select question, id,
            option1, option2, option3, option4 from quizzes limit 1 offset ".$_SESSION['offset']);
        }
        $_SESSION["id"] = $data[0]['id'];
        //shuffle options
        $shuffled = [$data[0]["option1"],$data[0]["option2"],$data[0]["option3"],
        $data[0]["option4"]];
        shuffle($shuffled);
        $data[0]["option1"] = $shuffled[0];
        $data[0]["option2"] = $shuffled[1];
        $data[0]["option3"] = $shuffled[2];
        $data[0]["option4"] = $shuffled[3];

        echo json_encode($data);

    }
    function getFeedback($answer){
        $data = $this->db->queryDb("select answer from quizzes where id=".$_SESSION['id']);
        if(strcmp($data[0]["answer"],$answer) == 0){
            $_SESSION['score'] +=1; 
        }
        $_SESSION['offset'] += 1;
        
    }
    function getCorrect(){
        $data = $this->db->queryDb("select answer from quizzes where id=".$_SESSION['id']);
        return $data[0]["answer"];
    }

    function endQuiz($level){
        $percentageScore = ($_SESSION['score'] / $level) * 100;
        echo $percentageScore;
    }
    function destroy(){
        unset($_SESSION["offset"]);
        unset($_SESSION["answer"]);
        unset($_SESSION["score"]);
        session_destroy();
        $this->db->destroy();
    }
}
 
?>