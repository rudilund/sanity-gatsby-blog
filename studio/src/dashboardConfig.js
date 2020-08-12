export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f339bdd06971d3c14056468',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-voo8tns8',
                  apiId: '9656d611-164d-49c8-aa56-bf97d89b3ede'
                },
                {
                  buildHookId: '5f339bdd09ff2b8cf8e30e2f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e79gjk6w',
                  apiId: 'cd608f19-23d8-4b55-888c-e2fbbfe67436'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rudilund/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e79gjk6w.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
