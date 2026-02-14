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
                            <div className="relative w-full aspect-video max-h-[250px] md:max-h-[350px] cursor-pointer group" 
                                 onClick={() => setSelectedImage(image)}>
                                <img 
                                    src={image.imageUrl}
                                    alt={image.altText}
                                    className="w-full h-full object-contain rounded-md transition-opacity group-hover:opacity-90" 
                                />
                            </div>
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
                    className='!max-w-[95vw] md:!max-w-[90vw] lg:!max-w-[85vw] xl:!max-w-[80vw] max-h-[95vh] overflow-hidden p-3 gap-2'>
                    <DialogHeader className="shrink-0">
                        <h2 className="text-base sm:text-lg dark:text-darkText text-text line-clamp-2">{selectedImage?.altText}</h2>
                    </DialogHeader>
                    <div className="flex items-center justify-center min-h-0 flex-1">
                        <img 
                            src={selectedImage?.imageUrl}
                            alt={selectedImage?.altText}
                            className="w-full h-full max-w-full max-h-[calc(95vh-140px)] object-contain" 
                        />
                    </div>
                    <div className="flex flex-col items-center dark:text-darkText text-text shrink-0">
                        <p className="text-xs sm:text-sm line-clamp-3">{selectedImage?.description}</p>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    );

}
