<?php
    //echo $_GET['name'];
    class manga{
        public $ID_manga;
        public $name;
        public $author;
        public $genre;
        public $numberOfRead;
        public $thumbnail;
        public $description;
        public $listChapter = [];

        public function __construct($ID_manga, $name, $author, $genre, $numberOfRead, $thumbnail, $description, $listChapter){
            $this->ID_manga = $ID_manga;
            $this->name = $name;
            $this->author = $author;
            $this->genre = $genre;
            $this->numberOfRead = $numberOfRead;
            $this->thumbnail = $thumbnail;
            $this->description = $description;
            $this->listChapter = $listChapter;
        }
    }

    class chapter{
        public $ID_chapter;
        public $name;
        //public $images = [];

        public function __construct($ID_chapter, $name){
            $this->ID_chapter = $ID_chapter;
            $this->name = $name;
            //$this->images = $images;
        }
    }

    $arrOfChapter = [];
    try{
        require('db.inc.php');
        $query = 'select * from manga where manga.name = "' . $_GET['name'] . '"';
        $result = $conn->query($query);

        while ($row = $result->fetch_assoc()){
            $query = 'select * from chapter inner join has_chapter on chapter.ID_chapter = has_chapter.ID_chapter where has_chapter.ID_manga =' . $row['ID_manga'];
            $result1 = $conn->query($query);
            while($row1 = $result1->fetch_assoc()){
                $objChapter = new chapter($row1['ID_chapter'], $row1['name']);
                $arrOfChapter[] = $objChapter;
            }
            $objManga = new manga($row['ID_manga'], $row['name'], $row['author'], $row['genre'], $row['numberOfRead'], $row['thumbnail'],$row['description'], $arrOfChapter);
            //$arrOfManga[] = $objManga;
            $arrOfChapter = []; 
        }

        header("Access-Control-Allow-Origin: *");
        echo json_encode($objManga, JSON_UNESCAPED_UNICODE);
        //SELECT * FROM manga INNER JOIN has_chapter ON manga.ID_manga = has_chapter.ID_manga WHERE manga.name = 'Fire punch'

    }catch(mysqli_sql_exception $e){
        print('Error: ' . $e->getMessage());
    }
?>