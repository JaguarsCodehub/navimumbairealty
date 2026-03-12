// data/projects.ts
export interface Project {
  id: string;
  slug: string;
  name: string;
  configurations: string[];
  highlights: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "vistara-world",
    name: "Vistara World",
    configurations: ["1RK", "1BHK", "2BHK", "Shops"],
    highlights: ["Mumbai Pune Expressway Touch", "G+7 Tower", "Flats Starting From ₹22 Lakhs"],
    image: "https://is1-3.housingcdn.com/4f2250e8/15ab7400c581ad96774cac2baf1825ee/v0/fs/hiranandani_golden_willows-panvel-navi%2Bmumbai-hiranandani_developers_pvt_ltd.jpeg",
  },
  {
    id: "2",
    slug: "dream-city",
    name: "Dream City",
    configurations: ["1RK", "1BHK", "2BHK Flats"],
    highlights: ["Prime Panvel Location", "G+12 Tower", "Starting from ₹17 Lakhs"],
    image: "https://www.puravankara.com/_next/image?q=75&url=https%3A%2F%2Fbackend.puravankara.com%2Fuploads%2FBuilding_Balcony_View_01_e40a8bcbcf.png&w=3840",
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
    image: "https://www.puravankara.com/_next/image?q=75&url=https%3A%2F%2Fbackend.puravankara.com%2Fuploads%2FBuilding_Balcony_View_01_e40a8bcbcf.png&w=3840",
  }
];
