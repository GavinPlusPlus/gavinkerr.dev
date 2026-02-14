
import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ImageGallery } from '@/components/image-gallery'
import { VesselViewImagesV2 } from '@/data/projects/vesselview-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const VesselViewDetails = () => {
  return (
    <div>
      <div className="w-full flex justify-between">
        <h1 className="text-4xl font-bold">VesselView</h1>
        <h1 className="text-2xl font-bold items-center align-middle"><Badge>June 2023</Badge> - <Badge>Current</Badge></h1>
      </div>

      <Separator className='w-full my-2 dark:bg-white bg-current' />

      <div className='space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>
            What is it?
          </CardTitle>
        </CardHeader>
        <CardContent>
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
            Everything that gets installed on our boats at Lindell lives in 
            this system, allowing us to get traceability down to the serial number
            for individual items in our customers unique boats.
            <br />
            <br />
            The project now also includes a React Native App for our shop iPads,
            allowing our crew to scan item tags throughout the shop to do their purchase requests.
            Additionally, a Kiosk helper has been developed to bridge the web app to our 
            employee access cards, allowing for convenient check in/out at workstations. 
            <br />
            <br />
            Since the project is an internal tool and under active
            development, I'm unable to share any links to source code but
            I'm happy to discuss the project and provide more information
            if you're interested!
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>
            Technologies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row flex-wrap gap-1">
            <Badge>C#</Badge>
            <Badge>ASP.NET</Badge>
            <Badge>EntityFramework</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>React</Badge>
            <Badge>React Native</Badge>
            <Badge>AvaloniaUI</Badge>
            <Badge>TypeScript</Badge>
            <Badge>TailwindCSS</Badge>
            <Badge>Docker</Badge>
            <Badge>WebSockets</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>
            Screenshots
          </CardTitle>
        </CardHeader>
        <CardContent>
        <ImageGallery images={VesselViewImagesV2} />
        </CardContent>
      </Card>

      </div>


    </div>
  )
}

export const Route = createFileRoute('/_detailed-projects/vesselview')({
  component: VesselViewDetails,
})
