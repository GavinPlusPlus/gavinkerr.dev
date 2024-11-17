import { Nav } from '@/components/nav';
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import "../index.css"

const RootLayout = () => {

  return (
    <div className='transition-all animate-fade-in'>
      <Nav />
      <hr />
      <div className="text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );

}

export const Route = createRootRoute({
  component: RootLayout,
})