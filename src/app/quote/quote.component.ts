import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  initialUpVote=0;
  initialDownVote=0;
quotes: Quote[]=[
  new Quote(1,"this is quote one","newton","david"),
  new Quote(2,"this is quote two","james","peter"),
  new Quote(3,"this is quote three","stephen","hawkins"),
  new Quote(4,"this is quote four","john","samuel"),
  new Quote(5,"this is quote five","peter","moses"),
];

deleteQuote(isComplete,index){
  if(isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].myquote} ?`)
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
}
toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  this.quotes.push(quote);

}
  constructor() { }

  ngOnInit(): void {
  }

}
