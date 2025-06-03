/// name-card.tsx
/// Card with profile picture, name, and short bio
///
/// Author: Gavin Kerr
/// Date: Sun Nov 17 2024

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const NameCard = () => {

    return (
        <div className="w-full">
            <div className="flex md:hidden items-center justify-between flex-col">
                <div className="flex-none md:max-w-[250px] max-w-[200px]">
                    <Avatar className="w-full h-full mb-4 md:mb-0">
                        <AvatarImage src="https://gravatar.com/avatar/832764445dc859a8f99cf1a626c0c099fe3b142dfdb3a69ab3b37a7232e3809d?s=512" alt='Gavin Kerr' />
                        <AvatarFallback>
                            <Skeleton className="rounded-full md:w-[225px] w-[150px] md:h-[225px] h-[150px]"></Skeleton>
                        </AvatarFallback>
                    </Avatar>
                </div>
                <Card>
                    <CardContent className="grow mx-auto">
                        <div className="md:text-5xl text-3xl font-bold">Gavin Kerr</div>
                        <div className="md:text-2xl text-lg">Software Developer @ Lindell Yachts</div>
                    </CardContent>
                </Card>
            </div>
            <div className="hidden md:flex items-center justify-between flex-row">
                <Card>
                    <CardContent className="grow mx-auto">
                        <div className="md:text-5xl text-3xl font-bold">Gavin Kerr</div>
                        <div className="md:text-2xl text-lg">Software Developer @ Lindell Yachts</div>
                    </CardContent>
                </Card>
                <div className="flex-none md:max-w-[250px] max-w-[200px]">
                    <Avatar className="w-full h-full mt-4 md:mt-0">
                        <AvatarImage src="https://gravatar.com/avatar/832764445dc859a8f99cf1a626c0c099fe3b142dfdb3a69ab3b37a7232e3809d?s=512" alt='Gavin Kerr' />
                        <AvatarFallback>
                            <Skeleton className="rounded-full md:w-[225px] w-[150px] md:h-[225px] h-[150px]"></Skeleton>
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );

}
