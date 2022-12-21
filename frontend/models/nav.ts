export class navItem{
    title : string = '';
    to : string = '';
    //  show in navigation
    showNavigation : boolean = false;
    active : boolean = false
    constructor(title: string, to: string, show: boolean = false) {
      this.title = title;
      this.to = to;
      this.showNavigation = show
    }
  }