// data/projects.ts
export interface Project {
  id: string;
  slug: string;
  name: string;
  configurations: string[];
  highlights: string[];
  image: string;
  gallery?: string[];
  rotateGallery?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "vistara-world",
    name: "Vistara World",
    configurations: ["1RK", "1BHK", "2BHK", "Shops"],
    highlights: ["Mumbai Pune Expressway Touch", "G+7 Tower", "Flats Starting From ₹22 Lakhs"],
    image: "/images/vistara-world/0001.jpg",
    gallery: [
      "/images/vistara-world/0002.jpg",
      "/images/vistara-world/0003.jpg",
      "/images/vistara-world/0004.jpg",
      "/images/vistara-world/0005.jpg",
      "/images/vistara-world/0006.jpg",
      "/images/vistara-world/0007.jpg",
      "/images/vistara-world/0008.jpg",
      "/images/vistara-world/0009.jpg",
      "/images/vistara-world/0010.jpg",
      "/images/vistara-world/0011.jpg",
      "/images/vistara-world/0012.jpg",
      "/images/vistara-world/0013.jpg",
      "/images/vistara-world/0014.jpg",
      "/images/vistara-world/0015.jpg",
    ],
    rotateGallery: true
  },
  {
    id: "10",
    slug: "vistara-garden",
    name: "Vistara Garden",
    configurations: ["1RK", "1BHK", "2BHK", "Shops"],
    highlights: ["Nature Integrated Living", "G+7 Tower", "Starting from ₹21 Lakhs"],
    image: "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0001.jpg",
    gallery: [
      "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0002.jpg",
      "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0004.jpg",
      "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0005.jpg",
      "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0006.jpg",
      "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0008.jpg",
      "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0009.jpg",
      "/images/vistara-garden/Vistara Garden SALE BROCHURE (Future Expansion) R1 (1)_page-0010.jpg",
    ],
    rotateGallery: true
  },
  {
    id: "2",
    slug: "dream-city",
    name: "Dream City",
    configurations: ["1RK", "1BHK", "2BHK Flats"],
    highlights: ["Prime Panvel Location", "G+12 Tower", "Starting from ₹17 Lakhs"],
    image: "/images/dream-city/0001.jpg",
    gallery: [
      "/images/dream-city/0002.jpg",
      "/images/dream-city/0003.jpg",
      "/images/dream-city/0004.jpg",
      "/images/dream-city/0005.jpg",
      "/images/dream-city/0006.jpg",
      "/images/dream-city/0007.jpg",
    ]
  },
  {
    id: "3",
    slug: "vrundavan-residency",
    name: "Vrundavan Residency",
    configurations: ["1RK", "1BHK", "2BHK Flats"],
    highlights: ["Mumbai Pune Expressway Connectivity", "G+7 Tower", "Starting From ₹21 Lakhs"],
    image: "https://images.openai.com/static-rsc-3/Hx6KW-j3QDaKsQFfXEb4rgDMvIA6J7OL-15UZ24rTJAT0UctvW84tWfOa-cJqX_74eEOv4uEXKqawMRfit-dZJEm9ftfDyr21ysd2lmNR9Y?purpose=fullsize&v=1",
  },
  {
    id: "4",
    slug: "nandanvan-heights",
    name: "Nandanvan Heights",
    configurations: ["1RK", "1BHK", "2BHK", "Shops"],
    highlights: ["RERA Approved", "10 mins from New Mumbai Airport", "12 mins from Panvel Railway Station"],
    image: "https://images.openai.com/static-rsc-3/Y0o_Cl2fb21L1aie8DVNovA-6vQy_dFy-Ck4CRRuHNDXdtCglCDJ2kRi0t_s-O8PAPO-mqxzn92wznRWyduo75WdBSvFJWqfPBkeNrDaiMY?purpose=fullsize&v=1",
  },
  {
    id: "5",
    slug: "urban-rain-forest",
    name: "Urban Rain Forest",
    configurations: ["1BHK", "1.5BHK", "2BHK"],
    highlights: ["Expressway Connectivity", "G+5 Tower", "Starting from ₹55 Lakhs"],
    image: "https://is1-3.housingcdn.com/4f2250e8/15ab7400c581ad96774cac2baf1825ee/v0/fs/hiranandani_golden_willows-panvel-navi%2Bmumbai-hiranandani_developers_pvt_ltd.jpeg",
  },
  {
    id: "6",
    slug: "jai-malhar-apartments",
    name: "Jai Malhar Apartments",
    configurations: ["1BHK", "2BHK Flats"],
    highlights: ["Phase 1 & Phase 2 Development", "G+7 Tower", "10 mins from Navi Mumbai Airport"],
    image: "/images/jai-malhar/e-JaiMalharPhaseIV-1 (1)_page-0001.jpg",
    gallery: [
      "/images/jai-malhar/e-JaiMalharPhaseIV-1 (1)_page-0002.jpg",
      "/images/jai-malhar/e-JaiMalharPhaseIV-1 (1)_page-0004.jpg",
      "/images/jai-malhar/e-JaiMalharPhaseIV-1 (1)_page-0006.jpg",
      "/images/jai-malhar/e-JaiMalharPhaseIV-1 (1)_page-0008.jpg",
      "/images/jai-malhar/e-JaiMalharPhaseIV-1 (1)_page-0010.jpg",
      "/images/jai-malhar/e-JaiMalharPhaseIV-1 (1)_page-0011.jpg",
    ]
  },
  {
    id: "7",
    slug: "gokul-heights",
    name: "Gokul Heights",
    configurations: ["1RK", "1BHK", "Shops"],
    highlights: ["Prime Location", "G+7 Tower", "Modern Amenities"],
    image: "/images/gokul-heights/Gokul Heights - Leaflet (1)_page-0001.jpg",
    gallery: [
      "/images/gokul-heights/Gokul Heights - Leaflet (1)_page-0002.jpg",
      "/images/gokul-heights/Gokul Heights - Leaflet (1)_page-0003.jpg",
    ]
  },
  {
    id: "8",
    slug: "bright-enclave",
    name: "Bright Enclave",
    configurations: ["1BHK", "2BHK", "Shops"],
    highlights: ["Prime Location", "G+7 Tower", "RERA Approved", "Modern Amenities"],
    image: "/images/bright-enclave/BRIGHT ENCLAVE_page-0001.jpg",
    gallery: [
      "/images/bright-enclave/BRIGHT ENCLAVE_page-0002.jpg",
      "/images/bright-enclave/BRIGHT ENCLAVE_page-0003.jpg",
      "/images/bright-enclave/BRIGHT ENCLAVE_page-0004.jpg",
    ]
  },
  {
    id: "9",
    slug: "shanmukhi",
    name: "Shanmukhi",
    configurations: ["1BHK", "2BHK", "Shops"],
    highlights: ["Prime Location", "G+7 Tower", "Modern Amenities", "Commercial Spaces"],
    image: "/images/shanmukhi/0001.jpg",
    gallery: [
      "/images/shanmukhi/0002.jpg",
      "/images/shanmukhi/0003.jpg",
      "/images/shanmukhi/0004.jpg",
      "/images/shanmukhi/0005.jpg",
      "/images/shanmukhi/0006.jpg",
      "/images/shanmukhi/0007.jpg",
      "/images/shanmukhi/0008.jpg",
      "/images/shanmukhi/0009.jpg",
      "/images/shanmukhi/0010.jpg",
      "/images/shanmukhi/0011.jpg",
      "/images/shanmukhi/0012.jpg",
      "/images/shanmukhi/0013.jpg",
      "/images/shanmukhi/0014.jpg",
      "/images/shanmukhi/0015.jpg",
    ],
    rotateGallery: true
  }
];
