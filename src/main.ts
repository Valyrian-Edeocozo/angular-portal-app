import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PaymentDetailsComponent } from './app/payment-details/payment-details.component';

bootstrapApplication(PaymentDetailsComponent, appConfig)
  .catch((err) => console.error(err));
  