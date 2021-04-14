import { Component, HostListener, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
    if (window.innerWidth <= 1050 && window.innerWidth > 670) {
      $('.carusel')['slick']({
      
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerMode: true
        
        });
        return;
    }

    if (window.innerWidth <= 670) {
     
      $('.carusel')['slick']({
        
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        
        });
       
        return;
    }
    
    $('.carusel').slick({
      
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      
      
      });
      
    
  }
 
  // @HostListener ('window:resize', ['$event'])
  // sizeChange(event) {
   
  //   if (window.innerWidth > 1000 && window.innerWidth <1100) {
  //     window.location.reload();
  //   }

  //   if (window.innerWidth > 653 && window.innerWidth <700) {
  //     window.location.reload();
  //   }

  // }

  
}
  


