import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NameCardV2 } from '@/components/name-card-v2'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <div className='w-full transition-all animate-fade-in'>

      <NameCardV2 className='my-4'/>

      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>
            Hey there!
          </CardTitle>
        </CardHeader>
        <CardContent>
          My name is Gavin Kerr and I'm a software engineer based in Burlington, Washington at <a href='https://www.lindellyachts.com/' target="_blank" className='underline'>Lindell Yachts</a>.
          As a recent graduate of the <a href='https://www.utah.edu/' target="_blank" className='underline'>University of Utah</a> in Computer Science, I am passionate about building software that makes a difference. Go Utes!

          <br />
          <br />
         
          My work spans from designing and developing applications in .NET, React, and TypeScript, to hands-on engineering with boats and embedded systems.
          I've contributed to designing and 3D printing custom marine parts, automating onboard systems by integrating with Garmin's marine network, and deploying UniFi networking at the helm. I've also explored circuit design, creating a CM5-based control panel to extend vessel automation.

          <br />
          <br />

          Away from the keyboard, I enjoy hiking, skiing, and surfing. I'm also a huge fan of working on my car and watching Formula 1.

          <br />
          <br />

          Looking for my resume? You can find a copy of it <a href='https://drive.google.com/file/d/1GCJ5iui-pDvGfufjczwHaxJumnKLlaQc/view?usp=sharing' target="_blank" className='underline'>here</a>!

        </CardContent>
      </Card>

    </div>
  )
}
