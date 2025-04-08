import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
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
    RouterModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';

  posts = [
    { title: 'Introduction to Angular', link: '/blog/angular-intro' },
    { title: 'Using RxJS in Angular', link: '/blog/rxjs-angular' },
    { title: 'Deploying with Netlify', link: '/blog/deploy-netlify' }
  ];
  
  markdownContent = `
  ### Blog Posts
  
  - [Introduction to Angular](/blog/angular-intro)
  - [Using RxJS in Angular](/blog/rxjs-angular)
  - [Deploying with Netlify](/blog/deploy-netlify)
  `;

  blogs = [
    { title: 'Intro to Angular', slug: 'intro-to-angular' },
    { title: 'Mastering RxJS', slug: 'mastering-rxjs' },
    { title: 'Understanding NgModules', slug: 'understanding-ngmodules' },
  ];

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
