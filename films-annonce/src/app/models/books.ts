export class Books {

    name: string;
    description: string;
    img: string;
    likes: number;


    constructor(name, description, img) {
        this.name = name;
        this.description = description;
        this.img =  "../../assets/imgs/" + img;
        this.likes = 0;
    }

}
