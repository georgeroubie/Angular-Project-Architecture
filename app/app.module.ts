// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Application Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// Application Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Angular Modules
    CommonModule,
    HttpClientModule,
    // Application Modules
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    // Application Components
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
