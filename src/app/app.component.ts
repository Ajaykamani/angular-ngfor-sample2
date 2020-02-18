import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  books = [ 
    {
      title: 'Awesome Novel 1',
      description: 'Short Description of awesome novel 1'
    },
    {
      title: 'Awesome Novel 2',
      description: 'Short Description of awesome novel 2'
    },
    {
      title: 'Awesome Novel 3',
      description: 'Short Description of awesome novel 3'
    },
    {
      title: 'Awesome Novel 4',
      description: 'Short Description of awesome novel 4'
    },
    {
      title: 'Awesome Novel 5',
      description: 'Short Description of awesome novel 5'
    }
  ];
  

  favs = [ 
    {
      title: 'Fav Novel 1',
      description: 'Short Description of awesome novel 1'
    },
    {
      title: 'Fav Novel 2',
      description: 'Short Description of awesome novel 2'
    },
   
  ]

  viewTab = 'someothertab';

}

