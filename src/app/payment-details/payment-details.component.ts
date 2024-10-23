import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {
  detailsOfEmployee = [{name: "Ozo", Age: 25, Dob: "31-05-1999"}, {name: "Arinze", Dob: "09-11-1997"}]

  getUsers() {
    return this.detailsOfEmployee;
  }
}
