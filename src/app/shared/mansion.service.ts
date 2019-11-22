import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { Items } from './item-mock';
import { Item } from './item';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MansionService {

  private baseUrl = 'https://hackathon-wild-hackoween.herokuapp.com'
  movies : Movie[];
  items: Item[];
  item: Item;
  letterP: boolean = false;
  letterS: boolean = false;
  letterY: boolean = false;
  letterC: boolean = false;
  letterH: boolean = false;
  letterO: boolean = false;
  letterS1: boolean = false;
  letterE: boolean = false;
  blood: boolean = false;

  
  
  constructor(
    private http : HttpClient,
    private router: Router
    ) { }

  getMovies():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movies`);
  }
  getItems(): Item[] {
    return Items;
  }


  //Function random
  shuffle(array : Movie[]){
    return array.sort(function() { return Math.random() - .5 });
  }

  //Function display the word in bathroom
  displayWord(item: Item) {
    if (item.id === 'p' && this.letterP === false) {
      this.letterP = true;
      return this.letterP;
    }
    else if (item.id === 's' && this.letterS === false) {
      this.letterS = true;
      return this.letterS;
    }
    else if (item.id === 'y' && this.letterY === false) {
      this.letterY = true;
      return this.letterY;
    }
    else if (item.id === 'c' && this.letterC === false) {
      this.letterC = true;
      return this.letterC;
    }
    else if (item.id === 'h' && this.letterH === false) {
      this.letterH = true;
      return this.letterH;
    }
    else if (item.id === 'o' && this.letterO === false) {
      this.letterO = true;
      return this.letterO;
    }
    else if (item.id === 's1' && this.letterS1 === false) {
      this.letterS1 = true;
      return this.letterS1;
    }
    else if (item.id === 'e' && this.letterE === false) {
      this.letterE = true;
      return this.letterE;
    }
    else{
      this.blood=true; 
    }
  }



}
