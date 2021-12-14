import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BankListComponent} from './components/bank-components/bank-list/bank-list.component';
import {AddBankComponent} from './components/bank-components/add-bank/add-bank.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'banks',
        children: [
          {
            path: '',
            component: BankListComponent
          },
          {
            path: 'list',
            component: BankListComponent
          },
          {
            path: 'add',
            component: AddBankComponent
          },
          // {
          //   path: 'edit/:bankId',
          //   component: EditBankComponent
          // }
        ]
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
