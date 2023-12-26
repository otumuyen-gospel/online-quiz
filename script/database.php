<?php
class Database{
    private $db;
    private $host;
    private $user;
    private $pass;
    public $msg;
    private $mysqli;
    function __construct($db, $host, $user, $pass){
        $this->db = $db;
        $this->host = $host;
        $this->user = $user;
        $this->pass = $pass;
        $this->connect();
    }
    function connect(){
        $this->mysqli = mysqli_connect($this->host,$this->user,$this->pass,$this->db);
        try{
            if(mysqli_connect_errno()){
                $this->msg = mysqli_connect_error();
            }else{
                $this->msg = "connection was successfull";
            }
        }catch(exception $e){
            $this->msg = $e->getMessage();
        }
    }
    function queryDb($sql){
        $data = [];
        try{
            $query = $this->mysqli->query($sql);
            if($query){
                while($array = $query->fetch_assoc()){
                    array_push($data,$array);
                }
            }else{
                $data= "error in performing query";
            }
            $query->free();
        }catch(exception $e){
            $data = $e->getMessage();
        }

        return $data;
    }
    function updateDb($sql){
        try{
            $prep = $this->mysqli->prepare($sql);
            //SKIPPED BINDING OF PARAMETERS
            $prep->execute();
            $result = $prep->affected_rows;
            $prep->close();
        }catch(exception $e){
            $result = $e->getMessage();
        }
        return $result;
    }
    
    function destroy(){
        $this->mysqli->close();
    }
}
?>