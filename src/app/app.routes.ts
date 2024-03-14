import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HexagonsComponent } from './hexagons/hexagons.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { LeerpadComponent } from './leerpad/leerpad.component';

export const routes: Routes = [
    // {path: '', component: NavComponent},
    {path: '', component: LeerpadComponent},
    {path: 'hex', component: HexagonsComponent},
    {path: 'posts', component: PostsTableComponent}
];
