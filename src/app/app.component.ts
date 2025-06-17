import { AfterViewInit, Component, Inject } from '@angular/core';
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
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { trigger, transition, style, state, animate } from '@angular/animations';



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
    MatProgressBarModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'my-portfolio';

  posts = [
    { title: 'Introduction to Angular', link: '/blog/angular-intro' },
    { title: 'Using RxJS in Angular', link: '/blog/rxjs-angular' },
    { title: 'Deploying with Netlify', link: '/blog/deploy-netlify' }
  ];


  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {

  }

  visibleSkills: boolean[] = [];

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



  projects = [
    {
      title: 'Smart Care – SBI Life Insurance',
      description: `A customer-focused mobile app for SBI Life Insurance that enables real-time insurance claim tracking,
      document uploads, policy status viewing, and branch/service desk access.`,
      highlights: [
        'Built with Angular, integrated with RESTful APIs and secure auth flows',
        'Handled real-time updates for claim status and notifications',
        'Collaborated closely with QA and backend to ensure seamless policyholder experience',
      ],
      image: '', // optional local path or URL
      link: ''
    },
    {
      title: 'M-Connect – SBI Life Insurance',
      description: `An internal enterprise platform built for SBI Life Insurance to enhance agent productivity and
      streamline customer engagement through centralized policy management and task tracking.`,
      highlights: [
        'Developed modules for lead tracking, policy servicing, and notifications',
        'Integrated Angular front-end with secured APIs and role-based access control',
        'Improved system performance by optimizing API interaction and lazy loading',
      ],
      image: '',
      link: ''
    },
    {
      title: 'CLIP – Claims Investigation Portal',
      description: `An internal web-based portal for SBI Life Insurance to manage and streamline the claims
      investigation process, improving transparency, turnaround time, and case tracking.`,
      highlights: [
        'Developed Angular modules for case assignment, status tracking, and document management',
        'Integrated authentication, investigator dashboards, and role-based workflows',
        'Worked closely with backend and QA teams to ensure reliable end-to-end functionality',
      ],
      image: '',
      link: ''
    },
    {
      title: 'My Personal Portfolio',
      description: `A fully responsive personal portfolio website built using Angular and Angular Material,
      showcasing my projects, experience, and blog. Designed with performance, accessibility, and smooth animations in mind.`,
      highlights: [
        'Built with Angular, deployed via Netlify with custom domain',
        'Features smooth scroll navigation, mobile-first design, and theme customization',
        'SEO-optimized and integrated with GitHub and blogs hosted on a subdomain',
      ],
      image: '',
      link: ''
      // link: 'https://portfolio.axionix.in'
    },
    {
      title: 'Interviews Cracked',
      description: `A curated interview preparation platform built to help developers crack technical interviews with
      real-world questions, coding exercises, and structured topic-wise preparation.`,
      highlights: [
        'Built using Angular for frontend and Node.js for backend APIs',
        'Features question tagging, difficulty filters, bookmarks, and answer discussions',
        'Supports user authentication, personalized dashboards, and progress tracking',
      ],
      image: '',
      link: ''
      // link: 'https://axionix.in'
    },
    {
      title: 'Product Configurator',
      description: `A dynamic product configuration engine built for customizing insurance products based on user inputs,
      business rules, and eligibility conditions — generating real-time premium calculations and JSON outputs.`,
      highlights: [
        'Developed using Angular Reactive Forms with nested conditions and dynamic fields',
        'Integrated with business rule engine to support real-time decision logic',
        'Exported user configurations as styled JSON, suitable for APIs or documentation',
      ],
      image: '',
      link: ''
    }
  ];



  ngAfterViewInit() {
    const items = document.querySelectorAll('.skill-card');
    items.forEach((el, index) => {
      this.visibleSkills[index] = false;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.visibleSkills[index] = true;
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
    });
  }

  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }

  scrollTo(section: string) {

    if (section === 'Blog') {
      this.document.location.href = 'https://techblogs.axionix.in/';
    }

    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.showSidenav = false;

    // const element = this.document.getElementById(section);
    // if (element) {
    //   const headerOffset = 70; // Adjust this based on your actual header height
    //   const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    //   const offsetPosition = elementPosition - headerOffset;

    //   window.scrollTo({
    //     top: offsetPosition,
    //     behavior: 'smooth'
    //   });
    // }

    // this.showSidenav = false;

  }





  onIconError(event: any) {
    event.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; // Default icon URL
  }
}
