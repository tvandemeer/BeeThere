import { Routes } from '@angular/router';
import { FrontendAccordionComponent } from './frontend-accordion/frontend-accordion.component';
import { NavComponent } from './nav/nav.component';
import { HexagonsComponent } from './hexagons/hexagons.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { FrontendModulesComponent } from './frontend-modules/frontend-modules.component';

export const routes: Routes = [
    // {path: '', component: NavComponent},
    {path: '', component: NavComponent},
    {path: 'hex', component: HexagonsComponent},
    {path: 'posts', component: PostsTableComponent}
];
