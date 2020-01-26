// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Application Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { LogonModule } from './logon/logon.module';
// Application Components
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		// Angular Modules
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		// Application Modules
		CoreModule.forRoot(),
		AppRoutingModule,
		MainModule,
		LogonModule
	],
	declarations: [
		// Application Components
		AppComponent
	],
	bootstrap: [
		// Application Components
		AppComponent
	]
})
export class AppModule { }
