export class User{
    email : string = '';
    picture : string = 'carbon:user';
    loggedIn : boolean = false;
    createdAt : string = '';

    public constructor(data : any = {}){
      this.email = data.email || '';
      this.picture = data.picture || 'carbon:user' ;
      this.loggedIn = data.loggedIn || '';
      this.createdAt = data.createdAt || ''; 
    }

    toJSON () {
      return { ...this } // here I make a POJO's copy of the class instance
    }

  }
