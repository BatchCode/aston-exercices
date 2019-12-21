export class Musiques {

    titre: string;
    artiste: string;
    likes: number;


    constructor(titre, artiste) {
        this.titre = titre;
        this.artiste = artiste;
        this.likes = 0;
    }

}