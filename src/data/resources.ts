export type ResourceEntry = {
  id?: string;
  name: string;
  scope: string;
  timing: string;
  publicInfo: string;
  linkLabel: string;
  href: string;
};

export type TimelineNode = {
  date: string;
  label: string;
  detail: string;
  detailId: string;
  startMonth: number;
  span: number;
  lane: number;
};

export type ResourcePageData = {
  lang: 'zh' | 'en';
  eyebrow: string;
  title: string;
  intro: string;
  entries: ResourceEntry[];
  timeline?: TimelineNode[];
};

export type BeamtimeMarker = {
  month: number;
  label: string;
};

export type BeamlineEntry = ResourceEntry & {
  id: string;
  markers?: BeamtimeMarker[];
  scheduleNote?: string;
  application: string;
  methods: string[];
};

export type BeamlinePageData = Omit<ResourcePageData, 'entries'> & {
  entries: BeamlineEntry[];
};

export type DataToolEntry = {
  name: string;
  description: string;
  href: string;
};

export type DataToolGroup = {
  title: string;
  description: string;
  entries: DataToolEntry[];
};

export type DataToolsPageData = {
  lang: 'zh' | 'en';
  title: string;
  intro: string;
  groups: DataToolGroup[];
  standardsTitle: string;
  standards: string[];
};

export type ResourceCategory = {
  slug: string;
  label: string;
  title: string;
  summary: string;
};

export const resourceCategories = {
  zh: [
    {
      slug: 'funding',
      label: '申请',
      title: '项目与人才资助',
      summary: '汇总国家自然科学基金、博士后基金及其他公开资助项目的申请周期和官方入口。',
    },
    {
      slug: 'beamlines',
      label: '大型装置',
      title: '同步辐射与 STXM',
      summary: '整理上海、北京、台湾、合肥及加拿大 STXM 等平台的公开申请信息。',
    },
    {
      slug: 'data-tools',
      label: '数据工具',
      title: '数据、软件与科研规范',
      summary: '汇总公开数据仓库、分析工具、数据库和科研数据管理规范。',
    },
  ] satisfies ResourceCategory[],
  en: [
    {
      slug: 'funding',
      label: 'Funding',
      title: 'Funding and Fellowships',
      summary: 'Application cycles and official portals for major public research and postdoctoral funding programs.',
    },
    {
      slug: 'beamlines',
      label: 'Facilities',
      title: 'Synchrotron and STXM Access',
      summary: 'Public access information for synchrotron facilities in China, Taiwan, and Canada.',
    },
    {
      slug: 'data-tools',
      label: 'Data tools',
      title: 'Data, Software, and Standards',
      summary: 'Public repositories, databases, analysis tools, and research data-management guidance.',
    },
  ] satisfies ResourceCategory[],
};

export const fundingTimeline: Record<'zh' | 'en', TimelineNode[]> = {
  zh: [
    {
      date: '2–3 月',
      label: '博士后资助首批申报',
      detail: '面上第一批、特别资助和博新等',
      detailId: 'postdoctoral',
      startMonth: 2,
      span: 3,
      lane: 1,
    },
    {
      date: '3 月',
      label: '国自然集中接收',
      detail: '青年、面上及部分联合基金',
      detailId: 'nsfc-central',
      startMonth: 3,
      span: 3,
      lane: 2,
    },
    {
      date: '3–7 月',
      label: '国家重点研发预申报',
      detail: '重点专项分批发布',
      detailId: 'national-key-rd',
      startMonth: 5,
      span: 3,
      lane: 1,
    },
    {
      date: '4–7 月',
      label: '国自然专题项目',
      detail: '联合、国际合作和专项',
      detailId: 'nsfc-noncentral',
      startMonth: 7,
      span: 3,
      lane: 2,
    },
    {
      date: '7–8 月',
      label: '博士后基金第二批',
      detail: '面上资助',
      detailId: 'postdoctoral',
      startMonth: 8,
      span: 3,
      lane: 1,
    },
  ],
  en: [
    {
      date: 'Feb–Mar',
      label: 'Postdoctoral funding, batch 1',
      detail: 'General, special, and Boxin programs',
      detailId: 'postdoctoral',
      startMonth: 2,
      span: 3,
      lane: 1,
    },
    {
      date: 'March',
      label: 'NSFC centralized call',
      detail: 'Young Scientists, General, and selected joint funds',
      detailId: 'nsfc-central',
      startMonth: 3,
      span: 3,
      lane: 2,
    },
    {
      date: 'Mar–Jul',
      label: 'National Key R&D pre-proposals',
      detail: 'Key programs released in batches',
      detailId: 'national-key-rd',
      startMonth: 5,
      span: 3,
      lane: 1,
    },
    {
      date: 'Apr–Jul',
      label: 'NSFC non-centralized calls',
      detail: 'Joint, international, and special calls',
      detailId: 'nsfc-noncentral',
      startMonth: 7,
      span: 3,
      lane: 2,
    },
    {
      date: 'Jul–Aug',
      label: 'Postdoctoral Fund, batch 2',
      detail: 'General funding',
      detailId: 'postdoctoral',
      startMonth: 8,
      span: 3,
      lane: 1,
    },
  ],
};

export const beamlinePages: Record<'zh' | 'en', BeamlinePageData> = {
  zh: {
    lang: 'zh',
    eyebrow: '科研资源 / 大型装置',
    title: '同步辐射与 STXM',
    intro: '国内外同步辐射与 STXM 平台的常见申请节奏、实验方向和用户入口。',
    entries: [
      {
        id: 'ssrf',
        name: '上海同步辐射光源 SSRF',
        scope: '中国 / 上海',
        timing: '每年两轮：3 月 31 日、9 月 30 日',
        markers: [
          { month: 3, label: '3/31' },
          { month: 9, label: '9/30' },
        ],
        publicInfo: '常规用户课题每年两轮集中评审，获批课题通常可在两年内分次使用机时。申请前应先确认线站能力、实验模式和样品安全条件。',
        application: '春季轮通常于当年 7 月起使用，秋季轮通常于次年 1 月起使用；危险化学品、生物安全或特殊装置样品需预留技术安全审核时间。',
        methods: ['XAFS、微束 XRF 与微区 XANES', 'XRD、SAXS 与硬 X 射线成像', '红外显微与软 X 射线谱学'],
        linkLabel: 'SSRF 用户课题申请',
        href: 'https://ssrf.sari.ac.cn/nyhkf/njssq/',
      },
      {
        id: 'nsrl',
        name: '合肥同步辐射光源 HLS / NSRL',
        scope: '中国 / 合肥',
        timing: '常年接收，按季度集中送审',
        markers: [
          { month: 3, label: '季末' },
          { month: 6, label: '季末' },
          { month: 9, label: '季末' },
          { month: 12, label: '季末' },
        ],
        publicInfo: '用户课题常年接收、按季度集中评审。平台在软 X 射线、红外显微、光电子能谱和表面科学方向具有特色。',
        application: '含水、微生物或不导电环境样品常需要干燥、冷冻或特殊样品池；选线站后应尽早确认样品状态和真空兼容性。',
        methods: ['红外显微成像', '软 X 射线吸收谱与显微成像', '光电子能谱与表面反应表征'],
        linkLabel: '合肥光源用户申请',
        href: 'https://lssf.cas.cn/sszs/ggsy/hftbfs/',
      },
      {
        id: 'nsrrc',
        name: '台湾光源 TPS / TLS，NSRRC',
        scope: '中国台湾 / 新竹',
        timing: '每年两轮：通常 2 月、8 月中旬',
        markers: [
          { month: 2, label: '2 月' },
          { month: 8, label: '8 月' },
        ],
        publicInfo: '一般用户课题通常按上、下半年运行周期两轮征集，覆盖 XAS、微区 XRF、X 射线显微、散射和软 X 射线等实验。',
        application: '除课题申请外，还需提前确认赴台手续、样品携带与运输要求；土壤、尾砂、微生物和含重金属样品尤其要核对检疫与申报条件。',
        methods: ['XAS / XAFS 与微区 XRF', 'X 射线显微、断层与纳米成像', 'SAXS / WAXS 与软 X 射线谱学'],
        linkLabel: 'NSRRC User Portal',
        href: 'https://www.nsrrc.org.tw/',
      },
      {
        id: 'cls',
        name: 'Canadian Light Source CLS',
        scope: '加拿大 / 萨斯卡通',
        timing: '每年两轮：通常 2 月、8 月',
        markers: [
          { month: 2, label: '2 月' },
          { month: 8, label: '8 月' },
        ],
        publicInfo: 'General User Access 每年两轮征集；新课题通常有效两年，但每个运行周期仍需提交具体机时申请。部分线站可提供邮寄样品或远程实验。',
        application: '申请前需与线站确认 STXM 或其他实验模式、样品运输和研究安全要求；对跨境样品可优先评估 mail-in 或 remote access。',
        methods: ['STXM 与软 X 射线谱学', '中红外显微谱', 'XAS、成像与环境样品微区表征'],
        linkLabel: 'CLS beamtime application',
        href: 'https://www.lightsource.ca/users/getting-started/applying-for-beamtime.php',
      },
      {
        id: 'heps',
        name: '高能同步辐射光源 HEPS',
        scope: '中国 / 北京怀柔',
        timing: '普通、快速和专项课题分批征集',
        scheduleNote: '按当期课题征集',
        publicInfo: 'HEPS 为新一代高能同步辐射装置，适合高亮度、高能量、高空间分辨率或原位实验。各线站和实验模式按开放进度分阶段组织申请。',
        application: '先联系线站确认开放模式、样品尺寸和信号强度，再提交用户课题；获批后另行申请具体机时并完成技术安全审核。',
        methods: ['微区 XRF 与微区 XANES', '高能总散射与 PDF', '纳米成像与原位反应过程'],
        linkLabel: 'HEPS 用户平台',
        href: 'https://heps.ihep.ac.cn/',
      },
      {
        id: 'bsrf',
        name: '北京同步辐射装置 BSRF',
        scope: '中国 / 北京',
        timing: '用户课题与实验机时按运行通知组织',
        scheduleNote: '按运行与线站通知',
        publicInfo: '用户先申请课题，课题获批后再根据装置运行安排申请具体实验机时。公开发表科研成果的机时原则上免费，课题通常有效两年。',
        application: '建议在计划实验前 1 至 2 个月联系线站，确认 XAFS、成像、荧光微分析或软 X 射线实验的可行性、样品数量和安全条件。',
        methods: ['XAFS / XANES / EXAFS', 'X 射线荧光微分析与成像', '软 X 射线吸收谱'],
        linkLabel: 'BSRF 用户信息',
        href: 'https://ihep.cas.cn/dkxzz/bsrf/',
      },
    ],
  },
  en: {
    lang: 'en',
    eyebrow: 'Research Resources / Large Facilities',
    title: 'Synchrotron and STXM Access',
    intro: 'Common application cycles, experimental strengths, and user portals for synchrotron and STXM facilities in China and abroad.',
    entries: [
      {
        id: 'ssrf',
        name: 'Shanghai Synchrotron Radiation Facility (SSRF)',
        scope: 'China / Shanghai',
        timing: 'Two calls each year: March 31 and September 30',
        markers: [
          { month: 3, label: 'Mar 31' },
          { month: 9, label: 'Sep 30' },
        ],
        publicInfo: 'Regular user proposals undergo two centralized reviews each year. Approved projects can normally use allocated beamtime in multiple sessions over two years. Confirm beamline capability, measurement mode, and sample safety before applying.',
        application: 'Spring-round beamtime normally begins in July of the same year; autumn-round beamtime normally begins in January of the following year. Hazardous, biosafety-sensitive, or special-environment samples require additional technical review time.',
        methods: ['XAFS, micro-XRF, and micro-XANES', 'XRD, SAXS, and hard X-ray imaging', 'Infrared microspectroscopy and soft X-ray spectroscopy'],
        linkLabel: 'SSRF user proposal application',
        href: 'https://ssrf.sari.ac.cn/nyhkf/njssq/',
      },
      {
        id: 'nsrl',
        name: 'Hefei Synchrotron Radiation Facility (HLS / NSRL)',
        scope: 'China / Hefei',
        timing: 'Accepted year-round; reviewed quarterly',
        markers: [
          { month: 3, label: 'Quarter end' },
          { month: 6, label: 'Quarter end' },
          { month: 9, label: 'Quarter end' },
          { month: 12, label: 'Quarter end' },
        ],
        publicInfo: 'User proposals are accepted year-round and reviewed quarterly. The facility has particular strengths in soft X-rays, infrared microspectroscopy, photoelectron spectroscopy, and surface science.',
        application: 'Wet, microbial, or non-conductive environmental samples may require drying, freezing, or dedicated sample cells. Confirm sample state and vacuum compatibility with the beamline early.',
        methods: ['Infrared microspectroscopy', 'Soft X-ray absorption spectroscopy and imaging', 'Photoelectron spectroscopy and surface-reaction analysis'],
        linkLabel: 'Hefei user proposal information',
        href: 'https://lssf.cas.cn/sszs/ggsy/hftbfs/',
      },
      {
        id: 'nsrrc',
        name: 'Taiwan Photon Source / Taiwan Light Source (NSRRC)',
        scope: 'Taiwan, China / Hsinchu',
        timing: 'Two calls each year, commonly in February and August',
        markers: [
          { month: 2, label: 'Feb' },
          { month: 8, label: 'Aug' },
        ],
        publicInfo: 'General-user proposals are commonly called twice per year for the two half-year operating cycles, covering XAS, micro-XRF, X-ray microscopy, scattering, and soft X-ray experiments.',
        application: 'Beyond the proposal itself, confirm travel approvals and sample transport requirements early. Soil, tailings, microbial, and metal-bearing samples require particular attention to declaration and quarantine conditions.',
        methods: ['XAS / XAFS and micro-XRF', 'X-ray microscopy, tomography, and nanoscale imaging', 'SAXS / WAXS and soft X-ray spectroscopy'],
        linkLabel: 'NSRRC User Portal',
        href: 'https://www.nsrrc.org.tw/',
      },
      {
        id: 'cls',
        name: 'Canadian Light Source (CLS)',
        scope: 'Canada / Saskatoon',
        timing: 'Two calls each year, commonly in February and August',
        markers: [
          { month: 2, label: 'Feb' },
          { month: 8, label: 'Aug' },
        ],
        publicInfo: 'General User Access runs two calls each year. New projects are normally active for two years, while a specific beamtime request is still required for each operating cycle. Some beamlines support mail-in or remote experiments.',
        application: 'Confirm STXM or other measurement modes, sample transport, and research-security requirements with the beamline before applying. Mail-in and remote access may be preferable for cross-border samples.',
        methods: ['STXM and soft X-ray spectroscopy', 'Mid-infrared microspectroscopy', 'XAS, imaging, and microscale environmental characterization'],
        linkLabel: 'CLS beamtime application',
        href: 'https://www.lightsource.ca/users/getting-started/applying-for-beamtime.php',
      },
      {
        id: 'heps',
        name: 'High Energy Photon Source (HEPS)',
        scope: 'China / Beijing Huairou',
        timing: 'Regular, rapid, and special calls are released in batches',
        scheduleNote: 'Follow current call notices',
        publicInfo: 'HEPS is a new high-energy synchrotron facility suited to high-brightness, high-energy, high-spatial-resolution, and in situ experiments. Beamlines and measurement modes are opened in phases.',
        application: 'Contact the beamline to confirm available modes, sample dimensions, and expected signal strength before submitting a user proposal. Approved users apply separately for beamtime and technical safety review.',
        methods: ['Micro-XRF and micro-XANES', 'High-energy total scattering and PDF', 'Nanoscale imaging and in situ reaction studies'],
        linkLabel: 'HEPS user platform',
        href: 'https://heps.ihep.ac.cn/',
      },
      {
        id: 'bsrf',
        name: 'Beijing Synchrotron Radiation Facility (BSRF)',
        scope: 'China / Beijing',
        timing: 'User proposals and beamtime requests follow operation notices',
        scheduleNote: 'Follow operation and beamline notices',
        publicInfo: 'Users first apply for a project, then request specific beamtime according to the operating schedule. Beamtime for openly published research is generally free, and projects are normally valid for two years.',
        application: 'Contact the beamline one to two months before the proposed experiment to confirm feasibility, sample numbers, and safety requirements for XAFS, imaging, micro-XRF, or soft X-ray work.',
        methods: ['XAFS / XANES / EXAFS', 'Micro-XRF and X-ray imaging', 'Soft X-ray absorption spectroscopy'],
        linkLabel: 'BSRF user information',
        href: 'https://ihep.cas.cn/dkxzz/bsrf/',
      },
    ],
  },
};

export const resourcePages: { zh: Record<string, ResourcePageData>; en: Record<string, ResourcePageData> } = {
  zh: {
    funding: {
      lang: 'zh',
      eyebrow: '科研资源 / 项目与资助',
      title: '项目与人才资助',
      intro: '国家级自然科学项目与博士后资助的常见申报节点和官方入口。',
      timeline: fundingTimeline.zh,
      entries: [
        {
          id: 'nsfc-central',
          name: '国家自然科学基金青年科学基金项目与面上项目',
          scope: '国家自然科学基金',
          timing: '集中接收；通常于 3 月截止',
          publicInfo: '青年科学基金项目面向符合条件的青年科研人员；面上项目支持自主选题的基础研究。2026 年官方集中接收截止为 3 月 20 日 16:00；年龄、限项和申请代码以当年指南为准。',
          linkLabel: '2026 年度申请通知',
          href: 'https://www.nsfc.gov.cn/p1/3381/2824/99667.html',
        },
        {
          id: 'nsfc-noncentral',
          name: '国家自然科学基金联合基金及非集中接收项目',
          scope: '国家自然科学基金',
          timing: '集中接收或按专题指南分批受理',
          publicInfo: '部分联合基金进入集中接收，其他联合基金、国际合作、专项和原创探索等项目按专题指南发布。合作单位、申请代码和限项要求须随当年通知核对。',
          linkLabel: '国家自然科学基金项目指南',
          href: 'https://www.nsfc.gov.cn/publish/portal0/tab139/',
        },
        {
          id: 'national-key-rd',
          name: '国家重点研发计划',
          scope: '科技部重点专项',
          timing: '重点专项分批发布；常见预申报窗口为 3–7 月',
          publicInfo: '以专项指南为准，通常先提交预申报书，后续再组织正式申报和答辩评审。牵头单位、参与单位、任务分工和预算需要在指南发布后尽快落实。',
          linkLabel: '国家科技管理信息系统公共服务平台',
          href: 'https://service.most.gov.cn/',
        },
        {
          id: 'postdoctoral',
          name: '中国博士后科学基金及相关博士后资助',
          scope: '博士后资助',
          timing: '2–3 月首批；7–8 月第二批',
          publicInfo: '面上资助通常每年两批；特别资助、国家资助博士后研究人员计划和博士后创新人才支持计划主要在上半年组织。进站时间、博士毕业时间和设站单位要求需在申报前确认。',
          linkLabel: '中国博士后科学基金会',
          href: 'https://www.chinapostdoctor.org.cn/',
        },
      ],
    },
  },
  en: {
    funding: {
      lang: 'en',
      eyebrow: 'Research Resources / Funding',
      title: 'Funding and Fellowships',
      intro: 'Common submission periods and official portals for national natural-science and postdoctoral funding in China.',
      timeline: fundingTimeline.en,
      entries: [
        {
          id: 'nsfc-central',
          name: 'NSFC Young Scientists Fund and General Program',
          scope: 'National Natural Science Foundation of China',
          timing: 'Centralized call; normally closes in March',
          publicInfo: 'The Young Scientists Fund supports eligible early-career researchers, while the General Program supports investigator-initiated basic research. The centralized 2026 call closed at 16:00 on March 20; eligibility, limits, and application codes follow the annual guide.',
          linkLabel: '2026 NSFC application notice',
          href: 'https://www.nsfc.gov.cn/p1/3381/2824/99667.html',
        },
        {
          id: 'nsfc-noncentral',
          name: 'NSFC Joint Funds and non-centralized calls',
          scope: 'National Natural Science Foundation of China',
          timing: 'Centralized call or call-specific submission',
          publicInfo: 'Selected joint funds are included in the centralized call; other joint funds, international collaborations, special calls, and original-exploration programs are released by topic. Partner requirements, codes, and limits must be checked against the relevant notice.',
          linkLabel: 'NSFC project guidelines',
          href: 'https://www.nsfc.gov.cn/publish/portal0/tab139/',
        },
        {
          id: 'national-key-rd',
          name: 'National Key R&D Program of China',
          scope: 'Ministry of Science and Technology key programs',
          timing: 'Released in batches; pre-proposals commonly open from March to July',
          publicInfo: 'Each key program follows its own guide, normally beginning with a pre-proposal before full application and review. The lead institution, partners, task allocation, and budget should be settled promptly once the guide is issued.',
          linkLabel: 'National Science and Technology Management Information System',
          href: 'https://service.most.gov.cn/',
        },
        {
          id: 'postdoctoral',
          name: 'China Postdoctoral Science Foundation and related funding',
          scope: 'Postdoctoral funding',
          timing: 'Batch 1 in February-March; batch 2 in July-August',
          publicInfo: 'General funding normally runs in two batches each year. Special funding, the National-funded Postdoctoral Researcher Program, and the Postdoctoral Innovation Talent Support Program are mainly organized in the first half of the year. Check station-entry, degree-date, and host-institution requirements before applying.',
          linkLabel: 'China Postdoctoral Science Foundation',
          href: 'https://www.chinapostdoctor.org.cn/',
        },
      ],
    },
  },
};

export const dataToolsPages: Record<'zh' | 'en', DataToolsPageData> = {
  zh: {
    lang: 'zh',
    title: '数据、软件与科研规范',
    intro: '环境微生物、土壤与尾砂研究常用的公开数据仓库、专业数据库、分析环境和数据管理要求。',
    groups: [
      {
        title: '数据存档与共享',
        description: '原始测序数据、基因组组装和论文关联代码优先进入对应专业库或通用仓库。',
        entries: [
          { name: 'GSA', description: '宏基因组、扩增子、转录组等原始测序数据及其 BioProject、BioSample 元数据。', href: 'https://ngdc.cncb.ac.cn/gsa/' },
          { name: 'SRA / ENA', description: '国际原始序列数据归档和公共数据检索；同一数据不必重复提交多个 INSDC 节点。', href: 'https://www.ncbi.nlm.nih.gov/sra/' },
          { name: 'GWH', description: '分离菌、MAG 等基因组组装、注释及关联元数据。', href: 'https://ngdc.cncb.ac.cn/gwh/' },
          { name: 'Zenodo', description: '绘图数据、脚本、补充文件和软件版本存档，可获得 DOI。', href: 'https://zenodo.org/' },
        ],
      },
      {
        title: '微生物注释与功能检索',
        description: '分类和功能判断必须同时记录参考库版本、下载日期和关键参数。',
        entries: [
          { name: 'SILVA', description: '细菌、古菌和真核生物 rRNA 分类与比对；适用于 16S 扩增子和分类器构建。', href: 'https://www.arb-silva.de/' },
          { name: 'UNITE', description: '真菌 ITS 分类和 Species Hypothesis 参考库。', href: 'https://unite.ut.ee/' },
          { name: 'GTDB', description: '基于基因组系统发育的细菌和古菌分类；用于分离菌与 MAG 分类。', href: 'https://gtdb.ecogenomic.org/' },
          { name: 'eggNOG / KEGG', description: '蛋白正交群、功能类别、代谢通路和模块的交叉注释。', href: 'https://eggnog-mapper.embl.de/' },
        ],
      },
      {
        title: '环境与生态公开数据',
        description: '用于研究区背景、生态观测和论文关联环境数据的检索与发布。',
        entries: [
          { name: '国家地球系统科学数据中心', description: '中国气候、土壤、土地利用、地理空间与生态环境基础数据。', href: 'https://www.geodata.cn/' },
          { name: 'PANGAEA', description: '地球化学、沉积物、海洋和环境数据的长期发布与引用。', href: 'https://www.pangaea.de/' },
          { name: 'GBIF', description: '全球物种分布、标本和观测记录；下载时应保存 DOI 和筛选条件。', href: 'https://www.gbif.org/' },
        ],
      },
      {
        title: '分析环境与可重复工作流',
        description: '分析应可复跑，而不只保留软件名称或一次性操作记录。',
        entries: [
          { name: 'QIIME 2', description: '扩增子分析、可视化和分析溯源；记录引物、去噪、过滤和分类器参数。', href: 'https://qiime2.org/' },
          { name: 'fastp / MultiQC', description: '原始序列质控与汇总报告，适合固定为测序分析的第一步。', href: 'https://multiqc.info/' },
          { name: 'R / Python', description: '统计、绘图、自动化处理和模型分析；正式结果应保留脚本与包版本。', href: 'https://www.r-project.org/' },
          { name: 'Conda、容器与工作流', description: '以环境文件、镜像和 Snakemake / Nextflow 固定复杂分析的依赖与步骤。', href: 'https://snakemake.readthedocs.io/' },
        ],
      },
    ],
    standardsTitle: '最低数据规范',
    standards: [
      '项目启动时建立唯一项目和样品编号，并在采样、送样前完成元数据表。',
      '原始数据进入只读目录；从副本开始处理，不直接覆盖仪器文件、FASTQ、原始图像或光谱。',
      '记录数据来源、软件和数据库版本、参数、运行日期，以及样品筛除理由。',
      '正式图表保留源数据、生成脚本和说明；统计结果不只报告 P 值。',
      '重要数据按 3-2-1 原则备份；投稿前完成专业库提交、登录号登记和公开时间设置。',
    ],
  },
  en: {
    lang: 'en',
    title: 'Data, Software, and Standards',
    intro: 'Public repositories, specialist databases, analysis environments, and data-management practices commonly used in environmental microbiology, soil, and tailings research.',
    groups: [
      {
        title: 'Data Archiving and Sharing',
        description: 'Raw sequencing data, genome assemblies, and manuscript-linked code should be deposited in the appropriate specialist or general repository.',
        entries: [
          { name: 'GSA', description: 'Raw metagenomic, amplicon, transcriptomic, and other sequence data with BioProject and BioSample metadata.', href: 'https://ngdc.cncb.ac.cn/gsa/' },
          { name: 'SRA / ENA', description: 'International raw-sequence archiving and public data discovery; the same dataset does not need duplicate submission to multiple INSDC nodes.', href: 'https://www.ncbi.nlm.nih.gov/sra/' },
          { name: 'GWH', description: 'Genome assemblies, annotations, and associated metadata for isolates and MAGs.', href: 'https://ngdc.cncb.ac.cn/gwh/' },
          { name: 'Zenodo', description: 'Versioned archives for figure data, scripts, supplementary files, and software, with DOI assignment.', href: 'https://zenodo.org/' },
        ],
      },
      {
        title: 'Microbial Annotation and Functional Search',
        description: 'Taxonomic and functional interpretation requires the reference release, download date, and key settings to be recorded.',
        entries: [
          { name: 'SILVA', description: 'rRNA alignment and taxonomy for bacteria, archaea, and eukaryotes; useful for 16S analysis and classifier training.', href: 'https://www.arb-silva.de/' },
          { name: 'UNITE', description: 'Fungal ITS taxonomy and Species Hypothesis reference sequences.', href: 'https://unite.ut.ee/' },
          { name: 'GTDB', description: 'Genome-phylogeny-based bacterial and archaeal taxonomy for isolates and MAGs.', href: 'https://gtdb.ecogenomic.org/' },
          { name: 'eggNOG / KEGG', description: 'Cross-annotation of protein orthologs, functional categories, metabolic pathways, and modules.', href: 'https://eggnog-mapper.embl.de/' },
        ],
      },
      {
        title: 'Environmental and Ecological Open Data',
        description: 'Resources for study-area context, ecological observations, and publication-linked environmental datasets.',
        entries: [
          { name: 'National Earth System Science Data Center', description: 'Chinese climate, soil, land-use, geospatial, and environmental baseline data.', href: 'https://www.geodata.cn/' },
          { name: 'PANGAEA', description: 'Long-term publication and citation of geochemical, sediment, marine, and environmental datasets.', href: 'https://www.pangaea.de/' },
          { name: 'GBIF', description: 'Global species occurrence, specimen, and observation records; retain the download DOI and filter criteria.', href: 'https://www.gbif.org/' },
        ],
      },
      {
        title: 'Analysis Environments and Reproducible Workflows',
        description: 'Analyses should be rerunnable rather than documented only by software names or one-off operations.',
        entries: [
          { name: 'QIIME 2', description: 'Amplicon analysis, visualization, and provenance; retain primer, denoising, filtering, and classifier settings.', href: 'https://qiime2.org/' },
          { name: 'fastp / MultiQC', description: 'Raw-read quality control and summary reports; useful as a standard first step in sequencing analysis.', href: 'https://multiqc.info/' },
          { name: 'R / Python', description: 'Statistics, visualization, automated data processing, and modeling; retain scripts and package versions for reported results.', href: 'https://www.r-project.org/' },
          { name: 'Conda, containers, and workflows', description: 'Environment files, images, and Snakemake / Nextflow preserve dependencies and steps in complex analyses.', href: 'https://snakemake.readthedocs.io/' },
        ],
      },
    ],
    standardsTitle: 'Minimum Data Practices',
    standards: [
      'Assign unique project and sample identifiers at project start, and complete metadata sheets before sampling or sequencing submission.',
      'Place raw data in read-only locations; process copies rather than overwriting instrument files, FASTQ files, raw images, or spectra.',
      'Record data sources, software and database versions, parameters, run dates, and reasons for excluding samples.',
      'Retain source data, scripts, and documentation for each reported figure; do not report statistical results with P values alone.',
      'Back up important data according to the 3-2-1 principle, and complete repository submission, accession logging, and release-date settings before manuscript submission.',
    ],
  },
};
