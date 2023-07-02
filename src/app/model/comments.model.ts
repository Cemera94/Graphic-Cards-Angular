export class Comments{
    cards: number;
    text: string;
    author: string;
    date: Date;
    _id: number;

    constructor(obj?: any){
        this.cards = obj && obj.cards || 0;
        this.text = obj && obj.text || "";
        this.author = obj && obj.author || "";
        this.date = obj && obj.date && new Date(obj.date) || new Date();
        this._id = obj && obj._id || 0;
    }
}