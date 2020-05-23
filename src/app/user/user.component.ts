import { Component, OnInit, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {ArrayService } from '../service/array.service' 
import { Cardint } from '../service/cardint';
import { CardService } from '../service/card.service';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  cards: Cardint[];
  mySubscription: any;

  constructor(public auth: AuthService , private arrayService: ArrayService, public cardService: CardService,private router: Router,) {


  }

  ngOnInit() {
    this.cardService.getcards().subscribe( cards => {
      this.cards=cards;
  })
  }

book='BookNow'

  onUserClick(card)
  {
      this.arrayService.card = card;
  }
 
}
