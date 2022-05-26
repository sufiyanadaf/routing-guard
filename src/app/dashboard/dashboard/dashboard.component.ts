import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectForm: any;
  name = "sufiya"
  sendMessage: any;
  value: any;
  message: any;
  result: any;
  input: any;
  
  constructor() { }

  ngOnInit(): void {
    this.selectForm = new FormGroup({
      'input': new FormControl("", [Validators.required, Validators.pattern(/^[0-9]|d*$/)])
    })
  }
  sendData() {
    this.sendMessage = this.name
  }
  recieveMessage(event: any) {
    this.value = event;
    console.log(this.value)
  }
  submit() {
    if (this.value == "USD") {
      this.result = this.input * 77.4
      console.log(this.input)
    }
    if (this.value == "EUR") {
      this.result = this.input * 82.63
    }
    if (this.value == "AUD") {
      this.result = this.input * 54.81
    }
    if (this.value == "CAD") {
      this.result = this.input * 60.42
    }
  }

}

