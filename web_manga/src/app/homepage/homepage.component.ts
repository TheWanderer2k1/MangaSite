import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IManga } from '../manga';
import { MangaService } from '../manga.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public listManga: IManga[] = [];
  public listGenre: string[];

  constructor(private _mangaService: MangaService, private route: Router, private _search: SearchService) { }

  ngOnInit(): void {
    this._mangaService.getListManga()
        .subscribe(data => {
          this.listManga = data
    });

    this.listGenre = this._mangaService.getGenres();
  }

  selectManga(name: string){
    //this._transferManga.setManga(manga)
    this.route.navigate(['/read', name]);
    console.log("select " + name + " successful!");
  }

  searchByGenre(genre: string){
    //console.log(genre);
    this._search.searchByGenre(genre);
  }

  searchByAuthor(author: string){
    this._search.searchByAuthor(author);
  }
}
