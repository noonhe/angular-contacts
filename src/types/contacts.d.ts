interface NavigatorContacts{
    readonly contacts : ContactsManager
  }
    
  interface ContactsManager {
    getProperties() : Promise<string[]>;
    select(properties:string[], options?:any) : Promise<any>;
  }
  
  interface Navigator extends NavigatorContacts{}