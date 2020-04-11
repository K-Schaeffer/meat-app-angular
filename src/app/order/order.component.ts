import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Cash', value: 'MON' },
    { label: 'Debit', value: 'DEB' },
    { label: 'Credit', value: 'CRED' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
