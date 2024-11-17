import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full transition-all animate-fade-in">
      <div className="flex flex-col">
        <div className="w-full">
          <h1 className="text-4xl font-bold">Contact</h1>
          <div>
            Got any questions or want to chat? Feel free to reach out!
          </div>
        </div>

        <div className="mt-5 text-center">
          <div className="text-2xl">
            <a href="mailto:me@gavinkerr.dev" className="underline">me@gavinkerr.dev</a>
          </div>

        </div>
      </div>
    </div>
  )
}
