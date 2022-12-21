export class navItem{
    title : string = '';
    to : string = '';
    //  show in navigation
    showNavigation : boolean = false;
    active : boolean = false
    isPublic : boolean = false

    constructor(title: string, to: string, show: boolean = false, isPublic: boolean = false) {
      this.title = title;
      this.to = to;
      this.showNavigation = show
      this.isPublic = isPublic;
    }

    toJSON () {
      return { ...this } // here I make a POJO's copy of the class instance
    }
  }