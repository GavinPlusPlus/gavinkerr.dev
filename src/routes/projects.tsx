import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='transition-all animate-fade-in'>
      <div className='flex flex-col'>

        <div className='w-full'>
          <h1 className='text-4xl font-bold'>Projects</h1>
          <p className='mt-2'>Here's assorted list of projects I have or am currently working on.</p>
        </div>

        <div className='mt-5'>
          <div className='flex flex-col space-y-4'>

            <Card>
              <CardHeader>
                <CardTitle className='text-3xl'>NetMax</CardTitle>
                <CardDescription>
                  Timeline: <Badge>September 2024</Badge> - <Badge>Current</Badge>
                </CardDescription>
                <CardContent className='p-0'>
                  <div>
                    <div className='mt-4 text-2xl text-bold'>
                      What is it?
                    </div>
                    <div className='mt-1'>

                      Serving as one of the few sponsored projects for the Fall 2024 semester, myself, along with three of my classmates are working closely with <a href="https://www.l3harris.com/" target="_blank" className='underline'>L3 Harris</a> to develop a simplified network testing API for their engineers.

                      <br />
                      <br />

                      The project's goal is to provide a single, common interface for setting up and running network tests across various Network Traffic Generators (NTGs) (eg. TRex, Ixia, Spirent) that L3 Harris uses in their testing labs.

                      <br />
                      <br />

                      The project is still in the early stages of development, but we're excited to be working with L3 Harris and are looking forward to delivering a product that will help their engineers be more efficient in their testing processes.

                    </div>
                    <div className='mt-4 text-2xl text-bold'>
                      Teammates
                    </div>
                    <div className='mt-1 flex flex-col'>
                      <a href="https://daxmcpartland.github.io/" target="_blank" className='underline'>Dax McPartland</a>
                      <a href="https://www.linkedin.com/in/jack-severson-26618b255/" target="_blank" className='underline'>Jack Severson</a>
                      <a href="https://www.linkedin.com/in/ryan-taffe-549b3b260/" target="_blank" className='underline'>Ryan Taffe</a>
                    </div>
                  </div>

                  <div>
                    <div className='mt-4 text-2xl text-bold'>
                      Technologies
                    </div>
                    <div className='mt-1 flex flex-row flex-wrap gap-1'>
                      <Badge>C#</Badge>
                      <Badge>ASP.NET</Badge>
                      <Badge>EntityFramework</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>React</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>TailwindCSS</Badge>
                      <Badge>Docker</Badge>
                      <Badge>Python</Badge>
                      <Badge>TRex</Badge>
                      <Badge>Ixia</Badge>
                      <Badge>Spirent</Badge>
                    </div>
                  </div>

                </CardContent>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-3xl'>VesselView</CardTitle>
                <CardDescription>
                  Timeline: <Badge>June 2023</Badge> - <Badge>Current</Badge>
                </CardDescription>
                <CardContent className='p-0'>
                  <div>
                    <div className='mt-4 text-2xl text-bold'>
                      What is it?
                    </div>
                    <div className='mt-1'>
                      VesselView is a full stack web application that I developed in house for <a href="https://lindellyachts.com/" target="_blank" className='underline'>Lindell Yachts</a> that serves as a central hub for managing parts, inventory, and BOMs for their various models.

                      <br />
                      <br />

                      Working with the team at Lindell Yachts, I've been able to develop a system that is tailored to their specific needs and requirements, including custom integrations with other software systems. (eg. QuickBooks, Excel, Primavera P6)

                      <br />
                      <br />

                      Since the project is an internal tool and under active development, I'm unable to share any links to source code but I'm happy to discuss the project and provide more information if you're interested! Or you can click the button below to view some screenshots of the project.

                      <Link to='/vesselview'>
                        <Button className='w-full my-4'>
                          More Details
                        </Button>
                      </Link>

                    </div>
                  </div>

                  <div>
                    <div className='mt-4 text-2xl text-bold'>
                      Technologies
                    </div>
                    <div className='mt-1 flex flex-row flex-wrap gap-1'>
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

                </CardContent>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-3xl'>LetterSpy</CardTitle>
                <CardDescription>
                  Timeline: <Badge>May 2023</Badge> - <Badge>Current</Badge>
                </CardDescription>
                <CardContent className='p-0'>
                  <div>
                    <div className='mt-4 text-2xl text-bold'>
                      What is it?
                    </div>
                    <div className='mt-1'>

                      Originally starting as a project at <a href="https://www.bellarmineprep.org/" target="_blank" className='underline'>Bellarmine Preparatory School</a> in Tacoma WA,
                      LetterSpy is an educational game to help students with Dyslexia (like myself!) learn and recognize the differences between similar looking letters.

                      <br />
                      <br />

                      Based off of the original flash card game developed by the  <a href="https://www.arkinst.org/" target="_blank" className='underline'>ARK Institute of Learning</a>, I've been working on developing a mobile app version of the game that will be available on iOS for both iPhone and iPad.
                      Leveraging the flexibility of mobile devices, We've been able to integrate new modes and features to help students learn and practice in new ways.

                      <br />
                      <br />

                      The app is currently in development and I'm hoping to release it in the App Store in the near future.

                    </div>
                  </div>

                  <div>
                    <div className='mt-4 text-2xl text-bold'>
                      Technologies
                    </div>
                    <div className='mt-1 flex flex-row flex-wrap gap-1'>
                      <Badge>Swift</Badge>
                      <Badge>SwiftUI</Badge>
                      <Badge>StoreKit 2</Badge>
                      <Badge>CoreData</Badge>
                    </div>
                  </div>

                </CardContent>
              </CardHeader>
            </Card>


          </div>
        </div>

      </div>
    </div>
  )
}
