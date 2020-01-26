// Create a CoreModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations.

// Angular Modules
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Application Interceptors

// Application Constants
import { Constants } from '../config/constants';
// Application Services

// Application Utilities

// Application Factories

// Application Guards


@NgModule({
	imports: [
		// Angular Modules
		CommonModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: NameOfYourInterceptor,
			multi: true
		}
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				// Application Constants
				Constants
				// Application Services

				// Application Utilities

				// Application Factories

				// Application Guards

			]
		}
	}
}
