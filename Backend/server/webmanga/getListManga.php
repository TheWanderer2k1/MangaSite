<?php
    require('./class/class.php');

    $arrOfManga = [];

    try{
        require('./connection/db.inc.php');

        $query = 'select * from manga';
        $result = $conn->query($query);

        while ($row = $result->fetch_assoc()){
            $objManga = new manga($row['ID_manga'], $row['name'], $row['author'], $row['genre'], $row['numberOfRead'], $row['thumbnail'],$row['description'], []);
            $arrOfManga[] = $objManga;
        }

        header("Access-Control-Allow-Origin: *");
        echo json_encode($arrOfManga, JSON_UNESCAPED_UNICODE);

    }catch(mysqli_sql_exception $e){
        print('Error: ' . $e->getMessage());
    }
?>