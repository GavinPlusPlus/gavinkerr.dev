import { Nav } from '@/components/nav';
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import "../index.css"
import { Code, FileUser, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const RootLayout = () => {

  return (
    <div className='transition-all animate-fade-in min-h-screen'>
      <header>
        <Nav />
      </header>

      <div className="flex-1 text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
        <Outlet />
      </div>

      <footer className='w-full dark:text-white'>
        <div className='mx-auto flex flex-row justify-center gap-3'>
          <a href='https://github.com/GavinPlusPlus' target="_blank" rel="noopener noreferrer">
            <Github size={32} />
          </a>
          <a href='https://www.linkedin.com/in/kerrgavin/' target="_blank" rel="noopener noreferrer">
            <Linkedin size={32} />
          </a>
          <a href='https://instagram.com/kerrgavin' target="_blank" rel="noopener noreferrer">
            <Instagram size={32} />
          </a>
          <a href='mailto:me@gavinkerr.dev'>
            <Mail size={32} />
          </a>
          <a href='https://github.com/GavinPlusPlus/gavinkerr.dev' target="_blank" rel="noopener noreferrer">
            <Code size={32} />
          </a>
          <a href='https://drive.google.com/file/d/1GCJ5iui-pDvGfufjczwHaxJumnKLlaQc/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <FileUser size={32} />
          </a>
        </div>
        <p className="text-center py-2 dark:text-white">© 2024-2025 Gavin Kerr</p>
      </footer>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  );

}

export const Route = createRootRoute({
  component: RootLayout,
})