import SidebarBuilder from '@stuyk/vitepress-sidebar-builder';

function groupByPathway(folderPath, filterByName) {
    const groups = {};

    const files = SidebarBuilder.get.filesAndOrder(folderPath).filter(x => x.link.includes(filterByName))
    for (let file of files) {
        if (!file.title) {
            continue;
        }

        const splitFileName = file.title.split('.');
        splitFileName.shift();
        const groupName = splitFileName[0];
        splitFileName.shift();

        if (typeof groups[groupName] === 'undefined') {
            groups[groupName] = {
                text: groupName,
                collapsed: true,
                items: []
            }
        }

        const newFile = {
            ...file,
            title: splitFileName.join('.'),
            text: splitFileName.join('.'),
        }

        groups[groupName].items.push(newFile);
    }

    return Object.values(groups);
}

export function getSidebar() {
    return[
            {
                text: 'Info',
                collapsible: false,
                items: SidebarBuilder.get.filesAndOrder('./docs/')
            },
            {
                text: 'FluffyVCore Server',
                collapsed: false,
                items: [
                    {
                        text: 'Modules',
                        collapsed: true,
                        items: groupByPathway('./docs/modules', 'server_')
                    },
                    {
                        text: 'Classes',
                        collapsed: true,
                        items: groupByPathway('./docs/classes', 'server_')
                    },
                    {
                        text: 'Interfaces',
                        collapsed: true,
                        items: groupByPathway('./docs/interfaces', 'server_')
                    },
                    {
                        text: 'Enums',
                        collapsed: true,
                        items: groupByPathway('./docs/enums', 'server_')
                    }
                ]
            },
            {
                text: 'FluffyVCore Client',
                collapsed: false,
                items: [
                    {
                        text: 'Modules',
                        collapsed: true,
                        items: groupByPathway('./docs/modules', 'client_')
                    },
                    {
                        text: 'Classes',
                        collapsed: true,
                        items: groupByPathway('./docs/classes', 'client_')
                    },
                    {
                        text: 'Interfaces',
                        collapsed: true,
                        items: groupByPathway('./docs/interfaces', 'client_')
                    },
                    {
                        text: 'Enums',
                        collapsed: true,
                        items: groupByPathway('./docs/enums', 'client_')
                    }
                ]
            },
            {
                text: 'FluffyVCore Shared',
                collapsed: false,
                items: [
                    ...groupByPathway('./docs/modules', 'shared_'),
                    ...groupByPathway('./docs/interfaces', 'shared_'),
                    ...groupByPathway('./docs/enums', 'shared_')
                ]
            }
        ]
    
};

