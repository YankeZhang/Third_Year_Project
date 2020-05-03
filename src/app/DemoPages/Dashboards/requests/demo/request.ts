
export class Request {
  public id: number;
  public date: string;
  public name:string;
  
  public type:string;
  public topic:string;
  public state:string;
  constructor(
    id: number,
    date: string,
    name:string,
    
    type:string,
    topic:string,
    state:string,
  ){
    this.id = id;
    this.date= date;
    this.name = name;
    
    this.type= type;
    this.topic = topic;
    this.state = state;
  }
}
