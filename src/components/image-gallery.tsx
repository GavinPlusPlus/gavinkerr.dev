/// image-gallery.tsx
/// Custom component utilizing the Carousel component to display a gallery of images.
///
/// Author: Gavin Kerr
/// Date: Mon Nov 18 2024

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { GalleryEntry } from '@/data/gallery-entry';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';
import { useState } from 'react';

export interface ImageGalleryProps {
    images: GalleryEntry[];
    className?: string;
    autoplayDuration?: number;
}

export const ImageGallery = ({ images, className, autoplayDuration = 5000 }: ImageGalleryProps) => {

    const [selectedImage, setSelectedImage] = useState<GalleryEntry | null>(null);

    return (
        <>

            <Carousel
                className={cn("rounded-md", className)}
                plugins={[
                    Autoplay({
                        delay: autoplayDuration,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <div className='hidden lg:block' >
                    <CarouselPrevious />
                </div>
                <CarouselContent className="flex space-x-4">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="w-full">
                            <img src={image.imageUrl}
                                alt={image.altText}
                                className="w-full rounded-md"
                                onClick={() => setSelectedImage(image)} />
                            <div className="flex flex-col mt-2 items-center">
                                <Badge className="text-xs w-fit my-1">{index + 1} of {images.length}</Badge>
                                <p className="mt-1">{image.description}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='hidden lg:block' >
                    <CarouselNext />
                </div>

                <div className='lg:hidden py-4'>
                    <div className='absolute mt-2 left-[50%]'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>

            </Carousel>

            <Dialog
                open={selectedImage !== null}
                onOpenChange={() => setSelectedImage(null)}
            >
                <DialogContent
                    className='max-w-fit'>
                    <DialogHeader>
                        <h2 className="text-2xl dark:text-darkText text-text">{selectedImage?.altText}</h2>
                    </DialogHeader>
                    <img src={selectedImage?.imageUrl}
                        alt={selectedImage?.altText}
                        className="mx-auto rounded-md" />
                    <div className="flex flex-col mt-2 items-center dark:text-darkText text-text">
                        <p className="mt-1">{selectedImage?.description}</p>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    );

}
