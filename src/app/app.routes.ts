import { Routes } from '@angular/router';
import { FrontendAccordionComponent } from './frontend-accordion/frontend-accordion.component';
import { NavComponent } from './nav/nav.component';
import { HexagonsComponent } from './hexagons/hexagons.component';

export const routes: Routes = [
    {path: '', component: NavComponent},
    {path: 'hex', component: HexagonsComponent}
];
