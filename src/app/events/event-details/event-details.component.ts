import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private _eventSvc: EventService, private route: ActivatedRoute) { }

  event: IEvent

  ngOnInit() {
    this.event = this._eventSvc.getEvent(+this.route.snapshot.params['id'])
  }

}
