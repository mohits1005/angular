import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription, Subject } from "rxjs";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index:number){
    this.shoppingListService.startEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // addButtonClicked(newIngredient)
  // {
  //   const ingredient = newIngredient.newIngredient;
  //   this.ingredients.push(ingredient);
  // }
}
