export const sidebarItems = [
    {
        header_name : "About",
        pages:  [
            {
                title: "About",
                icon: "mdi-account-outline",
                children: [
                    {
                        title: "About Add",
                        icon: "mdi-plus",
                        path: "/about/about-add",
                    },
                    {
                        title: "About View",
                        icon: "mdi-view-dashboard",
                        path: "/about/about-view",
                    },
                ]
            },
        ]
    },
    {
        header_name : "Contact",
        pages:  [
            {
                title: "Contact",
                icon: "mdi-phone-outline",
                children: [
                    {
                        title: "Contact Add",
                        icon: "mdi-plus",
                        path: "/contact/contact-add",
                    },
                    {
                        title: "Contact View",
                        icon: "mdi-view-dashboard",
                        path: "/contact/contact-view",
                    },
                ]
            },
        ]
    },
]