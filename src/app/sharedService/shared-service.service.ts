import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
   displayMessage:any;
   r_message:any;
   currencyValue:any;
   r_currency:any;
  constructor() {}

  sendMessage(s_message:any){
    
      this.displayMessage = s_message;
    
    console.log(this.displayMessage)
  }
  recieveMessage(){
    return this.r_message = this.displayMessage;
  }
}
