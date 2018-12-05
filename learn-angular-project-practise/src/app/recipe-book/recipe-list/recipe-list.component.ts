import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() loadRecipe = new EventEmitter<{ recipe: Recipe }>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
 
  // recipeClicked(recipe: Recipe){
  //   // this.loadRecipe.emit({ recipe });
  //   this.recipeService.loadRecipe.emit({ recipe });

  // }

}
