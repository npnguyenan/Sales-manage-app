import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
import {TestService} from '../../shared/services/test.service';
@Component({
  templateUrl: 'tasks.component.html',
  providers: [TestService]
})

export class TasksComponent implements OnInit {
  dataSource: any;
  list : [];
  ngOnInit(): void {
  }
  constructor(private testService : TestService) {
    // this.dataSource = {
    //   store: {
    //     type: 'data',
    //     key: 'id',
    //     url: 'http://localhost:3000/companies'
    //   },
    //   // expand: 'ResponsibleEmployee',
    //   select: [
    //     // 'Task_ID',
    //     // 'Task_Subject',
    //     // 'Task_Start_Date',
    //     // 'Task_Due_Date',
    //     // 'Task_Status',
    //     // 'Task_Priority',
    //     // 'Task_Completion',
    //     // 'ResponsibleEmployee/Employee_Full_Name'
    //     'id',
    //     'name',
    //     'address',
    //     'tax_num',
    //     'phone_num'
    //   ]
    // };
    // this.priority = [
    //   { name: 'High', value: 4 },
    //   { name: 'Urgent', value: 3 },
    //   { name: 'Normal', value: 2 },
    //   { name: 'Low', value: 1 }
    // ];
  }
  async getCompanies(){
    let api = await this.testService.getApi();
    console.log(api);
  }
}
