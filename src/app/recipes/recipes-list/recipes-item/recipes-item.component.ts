import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../recipes.model';
import { RecipesDetailsComponent } from '../../recipes-details/recipes-details.component';
import { from } from 'rxjs';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe : Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeSelected.emit();

  }

}
