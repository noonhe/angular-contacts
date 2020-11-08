import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contacts-angular';
  supported = null
  constructor(){

  }
  ngOnInit(){
    
  }
  openContacts(){
  this.supported = ('contacts' in navigator && 'ContactsManager' in window);
  var api = (navigator.contacts || navigator.mozContacts);
  console.log(api)
  if (api && !!api.select) { // new Chrome API
    api.select(['name', 'email'], {multiple: true})
      .then(function (contacts) {
        console.log('Found ' + contacts.length + ' contacts.');
        if (contacts.length) {
          console.log('First contact: ' + contacts[0].name + ' (' + contacts[0].email + ')');
        }
      })
      .catch(function (err) {
        console.log('Fetching contacts failed: ' + err.name);
      });
      
  } else if (api && !!api.find) { // old Firefox OS API
    var criteria = {
      sortBy: 'familyName',
      sortOrder: 'ascending'
    };

    api.find(criteria)
      .then(function (contacts) {
        console.log('Found ' + contacts.length + ' contacts.');
        if (contacts.length) {
          console.log('First contact: ' + contacts[0].givenName[0] + ' ' + contacts[0].familyName[0]);
        }
      })
      .catch(function (err) {
        console.log('Fetching contacts failed: ' + err.name);
      });
      
  } else {
    console.log('Contacts API not supported.');
  }
  }
}
