import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currencyForm: any;
  select: string = '';
  selectCurrency: any;


  // @Input() sendMessage:string | undefined;
  @Output() recieveMessage = new EventEmitter();
  selectChangeHandler(event: any) {
    this.select = event.target.value;
  }
  constructor() { }

  ngOnInit(): void {


  }
  submit() {
    if (this.select == "USD" || this.select == "EUR" || this.select == "AUD" || this.select == "CAD")
      this.recieveMessage.emit(this.select)
  }
}




