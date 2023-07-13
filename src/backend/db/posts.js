import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
import { users } from './users'
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: '4a1c10fe-43bd-4f1f-aee6-37aecf6ef759',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 80,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: '2023-07-10T01:06:00+05:30',
    updatedAt: '2023-07-10T01:06:00+05:30',
    imgSrc: `https://picsum.photos/seed/${'adarshbalikaPosts'}/600`,
  },
  {
    _id: '78a1c10fe-43bd-4f1f-aee6-37aecf6ef7578',
    content: 'hello World',
    likes: {
      likeCount: 86,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgSrc: `https://picsum.photos/seed/${'adarshbalikaPosts2'}/600`,
  },
  {
    _id: '436dd4a9-77d5-466a-af00-2cc732bf18e9',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 24,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'jamesandreson',
    createdAt: '2023-06-12T01:06:00+05:30',
    updatedAt: '2023-06-12T01:06:00+05:30',
    imgSrc: `https://picsum.photos/seed/${'jamesandresonPosts'}/600`,
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 76,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'alexevans',
    createdAt: '2022-11-10T01:06:00+05:30',
    updatedAt: '2022-11-10T01:06:00+05:30',
    imgSrc: `https://picsum.photos/seed/${'alexevansPosts'}/600`,
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'richardmiller',
    createdAt: '2022-06-19T01:06:00+05:30',
    updatedAt: '2022-06-19T01:06:00+05:30',
    imgSrc: `https://picsum.photos/seed/${'richardmillerPosts'}/600`,
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 78,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'marthawright',
    createdAt: '2021-03-11T01:06:00+05:30',
    updatedAt: '2021-03-11T01:06:00+05:30',
    imgSrc: `https://picsum.photos/seed/${'marthawrightPosts'}/600`,
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 55,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'sarahparker',
    createdAt: '2021-09-08T01:06:00+05:30',
    updatedAt: '2021-09-08T01:06:00+05:30',
    imgSrc: `https://picsum.photos/seed/${'sarahparkerPosts'}/600`,
  },
]
