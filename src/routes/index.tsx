import { createFileRoute } from '@tanstack/react-router'
import { NameCard } from '@/components/name-card'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return (
    <div className='w-full transition-all animate-fade-in'>
      <NameCard />
      <br/>

      <div className='mt-3'>
        <b>Hey there!</b> My name is Gavin Kerr and I'm a 4th year student and software developer at the <a href='https://www.utah.edu/' target="_blank" className='underline'>University of Utah</a>, studying Computer Science.

        <br/>
        <br/>

        Originally from Washington State, I grew up in the cold and often rainy Pacific Northwest. During those colder months, I spent most of my free time learning how to code and building various projects. I've always had a passion for technology and learning, and I've been fortunate enough to have the opportunity to work on some really cool projects over the years.
      
        <br/>
        <br/>

        Away from the keyboard, I enjoy hiking, skiing, and surfing. Since moving to Utah, I've had the incredible opportunity to explore Salt Lake and the vast mountains that surround it. I'm also a huge fan of working on my car and watching Formula 1. 

        <br/>
        <br/>

        Looking for my resume? You can find a copy of it <a href='https://drive.google.com/file/d/1GCJ5iui-pDvGfufjczwHaxJumnKLlaQc/view?usp=sharing' target="_blank" className='underline'>here</a>!

      </div>
    </div>
  )
}
