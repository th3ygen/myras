export interface SidebarItem {
    label: string;
    url: string;
    ico: string;/*
    child: [{
        label: string,
        url: string,
        ico: string,
    }]; */
}

export const SidebarItems = [
    {
        label: 'Dashboard', url: 'admin/home', ico: 'fa fa-mail', active: true, child: []
    },
    { label: 'Content manager', url: '', ico: 'fa fa-mail', active: false, child: [
            { label: 'Sponsors', url: 'admin/news', ico: 'fa fa-cog' },
            { label: 'News', url: 'admin/news', ico: 'fa fa-cog' },
            { label: 'Event', url: 'admin/news', ico: 'fa fa-cog' },
        ]
    },
    { label: 'Members', url: '', ico: 'fa fa-mail', active: false, child: [
        { label: 'Manage', url: 'admin/members/manager', ico: 'fa fa-cog' },
        { label: 'Payments', url: 'admin/members/payments', ico: 'fa fa-cog' }
    ] }
];
