import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  imports: [CommonModule, BusinessRoutingModule],
  declarations: [BusinessComponent]
})
export class BusinessModule {}
