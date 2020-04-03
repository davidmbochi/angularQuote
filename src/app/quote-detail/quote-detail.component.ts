import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  upvote=0;
  downvote=0;
  @Input() quote: Quote;
  @Output() isComplete =new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVote(){
  this.upvote=this.upvote+1;
  }
  downVote(){
  this.downvote=this.downvote+1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
