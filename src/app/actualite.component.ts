import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
    selector: 'actualite',
    templateUrl : './actualite.component.html',
    styles: [`
        md-card {
            margin: 4px;
        }
    `]
})

export class ActualiteComponent {

    posts: Post [] =  [
        new Post("personne 1", "Bla bla bla bla. Encore du bla bla ..."),
        new Post("personne 2", "Bla bla bla bla. Encore du bla bla ..."),
        new Post("personne 3", "Bla bla bla bla. Encore du bla bla ..."),
        new Post("personne 4", "Bla bla bla bla. Encore du bla bla ..."),
        new Post("personne 5", "Bla bla bla bla. Encore du bla bla ..."),
        new Post("personne 6", "Bla bla bla bla. Encore du bla bla ..."),
        new Post("personne 7", "Bla bla bla bla. Encore du bla bla ...")
    ];

}