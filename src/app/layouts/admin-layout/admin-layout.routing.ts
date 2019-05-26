import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'admin/dashboard',      component: DashboardComponent },
    { path: 'admin/user-profile',   component: UserProfileComponent }
];
