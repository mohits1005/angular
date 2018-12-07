import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild("nameInput") nameInputRef: ElementRef;
  // @ViewChild("amountInput") amountInputRef: ElementRef;
  @Output() addIngredient = new EventEmitter<{ newIngredient: Ingredient }>();
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.addIngredient.emit({ newIngredient });
    this.shoppingListService.addButtonClicked(newIngredient);
  }
}
