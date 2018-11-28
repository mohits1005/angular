import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() loadRecipe = new EventEmitter<{ recipe: Recipe }>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://gdsit.cdn-immedia.net/2017/01/CARNE-625x350.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://gdsit.cdn-immedia.net/2017/01/CARNE-625x350.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeClicked(recipe: Recipe){
    this.loadRecipe.emit({ recipe });
  }

}
