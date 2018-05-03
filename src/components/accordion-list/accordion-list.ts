import { Component, ElementRef, Input, Renderer, ViewChild } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'accordion-list',
  templateUrl: 'accordion-list.html'
})
export class AccordionListComponent {
  @Input() headerColor: string = '#3DF53D';
  @Input() textColor: string = '#FFF';
  @Input() contentColor: string = '#F9F9F9';
  @Input() title: string;
  @Input() hasMargin: boolean = true;
  @Input() expanded: boolean;

  @ViewChild('accordionContent') elementView: ElementRef;

  viewHeight: number;

  constructor(public renderer: Renderer) { }

  ngAfterViewInit() {
    if(this.expanded){
      var elementIcon = $(this.elementView.nativeElement.previousElementSibling.childNodes[0]);
      elementIcon.addClass("md-remove");
      elementIcon.removeClass("md-add");
      elementIcon.addClass("ion-md-remove");
      elementIcon.removeClass("ion-md-add");
      elementIcon.attr("name","md-remove");
      elementIcon.attr("aria-label","md-remove");
      elementIcon.attr("ng-reflect-name","md-remove"); 
    }else
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    
    if (!this.expanded) {
      this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
    }
  }

  toggleAccordion(obj) {
    this.expanded = !this.expanded;
    const newHeight = this.expanded ? '100%' : '0px';
    var elementIcon = $(this.elementView.nativeElement.previousElementSibling.childNodes[0]);
    console.log(elementIcon);
    console.log(this.elementView.nativeElement.previousElementSibling.childNodes[0]);
    
    if(this.expanded){
      elementIcon.addClass("md-remove");
      elementIcon.removeClass("md-add");
      elementIcon.addClass("ion-md-remove");
      elementIcon.removeClass("ion-md-add");
      elementIcon.attr("name","md-remove");
      elementIcon.attr("aria-label","md-remove");
      elementIcon.attr("ng-reflect-name","md-remove"); 
      
      
     console.log("add")
    }
    else{
      elementIcon.removeClass("md-remove");
      elementIcon.addClass("md-add");
      
      elementIcon.removeClass("ion-md-remove");
      elementIcon.addClass("ion-md-add");
      
      
      elementIcon.attr("name","md-add");
      elementIcon.attr("aria-label","md-add");
      elementIcon.attr("ng-reflect-name","md-add"); 
      
      console.log("removed")
    }
    this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
  }
 
}