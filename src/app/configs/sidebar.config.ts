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
    { label: 'News', url: '', ico: 'fa fa-mail', active: false, child: [
        { label: 'Overview', url: 'admin/news', ico: 'fa fa-cog' },
        { label: 'Add new', url: 'admin/news', ico: 'fa fa-cog' },
    ] },
    { label: 'Member', url: '', ico: 'fa fa-mail', active: false, child: [
        { label: 'Manage members', url: 'admin/news', ico: 'fa fa-cog' }
    ] },
];
