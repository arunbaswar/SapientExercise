import { Injectable, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class ProgramListService {
    @Output() filterByLaunchYearEvent: EventEmitter<any> = new EventEmitter();
    @Output() filterBySuccessfulLaunchEvent: EventEmitter<any> = new EventEmitter();


    constructor(private dataService: DataService) {

    }

    getAllPrograms() {
        return this.dataService.getData('https://api.spaceXdata.com/v3/launches?limit=100');
    }

    filterBy(param: any) {
        this.filterByLaunchYearEvent.emit(param);
    }

    filterBySelection(query: string) {
        return this.dataService.getData('https://api.spaceXdata.com/v3/launches?limit=100' + query);
    }


}