type EnNewsItem = {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  authors?: string;
  journal?: string;
  image?: string;
  details?: string[];
};

export const enNews: EnNewsItem[] = [
  {
    slug: 'somer-wcss-2026',
    title: 'SOMER group attended the 23rd World Congress of Soil Science',
    date: new Date('2026-06-12'),
    summary:
      'The SOMER group attended the 23rd World Congress of Soil Science in Nanjing and exchanged ideas with colleagues on tailing pedogenesis, soil ecological rehabilitation, and soil process research.',
    details: [
      'From June 7 to 12, 2026, the 23rd World Congress of Soil Science (WCSS) was held in Nanjing, China. Members of the SOMER group attended the congress and exchanged ideas with researchers from China and abroad on tailing pedogenesis, soil ecological rehabilitation, and soil process research.',
      'The World Congress of Soil Science is an important international conference in soil science organized under the International Union of Soil Sciences (IUSS). The congress brought together soil scientists from different countries and regions to discuss soil resource protection, soil health, ecological restoration, carbon cycling, and sustainable development.',
      'During the congress, Prof. Songlin Wu chaired a scientific session. Wei Fu delivered an oral presentation on the group’s recent progress in soil ecological processes and rehabilitation. Na Li and Minghan Wang presented their work in poster sessions. The meeting provided an opportunity for the group to discuss tailing pedogenesis, soil organo-mineral interactions, and ecological rehabilitation with the international soil science community.',
    ],
    image: '/images/news/somer-wcss-2026.jpg',
  },
  {
    slug: 'songlin-wu-est-microbial-processing-tailings',
    title: 'Songlin Wu paper accepted by Environmental Science & Technology',
    date: new Date('2026-01-28'),
    summary:
      'Songlin Wu and coauthors report how microbial processing and Fe/Al-rich minerals jointly stabilize organic matter during four years of eco-engineered pedogenesis in iron ore tailings.',
    authors:
      'Songlin Wu, Zhen Li, Fang You, Wei Fu, Qi Feng, Guanghui Yu, Cheng-Wei Kao, Ting-Shan Chan, Baodong Chen, Gordon Southam, Longbin Huang',
    journal: 'Environmental Science & Technology',
    details: [
      'This study examined microbial use, transformation, and stabilization of organic matter during eco-engineered soil formation in iron ore tailings through a four-year microcosm experiment. The work combined isotope labeling with 13C-glucose and 13C/15N-labeled spring wheat biomass, high-resolution Orbitrap mass spectrometry, and NanoSIMS to resolve long-term organic matter evolution at molecular and submicron scales.',
      'The results show that both soluble organic inputs and plant biomass can form protein-, lipid-, and lignin-like molecules in tailings, with heterogeneous stabilization mainly mediated by Fe- and Al-rich minerals. In the 13C-glucose treatment, microbial 14N2 fixation generated microbial organic matter enriched in 13C and 14N.',
      'In the 13C/15N-labeled biomass treatment, the study further revealed dynamic organic matter turnover: external 13C/15N signals gradually declined while new organic compounds derived from atmospheric 12C/14N emerged. The microbe- and mineral-mediated generation and stabilization of organic matter indicate the gradual development of in situ microbial C/N biogeochemical resilience in amended tailing systems.',
    ],
  },
  {
    slug: 'hui-wu-acs-earth-space-chemistry',
    title: 'Hui Wu paper accepted by ACS Earth and Space Chemistry',
    date: new Date('2026-05-29'),
    summary:
      'Hui Wu and coauthors report how decade-long soil cover promotes mineral weathering and organic matter accrual in iron ore tailings while deteriorating topsoil.',
    authors: 'H Wu, W Fu, Z Yang, C Lu, S Chen, Y Wu, Y Liu, M Wang, CW Kao, TS Chan, B Chen, S Wu',
    journal: 'ACS Earth and Space Chemistry, 2026',
    details: [
      'Soil cover is widely used to initiate ecological rehabilitation on tailing deposits, but its influence on geochemical processes and organic matter dynamics in underlying tailings remains poorly understood. This study investigated the physicochemical and mineralogical evolution of Fe ore tailings in Hebei Province after a decade of soil cover and revegetation.',
      'The results show that soil cover and revegetation generally neutralized alkalinity, promoted microaggregate formation, and improved organic matter stabilization in the underlying tailings. Fe K-edge X-ray absorption spectroscopy identified the transformation of primary biotite-like minerals into Fe(III) oxyhydroxides, and NanoSIMS delineated submicrometer associations between secondary Fe- and Al-bearing minerals and organic matter.',
      'Grass rehabilitation was more effective than cropland in driving these processes. At the same time, the underlying tailings deteriorated the soil cover by increasing alkalinity and metal(loid) concentrations while lowering total organic carbon, nitrogen, and aggregate stability relative to natural soils.',
    ],
  },
  {
    slug: 'tong-liu-water-research-nitrate-vanadium',
    title: 'Tong Liu paper accepted by Water Research',
    date: new Date('2026-05-16'),
    summary:
      'This study shows that carbon availability governs the stability of nitrate-vanadium co-remediation in stratified biofilters.',
    authors: 'H Wang, N Chen, C Feng, D Mei, H Gao, T Liu',
    journal: 'Water Research, 2026',
    details: [
      'Thermodynamic hierarchies constrain the bioremediation of groundwater co-contaminated with nitrate and V(V), because denitrification preferentially consumes electron donors that would otherwise support metal reduction. This study shows that spatial stratification of lignocellulosic residues can transiently alleviate competition between nitrate removal and vanadium reduction, while long-term performance remains governed by carbon availability and reaction kinetics.',
      'Over 330 days of operation, the stratified biofilter showed a biphasic response. During the carbon-sufficient phase, synergistic co-removal increased nitrate and V(V) loading capacities by up to 6.3-fold and 4.0-fold relative to single-substrate controls. During the carbon-limited phase, denitrification persisted while V(V) reduction collapsed.',
      'Spatially resolved metagenomics revealed a thermodynamic “metabolic triage”, in which microbial communities maintained denitrification pathways but selectively down-regulated V-reduction modules. The findings highlight the need for dynamic carbon management strategies in sustained metal co-remediation.',
    ],
  },
  {
    slug: 'wenyu-river-park-group-photo',
    title: 'SOMER group outing at Wenyu River Park',
    date: new Date('2026-05-16'),
    summary: 'The SOMER group visited the Yunchang Terraces area of Beijing Wenyu River Park and took a group photo.',
    details: ['On May 16, 2026, the SOMER group visited Beijing Wenyu River Park and took a group photo in the Yunchang Terraces area.'],
    image: '/images/news/wenyu-river-park-2026.jpg',
  },
  {
    slug: 'chenglong-lu-chemical-geology',
    title: 'Chenglong Lu paper accepted by Chemical Geology',
    date: new Date('2026-05-10'),
    summary:
      'Chenglong Lu and coauthors reveal how mineral phase transformation drives DOM molecular fractionation during organic acid-driven weathering of bauxite residue.',
    authors: 'C Lu, S Wu, F You, D Yu, J Vongsvivut, A Klein, L Thomsen, D Parry, TS Chan, L Huang',
    journal: 'Chemical Geology, 2026',
    details: [
      'Dissolved organic matter sequestration is critical to soil formation of bauxite residue, where mineral weathering and neutralization or acidification are driven by microbial- and plant root-derived organic acids. This study used mixed organic acids to simulate mineral weathering during ecological engineering and examined DOM molecular fractionation and adsorption in bauxite residue minerals.',
      'Using high-resolution electrospray ionization Orbitrap mass spectrometry, the study characterized selective adsorption and molecular fractionation of DOM derived from microbial decomposition of plant mulch. Organic acid treatments progressively weathered sodalite-like alkaline minerals, formed amorphous Al/Si/Fe phases, lowered pH, and increased reactive surface sites.',
      'Slightly and highly weathered bauxite residue minerals preferentially adsorbed high-molecular-weight organics rich in aromatic and/or polyphenolic domains. Synchrotron-based Al, Si, and Fe K-edge X-ray absorption spectroscopy and FTIR mapping further revealed strong associations between secondary Al/Si/Fe phases and protein-, carboxylic-, aromatic-, and oxygenated lipid-like compounds.',
    ],
  },
  {
    slug: 'tong-liu-nature-communications-iron-cycle',
    title: 'Tong Liu paper accepted by Nature Communications',
    date: new Date('2026-05-09'),
    summary:
      'This work identifies mineral photocatalysis as a pathway mediating Fe(II)/Fe(III) cycling in the euphotic zone and has been selected for the Nature Communications Earth science Editors’ Highlights.',
    authors: 'Tong Liu, Hongrui Ding, Anhuai Lu, Lingzi Meng, Xiao Ge, Ying Liu, Fangchao Zhu, Shuo Yu, Qunjian Yin, Yan Li, Changqiu Wang, Juan Liu, Song Jin',
    journal: 'Nature Communications, 2026',
    details: [
      'The Editors’ Highlights page is curated by the editors of Nature Communications to showcase 50 recent representative papers in Earth science. This article was selected for the collection by editor Joy Buongiorno.',
      'The marine iron cycle is fast and dynamic, partly fueled by vast particulate iron inputs, but the mechanisms that activate this reservoir remain unresolved. This study shows that mineral photocatalysis provides an important abiotic pathway for Fe(II) production in sunlit waters.',
      'Laboratory experiments using synthetic iron oxides and anatase in artificial seawater demonstrate that anatase (TiO2) drives rapid Fe(III)-to-Fe(II) cycling at rates up to fourfold higher than current model assumptions. The study proposes that mineral photocatalysis helps explain the persistence of Fe(II) in sunlit waters as a high-flux steady state of photochemical production coupled with biological uptake.',
    ],
    image: '/images/news/nature-communications-earth-science-editors-highlights.png',
  },
  {
    slug: 'tong-liu-cr-bioreduction-water-science-engineering',
    title: 'Tong Liu paper accepted by Water Science and Engineering',
    date: new Date('2026-02-28'),
    summary:
      'This study develops a microbial-mineral-biomass composite strategy to improve Cr(VI) bioreduction under continuous flow.',
    authors: 'Tong Liu, Lin-lin Ma, Yu-tian Hu, Nan Chen, Chuan-ping Feng',
    journal: 'Water Science and Engineering, 2026',
    details: [
      'Microbial Cr(VI) reduction is a cost-effective remediation approach, but its continuous-flow application is often limited by toxicity inhibition and unstable nutrient supply. This study developed an integrated microbial-phosphorus mineral-corncob composite that encapsulates Cr(VI)-reducing bacteria with slow-release nutrients in a hydrogel matrix.',
      'The composite system sustained complete Cr(VI) removal at influent concentrations up to 160 mg/L in synthetic wastewater and 120 mg/L in actual groundwater. Reactive transport modeling showed that diffusion limitations create protective intraparticle concentration gradients, while density functional theory calculations confirmed strong Cr(III) sequestration and sustained phosphorus bioavailability.',
      'The work demonstrates that engineering a protected and self-sufficient microbial microenvironment can improve the stability of Cr(VI) bioremediation under continuous-flow conditions.',
    ],
  },
  {
    slug: 'somer-2025',
    title: 'SOMER 2025: A year in soil',
    date: new Date('2026-02-17'),
    summary: 'A brief annual note on SOMER group growth, research progress, publications, and field-oriented restoration work.',
    details: [
      '2025 was a year of rapid growth for the SOMER group. We continued to advance research on soil organo-mineral interactions and ecological rehabilitation, while beginning to translate laboratory findings toward mine-site applications.',
      'The group published more than 20 papers during the year, including more than 10 first-author or corresponding-author papers in journals such as Environmental Science & Technology, Global Change Biology, Soil Biology and Biochemistry, and Chemical Geology. We also published a review in Science & Technology Review on the theory and technology of tailing pedogenesis ecological engineering.',
      'Our work continued along three main lines: tailing pedogenesis mechanisms, mycorrhizal strategies for ecological rehabilitation, and interfacial processes controlling mineral weathering, metal cycling, and organic matter transformation. In 2026, we will keep asking how tailings can become soil more rapidly, how minerals, microorganisms, and organic matter co-evolve, and how laboratory findings can move into field rehabilitation.',
    ],
  },
  {
    slug: 'wei-fu-gcb-drought-amf-diversity',
    title: 'Wei Fu paper accepted by Global Change Biology',
    date: new Date('2026-01-12'),
    summary:
      'Wei Fu and coauthors show that plant productivity responses to extreme drought are linked to arbuscular mycorrhizal fungal diversity.',
    authors: 'Wei Fu, Qiang Yu, Haiyang Zhang, Chong Xu, Xingguo Han, Baodong Chen',
    journal: 'Global Change Biology, 2026',
    details: [
      'Plant and arbuscular mycorrhizal fungal diversity are both positively linked to ecosystem productivity, but the persistence of these diversity-productivity relationships under climate extremes remains poorly understood. This study established a grassland experiment at two proximate sites with distinct natural plant and AM fungal communities, imposing intense and chronic extreme drought regimes that each exceeded a 20-year recurrence interval.',
      'The results show that AM fungal diversity consistently outperformed plant diversity in predicting plant aboveground and net primary productivity, as well as compositional shifts in plant species productivity. Enhanced drought resistance in plant productivity was primarily associated with the stability of AM fungal richness rather than plant richness.',
      'Structural equation modelling further confirmed that AM fungal richness buffered drought effects on productivity and plant richness, with stronger effects on productivity than those of plant richness and soil properties. These findings indicate that AM fungal diversity may play an important role in sustaining ecosystem functioning under rapid climate change.',
    ],
  },
];

export const enResearch = [
  {
    slug: 'pedogenesis-mechanisms',
    title: 'Tailing pedogenesis and ecological reconstruction',
    summary:
      'We investigate mineral weathering, secondary mineral formation, organic carbon stabilization, and structural development during the transformation of mine tailings into soil-like substrates.',
    cover: '/images/research/tailing-rehabilitation-contrast.png',
    details: [
      'Mine tailings commonly have narrow particle-size distribution, limited aggregate structure, low organic matter and nutrient contents, abnormal pH or salinity, and potential metal mobility. These constraints limit plant establishment and ecological function recovery. This direction studies mineral weathering, element release, and secondary mineral formation during tailing pedogenesis driven by organic inputs, plant roots, and microbial activity.',
      'We focus on the coupling between Fe, Si, and Al mineral transformation and organic matter stabilization, and examine how rhizosphere processes, microbial succession, and organo-mineral complexation regulate aggregate development, carbon and nitrogen accumulation, and contaminant retention. These results provide mechanistic support for optimizing tailing pedogenesis technologies and evaluating long-term ecological stability.',
    ],
    figures: [
      {
        src: '/images/research/tailing-rehabilitation-contrast.png',
        alt: 'Contrasts among tailing landforms, vegetation recovery, and soil profiles',
        caption:
          'Comparisons among rehabilitation stages and tailing types help identify key environmental factors that limit tailing pedogenesis rates and ecological function recovery.',
      },

      {
        src: '/images/research/tailing-pedogenesis-organic-carbon-framework.jpg',
        alt: 'Conceptual framework of mineral weathering and organic carbon stabilization during tailing pedogenesis',
        caption:
          'During the transformation from initial tailings to soil-like substrates, plant residues, rhizodeposits, and microbial organic matter are continuously supplied; secondary clay minerals and Fe/Al oxides formed by mineral weathering increase organic carbon adsorption and stabilization.',
      },

      {
        src: '/images/research/tailing-rehabilitation-before-after.jpg',
        alt: 'Surface cover and vegetation recovery before and after tailing rehabilitation',
        caption:
          'Field-scale comparisons before and after rehabilitation show that vegetation establishment and surface cover modify tailing surface structure, erosion risk, and the basic conditions for ecological recovery.',
      },

      {
        src: '/images/research/field-rehabilitation-plots.jpg',
        alt: 'Field plots for tailing ecological reconstruction',
        caption:
          'Long-term field plots and controlled experiments are used to evaluate how different rehabilitation measures affect tailing physicochemical properties, plant growth, aggregate formation, and carbon and nitrogen accumulation.',
      },
        ],
  },
  {
    slug: 'mycorrhizal-strategies',
    title: 'Soil structure and ecological function reconstruction',
    summary:
      'We examine how plant roots, rhizosphere microorganisms, and arbuscular mycorrhizal fungi regulate aggregate formation, organic matter accumulation, nutrient cycling, and plant stress resistance.',
    cover: '/images/research/root-mineral-aggregate-formation.jpg',
    details: [
      'Degraded soils and early-stage tailing substrates often have insufficient structural stability, low nutrient cycling efficiency, and slow recovery of ecological functions. This direction examines how plant-microbe interactions shape soil structure and functional recovery, with particular attention to arbuscular mycorrhizal fungi (AMF) in rhizosphere carbon input, mineral surface reactions, aggregate stability, and plant stress resistance.',
      'By combining field surveys, controlled experiments, and multi-scale characterization, we evaluate how AMF diversity, hyphal networks, and mycorrhiza-derived organic matter influence the spatial coupling of organic carbon, nitrogen, and mineral components. The goal is to develop plant-microbe regulation strategies that can be used in ecological rehabilitation practice.',
    ],
    figures: [
      {
        src: '/images/research/root-mineral-aggregate-formation.jpg',
        alt: 'Root-mineral interactions and water-stable aggregate formation',
        caption:
          'Plant roots and microbial activity promote mineral weathering, organic matter accumulation, and organo-mineral complex formation in Fe ore tailings, thereby enhancing aggregate stability.',
      },

      {
        src: '/images/research/cropland-tailings-rehabilitation.png',
        alt: 'Tailing rehabilitation under soil cover and crop cultivation',
        caption:
          'Soil cover, crop cultivation, and root inputs jointly influence nutrient accumulation, metal mobility, and topsoil quality in tailing profiles, providing an important scenario for evaluating agriculture-oriented rehabilitation.',
      },
        ],
  },
  {
    slug: 'interface-processes',
    title: 'Organo-mineral interface processes and element cycling',
    summary:
      'We characterize electron transfer, mineral dissolution and precipitation, metal transformation, and molecular fractionation of organic matter at mineral-water-organic matter-microbe interfaces.',
    cover: '/images/research/mineral-weathering-spectroscopy.png',
    details: [
      'Organo-mineral interface reactions control element mobility, contaminant speciation, and organic carbon stabilization in tailings and degraded soils. This direction focuses on mineral weathering, sulfur and iron redox processes, metal retention, dissolved organic matter molecular fractionation, and microbially or electrochemically mediated interfacial transformations.',
      'Using synchrotron-based XAFS/STXM, NanoSIMS, FTICR-MS, Orbitrap-MS, in situ spectroelectrochemistry, DFT calculations, and reactive transport modeling, we resolve the binding forms, spatial distribution, interfacial charge transfer, and reaction pathways of organic matter and reactive mineral phases from molecular to nano- and micrometer scales.',
    ],
    figures: [
      {
        src: '/images/research/mineral-weathering-spectroscopy.png',
        alt: 'Microscopic and spectroscopic evidence for mineral weathering and interfacial reactions',
        caption:
          'Micro-scale morphology, elemental occurrence, and synchrotron spectroscopic information help identify primary mineral weathering, secondary mineral formation, and changes in metal speciation.',
      },

      {
        src: '/images/research/multiscale-organo-mineral-characterization.png',
        alt: 'Multi-scale morphology, elemental distribution, and spectroscopy of organo-mineral complexes',
        caption:
          'Microscopic imaging, elemental mapping, X-ray diffraction/absorption spectroscopy, and NanoSIMS are used to resolve spatial coupling among Fe-Si secondary minerals, organic carbon, and aggregate microstructures.',
      },
      {
        src: '/images/research/iron-mineral-electrochemical-interface.png',
        alt: 'In situ characterization and mechanistic analysis of electrochemical reactions at iron mineral interfaces',
        caption:
          'In situ characterization and mechanistic analysis of electrochemical reactions at iron mineral interfaces, including dynamic electrochemical impedance, DFT calculations of interfacial charge transfer, in situ spectroelectrochemical platforms, Raman monitoring of pyrite oxidation and reduction, and infrared monitoring of goethite surface transformation.',
      },
        ],
  },
  {
    slug: 'organic-matter-microecology',
    title: 'Soil microecology and molecular transformation of organic matter',
    summary:
      'We elucidate how biological systems, including plants, soil animals, and microorganisms, drive the formation, transformation, and stabilization of soil organic matter in tailings and degraded soils.',
    cover: '/images/research/organic-matter-molecular-stabilization.jpg',
    details: [
      'This direction aims to elucidate the biological-system-driven formation, transformation, and stabilization mechanisms of soil organic matter, with a focus on plants, soil animals, and microorganisms. By combining high-resolution mass spectrometry for molecular characterization of organic matter with microbial ecological principles and techniques, we investigate how micro-ecosystems in complex environments such as mine tailings and degraded soils drive molecular-level dynamics and stabilization of organic matter.',
      'Research topics include molecular transformation of plant residues and rhizodeposits, selective association between microbial organic matter and mineral surfaces, regulation of organic matter decomposition and re-synthesis by soil animals and microbial communities, and the effects of reactive Fe/Al/Si mineral phases on the stability of different molecular components.',
    ],
    figures: [
      {
        src: '/images/research/organic-matter-molecular-stabilization.jpg',
        alt: 'Biological inputs, microbial communities, and Fe-Si secondary minerals regulate organic matter stabilization',
        caption:
          'Plant inputs, microbial communities, and mineral weathering jointly modify organic matter molecular composition; carboxyl-rich, aromatic, or polyphenolic components can selectively associate with Fe-Si secondary minerals and promote organic matter stabilization.',
      },
    ],
  },
  {
    slug: 'ai-tailings-multiscale-modeling',
    title: 'AI-driven multiscale modeling and intelligent prediction of tailing pedogenesis',
    summary:
      'We integrate artificial intelligence, multiscale modeling, and tailing pedogenesis research to understand coupled mineral interface reactions, element transport, organic carbon stabilization, and ecological function recovery.',
    cover: '/images/research/ai-tailings-multiscale-research.png',
    details: [
      'Tailing pedogenesis involves multiscale processes such as mineral weathering, secondary mineral formation, organic matter input, microbial activity, water movement, and potential metal release. Ecological function recovery is jointly controlled by mineral interface reactions, carbon and nitrogen accumulation, aggregate development, and pollution risk control. This direction develops AI-driven multiscale modeling approaches for process identification, mechanism integration, and long-term stability prediction during tailing ecological reconstruction.',
      'We focus on how AI can connect interface reactions, reactive transport, carbon transformation, and ecological function recovery across scales. By integrating field plots, controlled experiments, mineralogical characterization, and multi-source environmental data, we aim to build intelligent evaluation and prediction frameworks for tailing pedogenesis. These models will support assessment of pedogenesis rates, optimization of rehabilitation measures, early warning of pollution risks, and evaluation of long-term ecological stability.',
    ],
    figures: [
      {
        src: '/images/research/ai-tailings-multiscale-research.png',
        alt: 'AI-driven multiscale modeling for tailing pedogenesis and ecological recovery',
        caption:
          'Artificial intelligence and multiscale models can help connect mineral interface reactions, element transport, organic carbon stabilization, and ecological function recovery during tailing pedogenesis.',
      },
    ],
  },
];

export const enPeople: Record<string, { name: string; role: string; research?: string; note?: string; origin?: string; destination?: string; bio?: string[] }> = {
  'songlin-wu': {
    name: 'Songlin Wu',
    role: 'Professor / PhD Supervisor',
    research: 'Soil organo-mineral interactions, ecological rehabilitation of mine wastes, and biogeochemical element cycling.',
    bio: [
      'Songlin Wu is a professor and PhD supervisor at the Research Center for Eco-Environmental Sciences, Chinese Academy of Sciences. Over the past decade, he has held postdoctoral and research positions at the Czech University of Life Sciences Prague and The University of Queensland. His research focuses on ecological rehabilitation of mine tailings and degraded soils.',
      'His work approaches soil formation from the perspective of pedogenesis, examining how soil structure and ecological functions develop in engineered and degraded substrates. He focuses on root- and rhizosphere microbe-mediated organo-mineral interactions, biogeochemical element cycling, and the mechanisms that regulate the transformation of mine wastes into soil-like media.',
      'He has published more than 80 SCI papers, including more than 40 first-author or corresponding-author papers in journals such as Environmental Science & Technology, New Phytologist, iScience, and npj Materials Sustainability.',
      'He serves as a Section Editor for Plant and Soil, an Associate Editor for Environmental Geochemistry and Health, and an early-career editorial board member for Soil & Environmental Health and Chinese Journal of Applied Ecology. He is also a member of the European Association of Geochemistry, Soil Science Australia, and the International Mycorrhiza Society, and has reviewed for more than 50 international journals including Environmental Science & Technology, Geochimica et Cosmochimica Acta, and Water Research.',
      'Research directions: soil organo-mineral interactions and ecological rehabilitation; pedogenesis and ecological reconstruction of mine wastes; biogeochemical cycling of elements.',
    ],
  },
  'wei-fu': {
    name: 'Wei Fu',
    role: 'Assistant Professor',
    research: 'Soil microecology, molecular transformation of organic matter, and soil ecological rehabilitation.',
    bio: [
      'Wei Fu is an assistant professor at the Research Center for Eco-Environmental Sciences, Chinese Academy of Sciences. His research focuses on soil microecology, molecular transformation of organic matter, and soil ecological rehabilitation.',
      'He studies how plants, soil animals, and microorganisms drive the formation, transformation, and stabilization of organic matter, and how micro-ecological processes regulate soil structure, nutrient cycling, and the recovery of ecological functions in complex environmental systems.',
      'He received his PhD from the Research Center for Eco-Environmental Sciences, Chinese Academy of Sciences, and joined the SOMER Group in 2024. From late 2024 to early 2026, he conducted visiting research in the group of Prof. Matthias Rillig in Germany.',
    ],
  },
  'tong-liu': {
    name: 'Tong Liu',
    role: 'Assistant Professor',
    research: 'Mineral-microbe interfaces, interfacial electron transfer, Fe-C coupling, and pollution control.',
    bio: [
      'Tong Liu is an assistant professor at the Research Center for Eco-Environmental Sciences, Chinese Academy of Sciences. His research focuses on mineral-microbe interface interactions and pollution control, with particular interest in interfacial electron transfer, coupled Fe-C transformation, and their roles in contaminant migration, transformation, and organic carbon stabilization.',
      'His recent work examines photochemical cycling of iron minerals, microbially mediated redox processes, heavy metal stabilization, and remediation of contaminated groundwater and soils. Related studies have been published in journals including Nature Communications and Water Research.',
      'He received his bachelor’s degree in Environmental Engineering from China University of Geosciences (Beijing) in 2017 and his PhD in Environmental Science and Engineering from the same university in 2023, under the supervision of Prof. Chuanping Feng. From 2023 to 2025, he was a Boya postdoctoral fellow in mineralogy at Peking University, working with Prof. Anhuai Lu. He joined the Research Center for Eco-Environmental Sciences as an assistant professor in 2025.',
      'He has led projects supported by the National Natural Science Foundation of China and the China Postdoctoral Science Foundation, focusing on mineral photocatalysis, iron mineral dissolution, and microbial responses in sunlit marine and groundwater environments.',
    ],
  },
  'postdoc-hui-wu': { name: 'Hui Wu', role: 'Postdoctoral Researcher', research: 'Mine tailing pedogenesis and soil organic matter stabilization.', origin: 'Research Center for Eco-Environmental Sciences, CAS' },
  'postdoc-shiqi-zhang': { name: 'Shiqi Zhang', role: 'Postdoctoral Researcher', research: 'Ecological rehabilitation of degraded soils and soil structure reconstruction.', origin: 'Research Center for Eco-Environmental Sciences, CAS' },
  'postdoc-minghan-wang': {
    name: 'Minghan Wang',
    role: 'Postdoctoral Researcher',
    research: 'AMF-mineral amendment strategies for heavy metal stabilization, soil carbon retention, and contaminated farmland remediation.',
    origin: 'Hunan Agricultural University',
    bio: [
      'Minghan Wang is a postdoctoral researcher in the SOMER Group. She received her PhD from Hunan Agricultural University. Her previous work focused on contaminated soil remediation, fluoride control in tea gardens, heavy metal speciation, and soil ecosystem processes, with related publications in journals including Biochar, Ecotoxicology and Environmental Safety, and Chemosphere. She has also contributed to an authorized national invention patent related to soil remediation.',
      'During her doctoral research, she worked on typical yellow soils in Hunan Province and high-fluoride tea gardens, examining how soil physicochemical properties, microbial processes, fertilizer regimes, and amendments influence fluoride and heavy metal accumulation. These studies helped identify strategies for reducing fluoride availability in tea garden soils while supporting tea quality and soil health.',
      'In SOMER, she focuses on coupled heavy metal stabilization and soil carbon retention in contaminated farmland. Her current work examines how arbuscular mycorrhizal fungi (AMF) and iron-modified organic amendments regulate metal availability, organo-mineral association, and microaggregate formation, with the goal of supporting integrated pollution control and carbon stabilization in mining-impacted agricultural soils.',
      'Selected publications include studies on exogenous indole acetic acid alleviating Cd toxicity in tea (Ecotoxicology and Environmental Safety, 2020) and multi-omics research in albino tea plants (Scientia Horticulturae, 2020).',
    ],
  },
  'postdoc-na-li': {
    name: 'Na Li',
    role: 'Postdoctoral Researcher',
    research: 'Soil microecology, microbial carbon fixation, organic matter stabilization, and microbial-derived carbon retention during tailing pedogenesis.',
    origin: 'Northwest A&F University',
    bio: [
      'Na Li is a postdoctoral researcher in the SOMER Group. She received her PhD from Northwest A&F University under the supervision of Prof. Shaoshan An and was previously a jointly trained doctoral researcher in Germany. Her research focuses on soil carbon-nitrogen coupling, microbial carbon fixation, microbial necromass accumulation, and the stability and resilience of soil organic carbon under precipitation variability.',
      'Her previous work used long-term simulated precipitation experiments in semi-arid grasslands of the Loess Plateau to examine nonlinear responses of SOC, particulate organic matter, mineral-associated organic matter, and C/N stoichiometry to changes in precipitation amplitude and duration. These studies show that both increased precipitation and drought can reduce SOC, while the responses of different carbon pools are jointly controlled by precipitation magnitude, duration, and nitrogen limitation.',
      'She has also investigated cbbL- and cbbM-harboring carbon-fixing microbial communities, showing how precipitation shifts regulate microbial diversity, community structure, network interactions, and bacterial necromass accumulation through soil nitrate, SOC, dissolved organic nitrogen, plant biomass, and available carbon and nitrogen resources.',
      'In SOMER, she focuses on micro-ecosystem processes, molecular transformation of organic matter, and microbial-derived carbon stabilization during tailing pedogenesis and degraded soil rehabilitation.',
    ],
  },
  'postdoc-chenglong-lu': {
    name: 'Chenglong Lu',
    role: 'Postdoctoral Researcher',
    research: 'Tailing ecological rehabilitation, mining waste valorization, environmental mineralogy, secondary mineral turnover, and mineral-organic interface processes.',
    origin: 'The University of Queensland',
    bio: [
      'Chenglong Lu is a postdoctoral researcher in the SOMER Group. He received his master’s degree in mining engineering from Central South University and his PhD from The University of Queensland, where he worked on sustainable ecological rehabilitation of mine tailings. His research background spans mineral processing, resource recovery, environmental functional materials, and tailing rehabilitation, with a long-term interest in mineral phase transformation, interfacial reactions, and the resource-environment effects of mining solid wastes.',
      'His research centers on how mineral transformation drives resource utilization and ecological rehabilitation. He focuses on key processes including mineral dissolution, weathering, polymerization, precipitation, and amorphous phase formation, and examines how mineral structural evolution regulates resource recovery, contaminant immobilization, organic carbon stabilization, and ecosystem reconstruction.',
      'During his doctoral research, he used highly alkaline bauxite residue as a model mining waste to study plant-driven mineral weathering, secondary mineral formation, and ecological rehabilitation. By integrating mineralogical, geochemical, synchrotron-based, XRD/Rietveld, TEM, and Orbitrap-MS approaches, he developed a multiscale framework linking rhizosphere processes, mineral transformation, and organic matter stabilization. His work shows that pioneer plant rhizosphere processes can progressively weaken the alkaline buffering system of bauxite residue, promote weathering of DSP-type alkaline minerals, and induce nanoscale secondary amorphous Al-Si-Fe phases. Organic inputs and low-molecular-weight organic acids further participate in mineral structural reorganization and interfacial association, supporting the transformation of bauxite residue from a highly alkaline industrial waste into a Technosol-like substrate.',
      'His earlier work also covered mining waste valorization and environmental functional materials, including valuable metal recovery and enrichment, tailing-based slow-release sulfidation materials, selective copper-arsenic separation, defluorination materials, and treatment of high-fluoride and organic wastewaters. Together, these studies form a continuous research line from resource recovery to environmental remediation.',
      'In SOMER, he further focuses on secondary mineral formation and turnover, mineral-organic interface processes, and their environmental effects during tailing and waste rock ecological rehabilitation. His current work examines how minerals, biota, and organic matter are coupled during pedogenesis of mine-degraded lands, with an emphasis on the linked mechanisms of secondary mineral formation, organic carbon retention, and contaminant stabilization.',
      'Selected studies include work on organic acid-driven weathering of bauxite residue, haloalkalitolerant plant-driven dealkalization, long-term soil cover effects on Fe ore tailings, segmental defluorination from zinc sulfate electrowinning solution, phase-regulated colloidal FeS for copper-arsenic separation, AI-optimized slow-release iron sulfide for acidic wastewater treatment, and micro-electrolysis composite materials derived from alkaline bauxite residue.',
    ],
  },
  'master-chen-suixiaochen': { name: 'Suixiaochen Chen', role: 'PhD Student', research: 'Reactive iron minerals in soils.' },
  'phd-feng-qi': { name: 'Qi Feng', role: 'PhD Student', research: 'Weathering of sulfidic tailings.' },
  'phd-wu-yuqi': { name: 'Yuqi Wu', role: 'PhD Student', research: 'Adsorption and transformation of AMF exudates on minerals.', origin: 'Tsinghua University' },
  'master-yang-shuang': { name: 'Shuang Yang', role: 'PhD Student', note: 'Visiting', research: 'Development of tailing soil structure.', origin: 'China Agricultural University' },
  'master-yang-zijie': { name: 'Zijie Yang', role: 'Master Student' },
  'master-wenqi-li': { name: 'Wenqi Li', role: 'Master Student', note: 'Visiting', origin: 'China University of Mining and Technology' },
  'master-wang-jing': { name: 'Jing Wang', role: 'Master Student' },
  'guest-wang-wenli': {
    name: 'Wenli Wang',
    role: 'Former Visiting Master Student',
    note: 'Alumni',
    research: 'Molybdenum tailing-based soil conditioners.',
    origin: 'Fujian Normal University',
    destination: 'Fujian Normal University',
  },
  'master-li-yanyan': { name: 'Yanyan Li', role: 'Master Student' },
  'master-sheng-linxuan': { name: 'Linxuan Sheng', role: 'Master Student', note: 'Visiting', origin: 'China University of Geosciences (Beijing)' },
  'guest-wang-yifan': { name: 'Yifan Wang', role: 'Master Student', note: 'Visiting', origin: 'China University of Geosciences (Beijing)' },
  'visitor-huixia-tian': {
    name: 'Huixia Tian',
    role: 'Visiting Scholar',
    note: 'Alumni',
    research: 'Forest ecology, soil phosphorus cycling, and sustainable forest development.',
    origin: 'College of Environment and Resources, Taiyuan University of Science and Technology',
    destination: 'College of Environment and Resources, Taiyuan University of Science and Technology',
  },
};
