import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { MessageComponent } from '../message/message.component';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArrayService } from "../service/array.service";
import { Cardint } from '../service/cardint';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private  dialog:  MatDialog,private arrayService: ArrayService,public router: Router) { }

  ngOnInit() {
  }
  


  card : Cardint = this.arrayService.card;
  date: string= this.arrayService.date;
  selected: string[]=this.arrayService.selected;
  cost: number=this.arrayService.cost;
  email:string;
  UserForm(form: NgForm) {
    let name = form.value.user_name;
    let mobile_no = form.value.user_mobile;
    let email = form.value.user_email;
    let user = {
      user_email: email,
      mobile: mobile_no,
      user_name: name
    }

  }
  msg(){
      this.router.navigate(['message']);
  }
  
  
  }

