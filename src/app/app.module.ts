import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeNavigationComponent } from "./home-navigation/home-navigation.component";
import { AuthService } from "./services/auth.service";
import { ProductService } from "./services/product.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
//import { ReceptionistNavigationComponent } from "./receptionist-navigation/receptionist-navigation.component";
import { ProductsComponent } from "./products/products.component";
//import { ReceptionistProductsComponent } from "./receptionist-products/receptionist-products.component";
/*import { MenSuitsFormComponent } from "./men-suits-form/men-suits-form.component";
import { TightsFormComponent } from "./tights-form/tights-form.component";
import { AccessoriesFormComponent } from "./accessories-form/accessories-form.component";*/
//import { ReceprionistProductsEditComponent } from "./receprionist-products-edit/receprionist-products-edit.component";
import { ReceptionistProductsModule } from "./receptionist-products/receptionist-products.module";
import { LoginComponent } from './auth/login/login.component';
import { MeasurementsTableComponent } from './customer-top-measurements/customer-top-measurements.component';
import { AdminComponent } from './admin/admin.component';
import { HelperComponent } from './helper/helper.component';
import { CustomerBottomMeasurementsComponent } from './customer-bottom-measurements/customer-bottom-measurements.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HomeNavigationComponent,
    //ReceptionistNavigationComponent,
    ProductsComponent,
    LoginComponent,
    MeasurementsTableComponent,
    AdminComponent,
    HelperComponent,
    CustomerBottomMeasurementsComponent
    //ReceptionistProductsComponent,
    /*MenSuitsFormComponent,
    TightsFormComponent,
    AccessoriesFormComponent,*/
    //ReceprionistProductsEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReceptionistProductsModule,
    RouterModule.forRoot([
      {
        component: HomeComponent,
        // tslint:disable-next-line:quotemark
        path: ""
      },
      {
        component: RegisterComponent,
        path: "Register"
      },
      {
        component: ProductsComponent,
        path: "Products"
      }
      /*{
        component: ReceprionistProductsEditComponent,
        path: "Receptionistproductedit"
      }
      /*  {
        component: ReceptionistProductsComponent,
        path: "Receptionist",
        children: [
          {
            component: MenSuitsFormComponent,
            path: "suitform/:title",
            outlet: "addProducts"
          },
          {
            path: "tightsform/:title",
            component: TightsFormComponent,
            outlet: "addProducts"
          },
          {
            component: AccessoriesFormComponent,
            path: "accessoriesform/:title"/*,
            outlet: "addProducts"*/
      /*  }
        ]
      },*/
      /*{
        path: "aaa",
        component: TightsFormComponent,
        outlet: "addProducts"
      }*/
    ])
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
