import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './project_component/theme/not-found/not-found.component';
import { LoginComponent } from './project_component/theme/login/login.component';
import { AboutComponent } from './project_component/about/about.component';
import { HomeComponent } from './project_component/home/home.component';
import { MainComponent } from './project_component/theme/main/main.component';
import { ContactComponent } from './project_component/contact/contact.component';
import { SkillsComponent } from './project_component/skills/skills.component';
import { ExperienceComponent } from './project_component/experience/experience.component';
import { ProjectsComponent } from './project_component/projects/projects.component';
import { EducationComponent } from './project_component/education/education.component';
import { CeertificationComponent } from './project_component/ceertification/ceertification.component';
import { AwardComponent } from './project_component/award/award.component';
import { TrainingComponent } from './project_component/training/training.component';
import { EmailComponent } from './project_component/email/email.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'certification', component: CeertificationComponent },
      { path: 'award', component: AwardComponent },
      { path: 'contact', component: ContactComponent },

      { path: 'email', component: EmailComponent },

      { path: '**', component: NotFoundComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  //{ path: 'login', loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule) },
  { path: '**', component: MainComponent },
];


