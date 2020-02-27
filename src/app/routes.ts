import { EventsListComponent } from './events/events-list/events-list.component';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404.component';
import { EventRouteActivator } from './common/event-route-activator.service';
import { EventListResolver } from './events/shared/events-list-resolver.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {canActivate: [EventRouteActivator], path: 'events/:id', component: EventDetailsComponent},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component },
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]