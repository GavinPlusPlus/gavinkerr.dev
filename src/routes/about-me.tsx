import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /about-me!'
}
