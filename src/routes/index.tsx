import * as React from 'react'
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

        I am passionate about all different kinds of software development and have worked on a variety of different projects. 
      </div>
    </div>
  )
}
