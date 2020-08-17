import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  recipes :Recipe[] = [
    new Recipe('A Test Recipe' ,'This is  A Test' , 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe' ,'This is  A Test' , 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe' ,'This is  A Test' , 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
 
 
  
  ];

  

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe :Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
