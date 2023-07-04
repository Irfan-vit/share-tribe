import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 'a32e8a58-6e47-4dfb-83ce-23d9792ffbaa',
    avatar: 'https://picsum.photos/seed/adarshbalika',
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'b32e8a58-6e47-4dfb-83ce-23d9792ffbab',
    firstName: 'sarah',
    lastName: 'parker',
    username: 'sarahparker',
    password: 'sarahparker123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'c32e8a58-6e47-4dfb-83ce-23d9792ffbac',
    firstName: 'martha',
    lastName: 'wright',
    username: 'marthawright',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'd32e8a58-6e47-4dfb-83ce-23d9792ffbad',
    firstName: 'james',
    lastName: 'andreson',
    username: 'jamesandreson',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'e32e8a58-6e47-4dfb-83ce-23d9792ffbae',
    firstName: 'richard',
    lastName: 'miller',
    username: 'richardmiller',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'f32e8a58-6e47-4dfb-83ce-23d9792ffbaf',
    firstName: 'alex',
    lastName: 'evans',
    username: 'alexevans',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
]

console.log(users.find((user) => user.username === 'adarshbalika').avatar)
