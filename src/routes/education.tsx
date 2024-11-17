import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/education')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /education!'
}
