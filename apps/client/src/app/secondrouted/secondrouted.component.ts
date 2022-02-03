import {Component, Injectable, OnInit} from '@angular/core';
import {ComponentStore} from "@ngrx/component-store";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, tap} from "rxjs";

@Injectable()
class Store2 extends ComponentStore<any> {
  constructor(private _route: ActivatedRoute) {
    super();

    this.e$(this._route.params);
  }

  readonly e$ = this.effect((params$: Observable<Params>) =>
    params$.pipe(tap((params) => console.log('Second', params)))
  );
}

@Component({
  selector: 'route-ngrx-component-store-test-secondrouted',
  templateUrl: './secondrouted.component.html',
  styleUrls: ['./secondrouted.component.scss'],
  providers: [Store2],
})
export class SecondroutedComponent {
  constructor(private store: Store2) {}
}
