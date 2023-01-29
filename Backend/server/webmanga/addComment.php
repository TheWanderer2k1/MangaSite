<?php
    require('./class/class.php');

    try{
        require('./connection/db.inc.php');

        $query = 'INSERT INTO comment_on_manga (ID_manga, ID_reader, cmt, date) VALUES ("'. $_POST['ID_manga'] .
        '", "'. $_POST['ID_reader'] .'", "'. $_POST['cmt'] .'", current_timestamp())';
        if ($conn->query($query)){
            //echo 'success';
            $query = 'SELECT reader.username, comment_on_manga.cmt, comment_on_manga.date 
            FROM comment_on_manga INNER JOIN reader ON comment_on_manga.ID_reader = reader.ID_reader 
            WHERE comment_on_manga.ID_manga = "'. $_POST['ID_manga'] .'" AND comment_on_manga.ID_reader = "'. $_POST['ID_reader'] .'" AND comment_on_manga.cmt = "'. $_POST['cmt'] .'" 
            ORDER BY comment_on_manga.date DESC LIMIT 1';

            $result = $conn->query($query);
            $row = $result->fetch_assoc();
            $comment = new comment($row['username'], $row['cmt'], $row['date']);

            header("Access-Control-Allow-Origin: *");
            echo json_encode($comment, JSON_UNESCAPED_UNICODE);
        }
        // else
        //     echo 'not success!';


    }catch(mysqli_sql_exception $e){
        print('Error: ' . $e->getMessage());
    }
?>