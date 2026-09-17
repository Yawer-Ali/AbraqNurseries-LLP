export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  category: "orchard" | "nursery" | "landscape" | "harvest";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image: "https://images.pexels.com/photos/18453079/pexels-photo-18453079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Mist-covered hills of Srinagar, Kashmir",
    category: "landscape",
  },
  {
    id: "g2",
    image: "https://images.pexels.com/photos/3127146/pexels-photo-3127146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Green saplings in nursery trays ready for planting",
    category: "nursery",
  },
  {
    id: "g3",
    image: "https://images.pexels.com/photos/18607500/pexels-photo-18607500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Apple tree branches laden with ripe fruit in Kashmir",
    category: "orchard",
  },
  {
    id: "g4",
    image: "https://images.pexels.com/photos/3019836/pexels-photo-3019836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Farmer harvesting apples in an orchard in India",
    category: "harvest",
  },
  {
    id: "g5",
    image: "https://images.pexels.com/photos/15908026/pexels-photo-15908026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Almond blossoms blooming in spring, Srinagar",
    category: "landscape",
  },
  {
    id: "g6",
    image: "https://images.pexels.com/photos/33328094/pexels-photo-33328094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Red cherries hanging from a tree branch in Kashmir",
    category: "orchard",
  },
  {
    id: "g7",
    image: "https://images.pexels.com/photos/32209937/pexels-photo-32209937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Young seedlings growing in bags at a nursery",
    category: "nursery",
  },
  {
    id: "g8",
    image: "https://images.pexels.com/photos/14961202/pexels-photo-14961202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Crates full of freshly picked apples",
    category: "harvest",
  },
  {
    id: "g9",
    image: "https://images.pexels.com/photos/15879648/pexels-photo-15879648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Srinagar mountain range at twilight",
    category: "landscape",
  },
  {
    id: "g10",
    image: "https://images.pexels.com/photos/7656739/pexels-photo-7656739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Person planting a sapling outdoors",
    category: "nursery",
  },
  {
    id: "g11",
    image: "https://images.pexels.com/photos/28939324/pexels-photo-28939324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Ripe apricots with red hue, Kashmir",
    category: "orchard",
  },
  {
    id: "g12",
    image: "https://images.pexels.com/photos/34060258/pexels-photo-34060258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Saffron crocus flowers blooming in an autumn field, Kashmir",
    category: "landscape",
  },
];
