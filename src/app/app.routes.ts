import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Resources} from './resources/resources';
import {Staff} from './staff/staff';
import {Home} from './home/home';
import {Guidelines} from './guidelines/guidelines';
import {Review1Guidelines} from './review1-guidelines/review1-guidelines';
import {AssignmentSubmission} from './assignment-submission/assignment-submission';
import {DevopsGuideline} from './devops-guideline/devops-guideline';
import {DesignEngineering} from './design-engineering/design-engineering';
import { DesignEngineeringOverview } from './design-engineering/overview/overview';
import { DesignEngineeringLectures } from './design-engineering/lectures/lectures';
import { DesignEngineeringTools } from './design-engineering/tools/tools';



export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full' },
  { path: 'resources', component: Resources },
  { path: 'staff', component: Staff },
  { path: 'home', component: Home },
  { path: 'guidelines', component: Guidelines },
  { path: 'review1-guidelines', component: Review1Guidelines },
  { path: 'assignment-submission', component: AssignmentSubmission },
  { path: 'devops-guidelines', component: DevopsGuideline },
  { 
    path: 'design-engineering', 
    component: DesignEngineering,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: DesignEngineeringOverview },
      { path: 'lectures', component: DesignEngineeringLectures },
      { path: 'tools', component: DesignEngineeringTools }
     
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule {}