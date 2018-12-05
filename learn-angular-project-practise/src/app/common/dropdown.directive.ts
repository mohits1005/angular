import { Directive, OnInit, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  state: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}
    @HostListener('click', ['$event.target']) onClick(btn) {
        if (this.state) {
            //open
            this.state = false;
            this.renderer.removeClass(this.elRef.nativeElement, "open");
        } else {
            //close
            this.state = true;
            this.renderer.addClass(this.elRef.nativeElement, "open");
        }
    }
}