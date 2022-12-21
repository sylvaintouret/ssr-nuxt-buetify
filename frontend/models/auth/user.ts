export class User{
    email : string = '';
    picture? : string = '';
    loggedIn : boolean = false;
    createdAt : string = '';

    public constructor(data : any = {}){
      this.email = data.email || '';
      this.picture = data.picture || '';
      this.loggedIn = data.loggedIn || '';
      this.createdAt = data.createdAt || '';
    }

  }
