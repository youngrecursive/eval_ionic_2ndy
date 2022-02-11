
export class OeuvreModel {
    public id: number;
  
    constructor(
      public name: string,
      public image: string,
      public lat: string,
      public long: string,
      public fav: boolean,
      public date: Date
    ) {
    }
  }