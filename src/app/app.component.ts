import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { trigger, transition, style, state, animate } from '@angular/animations';
import { MarkdownPipe } from './markdown.pipe';

export interface Skill {
  name: string;
  value: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    NgFor,
    NgIf,
    ReactiveFormsModule,
    RouterModule,
    MatProgressBarModule,
    MarkdownPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out')),
    ]),
  ],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'my-portfolio';
  showSidenav = false;
  visibleSkills: boolean[] = [];
  activeSkillTab = 'All';
  skillTabs = ['All', 'Management', 'Frontend', 'Backend', 'DevOps'];

  // ── Hero Stats ────────────────────────────────────────────
  heroStats = [
    { value: '5+', label: 'Years Experience' },
    { value: '4+', label: 'Enterprise Projects' },
    { value: '10+', label: 'Developers Mentored' },
    { value: 'BFSI', label: 'Domain Expertise' },
  ];

  // ── What I'm Looking For ──────────────────────────────────
  lookingFor = [
    {
      icon: 'manage_accounts',
      title: 'IT / Engineering Manager',
      desc: 'A role where I lead cross-functional teams, own delivery pipelines, and align technology with business outcomes.',
    },
    {
      icon: 'account_balance',
      title: 'BFSI or Fintech Domain',
      desc: 'I bring 5+ years of insurance-domain context — compliance, agent workflows, policy systems — and can hit the ground running.',
    },
    {
      icon: 'groups',
      title: 'Team-First Culture',
      desc: 'Organisations that invest in engineering excellence, mentorship, and sustainable delivery practices.',
    },
    {
      icon: 'hub',
      title: 'Hybrid or Remote',
      desc: 'Flexible work arrangements that allow for focused deep work while staying connected with the team.',
    },
  ];

  // ── Leadership Highlights ─────────────────────────────────
  leadershipItems = [
    {
      icon: 'groups',
      title: 'Team Leadership',
      desc: 'Mentored and guided junior developers at SBI Life, running regular code reviews, 1-on-1s, and onboarding sessions for new hires.',
    },
    {
      icon: 'task_alt',
      title: 'Project Ownership',
      desc: 'Owned full delivery lifecycle — from requirements gathering and architecture to deployment and post-release monitoring — on 4+ enterprise platforms.',
    },
    {
      icon: 'speed',
      title: 'Delivery Performance',
      desc: 'Reduced average API response times by 30% and deployment turnaround by 40% through microservices re-architecture and CI/CD automation.',
    },
    {
      icon: 'handshake',
      title: 'Stakeholder Management',
      desc: 'Coordinated directly with business, compliance, and UI/UX teams at SBI Life to translate requirements into scalable technical solutions.',
    },
    {
      icon: 'auto_awesome',
      title: 'Agile Champion',
      desc: 'Led sprint ceremonies — planning, standups, retrospectives, and reviews — keeping teams aligned and delivery on track.',
    },
    {
      icon: 'insights',
      title: 'Process Improvement',
      desc: 'Introduced reusable NPM libraries, architecture documentation standards, and automated CI/CD workflows that reduced manual effort across the team.',
    },
  ];

  // ── Skills ────────────────────────────────────────────────
  skills: Skill[] = [
    // Management
    { name: 'Team Leadership', value: 9, icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', category: 'Management' },
    { name: 'Project Planning', value: 9, icon: 'https://cdn-icons-png.flaticon.com/512/1484/1484861.png', category: 'Management' },
    { name: 'Agile & Scrum', value: 8, icon: 'https://cdn-icons-png.flaticon.com/512/5259/5259945.png', category: 'Management' },
    { name: 'Mentoring', value: 9, icon: 'https://cdn-icons-png.flaticon.com/512/428/428740.png', category: 'Management' },
    { name: 'Code Review', value: 9, icon: 'https://cdn-icons-png.flaticon.com/512/845/845646.png', category: 'Management' },
    { name: 'Communication', value: 8, icon: 'https://cdn-icons-png.flaticon.com/512/3416/3416078.png', category: 'Management' },
    { name: 'Problem Solving', value: 9, icon: 'https://cdn-icons-png.flaticon.com/512/2910/2910764.png', category: 'Management' },
    { name: 'Stakeholder Mgmt', value: 8, icon: 'https://cdn-icons-png.flaticon.com/512/4228/4228703.png', category: 'Management' },
    // Frontend
    { name: 'Angular', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'Frontend' },
    { name: 'TypeScript', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
    { name: 'JavaScript', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
    { name: 'HTML', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
    { name: 'CSS / SCSS', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    // Backend
    { name: 'Node.js', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Express.js', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
    { name: 'MongoDB', value: 8, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Backend' },
    { name: 'MySQL', value: 6, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Backend' },
    { name: 'Python', value: 7, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
    { name: 'REST APIs', value: 9, icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', category: 'Backend' },
    // DevOps
    { name: 'Git & GitHub', value: 9, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'DevOps' },
    { name: 'Docker', value: 7, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps' },
    { name: 'Jenkins', value: 7, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'DevOps' },
    { name: 'GitHub Actions', value: 7, icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', category: 'DevOps' },
  ];

  get filteredSkills(): Skill[] {
    if (this.activeSkillTab === 'All') return this.skills;
    return this.skills.filter(s => s.category === this.activeSkillTab);
  }

  // ── Experience ────────────────────────────────────────────
  experience = [
    {
      role: 'Assistant Manager – R&D Developer',
      company: 'SBI Life Insurance Company Ltd.',
      duration: 'Nov 2020 – Present',
      highlights: [
        'Promoted to **Assistant Manager**, overseeing a team of developers across enterprise web platform initiatives in the BFSI domain.',
        'Architected and led development of **M-Connect** — SBI Life\'s agent-facing platform — serving thousands of agents nationally, resulting in a measurable reduction in policy issuance time.',
        'Re-architected monolithic legacy systems into **microservices** using Node.js and Express, improving deployment speed by **40%** and system scalability.',
        'Optimised backend APIs through caching, async processing, and query tuning, reducing average response time by **30%**.',
        'Mentored and trained **10+ junior developers** in Angular best practices, Git workflows, and system design patterns.',
        'Automated **CI/CD pipelines** using Jenkins and GitHub Actions, eliminating manual deployment steps and enabling zero-downtime releases.',
        'Conducted regular **code reviews, performance audits, and security assessments** to maintain quality and compliance standards.',
        'Coordinated cross-functional R&D initiatives exploring **AWS Lambda, chatbot integrations, and OCR pipelines** for process automation.',
        'Delivered client-facing solutions directly collaborating with business, compliance, and UI/UX stakeholders.',
      ],
    },
  ];

  // ── Roles & Responsibilities ──────────────────────────────
  roles = {
    position: 'Assistant Manager / Tech Lead (MEAN Stack)',
    experience: '5+ years | Angular · Node.js · Express · MongoDB · BFSI Domain',
    responsibilities: [
      '**End-to-end project ownership** — from requirement analysis and architecture to deployment and post-release monitoring.',
      '**Team leadership** — daily standups, sprint planning, retrospectives, and performance mentoring for junior engineers.',
      'Designed scalable **MEAN stack architectures** with modular codebase standards and reusable component libraries.',
      'Implemented **RBAC, JWT authentication**, and API versioning across enterprise platforms handling sensitive insurance data.',
      'Drove **Agile delivery** — sprint ceremonies, backlog grooming, stakeholder demos, and release planning.',
      'Established **CI/CD workflows** using Jenkins and GitHub Actions; deployed on AWS EC2/Lambda, Docker, PM2.',
      'Maintained application health with **New Relic, ELK Stack**, and custom logging strategies.',
      'Designed and optimised **SQL** (MySQL, PostgreSQL) and **NoSQL** (MongoDB) schemas including indexing and migrations.',
      'Authored technical documentation, architecture diagrams, and onboarding guides to support team scaling.',
      'Explored emerging tech integrations: **AI/ML, chatbots, OCR, and cloud-native services** for R&D initiatives.',
    ],
  };

  // ── Projects ──────────────────────────────────────────────
  projects = [
    {
      title: 'M-Connect',
      description: '**Enterprise agent platform for SBI Life Insurance**, enabling seamless new business processing for agents nationwide. One of the most business-critical platforms in the company\'s distribution stack.',
      highlights: [
        'Led a team building **dynamic and reactive forms** handling complex insurance workflows across 10+ product types.',
        'Implemented **offline support** via IndexedDB and caching strategies — critical for agents in low-connectivity zones.',
        'Integrated **eKYC/CKYC services** and third-party document verification APIs, cutting manual verification time significantly.',
        'Converted to **PWA** — same codebase installable across desktop and mobile platforms.',
        'Delivered **Angular Material** UI aligned with SBI Life brand and compliance guidelines.',
      ],
      tags: ['Angular', 'Node.js', 'MongoDB', 'PWA', 'RBAC', 'IndexedDB', 'eKYC'],
      link: 'https://mconnect.sbilife.co.in',
    },
    {
      title: 'CLIP – Claims Investigation Portal',
      description: '**Internal portal for managing and tracking claims investigations** at SBI Life, improving transparency, turnaround time, and case accountability across 5 investigation types.',
      highlights: [
        'Built full investigator dashboard with **role-based workflows** and real-time case tracking.',
        'Designed **JWT-secured REST APIs** with fine-grained access control per investigator role.',
        'Integrated document upload, case notes, and approval chains covering the full investigation lifecycle.',
        'State persistence via **session storage and cookies** to maintain context across multi-step flows.',
      ],
      tags: ['HTML', 'JavaScript', 'Node.js', 'JWT', 'REST APIs', 'RBAC'],
      link: 'https://clip.sbilife.co.in',
    },
    {
      title: 'Insurance Product Configurator',
      description: '**No-code engine for creating and customising insurance products**, generating real-time premium calculations and JSON outputs with one-click integration into M-Connect, SmartCare, and Smart Advisor.',
      highlights: [
        'Built on **Angular Dynamic Reactive Forms** — non-technical product managers can configure new insurance products in minutes.',
        'Integrated test platform allowing product APIs to be validated before production deployment.',
        'Reduced product-launch cycle from weeks of engineering effort to a **same-day self-service workflow**.',
      ],
      tags: ['Angular', 'Dynamic Forms', 'Node.js', 'REST APIs', 'JSON Engine'],
      link: '',
    },
    {
      title: 'Personal Portfolio',
      description: '**Fully responsive portfolio** built with Angular and Angular Material, showcasing professional background, projects, and expertise. Optimised for performance, SEO, and accessibility.',
      highlights: [
        'Built with **Angular standalone components**, deployed via Netlify with custom GoDaddy domain.',
        'Features **scroll animations, mobile-first design**, and WebP-optimised assets.',
        'Custom **MarkdownPipe** for rendering rich content from TypeScript data structures.',
      ],
      tags: ['Angular', 'SCSS', 'Netlify', 'Angular Material', 'PWA'],
      link: 'https://portfolio.axionix.in',
    },
  ];

  // ── Core Values ───────────────────────────────────────────
  coreValues = [
    { icon: 'verified_user', title: 'Accountability', desc: 'I own outcomes end-to-end — no blame, no excuses, full responsibility.' },
    { icon: 'group_work', title: 'Collaboration', desc: 'Great products are built by teams. I invest in culture as much as code.' },
    { icon: 'trending_up', title: 'Continuous Growth', desc: 'I stay current — new frameworks, management thinking, and industry trends.' },
    { icon: 'flash_on', title: 'Focused Execution', desc: 'I prioritise ruthlessly and ship consistently. Deadlines are commitments.' },
    { icon: 'workspace_premium', title: 'Craftsmanship', desc: 'I care about code quality, documentation, and doing things the right way.' },
    { icon: 'balance', title: 'Sustainable Pace', desc: 'High performance is a marathon. I value work-life balance for myself and my teams.' },
  ];

  // ── Education ─────────────────────────────────────────────
  education = [
    { degree: 'MCA – Master of Computer Applications', institution: 'SIES College of Management Studies, Navi Mumbai', year: '2017 – 2020', score: 'CGPA: 6.5' },
    { degree: 'BSc Information Technology', institution: 'Saket College of Arts, Science & Commerce, Kalyan', year: '2013 – 2016', score: 'CGPA: 6.10' },
    { degree: 'HSC – Higher Secondary Certificate', institution: 'Saket College of Arts, Science & Commerce, Kalyan', year: '2011 – 2013', score: '51.50%' },
    { degree: 'SSC – Secondary School Certificate', institution: 'Ideal English High School, Kalyan', year: '2010 – 2011', score: '69.82%' },
  ];

  // ── Certifications ────────────────────────────────────────
  certifications = [
    { title: 'Flutter Developer Certification', issuer: 'Google / Udemy', year: '2020' },
  ];

  // ── Lifecycle ─────────────────────────────────────────────
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.visibleSkills = new Array(this.skills.length).fill(false);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const items = this.document.querySelectorAll('.skill-card');
      items.forEach((el, index) => {
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
    }, 100);
  }

  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }

  scrollTo(section: string) {
    if (section === 'Blog') {
      this.document.location.href = 'https://techblogs.axionix.in/';
      return;
    }
    this.document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.showSidenav = false;
  }

  onIconError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  }
}