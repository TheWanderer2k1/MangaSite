<?php
    try{
        require('./connection/db.inc.php');
        $query = 'INSERT INTO reader (ID_reader, username, pwd) VALUES (NULL, "'. $_POST['username'] .'", "'. $_POST['pwd'] . '")';
        if ($conn->query($query)){
            $query = 'SELECT ID_reader FROM reader WHERE username = "'. $_POST['username'] .'" AND pwd = "'. $_POST['pwd'] .'"';
            $result = $conn->query($query);
            $row = $result->fetch_assoc();
            header("Access-Control-Allow-Origin: *");
            echo $row['ID_reader'];
        }else{
            header("Access-Control-Allow-Origin: *");
            echo '-1';
        }

    }catch(mysqli_sql_exception $e){
        header("Access-Control-Allow-Origin: *");
        echo '-1';
    }
?>