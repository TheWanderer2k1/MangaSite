<?php
    // class msg{
    //     public $msg;
    //     public function __construct($msg){
    //         $this->msg = $msg;
    //     }
    // }

    try{
        require('./connection/db.inc.php');
        $query = 'select * from reader where username ="' . $_GET['username'] . '" and pwd ="' . $_GET['pwd'] . '"';
        $result = $conn->query($query);
        $row = $result->fetch_assoc();

        // if ($row == NULL || $row == []){
        //     //$msg = new msg('none');
        // }else
        //     //$msg = new msg('ok!');

        header("Access-Control-Allow-Origin: *");
        echo json_encode($row, JSON_UNESCAPED_UNICODE);


    }catch(mysqli_sql_exception $e){
        print('Error: ' . $e->getMessage());
    }
?>