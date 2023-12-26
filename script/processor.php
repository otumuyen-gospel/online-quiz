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
            $_SESSION["next"] = 0;
            $_SESSION["prev"] = 0;
        }
        $this->db = new Database("quiz","localhost","root","");
    }
    function initDb(){
        session_start();
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
    function nextStatistic(){
        $data = $this->db->queryDb("select * from statistics where userid=".$_SESSION['userid'].
    " limit 7 offset ".$_SESSION['next']);
        if(count($data) != 0){
            $_SESSION["next"]  += 7;
        }
        echo json_encode($data);
    }
    function prevStatistic(){
        $_SESSION["prev"]  = $_SESSION["next"] - 14;
        $data = $this->db->queryDb("select * from statistics where userid=".$_SESSION['userid'].
    " limit 7 offset ".$_SESSION['prev']);
        if(count($data) != 0 && $_SESSION["prev"] >= 0){
            $_SESSION["next"]  -= 7;
        }
        echo json_encode($data);
    }
    function getCorrect(){
        $data = $this->db->queryDb("select answer from quizzes where id=".$_SESSION['id']);
        return $data[0]["answer"];
    }

    function endQuiz($level){
        $percentageScore = ($_SESSION['score'] / $level) * 100;
        $id = $_SESSION['userid'];
        $d = date('y/m/d',time());
        $count = $this->db->updateDb("insert into statistics values(0,'".$d."',".
          $id.",".$percentageScore.")");
        if($count > 0){
            echo $percentageScore;
            unset($_SESSION["offset"]);
            unset($_SESSION["id"]);
            unset($_SESSION["score"]);
        }

    }
    function destroy(){
        session_start();
        unset($_SESSION["offset"]);
        unset($_SESSION["id"]);
        unset($_SESSION["score"]);
        unset($_SESSION['userid']);
        unset($_SESSION["next"]);
        unset($_SESSION['prev']);
        session_destroy();

    }
    function login($email, $password){
        $data = $this->db->queryDb("select * from account where username='".$email."' 
        and password='".md5($password)."'");
        if(count($data) != 0){
            $_SESSION["userid"] = $data[0]["id"];
            $_SESSION["username"]  = $data[0]["username"];
            echo "success";
        }else{
            echo "please ensure to enter correct details";
        }
    }
    function signup($email, $password){
        $data = $this->db->queryDb("select * from account where username='".$email."' 
        or password='".md5($password)."'");
        if(count($data) == 0){
            $count = $this->db->updateDb("insert into account values(0,'".$email."','".
            md5($password)."')");
            if($count > 0){
                echo "success";
            }else{
                echo "error trying to create account";
            }
        }else{
            echo "this account is already existing";
        }
    }

    function updatePassword($current, $password){
        $data = $this->db->queryDb("select * from account where id=".$_SESSION["userid"]." 
        and password='".md5($current)."'");
        if(count($data) > 0){
            $count = $this->db->updateDb("update account set password='".
            md5($password)."' where id=".$_SESSION["userid"]);
            if($count > 0){
                echo "password update operation was successful";
            }else{
                echo "error trying to update account";
            }
        }else{
            echo "wrong password";
        }
    }
    function updateEmail($email){
        $data = $this->db->queryDb("select * from account where id=".$_SESSION["userid"]);
        if(count($data) > 0){
            $count = $this->db->updateDb("update account set username='".
            $email."' where id=".$_SESSION["userid"]);
            if($count > 0){
                echo "email update operation was successful";
            }else{
                echo "error trying to update account";
            }
        }else{
            echo "you must be logged in";
        }
    }
    function deleteAccount(){
        $count = $this->db->updateDb("delete from account where id=".$_SESSION["userid"]);
            if($count > 0){
                $this->destroy();
                echo "deleted";
            }else{
                echo "error trying to delete account";
            }
    }
    function status(){
        session_start();
        if(isset($_SESSION["userid"])){
            echo "logged";
        }else{
            echo "redirect";
        }
    }

}
 
?>