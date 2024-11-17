/// nav.tsx
/// Main Navigation Component for the site
///
/// Author: Gavin Kerr
/// Date: Sun Nov 17 2024

import { Link, useRouterState } from "@tanstack/react-router"
import clsx from "clsx"
import { ModeToggle } from "./ui/mode-toggle";

const Routes = [
    {
        name: "Home",
        route: "/"
    },
    {
        name: "Projects",
        route: "/projects"
    },
    {
        name: "Contact",
        route: "/contact"
    }
]

export const Nav = () => {

    // Get the current path to highlight the current page
    const path = useRouterState().location.pathname;

    return (
        <div className="fixed left-0 top-5 z-50 w-full">
            <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4 items-center">
                {Routes.map((route) => (
                    <Link key={route.route} to={route.route} className={clsx(
                        'hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-1.5 transition-colors',
                        path === route.route
                            ? 'border-border dark:border-darkBorder'
                            : 'border-transparent',
                    )}>
                        {route.name}
                    </Link>
                ))}
                <ModeToggle />
            </nav>
        </div>
    )

}

