import { Component,OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
import '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rForm: FormGroup;
  show = true;
  result: any;
  plan:any;



  constructor(private fb: FormBuilder, private appService: AppService) {

    this.rForm = fb.group({
      downPayment : (''),
      downPaymentRound : (''),
      requiredArea : (''),
      startRound: (''),
      endRound: (''),
    });

  }

 submit(){
   const data = this.rForm.getRawValue();
   this.appService.myMethod(data)
   .subscribe((data: any) => {
    this.result = data;
    console.log(this.result)
    this.plan = data.installmentPlanDetails;
    console.log(this.plan)
    this.show= !this.show;
   }, error => {
     console.log('error');
   });
 }



 ngOnInit(): void {};

}
