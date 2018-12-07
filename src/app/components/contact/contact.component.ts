import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('mycanva') myCanva: ElementRef;
  canvElement: object;
  randAlpha : string = '';
  isValid : boolean = false;

  twitterLink : string = 'https://twitter.com/intent/follow?screen_name=HaikelFazzani&tw_p=followbutton&ref_src=twsrc%5Etfw';

  constructor(private service : ContactService) { }

  ngOnInit() {
    this.randAlpha = this.service.randString();
    this.canvElement = this.service.createCanvas(this.randAlpha);
    this.myCanva.nativeElement.appendChild(this.canvElement);
  }

  ngAfterViewInit() {
    //console.log(this.myCanva.nativeElement.innerHTML);
  }

  validate(event) {
    this.isValid = this.randAlpha === (event.target.value).toUpperCase();
    console.log(this.isValid)
  }

}
