import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: []
})
export class RecipeBookComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeService.loadRecipe.subscribe(
    //   (recipeElement) => {
    //     this.recipe = recipeElement.recipe;
    //   }
    // );
  }

  recipeLoad(recipeElement){
    this.recipe = recipeElement.recipe;
  }

}
