import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators} from '@angular/forms';
import {Model} from '../../shared/Model';
import * as moment from "moment";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  sendForm:FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sendForm = this.fb.group ({
      colors: ["Colors"],
      size: ["Size"],
      number: ['100'],
      city: ["City"],
      delivery: ["Delivery"],
      date:[""]
    });
  }

  sendRequest() {
    
    let selectedDateFormated:string = moment(this.sendForm.value.date).format('DD.MM.YYYY');
    let size:string = this.sendForm.value.size;
    if (size=='Size') {size='0'};

    let dataToSend = new Model (this.sendForm.value.colors, +size, +this.sendForm.value.number,
        this.sendForm.value.city, this.sendForm.value.delivery, selectedDateFormated);
     
      console.log(dataToSend);
      
  }

  inc (incValue:number){
    let newValue = +this.sendForm.value.number + incValue;
    this.sendForm.patchValue({
      number:newValue
    })
    return false;
  }

}
