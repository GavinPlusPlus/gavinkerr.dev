/// App.tsx
/// Main component of the webapp
///
/// Author: Gavin Kerr
/// Date: June 12th, 2024

import { ParticleBackground } from '@/components/custom/particle-background';
import { ContactCard } from '@/components/views/contact-card';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from './components/ui/scroll-area';

const App = () => {

  return (
    <div className='w-screen h-screen'>
      <div className='md:flex justify-center items-center animate-fade-in h-full'>

        <ContactCard className='mx-auto w-11/12 md:m-4 md:w-1/3 md:max-w-[400px]' />

        <div className='mx-auto w-11/12 md:w-2/3 md:m-4'>

          <ScrollArea className='flex flex-col gap-y-4 h-full overflow-y-auto'>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>


            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>


            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>


            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

            <Card className='mt-2'>
              <CardContent>
                <CardHeader>
                  <CardTitle className='text-3xl font-light'>
                    About Me
                  </CardTitle>
                </CardHeader>
                <h1 className='text-2xl'> Hey there! </h1>
                <p>My name is Gavin Kerr and I am a 4th year computer science student at the University of Utah. </p>
              </CardContent>
            </Card>

          </ScrollArea>

        </div>

      </div>

      <ParticleBackground />
    </div>
  )
}

export default App
