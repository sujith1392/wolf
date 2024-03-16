import { Routes } from '@angular/router';
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

export const routes: Routes = [

  {title:"Admister stdos | Home",path:'' , component: HeaderComponent},
  {title:"Admister stdos | Home",path:'Home' , component: HeaderComponent},
  {title:"Admister stdos | About",path:'about' , component: AboutComponent},
  {title:"Admister stdos | Client",path:'client' , component: ClientsComponent},
  {title:"Admister stdos | Gallery",path:'Gallery' , component: GalleryComponent},
  {title:"Admister stdos | Pricing",path:'pricing' , component: PricingComponent},
  {title:"Admister stdos | Services",path:'services' , component: ServicesComponent},
  {title:"Admister stdos | Testmonials",path:'testmonials' , component: TestimonialsComponent},
  {title:"Admister stdos | notfound",path:'notfound' , component: NotfoundComponent},


];
