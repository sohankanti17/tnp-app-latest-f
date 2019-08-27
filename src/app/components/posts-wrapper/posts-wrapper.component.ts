import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { ICompanyData} from '../../interfaces';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-posts-wrapper',
  templateUrl: './posts-wrapper.component.html',
  styleUrls: ['./posts-wrapper.component.css']
})
export class PostsWrapperComponent implements OnInit {
  blogPosts: any;
  isLoading: boolean = false;

  constructor(private companyDataService: CompanyDataService, 
  private activatedRoute: ActivatedRoute, 
  private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.isLoading = true;
      this.companyDataService.getBlogPosts(data.slug).subscribe((data: any) => {
        if(!data){
          this.router.navigateByUrl("/companies");
        }

        this.blogPosts = data;
        this.isLoading = false;
      });
    });
  }
}