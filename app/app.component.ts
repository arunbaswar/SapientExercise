import { Component } from '@angular/core';
import { ProgramListService } from './services/program-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceXLaunchProgram';
  selectedYear;
  isSuccessfulLaunch;
  isSuccessfulLand;
  filterObj = {
    year: 0,
    isSuccessful: '',
    isSuccessfulLanding: ''
  };
  constructor(private service: ProgramListService) { }

  launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  filterByLaunchYear(year: number) {
    this.selectedYear = year;
    this.filterObj.year = year;
    this.service.filterBy(this.filterObj);
  }

  filterBySuccessfulLaunch(isSuccessfully: boolean) {
    this.isSuccessfulLaunch = isSuccessfully;
    this.filterObj.isSuccessful = isSuccessfully ? 'true' : 'false';
    this.service.filterBy(this.filterObj);
  }
  filterBySuccessfulLand(isSuccessfullyLand: boolean) {
    this.isSuccessfulLand = isSuccessfullyLand;
    this.filterObj.isSuccessfulLanding = isSuccessfullyLand ? 'true' : 'false';
    this.service.filterBy(this.filterObj);
  }
}
