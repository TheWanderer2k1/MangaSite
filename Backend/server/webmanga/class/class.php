<?php
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

class comment{
    public $username;
    public $cmt;
    public $date;

    public function __construct($username, $cmt, $date){
        $this->username = $username;
        $this->cmt = $cmt;
        $this->date = $date;
    }
}
?>