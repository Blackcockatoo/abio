(() => {
  const root = document.documentElement;
  const stage = document.getElementById('tree-stage');
  const tree = document.getElementById('tree');
  const panelWrap = document.getElementById('panel-wrap');
  const counter = document.getElementById('current-count');
  const total = document.getElementById('total-count');
  const status = document.getElementById('status');
  const items = window.BSS_GALLERY_ITEMS || [];

  const sections = [
    {
      slug: 'start-here',
      label: 'Start Here',
      eyebrow: 'Send-this-link page · 60 second map',
      title: 'Start here. Then choose a doorway.',
      statement: 'Blue $nake Studio / B$S is a living myth-tech studio from Tom in Frankston: visual art, music worlds, privacy-first learning tools, Moss 60 number systems, teacher supports and print-ready street packs.',
      startHere: true,
      details: [
        'Use this page when someone needs the clean version fast: who you are, what B$S makes, what already exists and which link to click next.',
        'It keeps the pirate-wizard energy, but explains the actual proof: sites, songs, gallery rooms, teacher tools, Meta-Pet, Moss 60 and print packs.',
        'Best use: send to schools, councils, collaborators, artists, friends, printers or anyone who asks “what is B$S?”'
      ],
      links: [
        { label: 'Open Gallery Rooms', href: '#visual-worlds', className: 'album-link' },
        { label: 'Meta-Pet Pilot School', href: 'https://metapet-pilot-school.vercel.app/' },
        { label: 'Black Wing Crew', href: 'https://blackwingcrew.netlify.app/' },
        { label: 'YouTube @blkck2', href: 'https://www.youtube.com/@blkck2' },
        { label: 'Email B$S', href: 'mailto:bluesssnakestudio@gmail.com' }
      ],
      featuredIds: ['auralia-cosmic-poster', 'black-wing-chant-sheet', 'neon-venom-enter-dream-qr', 'moss60-geometry-linework', 'painting-bss-woman-cockatoo', 'blue-snake-gold-logo']
    },
    {
      slug: 'moss-man',
      label: 'The Moss Man',
      eyebrow: 'Front door · Blue $nake Studio / B$S',
      title: 'You found the archive.',
      statement: 'The Moss Tree is the main doorway into a pirate-wizard studio: art, music, number systems, classroom tools, print drops and myth-tech worlds feeding one beast.',
      details: [
        'This is not a normal portfolio. It is the map of the studio-world.',
        'Wild surface, real engine underneath: every branch is either myth, proof, print, sound or tool.',
        'Use the tree to enter the rooms; use the gallery cards as proof that the world already exists.'
      ],
      links: [
        { label: 'Start with Visual Worlds', href: '#visual-worlds', className: 'album-link' },
        { label: 'Black Wing Crew', href: 'https://blackwingcrew.netlify.app/' },
        { label: 'YouTube @blkck2', href: 'https://www.youtube.com/@blkck2' }
      ],
      featuredIds: ['auralia-cosmic-poster', 'black-wing-chant-sheet', 'neon-venom-enter-dream-qr', 'painting-bss-woman-cockatoo', 'blue-snake-gold-logo', 'moss60-geometry-linework']
    },
    {
      slug: 'visual-worlds',
      label: 'Gallery Rooms',
      eyebrow: 'Chambers · not categories',
      title: 'Choose a room.',
      statement: 'The gallery now behaves like rooms in the B$S archive: each chamber has a mood, a purpose, a doorway line, proof pieces and a reason to exist.',
      series: ['Auralia', 'Insidious Rhythms', 'Original Paintings', 'B$S Branding', 'Process / References'],
      rooms: true,
      details: [
        'No more boring categories. A visitor enters chambers: painting room, venom room, omen room, learning room, number room and street-print room.',
        'Each room explains what it is, why it matters, what lives there, and what people should do next.',
        'The gallery becomes a guided studio experience: myth first, proof underneath, usable pathways everywhere.'
      ],
      links: [
        { label: 'Contact B$S', href: 'mailto:bluesssnakestudio@gmail.com', className: 'album-link' },
        { label: 'Watch @blkck2', href: 'https://www.youtube.com/@blkck2' }
      ]
    },
    {
      slug: 'black-wing-crew',
      label: 'Black Wing Crew',
      eyebrow: 'Music world · Neon Venom',
      title: 'The sign dreams the seer.',
      statement: 'Black Wing Crew is the dark chant/music branch: black birds, black butterflies, omen language, rowing calls, taiko pulse, QR bait and recursive hooks.',
      series: ['Black Wing Crew', 'Neon Venom'],
      details: [
        'This is the sound-and-symbol branch for Neon Venom, Woman Money Venom and Black Omen energy.',
        'Built for songs, YouTube clips, lyric posters, sticker sheets, QR drops and street promotion.',
        'The aim: make people scan, listen, look twice, and remember the hook.'
      ],
      links: [
        { label: 'Open Black Wing Crew', href: 'https://blackwingcrew.netlify.app/', className: 'album-link' },
        { label: 'Watch on YouTube', href: 'https://www.youtube.com/@blkck2' }
      ]
    },
    {
      slug: 'frankston-fuji',
      label: 'Frankston → Fuji',
      eyebrow: 'Sister-city song · learning bridge',
      title: 'Two shores. One song.',
      statement: 'The Frankston → Fuji branch is for the bilingual sister-city material: song, lyric sheets, practice games, taiko rhythm, cultural connection and school-friendly learning.',
      details: [
        'Keep this branch clean and respectful so councils, schools and collaborators can understand it quickly.',
        'Use it for Japanese/English lyric sheets, pronunciation cards, rhythm practice and context tidbits.',
        'It should feel like a bridge: Frankston shore, Fuji shadow, shared rhythm.'
      ],
      links: [
        { label: 'Open Frankston → Fuji', href: 'https://frankston2fuji.netlify.app/', className: 'album-link' },
        { label: 'Email studio', href: 'mailto:bluesssnakestudio@gmail.com' }
      ],
      featuredIds: ['black-wing-chant-sheet', 'video-black-wing-source-01', 'video-source-02']
    },
    {
      slug: 'black-omen-waang',
      label: 'Black Omen / Waang',
      eyebrow: 'Respectful research · language journey',
      title: 'Ask before the omen speaks.',
      statement: 'This branch holds the Black Omen / Waang research path: Bunurong–Boonwurrung enquiry, place respect, translation limits, word-bank notes and consultation-first process.',
      details: [
        'Frame it as research-in-progress, not cultural authority or final translation.',
        'Good for notes, contact drafts, source maps, word-bank experiments and permission pathways.',
        'The tone should be ancient, careful and transparent: from Frankston, made with your son, seeking guidance.'
      ],
      links: [
        { label: 'Open Waang Research Map', href: 'https://waahn.netlify.app/', className: 'album-link' },
        { label: 'Email B$S', href: 'mailto:bluesssnakestudio@gmail.com' }
      ],
      featuredIds: ['auralia-cosmic-poster', 'black-wing-chant-sheet', 'insidious-rhythms-gold']
    },
    {
      slug: 'meta-pet',
      label: 'Meta-Pet',
      eyebrow: 'Privacy-first companion · kid-safe invention',
      title: 'Not a pet. A process.',
      statement: 'Meta-Pet is the serious invention branch: a privacy-first learning companion designed to give attention back instead of stealing it.',
      details: [
        'Local-first, child-safe direction: no ads, no trackers, no unnecessary cloud collection.',
        'A STEAM learning creature powered by puzzles, pattern recognition, creative tasks and symbolic identity.',
        'This is where the wild B$S world becomes a tool for families, schools and healthy device use.'
      ],
      links: [
        { label: 'Open Meta-Pet Pilot School', href: 'https://metapet-pilot-school.vercel.app/', className: 'album-link' },
        { label: 'Teacher Tools', href: '#teacher-tools' },
        { label: 'Email studio', href: 'mailto:bluesssnakestudio@gmail.com' }
      ],
      featuredIds: ['moss60-geometry-linework', 'bss-cockatoo-logo', 'blue-snake-gold-logo']
    },
    {
      slug: 'moss60',
      label: 'Moss 60',
      eyebrow: 'Number engine · 108 · 360',
      title: 'Number you can feel.',
      statement: 'Moss 60 is the hidden engine: base-60 thinking, 108/360 cycles, married opposites, visual maths, sound, identity glyphs and digital DNA logic.',
      series: ['MOSS60 / Geometry'],
      details: [
        'Keep the deep numbers behind the mechanics so it feels real without forcing people to read a textbook.',
        'Use it for Meta-Pet DNA, fractal puzzles, symbolic security, angle-colour-behaviour systems and skill games.',
        'The public face should feel like a mystical machine: playable first, explainable second.'
      ],
      links: [
        { label: 'Connect to Meta-Pet', href: '#meta-pet', className: 'album-link' },
        { label: 'Contact for demo', href: 'mailto:bluesssnakestudio@gmail.com' }
      ]
    },
    {
      slug: 'teacher-tools',
      label: 'Teacher Tools',
      eyebrow: 'Classroom proof · behaviour support',
      title: 'Useful in a real classroom.',
      statement: 'Teacher Tools is the proof branch: classroom-ready supports, behaviour sheets, healthy attention design and low-admin learning material for stretched teachers.',
      details: [
        'This is where B$S becomes practical: printables, behaviour support, lesson prompts and school-safe language.',
        'Keep it clear enough for teachers and parents, but visually connected to the Moss Tree world.',
        'Best use: prove that the myth-tech has a real education purpose underneath.'
      ],
      links: [
        { label: 'Open Teacher Cheatsheet', href: 'https://teachers-secret-cheatsheet.vercel.app/', className: 'album-link' },
        { label: 'Open Meta-Pet Pilot School', href: 'https://metapet-pilot-school.vercel.app/' },
        { label: 'Email B$S', href: 'mailto:bluesssnakestudio@gmail.com' }
      ],
      featuredIds: ['moss60-geometry-linework', 'insidious-rhythms-blue', 'ref-cockatoo-collage']
    },
    {
      slug: 'print-street-pack',
      label: 'Print Street Pack',
      eyebrow: 'Poster arsenal · QR drops · Officeworks-ready',
      title: 'Print the omen.',
      statement: 'The Print Street Pack branch is for posters, stickers, QR codes, cutouts, cards, coasters, A4 layouts and physical promo kits that make B$S leave the screen.',
      series: ['Neon Venom', 'B$S Branding', 'Insidious Rhythms', 'Black Wing Crew'],
      details: [
        'This is central to your style: not just online — printable, cuttable, scannable, hand-to-hand.',
        'Organise files as A4 poster packs, two-up prints, sticker sheets, QR sheets and promo cards.',
        'Every downloadable piece should have clean names so it can go straight to Officeworks or a local printer.'
      ],
      links: [
        { label: 'Watch @blkck2', href: 'https://www.youtube.com/@blkck2', className: 'album-link' },
        { label: 'Email for print files', href: 'mailto:blkck2@gmail.com' }
      ]
    }
  ];


  const projectProofStrips = {
    'start-here': [
      ['What it is', 'The one link/page to send when people need to understand B$S fast.'],
      ['Why it matters', 'It turns the whole studio-world into a clean 60-second doorway for schools, councils, collaborators and friends.'],
      ['Exists already', 'Moss Tree hub, gallery rooms, Black Wing Crew, Meta-Pet Pilot School, Teacher Tools, Moss 60 and print-pack structure.'],
      ['Next move', 'Send this page first, then guide people to the branch that matches them: art, music, school, numbers or print.']
    ],
    'moss-man': [
      ['What it is', 'The front-door map for the whole B$S studio-world.'],
      ['Why it matters', 'It turns wild creative output into one readable myth-tech archive.'],
      ['Exists already', 'Moss Tree hub, gallery rooms, 25 media pieces, @blkck2 links, contact pathway.'],
      ['Next move', 'Enter Gallery Rooms first, then follow the proof into music, tools and print.']
    ],
    'visual-worlds': [
      ['What it is', 'A room-based archive for art, promo, music-world imagery, school proof and number systems.'],
      ['Why it matters', 'Rooms make B$S feel discovered, not browsed.'],
      ['Exists already', 'Six named chambers, preview tiles, room modals, proof tags and selected works.'],
      ['Next move', 'Open a room, then turn the strongest pieces into print/download packs.']
    ],
    'black-wing-crew': [
      ['What it is', 'The dark chant and song-world branch for Neon Venom, Black Omen and recursive hooks.'],
      ['Why it matters', 'It gives the studio a sound, a symbol language and a scannable public identity.'],
      ['Exists already', 'Black Wing Crew site, YouTube @blkck2, chant sheets, QR bait and video sources.'],
      ['Next move', 'Connect every song to one poster, one QR card and one short clip.']
    ],
    'frankston-fuji': [
      ['What it is', 'A sister-city song and learning bridge from Frankston toward Fuji/Susono.'],
      ['Why it matters', 'It makes the music useful for cultural connection, language practice and school/community outreach.'],
      ['Exists already', 'Frankston → Fuji link, lyric-sheet direction, taiko/rhythm learning ideas and bilingual practice pathway.'],
      ['Next move', 'Add a clean one-page explanation for councils, schools and sister-city contacts.']
    ],
    'black-omen-waang': [
      ['What it is', 'A respectful research branch for Black Omen, Waang and Bunurong/Boonwurrung language enquiry.'],
      ['Why it matters', 'It keeps culture, permission and place respect visible instead of treating language as decoration.'],
      ['Exists already', 'Waang research map, word-bank direction, contact framing and consultation-first notes.'],
      ['Next move', 'Keep it marked as research-in-progress and store approvals/notes beside the work.']
    ],
    'meta-pet': [
      ['What it is', 'A privacy-first learning companion and school pilot pathway.'],
      ['Why it matters', 'It proves B$S is not only art: it can become a child-safe education tool.'],
      ['Exists already', 'Meta-Pet Pilot School link, Moss 60 engine link, teacher pathway and privacy-first pitch.'],
      ['Next move', 'Build a school-facing one-pager and a classroom demo route.']
    ],
    'moss60': [
      ['What it is', 'The number engine under the moss: base-60, 108/360 cycles, glyphs and digital DNA.'],
      ['Why it matters', 'It gives the magic a hidden logic so the work feels alive, learnable and repeatable.'],
      ['Exists already', 'Moss 60 geometry asset, symbolic marks, Meta-Pet identity direction and puzzle/game concepts.'],
      ['Next move', 'Package it as a playable engine first, with deeper maths available underneath.']
    ],
    'teacher-tools': [
      ['What it is', 'The practical classroom branch: cheat sheets, behaviour support and school pilot material.'],
      ['Why it matters', 'It gives the studio a serious use-case for teachers, children and families.'],
      ['Exists already', 'Teacher\'s Secret Cheatsheet link, Meta-Pet Pilot School, Drive teacher structure and printable pack plan.'],
      ['Next move', 'Make a calm Teacher Tools homepage with quick buttons and downloadable sheets.']
    ],
    'print-street-pack': [
      ['What it is', 'The physical deployment branch for posters, stickers, QR codes, cards and cutout packs.'],
      ['Why it matters', 'It makes B$S leave the screen and become something people can hold, scan and share.'],
      ['Exists already', 'Drive print folders, QR/sticker assets, chant posters, brand marks and naming rules.'],
      ['Next move', 'Create one clean A4 QR sheet, one sticker sheet and one school one-pager.']
    ]
  };

  const galleryRooms = [
    {
      slug: 'painted-wing',
      number: 'ROOM 01',
      title: 'The Painted Wing',
      eyebrow: 'paintings · handmade myth · Auralia body',
      doorway: 'Enter where the hand still shows.',
      statement: 'The handmade chamber: physical paintings, Auralia portraits, cockatoo companions, spiral listeners and blue/gold studio mythology.',
      mood: 'warm gold, bird-shadow, halo, brush texture, living sketchbook',
      useFor: 'portfolio proof, artist identity, handmade credibility, exhibition pieces',
      proof: ['physical paintings', 'Auralia portrait language', 'cockatoo totem work', 'blue/gold B$S palette'],
      promise: 'This room proves the studio is not only prompts and code — there is a hand, a mythology, and a real painter underneath it.',
      ids: ['painting-bss-woman-cockatoo', 'painting-redhair-auralia', 'painting-spiral-listener', 'painting-two-muses', 'auralia-serpent-profile', 'auralia-moon-dust']
    },
    {
      slug: 'neon-venom-room',
      number: 'ROOM 02',
      title: 'Neon Venom',
      eyebrow: 'QR portals · sticker bait · music-world colour',
      doorway: 'Enter the bright poison.',
      statement: 'The loud chamber: QR portals, black birds, venom colours, stickers, music hooks and scan-me street energy.',
      mood: 'hot pink, electric cyan, toxic green, night market glow, sticker-wall chaos',
      useFor: 'music promo, YouTube traffic, QR drops, sticker sheets, street campaigns',
      proof: ['QR stickers', 'Black Wing Crew bait', 'neon campaign graphics', 'promo-ready visuals'],
      promise: 'This room makes the work scannable, shareable and hard to ignore.',
      ids: ['neon-venom-portal-qr', 'neon-venom-enter-dream-qr', 'neon-venom-black-birds-dream', 'painting-neon-venom-board', 'blue-snake-gold-logo']
    },
    {
      slug: 'omen-room',
      number: 'ROOM 03',
      title: 'The Omen Room',
      eyebrow: 'black birds · black butterflies · chant sheets',
      doorway: 'Enter where the sign looks back.',
      statement: 'The darker ceremonial chamber: black birds, black butterflies, chant sheets, lyric-world material and the sign-dreams-the-seer language system.',
      mood: 'moon bay, folded wing, bird omen, black butterfly, recursive hook',
      useFor: 'Black Wing Crew, Black Omen, lyric posters, chant sheets, film clip identity',
      proof: ['Black Omen chant sheet', 'Auralia omen poster', 'Insidious Rhythms lyrics', 'raw video sources'],
      promise: 'This room gives the music its mythology and makes the songs feel like they came from somewhere older.',
      ids: ['black-wing-chant-sheet', 'auralia-cosmic-poster', 'insidious-rhythms-gold', 'insidious-rhythms-blue', 'video-black-wing-source-01', 'video-source-02']
    },
    {
      slug: 'learning-beast',
      number: 'ROOM 04',
      title: 'The Learning Beast',
      eyebrow: 'Meta-Pet · school pilot · teacher proof',
      doorway: 'Enter the tool hiding inside the myth.',
      statement: 'The proof chamber: Meta-Pet school pilot, teacher tools, behaviour-support thinking and classroom material connected to the B$S pattern engine.',
      mood: 'calmer glow, classroom night-mode, child-safe creature, practical magic',
      useFor: 'school pitch, teacher pathway, classroom printables, behaviour support, Meta-Pet explanation',
      proof: ['Meta-Pet Pilot School link', 'Teacher Tools link', 'behaviour-support direction', 'Moss 60 learning engine'],
      promise: 'This room shows the serious education purpose underneath the wild visual shell.',
      ids: ['moss60-geometry-linework', 'bss-cockatoo-logo', 'ref-cockatoo-collage', 'ref-cockatoo-gentleman', 'video-source-03']
    },
    {
      slug: 'moss60-engine',
      number: 'ROOM 05',
      title: 'Moss 60 Engine',
      eyebrow: 'number system · symbolic geometry · digital DNA',
      doorway: 'Enter the machine under the moss.',
      statement: 'The hidden engine chamber: geometry, symbolic maths, base-60 energy, glyph thinking, 108/360 cycles and digital DNA logic.',
      mood: 'linework, triangles, rings, sigils, engine light, sacred circuit board',
      useFor: 'interactive puzzles, Meta-Pet identity, digital DNA, skill-game mechanics, mythic logic systems',
      proof: ['MOSS60 geometry study', 'B$S symbolic marks', 'Auralia serpent loop', 'fire/mood texture'],
      promise: 'This room keeps the maths behind the magic so the work feels alive instead of random.',
      ids: ['moss60-geometry-linework', 'blue-snake-gold-logo', 'auralia-serpent-profile', 'mood-fire-log', 'bss-cockatoo-logo']
    },
    {
      slug: 'street-print-arsenal',
      number: 'ROOM 06',
      title: 'Street Print Arsenal',
      eyebrow: 'posters · stickers · QR cards · cutout packs',
      doorway: 'Enter the room that leaves the screen.',
      statement: 'The physical deployment chamber: lyric posters, brand marks, QR cards, sticker sheets, cutouts and anything that can be printed, trimmed, handed out or stuck up.',
      mood: 'Officeworks-ready, street table, cut marks, QR glow, sticker pile, promo ritual',
      useFor: 'A4 poster packs, QR sheets, sticker sheets, school one-pagers, song posters, handout kits',
      proof: ['QR designs', 'lyric posters', 'brand marks', 'chant sheets', 'sticker-ready artwork'],
      promise: 'This room turns the online world into physical evidence people can hold, scan and remember.',
      ids: ['neon-venom-portal-qr', 'neon-venom-enter-dream-qr', 'neon-venom-black-birds-dream', 'black-wing-chant-sheet', 'bss-cockatoo-logo', 'blue-snake-gold-logo', 'insidious-rhythms-gold']
    }
  ];


  total.textContent = String(sections.length).padStart(2, '0');

  const slugs = sections.map(section => section.slug);
  let active = Math.max(0, slugs.indexOf(location.hash.slice(1)));
  let wheelLocked = false;
  let pointerStartY = null;
  let pointerStartX = null;

  function escapeHtml(value = '') {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function externalAttrs(href) {
    return href && !href.startsWith('#') && !href.startsWith('mailto:') ? ' target="_blank" rel="noopener"' : '';
  }

  function mediaPreview(item) {
    if (item.mediaType === 'video') {
      return `<video class="card-media" src="${escapeHtml(item.video)}" muted preload="metadata" playsinline></video>`;
    }
    return `<img class="card-media" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />`;
  }

  function artCard(item) {
    return `
      <article class="art-card">
        <button type="button" data-art-id="${escapeHtml(item.id)}">
          ${mediaPreview(item)}
          <div class="art-body">
            <div class="meta-line">${escapeHtml(item.series)} · ${escapeHtml(item.medium)}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <div class="tags">${(item.tags || []).slice(0, 5).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
          </div>
        </button>
      </article>
    `;
  }

  function linksRow(section) {
    const links = section.links || [];
    if (!links.length) return '';
    return `<div class="links-row">${links.map(link => `<a class="project-link ${link.className || ''}" href="${escapeHtml(link.href)}"${externalAttrs(link.href)}>${escapeHtml(link.label)}</a>`).join('')}</div>`;
  }


  function startHereAudience() {
    const cards = [
      ['For schools', 'Meta-Pet, Teacher Tools, classroom reset sheets, behaviour support templates and privacy-first learning.', '#teacher-tools'],
      ['For councils / community', 'Frankston → Fuji, respectful Waang research notes, bilingual song pathways and local cultural bridge work.', '#frankston-fuji'],
      ['For music / art people', 'Black Wing Crew, Neon Venom, lyric posters, gallery rooms, painting worlds and @blkck2 video proof.', '#black-wing-crew'],
      ['For print / promo', 'QR cards, sticker sheets, A4 poster packs, handout kits and the Street Print Arsenal.', '#print-street-pack']
    ];
    return `
      <section class="start-here-pack" aria-label="Who this page is for">
        <div class="section-heading">
          <p class="eyebrow">Send-this-link map</p>
          <h2>One page. Four doors.</h2>
          <p>Give people the clean doorway first. Then send them deeper into the branch that matches what they care about.</p>
        </div>
        <div class="start-card-grid">
          ${cards.map(([label, copy, href]) => `
            <a class="start-card" href="${escapeHtml(href)}">
              <span>${escapeHtml(label)}</span>
              <p>${escapeHtml(copy)}</p>
              <strong>Open branch</strong>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  }

  function collectionGrid() {
    return `
      <div class="mini-collections">
        ${sections.slice(1).map((section, index) => `
          <a class="collection-chip" href="#${section.slug}" data-jump-index="${index + 1}">
            <small>${String(index + 2).padStart(2, '0')}</small>
            <strong>${escapeHtml(section.label)}</strong>
          </a>`).join('')}
      </div>
    `;
  }

  function getSectionItems(section) {
    if (section.featuredIds) {
      return section.featuredIds.map(id => items.find(item => item.id === id)).filter(Boolean);
    }
    if (!section.series) return [];
    return items.filter(item => section.series.includes(item.series));
  }


  function getRoomItems(room) {
    return (room.ids || []).map(id => items.find(item => item.id === id)).filter(Boolean);
  }

  function roomThumb(item) {
    if (!item) return '';
    if (item.mediaType === 'video') {
      return `<video src="${escapeHtml(item.video)}" muted preload="metadata" playsinline></video>`;
    }
    return `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />`;
  }

  function roomCard(room, index) {
    const roomItems = getRoomItems(room);
    return `
      <article class="room-card" style="--room-index:${index}">
        <button type="button" data-room-slug="${escapeHtml(room.slug)}" aria-label="Enter ${escapeHtml(room.title)}">
          <div class="room-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="room-preview">${roomItems.slice(0, 4).map(roomThumb).join('')}</div>
          <div class="room-copy">
            <p class="room-number">${escapeHtml(room.number)}</p>
            <p class="meta-line">${escapeHtml(room.eyebrow)}</p>
            <h3>${escapeHtml(room.title)}</h3>
            <em>${escapeHtml(room.doorway)}</em>
            <p>${escapeHtml(room.statement)}</p>
            <div class="room-mini">
              <span>mood</span><strong>${escapeHtml(room.mood)}</strong>
            </div>
            <strong class="enter-room">Enter room</strong>
          </div>
        </button>
      </article>
    `;
  }

  function roomsShowcase() {
    return `
      <section class="room-showcase" aria-label="B$S gallery rooms">
        <div class="section-heading">
          <p class="eyebrow">Gallery rooms</p>
          <h2>Not categories. Chambers.</h2>
          <p class="room-intro">The visitor should feel like they are walking through a strange studio archive: handmade myth, venom promo, omen language, school proof, number engine and street-print arsenal.</p>
        </div>
        <div class="room-tour">
          ${galleryRooms.map(room => `<button type="button" data-room-slug="${escapeHtml(room.slug)}"><span>${escapeHtml(room.number)}</span>${escapeHtml(room.title)}</button>`).join('')}
        </div>
        <div class="room-grid">${galleryRooms.map(roomCard).join('')}</div>
      </section>
    `;
  }

  function openRoom(roomSlug) {
    const room = galleryRooms.find(candidate => candidate.slug === roomSlug);
    if (!room) return;
    const roomItems = getRoomItems(room);
    let modal = document.querySelector('.modal-backdrop');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal-backdrop';
      modal.innerHTML = '<div class="modal"><button class="modal-close" type="button">Close</button><div class="modal-content"></div></div>';
      document.body.appendChild(modal);
      modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); });
      document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.classList.remove('open'); });
    }
    modal.querySelector('.modal-content').innerHTML = `
      <div class="room-modal-head">
        <p class="eyebrow">${escapeHtml(room.number)} · ${escapeHtml(room.eyebrow)}</p>
        <h2>${escapeHtml(room.title)}</h2>
        <p class="room-doorway-line">${escapeHtml(room.doorway)}</p>
        <p>${escapeHtml(room.statement)}</p>
        <blockquote>${escapeHtml(room.promise)}</blockquote>
        <div class="room-facts">
          <div><span>mood</span><strong>${escapeHtml(room.mood)}</strong></div>
          <div><span>use it for</span><strong>${escapeHtml(room.useFor)}</strong></div>
        </div>
        <div class="room-proof-strip">
          ${(room.proof || []).map(proof => `<span>${escapeHtml(proof)}</span>`).join('')}
        </div>
      </div>
      <div class="gallery-grid room-modal-grid">${roomItems.map(artCard).join('')}</div>
    `;
    modal.querySelectorAll('[data-art-id]').forEach(button => {
      button.addEventListener('click', () => {
        const item = items.find(candidate => candidate.id === button.dataset.artId);
        if (item) openModal(item);
      });
    });
    modal.classList.add('open');
  }


  function projectProofStrip(section) {
    const proofRows = projectProofStrips[section.slug] || [];
    if (!proofRows.length) return '';
    return `
      <section class="project-proof-strip" aria-label="${escapeHtml(section.label)} proof strip">
        <div class="proof-strip-head">
          <p class="eyebrow">Proof strip</p>
          <strong>Spell on top. Tool underneath.</strong>
        </div>
        <div class="proof-strip-grid">
          ${proofRows.map(([label, value]) => `
            <article class="proof-card">
              <span>${escapeHtml(label)}</span>
              <p>${escapeHtml(value)}</p>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  function panelTemplate(section, index) {
    const sectionItems = getSectionItems(section);
    const hasGallery = sectionItems.length > 0;
    const galleryTitle = index === 0 ? 'Doorway proof' : `${section.label} proof`;
    return `
      <article class="panel ${index === active ? 'is-active' : ''}" id="panel-${section.slug}" role="tabpanel" aria-labelledby="tab-${section.slug}" ${index === active ? '' : 'hidden'}>
        <div class="panel-scroll">
          <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h1>${escapeHtml(section.title)}</h1>
          <p class="statement">${escapeHtml(section.statement)}</p>
          ${projectProofStrip(section)}
          <ul class="details">${(section.details || []).map(detail => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>
          ${linksRow(section)}
          ${section.startHere ? startHereAudience() : ''}
          ${section.startHere ? collectionGrid() : ''}
          ${section.rooms ? roomsShowcase() : ''}
          ${hasGallery ? `
            <section class="gallery-section">
              <div class="section-heading">
                <p class="eyebrow">Selected works</p>
                <h2>${escapeHtml(galleryTitle)}</h2>
              </div>
              <div class="gallery-grid">${sectionItems.map(artCard).join('')}</div>
            </section>` : ''}
        </div>
      </article>
    `;
  }

  function buildTree() {
    tree.querySelectorAll('.node').forEach(node => node.remove());
    sections.forEach((section, index) => {
      const node = document.createElement('button');
      node.className = `node${index === active ? ' is-active' : ''}`;
      node.style.setProperty('--i', index);
      node.style.setProperty('--side', index % 2 === 0 ? -1 : 1);
      node.id = `tab-${section.slug}`;
      node.type = 'button';
      node.setAttribute('role', 'tab');
      node.setAttribute('aria-selected', String(index === active));
      node.setAttribute('aria-controls', `panel-${section.slug}`);
      node.tabIndex = index === active ? 0 : -1;
      node.dataset.index = index;
      node.dataset.slug = section.slug;
      node.innerHTML = `<span class="node-index">${String(index + 1).padStart(2, '0')}</span><span class="node-label">${escapeHtml(section.label)}</span>`;
      node.addEventListener('click', () => select(index, { focus: true }));
      tree.appendChild(node);
    });
  }

  function buildPanels() {
    panelWrap.innerHTML = sections.map(panelTemplate).join('');
    panelWrap.querySelectorAll('[data-art-id]').forEach(button => {
      button.addEventListener('click', () => {
        const item = items.find(candidate => candidate.id === button.dataset.artId);
        if (item) openModal(item);
      });
    });
    panelWrap.querySelectorAll('[data-room-slug]').forEach(button => {
      button.addEventListener('click', () => openRoom(button.dataset.roomSlug));
    });
    panelWrap.querySelectorAll('[data-jump-index]').forEach(anchor => {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        select(Number(anchor.dataset.jumpIndex), { focus: true });
      });
    });
  }

  function select(index, options = {}) {
    const next = Math.max(0, Math.min(sections.length - 1, index));
    const changed = next !== active;
    active = next;
    root.style.setProperty('--active', active);
    counter.textContent = String(active + 1).padStart(2, '0');

    document.querySelectorAll('.node').forEach((node, i) => {
      const selected = i === active;
      node.classList.toggle('is-active', selected);
      node.setAttribute('aria-selected', String(selected));
      node.tabIndex = selected ? 0 : -1;
    });

    document.querySelectorAll('.panel').forEach((panel, i) => {
      const selected = i === active;
      panel.classList.toggle('is-active', selected);
      panel.hidden = !selected;
      if (selected) {
        const scroll = panel.querySelector('.panel-scroll');
        if (scroll) scroll.scrollTop = 0;
      }
    });

    if (options.focus) {
      const node = document.querySelectorAll('.node')[active];
      if (node) node.focus({ preventScroll: true });
    }
    if (options.hash !== false && location.hash !== `#${slugs[active]}`) {
      history.replaceState(null, '', `#${slugs[active]}`);
    }
    if (changed && status) status.textContent = `${sections[active].label} selected`;
  }

  function openModal(item) {
    let modal = document.querySelector('.modal-backdrop');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal-backdrop';
      modal.innerHTML = '<div class="modal"><button class="modal-close" type="button">Close</button><div class="modal-content"></div></div>';
      document.body.appendChild(modal);
      modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); });
      document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.classList.remove('open'); });
    }
    const media = item.mediaType === 'video'
      ? `<video src="${escapeHtml(item.video)}" controls preload="metadata" playsinline></video>`
      : `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />`;
    modal.querySelector('.modal-content').innerHTML = `
      ${media}
      <div class="modal-body">
        <div class="meta-line">${escapeHtml(item.series)} · ${escapeHtml(item.medium)} · ${escapeHtml(item.year)}</div>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.description)}</p>
        <div class="tags">${(item.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      </div>
    `;
    modal.classList.add('open');
  }

  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'PageDown') {
      event.preventDefault();
      select(active + 1, { focus: true });
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      select(active - 1, { focus: true });
    } else if (event.key === 'Home') {
      event.preventDefault();
      select(0, { focus: true });
    } else if (event.key === 'End') {
      event.preventDefault();
      select(sections.length - 1, { focus: true });
    }
  });

  stage.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) < 12 || wheelLocked) return;
    event.preventDefault();
    wheelLocked = true;
    select(active + Math.sign(event.deltaY));
    window.setTimeout(() => { wheelLocked = false; }, 430);
  }, { passive: false });

  stage.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerStartY = event.clientY;
    pointerStartX = event.clientX;
  });

  stage.addEventListener('pointerup', event => {
    if (pointerStartY === null) return;
    const dy = event.clientY - pointerStartY;
    const dx = event.clientX - pointerStartX;
    pointerStartY = null;
    pointerStartX = null;
    if (Math.abs(dy) > 38 && Math.abs(dy) > Math.abs(dx) * .8) {
      select(active + (dy < 0 ? 1 : -1));
    }
  });

  stage.addEventListener('pointercancel', () => {
    pointerStartY = null;
    pointerStartX = null;
  });

  window.addEventListener('hashchange', () => {
    const index = slugs.indexOf(location.hash.slice(1));
    if (index >= 0) select(index, { hash: false });
  });

  buildTree();
  buildPanels();
  select(active, { hash: location.hash.length > 1 });
})();
