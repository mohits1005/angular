import { Ingredient } from '../common/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
    ];
    getIngredient(index: number){
        return this.ingredients[index];
    }
    getIngredients()
    {
        return this.ingredients.slice();
    }
    addButtonClicked(newIngredient) {
        const ingredient = newIngredient;
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addToShoppingList(ingredients: Ingredient[]) {
        // const ingredient = newIngredient;
        // this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        // console.log(ingredients);
        this.ingredients = this.ingredients.concat(ingredients);
        console.log(this.ingredients);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());

    }
    updateIngredient(index: number, newIngredient: Ingredient)
    {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}