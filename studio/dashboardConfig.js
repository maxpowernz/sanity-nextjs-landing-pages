export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed8d1d56616f7237fd84328',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-amwu47on',
                  apiId: '8e4df77e-15a2-4f03-9ee2-b958b444953d'
                },
                {
                  buildHookId: '5ed8d1d599c62161baecbaa1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6z7od9y7',
                  apiId: '3e461598-6b0e-41de-8ee3-d9263bb24b1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxpowernz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6z7od9y7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
