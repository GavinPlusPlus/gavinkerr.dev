/// App.tsx
/// Main component of the webapp
///
/// Author: Gavin Kerr
/// Date: June 12th, 2024

import { ParticleBackground } from '@/components/custom/particle-background';
import { Avatar, AvatarFallback , AvatarImage} from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSkewEffect } from '@/hooks/useSkewEffect';

/*
        <Avatar className='w-20 h-20'>
          <AvatarImage src='https://gravatar.com/avatar/832764445dc859a8f99cf1a626c0c099fe3b142dfdb3a69ab3b37a7232e3809d' alt='Gavin Kerr' />
          <AvatarFallback>GK</AvatarFallback>
        </Avatar>
*/

const App = () => {

  const {onMouseMove, onMouseLeave, transform} = useSkewEffect(5);

  return (
    <div className='w-screen h-screen'>
      <div className='flex justify-center items-center animate-fade-in h-full'>

        <Card className='h-full w-full mx-4 my-4 md:w-1/2 md:h-1/2 shadow-xl hover:shadow-2xl transition-all duration-75'
          onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={{transform}}>
          <CardContent>
            <CardHeader>
              <CardTitle>
                Hey there!
              </CardTitle>
            </CardHeader>
          </CardContent>
        </Card>

      </div>

      <ParticleBackground />
    </div>
  )
}

export default App
