export class Post {
    auteur: string;
    date: Date = new Date();
    lieu: String = "SaintMartin d'Hères";
    contenu: any;

    constructor (auteur: string, contenu: any) {
        this.auteur = auteur;
        this.contenu = contenu;
    }
}