/// useSkewEffect.ts
/// Hook that returns a css string that can be used to determine the skew of an element.
///
/// Author: Gavin Kerr
/// Date: Wed Jun 12 2024

import { useState, MouseEvent } from "react";

export const useSkewEffect = (skewFactor: number = 5, perspective: number = 4000) => {
    const [transform, setTransform] = useState('');

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {

        // Get X and Y relative to coordinates of the element
        const { clientX, clientY, currentTarget } = e;
        const { offsetWidth, offsetHeight } = currentTarget;
        const x = (clientX - currentTarget.offsetLeft) / offsetWidth;
        const y = (clientY - currentTarget.offsetTop) / offsetHeight;

        const rotateX = (y - 0.5) * -skewFactor; 
        const rotateY = (x - 0.5) * skewFactor; 

        // Update transform string
        setTransform(`perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);

    }

    // Function called when the mouse leaves the element
    const onMouseLeave = () => {
        setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`);
    }

    return { onMouseLeave, onMouseMove, transform };
}