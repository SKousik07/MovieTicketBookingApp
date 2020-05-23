import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ArrayService } from '../service/array.service' ;
import{CardService} from '../service/card.service';
import {Cardint} from '../service/cardint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

     
  constructor( public cardService: CardService,private arrayService: ArrayService ,private router: Router) { 
    
    
   }
  
  //card: Cardint[];
 date : Date;
 time: string;
 
  
  ngOnInit()
    {
        
    }
   card : Cardint = this.arrayService.card;
       
   url: String =this.card.videolink;
   user: firebase.User=this.arrayService.user;
   
  movieTitle:string = this.card.Title;
    screen: string = "LUXE CINEMAS";
    

    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   

      reserved: string[]=this.card.Registered;
    
    // reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];

    
 selected: string[] = [];

    ticketPrice: number = 120;
    convFee: number = 30;
    totalPrice: number = 0;
    currency: string = "Rs";

    //return status of each seat
    getStatus = function(seatPos: string) {
        // console.log(this.reserved);
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    }
    //clear handler
    clearSelected = function() {
        this.selected = [];
    }
    //click handler
    seatClicked = function(seatPos: string) {
        //console.log(this.reserved);
        var index = this.selected.indexOf(seatPos);
        
        if(index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1)
        } else {
            //push to selected array only if it is not reserved
            if(this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    //Buy button handler
    showSelected = function() {
        //console.log(this.reserved);
        if(this.selected.length > 0) {
            alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
            this.updateItem(this.card);
            this.arrayService.selected=this.selected;
            this.arrayService.date=this.date;
            this.arrayService.cost=this.ticketPrice * this.selected.length + this.convFee;
            this.router.navigate(['payment']);
        } else {
            alert("No seats selected!");
        }
    }

    updateItem(card:Cardint){
        this.cardService.updatecard(card,this.reserved.concat(this.selected));
    }
}
