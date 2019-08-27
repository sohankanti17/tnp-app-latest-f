import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  company: any;
  isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router,
    private companyDataService: CompanyDataService) {}

  ngOnInit() {
  //   this.activatedRoute.params.subscribe(data => {
  //     this.isLoading = true;
  //     this.companyDataService.getCompanyData(data.slug).subscribe((company: any) => {
  //         if(!company){
  //           this.router.navigateByUrl("/companies");
  //         }
  //       this.company = company;
  //       this.isLoading = false;
  //     })
  //   })
  }

}