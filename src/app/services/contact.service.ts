import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {

    constructor() { }

    randString() {
        let text = "";
        const alpha = "ABCDEFGHIKLMNOPQRSTVXYZ123456789";
        for (let i = 0; i < 5; i++)
            text += alpha.charAt(Math.floor(Math.random() * alpha.length));
        return text;
    }

    createCanvas(rand) {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        ctx.font = "18px Arial";
        ctx.fillStyle = "#fff"
        ctx.fillText(rand, 20, 20);        
        return canvas;
    }
}