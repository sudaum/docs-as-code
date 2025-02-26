import {NgModule} from '@angular/core';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AppComponent} from "./app.component";


const routes: Routes = [
    {path: '', component: AppComponent},
    {path: '**', component: AppComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterOutlet,
        RouterModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
