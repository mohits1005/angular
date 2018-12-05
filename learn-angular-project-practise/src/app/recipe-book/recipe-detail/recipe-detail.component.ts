import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input("recipeElement") element: Recipe;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addToShoppingList(ingredients: Ingredient[]) {
    // console.log(ingredients);
    this.shoppingListService.addToShoppingList(ingredients);
  }
}
