import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'dacs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'Docs-as-Code Beispiel';
}
