export class Movies {
    name: string;
    realisator: string;
    description: string;
    likes: number;
    DateCreated: Date;

    constructor(name, realisator, description) {
        this.name = name;
        this.realisator = realisator;
        this.description = description;
        this.likes = 0;
        this.DateCreated = new Date();
    }
}