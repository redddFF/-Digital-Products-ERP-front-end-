import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';


import { DetailsProductComponent } from 'src/app/pages/details-product/details-product.component';

import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { AddCatalogComponent } from 'src/app/pages/add-catalog/add-catalog.component';
import { DisplayCatalogComponent } from 'src/app/pages/display-catalog/display-catalog.component';
import { AddProductComponent } from 'src/app/pages/add-product/add-product.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { UpdateCatalogComponent } from 'src/app/pages/update-catalog/update-catalog.component';
import { UpdateProductComponent } from 'src/app/pages/update-product/update-product.component';
import { AuthGuard } from 'src/app/Auth/guard/auth.guard';






export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard]},
    { path:  'catalog/:id',        component: DisplayCatalogComponent, canActivate: [AuthGuard]},
    { path : 'catalog/:id/add-product' ,  component:AddProductComponent, canActivate: [AuthGuard]},
    { path : 'catalog/:id_catalog/details-product/:id_product' ,  component:DetailsProductComponent, canActivate: [AuthGuard]},
    { path : 'settings' ,  component:SettingsComponent, canActivate: [AuthGuard]},
    { path : 'settings/catalogs/add-catalog' ,  component:AddCatalogComponent, canActivate: [AuthGuard]},
    { path : 'settings/catalogs/:id/update-catalog' ,  component:UpdateCatalogComponent, canActivate: [AuthGuard]},
    { path : 'product/:id_product/update' ,  component:UpdateProductComponent, canActivate: [AuthGuard]}
];
