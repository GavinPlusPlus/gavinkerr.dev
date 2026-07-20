/// vesselview-data.ts
/// Data file for the VesselView project details.
///
/// Author: Gavin Kerr
/// Date: Mon Nov 18 2024

import { GalleryEntry } from "@/data/gallery-entry";

import Home from "@/assets/v3_images/home.jpeg";
import Bom from "@/assets/v3_images/bom-breakdown.jpeg";
import Gantt from "@/assets/v3_images/schedule.jpeg";
import Item_details_2 from "@/assets/v3_images/item-detail.jpeg";
import Item_overview from "@/assets/v3_images/item-details.jpeg";
import Item_search from "@/assets/v3_images/item-search.jpeg";
import Login from "@/assets/v3_images/login.jpeg";
import Purchasing from "@/assets/v3_images/purchasing.jpeg";

export const VesselViewImagesV2: GalleryEntry[] = [
  {
    imageUrl: Login,
    altText: "Login Page",
    description:
      "The login page, in which users can use their username/password or scan their employee NFC card (MiFare DesFire) on a dedicated Kiosk.",
  },
  {
    imageUrl: Item_details_2,
    altText: "Item Details Page",
    description:
      "The item details page where all known data about an item is stored. Additionally any accompanying documents can be stored here.",
  },
  {
    imageUrl: Item_search,
    altText: "Item Search Page",
    description:
      "Leveraging a combination of lexicographical and vector search techniques, users can efficiently locate items within the company.",
  },
  {
    imageUrl: Purchasing,
    altText: "Purchase Order Overview",
    description:
      "This page provides a top-level overview of recent purchase order activity within the system. Please note some details may have been redacted for privacy reasons.",
  },
  {
    imageUrl: Gantt,
    altText: "Schedule Gantt View",
    description:
      "This page offers an overview of our entire production, with each critical stage of production being broken down by customer and process.",
  },
  {
    imageUrl: Bom,
    altText: "Template BOM View",
    description:
      "Template BOMs allow us to organize every part of our boats down to the Engineering Code, allowing for highly refined organization for each individual system. Please note some details may have been redacted for privacy reasons.",
  },
  {
    imageUrl: Item_overview,
    altText: "Item Overview Page",
    description:
      "A brief overview of the status of various fields on your item repository. Please note some details may have been redacted for privacy reasons.",
  },
  {
    imageUrl: Home,
    altText: "Home View",
    description:
      "The main dashboard, allowing users to learn whats new or generate a Quick Login code for ordering on the accompanying React Native Mobile App.",
  },
];
