/// App.tsx
/// Main component of the webapp
///
/// Author: Gavin Kerr
/// Date: June 12th, 2024

import { ParticleBackground } from '@/components/custom/particle-background';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

const App = () => {

  return (
    <div className='w-screen h-screen'>
      <div className='flex justify-center items-center'>
        
        <Avatar className='w-20 h-20'>
          <AvatarImage src='https://gravatar.com/avatar/832764445dc859a8f99cf1a626c0c099fe3b142dfdb3a69ab3b37a7232e3809d' alt='Gavin Kerr' />
          <AvatarFallback>GK</AvatarFallback>
        </Avatar>

      </div>

      <ParticleBackground />
    </div>
  )
}

export default App
