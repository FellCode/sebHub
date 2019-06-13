import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.page.html',
  styleUrls: ['./member-details.page.scss'],
})
export class MemberDetailsPage implements OnInit {


  myId = null;

  constructor(private activatedRoute:ActivatedRoute) { }

  
  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  }

}
