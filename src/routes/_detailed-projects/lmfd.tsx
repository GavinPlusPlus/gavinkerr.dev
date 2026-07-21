/// lmfd.tsx
/// Detailed LMFD page
///
/// Author: Gavin Kerr
/// Date: Mon Jul 20 2026
/// Copyright 2023-2026 Gavin Kerr, All Rights Reserved.

import { ImageGallery } from "@/components/image-gallery";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LMFDImages } from "@/data/projects/lmfd-data";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_detailed-projects/lmfd")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="w-full flex justify-between">
        <h1 className="text-4xl font-bold">LMFD</h1>
        <h1 className="text-2xl font-bold items-center align-middle">
          <Badge>September 2025</Badge> - <Badge>Current</Badge>
        </h1>
      </div>

      <Separator className="w-full my-2 dark:bg-white bg-current" />

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Photos</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageGallery images={LMFDImages} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What is it?</CardTitle>
          </CardHeader>
          <CardContent>
            The Lindell Multi-Function Display (LMFD) or more specifically the
            LMFD-Touch-10 is a RaspberryPi CM5 based device I designed for the
            48' model at{" "}
            <a
              href="https://lindellyachts.com/"
              target="_blank"
              className="underline"
            >
              Lindell Yachts
            </a>{" "}
            that serves as a central hub for controlling lights, pumps, and
            other systems on the boat.
            <br />
            <br />
            The device itself consists of a custom designed PCB that carries the
            System on Module, a 10" touch screen, and a fully custom enclosure
            designed to blend in with the rest of the boat's interior.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Why?</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              The LMFD was born from the need for a more streamlined and
              user-friendly way of interfacing with all of the digital circuits
              on our new 48' model. Existing options we could install from
              Garmin proved to be overkill in some areas (essentially being a
              full chart plotter just used for switching), and underwhelming in
              performance (seconds long page switches). Additionally,
              pre-exiting options shut down when the engines transitioned from
              on to off, making them a non starter for a 24/7 system.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">The Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Leveraging the fact that Garmin's digital switching system
              utilizes simple webpages for the user interface, a simple linux
              based device, like a RaspberryPi, quickly presented itself as a
              perfect solution. After some quick validation with hardware and
              software prototypes, I designed a custom PCB to expose the various
              interfaces we would need to integrate with the boat. In addition
              to the PCB, I designed a custom wrapper around the existing web
              interfaces to provide a more user-friendly experience, with quick
              app switching and a more focused look and feel.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Challenges Along The Way</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <strong>Networking:</strong>
                <p>
                  One of the biggest challenges I faced was reverse engineering
                  the mDNS and SSDP protocols used on the boat to allow the LMFD
                  to discover and reliably communicate with the various devices
                  on board. By design, when the main electronics are off, and
                  therefore all other Garmin MFDs, there is no DHCP server on
                  the network. This meant that the LMFD had to be able to
                  reliably discover and communicate with other devices on the
                  network utilizing IPV6-LL address, along with the
                  aforementioned mDNS and SSDP protocols. Making matters worse,
                  modern web browsers, including the embedded Chromium browser
                  bundled in with Electron, does not support routing directly to
                  IPV6 addresses. This was solved by implementing a custom YARP
                  reverse proxy on the server side to forward requests, netting
                  a nice performance boost as well through some caching.
                </p>
              </li>
              <br />
              <li>
                <strong>Performance:</strong>
                <p>
                  Another challenge was ensuring I could squeeze as much
                  performance as I could out of the CM5. To do this, I traded
                  X11 for Wayland as the display server, and enabled an
                  assortment of performance optimizations for the Electron
                  application. In web focused benchmarks like Speedometer 2.1,
                  the final LMFD revision was able to score an average score of
                  ~105, while the Garmin MFD it replaced scored ~8. This was a
                  huge win for the user experience, as switching between tabs
                  dropped from a 1-3 second delay to near instant. For an even
                  better comparison, the main Garmin GPSMAP 9219 MFDs in the
                  boat score ~60 on average, placing it behind the LMFD as well.
                </p>
              </li>
              <br />
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Specs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <strong>SoM (System-on-Module):</strong> RaspberryPi CM5
              </li>
              <li>
                <strong>Memory:</strong> 4Gb
              </li>
              <li>
                <strong>Storage:</strong> 32Gb eMMC
              </li>
              <li>
                <strong>Display:</strong> 10.1" 1280x800 IPS Touchscreen
              </li>
              <li>
                <strong>Enclosure:</strong> Custom designed and 3D printed in
                ASA-GF. Bezel printed from ASA.
              </li>
              <li>
                <strong>Connectivity:</strong> Wi-Fi, Bluetooth, Ethernet, 2x
                USB 3.0
              </li>
              <li>
                <strong>Power:</strong> 9-36V DC input, 25W max power
                consumption, 8W Typical.
              </li>
              <li>
                <strong>Operating System:</strong> Debian 13 (Trixie) with
                custom overlays for the display.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Technologies and Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row flex-wrap gap-1">
              <Badge>C#</Badge>
              <Badge>ASP.NET</Badge>
              <Badge>SQLite</Badge>
              <Badge>React</Badge>
              <Badge>Electron</Badge>
              <Badge>TypeScript</Badge>
              <Badge>KiCad</Badge>
              <Badge>Autodesk Fusion</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
