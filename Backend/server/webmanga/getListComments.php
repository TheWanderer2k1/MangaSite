<?php
    require('./class/class.php');

    try{
        require('./connection/db.inc.php');
        $query = 'SELECT reader.username, comment_on_manga.cmt, comment_on_manga.date 
        FROM comment_on_manga INNER JOIN reader ON comment_on_manga.ID_reader = reader.ID_reader 
        WHERE comment_on_manga.ID_manga = "'. $_GET['ID_manga'] .'" ORDER BY comment_on_manga.date DESC';

        $result = $conn->query($query);
        $arr = [];

        while($row = $result->fetch_assoc()){
            $objCmt = new comment($row['username'], $row['cmt'], $row['date']);
            $arr[] = $objCmt;
        }

        header("Access-Control-Allow-Origin: *");
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);

    }catch(mysqli_sql_exception $e){
        print('Error: ' . $e->getMessage());
    }
?>