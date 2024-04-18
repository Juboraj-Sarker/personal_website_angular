import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public email = 'juborajfreelancer@gmail.com';
  public email2 = 'juborajcse@gmail.com';
  constructor() {}
}
