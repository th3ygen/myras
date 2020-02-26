export interface SidebarItem {
    label: string;
    url: string;
    ico: string;
    child: [{
        label: string,
        url: string,
        ico: string,
    }];
}

export const SidebarItems: SidebarItem[] = [
    { label: 'News', url: '', ico: 'fa fa-mail', child: [
        { label: 'Manage news', url: 'admin/news', ico: 'fa fa-cog' }
    ] },
    { label: 'Membership', url: '', ico: 'fa fa-mail', child: [
        { label: 'Manage members', url: 'admin/news', ico: 'fa fa-cog' }
    ] },
];
