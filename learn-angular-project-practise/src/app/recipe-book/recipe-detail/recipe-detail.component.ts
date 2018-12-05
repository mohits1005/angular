import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  // @Input("recipeElement") element: Recipe;
  recipe: Recipe;
  id:number;
  constructor(private recipeService:RecipeService,private shoppingListService: ShoppingListService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList(ingredients: Ingredient[]) {
    // console.log(ingredients);
    this.shoppingListService.addToShoppingList(ingredients);
  }
}
