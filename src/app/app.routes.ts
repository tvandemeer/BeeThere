import { Routes } from '@angular/router';
import { LeerpadComponent } from './leerpad/leerpad.component';
import { PathDetailComponent } from './path-detail/path-detail.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';

export const routes: Routes = [
    {path: '', component: LeerpadComponent},
    {path: 'path/:id', component: PathDetailComponent},
    {path: 'module/:id', component: ModuleDetailComponent},
    {path: 'resources', component: ResourcesListComponent},
    {path: 'resource/detail', component: ResourceDetailComponent}
];
