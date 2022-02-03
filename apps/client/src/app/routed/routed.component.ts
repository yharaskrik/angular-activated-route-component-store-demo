import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, startWith, tap } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';

@Injectable()
class Store1 extends ComponentStore<any> {
  constructor(private _route: ActivatedRoute) {
    super();

    this.e$(this._route.params);
  }

  readonly e$ = this.effect((params$: Observable<Params>) =>
    params$.pipe(tap((params) => console.log('First', params)))
  );
}

@Component({
  selector: 'route-ngrx-component-store-test-routed',
  templateUrl: './routed.component.html',
  styleUrls: ['./routed.component.scss'],
  providers: [Store1],
})
export class RoutedComponent {
  constructor(private store: Store1) {}
}
