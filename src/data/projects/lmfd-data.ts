import { GalleryEntry } from "@/data/gallery-entry";

import lmfd_desk from "@/assets/lmfd/desk.jpeg";
import lmfd_back from "@/assets/lmfd/lmfd.png";
import lmfd_installed from "@/assets/lmfd/installed.jpeg";
import lmfd_pcb from "@/assets/lmfd/pcb.jpeg";

export const LMFDImages: GalleryEntry[] = [
  {
    imageUrl: lmfd_pcb,
    altText: "A close-up of the LMFD PCB.",
    description: "A close-up of the first LMFD PCB I assembled.",
  },
  {
    imageUrl: lmfd_back,
    altText: "A rendering from Fusion 360 showing the back of the LMFD.",
    description:
      "This image shows the back of the LMFD as rendered in Fusion 360. To get the two-tone effect, a 5 Toolhead Prusa XL is used for printing.",
  },
  {
    imageUrl: lmfd_installed,
    altText: "The LMFD installed in its intended environment.",
    description:
      "This photo shows the LMFD installed in 4801 mid-build in the shop.",
  },
  {
    imageUrl: lmfd_desk,
    altText: "A photo of me working on the first prototype of the LMFD.",
    description:
      "The first boot-up on real hardware. In this photo I'm testing out the first PCB I assembled with somewhat complete hardware.",
  },
];
