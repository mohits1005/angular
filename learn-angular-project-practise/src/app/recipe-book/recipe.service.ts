import { EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService{
    loadRecipe = new EventEmitter<{ recipe: Recipe }>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://gdsit.cdn-immedia.net/2017/01/CARNE-625x350.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://gdsit.cdn-immedia.net/2017/01/CARNE-625x350.jpg')
    ];
    getRecipes(){
        return this.recipes.slice();
    }
}