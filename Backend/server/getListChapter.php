<?php
    //echo $_GET['name'];
    class chapter{
        public $ID_chapter;
        public $name;
        public $images = [];

        public function __construct($ID_chapter, $name, $images){
            $this->ID_chapter = $ID_chapter;
            $this->name = $name;
            $this->images = $images;
        }
    }

    class image{
        public $ID_img;
        public $path;

        public function __construct($ID_img, $path){
            $this->ID_img = $ID_img;
            $this->path = $path;
        }
    }

    $arrOfChapter = [];
    $arrOfImg = [];
    try{
        require('db.inc.php');
        $query = 'select * from chapter inner join has_chapter on chapter.ID_chapter = has_chapter.ID_chapter where has_chapter.ID_manga = (select ID_manga from manga where name="' . $_GET['name'] .'")';
        $result1 = $conn->query($query);
        while($row1 = $result1->fetch_assoc()){
            $query = 'select * from image_content inner join contain on image_content.ID_img = contain.ID_img where contain.ID_chapter ='. $row1['ID_chapter'];
            $result2 = $conn->query($query);
                
            while($row2 = $result2->fetch_assoc()){
                $objImg = new image($row2['ID_img'], $row2['path']);
                $arrOfImg[] = $objImg;  //create array of images in a chapter
            }

        $objChapter = new chapter($row1['ID_chapter'], $row1['name'], $arrOfImg);
        $arrOfChapter[] = $objChapter;
        $arrOfImg = [];
        }

        header("Access-Control-Allow-Origin: *");
        echo json_encode($arrOfChapter, JSON_UNESCAPED_UNICODE);

    }catch(mysqli_sql_exception $e){
        print('Error: ' . $e->getMessage());
    }
?>