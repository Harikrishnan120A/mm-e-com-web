/* ================================================
   DATA.JS — All site content, product data & SVGs
   ================================================ */

/* ===== ICONS (reusable small SVGs) ===== */
var ICONS = {
  close: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 2l12 12M14 2L2 14"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>',
  arrowUp: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 14V3M3 7l5-5 5 5"/></svg>',
  check: '<svg viewBox="0 0 12 12" fill="none" stroke="#8A7D6B" stroke-width="1.5"><path d="M2 6l3 3 5-5.5"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
};

/* ===== SITE CONFIG ===== */
var SITE = {
  name: 'Minimalist Merchants',
  abbr: 'MiniMerchStudio',
  tagline: 'Design-Led Fabrication',
  location: 'Rajapalayam, Tamil Nadu, India',
  founded: 'December 2025',
  website: 'https://minimalistmerchants.com',
  instagram: 'https://instagram.com/mmstudio.lab',
  instagramHandle: '@mmstudio.lab',
  copyright: '\u00a9 2026 Minimalist Merchants, Rajapalayam, Tamil Nadu, India',
  whatsapp: '91XXXXXXXXXX', /* Replace with actual WhatsApp number */
  email: 'hello@minimalistmerchants.com',
  phone: '+91 XXXXX XXXXX' /* Replace with actual phone */
};

/* ===== NAVIGATION ===== */
var NAV_LINKS = [
  {label:'Work', href:'#work'},
  {label:'Objects', href:'#objects'},
  {label:'Philosophy', href:'#philosophy'},
  {label:'Process', href:'#process'}
];

var MOBILE_LINKS = [
  {label:'Work', href:'#work'},
  {label:'Objects', href:'#objects'},
  {label:'Philosophy', href:'#philosophy'},
  {label:'Process', href:'#process'},
  {label:'Contact', href:'#contact'}
];

/* ===== HERO ===== */
var HERO = {
  eyebrow: 'Design-Led Fabrication \u00b7 Rajapalayam',
  headingLines: ['Objects made','with intention'],
  sub: 'We design and fabricate things with clarity and restraint \u2014 making things that need to exist, and making them well.',
  cta: {label:'Explore Objects', href:'#objects'},
  ctaGhost: {label:'Our Philosophy', href:'#philosophy'},
  svg: '<svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">'
    +'<g transform="translate(30, 80)">'
    +'<rect x="10" y="40" width="60" height="50" rx="1" stroke="#1A1A1A" stroke-width=".9" opacity=".14"/>'
    +'<rect x="18" y="28" width="44" height="20" rx="1" stroke="#1A1A1A" stroke-width=".8" opacity=".10"/>'
    +'<line x1="10" y1="60" x2="70" y2="60" stroke="#1A1A1A" stroke-width=".5" opacity=".06"/>'
    +'<text x="40" y="112" text-anchor="middle" font-family="\'Inter\',sans-serif" font-size="5.5" fill="#1A1A1A" opacity=".07" letter-spacing=".18em">MODULAR</text>'
    +'</g>'
    +'<g transform="translate(148, 50)">'
    +'<rect x="4" y="20" width="80" height="96" rx="2" stroke="#1A1A1A" stroke-width="1" opacity=".14"/>'
    +'<line x1="4" y1="42" x2="84" y2="42" stroke="#1A1A1A" stroke-width=".6" opacity=".08"/>'
    +'<g opacity=".05">'
    +'<rect x="14" y="50" width="12" height="10" rx=".5" fill="#1A1A1A"/>'
    +'<rect x="32" y="50" width="12" height="10" rx=".5" fill="#1A1A1A"/>'
    +'<rect x="50" y="50" width="12" height="10" rx=".5" fill="#1A1A1A"/>'
    +'<rect x="68" y="50" width="12" height="10" rx=".5" fill="#8A7D6B"/>'
    +'<rect x="14" y="68" width="12" height="10" rx=".5" fill="#1A1A1A"/>'
    +'<rect x="32" y="68" width="12" height="10" rx=".5" fill="#1A1A1A"/>'
    +'<rect x="50" y="68" width="12" height="10" rx=".5" fill="#1A1A1A"/>'
    +'</g>'
    +'<circle cx="44" cy="6" r="4" stroke="#8A7D6B" stroke-width=".7" opacity=".3"/>'
    +'<text x="44" y="136" text-anchor="middle" font-family="\'Inter\',sans-serif" font-size="5.5" fill="#1A1A1A" opacity=".07" letter-spacing=".18em">CALENDAR</text>'
    +'</g>'
    +'<g transform="translate(280, 100)">'
    +'<rect x="0" y="10" width="68" height="42" rx="3" stroke="#1A1A1A" stroke-width=".9" opacity=".14"/>'
    +'<circle cx="18" cy="31" r="8" stroke="#8A7D6B" stroke-width=".6" opacity=".2"/>'
    +'<line x1="32" y1="24" x2="56" y2="24" stroke="#1A1A1A" stroke-width=".5" opacity=".06"/>'
    +'<line x1="32" y1="30" x2="50" y2="30" stroke="#1A1A1A" stroke-width=".4" opacity=".04"/>'
    +'<line x1="32" y1="36" x2="44" y2="36" stroke="#1A1A1A" stroke-width=".3" opacity=".03"/>'
    +'<text x="34" y="72" text-anchor="middle" font-family="\'Inter\',sans-serif" font-size="5.5" fill="#1A1A1A" opacity=".07" letter-spacing=".18em">NFC</text>'
    +'</g>'
    +'<line x1="40" y1="330" x2="360" y2="330" stroke="#1A1A1A" stroke-width=".3" opacity=".03"/>'
    +'<text x="200" y="440" text-anchor="middle" font-family="\'Space Grotesk\',sans-serif" font-size="9" fill="#1A1A1A" opacity=".035" letter-spacing=".28em">MINIMALIST MERCHANTS</text>'
    +'</svg>'
};

/* ===== MARQUEE ===== */
var MARQUEE_ITEMS = [
  'Clarity Over Complexity','Intent Over Decoration','Process Over Shortcuts',
  '3D Printed','Made in Rajapalayam','Plant-Based PLA','UV Resin','Custom Fabrication'
];

/* ===== PHILOSOPHY ===== */
var PHILOSOPHY = {
  label: 'Philosophy',
  text: 'Knowing what truly needs to exist, and making that thing with full intention.',
  sub: 'We do not chase trends. We do not design for decoration. We ask: what does this object need to do, and what is the most honest, elegant way to do it?',
  verse: '\u201cThose who do difficult things with precision are capable; those who cannot, are not.\u201d',
  verseRef: 'Thirukkural \u00b7 Verse 26'
};

/* ===== SERVICES (What We Make) ===== */
var SERVICES = [
  {
    name:'Modular Objects',
    desc:'Desk organizers, perpetual calendars, workspace systems \u2014 products built around modularity. Things that evolve with the user rather than get replaced.',
    icon:'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="2" y="8" width="12" height="12" rx="1"/><rect x="18" y="4" width="12" height="16" rx="1"/><rect x="6" y="22" width="20" height="8" rx="1"/></svg>'
  },
  {
    name:'Custom Builds',
    desc:'NFC cards, QR keychains, custom enclosures, branded accessories \u2014 fabricated to order. No minimum quantities. Made when needed, made right.',
    icon:'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="4" y="6" width="24" height="16" rx="2"/><circle cx="12" cy="14" r="4"/><line x1="20" y1="10" x2="26" y2="10"/><line x1="20" y1="14" x2="24" y2="14"/><line x1="20" y1="18" x2="22" y2="18"/><line x1="10" y1="26" x2="22" y2="26"/></svg>'
  },
  {
    name:'Small-Batch Fabrication',
    desc:'Functional prototypes and small production runs. Concept to object, with full design and production support. We do not chase volume \u2014 we chase precision.',
    icon:'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M16 4L4 10v12l12 6 12-6V10L16 4z"/><line x1="16" y1="16" x2="16" y2="28"/><line x1="4" y1="10" x2="16" y2="16"/><line x1="28" y1="10" x2="16" y2="16"/></svg>'
  }
];

/* ===== PRODUCTS ===== */
var PRODUCTS = [
  {id:'desk-system',name:'Modular Desk System',price:1490,bg:'#EFECE7',material:'PLA',finish:'Matte',
    tagline:'A workspace that evolves with the way you work.',
    desc:'Interlocking desk organizer modules \u2014 pen holder, card slot, cable channel, and open tray. Combine, rearrange, extend. Designed for desks that actually get used.',
    specs:{Material:'PLA',Weight:'148 g (full set)',Modules:'4 interlocking pieces',Size:'180 \u00d7 120 \u00d7 65 mm (assembled)',Finish:'Matte'},
    img:'images/modular desk system.png',
    svg:'<svg viewBox="0 0 200 200" fill="none"><rect x="40" y="80" width="50" height="50" rx="2" stroke="#1A1A1A" stroke-width="1.4" opacity=".16"/><rect x="95" y="66" width="50" height="64" rx="2" stroke="#1A1A1A" stroke-width="1.4" opacity=".14"/><rect x="52" y="134" width="80" height="24" rx="1.5" stroke="#1A1A1A" stroke-width="1.2" opacity=".12"/><line x1="95" y1="98" x2="145" y2="98" stroke="#1A1A1A" stroke-width=".6" opacity=".06"/><circle cx="65" cy="60" r="5" stroke="#8A7D6B" stroke-width=".8" opacity=".28"/></svg>'},
  {id:'perpetual-cal',name:'Perpetual Calendar',price:890,bg:'#EAE7E1',material:'PLA',finish:'Matte',
    tagline:'A calendar that never expires. Rotate, reset, repeat.',
    desc:'Sliding date tiles on a magnetic-snap base. No paper, no waste. Month, date, and day \u2014 set once, adjust as needed. Sits on any surface with quiet confidence.',
    specs:{Material:'PLA',Weight:'86 g',Size:'110 \u00d7 80 \u00d7 32 mm',Tiles:'31 date + 12 month + 7 day',Finish:'Matte'},
    img:'images/perpetual calendar.png',
    svg:'<svg viewBox="0 0 200 200" fill="none"><rect x="42" y="56" width="116" height="96" rx="3" stroke="#1A1A1A" stroke-width="1.4" opacity=".14"/><line x1="42" y1="80" x2="158" y2="80" stroke="#1A1A1A" stroke-width=".8" opacity=".08"/><g opacity=".06"><rect x="52" y="88" width="20" height="16" rx="1" fill="#1A1A1A"/><rect x="78" y="88" width="20" height="16" rx="1" fill="#1A1A1A"/><rect x="104" y="88" width="20" height="16" rx="1" fill="#1A1A1A"/><rect x="130" y="88" width="20" height="16" rx="1" fill="#8A7D6B"/><rect x="52" y="112" width="20" height="16" rx="1" fill="#1A1A1A"/><rect x="78" y="112" width="20" height="16" rx="1" fill="#1A1A1A"/></g><circle cx="100" cy="42" r="5" stroke="#8A7D6B" stroke-width=".8" opacity=".28"/></svg>'},
  {id:'nfc-card',name:'NFC Business Card',price:390,bg:'#ECE9E3',material:'Resin',finish:'Raw',
    tagline:'One tap. Full contact. No paper wasted.',
    desc:'UV resin NFC card with embedded chip. Tap against any phone to share your details. Custom engraved name, title, and branding. Made for people who hand out intentions, not paper.',
    specs:{Material:'UV Resin',Weight:'22 g',Size:'85 \u00d7 54 \u00d7 3 mm (standard card)',NFC:'NTAG216 \u2014 programmable',Finish:'Raw'},
    img:'images/nfc business cards.png',
    svg:'<svg viewBox="0 0 200 200" fill="none"><rect x="40" y="68" width="120" height="72" rx="5" stroke="#1A1A1A" stroke-width="1.4" opacity=".16"/><circle cx="68" cy="104" r="12" stroke="#8A7D6B" stroke-width=".9" opacity=".22"/><circle cx="68" cy="104" r="18" stroke="#8A7D6B" stroke-width=".5" opacity=".10"/><line x1="92" y1="88" x2="140" y2="88" stroke="#1A1A1A" stroke-width=".7" opacity=".08"/><line x1="92" y1="96" x2="130" y2="96" stroke="#1A1A1A" stroke-width=".5" opacity=".05"/><line x1="92" y1="104" x2="118" y2="104" stroke="#1A1A1A" stroke-width=".4" opacity=".04"/></svg>'},
  {id:'qr-keychain',name:'QR Keychain',price:290,bg:'#E8E5DF',material:'PLA',finish:'Raw',
    tagline:'Your link, printed into something you carry.',
    desc:'Custom QR code embedded into a minimal keychain form. Links to your site, portfolio, menu, or anything with a URL. Scan-tested, pocket-ready.',
    specs:{Material:'PLA',Weight:'14 g',Size:'40 \u00d7 40 \u00d7 5 mm',QR:'Up to 100 characters',Finish:'Raw'},
    img:'images/qr key chains.png',
    svg:'<svg viewBox="0 0 200 200" fill="none"><rect x="60" y="60" width="80" height="80" rx="2" stroke="#1A1A1A" stroke-width="1.4" opacity=".16"/><g opacity=".08"><rect x="70" y="70" width="16" height="16" rx="1" fill="#1A1A1A"/><rect x="92" y="70" width="8" height="8" fill="#1A1A1A"/><rect x="104" y="70" width="16" height="16" rx="1" fill="#1A1A1A"/><rect x="70" y="92" width="8" height="8" fill="#1A1A1A"/><rect x="84" y="92" width="8" height="8" fill="#8A7D6B"/><rect x="100" y="92" width="8" height="8" fill="#1A1A1A"/><rect x="70" y="104" width="16" height="16" rx="1" fill="#1A1A1A"/><rect x="96" y="108" width="8" height="8" fill="#1A1A1A"/><rect x="112" y="104" width="8" height="8" fill="#1A1A1A"/></g><circle cx="100" cy="42" r="5" stroke="#8A7D6B" stroke-width=".8" opacity=".28"/><line x1="100" y1="47" x2="100" y2="60" stroke="#8A7D6B" stroke-width=".6" opacity=".18"/></svg>'},
  {id:'cable-organizer',name:'Cable Dock',price:490,bg:'#EBEAE4',material:'PLA',finish:'Matte',
    tagline:'Every cable has a place. The desk stays clean.',
    desc:'Weighted cable dock with three channels \u2014 holds charging cables in position when unplugged. No adhesive, no magnets. Just gravity and good geometry.',
    specs:{Material:'PLA',Weight:'62 g',Size:'90 \u00d7 40 \u00d7 28 mm',Channels:'3 (USB-C / Lightning / Micro)',Finish:'Matte'},
    img:'images/cable dock.png',
    svg:'<svg viewBox="0 0 200 200" fill="none"><rect x="50" y="90" width="100" height="36" rx="6" stroke="#1A1A1A" stroke-width="1.4" opacity=".16"/><path d="M72 90 Q72 78 72 72" stroke="#1A1A1A" stroke-width=".9" opacity=".10"/><path d="M100 90 Q100 76 100 70" stroke="#1A1A1A" stroke-width=".9" opacity=".10"/><path d="M128 90 Q128 78 128 72" stroke="#1A1A1A" stroke-width=".9" opacity=".10"/><circle cx="72" cy="68" r="3" fill="#1A1A1A" opacity=".06"/><circle cx="100" cy="66" r="3" fill="#8A7D6B" opacity=".12"/><circle cx="128" cy="68" r="3" fill="#1A1A1A" opacity=".06"/></svg>'},
  {id:'custom-enclosure',name:'Custom Enclosure',price:690,bg:'#EDEBE5',material:'Resin',finish:'Matte',
    tagline:'Your electronics, housed in something considered.',
    desc:'Custom-fit enclosures for Raspberry Pi, Arduino, or any PCB. Measured, modeled, and printed to spec. Ventilation, port access, and mounting \u2014 all accounted for.',
    specs:{Material:'UV Resin / PLA',Weight:'Varies by design',Process:'CAD + FDM or SLA',Tolerance:'\u00b10.15 mm',Finish:'Matte / Raw'},
    img:'images/custom enclosure.png',
    svg:'<svg viewBox="0 0 200 200" fill="none"><rect x="48" y="68" width="104" height="72" rx="4" stroke="#1A1A1A" stroke-width="1.4" opacity=".16"/><rect x="60" y="78" width="80" height="52" rx="2" stroke="#1A1A1A" stroke-width=".8" opacity=".08"/><circle cx="76" cy="98" r="6" stroke="#8A7D6B" stroke-width=".7" opacity=".18"/><rect x="90" y="90" width="36" height="4" rx="1" fill="#1A1A1A" opacity=".05"/><rect x="90" y="98" width="28" height="4" rx="1" fill="#1A1A1A" opacity=".04"/><rect x="90" y="106" width="20" height="4" rx="1" fill="#1A1A1A" opacity=".03"/><line x1="48" y1="140" x2="56" y2="140" stroke="#1A1A1A" stroke-width="1" opacity=".10"/><line x1="144" y1="140" x2="152" y2="140" stroke="#1A1A1A" stroke-width="1" opacity=".10"/></svg>'}
];

/* ===== STATS ===== */
var STATS = [
  {count:0.1, dec:1, label:'mm Layer Height'},
  {count:100, dec:0, label:'% Plant-Based PLA'},
  {count:0, dec:0, text:'Zero', label:'Minimum Order Qty'},
  {count:2025, dec:0, label:'Founded'}
];

/* ===== PROCESS ===== */
var PROCESS = {
  heading: 'Layer by layer.<br>No shortcuts.<br>No compromises.',
  body: 'Every object is printed layer by layer from plant-based PLA or UV-cured resin. No paint, no coating \u2014 just raw material fused with intention. What you see is what it is.',
  specs: [
    {k:'Materials', v:'PLA / UV Resin'},
    {k:'Layer Height', v:'0.1 mm'},
    {k:'Finish', v:'Raw / Matte'},
    {k:'Process', v:'FDM / SLA Printing'},
    {k:'Production', v:'In-house, Rajapalayam'}
  ]
};

/* ===== FOOTER ===== */
var FOOTER_NAV = [
  {label:'What We Make', href:'#work'},
  {label:'Objects', href:'#objects'},
  {label:'Philosophy', href:'#philosophy'},
  {label:'Process', href:'#process'}
];
var FOOTER_CONNECT = [
  {label:'@mmstudio.lab', href:'https://instagram.com/mmstudio.lab'},
  {label:'minimalistmerchants.com', href:'https://minimalistmerchants.com'}
];
var FOOTER_STUDIO = [
  'Rajapalayam, Tamil Nadu',
  'Udyam Registered',
  'Est. December 2025'
];

/* ===== TRUST BAR ===== */
var TRUST_BAR = [
  {title:'All-India Shipping', desc:'Free delivery on orders above \u20b9999. Standard shipping 5\u20137 business days.'},
  {title:'Easy Returns', desc:'Not satisfied? Reach out within 7 days for a hassle-free return or exchange.'},
  {title:'Secure Ordering', desc:'Order via WhatsApp or direct contact. Pay via UPI, bank transfer, or COD.'}
];

/* ===== POLICIES ===== */
var POLICIES = {
  shipping: 'We ship all-India via India Post and private couriers. Orders above \u20b9999 qualify for free shipping. Standard delivery: 5\u20137 business days. Tracking provided for all orders.',
  returns: 'If you\u2019re not satisfied, contact us within 7 days of delivery for a return or exchange. Items must be unused and in original condition. Custom orders are non-returnable.',
  privacy: 'We collect only the information needed to process your order (name, address, email). We never share your data with third parties. Newsletter emails can be unsubscribed at any time.'
};
