import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import { BankingComponent } from 'src/app/pages/banking/banking.component';
import { InsuranceComponent } from 'src/app/pages/insurance/insurance.component';

import { DetailsProductComponent } from 'src/app/pages/details-product/details-product.component';
import { AddProductInsuranceComponent } from 'src/app/pages/add-product-insurance/add-product-insurance.component';
import { AddProductBankComponent } from 'src/app/pages/add-product-bank/add-product-bank.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'banking/1',        component: BankingComponent },
    { path: 'insurance/2',      component: InsuranceComponent },
    { path : 'banking/1/add-product' ,  component:AddProductBankComponent},
    { path : 'insurance/2/add-product' ,  component:AddProductInsuranceComponent},
    { path : 'details-product/:id' ,  component:DetailsProductComponent}
];
