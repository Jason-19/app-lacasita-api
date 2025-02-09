import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductComponent } from './products/product-list/product.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { OrdersComponent } from './orders/order/order.component';
import { SinginComponent } from './auth/singin/singin.component';
import { MenuComponent } from './menu/menu/menu.component';
import { EditComponent } from './products/product-edit/edit.component';
import { CreateComponent } from './products/product-create/create.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { EditMenuComponent } from './menu/edit-menu/edit-menu.component';



export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent},
    { path: "singin", component: SinginComponent},
    { path:'products',component: ProductComponent},
    { path:'users',component: CustomerComponent},
    { path:'orders',component: OrdersComponent},
    { path:'order/edit',component: EditOrderComponent},
    { path:'menu',component: MenuComponent},
    { path:'product/:id',component: EditMenuComponent},
    { path:'edit/product',component: EditComponent},
    { path:'create/product',component: CreateComponent},

]