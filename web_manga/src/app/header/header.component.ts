import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IManga } from '../manga';
import { MangaService } from '../manga.service';
import { SearchResultScreenComponent } from '../search-result-screen/search-result-screen.component';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onClickSubmit(data: any){
    //console.log(data.select);
    let searchBy = data.select;
    if (searchBy == "" || searchBy == undefined)
      searchBy = 'byName';
    this.router.navigate(['/search', searchBy, data.str.trim()]).then(()=>{
      window.location.reload();
    });
  }

  // onClick(){
  //   this.router.navigate(['/homepage']);
  // }

}
