import { EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../common/ingredient.model';
import { Subject } from 'rxjs';
export class RecipeService{
    // loadRecipe = new EventEmitter<{ recipe: Recipe }>();
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Spaghetti', 'Mouth watering Sphagetti!', 'https://gdsit.cdn-immedia.net/2017/01/CARNE-625x350.jpg',[new Ingredient('meat',1), new Ingredient('French Fries',20)]),
        new Recipe('Meat Balls', 'Anything tastier than a meatball?', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/03/13/rio-food-picanha.jpg?w968h681',[new Ingredient('buns',2) , new Ingredient('meat',1)])
    ];
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
        console.log(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
        console.log(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice()); 
    }
}