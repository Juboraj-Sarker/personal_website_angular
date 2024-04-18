import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderBootstrapComponent } from '../header-bootstrap/header-bootstrap.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: 
  [
    RouterOutlet, 
    CommonModule,
    HeaderComponent,
    HeaderBootstrapComponent,
    MenuBarComponent,
    SliderComponent, 
    LeftSidebarComponent, 
    RightSidebarComponent,  
    FooterComponent,
    RouterModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(public router : Router){

  }
}
