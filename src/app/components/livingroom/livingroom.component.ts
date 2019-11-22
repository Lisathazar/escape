import { Component, OnInit } from '@angular/core';
import { MansionService } from '../../shared/mansion.service';
import { Movie } from '../../shared/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit {

  movies : Movie[] ;
  moviesToDisplay : Movie[] = [];
  goodAnswer : Movie[];
  moviesSelected : Movie []= [];
  good : boolean =false ;
  blood: boolean = false;

 
  
  constructor(private mansionService : MansionService, private router:Router) {}
  
  ngOnInit() {
    this.mansionService.getMovies().subscribe((data)=>{
      this.movies = data.movies; 
      this.moviesToDisplay.push(this.movies[2],
                                this.movies[5],
                                this.movies[7],
                                this.movies[15],
                                this.movies[42],
                                this.movies[23],
                                this.movies[65],
                                this.movies[25],
                                this.movies[43],
                                this.movies[66],
                                this.movies[30],
                                this.movies[33],
                                this.movies[68],
                                )
      this.goodAnswer = [this.movies[66], this.movies[43], this.movies[65], this.movies[5]];
    });
    
  }
  MovieChoose(movie : Movie){
    this.moviesSelected.push(movie);
      if(this.moviesSelected.length === 4){
        for (let i=0; i<4; i++){
          if(this.moviesSelected[i].id===this.goodAnswer[i].id){
            
            this.good = true;
            this.blood = false;
            console.log(this.moviesSelected)
            console.log(this.goodAnswer)


          }
          else{      
            this.good =false;
            this.blood=true; 
          }
        }
      }
     
    }
    replay(){
      this.router.navigate(["/"]);
    }

  

}
