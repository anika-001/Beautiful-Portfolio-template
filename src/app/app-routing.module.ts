import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "navbar",
    component: NavbarComponent
  },
  {
    path: "about",
    component: AboutMeComponent
  },
  {
    path: "contact",
    component: ContactMeComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "footer",
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
