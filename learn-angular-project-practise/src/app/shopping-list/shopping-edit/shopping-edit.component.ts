import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs';
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  // @ViewChild("nameInput") nameInputRef: ElementRef;
  // @ViewChild("amountInput") amountInputRef: ElementRef;
  @Output() addIngredient = new EventEmitter<{ newIngredient: Ingredient }>();
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      } 
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.addIngredient.emit({ newIngredient });
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    }
    else
    {
      this.shoppingListService.addButtonClicked(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
