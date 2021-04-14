import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  openedContent:number = 0;
  constructor() { }

  ngOnInit(): void {
   
  }

  toggle (i:number) {
   let divsContent:HTMLCollection = document.getElementsByClassName('slider-content');
   let liItems:HTMLCollection = document.getElementsByClassName('slider-container__slider-item');

   divsContent[this.openedContent]['style'].display = 'none';
   liItems[this.openedContent].classList.remove ('slider-container__slider-item-active');

   divsContent[i]['style'].display = 'block';
   liItems[i].classList.add ('slider-container__slider-item-active');
   this.openedContent = i;
  }

}
