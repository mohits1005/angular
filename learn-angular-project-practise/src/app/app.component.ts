import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesClicked = true;
  shoppingListClicked = false;
  onRecipesClicked(){
    console.log('Recipes Clicked');
    this.recipesClicked = true;
    this.shoppingListClicked = false;
  }
  onShoppingListClicked(){
    console.log('Shopping List Clicked');
    this.recipesClicked = false;
    this.shoppingListClicked = true;
  }
}
  