import {Routes,RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

const APP_ROUTES:Routes = [    
    {path:'', redirectTo:'/about', pathMatch:'full'},   
    {path:'about',component:AboutComponent},
    {path:'service',component:ServicesComponent},
];
export const routing = RouterModule.forRoot(APP_ROUTES);