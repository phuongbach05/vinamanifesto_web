const branchData = {
  1: {
    title: 'Vina remixes',
    era: 'Past',
    bodyEn: "is art and design that copy and paste, mix and remix but do not plagiarize. 'Vina' remixes the extremities of things or things that are considered polarized in common sense. i.e. French Baguette with Pork Floss. Italian Pizza with Bún Đậu Mắm Tôm (rice vermicelli with fried tofu and fermented shrimp paste). Bolero with Eurodance.",
    bodyVie: "is art and design that copy and paste, mix and remix but do not plagiarize. 'Vina' remixes the extremities of things or things that are considered polarized in common sense. i.e. French Baguette with Pork Floss. Italian Pizza with Bún Đậu Mắm Tôm (rice vermicelli with fried tofu and fermented shrimp paste). Bolero with Eurodance."
  },
  2: {
    title: 'Vina is kitsch',
    era: 'Past → Present',
    bodyEn: 'From Vinahouse to Vina design, it is an aesthetic that embraces the kitschness, the not-so-stylish, the “countryside style”, the stereotypes, the maximalism of Vietnamese contemporary life.',
    bodyVie: 'From Vinahouse to Vina design, it is an aesthetic that embraces the kitschness, the not-so-stylish, the “countryside style”, the stereotypes, the maximalism of Vietnamese contemporary life.'
  },
  3: {
    title: 'Vina integrates',
    era: 'Past',
    bodyEn: '"Maintain national tradition while absorbing international cultural quintessence." -Nghị quyết Trung Ương 9 (9th Central Committee of the Communist Party’s Resolution)',
    bodyVie: '"Maintain national tradition while absorbing international cultural quintessence." -Nghị quyết Trung Ương 9 (9th Central Committee of the Communist Party’s Resolution)'
  },
  4: {
    title: 'Vina is chaos',
    era: 'Present',
    bodyEn: '…in order. Freedom in restriction. Look at the examples of Vietnamese traffic. Chaotic but everyone seems to respect unspoken orders, set by unspoken negotiations. Look at the KTTs, the structure is restrictive, but got expanded through improvisation.',
    bodyVie: '…in order. Freedom in restriction. Look at the examples of Vietnamese traffic. Chaotic but everyone seems to respect unspoken orders, set by unspoken negotiations. Look at the KTTs, the structure is restrictive, but got expanded through improvisation.'
  },
  5: {
    title: 'Vina is hotpot',
    era: 'Present → Future',
    bodyEn: 'It is not a fixed style, but evolved like the open source or hotpot. Everyone can contribute to define what Vina is',
    bodyVie: 'It is not a fixed style, but evolved like the open source or hotpot. Everyone can contribute to define what Vina is'
  }
};

const topicData = {
  'post-sharing': {
    title: 'Post-sharing economy',
    era: 'Past',
    bodyEn: 'Analyzing how digital sharing platforms intersect with traditional community practices in Vietnam.',
    bodyVie: 'Phân tích cách các nền tảng chia sẻ kỹ thuật số giao thoa với thực hành cộng đồng truyền thống ở Việt Nam.',
    images: [
      {
        captionEn: 'Conceptual sketch mapping public-private shared spaces in Hanoi.',
        captionVie: 'Bản phác thảo khái niệm ánh xạ các không gian chia sẻ công-tư tại Hà Nội.'
      },
      {
        captionEn: 'Data visualization tracking digital transaction flows and local community habits.',
        captionVie: 'Trực quan hóa dữ liệu theo dõi luồng giao dịch số và thói quen cộng đồng địa phương.'
      }
    ]
  },
  'viscose': {
    title: 'Viscose #3',
    era: 'Past',
    bodyEn: 'Exploring local synthetic textile histories and industrial materials in Vietnamese history.',
    bodyVie: 'Khám phá lịch sử dệt may tổng hợp địa phương và vật liệu công nghiệp trong lịch sử Việt Nam.',
    images: [
      {
        captionEn: 'Archival photography of early synthetic textile factories in Nam Dinh.',
        captionVie: 'Ảnh tư liệu về những nhà máy dệt tổng hợp thời kỳ đầu tại Nam Định.'
      },
      {
        captionEn: 'Material study analyzing local fiber weaves and industrial compounds.',
        captionVie: 'Nghiên cứu chất liệu phân tích các kiểu dệt sợi địa phương và hợp chất công nghiệp.'
      }
    ]
  },
  'first-collection': {
    title: 'Vinabiennale<br>First collection',
    era: 'Past',
    bodyEn: 'The debut collection showcasing experimental designs inspired by everyday street objects.',
    bodyVie: 'Bộ sưu tập đầu tiên trình diễn các thiết kế thử nghiệm lấy cảm hứng từ các vật dụng đường phố hàng ngày.',
    images: [
      {
        captionEn: 'Prototype designs showcasing street objects transformed into wearable garments.',
        captionVie: 'Các thiết kế thử nghiệm trình diễn vật dụng đường phố được biến đổi thành trang phục.'
      },
      {
        captionEn: 'Exhibition moodboard featuring local sidewalk patterns and texture references.',
        captionVie: 'Moodboard triển lãm thể hiện các họa tiết vỉa hè địa phương và mẫu chất liệu tham chiếu.'
      }
    ]
  },
  'taiwan': {
    title: 'Vinabiennale@Taiwan<br>National Theatre',
    era: 'Past',
    bodyEn: 'Cross-cultural art showcase in Taiwan integrating Vietnamese traditional performance art.',
    bodyVie: 'Triển lãm nghệ thuật đa văn hóa tại Đài Loan tích hợp nghệ thuật biểu diễn truyền thống Việt Nam.',
    images: [
      {
        captionEn: 'Stage layout draft integrating traditional Vietnamese water puppetry structures in Taiwan.',
        captionVie: 'Bản thảo thiết kế sân khấu tích hợp cấu trúc múa rối nước truyền thống Việt Nam tại Đài Loan.'
      },
      {
        captionEn: 'Behind-the-scenes costume details combining traditional silk with industrial vinyl.',
        captionVie: 'Chi tiết trang phục hậu trường kết hợp lụa truyền thống với chất liệu nhựa vinyl công nghiệp.'
      }
    ]
  },
  'karma': {
    title: 'Karma Kapitalists',
    era: 'Past',
    bodyEn: 'A critical design exploration of local commerce, street vending, and capital accumulation.',
    bodyVie: 'Khám phá thiết kế phản biện về thương mại địa phương, bán hàng rong và tích lũy vốn.',
    images: [
      {
        captionEn: 'Field notes documenting informal street vendor logistics and capital cycles.',
        captionVie: 'Ghi chép thực địa tài liệu hóa hậu cần bán hàng rong và chu kỳ vốn phi chính thức.'
      },
      {
        captionEn: 'Diagram illustrating spiritual commerce and merit-making transaction networks.',
        captionVie: 'Sơ đồ minh họa mạng lưới giao dịch thương mại tâm linh và tích lũy công đức.'
      }
    ]
  },
  'teaching': {
    title: 'Vina teaching',
    era: 'Present',
    bodyEn: 'Alternative design education programs integrating vernacular architecture with contemporary digital design.',
    bodyVie: 'Các chương trình giáo dục thiết kế thay thế tích hợp kiến trúc bản địa với thiết kế kỹ thuật số đương đại.',
    images: [
      {
        captionEn: 'Student workshop models merging local bamboo structures with parametric design.',
        captionVie: 'Mô hình workshop sinh viên kết hợp cấu trúc tre địa phương với thiết kế tham số.'
      },
      {
        captionEn: 'Curriculum roadmap showing design methods drawing from vernacular building hacks.',
        captionVie: 'Lộ trình chương trình học thể hiện các phương pháp thiết kế từ mẹo xây dựng bản địa.'
      }
    ]
  },
  'cay-neo': {
    title: 'Cây Neo',
    era: 'Present',
    bodyEn: 'Design research project focusing on traditional anchoring motifs in local river navigation.',
    bodyVie: 'Dự án nghiên cứu thiết kế tập trung vào các mô-típ neo giữ truyền thống trong điều hướng sông nước địa phương.',
    images: [
      {
        captionEn: 'Typology study of traditional river boat anchoring devices along the Mekong.',
        captionVie: 'Nghiên cứu phân loại các thiết bị neo giữ thuyền sông nước truyền thống dọc sông Mê Kông.'
      },
      {
        captionEn: 'Modern product concept scaling local wooden anchors for public installation.',
        captionVie: 'Ý tưởng sản phẩm hiện đại phóng to mỏ neo gỗ địa phương cho sắp đặt công cộng.'
      }
    ]
  },
  'vina-seat': {
    title: 'Vina Seat',
    era: 'Present',
    bodyEn: 'Redesigning public seating inspired by local plastic stools and informal community hubs.',
    bodyVie: 'Thiết kế lại ghế ngồi công cộng lấy cảm hứng từ những chiếc ghế nhựa địa phương và các cụm cộng đồng thân mật.',
    images: [
      {
        captionEn: 'Ergonomic mockups redesigning the iconic blue plastic street stool for public plazas.',
        captionVie: 'Mô hình nhân trắc học thiết kế lại chiếc ghế nhựa xanh đường phố cho các quảng trường công cộng.'
      },
      {
        captionEn: 'Community mapping showing stool clustering habits in urban tea stalls.',
        captionVie: 'Bản đồ cộng đồng thể hiện thói quen tụ họp quanh ghế nhựa tại các quán trà đá đô thị.'
      }
    ]
  },
  'bds': {
    title: 'Bất động sản AV',
    era: 'Present',
    bodyEn: 'Audio-visual installation reflecting on real estate hype, urban development, and construction sites.',
    bodyVie: 'Sắp đặt âm thanh-hình ảnh phản ánh về cơn sốt bất động sản, phát triển đô thị và các công trường xây dựng.',
    images: [
      {
        captionEn: 'Visual storyboard mapping real estate advertising patterns in construction zones.',
        captionVie: 'Storyboard hình ảnh ánh xạ các mô-típ quảng cáo bất động sản tại các khu vực công trường.'
      },
      {
        captionEn: 'Audio waveform visualization showing speculative real estate hype sounds.',
        captionVie: 'Trực quan hóa dạng sóng âm thanh thể hiện tiếng ồn đầu cơ bất động sản thổi phồng.'
      }
    ]
  },
  '2028': {
    title: 'vinabiennale 2028',
    era: 'Future',
    bodyEn: 'Future roadmap outlining speculative design trends and collaborative design labs for 2028.',
    bodyVie: 'Lộ trình tương lai vạch ra các xu hướng thiết kế suy tưởng và phòng thí nghiệm thiết kế hợp tác cho năm 2028.',
    images: [
      {
        captionEn: 'Speculative architecture blueprints for the proposed 2028 mobile pavilion.',
        captionVie: 'Bản thiết kế kiến trúc suy tưởng cho nhà triển lãm di động đề xuất năm 2028.'
      },
      {
        captionEn: 'Strategic foresight diagram tracking collective design trends for the next decade.',
        captionVie: 'Sơ đồ tầm nhìn chiến lược theo dõi xu hướng thiết kế tập thể cho thập kỷ tới.'
      }
    ]
  },
  'open-source': {
    title: 'Open source Vina<br>design of Vietnam',
    era: 'Future',
    bodyEn: 'A shared database of open-source design patterns, icons, and cultural motifs of Vietnam.',
    bodyVie: 'Cơ sở dữ liệu chung về các hoa văn thiết kế nguồn mở, biểu tượng và mô-típ văn hóa của Việt Nam.',
    images: [
      {
        captionEn: 'Database schematic showing open-source asset repository for cultural motifs.',
        captionVie: 'Sơ đồ cơ sở dữ liệu thể hiện kho lưu trữ tài nguyên nguồn mở cho các mô-típ văn hóa.'
      },
      {
        captionEn: 'Vector pattern library demonstrating community-submitted vernacular icons.',
        captionVie: 'Thư viện họa tiết vector trình diễn các biểu tượng bản địa do cộng đồng đóng góp.'
      }
    ]
  }
};

const centers = {
  // Nodes
  'node-1': { cx: 520, cy: 280 },
  'node-2': { cx: 500, cy: 600 },
  'node-3': { cx: 800, cy: 675 },
  'node-4': { cx: 1080, cy: 610 },
  'node-5': { cx: 1085, cy: 285 },

  // Topics
  'post-sharing': { cx: 165, cy: 155 },
  'viscose': { cx: 455, cy: 125 },
  'karma': { cx: 145, cy: 365 },
  'first-collection': { cx: 170, cy: 630 },
  'taiwan': { cx: 265, cy: 815 },
  'vina-seat': { cx: 990, cy: 805 },
  'cay-neo': { cx: 650, cy: 805 },
  'bds': { cx: 1295, cy: 710 },
  'teaching': { cx: 1125, cy: 135 },
  '2028': { cx: 1545, cy: 155 },
  'open-source': { cx: 1545, cy: 485 }
};

const topicConnections = {
  'post-sharing': ['first-collection'],
  'viscose': ['karma'],
  'first-collection': ['post-sharing', 'taiwan'],
  'taiwan': ['first-collection'],
  'karma': ['viscose'],
  'teaching': ['2028', 'open-source'],
  'cay-neo': ['vina-seat'],
  'vina-seat': ['cay-neo'],
  'bds': ['cay-neo', 'vina-seat'],
  '2028': ['open-source', 'teaching'],
  'open-source': ['2028', 'teaching']
};

const panel              = document.getElementById('infoPanel');
const overlay            = document.getElementById('mapOverlay');
const modalNumCircle     = document.getElementById('modalNumCircle');
const modalTitle         = document.getElementById('modalTitle');
const modalTitleScript   = document.getElementById('modalTitleScript');
const modalBodyEn        = document.getElementById('modalBodyEn');
const modalBodyVie       = document.getElementById('modalBodyVie');
const modalCardsContainer = document.getElementById('modalCardsContainer');
const modalSliderWrap    = document.getElementById('modalSliderWrap');
const modalCloseBtn      = document.getElementById('modalCloseBtn');
const modalBackBtn       = document.getElementById('modalBackBtn');
const prevBtn            = document.getElementById('sliderPrevBtn');
const nextBtn            = document.getElementById('sliderNextBtn');

const nodes       = [...document.querySelectorAll('.node')];
const topics      = [...document.querySelectorAll('.topic')];
const timeButtons = [...document.querySelectorAll('.time')];

// Camera zoom/pan state
const MAP_WIDTH = 1700;
const MAP_HEIGHT = 900;
const MAP_CENTER_X = MAP_WIDTH / 2;
const ZOOM_WIDTH = 1100;
const ZOOM_HEIGHT = 582;
const MOBILE_BREAKPOINT = 1024;

const svgElement = document.getElementById('riverMap');
const SVG_NS = 'http://www.w3.org/2000/svg';
let activeCameraCenter = null;
let currentWideMapScale = 1;

function isMobileView() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function getMobileInitialViewBox() {
  // Target: show all 5 branch nodes + lake with comfortable padding
  // Nodes: 1(520,280) 2(500,600) 3(800,675) 4(1080,610) 5(1085,285)
  const aspect = getViewportAspect();
  const targetW = 900;   // base width to show all 5 nodes
  const targetH = 650;   // base height
  const targetAspect = targetW / targetH;

  let w, h;
  if (aspect > targetAspect) {
    // Wider viewport (landscape-ish): expand width
    h = targetH;
    w = h * aspect;
  } else {
    // Taller viewport (portrait): expand height
    w = targetW;
    h = w / aspect;
  }

  // If height exceeds map, clamp to map height and derive width
  if (h > MAP_HEIGHT) {
    h = MAP_HEIGHT;
    w = h * aspect;
  }
  // If width exceeds map, clamp likewise
  if (w > MAP_WIDTH) {
    w = MAP_WIDTH;
    h = w / aspect;
  }

  // Center on the node cluster area (slightly left of map center)
  const cx = 790;
  const cy = MAP_HEIGHT / 2;
  let x = cx - w / 2;
  let y = cy - h / 2;
  x = Math.max(0, Math.min(x, MAP_WIDTH - w));
  y = Math.max(0, Math.min(y, MAP_HEIGHT - h));
  return [x, y, w, h];
}

function getHomeViewBox() {
  return isMobileView() ? getMobileInitialViewBox() : getFullViewBox();
}

let currentViewBox = getHomeViewBox();
let targetViewBox = [...currentViewBox];
let isAnimating = false;
const easeFactor = 0.08;

svgElement.setAttribute('viewBox', formatViewBox(currentViewBox));
updateResponsiveTimeline(getFullViewBox());
updateResponsiveMapStretch(getFullViewBox());

/* ───── Procedural Hand-Drawn Mountain Generator ───── */
function drawMountain(x, y, scale, rotation) {
  const g = document.createElementNS(SVG_NS, 'g');
  g.setAttribute('transform',
    `translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${(rotation || 0).toFixed(1)}) scale(${scale.toFixed(3)})`);
  g.classList.add('mountain');

  const variants = [
    { id: 'mtn1', width: 21, height: 19 },
    { id: 'mtn2', width: 46, height: 33 },
    { id: 'mtn3', width: 26, height: 30 }
  ];
  const index = Math.abs(Math.floor(Math.sin(x * 0.031 + y * 0.047) * 10000)) % variants.length;
  const variant = variants[index];
  const normalizer = 48 / variant.width;
  const use = document.createElementNS(SVG_NS, 'use');

  use.setAttribute('href', `#${variant.id}`);
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${variant.id}`);
  use.setAttribute(
    'transform',
    `scale(${normalizer.toFixed(3)}) translate(${(-variant.width / 2).toFixed(1)}, ${(-variant.height / 2).toFixed(1)})`
  );
  g.appendChild(use);

  return g;
}

// Mountain size profile helpers
const MOUNTAIN_SIZE = { width: 48, height: 38 };
const TERRAIN_CLUSTER_ZONES = [
  { cx: 170, cy: 230, rx: 170, ry: 165, groups: 24, spreadX: 82, spreadY: 58, scaleMin: 0.86, scaleMax: 1.9, priority: 0.1 },
  { cx: 320, cy: 610, rx: 250, ry: 150, groups: 20, spreadX: 78, spreadY: 48, scaleMin: 0.78, scaleMax: 1.72, priority: 0.18 },
  { cx: 585, cy: 250, rx: 190, ry: 120, groups: 14, spreadX: 70, spreadY: 42, scaleMin: 0.72, scaleMax: 1.54, priority: 0.32 },
  { cx: 610, cy: 720, rx: 290, ry: 115, groups: 18, spreadX: 94, spreadY: 42, scaleMin: 0.82, scaleMax: 1.82, priority: 0.16 },
  { cx: 1055, cy: 210, rx: 250, ry: 150, groups: 25, spreadX: 86, spreadY: 54, scaleMin: 0.82, scaleMax: 1.84, priority: 0.08 },
  { cx: 1220, cy: 555, rx: 275, ry: 160, groups: 24, spreadX: 88, spreadY: 56, scaleMin: 0.86, scaleMax: 1.96, priority: 0.12 },
  { cx: 1435, cy: 340, rx: 165, ry: 250, groups: 18, spreadX: 76, spreadY: 68, scaleMin: 0.76, scaleMax: 1.8, priority: 0.2 },
  { cx: 965, cy: 760, rx: 265, ry: 105, groups: 14, spreadX: 92, spreadY: 38, scaleMin: 0.78, scaleMax: 1.72, priority: 0.26 }
];

function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function hashString(value) {
  let hash = 2166136261;

  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function parseSimpleCubicPath(d) {
  const numbers = (d.match(/-?\d*\.?\d+/g) || []).map(Number);
  if (numbers.length < 8) return null;

  return {
    start: { x: numbers[0], y: numbers[1] },
    c1: { x: numbers[2], y: numbers[3] },
    c2: { x: numbers[4], y: numbers[5] },
    end: { x: numbers[6], y: numbers[7] }
  };
}

function cubicPoint(cubic, t) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const t2 = t * t;

  return {
    x:
      mt2 * mt * cubic.start.x +
      3 * mt2 * t * cubic.c1.x +
      3 * mt * t2 * cubic.c2.x +
      t2 * t * cubic.end.x,
    y:
      mt2 * mt * cubic.start.y +
      3 * mt2 * t * cubic.c1.y +
      3 * mt * t2 * cubic.c2.y +
      t2 * t * cubic.end.y
  };
}

function cubicTangent(cubic, t) {
  const mt = 1 - t;

  return {
    x:
      3 * mt * mt * (cubic.c1.x - cubic.start.x) +
      6 * mt * t * (cubic.c2.x - cubic.c1.x) +
      3 * t * t * (cubic.end.x - cubic.c2.x),
    y:
      3 * mt * mt * (cubic.c1.y - cubic.start.y) +
      6 * mt * t * (cubic.c2.y - cubic.c1.y) +
      3 * t * t * (cubic.end.y - cubic.c2.y)
  };
}

function splinePath(points, tension = 0.9) {
  if (points.length < 2) return '';

  const commands = [`M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`];

  for (let i = 0; i < points.length - 1; i++) {
    const prev = points[Math.max(0, i - 1)];
    const current = points[i];
    const next = points[i + 1];
    const nextNext = points[Math.min(points.length - 1, i + 2)];
    const cp1 = {
      x: current.x + (next.x - prev.x) * tension / 6,
      y: current.y + (next.y - prev.y) * tension / 6
    };
    const cp2 = {
      x: next.x - (nextNext.x - current.x) * tension / 6,
      y: next.y - (nextNext.y - current.y) * tension / 6
    };

    commands.push(
      `C ${cp1.x.toFixed(1)} ${cp1.y.toFixed(1)}, ${cp2.x.toFixed(1)} ${cp2.y.toFixed(1)}, ${next.x.toFixed(1)} ${next.y.toFixed(1)}`
    );
  }

  return commands.join(' ');
}

function riverType(path) {
  if (path.classList.contains('main')) return 'main';
  if (path.classList.contains('sub')) return 'sub';
  return 'connector';
}

function organicizeRiverPaths() {
  document.querySelectorAll('.river').forEach((path, index) => {
    const originalD = path.dataset.baseD || path.getAttribute('d');
    path.dataset.baseD = originalD;
    path.setAttribute('d', originalD);

    const type = riverType(path);
    const length = path.getTotalLength();
    if (!Number.isFinite(length) || length <= 0) return;

    const rng = seededRandom(hashString(`${originalD}|${type}|${index}`));
    const phase = rng() * Math.PI * 2;
    const direction = rng() < 0.5 ? -1 : 1;
    const waveAmp = type === 'main' ? 5.5 : type === 'sub' ? 8.5 : 10;
    const arcAmp = type === 'main' ? 2.8 : type === 'sub' ? 4.5 : 6;
    const anchors = type === 'connector'
      ? [0, 0.13, 0.27, 0.41, 0.55, 0.69, 0.83, 1]
      : type === 'sub'
        ? [0, 0.11, 0.23, 0.36, 0.49, 0.62, 0.75, 0.88, 1]
        : [0, 0.18, 0.36, 0.54, 0.72, 0.88, 1];

    const points = anchors.map(t => {
      const distance = t * length;
      const point = path.getPointAtLength(distance);
      if (t === 0 || t === 1) return point;

      const before = path.getPointAtLength(Math.max(0, distance - 5));
      const after = path.getPointAtLength(Math.min(length, distance + 5));
      const tangent = {
        x: after.x - before.x,
        y: after.y - before.y
      };
      const tangentLength = Math.hypot(tangent.x, tangent.y) || 1;
      const normal = {
        x: -tangent.y / tangentLength,
        y: tangent.x / tangentLength
      };
      const anchorFalloff = Math.pow(Math.sin(t * Math.PI), type === 'connector' ? 2.3 : 2.7);
      const wave = anchorFalloff * (
        Math.sin(t * Math.PI * 2 + phase) * waveAmp +
        Math.sin(t * Math.PI * 3.5 + phase * 0.6) * waveAmp * 0.2 +
        direction * Math.sin(t * Math.PI) * arcAmp +
        (rng() - 0.5) * waveAmp * 0.28
      );
      const drift = anchorFalloff * (rng() - 0.5) * waveAmp * 0.18;

      return {
        x: point.x + normal.x * wave + (tangent.x / tangentLength) * drift,
        y: point.y + normal.y * wave + (tangent.y / tangentLength) * drift
      };
    });

    path.setAttribute('d', splinePath(points, 0.94));
  });
}

function splinePathSegment(points, move = true, tension = 0.72) {
  if (points.length < 2) return '';

  const commands = [move
    ? `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`
    : `L ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`
  ];

  for (let i = 0; i < points.length - 1; i++) {
    const prev = points[Math.max(0, i - 1)];
    const current = points[i];
    const next = points[i + 1];
    const nextNext = points[Math.min(points.length - 1, i + 2)];
    const cp1 = {
      x: current.x + (next.x - prev.x) * tension / 6,
      y: current.y + (next.y - prev.y) * tension / 6
    };
    const cp2 = {
      x: next.x - (nextNext.x - current.x) * tension / 6,
      y: next.y - (nextNext.y - current.y) * tension / 6
    };

    commands.push(
      `C ${cp1.x.toFixed(1)} ${cp1.y.toFixed(1)}, ${cp2.x.toFixed(1)} ${cp2.y.toFixed(1)}, ${next.x.toFixed(1)} ${next.y.toFixed(1)}`
    );
  }

  return commands.join(' ');
}

function getRibbonNormal(path, length, distance) {
  const before = path.getPointAtLength(Math.max(0, distance - 4));
  const after = path.getPointAtLength(Math.min(length, distance + 4));
  const dx = after.x - before.x;
  const dy = after.y - before.y;
  const tangentLength = Math.hypot(dx, dy) || 1;

  return {
    x: -dy / tangentLength,
    y: dx / tangentLength
  };
}

function getRibbonBaseWidth(type, sourceWidth) {
  return sourceWidth;
}

function ribbonWidthAt(t, baseWidth, type, bulges, phase) {
  return baseWidth;
}

function buildRibbonPath(path, type, index, baseWidth, startT = 0, endT = 1) {
  const length = path.getTotalLength();
  const span = Math.max(1, (endT - startT) * length);
  const samples = clamp(Math.ceil(span / 10), 4, 16);
  const left = [];
  const right = [];

  for (let i = 0; i <= samples; i++) {
    const localT = i / samples;
    const t = startT + (endT - startT) * localT;
    const distance = length * t;
    const point = path.getPointAtLength(distance);
    const normal = getRibbonNormal(path, length, distance);
    const width = ribbonWidthAt(t, baseWidth, type, null, 0);
    const halfWidth = width / 2;

    left.push({
      x: point.x + normal.x * halfWidth,
      y: point.y + normal.y * halfWidth
    });
    right.push({
      x: point.x - normal.x * halfWidth,
      y: point.y - normal.y * halfWidth
    });
  }

  return `${splinePathSegment(left, true, 0.68)} ${splinePathSegment(right.reverse(), false, 0.68)} Z`;
}

function buildRiverDisplayLayers() {
  // No-op: we render the .river paths directly as SVG strokes
}

function syncRiverDisplayStates() {
  // No-op since we style .river directly
}

function setRiverFlow(selector) {
  document.querySelectorAll(selector).forEach(river => {
    river.classList.add('flow-in');
  });
  syncRiverDisplayStates();
}

function expandBox(box, padding) {
  return {
    x: box.x - padding,
    y: box.y - padding,
    width: box.width + padding * 2,
    height: box.height + padding * 2
  };
}

function boxesOverlap(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}

function distancePointToBox(point, box) {
  const dx = Math.max(box.x - point.x, 0, point.x - (box.x + box.width));
  const dy = Math.max(box.y - point.y, 0, point.y - (box.y + box.height));
  return Math.hypot(dx, dy);
}

function scaleBox(box, factor) {
  const width = box.width * factor;
  const height = box.height * factor;

  return {
    x: box.x + (box.width - width) / 2,
    y: box.y + (box.height - height) / 2,
    width,
    height
  };
}

function bottomBandBox(box, ratio = 0.24) {
  const height = Math.max(4, box.height * ratio);

  return {
    x: box.x + box.width * 0.08,
    y: box.y + box.height - height,
    width: box.width * 0.84,
    height
  };
}

function terrainNoise(row, col, seed = 0) {
  const value = Math.sin(row * 12.9898 + col * 78.233 + seed * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function getSafeBox(element, padding) {
  try {
    return expandBox(element.getBBox(), padding);
  } catch {
    return null;
  }
}

function getProtectedBoxes() {
  return [
    ...[...document.querySelectorAll('.topic')].map(el => getSafeBox(el, 38)),
    ...[...document.querySelectorAll('.time')].map(el => getSafeBox(el, 48)),
    ...[...document.querySelectorAll('.node')].map(el => getSafeBox(el, 46)),
    ...[...document.querySelectorAll('.endpoints circle')].map(el => getSafeBox(el, 18)),
    ...[...document.querySelectorAll('.lake-mountain')].map(el => getSafeBox(el, 24)),
    getSafeBox(document.querySelector('.lake'), 32),
    getSafeBox(document.querySelector('.brand'), 26)
  ].filter(Boolean);
}

function applyRiverStrokeVariation() {
  const rng = seededRandom(20280608);
  const strokeRanges = {
    main: [9.5, 13.5],
    sub: [6.0, 9.5],
    connector: [3.0, 5.0]
  };

  document.querySelectorAll('.river').forEach(river => {
    const type = river.classList.contains('main')
      ? 'main'
      : river.classList.contains('sub')
        ? 'sub'
        : 'connector';
    const [min, max] = strokeRanges[type];
    const weight = min + rng() * (max - min);
    river.dataset.strokeWeight = weight.toFixed(2);
    river.style.strokeWidth = weight.toFixed(2);
  });
}

function getRiverStrokeGuards() {
  const guards = [];

  document.querySelectorAll('.river').forEach(path => {
    const length = path.getTotalLength();
    const strokeWidth = parseFloat(window.getComputedStyle(path).strokeWidth) || 10;
    const guardPadding = path.classList.contains('main')
      ? 10
      : path.classList.contains('sub')
        ? 8
        : 6;
    const radius = strokeWidth / 2 + guardPadding;
    const step = path.classList.contains('connector') ? 18 : 12;
    const samples = Math.ceil(length / step);

    for (let i = 0; i <= samples; i++) {
      const point = path.getPointAtLength((i / samples) * length);
      guards.push({ x: point.x, y: point.y, radius });
    }
  });

  return guards;
}

function boxTouchesRiverStroke(box, riverGuards) {
  return riverGuards.some(guard => distancePointToBox(guard, box) < guard.radius);
}

function pushMountainCandidate(candidates, point, dx, dy, pathIndex, rng, lane, options = {}) {
  const x = point.x + dx;
  const y = point.y + dy;
  const minCluster = options.minCluster ?? 3;
  const maxCluster = options.maxCluster ?? 7;
  const spreadX = options.spreadX ?? 54;
  const spreadY = options.spreadY ?? 38;
  const clusterSize = minCluster + Math.floor(rng() * (maxCluster - minCluster + 1));
  const priority = options.priority ?? rng();
  const scaleMin = options.scaleMin ?? 0.72;
  const scaleMax = options.scaleMax ?? 1.74;

  candidates.push({
    x,
    y,
    riverPoint: point,
    scaleMin,
    scaleMax,
    sort: priority + rng() * 0.18 + pathIndex * 0.005 + lane * 0.003
  });

  for (let c = 1; c < clusterSize; c++) {
    const side = c % 2 === 0 ? -1 : 1;
    const rank = Math.ceil(c / 2);
    const step = 30 + spreadX * 0.26 + rng() * 18;
    const rowJitter = options.rowJitter ?? 8;

    candidates.push({
      x: x + side * rank * step + (rng() - 0.5) * spreadX * 0.28,
      y: y + (rng() - 0.5) * rowJitter,
      riverPoint: point,
      scaleMin: scaleMin * (0.88 + rng() * 0.22),
      scaleMax: scaleMax * (0.88 + rng() * 0.18),
      sort: priority + rng() * 0.22 + c * 0.004 + pathIndex * 0.005 + lane * 0.003
    });
  }
}

function pushSingleMountainCandidate(candidates, point, pathIndex, rng, lane, options = {}) {
  const scaleMin = options.scaleMin ?? 0.9;
  const scaleMax = options.scaleMax ?? 2.4;
  const priority = options.priority ?? rng();

  candidates.push({
    x: point.x,
    y: point.y,
    riverPoint: point,
    scaleMin,
    scaleMax,
    sort: priority + rng() * 0.08 + pathIndex * 0.002 + lane * 0.001
  });
}

function randomPointInEllipse(zone, rng) {
  const angle = rng() * Math.PI * 2;
  const radius = Math.sqrt(rng());

  return {
    x: zone.cx + Math.cos(angle) * radius * zone.rx,
    y: zone.cy + Math.sin(angle) * radius * zone.ry
  };
}

function getRiverCandidates(rng) {
  const candidates = [];
  const paths = [...document.querySelectorAll('.river.main, .river.sub, .river.connector')];

  paths.forEach((path, pathIndex) => {
    const length = path.getTotalLength();
    const samples = Math.max(6, Math.floor(length / 44));

    for (let i = 0; i < samples; i++) {
      const skipChance = path.classList.contains('connector') ? 0.48 : 0.36;
      if (rng() < skipChance) continue;

      const distance = ((i + 0.2 + rng() * 0.6) / samples) * length;
      const point = path.getPointAtLength(distance);
      const before = path.getPointAtLength(Math.max(0, distance - 4));
      const after = path.getPointAtLength(Math.min(length, distance + 4));
      const dx = after.x - before.x;
      const dy = after.y - before.y;
      const tangentLength = Math.hypot(dx, dy) || 1;
      const laneCount = path.classList.contains('connector')
        ? 1 + Math.floor(rng() * 2)
        : 1 + Math.floor(rng() * 3);

      for (let lane = 0; lane < laneCount; lane++) {
        const side = ((i + lane + pathIndex) % 2 === 0) ? 1 : -1;
        const offset = 58 + lane * 38 + rng() * 72;
        const candidateDx = (-dy / tangentLength) * offset * side + (rng() - 0.5) * 26;
        const candidateDy = (dx / tangentLength) * offset * side + (rng() - 0.5) * 24;

        pushMountainCandidate(candidates, point, candidateDx, candidateDy, pathIndex, rng, lane, {
          minCluster: 1,
          maxCluster: 4,
          spreadX: 48,
          spreadY: 30,
          scaleMin: 1.15,
          scaleMax: 2.7,
          priority: 0.42 + rng() * 0.52
        });
      }
    }
  });

  return candidates.sort((a, b) => a.sort - b.sort);
}

function getMountainScaleProfile(rng) {
  const profile = rng();

  if (profile < 0.35) {
    // Tiny filler mountains
    return { scaleMin: 0.32, scaleMax: 0.65 };
  }

  if (profile < 0.75) {
    // Medium mountains
    return { scaleMin: 0.65, scaleMax: 1.35 };
  }

  if (profile < 0.92) {
    // Large mountains
    return { scaleMin: 1.35, scaleMax: 2.10 };
  }

  // Very large anchor peaks
  return { scaleMin: 2.10, scaleMax: 3.10 };
}

function getMountainSize(rng) {
  // Return approximate bounding box for collision detection
  const jitter = 0.85 + rng() * 0.3;
  return {
    width: MOUNTAIN_SIZE.width * jitter,
    height: MOUNTAIN_SIZE.height * jitter
  };
}

function getTerrainClusterCandidates(rng) {
  const candidates = [];
  const field = { x: 58, y: 138, width: 1584, height: 724 };
  const columns = 20;
  const columnWidth = field.width / columns;

  for (let col = 0; col < columns; col++) {
    const groupsInColumn = 3 + Math.floor(rng() * 4);

    for (let group = 0; group < groupsInColumn; group++) {
      const slot = (group + rng()) / groupsInColumn;
      const x = field.x +
        (col + 0.1 + rng() * 0.8) * columnWidth +
        (rng() - 0.5) * columnWidth * 0.7;
      const y = field.y +
        slot * field.height +
        (rng() - 0.5) * field.height * 0.13;
      const dense = rng() > 0.64;
      const tinyPocket = rng() < 0.2;
      const scaleProfile = getMountainScaleProfile(rng);

      pushMountainCandidate(candidates, { x, y }, 0, 0, 70 + col, rng, group, {
        minCluster: tinyPocket ? 1 : dense ? 2 : 1,
        maxCluster: tinyPocket ? 2 : dense ? 5 : 3,
        spreadX: 34 + rng() * (dense ? 92 : 58),
        spreadY: 24 + rng() * (dense ? 68 : 42),
        ...scaleProfile,
        priority: rng()
      });
    }
  }

  for (let accent = 0; accent < 28; accent++) {
    const x = field.x + rng() * field.width;
    const y = field.y + rng() * field.height;
    const scaleProfile = getMountainScaleProfile(rng);

    pushMountainCandidate(candidates, { x, y }, 0, 0, 120 + accent, rng, accent, {
      minCluster: 1,
      maxCluster: 4,
      spreadX: 52 + rng() * 96,
      spreadY: 32 + rng() * 72,
      scaleMin: scaleProfile.scaleMin * 0.96,
      scaleMax: scaleProfile.scaleMax * 1.08,
      priority: rng()
    });
  }

  return candidates;
}

function getWhiteSpaceFillCandidates(rng) {
  const candidates = [];
  const field = { x: 44, y: 132, width: 1612, height: 730 };
  const columns = 42;
  const rows = 19;
  const cellWidth = field.width / columns;
  const cellHeight = field.height / rows;

  for (let row = 0; row < rows; row++) {
    const rowShift = (terrainNoise(row, 2, 4) - 0.5) * cellHeight * 0.7;
    const rowDensity = 0.62 + terrainNoise(row, 5, 11) * 0.55;

    for (let col = 0; col < columns; col++) {
      const pocket = terrainNoise(row, col, 21);
      const ridge = terrainNoise(Math.floor(row / 2), Math.floor(col / 3), 38);
      const sparseHole = pocket < 0.11 && ridge < 0.54;
      const densePocket = pocket > 0.74 || ridge > 0.82;
      if (sparseHole && rng() < 0.72) continue;

      const attempts = densePocket
        ? 2 + Math.floor(rng() * 3)
        : 1 + Math.floor(rng() * 2);
      const rowBaseY = field.y +
        (row + 0.5 + Math.cos(row * 1.9 + col * 0.37) * 0.14) * cellHeight +
        rowShift;

      for (let attempt = 0; attempt < attempts; attempt++) {
        const rowWave = Math.sin((col * 0.72 + row * 1.37 + attempt) * 1.7) * 0.34;
        const attemptOffset = (attempt - (attempts - 1) / 2) * cellWidth * (0.28 + terrainNoise(row, col, attempt) * 0.34);
        const x = field.x +
          (col + 0.5 + rowWave + (rng() - 0.5) * 1.72) * cellWidth +
          (row % 2 === 0 ? cellWidth * 0.28 : -cellWidth * 0.2) +
          attemptOffset;
        const y = rowBaseY + (rng() - 0.5) * cellHeight * (densePocket ? 0.42 : 0.3);
        const scaleProfile = getMountainScaleProfile(rng);
        const sizeBias = (densePocket ? 0.86 : 0.74) * rowDensity;

        pushSingleMountainCandidate(candidates, { x, y }, 180 + row, rng, col * attempts + attempt, {
          scaleMin: scaleProfile.scaleMin * sizeBias,
          scaleMax: scaleProfile.scaleMax * (sizeBias + 0.08),
          priority: terrainNoise(row, col, 55) * 0.55 + attempt * 0.06 + rng() * 0.36
        });
      }
    }
  }

  return candidates;
}

function distanceToRiverGuards(point, riverGuards) {
  return riverGuards.reduce((closest, guard) => {
    const distance = Math.hypot(point.x - guard.x, point.y - guard.y) - guard.radius;
    return Math.min(closest, distance);
  }, Infinity);
}

function getMountainBounds(x, y, scale) {
  const width = MOUNTAIN_SIZE.width * scale;
  const height = MOUNTAIN_SIZE.height * scale;

  return {
    x: x - width / 2,
    y: y - height / 2,
    width,
    height
  };
}

function getOpenSpaceScore(point, protectedBoxes, riverGuards) {
  if (point.x < 54 || point.x > MAP_WIDTH - 54 || point.y < 124 || point.y > MAP_HEIGHT - 36) {
    return 0;
  }

  const protectedDistance = protectedBoxes.reduce((closest, box) => {
    return Math.min(closest, distancePointToBox(point, box));
  }, Infinity);
  const riverDistance = distanceToRiverGuards(point, riverGuards);

  if (protectedDistance < 10 || riverDistance < 12) return 0;

  const row = Math.floor(point.y / 58);
  const col = Math.floor(point.x / 62);
  const pocket = terrainNoise(row, col, 73);
  const openness =
    clamp(protectedDistance / 180, 0, 1) * 0.56 +
    clamp(riverDistance / 150, 0, 1) * 0.44;

  return openness + pocket * 0.2;
}

function createMountainClusterCenters(rng, protectedBoxes, riverGuards) {
  const field = { x: 70, y: 132, width: 1560, height: 720 };
  const pool = [];

  for (let i = 0; i < 2200; i++) {
    const point = {
      x: field.x + rng() * field.width,
      y: field.y + rng() * field.height
    };
    const score = getOpenSpaceScore(point, protectedBoxes, riverGuards);

    if (score > 0.34) {
      pool.push({ ...point, score });
    }
  }

  // Randomize sorting slightly so ranges don't just sit dead center of whitespace
  pool.sort((a, b) => (b.score + rng() * 0.25) - (a.score + rng() * 0.25));

  const centers = [];
  pool.forEach(point => {
    if (centers.length >= 42) return;

    const minDistance = 58 + (1 - clamp(point.score, 0, 1)) * 24;
    const tooClose = centers.some(center => Math.hypot(center.x - point.x, center.y - point.y) < minDistance);
    if (!tooClose) centers.push(point);
  });

  return centers;
}

function randomMountainScale(rng, bias = 1) {
  const profile = getMountainScaleProfile(rng);
  return (profile.scaleMin + Math.pow(rng(), 0.72) * (profile.scaleMax - profile.scaleMin)) * bias * 2.0;
}

function tryPlaceMountain(candidate, context) {
  const { protectedBoxes, riverGuards, placedBoxes } = context;
  if (context.maxCount && context.count >= context.maxCount) return false;

  const box = getMountainBounds(candidate.x, candidate.y, candidate.scale);
  const safeBox = expandBox(box, 6 + candidate.scale * 3);
  const spacingBox = expandBox(box, 2 + candidate.scale * 1); // tighter spacing
  
  // Only check if the bottom base (grounding line) of the mountain touches the river stroke
  const baseBox = {
    x: box.x,
    y: box.y + box.height - 5,
    width: box.width,
    height: 10
  };
  const radius = Math.max(box.width, box.height) * 0.43;

  if (box.x < 30 || box.y < 100 || box.x + box.width > MAP_WIDTH - 30 || box.y + box.height > MAP_HEIGHT - 20) {
    return false;
  }

  if (protectedBoxes.some(protectedBox => boxesOverlap(safeBox, protectedBox))) return false;
  if (boxTouchesRiverStroke(baseBox, riverGuards)) return false;
  
  if (placedBoxes.some(placed => {
    const centerDistance = Math.hypot(candidate.x - placed.x, candidate.y - placed.y);
    return boxesOverlap(spacingBox, placed.box) || centerDistance < (radius + placed.radius) * 0.38;
  })) {
    return false;
  }

  placedBoxes.push({ box: spacingBox, x: candidate.x, y: candidate.y, radius });
  context.placedList.push(candidate);
  context.count += 1;

  return true;
}

function pickOpenPoint(rng, protectedBoxes, riverGuards) {
  let best = null;

  for (let i = 0; i < 7; i++) {
    const point = {
      x: 62 + rng() * (MAP_WIDTH - 124),
      y: 130 + rng() * (MAP_HEIGHT - 170)
    };
    const score = getOpenSpaceScore(point, protectedBoxes, riverGuards);

    if (!best || score > best.score) {
      best = { ...point, score };
    }
  }

  return best;
}

function pickRiverSideMountain(rng) {
  const paths = [...document.querySelectorAll('.river.main, .river.sub')];
  if (!paths.length) return null;

  const path = paths[Math.floor(rng() * paths.length)];
  const length = path.getTotalLength();
  const distance = length * (0.14 + rng() * 0.72);
  const point = path.getPointAtLength(distance);
  const before = path.getPointAtLength(Math.max(0, distance - 5));
  const after = path.getPointAtLength(Math.min(length, distance + 5));
  const dx = after.x - before.x;
  const dy = after.y - before.y;
  const tangentLength = Math.hypot(dx, dy) || 1;
  const side = rng() < 0.5 ? -1 : 1;
  const offset = 48 + rng() * 70;

  return {
    x: point.x + (-dy / tangentLength) * offset * side + (rng() - 0.5) * 16,
    y: point.y + (dx / tangentLength) * offset * side + (rng() - 0.5) * 14,
    scale: randomMountainScale(rng, 1.35 + rng() * 0.45),
    rotation: 0
  };
}

function placeMountainsAlongRivers() {
  const mountainLayer = document.querySelector('.mountains');
  const pointLayer = document.querySelector('.river-points');
  if (!mountainLayer || !pointLayer) return;

  mountainLayer.innerHTML = '';
  pointLayer.innerHTML = '';

  const rng = seededRandom(8082028);
  const protectedBoxes = getProtectedBoxes();
  const riverGuards = getRiverStrokeGuards();
  const placedBoxes = [];
  const placedList = [];
  
  const context = { 
    protectedBoxes, 
    riverGuards, 
    placedBoxes, 
    placedList,
    rng, 
    count: 0, 
    maxCount: 650 // Super high density
  };
  
  // Helper to generate mountains framing the river paths
  function generateRiverSideMountains(rng, context) {
    const paths = [...document.querySelectorAll('.river.main, .river.sub')];
    
    paths.forEach((path, pathIndex) => {
      const length = path.getTotalLength();
      if (!Number.isFinite(length) || length <= 0) return;
      
      const stepSize = path.classList.contains('main') ? 48 : 56;
      const steps = Math.floor(length / stepSize);
      const sideStrategy = Math.floor(rng() * 4); // 0: left, 1: right, 2: both, 3: alternating
      
      for (let i = 1; i < steps; i++) {
        const t = i / steps;
        if (rng() < 0.12) continue; // create natural gaps
        
        const distance = t * length;
        const point = path.getPointAtLength(distance);
        
        const before = path.getPointAtLength(Math.max(0, distance - 4));
        const after = path.getPointAtLength(Math.min(length, distance + 4));
        const dx = after.x - before.x;
        const dy = after.y - before.y;
        const tangentLength = Math.hypot(dx, dy) || 1;
        const nx = -dy / tangentLength;
        const ny = dx / tangentLength;
        
        const sides = [];
        if (sideStrategy === 0) sides.push(1);
        else if (sideStrategy === 1) sides.push(-1);
        else if (sideStrategy === 2) { sides.push(1); sides.push(-1); }
        else if (sideStrategy === 3) sides.push((i % 2 === 0) ? 1 : -1);
        
        sides.forEach(side => {
          const baseOffset = path.classList.contains('main') ? 76 : 68;
          const offset = baseOffset + rng() * 32;
          
          const mtnX = point.x + nx * offset * side + (rng() - 0.5) * 12;
          const mtnY = point.y + ny * offset * side + (rng() - 0.5) * 12;
          
          const taper = Math.sin(t * Math.PI);
          const scaleBias = (0.75 + taper * 0.7) * (0.85 + rng() * 0.35);
          
          const candidate = {
            x: mtnX,
            y: mtnY,
            scale: randomMountainScale(rng, scaleBias),
            rotation: 0
          };
          
          tryPlaceMountain(candidate, context);
        });
      }
    });
  }

  // 1. Generate river-framing mountain ranges
  generateRiverSideMountains(rng, context);

  // 3. Generate singles/filler mountains to fill whitespace
  let singles = 0;
  let attempts = 0;
  const singleTarget = 380;

  while (singles < singleTarget && attempts < 3000 && context.count < context.maxCount) {
    attempts += 1;
    const point = pickOpenPoint(rng, protectedBoxes, riverGuards);
    if (!point || point.score < 0.4) continue;

    const scaleBias = 0.85 + point.score * 0.3;
    const placed = tryPlaceMountain({
      x: point.x + (rng() - 0.5) * 25,
      y: point.y + (rng() - 0.5) * 20,
      scale: randomMountainScale(rng, scaleBias),
      rotation: 0
    }, context);

    if (placed) singles += 1;
  }

  // 5. Sort successfully placed mountains by Y coordinate (painter's algorithm)
  placedList.sort((a, b) => a.y - b.y);

  // 6. Render them in sorted order
  placedList.forEach((mtn, index) => {
    const mountain = drawMountain(mtn.x, mtn.y, mtn.scale, mtn.rotation);
    mountain.style.animationDelay = `${3.9 + (index % 25) * 0.05}s`;
    mountainLayer.appendChild(mountain);
  });
}

function formatViewBox(values) {
  return values.map(value => {
    const rounded = Number(value.toFixed(2));
    return Object.is(rounded, -0) ? 0 : rounded;
  }).join(' ');
}

function getViewportAspect() {
  const rect = svgElement.getBoundingClientRect();
  const width = rect.width || window.innerWidth || MAP_WIDTH;
  const height = rect.height || window.innerHeight || MAP_HEIGHT;

  return width / Math.max(height, 1);
}

function fitViewBoxToViewport(cx, cy, baseWidth, baseHeight, clampToMap = false) {
  const viewportAspect = getViewportAspect();
  const baseAspect = baseWidth / baseHeight;
  let w = baseWidth;
  let h = baseHeight;

  if (viewportAspect > baseAspect) {
    w = h * viewportAspect;
  } else {
    h = w / viewportAspect;
  }

  let x = cx - w / 2;
  let y = cy - h / 2;

  if (clampToMap) {
    const minX = getResponsiveMapX(0);
    const maxX = getResponsiveMapX(MAP_WIDTH);
    const mapW = maxX - minX;
    x = w <= mapW ? clamp(x, minX, maxX - w) : minX + (mapW - w) / 2;
    y = h <= MAP_HEIGHT ? clamp(y, 0, MAP_HEIGHT - h) : (MAP_HEIGHT - h) / 2;
  }

  return [x, y, w, h];
}

function getFullViewBox() {
  return fitViewBoxToViewport(MAP_WIDTH / 2, MAP_HEIGHT / 2, MAP_WIDTH, MAP_HEIGHT);
}

function buildTicketPath(centerX, top, bottom, outerWidth, radius) {
  const left = centerX - outerWidth / 2 + radius;
  const right = centerX + outerWidth / 2 - radius;

  return `M ${left.toFixed(1)},${top} L ${right.toFixed(1)},${top} ` +
    `A ${radius},${radius} 0 0,0 ${(right + radius).toFixed(1)},${top + radius} ` +
    `L ${(right + radius).toFixed(1)},${bottom - radius} ` +
    `A ${radius},${radius} 0 0,0 ${right.toFixed(1)},${bottom} ` +
    `L ${left.toFixed(1)},${bottom} ` +
    `A ${radius},${radius} 0 0,0 ${(left - radius).toFixed(1)},${bottom - radius} ` +
    `L ${(left - radius).toFixed(1)},${top + radius} ` +
    `A ${radius},${radius} 0 0,0 ${left.toFixed(1)},${top} Z`;
}

function updateResponsiveTimeline(viewBox = getFullViewBox()) {
  const [viewX, , viewWidth] = viewBox;
  const wideAmount = clamp((viewWidth - MAP_WIDTH) / 520, 0, 1);
  const timelineLines = [...document.querySelectorAll('.timeline-main-line')];
  const timelineLabels = document.querySelectorAll('.timeline .timeline-label');
  const birdImages = [...document.querySelectorAll('.timeline image')];
  const leftBird = birdImages[0];
  const rightBird = birdImages[1];
  const leftLabel = timelineLabels[0];
  const rightLabel = document.querySelector('.timeline .label-right');

  if (leftBird) leftBird.setAttribute('x', '-25');
  if (rightBird && rightBird.parentElement) {
    rightBird.parentElement.setAttribute('transform', 'translate(1725, 34) scale(-1, 1)');
  }

  if (leftLabel) {
    leftLabel.setAttribute('x', '16.5');
  }

  if (rightLabel) {
    rightLabel.setAttribute('x', '1683.5');
    rightLabel.querySelectorAll('tspan').forEach(tspan => {
      tspan.setAttribute('x', '1683.5');
    });
  }

  const ticketConfigs = [
    { era: 'past', fraction: 315 / MAP_WIDTH, top: 45, bottom: 95, radius: 8, baseWidth: 120, extraWidth: 70 },
    { era: 'present', fraction: 850 / MAP_WIDTH, top: 36, bottom: 104, radius: 10, baseWidth: 220, extraWidth: 120 },
    { era: 'future', fraction: 1385 / MAP_WIDTH, top: 45, bottom: 95, radius: 8, baseWidth: 150, extraWidth: 85 }
  ];

  const ticketBounds = {};

  ticketConfigs.forEach(config => {
    const group = document.querySelector(`.time[data-era="${config.era}"]`);
    if (!group) return;

    const centerX = viewX + viewWidth * config.fraction;
    const width = config.baseWidth + config.extraWidth * wideAmount;
    ticketBounds[config.era] = {
      left: centerX - width / 2,
      right: centerX + width / 2
    };

    const path = group.querySelector('.ticket-bg');
    const text = group.querySelector('text');

    if (path) {
      path.setAttribute('d', buildTicketPath(centerX, config.top, config.bottom, width, config.radius));
    }

    if (text) {
      text.setAttribute('x', centerX.toFixed(1));
    }
  });

  const lineOverlap = 5;
  const lineSegments = ticketBounds.past && ticketBounds.present && ticketBounds.future
    ? [
      [33, ticketBounds.past.left + lineOverlap],
      [ticketBounds.past.right - lineOverlap, ticketBounds.present.left + lineOverlap],
      [ticketBounds.present.right - lineOverlap, ticketBounds.future.left + lineOverlap],
      [ticketBounds.future.right - lineOverlap, 1667]
    ]
    : [
      [33, 260],
      [370, 745],
      [955, 1315],
      [1455, 1667]
    ];

  timelineLines.forEach((line, index) => {
    const segment = lineSegments[index];

    if (!segment || segment[1] <= segment[0]) {
      line.style.display = 'none';
      return;
    }

    line.style.display = '';
    line.setAttribute('x1', segment[0].toFixed(1));
    line.setAttribute('x2', segment[1].toFixed(1));
  });
}

function getWideMapScale(viewBox = getFullViewBox()) {
  const [, , viewWidth] = viewBox;
  const wideAmount = clamp((viewWidth - MAP_WIDTH) / 520, 0, 1);

  return 1 + wideAmount * 0.18;
}

function getResponsiveMapX(x, scale = currentWideMapScale) {
  return MAP_CENTER_X + (x - MAP_CENTER_X) * scale;
}

function getResponsiveMapPoint(cx, cy) {
  return {
    cx: getResponsiveMapX(cx),
    cy
  };
}

function getBaseAttrValue(element, attr) {
  const key = `base${attr.charAt(0).toUpperCase()}${attr.slice(1)}`;

  if (!element.dataset[key]) {
    element.dataset[key] = element.getAttribute(attr) || '0';
  }

  return parseFloat(element.dataset[key]) || 0;
}

function setResponsiveXAttr(element, attr, scale) {
  const baseX = getBaseAttrValue(element, attr);
  element.setAttribute(attr, getResponsiveMapX(baseX, scale).toFixed(1));
}

function updateResponsiveMapStretch(viewBox = getFullViewBox()) {
  const scale = getWideMapScale(viewBox);
  currentWideMapScale = scale;
  const scaleTransform = scale > 1.001
    ? `translate(${MAP_CENTER_X}, 0) scale(${scale.toFixed(4)}, 1) translate(${-MAP_CENTER_X}, 0)`
    : '';

  document.querySelectorAll('.rivers, .river-points').forEach(group => {
    group.setAttribute('transform', scaleTransform);
  });

  document.querySelectorAll('.endpoints circle').forEach(circle => {
    setResponsiveXAttr(circle, 'cx', scale);
  });

  document.querySelectorAll('.node').forEach(node => {
    node.querySelectorAll('circle[cx]').forEach(circle => {
      setResponsiveXAttr(circle, 'cx', scale);
    });

    node.querySelectorAll('text[x]').forEach(text => {
      setResponsiveXAttr(text, 'x', scale);
    });
  });

  document.querySelectorAll('.topic text[x], .topic tspan[x]').forEach(textElement => {
    setResponsiveXAttr(textElement, 'x', scale);
  });

  document.querySelectorAll('.mountain').forEach(mountain => {
    if (!mountain.dataset.baseTransform) {
      const baseTransform = mountain.getAttribute('transform') || '';
      const match = baseTransform.match(/translate\(\s*(-?\d+(?:\.\d+)?)/);
      mountain.dataset.baseTransform = baseTransform;
      mountain.dataset.baseX = match ? match[1] : `${MAP_CENTER_X}`;
    }

    const baseX = parseFloat(mountain.dataset.baseX) || MAP_CENTER_X;
    const dx = getResponsiveMapX(baseX, scale) - baseX;
    const prefix = Math.abs(dx) > 0.1 ? `translate(${dx.toFixed(1)}, 0) ` : '';
    mountain.setAttribute('transform', `${prefix}${mountain.dataset.baseTransform}`);
  });

  document.querySelectorAll('.lake-mountain').forEach(mountain => {
    if (!mountain.dataset.baseX) {
      mountain.dataset.baseX = mountain.getAttribute('x') || '0';
    }
    const baseX = parseFloat(mountain.dataset.baseX) || 0;
    const dx = getResponsiveMapX(baseX, scale) - baseX;
    mountain.setAttribute('x', (baseX + dx).toFixed(1));
  });
}

function isDefaultMapView(x, y, w, h) {
  if (isMobileView()) {
    const home = getMobileInitialViewBox();
    return Math.abs(x - home[0]) < 1 &&
      Math.abs(y - home[1]) < 1 &&
      Math.abs(w - home[2]) < 1 &&
      Math.abs(h - home[3]) < 1;
  }
  return Math.abs(x) < 0.01 &&
    Math.abs(y) < 0.01 &&
    Math.abs(w - MAP_WIDTH) < 0.01 &&
    Math.abs(h - MAP_HEIGHT) < 0.01;
}

function updateViewBox() {
  let dx = targetViewBox[0] - currentViewBox[0];
  let dy = targetViewBox[1] - currentViewBox[1];
  let dw = targetViewBox[2] - currentViewBox[2];
  let dh = targetViewBox[3] - currentViewBox[3];

  if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && Math.abs(dw) < 0.1 && Math.abs(dh) < 0.1) {
    currentViewBox = [...targetViewBox];
    svgElement.setAttribute('viewBox', formatViewBox(currentViewBox));
    isAnimating = false;
    return;
  }

  currentViewBox[0] += dx * easeFactor;
  currentViewBox[1] += dy * easeFactor;
  currentViewBox[2] += dw * easeFactor;
  currentViewBox[3] += dh * easeFactor;

  svgElement.setAttribute('viewBox', formatViewBox(currentViewBox));
  requestAnimationFrame(updateViewBox);
}

function panTo(x, y, w, h) {
  if (isDefaultMapView(x, y, w, h)) {
    activeCameraCenter = null;
    targetViewBox = getHomeViewBox();
  } else {
    targetViewBox = [x, y, w, h];
  }

  if (!isAnimating) {
    isAnimating = true;
    requestAnimationFrame(updateViewBox);
  }
}

function panToPoint(cx, cy) {
  const [x, y, w, h] = getTargetViewBox(cx, cy);
  panTo(x, y, w, h);
  activeCameraCenter = { cx, cy };
}

function getTargetViewBox(cx, cy) {
  const point = getResponsiveMapPoint(cx, cy);
  return fitViewBoxToViewport(point.cx, point.cy, ZOOM_WIDTH, ZOOM_HEIGHT, true);
}

function refreshViewBoxForViewport() {
  const fullViewBox = getFullViewBox();

  updateResponsiveTimeline(fullViewBox);
  updateResponsiveMapStretch(fullViewBox);

  if (activeCameraCenter) {
    targetViewBox = getTargetViewBox(activeCameraCenter.cx, activeCameraCenter.cy);
  } else if (isMobileView()) {
    // On mobile, maintain current pan position but adjust aspect ratio and respect clamp limits
    const aspect = getViewportAspect();
    const w = currentViewBox[2];
    const h = w / aspect;
    const x = currentViewBox[0];
    const y = currentViewBox[1];
    
    if (window.clampViewBox) {
      targetViewBox = window.clampViewBox([x, y, w, h]);
    } else {
      const clampedX = Math.max(0, Math.min(x, MAP_WIDTH - w));
      const clampedY = Math.max(0, Math.min(y, MAP_HEIGHT - h));
      targetViewBox = [clampedX, clampedY, w, h];
    }
  } else {
    targetViewBox = fullViewBox;
  }

  currentViewBox = [...targetViewBox];
  svgElement.setAttribute('viewBox', formatViewBox(currentViewBox));
  isAnimating = false;
}

function formatCardTitle(title) {
  let mainText = '';
  let subText = '';
  
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('taiwan')) {
    mainText = 'Vinabiennale';
    subText = '@Taiwan National Theatre';
  } else if (titleLower.includes('first collection')) {
    mainText = 'Vinabiennale';
    subText = 'First collection';
  } else if (titleLower.startsWith('open source')) {
    mainText = 'Open source';
    subText = 'Vina design of Vietnam';
  } else {
    mainText = title;
    subText = '';
  }
  
  const subHtml = subText ? `<div class="card-title-sub">${subText}</div>` : '';
  
  return `
    <div class="card-title-main-wrap">
      <div class="card-title-main">${mainText}</div>
      <div class="card-title-main-script">${mainText}</div>
    </div>
    ${subHtml}
  `;
}

let currentParentBranchId = null;
let currentTopicId = null;
let currentSlideshowImages = [];
let currentSlideshowIndex = 0;

function alignTextOverlay(baseEl, scriptEl) {
  if (!baseEl || !scriptEl) return;
  
  const isTopicDetail = scriptEl.classList.contains('topic-detail-title-script');
  
  // Reset styles first
  if (isTopicDetail) {
    scriptEl.style.top = '1px';
    scriptEl.style.transform = 'scaleX(1)';
  } else {
    scriptEl.style.top = '';
    scriptEl.style.transform = 'translateY(-50%) translateY(1px) scaleX(1)';
  }
  scriptEl.style.transformOrigin = 'left center';
  
  // Detect multi-line wrapping
  const isMultiLine = baseEl.getBoundingClientRect().height > 32;
  if (isMultiLine) {
    scriptEl.style.top = '1px';
    scriptEl.style.transform = 'none';
    return;
  }
  
  const baseWidth = baseEl.getBoundingClientRect().width;
  const scriptWidth = scriptEl.getBoundingClientRect().width;
  
  if (baseWidth > 0 && scriptWidth > 0) {
    const ratio = baseWidth / scriptWidth;
    if (isTopicDetail) {
      scriptEl.style.transform = `scaleX(${ratio})`;
    } else {
      scriptEl.style.transform = `translateY(-50%) translateY(1px) scaleX(${ratio})`;
    }
  }
}

function alignTopicDetailTitle() {
  requestAnimationFrame(() => {
    // 1. Align topic detail title in left column
    const topicWrap = document.getElementById('modalTopicContent').querySelector('.topic-detail-title-wrap');
    if (topicWrap) {
      alignTextOverlay(
        topicWrap.querySelector('.topic-detail-title'),
        topicWrap.querySelector('.topic-detail-title-script')
      );
    }
    
    // 2. Align breadcrumb header elements
    const homeWrap = document.getElementById('modalHomeBtn');
    if (homeWrap) {
      alignTextOverlay(
        homeWrap.querySelector('.modal-home-title'),
        homeWrap.querySelector('.modal-home-title-script')
      );
    }
    
    const branchWrap = document.getElementById('modalBranchLink');
    if (branchWrap) {
      alignTextOverlay(
        branchWrap.querySelector('.modal-branch-title'),
        branchWrap.querySelector('.modal-branch-title-script')
      );
    }
    
    const titleWrap = document.querySelector('.modal-header-left .modal-title-wrap');
    if (titleWrap) {
      alignTextOverlay(
        titleWrap.querySelector('.modal-title'),
        titleWrap.querySelector('.modal-title-script')
      );
    }
  });
}

function renderSlideshowPlaceholder(topicId, index) {
  const data = topicData[topicId];
  if (!data || !data.images || data.images.length === 0) return;
  const placeholderNum = index + 1;
  const container = document.getElementById('slideshowImageWrap');
  if (!container) return;
  
  container.innerHTML = `
    <svg viewBox="0 0 400 250" width="100%" height="100%" style="display: block; background: linear-gradient(135deg, #fbfaf5 0%, #f1ebe1 100%);">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(33, 50, 246, 0.03)" stroke-width="1.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      <!-- Central mountain vector -->
      <g transform="translate(200, 110) scale(2.2)">
        <polygon points="-20,20 0,-15 20,20" fill="var(--blue)" opacity="0.12" />
        <polygon points="-5,20 15,-5 35,20" fill="var(--blue)" opacity="0.08" />
        <line x1="-30" y1="20" x2="45" y2="20" stroke="var(--blue)" stroke-width="1.5" opacity="0.18" />
      </g>
      
      <!-- Styled label -->
      <rect x="100" y="155" width="200" height="30" fill="#fff" stroke="var(--blue)" stroke-width="2" />
      <text x="200" y="174" text-anchor="middle" font-family="'UTM Cooper Black', 'Cooper Black', serif" font-weight="bold" font-size="11" fill="var(--blue)">
        WORK PREVIEW #${placeholderNum}
      </text>
      
      <text x="200" y="212" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666" opacity="0.75">
        ${data.title}
      </text>
    </svg>
  `;
}

function updateSlideshow(topicId, index) {
  const data = topicData[topicId];
  if (!data || !data.images || data.images.length === 0) return;
  
  currentSlideshowIndex = index;
  renderSlideshowPlaceholder(topicId, index);
  
  const captionEl = document.getElementById('slideshowCaption');
  if (captionEl) {
    const slide = data.images[index];
    captionEl.innerHTML = `
      <div style="font-size: 13px; line-height: 1.45;">${slide.captionEn}</div>
    `;
  }
}

function openPanel(num, title, bodyEn, bodyVie, connectedTopics, isTopic = false, topicId = null, shouldOpen = true) {
  if (isTopic) {
    panel.classList.add('is-topic-view');
    panel.classList.remove('is-branch-view');
  } else {
    panel.classList.add('is-branch-view');
    panel.classList.remove('is-topic-view');
  }

  // Update circle and title
  modalNumCircle.textContent = num;
  
  // Header titles should be single-line (strip <br>)
  const cleanTitle = title.replace(/<br\s*\/?>/gi, ' ');
  modalTitle.innerHTML = cleanTitle;
  if (modalTitleScript) {
    modalTitleScript.innerHTML = cleanTitle;
  }

  // Clear container
  modalCardsContainer.innerHTML = '';
  modalCardsContainer.scrollLeft = 0;

  // Header Link elements
  const branchLink = document.getElementById('modalBranchLink');
  const secondSeparator = document.getElementById('modalSecondSeparator');
  const branchTitleEl = document.getElementById('modalBranchTitle');
  
  // Content containers
  const branchContent = document.getElementById('modalBranchContent');
  const topicContent = document.getElementById('modalTopicContent');

  if (isTopic) {
    // Topic view
    currentTopicId = topicId;
    
    // Toggle containers
    branchContent.style.display = 'none';
    topicContent.style.display = 'flex';
    
    // Toggle header breadcrumbs
    branchLink.style.display = 'inline-flex';
    secondSeparator.style.display = 'inline-flex';
    
    // Determine parent branch and title
    const subRiver = document.querySelector(`path.sub[data-topic="${topicId}"]`);
    currentParentBranchId = subRiver ? subRiver.dataset.branch : null;
    
    const branchTitleScriptEl = document.getElementById('modalBranchTitleScript');
    if (currentParentBranchId) {
      const parentData = branchData[currentParentBranchId];
      if (parentData) {
        branchTitleEl.textContent = parentData.title;
        if (branchTitleScriptEl) {
          branchTitleScriptEl.textContent = parentData.title;
        }
      }
    } else {
      branchTitleEl.textContent = 'Trunk';
      if (branchTitleScriptEl) {
        branchTitleScriptEl.textContent = 'Trunk';
      }
    }
    
    // Wire up parent branch click
    branchLink.onclick = (e) => {
      e.preventDefault();
      if (currentParentBranchId) {
        selectNode(currentParentBranchId);
      } else {
        closePanel();
      }
    };
    
    // Update left column content
    const detailTitle = document.getElementById('topicDetailTitle');
    const detailTitleScript = document.getElementById('topicDetailTitleScript');
    const topicBodyEn = document.getElementById('topicBodyEn');
    const topicBodyVie = document.getElementById('topicBodyVie');
    
    if (detailTitle) detailTitle.innerHTML = title;
    if (detailTitleScript) detailTitleScript.innerHTML = title;
    if (topicBodyEn) topicBodyEn.textContent = bodyEn;
    if (topicBodyVie) topicBodyVie.textContent = bodyVie;
    
    // Initialize image slideshow
    const data = topicData[topicId];
    if (data && data.images && data.images.length > 0) {
      currentSlideshowImages = data.images;
      updateSlideshow(topicId, 0);
    }
    
    // Dynamically align script text on left column title
    alignTopicDetailTitle();
    
  } else {
    // Branch view
    currentTopicId = null;
    currentSlideshowImages = [];
    currentParentBranchId = null;
    
    // Toggle containers
    topicContent.style.display = 'none';
    branchContent.style.display = 'block';
    
    // Toggle header breadcrumbs
    branchLink.style.display = 'none';
    secondSeparator.style.display = 'none';
    
    // Update branch description texts
    modalBodyEn.textContent = bodyEn;
    modalBodyVie.textContent = bodyVie;
  }

  // Populate bottom slider cards (shared for both views!)
  if (connectedTopics && connectedTopics.length > 0) {
    modalSliderWrap.style.display = 'flex';

    const hasPagedWorks = connectedTopics.length > 2;
    setSliderButtonState(prevBtn, false, hasPagedWorks);
    setSliderButtonState(nextBtn, hasPagedWorks, hasPagedWorks);

    if (hasPagedWorks) {
      modalCardsContainer.style.justifyContent = 'flex-start';
    } else {
      modalCardsContainer.style.justifyContent = 'center';
    }

    connectedTopics.forEach(id => {
      const data = topicData[id];
      if (data) {
        const card = document.createElement('div');
        card.className = 'topic-card';
        
        let bgClass = 'red-bg';
        if (data.era.includes('Present')) {
          bgClass = 'yellow-bg';
        } else if (data.era.includes('Future')) {
          bgClass = 'blue-bg';
        }
        
        const imageHtml = data.image 
          ? `<img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;" />`
          : `
            <svg viewBox="0 0 100 50" width="60" height="30" style="opacity: 0.25;">
              <polygon points="20,50 50,10 80,50" fill="#2132f6" />
              <polygon points="45,50 65,25 85,50" fill="#2132f6" opacity="0.7" />
            </svg>
          `;
        
        card.innerHTML = `
          <div class="card-header ${bgClass}">${formatCardTitle(data.title)}</div>
          <div class="card-image-placeholder">
            ${imageHtml}
          </div>
        `;
        
        card.addEventListener('click', () => {
          selectTopic(id);
        });
        modalCardsContainer.appendChild(card);
      }
    });

    requestAnimationFrame(updateSliderButtons);
  } else {
    modalSliderWrap.style.display = 'none';
    setSliderButtonState(prevBtn, false, false);
    setSliderButtonState(nextBtn, false, false);
  }

  // Open overlay and panel
  if (shouldOpen) {
    panel.classList.add('open');
    overlay.classList.add('open');
  }
  
  // Align script overlays to base text widths dynamically
  alignCardTitles();
  alignTopicDetailTitle();
}

function alignCardTitles() {
  requestAnimationFrame(() => {
    const wraps = modalCardsContainer.querySelectorAll('.card-title-main-wrap');
    wraps.forEach(wrap => {
      const base = wrap.querySelector('.card-title-main');
      const script = wrap.querySelector('.card-title-main-script');
      if (base && script) {
        // Reset scale first to measure natural sizes
        script.style.transform = 'translateY(-50%) translateY(1px) scaleX(1)';
        script.style.transformOrigin = 'left center';
        
        const baseWidth = base.getBoundingClientRect().width;
        const scriptWidth = script.getBoundingClientRect().width;
        
        if (baseWidth > 0 && scriptWidth > 0) {
          const ratio = baseWidth / scriptWidth;
          // Apply scaleX to match base width exactly
          script.style.transform = `translateY(-50%) translateY(1px) scaleX(${ratio})`;
        }
      }
    });
  });
}

function clearActive() {
  document.getElementById('riverMap').classList.remove('has-focus');
  
  nodes.forEach(n => {
    n.classList.remove('is-active', 'is-connected');
  });

  topics.forEach(t => {
    t.classList.remove('is-active', 'is-connected', 'is-faded');
  });

  document.querySelectorAll('.endpoints circle').forEach(c => {
    c.classList.remove('is-active', 'is-connected', 'is-faded');
  });

  document.querySelectorAll('.river').forEach(r => {
    r.classList.remove('is-active', 'is-connected');
  });

  syncRiverDisplayStates();
}

function highlightTopicOnMap(topicId) {
  const mapEl = document.getElementById('riverMap');
  mapEl.classList.add('has-focus');

  // Highlight topic group
  const topicEl = document.querySelector(`.topic[data-topic="${topicId}"]`);
  if (topicEl) topicEl.classList.add('is-active');

  // Highlight endpoint circle
  const circleEl = document.querySelector(`circle[data-topic="${topicId}"]`);
  if (circleEl) circleEl.classList.add('is-active');

  // Highlight sub river path
  const subRiver = document.querySelector(`path.sub[data-topic="${topicId}"]`);
  if (subRiver) {
    subRiver.classList.add('is-connected');
    const parentBranchId = subRiver.dataset.branch;

    // Highlight main branch river path
    const mainRiver = document.querySelector(`path.main[data-branch="${parentBranchId}"]`);
    if (mainRiver) mainRiver.classList.add('is-connected');

    // Highlight branch node
    const nodeEl = document.querySelector(`.node[data-branch="${parentBranchId}"]`);
    if (nodeEl) nodeEl.classList.add('is-connected');
  }

  // Highlight connectors and connected topics
  const connectors = document.querySelectorAll(`path.connector[data-from="${topicId}"], path.connector[data-to="${topicId}"]`);
  connectors.forEach(c => {
    c.classList.add('is-connected');
    const otherTopicId = (c.dataset.from === topicId) ? c.dataset.to : c.dataset.from;
    const otherTopicEl = document.querySelector(`.topic[data-topic="${otherTopicId}"]`);
    if (otherTopicEl) otherTopicEl.classList.add('is-connected');
    const otherCircleEl = document.querySelector(`circle[data-topic="${otherTopicId}"]`);
    if (otherCircleEl) otherCircleEl.classList.add('is-connected');
    
    // Highlight other topic's sub & main rivers
    const otherSub = document.querySelector(`path.sub[data-topic="${otherTopicId}"]`);
    if (otherSub) {
      otherSub.classList.add('is-connected');
      const otherBranchId = otherSub.dataset.branch;
      const otherMain = document.querySelector(`path.main[data-branch="${otherBranchId}"]`);
      if (otherMain) otherMain.classList.add('is-connected');
      const otherNode = document.querySelector(`.node[data-branch="${otherBranchId}"]`);
      if (otherNode) otherNode.classList.add('is-connected');
    }
  });

  syncRiverDisplayStates();
}

function highlightNodeOnMap(branchId) {
  const mapEl = document.getElementById('riverMap');
  mapEl.classList.add('has-focus');

  // Highlight branch node
  const nodeEl = document.querySelector(`.node[data-branch="${branchId}"]`);
  if (nodeEl) nodeEl.classList.add('is-active');

  // Highlight main river path
  const mainRiver = document.querySelector(`path.main[data-branch="${branchId}"]`);
  if (mainRiver) mainRiver.classList.add('is-connected');

  // Highlight all its sub rivers and their topics
  const subRivers = document.querySelectorAll(`path.sub[data-branch="${branchId}"]`);
  subRivers.forEach(sub => {
    sub.classList.add('is-connected');
    const topicId = sub.dataset.topic;
    if (topicId) {
      const topicEl = document.querySelector(`.topic[data-topic="${topicId}"]`);
      if (topicEl) topicEl.classList.add('is-connected');
      const circleEl = document.querySelector(`circle[data-topic="${topicId}"]`);
      if (circleEl) circleEl.classList.add('is-connected');
    }
  });

  syncRiverDisplayStates();
}

let isTransitioning = false;

function selectTopic(topicId) {
  if (isTransitioning) return;

  const isPanelOpen = panel.classList.contains('open');

  if (isPanelOpen) {
    isTransitioning = true;
    
    // 1. Fade out overlay and panel
    panel.classList.remove('open');
    overlay.classList.remove('open');
    
    // 2. Wait for fade out to complete (~250ms)
    setTimeout(() => {
      // 3. Highlight topic group and paths on map
      clearActive();
      highlightTopicOnMap(topicId);

      // 4. Zoom/pan camera to target topic center
      const center = centers[topicId];
      if (center) {
        panToPoint(center.cx, center.cy);
      }

      // 5. Open/update panel silently (shouldOpen = false)
      const data = topicData[topicId];
      if (data) {
        const subRiver = document.querySelector(`path.sub[data-topic="${topicId}"]`);
        const parentBranchId = subRiver ? subRiver.dataset.branch : null;
        const connIds = topicConnections[topicId] || [];
        openPanel(parentBranchId || 'T', data.title, data.bodyEn, data.bodyVie, connIds, true, topicId, false);
      }

      // 6. Wait for camera pan to get close to the destination (~450ms)
      setTimeout(() => {
        // 7. Fade in overlay and panel
        panel.classList.add('open');
        overlay.classList.add('open');
        
        // Re-align layouts dynamically after display transitions
        alignCardTitles();
        alignTopicDetailTitle();

        isTransitioning = false;
      }, 450);

    }, 250);

  } else {
    // Standard instant opening sequence when panel is closed
    clearActive();
    highlightTopicOnMap(topicId);

    const data = topicData[topicId];
    if (data) {
      const subRiver = document.querySelector(`path.sub[data-topic="${topicId}"]`);
      const parentBranchId = subRiver ? subRiver.dataset.branch : null;
      const connIds = topicConnections[topicId] || [];
      openPanel(parentBranchId || 'T', data.title, data.bodyEn, data.bodyVie, connIds, true, topicId, true);
    }

    const center = centers[topicId];
    if (center) {
      panToPoint(center.cx, center.cy);
    }
  }
}

function selectNode(branchId) {
  if (isTransitioning) return;

  const isPanelOpen = panel.classList.contains('open');

  if (isPanelOpen) {
    isTransitioning = true;
    
    // 1. Fade out overlay and panel
    panel.classList.remove('open');
    overlay.classList.remove('open');
    
    // 2. Wait for fade out to complete (~250ms)
    setTimeout(() => {
      // 3. Highlight node and paths on map
      clearActive();
      highlightNodeOnMap(branchId);

      // 4. Zoom/pan camera to target branch node center
      const center = centers[`node-${branchId}`];
      if (center) {
        panToPoint(center.cx, center.cy);
      }

      // 5. Open/update panel silently (shouldOpen = false)
      const data = branchData[branchId];
      if (data) {
        const subRivers = document.querySelectorAll(`path.sub[data-branch="${branchId}"]`);
        const topicIds = [];
        subRivers.forEach(sub => {
          const topicId = sub.dataset.topic;
          if (topicId) topicIds.push(topicId);
        });
        openPanel(branchId, data.title, data.bodyEn, data.bodyVie, topicIds, false, null, false);
      }

      // 6. Wait for camera pan to get close to the destination (~450ms)
      setTimeout(() => {
        // 7. Fade in overlay and panel
        panel.classList.add('open');
        overlay.classList.add('open');
        
        // Re-align layouts dynamically after display transitions
        alignCardTitles();
        alignTopicDetailTitle();

        isTransitioning = false;
      }, 450);

    }, 250);

  } else {
    // Standard instant opening sequence when panel is closed
    clearActive();
    highlightNodeOnMap(branchId);

    const data = branchData[branchId];
    if (data) {
      const subRivers = document.querySelectorAll(`path.sub[data-branch="${branchId}"]`);
      const topicIds = [];
      subRivers.forEach(sub => {
        const topicId = sub.dataset.topic;
        if (topicId) topicIds.push(topicId);
      });
      openPanel(branchId, data.title, data.bodyEn, data.bodyVie, topicIds, false, null, true);
    }

    const center = centers[`node-${branchId}`];
    if (center) {
      panToPoint(center.cx, center.cy);
    }
  }
}

function handleKeyboard(el, callback) {
  el.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  });
}

// Node clicks
nodes.forEach(node => {
  const action = () => {
    selectNode(node.dataset.branch);
  };
  node.addEventListener('click', action);
  handleKeyboard(node, action);
});

// Topic clicks
topics.forEach(topic => {
  const action = () => {
    selectTopic(topic.dataset.topic);
  };
  topic.addEventListener('click', action);
  handleKeyboard(topic, action);
});

// Timeline era filter
timeButtons.forEach(button => {
  const action = () => {
    timeButtons.forEach(b => b.classList.remove('is-active'));
    button.classList.add('is-active');
    
    clearActive();
    const era = button.dataset.era;
    
    topics.forEach(topic => {
      if (!topic.classList.contains(era)) {
        topic.classList.add('is-faded');
        const topicId = topic.dataset.topic;
        const circleEl = document.querySelector(`circle[data-topic="${topicId}"]`);
        if (circleEl) circleEl.classList.add('is-faded');
      }
    });
    
    panel.classList.remove('open');
    overlay.classList.remove('open');
    panel.classList.remove('is-topic-view');
    panel.classList.remove('is-branch-view');
    void (
      'F',
      `${era.toUpperCase()}`,
      `Filtering map by ${era} era. Click on any branch or topic to view details.`,
      `Đang highlight nhóm ${era}. Click chủ đề hoặc số nhánh để xem chi tiết.`,
      [],
      false
    );
    { const hv = getHomeViewBox(); panTo(hv[0], hv[1], hv[2], hv[3]); }
  };
  button.addEventListener('click', action);
  handleKeyboard(button, action);
});

// Modal interactions
function closePanel() {
  panel.classList.remove('open');
  overlay.classList.remove('open');
  panel.classList.remove('is-topic-view');
  panel.classList.remove('is-branch-view');
  clearActive();
  const hv = getHomeViewBox();
  panTo(hv[0], hv[1], hv[2], hv[3]);
}

modalCloseBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

const modalHomeBtn = document.getElementById('modalHomeBtn');
if (modalHomeBtn) {
  modalHomeBtn.addEventListener('click', closePanel);
}

if (modalBackBtn) {
  modalBackBtn.addEventListener('click', () => {
    if (currentParentBranchId) {
      selectNode(currentParentBranchId);
    }
  });
}

// ─── Interactive Slideshow and Lightbox Listeners ───
const slideshowPrevBtn = document.getElementById('slideshowPrevBtn');
const slideshowNextBtn = document.getElementById('slideshowNextBtn');
const slideshowEnlargeBtn = document.getElementById('slideshowEnlargeBtn');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const lightboxImageWrap = document.getElementById('lightboxImageWrap');

if (slideshowPrevBtn) {
  slideshowPrevBtn.addEventListener('click', () => {
    if (currentSlideshowImages.length > 0) {
      let nextIndex = currentSlideshowIndex - 1;
      if (nextIndex < 0) nextIndex = currentSlideshowImages.length - 1;
      updateSlideshow(currentTopicId, nextIndex);
    }
  });
}

if (slideshowNextBtn) {
  slideshowNextBtn.addEventListener('click', () => {
    if (currentSlideshowImages.length > 0) {
      let nextIndex = (currentSlideshowIndex + 1) % currentSlideshowImages.length;
      updateSlideshow(currentTopicId, nextIndex);
    }
  });
}

if (slideshowEnlargeBtn && lightboxOverlay && lightboxImageWrap) {
  slideshowEnlargeBtn.addEventListener('click', () => {
    const wrap = document.getElementById('slideshowImageWrap');
    if (wrap) {
      lightboxImageWrap.innerHTML = wrap.innerHTML;
      lightboxOverlay.classList.add('open');
    }
  });
}

if (lightboxCloseBtn && lightboxOverlay) {
  lightboxCloseBtn.addEventListener('click', () => {
    lightboxOverlay.classList.remove('open');
  });
}

if (lightboxOverlay) {
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('open');
    }
  });
}

function setSliderButtonState(button, isVisible, reserveSpace = false) {
  button.style.display = reserveSpace || isVisible ? 'flex' : 'none';
  button.style.visibility = isVisible ? 'visible' : 'hidden';
  button.style.pointerEvents = isVisible ? 'auto' : 'none';
}

function getRelatedWorkPagePositions() {
  const cards = [...modalCardsContainer.querySelectorAll('.topic-card')];
  const maxScroll = Math.max(0, modalCardsContainer.scrollWidth - modalCardsContainer.clientWidth);

  if (cards.length <= 2 || maxScroll <= 1) return [0];

  const cardWidth = cards[0].getBoundingClientRect().width;
  const styles = window.getComputedStyle(modalCardsContainer);
  const gap = parseFloat(styles.columnGap || styles.gap) || 0;
  const pairStep = (cardWidth + gap) * 2;
  const positions = [0];

  for (let position = pairStep; position < maxScroll - 1; position += pairStep) {
    positions.push(position);
  }

  if (positions[positions.length - 1] < maxScroll - 1) {
    positions.push(maxScroll);
  }

  return positions;
}

function getNearestRelatedWorkPageIndex(positions) {
  return positions.reduce((nearestIndex, position, index) => {
    const nearestDistance = Math.abs(modalCardsContainer.scrollLeft - positions[nearestIndex]);
    const distance = Math.abs(modalCardsContainer.scrollLeft - position);
    return distance < nearestDistance ? index : nearestIndex;
  }, 0);
}

function scrollRelatedWorksByPage(direction) {
  const positions = getRelatedWorkPagePositions();
  const currentIndex = getNearestRelatedWorkPageIndex(positions);
  const nextIndex = clamp(currentIndex + direction, 0, positions.length - 1);

  modalCardsContainer.scrollTo({ left: positions[nextIndex], behavior: 'smooth' });
}

prevBtn.addEventListener('click', () => {
  scrollRelatedWorksByPage(-1);
});

nextBtn.addEventListener('click', () => {
  scrollRelatedWorksByPage(1);
});

function updateSliderButtons() {
  const cardsCount = modalCardsContainer.childElementCount;

  if (cardsCount <= 2) {
    setSliderButtonState(prevBtn, false, false);
    setSliderButtonState(nextBtn, false, false);
    return;
  }

  const positions = getRelatedWorkPagePositions();
  const currentIndex = getNearestRelatedWorkPageIndex(positions);

  setSliderButtonState(prevBtn, currentIndex > 0, true);
  setSliderButtonState(nextBtn, currentIndex < positions.length - 1, true);
}

modalCardsContainer.addEventListener('scroll', updateSliderButtons);

// Trigger river flow animation on load
document.addEventListener('DOMContentLoaded', () => {
  // organicizeRiverPaths(); // Disabled to keep river paths smooth, not hand-drawn
  // applyRiverStrokeVariation(); // Disabled so CSS controls uniform stroke-widths
  // buildRiverDisplayLayers(); // Disabled since we style .river directly
  // placeMountainsAlongRivers();
  updateResponsiveMapStretch(getFullViewBox());

  const animatedRiverParts = document.querySelectorAll('.river, .ribbon-clip-stroke');
  animatedRiverParts.forEach(river => {
    const length = river.getTotalLength();
    river.style.setProperty('--length', length + 'px');
  });

  // 1. Trigger main river flow after lake starts appearing (1.2s)
  setTimeout(() => {
    setRiverFlow('.river.main');
  }, 1200);

  // 2. Trigger child branches after the five trunks are established.
  setTimeout(() => {
    setRiverFlow('.river.sub');
  }, 3100);

  // 3. Topic-to-topic links appear last.
  setTimeout(() => {
    setRiverFlow('.river.connector');
  }, 4700);

  // 4. Stagger mountain sprouting after the connection structure is readable. (Disabled for custom mountains)
  // document.querySelectorAll('.mountain').forEach((mtn, index) => {
  //   const stagger = (index % 12) * 0.08;
  //   mtn.style.animationDelay = `${5.5 + stagger}s`;
  // });

  // 5. Synchronize hover states between topics and their map endpoint circles
  document.querySelectorAll('.topic').forEach(topic => {
    const topicId = topic.dataset.topic;
    if (!topicId) return;
    const circleEl = document.querySelector(`.endpoints circle[data-topic="${topicId}"]`);
    if (!circleEl) return;
    
    topic.addEventListener('mouseenter', () => {
      circleEl.classList.add('is-hovered');
      topic.classList.add('is-hovered');
    });
    topic.addEventListener('mouseleave', () => {
      circleEl.classList.remove('is-hovered');
      topic.classList.remove('is-hovered');
    });
  });

  document.querySelectorAll('.endpoints circle').forEach(circle => {
    const topicId = circle.dataset.topic;
    if (!topicId) return;
    const topicEl = document.querySelector(`.topic[data-topic="${topicId}"]`);
    if (!topicEl) return;
    
    circle.addEventListener('mouseenter', () => {
      topicEl.classList.add('is-hovered');
      circle.classList.add('is-hovered');
    });
    circle.addEventListener('mouseleave', () => {
      topicEl.classList.remove('is-hovered');
      circle.classList.remove('is-hovered');
    });
  });
});

let resizeFrame = null;

window.addEventListener('resize', () => {
  if (resizeFrame) cancelAnimationFrame(resizeFrame);

  resizeFrame = requestAnimationFrame(() => {
    refreshViewBoxForViewport();

    if (panel && panel.classList.contains('open')) {
      alignCardTitles();
      alignTopicDetailTitle();
    }

    resizeFrame = null;
  });
});

window.addEventListener('orientationchange', () => {
  refreshViewBoxForViewport();

  if (panel && panel.classList.contains('open')) {
    alignCardTitles();
    alignTopicDetailTitle();
  }
});

/* ═══════════ Mobile Touch Pan / Drag / Pinch-Zoom ═══════════ */
(function initMobilePanZoom() {
  const INERTIA_DECAY = 0.92;
  const INERTIA_MIN = 0.3;

  let isDragging = false;
  let dragStart = null; // {x, y} in SVG coords
  let velocityX = 0;
  let velocityY = 0;
  let lastMoveTime = 0;
  let inertiaRAF = null;

  // Touch tracking for pinch-to-zoom
  let activeTouches = new Map();
  let pinchStartDist = 0;
  let pinchStartViewBox = null;
  let pinchCenter = null;

  // Drag threshold to distinguish taps from drags
  let dragStartScreen = null;
  let hasDraggedPastThreshold = false;
  const DRAG_THRESHOLD = 8; // pixels

  function screenToSVG(screenX, screenY) {
    const rect = svgElement.getBoundingClientRect();
    const vb = currentViewBox;
    return {
      x: vb[0] + (screenX - rect.left) / rect.width * vb[2],
      y: vb[1] + (screenY - rect.top) / rect.height * vb[3]
    };
  }

  function clampViewBox(vb) {
    let [x, y, w, h] = vb;
    const aspect = getViewportAspect();

    // Max zoom out is exactly the initial mobile viewBox width (prevents empty space)
    const initialVB = getMobileInitialViewBox();
    const maxW = initialVB[2];
    const minW = Math.min(350, maxW);

    w = Math.max(minW, Math.min(w, maxW));
    h = w / aspect;

    // Clamp pan within map bounds (allow small overflow for feel)
    const overflowX = w * 0.05;
    const overflowY = h * 0.05;
    x = Math.max(-overflowX, Math.min(x, MAP_WIDTH - w + overflowX));
    y = Math.max(-overflowY, Math.min(y, MAP_HEIGHT - h + overflowY));

    return [x, y, w, h];
  }

  function applyViewBox(vb) {
    currentViewBox = vb;
    targetViewBox = [...vb];
    svgElement.setAttribute('viewBox', formatViewBox(vb));
  }

  // Prevents scrolling past map bounds while zooming on resize
  window.clampViewBox = clampViewBox;

  function stopInertia() {
    if (inertiaRAF) {
      cancelAnimationFrame(inertiaRAF);
      inertiaRAF = null;
    }
  }

  function runInertia() {
    if (Math.abs(velocityX) < INERTIA_MIN && Math.abs(velocityY) < INERTIA_MIN) {
      inertiaRAF = null;
      return;
    }

    velocityX *= INERTIA_DECAY;
    velocityY *= INERTIA_DECAY;

    const vb = clampViewBox([
      currentViewBox[0] - velocityX,
      currentViewBox[1] - velocityY,
      currentViewBox[2],
      currentViewBox[3]
    ]);
    applyViewBox(vb);

    inertiaRAF = requestAnimationFrame(runInertia);
  }

  function getTouchDist(t1, t2) {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // ── Pointer Down ──
  function onPointerDown(e) {
    if (!isMobileView()) return;
    // Don't intercept if the info panel is open
    if (panel && panel.classList.contains('open')) return;

    if (e.pointerType === 'touch') {
      activeTouches.set(e.pointerId, e);
    }

    // Pinch start (2 fingers)
    if (activeTouches.size === 2) {
      stopInertia();
      isDragging = false;
      const touches = [...activeTouches.values()];
      pinchStartDist = getTouchDist(touches[0], touches[1]);
      pinchStartViewBox = [...currentViewBox];
      pinchCenter = screenToSVG(
        (touches[0].clientX + touches[1].clientX) / 2,
        (touches[0].clientY + touches[1].clientY) / 2
      );
      svgElement.classList.add('is-dragging');
      return;
    }

    // Single pointer drag start
    if (activeTouches.size <= 1) {
      stopInertia();
      isDragging = true;
      hasDraggedPastThreshold = false;
      dragStartScreen = { x: e.clientX, y: e.clientY };
      dragStart = screenToSVG(e.clientX, e.clientY);
      velocityX = 0;
      velocityY = 0;
      lastMoveTime = performance.now();
      svgElement.classList.add('is-dragging');
      svgElement.setPointerCapture(e.pointerId);
    }
  }

  // ── Pointer Move ──
  function onPointerMove(e) {
    if (!isMobileView()) return;

    if (e.pointerType === 'touch') {
      activeTouches.set(e.pointerId, e);
    }

    // Pinch zoom (2 fingers)
    if (activeTouches.size === 2 && pinchStartDist > 0) {
      const touches = [...activeTouches.values()];
      const currentDist = getTouchDist(touches[0], touches[1]);
      const scale = pinchStartDist / currentDist;

      const newW = pinchStartViewBox[2] * scale;
      const aspect = getViewportAspect();
      const newH = newW / aspect;

      // Zoom around pinch center
      const cx = pinchCenter.x;
      const cy = pinchCenter.y;
      const ratioX = (cx - pinchStartViewBox[0]) / pinchStartViewBox[2];
      const ratioY = (cy - pinchStartViewBox[1]) / pinchStartViewBox[3];

      const newX = cx - ratioX * newW;
      const newY = cy - ratioY * newH;

      const vb = clampViewBox([newX, newY, newW, newH]);
      applyViewBox(vb);
      return;
    }

    // Single pointer drag
    if (!isDragging || !dragStart || activeTouches.size > 1) return;

    // Check drag threshold
    if (!hasDraggedPastThreshold) {
      const dx = e.clientX - dragStartScreen.x;
      const dy = e.clientY - dragStartScreen.y;
      if (Math.sqrt(dx * dx + dy * dy) < DRAG_THRESHOLD) return;
      hasDraggedPastThreshold = true;
    }

    const current = screenToSVG(e.clientX, e.clientY);
    const dx = dragStart.x - current.x;
    const dy = dragStart.y - current.y;

    const now = performance.now();
    const dt = Math.max(1, now - lastMoveTime);

    // Update velocity for inertia
    velocityX = dx * (16 / dt) * 0.5 + velocityX * 0.5;
    velocityY = dy * (16 / dt) * 0.5 + velocityY * 0.5;
    lastMoveTime = now;

    const vb = clampViewBox([
      currentViewBox[0] + dx,
      currentViewBox[1] + dy,
      currentViewBox[2],
      currentViewBox[3]
    ]);
    applyViewBox(vb);

    // Update drag start to new position
    dragStart = screenToSVG(e.clientX, e.clientY);
  }

  // ── Pointer Up ──
  function onPointerUp(e) {
    if (!isMobileView()) return;

    if (e.pointerType === 'touch') {
      activeTouches.delete(e.pointerId);
    }

    // Reset pinch if we go below 2 fingers
    if (activeTouches.size < 2) {
      pinchStartDist = 0;
      pinchStartViewBox = null;
      pinchCenter = null;
    }

    // If only one finger left after pinch, start drag from that finger
    if (activeTouches.size === 1) {
      const remaining = [...activeTouches.values()][0];
      dragStart = screenToSVG(remaining.clientX, remaining.clientY);
      isDragging = true;
      hasDraggedPastThreshold = true;
      velocityX = 0;
      velocityY = 0;
      lastMoveTime = performance.now();
      return;
    }

    if (isDragging && hasDraggedPastThreshold) {
      // Launch inertia
      inertiaRAF = requestAnimationFrame(runInertia);
    }

    isDragging = false;
    dragStart = null;
    dragStartScreen = null;
    hasDraggedPastThreshold = false;
    svgElement.classList.remove('is-dragging');
  }

  // ── Pointer Cancel ──
  function onPointerCancel(e) {
    if (e.pointerType === 'touch') {
      activeTouches.delete(e.pointerId);
    }
    isDragging = false;
    dragStart = null;
    pinchStartDist = 0;
    pinchStartViewBox = null;
    pinchCenter = null;
    svgElement.classList.remove('is-dragging');
  }

  // ── Mouse wheel zoom (for desktop testing of zoom) ──
  function onWheel(e) {
    if (!isMobileView()) return;
    e.preventDefault();

    const zoomFactor = e.deltaY > 0 ? 1.08 : 0.93;
    const svgPt = screenToSVG(e.clientX, e.clientY);

    const newW = currentViewBox[2] * zoomFactor;
    const aspect = getViewportAspect();
    const newH = newW / aspect;

    const ratioX = (svgPt.x - currentViewBox[0]) / currentViewBox[2];
    const ratioY = (svgPt.y - currentViewBox[1]) / currentViewBox[3];

    const newX = svgPt.x - ratioX * newW;
    const newY = svgPt.y - ratioY * newH;

    const vb = clampViewBox([newX, newY, newW, newH]);
    applyViewBox(vb);
  }

  // Attach events
  svgElement.addEventListener('pointerdown', onPointerDown, { passive: false });
  svgElement.addEventListener('pointermove', onPointerMove, { passive: false });
  svgElement.addEventListener('pointerup', onPointerUp);
  svgElement.addEventListener('pointercancel', onPointerCancel);
  svgElement.addEventListener('wheel', onWheel, { passive: false });

  // Prevent context menu on long press
  svgElement.addEventListener('contextmenu', (e) => {
    if (isMobileView()) e.preventDefault();
  });
})();
