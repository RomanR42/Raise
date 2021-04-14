import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  openedContent:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  toggle (i:number) {
        
   let divsContent:HTMLCollection = document.getElementsByClassName('slider-content-second');
   let liItems:HTMLCollection = document.getElementsByClassName('second-slider');

   divsContent[this.openedContent]['style'].display = 'none';
   liItems[this.openedContent].classList.remove ('slider-container__slider-item-active');

   divsContent[i]['style'].display = 'block';
   liItems[i].classList.add ('slider-container__slider-item-active');
   this.openedContent = i;
  }
}
