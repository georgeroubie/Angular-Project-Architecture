// Create a CoreModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations.

// Angular Modules
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Application Interceptors
import { DummyInterceptor } from './interceptors/dummy-interceptor';
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
			multi: true,
			provide: HTTP_INTERCEPTORS,
			useClass: DummyInterceptor
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
				// Application Services

				// Application Utilities

				// Application Factories

				// Application Guards

			]
		};
	}
}
