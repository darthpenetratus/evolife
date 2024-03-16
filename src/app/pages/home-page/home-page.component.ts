import { Component } from '@angular/core';
import { BackgroundComponent } from "../../shared/components/background/background.component";
import { NavbarComponent} from "../../shared/components/navbar/navbar.component";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BackgroundComponent, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("EvoLife | Home Page");
  }
}
