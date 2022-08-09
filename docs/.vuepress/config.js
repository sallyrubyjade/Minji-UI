// .vuepress/config.js
module.exports = {
    base: "/Minji-UI/",
    title: 'Minji UI',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    themeConfig: {
        search: false,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Github', link: 'https://github.com/sallyrubyjade/Minji-UI'},
        ],
        sidebar: [
            {
                title: '指南',
                children: ['/guide/usage', '/guide/quickstart', '/guide/css-config']
            },
            {
                title: '组件',
                children: ['/components/record-player', '/components/button', '/components/input', '/components/layout', '/components/highlight', '/components/tab', '/components/toast', '/components/popover']
            }
        ]
    }
}
