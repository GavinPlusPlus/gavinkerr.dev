
import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ImageGallery } from '@/components/image-gallery'
import { VesselViewImages } from '@/data/projects/vesselview-data'

const VesselViewDetails = () => {
  return (
    <div>
      <div className="w-full flex justify-between">
        <h1 className="text-4xl font-bold">VesselView</h1>
        <h1 className="text-2xl font-bold items-center align-middle"><Badge>June 2023</Badge> - <Badge>Current</Badge></h1>
      </div>

      <Separator className='w-full my-2 dark:bg-white bg-current' />

      <div>
        <div className="my-2 text-2xl text-bold">What is it?</div>
        <div>
          VesselView is a full stack web application that I developed in
          house for{' '}
          <a
            href="https://lindellyachts.com/"
            target="_blank"
            className="underline"
          >
            Lindell Yachts
          </a>{' '}
          that serves as a central hub for managing parts, inventory,
          and BOMs for their various models.
          <br />
          <br />
          Working with the team at Lindell Yachts, I've been able to
          develop a system that is tailored to their specific needs and
          requirements, including custom integrations with other
          software systems. (eg. QuickBooks, Excel, Primavera P6)
          <br />
          <br />
          Since the project is an internal tool and under active
          development, I'm unable to share any links to source code but
          I'm happy to discuss the project and provide more information
          if you're interested!
        </div>
      </div>

      <Separator className='w-full my-2 dark:bg-white bg-current' />

      <div>
        <div className="my-2 text-2xl text-bold">Technologies</div>
        <div className="flex flex-row flex-wrap gap-1">
          <Badge>C#</Badge>
          <Badge>ASP.NET</Badge>
          <Badge>EntityFramework</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>TailwindCSS</Badge>
          <Badge>Docker</Badge>
        </div>
      </div>

      <Separator className='w-full my-2 dark:bg-white bg-current' />

      <div>
        <div className='my-2 text-2xl text-bold'>Screenshots</div>
        <ImageGallery images={VesselViewImages} />
      </div>

    </div>
  )
}

export const Route = createFileRoute('/_detailed-projects/vesselview')({
  component: VesselViewDetails,
})
