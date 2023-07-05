import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive(
  {
    selector:'[myDropDown]'
  })
export class CustomDropDown
{
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen()
  {
    this.isOpen = !this.isOpen;
  }
}
