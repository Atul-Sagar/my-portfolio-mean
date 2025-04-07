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


  // skills = [
  //   { name: 'HTML', value: 5 },
  //   { name: 'CSS', value: 5 },
  //   { name: 'JavaScript', value: 5 },
  //   { name: 'Angular', value: 5 },
  //   { name: 'Node.js', value: 5 },
  //   { name: 'Express.js', value: 4 },
  //   { name: 'MySQL', value: 3 },
  //   { name: '.NET', value: 3 },
  //   { name: 'Python', value: 4 },
  //   { name: 'Golang', value: 3 },
  //   { name: 'Flutter', value: 3 },
  //   { name: 'Leadership', value: 4 },
  //   { name: 'Teamwork', value: 5 },
  //   { name: 'Communication (Improving)', value: 3 }
  // ];

  // skills = [
  //   { name: 'HTML', value: 5, icon: 'fa-brands fa-html5' },
  //   { name: 'CSS', value: 5, icon: 'fa-brands fa-css3-alt' },
  //   { name: 'JavaScript', value: 5, icon: 'fa-brands fa-js' },
  //   { name: 'Angular', value: 5, icon: 'fa-brands fa-angular' },
  //   { name: 'Node.js', value: 5, icon: 'fa-brands fa-node-js' },
  //   { name: 'Express.js', value: 4, icon: 'fa-solid fa-server' },
  //   { name: 'MySQL', value: 3, icon: 'fa-solid fa-database' },
  //   { name: '.NET', value: 3, icon: 'fa-brands fa-microsoft' },
  //   { name: 'Python', value: 4, icon: 'fa-brands fa-python' },
  //   { name: 'Golang', value: 3, icon: 'fa-solid fa-code' },
  //   { name: 'Flutter', value: 3, icon: 'fa-brands fa-google' }, // or custom SVG
  //   { name: 'Leadership', value: 4, icon: 'fa-solid fa-user-tie' },
  //   { name: 'Teamwork', value: 5, icon: 'fa-solid fa-people-group' },
  //   { name: 'Communication (Improving)', value: 3, icon: 'fa-solid fa-comments' }
  // ];



  skills = [
    { name: 'HTML', value: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', value: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', value: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Angular', value: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Node.js', value: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', value: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MySQL', value: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: '.NET', value: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'Python', value: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Golang', value: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Flutter', value: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Leadership', value: 4, icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
    { name: 'Teamwork', value: 5, icon: 'https://cdn-icons-png.flaticon.com/512/4228/4228703.png' },
    { name: 'Communication (Improving)', value: 3, icon: 'https://cdn-icons-png.flaticon.com/512/3416/3416078.png' }
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
