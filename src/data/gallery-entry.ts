/// gallery-entry.ts
/// Interface for a gallery entry. Contains the image URL and optional alt text.
///
/// Author: Gavin Kerr
/// Date: Mon Nov 18 2024
/// Copyright 2023-2024 Gavin Kerr, All Rights Reserved.

export interface GalleryEntry
{
    imageUrl: string;
    altText?: string;
    description?: string;
}
