import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';




@Component({
    selector: 'app-root',
    standalone: true,

    imports: [RouterOutlet, NavComponent, FooterComponent, HeaderComponent, AboutComponent, ClientsComponent, GalleryComponent, 
      NotfoundComponent, PricingComponent, ServicesComponent, TestimonialsComponent, CommonModule, RouterLink, RouterLinkActive],

      templateUrl: './app.component.html',
      styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'wolf';
}
