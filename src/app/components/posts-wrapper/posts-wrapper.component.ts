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
  companyData: ICompanyData;
  slug: string;

  constructor(private companyDataService: CompanyDataService, 
  private activatedRoute: ActivatedRoute, 
  private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.slug = data.slug;

      this.companyDataService.getCompanyData(this.slug).subscribe((data: ICompanyData) => {
        if(!data){
          this.router.navigateByUrl("/compa");
        }

        this.companyData = data;
      });
    });
  }
}