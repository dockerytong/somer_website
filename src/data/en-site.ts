export const enNews = [
  {
    slug: 'hui-wu-acs-earth-space-chemistry',
    title: 'Hui Wu paper accepted by ACS Earth and Space Chemistry',
    date: new Date('2026-05-29'),
    summary:
      'Hui Wu and coauthors report how decade-long soil cover promotes mineral weathering and organic matter accrual in iron ore tailings while deteriorating topsoil.',
  },
  {
    slug: 'tong-liu-water-research-nitrate-vanadium',
    title: 'Tong Liu paper accepted by Water Research',
    date: new Date('2026-05-16'),
    summary:
      'This study shows that carbon availability governs the stability of nitrate-vanadium co-remediation in stratified biofilters.',
  },
  {
    slug: 'wenyu-river-park-group-photo',
    title: 'SOMER group outing at Wenyu River Park',
    date: new Date('2026-05-16'),
    summary: 'The SOMER group visited the Yunchang Terraces area of Beijing Wenyu River Park and took a group photo.',
    image: '/images/news/wenyu-river-park-2026.jpg',
  },
  {
    slug: 'chenglong-lu-chemical-geology',
    title: 'Chenglong Lu paper accepted by Chemical Geology',
    date: new Date('2026-05-10'),
    summary:
      'Chenglong Lu and coauthors reveal how mineral phase transformation drives DOM molecular fractionation during organic acid-driven weathering of bauxite residue.',
  },
  {
    slug: 'tong-liu-nature-communications-iron-cycle',
    title: 'Tong Liu paper accepted by Nature Communications',
    date: new Date('2026-05-09'),
    summary:
      'This work identifies mineral photocatalysis as a pathway mediating Fe(II)/Fe(III) cycling in the euphotic zone.',
  },
  {
    slug: 'tong-liu-cr-bioreduction-water-science-engineering',
    title: 'Tong Liu paper accepted by Water Science and Engineering',
    date: new Date('2026-02-28'),
    summary:
      'This study develops a microbial-mineral-biomass composite strategy to improve Cr(VI) bioreduction under continuous flow.',
  },
  {
    slug: 'somer-2025',
    title: 'SOMER 2025: A year in soil',
    date: new Date('2026-02-17'),
    summary: 'A brief annual note on SOMER group growth, research progress, publications, and field-oriented restoration work.',
  },
  {
    slug: 'wei-fu-gcb-drought-amf-diversity',
    title: 'Wei Fu paper accepted by Global Change Biology',
    date: new Date('2026-01-12'),
    summary:
      'Wei Fu and coauthors show that plant productivity responses to extreme drought are linked to arbuscular mycorrhizal fungal diversity.',
  },
];

export const enResearch = [
  {
    slug: 'pedogenesis-mechanisms',
    title: 'Tailing pedogenesis and ecological reconstruction',
    summary:
      'We investigate mineral weathering, secondary mineral formation, organic carbon stabilization, and structural development during the transformation of mine tailings into soil-like substrates.',
    cover: '/images/docx/image4.png',
  },
  {
    slug: 'mycorrhizal-strategies',
    title: 'Soil structure and ecological function reconstruction',
    summary:
      'We examine how plant roots, rhizosphere microorganisms, and arbuscular mycorrhizal fungi regulate aggregate formation, organic matter accumulation, nutrient cycling, and plant stress resistance.',
    cover: '/images/docx/image14.png',
  },
  {
    slug: 'interface-processes',
    title: 'Organo-mineral interface processes and element cycling',
    summary:
      'We characterize electron transfer, mineral dissolution and precipitation, metal transformation, and molecular fractionation of organic matter at mineral-water-organic matter-microbe interfaces.',
    cover: '/images/docx/image13.png',
  },
];

export const enPeople: Record<string, { name: string; role: string; research?: string; note?: string; origin?: string; period?: string; destination?: string }> = {
  'songlin-wu': {
    name: 'Songlin Wu',
    role: 'Professor / PhD Supervisor',
    research: 'Soil organo-mineral interactions, ecological rehabilitation of mine wastes, and biogeochemical element cycling.',
    period: '2025-present',
    origin: 'Research Center for Eco-Environmental Sciences, CAS',
  },
  'wei-fu': {
    name: 'Wei Fu',
    role: 'Assistant Professor',
    research: 'Arbuscular mycorrhizal fungi, soil ecology, and ecosystem responses to climate extremes.',
    period: '2024-present',
    origin: 'To be updated',
  },
  'tong-liu': {
    name: 'Tong Liu',
    role: 'Assistant Professor',
    research: 'Mineral-microbe interfaces, interfacial electron transfer, Fe-C coupling, and pollution control.',
    period: '2025.10-present',
    origin: 'Boya Postdoctoral Fellow, Peking University',
  },
  'postdoc-hui-wu': { name: 'Hui Wu', role: 'Postdoctoral Researcher', research: 'Mine tailing pedogenesis and soil organic matter stabilization.', origin: 'RCEES, CAS' },
  'postdoc-shiqi-zhang': { name: 'Shiqi Zhang', role: 'Postdoctoral Researcher', research: 'Ecological rehabilitation of degraded soils and soil structure reconstruction.', origin: 'RCEES, CAS' },
  'postdoc-minghan-wang': { name: 'Minghan Wang', role: 'Postdoctoral Researcher', research: 'Coupled stabilization of heavy metals and carbon by soil amendments.', origin: 'Hunan Agricultural University' },
  'postdoc-na-li': { name: 'Na Li', role: 'Postdoctoral Researcher', research: 'Microbial necromass carbon stabilization during mine tailing pedogenesis.', origin: 'Northwest A&F University' },
  'postdoc-chenglong-lu': { name: 'Chenglong Lu', role: 'Postdoctoral Researcher', research: 'Turnover of amorphous minerals during mine tailing pedogenesis.', origin: 'The University of Queensland' },
  'master-chen-suixiaochen': { name: 'Suixiaochen Chen', role: 'PhD Student', research: 'Reactive iron minerals in soils.' },
  'phd-feng-qi': { name: 'Qi Feng', role: 'PhD Student', research: 'Weathering of sulfidic tailings.' },
  'phd-wu-yuqi': { name: 'Yuqi Wu', role: 'PhD Student', research: 'Adsorption and transformation of AMF exudates on minerals.' },
  'master-yang-shuang': { name: 'Shuang Yang', role: 'PhD Student', note: 'Visiting', research: 'Development of tailing soil structure.', origin: 'China Agricultural University' },
  'master-yang-zijie': { name: 'Zijie Yang', role: 'Master Student' },
  'master-wenqi-li': { name: 'Wenqi Li', role: 'Master Student', note: 'Visiting', origin: 'China University of Mining and Technology' },
  'master-wang-jing': { name: 'Jing Wang', role: 'Master Student' },
  'guest-wang-wenli': { name: 'Wenli Wang', role: 'Master Student', note: 'Visiting', origin: 'Fujian Normal University' },
  'master-li-yanyan': { name: 'Yanyan Li', role: 'Master Student' },
  'master-sheng-linxuan': { name: 'Linxuan Sheng', role: 'Master Student', note: 'Visiting', origin: 'China University of Geosciences (Beijing)' },
  'guest-wang-yifan': { name: 'Yifan Wang', role: 'Master Student', note: 'Visiting', origin: 'China University of Geosciences (Beijing)' },
  'visitor-huixia-tian': { name: 'Huixia Tian', role: 'Visiting Scholar', note: 'Former member', destination: 'Former visiting scholar' },
};
