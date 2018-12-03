import { Ingredient } from '../common/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
    ];
    getIngredients()
    {
        return this.ingredients.slice();
    }
    addButtonClicked(newIngredient) {
        const ingredient = newIngredient;
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}