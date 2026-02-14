/// nav.tsx
/// Main Navigation Component for the site
///
/// Author: Gavin Kerr
/// Date: Sun Nov 17 2024

import { Link, useRouterState } from "@tanstack/react-router"
import clsx from "clsx"
import { ModeToggle } from "./ui/mode-toggle";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";

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
    },
    {
        name: "Skills",
        route: "/skills"
    }
]


export const Nav = () => {

    // Get the current path to highlight the current page
    const path = useRouterState().location.pathname;

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="fixed left-0 top-5 z-50 w-full">
            <nav className="hidden md:flex text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4 items-center">
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
            <nav className="md:hidden text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4 items-center">
                <Drawer direction="top" open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <DrawerTrigger className="flex items-center border-border ">
                        Menu
                        <Menu className="ml-2" />
                    </DrawerTrigger>
                    <DrawerContent className="w-full">
                        <div className="flex justify-between items-center p-2">
                            <h2 className="text-lg font-bold">Menu</h2>
                            <ModeToggle />
                        </div>
                        {
                            Routes.map((route) => (
                                <Link key={route.route} 
                                        to={route.route} className={clsx(
                                    'hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-1.5 transition-colors',
                                    path === route.route
                                        ? 'border-border dark:border-darkBorder'
                                        : 'border-transparent',
                                )}
                                onClick={() => setDrawerOpen(false)}>   
                                    {route.name}
                                </Link>
                            ))
                        }
                    </DrawerContent>
                </Drawer>
            </nav>
        </div>
    )

}
