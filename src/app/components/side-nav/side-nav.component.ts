import { Component, OnInit } from '@angular/core';

import { CompanyDataService } from '../../services/company-data.service';
import { ICompany } from '../../interfaces';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  companies: ICompany[];

  constructor(private companyDataService: CompanyDataService) {}

  ngOnInit() {
    this.companyDataService.getCompanies().subscribe((data: ICompany[]) => {
      this.companies = data;
    });
  }
}