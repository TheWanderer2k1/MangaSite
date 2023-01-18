import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IChapter } from '../manga';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-readpage',
  templateUrl: './readpage.component.html',
  styleUrls: ['./readpage.component.css']
})
export class ReadpageComponent implements OnInit {
  public listChapter: IChapter[];
  public currentChapter: IChapter;
  public currentChapterIndex: number;
  public currentManga: string;

  constructor(private _mangaService: MangaService, private activateRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    // this.currentManga = this.activateRoute.snapshot.paramMap.get('name')!;
    // this.currentChapterIndex = parseInt(this.activateRoute.snapshot.paramMap.get('chapter')!);
    this.activateRoute.paramMap.subscribe((param: ParamMap) => {
      let manga = param.get('name');
      let chapter = param.get('chapter');
      this.currentManga = manga!;
      this.currentChapterIndex = parseInt(chapter!);
    });
    fetch(`http://localhost/webmanga/getListChapter.php?name=${this.currentManga}`).then((res) => res.json()).then(
      response => {
        //console.log(response);
        this.listChapter = response;
        this.currentChapter = this.listChapter[this.currentChapterIndex];
      }
    )
  }

  onNext(){
    if (this.currentChapterIndex < this.listChapter.length-1){
      this.currentChapterIndex++;
      this.route.navigate(['/read', this.currentManga, this.currentChapterIndex]).then(()=>{
        window.location.reload();
      });
    }else{
      alert('Exceed limit!');
    }
  }

  onPrevious(){
    if (this.currentChapterIndex > 0){
      this.currentChapterIndex--;
      this.route.navigate(['/read', this.currentManga, this.currentChapterIndex]).then(()=>{
        window.location.reload();
      });
    }else{
      alert('Exceed limit!');
    }
  }

  onChange(data: any){
    this.route.navigate(['/read', this.currentManga, data.chapter]).then(()=>{
      window.location.reload();
    });
  }

  onClick(){
    this.route.navigate(['/read', this.currentManga]);
  }
}
