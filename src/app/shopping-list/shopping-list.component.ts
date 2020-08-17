import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrdient.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[]= [     //the class imported
         new Ingredient('Apple' ,5),
         new Ingredient('Tomatoes' ,10),
  ];     

  constructor() { }

  ngOnInit(): void {
  }

}
