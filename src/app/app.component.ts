import { Component, VERSION } from '@angular/core';
//import { SortingService } from './sorting.service.ts';
//import { FilterService } from './filter.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //constructor(private filterService: FilterService) {}
  name = 'Angular ' + VERSION.major;
  checkboxesDataList: any;
  // gender: any;
  selectedItemsList = [];
  checkedIDs = [];
  ngOnInit() {
    //  this.gender = ['male', 'female'];
    this.checkboxesDataList = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: true
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: true
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: false
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: true
      }
    ];
    // this.onFilter();
  }
  //
  // private onFilter() {
  //   this.filter.emit(
  //     this.options.filter(opt => opt.checked).map(opt => opt.name)
  //   );
  // }

  onClicksubmit(data) {
    alert(data.email);
    var newData = {
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email
    };
    alert(JSON.stringify(newData));
    alert(JSON.stringify(this.checkboxesDataList));
    this.checkboxesDataList.push(newData);
    alert(JSON.stringify(this.checkboxesDataList));
  }

  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.email;
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = [];
    this.checkboxesDataList.forEach((value, index) => {
      if (value.gender) {
        this.checkedIDs.push(value.id);
        // alert(JSON.stringify(this.checkedIDs));
      }
    });
  }
}
