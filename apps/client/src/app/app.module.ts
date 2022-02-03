import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RoutedComponent } from './routed/routed.component';
import { SecondroutedComponent } from './secondrouted/secondrouted.component';

@NgModule({
  declarations: [AppComponent, RoutedComponent, SecondroutedComponent],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: ':params',
          component: RoutedComponent,
          children: [
            {
              path: ':second',
              component: SecondroutedComponent,
            },
          ],
        },
      ],
      {
        paramsInheritanceStrategy: 'always',
      }
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
