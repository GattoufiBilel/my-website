import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public service : TimeService) { }

  ngOnInit() {
  }

}
