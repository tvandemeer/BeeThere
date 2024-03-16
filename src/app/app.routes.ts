import { Routes } from '@angular/router';
import { LeerpadComponent } from './leerpad/leerpad.component';
import { PathDetailComponent } from './path-detail/path-detail.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';

export const routes: Routes = [
    {path: '', component: LeerpadComponent},
    {path: 'path/:id', component: PathDetailComponent},
    {path: 'resources', component: ResourcesListComponent}
];
