import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events-details-page',
    templateUrl: './events-details-page.component.html',
    styleUrls: ['./events-details-page.component.scss']
})
export class EventsDetailsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Events Details',
            subTitle: 'Global Conference on Business Management and Economics',
        }
    ]

}
class pageTitle {
    title : string;
    subTitle : string;
}