import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as contadorActions from './contador/contador.actions';
import { AppState } from './contador.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    const action = new contadorActions.IncrementarAction();
    this.store.dispatch( action );
  }

  decrementar() {
    const action = new contadorActions.DecrementarAction();
    this.store.dispatch( action );
  }
}
