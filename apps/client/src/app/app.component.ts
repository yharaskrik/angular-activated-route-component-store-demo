import { Component, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, startWith, tap } from 'rxjs';

@Injectable()
class Store extends ComponentStore<any> {
  constructor(private _route: ActivatedRoute) {
    super();

    this.e$(this._route.params);
  }

  readonly e$ = this.effect((params$: Observable<Params>) =>
    params$.pipe(tap((params) => console.log('Root', params)))
  );
}

@Component({
  selector: 'route-ngrx-component-store-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Store],
})
export class AppComponent {
  constructor(private store: Store) {}}
