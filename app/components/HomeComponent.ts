import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'home-view',
    templateUrl: '/smanager/views/HomeView.html'
})

@RouteConfig([
    {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
    {path:'/heroes',        name: 'Heroes',       component: HeroListComponent},
    {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
])

export class HomeComponent { }
