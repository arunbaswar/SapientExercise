import { Component, OnInit } from '@angular/core';
import { ProgramListService } from '../services/program-list.service';

@Component({
    selector: 'app-program-list',
    styleUrls: ['./program-list.component.scss'],
    templateUrl: './program-list.component.html'
})

export class ProgramsListComponent implements OnInit {
    programList = [];

    constructor(private programListService: ProgramListService) {

    }

    ngOnInit() {
        this.programListService.getAllPrograms().then((data) => {
            this.programList = data;
        });
        this.programListService.filterByLaunchYearEvent.subscribe((obj) => {
            let queryString = '&';
            if (obj.year !== '' && obj.year !== 0) {
                queryString += 'launch_year=' + obj.year;
            }
            if (obj.isSuccessful !== '') {
                queryString += '&launch_success=' + obj.isSuccessful;
            }
            if (obj.isSuccessfulLanding !== '') {
                queryString += '&land_success=' + obj.isSuccessfulLanding;
            }

            this.programListService.filterBySelection(queryString).then(data => {
                this.programList = data;
            });
        });
    }
}
