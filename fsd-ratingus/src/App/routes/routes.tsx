import {  createBrowserRouter } from 'react-router'
import { CategoryPage } from '../../pages'
import { Layout } from '../layout/layout'


export const router = createBrowserRouter([
  {
  path: '/',
  Component: Layout,
  children: [
    {index: true, element: <a>Main</a>},
    {path: 'community', element: <a>Community</a>},
    {path: ':categories', Component: CategoryPage},
    {path: 'article', children: [
        {path: 'alias', element: <a>Rating</a>},

    ]},
    {path: 'profile', children: [
        {index: true, element: <a>Profile</a>},
        {path: 'editProfile', element: <a>Edit profile</a>}
    ]}
  ],

}
])

