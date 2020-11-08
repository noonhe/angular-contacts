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

  openContact(){
    // openContacts();
    var api = navigator.contacts;
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
        
    }else {
      console.log('Contacts API not supported.');
    }
  }
  
}
