import { Button } from '@/components/ui/button'
import { Link, Outlet } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { SkipBackIcon } from 'lucide-react'

const DetailedProjects = () => {

    return (
        <div className="w-full transition-all animate-fade-in">
            <div className="flex flex-col">

                <Link to='/projects' className='my-2 w-fit'>
                    <Button className='gap-2'>
                        <SkipBackIcon />
                        Back to Projects
                    </Button>
                </Link>

                <Outlet />

            </div>
        </div>
    )

}

export const Route = createFileRoute('/_detailed-projects')({
    component: DetailedProjects,
})
