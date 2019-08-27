export interface ICompany {
  id: string,
  slug: string,
  name: string,
  postsCount: number
}

export interface ICompanyData {
  id: string,
  name: string,
  about: string,
  websiteUrl: string,
  placedStudentsCount: number,
  avgPackage: number,
  imgUrl: string,
  posts: {
    title: string,
    shortContent: string,
    author: string,
    postedOn: string,
    commentsCount: number,
    viewsCount: number
  }[]
}