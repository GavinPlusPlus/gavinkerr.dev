/// name-card.tsx
/// Card with profile picture, name, and short bio
///
/// Author: Gavin Kerr
/// Date: Sun Nov 17 2024

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const NameCard = () => {

    return (
        <div className="w-full">
            <div className="flex items-center gap-2">
                <div className="flex-grow mx-auto">
                    <div className="lg:text-4xl text-3xl font-bold">Gavin Kerr</div>
                    <div className="text-lg">Student and Software Developer</div>
                </div>
                <div className="flex-none max-w-[175px] ">
                    <Avatar className="w-full h-full">
                        <AvatarImage src="https://gravatar.com/avatar/832764445dc859a8f99cf1a626c0c099fe3b142dfdb3a69ab3b37a7232e3809d?s=512" alt='Gavin Kerr' />
                        <AvatarFallback>GK</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );

}
