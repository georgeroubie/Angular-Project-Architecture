// Angular Modules
import { Injectable } from '@angular/core';
// Application Environment
import { environment } from 'src/environments/environment';

@Injectable()
export class Constants {
	// APPLICATION
	public readonly APP_NAME: string = environment.APP_NAME;
	public readonly APP_PREFIX: string = environment.APP_PREFIX;
	public readonly APP_HOME: string = environment.APP_HOME;

	// API
	public readonly API_ENDPOINT: string = environment.API_ENDPOINT;

	// AUTHENTICATION
	public readonly AUTHORITY: string = environment.AUTHORITY;
}
