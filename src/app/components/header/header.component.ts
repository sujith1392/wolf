import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  header = {
    title: "Landing page",
    description: "SIMPLE LANDING PAGE",
    url: "Landing page template\npersonal and commercial",
    buttonnext: "Start creating"
  }

}
