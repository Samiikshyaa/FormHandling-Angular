import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authenticateGuardGuard } from './guard/authenticate-guard.guard';

export const routes: Routes = [
    {
        title: "Home",
        path:"",
        component:UserlistComponent,
        canActivate: [authenticateGuardGuard]  
    },{
        path:"user",
        component:SingleuserComponent
    },
    {
        path:"userlist",
        component:UserlistComponent,  
    },{
        path:"login",
        component:LoginComponent
    },{
        path: "register",
        component:RegisterComponent
    }
];
