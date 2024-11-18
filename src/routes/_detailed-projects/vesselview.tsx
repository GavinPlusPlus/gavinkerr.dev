
import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"

import AboutImage from '@/assets/vesselview_images/about.png'
import ItemImage from '@/assets/vesselview_images/item-overview.png'

const VesselViewDetails = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-4xl font-bold">VesselView</h1>
      </div>

      <div>
        <div className="mt-4 text-2xl text-bold">What is it?</div>
        <div className="mt-1">
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

      <div>
        <div className="mt-4 text-2xl text-bold">Technologies</div>
        <div className="mt-1 flex flex-row flex-wrap gap-1">
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

      <div>
        <div className='mt-4 text-2xl text-bold'>Screenshots</div>
        <Carousel
          className='rounded-md'
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}>
            <CarouselPrevious />
          <CarouselContent>
            <CarouselItem>
              <img src={AboutImage} alt="VesselView Screenshot 1" />
            </CarouselItem>
            <CarouselItem>
              <img src={ItemImage} alt="VesselView Screenshot 2" />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>

    </div>
  )
}

export const Route = createFileRoute('/_detailed-projects/vesselview')({
  component: VesselViewDetails,
})
