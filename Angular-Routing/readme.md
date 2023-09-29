Angular Routing :
--------------------------------
Whenever we are creating the project that time, we'll get the option to include routing in it.
A file will be generated as app-routing.module.ts


** Dynamic Routing is applied here on AboutComponent. 

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private route :ActivatedRoute){

  }
  ngOnInit(): void {
      console.log('user id is', this.route.snapshot.paramMap.get('id'))
  }
}
_____________________________________
404 page :
---------------------
We use wildcard routing to create error pages or such pages which doesnot exist.

{
	component: ErrorPageComponent,
	path: '**'
}


