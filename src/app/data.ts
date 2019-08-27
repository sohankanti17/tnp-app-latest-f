import { ICompany, ICompanyData } from './interfaces';

const companiesDB: ICompany[] = [
  {
    id: "1",
    name: "Yamaha Motor Solutions India",
    slug: "yamaha-motor-solutions-india",
    postsCount: 10
  },
  {
    id: "2",
    name: "Thoughtworks",
    slug: "thoughtworks",
    postsCount: 8
  },
  {
    id: "3",
    name: "Altran",
    slug: "altran",
    postsCount: 0
  },
  {
    id: "4",
    name: "Indus Valley Partners",
    slug: "indus-valley-partners",
    postsCount: 3
  },
  {
    id: "5",
    name: "Grapecity",
    slug: "grapecity",
    postsCount: 2
  },
  {
    id: "6",
    name: "Naggaro",
    slug: "naggaro",
    postsCount: 9
  },
  {
    id: "7",
    name: "Tata Consultancy Services",
    slug: "tata-consultancy-services",
    postsCount: 10
  },
  {
    id: "8",
    name: "Knoldus",
    slug: "knoldus",
    postsCount: 7
  }
];

const companyDataDB: ICompanyData[] = [
  {
    id: "1",
    name: "Yamaha Motor Solutions India",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 10,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019: an easy one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Sohan Prasad Kanti",
        postedOn: "8 June 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Ibrahim Mehta",
        postedOn: "15 June 2018",
        commentsCount: 36,
        viewsCount: 75
      }
    ]
  },
  {
    id: "2",
    name: "Thoughtworks",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 8,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Aanchal Singh",
        postedOn: "25 July, 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Shanti Nair",
        postedOn: "26 June 2018",
        commentsCount: 12,
        viewsCount: 26
      }
    ]
  },
  {
    id: "3",
    name: "Altran (Aricent)",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 3.5,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019: an easy one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Sohan Prasad Kanti",
        postedOn: "8 June 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Ibrahim Mehta",
        postedOn: "15 June 2018",
        commentsCount: 36,
        viewsCount: 75
      }
    ]
  },
  {
    id: "4",
    name: "Indus Valley Partners",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 7.5,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019: an easy one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Sohan Prasad Kanti",
        postedOn: "8 June 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Ibrahim Mehta",
        postedOn: "15 June 2018",
        commentsCount: 36,
        viewsCount: 75
      },
      {
        title: "Interview experience for 2019",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Aanchal Singh",
        postedOn: "25 July, 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Shanti Nair",
        postedOn: "26 June 2018",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2019: an easy one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Sohan Prasad Kanti",
        postedOn: "8 June 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Ibrahim Mehta",
        postedOn: "15 June 2018",
        commentsCount: 36,
        viewsCount: 75
      }
    ]
  },
  {
    id: "5",
    name: "Grapecity",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 4.5,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2019",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Aanchal Singh",
        postedOn: "25 July, 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Shanti Nair",
        postedOn: "26 June 2018",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Shanti Nair",
        postedOn: "26 June 2018",
        commentsCount: 12,
        viewsCount: 26
      }
    ]
  },
  {
    id: "6",
    name: "Naggaro",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 3.6,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Ibrahim Mehta",
        postedOn: "15 June 2018",
        commentsCount: 36,
        viewsCount: 75
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Shanti Nair",
        postedOn: "26 June 2018",
        commentsCount: 12,
        viewsCount: 26
      }
    ]
  },
  {
    id: "7",
    name: "Tata Consultancy Services",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 6,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Ibrahim Mehta",
        postedOn: "15 June 2018",
        commentsCount: 36,
        viewsCount: 75
      },
      {
        title: "Interview experience for 2019",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Aanchal Singh",
        postedOn: "25 July, 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Shanti Nair",
        postedOn: "26 June 2018",
        commentsCount: 12,
        viewsCount: 26
      }
    ]
  },
  {
    id: "8",
    name: "Knoldus",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit, a similique autem ex doloribus fugiat deserunt harum voluptatem temporibus, explicabo unde tempore! Similique, laudantium. Ab quasi sed iure harum",
    placedStudentsCount: 50,
    websiteUrl: "url",
    avgPackage: 5,
    imgUrl: "path/to/img",
    posts: [
      {
        title: "Interview experience for 2019: a great one!",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Charu Suri",
        postedOn: "30 June 2019",
        commentsCount: 10,
        viewsCount: 12
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Ibrahim Mehta",
        postedOn: "15 June 2018",
        commentsCount: 36,
        viewsCount: 75
      },
      {
        title: "Interview experience for 2019",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Aanchal Singh",
        postedOn: "25 July, 2019",
        commentsCount: 12,
        viewsCount: 26
      },
      {
        title: "Interview experience for 2018",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores deserunt fuga eos quidem eveniet. Excepturi eius labore nesciunt quasi ut architecto aliquid exercitationem itaque ratione asperiores. Officia excepturi quasi itaque. ",
        author: "Shanti Nair",
        postedOn: "26 June 2018",
        commentsCount: 12,
        viewsCount: 26
      }
    ]
  },
]

export { companiesDB, companyDataDB };
