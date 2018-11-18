import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() recipesClicked = new EventEmitter<{}>();
    @Output() shoppingListClicked = new EventEmitter<{}>();
    onClickRecipes(){
        // console.log('Recipes Clicked');
        this.recipesClicked.emit({});
    }
    onClickShoppingList(){
        // console.log('Shopping List Clicked');
        this.shoppingListClicked.emit({});
    }
}
