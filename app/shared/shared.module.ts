// This module should consist entirely of declarations, most of them exported.
// The SharedModule may re-export other widget modules, such as CommonModule, FormsModule, and modules with the UI controls that you use most widely.
// Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.

// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Application Pipes

// Application Components


@NgModule({
	declarations: [
		// Application Pipes

		// Application Components

	],
	exports: [
		// Angular Modules
		CommonModule,
		FormsModule,
		// Application Pipes

		// Application Components

	],
	imports: [
		// Angular Modules
		CommonModule,
		FormsModule
	]
})
export class SharedModule { }
