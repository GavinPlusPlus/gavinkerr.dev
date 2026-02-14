/// vesselview-data.ts
/// Data file for the VesselView project details.
///
/// Author: Gavin Kerr
/// Date: Mon Nov 18 2024

import { GalleryEntry } from '@/data/gallery-entry';

import Home from '@/assets/v2_images/home.png'
import About from '@/assets/v2_images/about.png'
import Bom from '@/assets/v2_images/bom_view.png'
import Gantt from '@/assets/v2_images/gantt.png'
import Item_details_2 from '@/assets/v2_images/item_details_2.png'
import Item_overview from '@/assets/v2_images/item_overview.png'
import Item_tiled from '@/assets/v2_images/items_tiled.png'
import Login from '@/assets/v2_images/login.png'
import PR_shopping from '@/assets/v2_images/pr_overview.png'

export const VesselViewImagesV2: GalleryEntry[] = [
    {
        imageUrl: Login,
        altText: 'Login Page',
        description: "The login page, in which users can use their username/password or scan their employee NFC car (MiFare DesFire) on a dedicated Kiosk."
    },
    {
        imageUrl: Item_details_2, 
        altText: "Item Details Page",
        description: "The item details page where all known data about an item is stored. Additionally any accompanying documents can be stored here."        
    },
    {
        imageUrl: PR_shopping,
        altText: "Purchase Request Shopping View",
        description: "This page offers a streamlined experience for employees out in the shop to request min/max items to be ordered. Purchasers can later fulfill these ate there respective vendors."
    },
        {
        imageUrl: Gantt,
        altText: "Schedule Gantt View",
        description: "This page overs an over view of our entire production, with each critical stage of production being broken down by customer and process."
    },
    {
        imageUrl: Bom,
        altText: "Template BOM View",
        description: "Template BOMs allow us to organize every part of our boats down to the Engineering Code, allowing for highly refined organization for each individual system."
    },
    {
        imageUrl: Item_tiled,
        altText: "Tiled Item View",
        description: "The built in windowing system allows you to interact with various different items, orders, and BOMs all without losing your place."
    },
    {
        imageUrl: Item_overview,
        altText: "Item Overview Page",
        description: "A brief overview of the status of various fields on your item repository."
    },
    {
        imageUrl: Home,
        altText: "Home View",
        description: "The main dashboard, allowing users to learn whats new or generate a Quick Login code for ordering on the accompanying React Native Mobile App."
    },
    {
        imageUrl: About,
        altText: 'VesselView About Page',
        description: "The VesselView about page, providing a brief overview of the application."
    }
]


