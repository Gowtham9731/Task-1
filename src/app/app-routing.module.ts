import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './MainPageLayout/header/header.component';
import { FooterComponent } from './MainPageLayout/footer/footer.component';
import { WelcomeComponent } from './MainPageLayout/welcome/welcome.component';
import { AirExportComponent } from './pageLayouts/air-export/air-export.component';
import { AirImportComponent } from './pageLayouts/air-import/air-import.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'airExport', component:AirExportComponent},
  {path:'airImport', component:AirImportComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

