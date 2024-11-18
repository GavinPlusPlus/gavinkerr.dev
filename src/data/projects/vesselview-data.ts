/// vesselview-data.ts
/// Data file for the VesselView project details.
///
/// Author: Gavin Kerr
/// Date: Mon Nov 18 2024

import { GalleryEntry } from '@/data/gallery-entry';

import AboutImage from '@/assets/vesselview_images/about.png';
import ItemImage from '@/assets/vesselview_images/item-overview.png'
import LoginImage from '@/assets/vesselview_images/login.png'
import OrderDemoImage from '@/assets/vesselview_images/order-demo.png'
import WBSDemo from '@/assets/vesselview_images/WBS.png'

export const VesselViewImages: GalleryEntry[] = [
    {
        imageUrl: LoginImage,
        altText: 'VesselView Login Page',
        description: "The login page, where users can authenticate to access the application."
    },
    {
        imageUrl: ItemImage,
        altText: 'VesselView Item Overview',
        description: "The VesselView item overview page. Displaying a chart of current item statuses, along with the recency of the data."
    },
    {
        imageUrl: OrderDemoImage,
        altText: 'VesselView Order Demo',
        description: "An example of an order within VesselView. Note: Some data has been obfuscated for privacy reasons."
    },
    {
        imageUrl: WBSDemo,
        altText: 'VesselView WBS Demo',
        description: "A demonstration of the Work Breakdown Structure (WBS) within VesselView. Note: Some data has been obfuscated for privacy reasons."
    },
    {
        imageUrl: AboutImage,
        altText: 'VesselView About Page',
        description: "The VesselView about page, providing a brief overview of the application."
    }
]

