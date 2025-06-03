import { createFileRoute } from '@tanstack/react-router'
import { NameCard } from '@/components/name-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <div className='w-full transition-all animate-fade-in'>
      <NameCard />
      <br />

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
         
          I specialize in building internal web applications and tools that streamline operations and part procurement.
          In addition to my SWE role, I've also had the privilege of working with the enginnering team at Lindell to integrate new methods of manufacturing and assembly into their production, including the use of 3D printers.


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
