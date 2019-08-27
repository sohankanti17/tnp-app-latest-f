import { Injectable } from '@angular/core';

import { ICompany, ICompanyData } from '../interfaces';
import { companiesDB, companyDataDB } from '../data';
import { Observable, of, BehaviorSubject } from "rxjs";
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class CompanyDataService {
  private _companies: ICompany[];
  private _companiesData: ICompanyData[];

  constructor() {
    this._companies = companiesDB;
    this._companiesData = companyDataDB;
  }

  getCompanies(): Observable<ICompany[]> {
    return of(this._companies)
      .pipe(delay(1000));
  }

  getCompanyData(slug: string): Observable<any> {
    let company = this._companies.find(c => c.slug === slug);
    if (!company)
      return of(null);

    const data = {
      id: company.id,
      name: company.name,
      about: company.about,
      websiteUrl: company.websiteUrl,
      placedStudentsCount: company.placedStudentsCount,
      avgPackage: company.avgPackage,
      imgUrl: company.imgUrl
    }

    return of(data).pipe(delay(2000));
  }

  getBlogPosts(slug: string): Observable<any> {
    let company = this._companies.find(c => c.slug === slug);
    if (!company)
      return of(null);

    let posts = this._companiesData.find(c => c.id == company.id).posts;

    return of(posts).pipe(delay(2000));
  }
}
