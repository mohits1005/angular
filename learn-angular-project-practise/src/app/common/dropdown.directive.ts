import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective{
  state: boolean = false;
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') onClick() {
      this.isOpen = !this.isOpen;
  }
}