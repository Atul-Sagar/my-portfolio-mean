import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    FormsModule,
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';


  skills = [
    { name: 'HTML', value: 5 },
    { name: 'CSS', value: 5 },
    { name: 'JavaScript', value: 5 },
    { name: 'Angular', value: 5 },
    { name: 'Node.js', value: 5 },
    { name: 'Express.js', value: 4 },
    { name: 'MySQL', value: 3 },
    { name: '.NET', value: 3 },
    { name: 'Python', value: 4 },
    { name: 'Golang', value: 3 },
    { name: 'Flutter', value: 3 },
    { name: 'Leadership', value: 4 },
    { name: 'Teamwork', value: 5 },
    { name: 'Communication (Improving)', value: 3 }
  ];
  showSidenav = false;

  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.showSidenav = false;
  }
}
