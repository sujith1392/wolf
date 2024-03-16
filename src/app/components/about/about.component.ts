import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  about = {
    title: "Success",
    description: "Help you to sell the product",
    detail: "How to start the product \nabout product details",
    buttonnext: "Start creating",
    Iconblock: [
      {id: 1, icon:"fa-html5",title:"HTML5 &amp; CSS3", description:"about "},
      {id: 2, icon:"fa-bold",title:"Easy to Use", description:"very simple to use the \nproduct"},

      {id: 3, icon:"fa-tablet",title:"Fully Responsive", description:"can be responsive in \nall"},
      {id: 4, icon:"fa-rocket",title:"Parallax Effect", description:"can be effective \nparallax"}
    ]
  }

}
