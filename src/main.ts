import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppConfigService } from './app/shared/AppConfigService';
if (environment.production) {
  enableProdMode();
}
AppConfigService.loadConfig().then(() => {
  debugger
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});