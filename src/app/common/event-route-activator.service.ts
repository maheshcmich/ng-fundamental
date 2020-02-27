import { Injectable } from '@angular/core';
import { EventService } from '../events/shared/event.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private _eventSvc: EventService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot){

        const eventExists = !!this._eventSvc.getEvent(+route.params['id'])
        console.log(eventExists)

        if(!eventExists){
            this.router.navigate(['/404'])
        }            
        return eventExists;

    }
}