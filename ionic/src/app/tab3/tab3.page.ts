import { Component } from '@angular/core';
import { TablesService } from '../services/tables.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private _tablesService: TablesService) {}

  /*  */
  name: string;
  price: number;

  addTablesForm(form) {
    console.log(form);

    this._tablesService.addTables(form.form.value)
    .subscribe();
  }

}
