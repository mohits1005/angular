import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addIngredient = new EventEmitter<{ newIngredient: Ingredient }>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddButton()
  {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    // this.addIngredient.emit({ newIngredient });
    this.shoppingListService.addButtonClicked(newIngredient);
  }

}
