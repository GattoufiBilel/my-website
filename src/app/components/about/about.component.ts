import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  certificationLinks : Array<string> = [ 
    'https://mega.nz/#!COwSDC6A!3RneNG-7lGg666MoS0j5EhbbqRbeq7Vs1mTDoy_UZbE' ,
    'https://mega.nz/#!HXoE1YgA!7AuR5EP5Mq27pUrROthIUZLMOl3wqJSnjebzds7OKvs' ];

    twitterLink : string = 'https://twitter.com/intent/follow?screen_name=HaikelFazzani&tw_p=followbutton&ref_src=twsrc%5Etfw';

  constructor() { }

  ngOnInit() {
  }

}
