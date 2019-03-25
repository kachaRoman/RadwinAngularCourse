import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



interface ITestable {
  doIt(): string;
}

function test(x: ITestable) {

}

class Testable implements ITestable {
  doIt() {
    return '';
  }
}

// test(new Testable());
test({ doIt: () => 'asd' });


