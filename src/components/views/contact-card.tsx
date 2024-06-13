/// contact-card.tsx
/// Layout for the main contact card that is reactive to sizing 
/// and has a hover effect
///
/// Author: Gavin Kerr
/// Date: Wed Jun 12 2024
/// Copyright 2023-2024 Gavin Kerr, All Rights Reserved.

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSkewEffect } from '@/hooks/useSkewEffect';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

interface ContactCardProps {
    className?: string;
}

export const ContactCard = ({ className }: ContactCardProps) => {

    const { onMouseMove, onMouseLeave, transform } = useSkewEffect(20);

    return (
        <Card className={cn('m-4 shadow-xl hover:shadow-2xl transition-all duration-500', className)}>
            <CardContent className='text-center'>
                <CardHeader className=''>
                    <CardTitle className='font-light text-4xl'>
                        Gavin Kerr
                    </CardTitle>
                    <div
                        className='min-w-[5em] max-w-[15em] mx-auto'>
                        <Avatar onMouseMove={onMouseMove}
                            onMouseLeave={onMouseLeave}
                            style={{ transform }}
                            className='h-full w-full shadow-lg hover:shadow-2xl transition-all duration-100 mx-auto mt-2'>
                            <AvatarImage src="https://gravatar.com/avatar/832764445dc859a8f99cf1a626c0c099fe3b142dfdb3a69ab3b37a7232e3809d?s=512" alt='Gavin Kerr' />
                            <AvatarFallback>
                                <Skeleton className='h-full w-full' />
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </CardHeader>
            </CardContent>
        </Card>
    )
}

