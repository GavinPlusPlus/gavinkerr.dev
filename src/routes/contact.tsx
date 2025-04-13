import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full transition-all animate-fade-in">
      <div className="flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle className='text-4xl'>
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
              Got any questions or want to chat? Feel free to reach out!

            <div className="mt-5 text-center">
              <div className="text-2xl">
                <a href="mailto:me@gavinkerr.dev" className="underline">me@gavinkerr.dev</a>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
