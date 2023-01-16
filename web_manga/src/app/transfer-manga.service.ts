import { Injectable } from '@angular/core';
import { IChapter, IImg, IManga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class TransferMangaService {

  constructor() { }

  setManga(manga: IManga){
    localStorage.setItem('manga', JSON.stringify(manga));
  }

  getManga(): IManga{
    return JSON.parse(localStorage.getItem('manga')!);
  }

  setListChapter(listChapter: IChapter[]){
    localStorage.setItem('listChapter', JSON.stringify(listChapter));
  }

  setIndexChapter(index: number){
    localStorage.setItem('index', index.toString());
  }

  getListChapter(): IChapter[]{
    return JSON.parse(localStorage.getItem('listChapter')!);
  }

  getChapterIndex(): number{
    return parseInt(localStorage.getItem('index')!);
  }

  //dùng ! vì tự tin là nó sẽ ko trả về null, nhưng cần phương án chắc chắn hơn
  // setImage(img: IImg){
  //   this.img = img;
  // }

  // getImage(): IImg{
  //   return this.img;
  // }
}
