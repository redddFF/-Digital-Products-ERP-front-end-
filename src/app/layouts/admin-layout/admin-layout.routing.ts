import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { BankingComponent } from 'src/app/pages/banking/banking.component';
import { InsuranceComponent } from 'src/app/pages/insurance/insurance.component';
import { AddProductComponent } from 'src/app/pages/add-product/add-product.component';
import { DetailsProductComponent } from 'src/app/pages/details-product/details-product.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'banking',        component: BankingComponent },
    { path: 'insurance',      component: InsuranceComponent },
    { path : 'add-product' ,  component:AddProductComponent},
    { path : 'details-product' ,  component:DetailsProductComponent}
];
