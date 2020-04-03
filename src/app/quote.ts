export class Quote {
  showDescription: boolean;
  constructor(public id: number,public myquote: string,public author: string, public person: string){
  this.showDescription=false;

  }
}
