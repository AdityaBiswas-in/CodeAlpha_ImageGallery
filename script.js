/* ─── DATA ─── */
const images = [
  { id:1,  src:'https://picsum.photos/seed/forest1/600/800',   title:'Ethereal Canopy',      cat:'nature',       w:600, h:800  },
  { id:2,  src:'https://picsum.photos/seed/arch2/700/500',     title:'Industrial Zenith',    cat:'architecture', w:700, h:500  },
  { id:3,  src:'https://picsum.photos/seed/city3/600/700',     title:'Twilight Pulse',       cat:'urban',        w:600, h:700  },
  { id:4,  src:'https://picsum.photos/seed/abst4/600/600',     title:'Cerulean Fracture',    cat:'abstract',     w:600, h:600  },
  { id:5,  src:'https://picsum.photos/seed/people5/600/900',   title:'Bazaar Echoes',        cat:'people',       w:600, h:900  },
  { id:6,  src:'https://picsum.photos/seed/nature6/700/500',   title:'Abyssal Shore',        cat:'nature',       w:700, h:500  },
  { id:7,  src:'https://picsum.photos/seed/arch7/600/750',     title:'Vertical Gothic',      cat:'architecture', w:600, h:750  },
  { id:8,  src:'https://picsum.photos/seed/urban8/700/500',    title:'Neon Nocturne',        cat:'urban',        w:700, h:500  },
  { id:9,  src:'https://picsum.photos/seed/abst9/600/650',     title:'Fluid Symmetry',       cat:'abstract',     w:600, h:650  },
  { id:10, src:'https://picsum.photos/seed/ppl10/600/800',     title:'Solitary Nomad',       cat:'people',       w:600, h:800  },
  { id:11, src:'https://picsum.photos/seed/nat11/700/500',     title:'Emerald Highland',     cat:'nature',       w:700, h:500  },
  { id:12, src:'https://picsum.photos/seed/arc12/600/700',     title:'Brutalist Monolith',   cat:'architecture', w:600, h:700  },
  { id:13, src:'https://picsum.photos/seed/urb13/600/600',     title:'Subterranean Void',    cat:'urban',        w:600, h:600  },
  { id:14, src:'https://picsum.photos/seed/abs14/700/500',     title:'Spectral Shift',       cat:'abstract',     w:700, h:500  },
  { id:15, src:'https://picsum.photos/seed/ppl15/600/800',     title:'Urban Gaze',           cat:'people',       w:600, h:800  },
  { id:16, src:'https://picsum.photos/seed/nat16/700/550',     title:'Sahara Silence',       cat:'nature',       w:700, h:550  },
  { id:17, src:'https://picsum.photos/seed/arc17/600/750',     title:'Crystal Vault',        cat:'architecture', w:600, h:750  },
  { id:18, src:'https://picsum.photos/seed/urb18/700/500',     title:'Kinetic Street',       cat:'urban',        w:700, h:500  },
  { id:19, src:'https://picsum.photos/seed/abs19/600/650',     title:'Pigment Burst',        cat:'abstract',     w:600, h:650  },
  { id:20, src:'https://picsum.photos/seed/ppl20/600/700',     title:'Bistro Reverie',       cat:'people',       w:600, h:700  },
  { id:21, src:'https://picsum.photos/seed/nat21/700/500',     title:'Amber Solstice',       cat:'nature',       w:700, h:500  },
  { id:22, src:'https://picsum.photos/seed/arc22/600/800',     title:'Ascending Helix',      cat:'architecture', w:600, h:800  },
  { id:23, src:'https://picsum.photos/seed/urb23/700/500',     title:'Zenith Overlook',      cat:'urban',        w:700, h:500  },
  { id:24, src:'https://picsum.photos/seed/abs24/600/600',     title:'Electric Currents',    cat:'abstract',     w:600, h:600  },
  { id:25, src:'https://picsum.photos/seed/nat25/700/500',     title:'Pristine Summit',      cat:'nature',       w:700, h:500  },
  { id:26, src:'https://picsum.photos/seed/arc26/600/750',     title:'Curvilinear Form',     cat:'architecture', w:600, h:750  },
  { id:27, src:'https://picsum.photos/seed/urb27/700/500',     title:'Glass Petrichor',      cat:'urban',        w:700, h:500  },
  { id:28, src:'https://picsum.photos/seed/abs28/600/600',     title:'Phi Resonance',        cat:'abstract',     w:600, h:600  },
  { id:29, src:'https://picsum.photos/seed/ppl29/600/800',     title:'Quiet Contemplation',  cat:'people',       w:600, h:800  },
  { id:30, src:'https://picsum.photos/seed/nat30/700/550',     title:'Verdant Maze',         cat:'nature',       w:700, h:550  },
  { id:31, src:'https://picsum.photos/seed/arc31/600/700',     title:'Archaic Portal',       cat:'architecture', w:600, h:700  },
  { id:32, src:'https://picsum.photos/seed/urb32/700/500',     title:'Dusk Horizon',         cat:'urban',        w:700, h:500  },
  { id:33, src:'https://picsum.photos/seed/abs33/600/650',     title:'Minimal Void',         cat:'abstract',     w:600, h:650  },
  { id:34, src:'https://picsum.photos/seed/ppl34/600/700',     title:'Vibrant Rhythm',       cat:'people',       w:600, h:700  },
  { id:35, src:'https://picsum.photos/seed/nat35/700/500',     title:'Quartz Grotto',        cat:'nature',       w:700, h:500  },
  { id:36, src:'https://picsum.photos/seed/arc36/600/800',     title:'Suspended Path',       cat:'architecture', w:600, h:800  },
  { id:37, src:'https://picsum.photos/seed/urb37/700/500',     title:'Civic Energy',         cat:'urban',        w:700, h:500  },
  { id:38, src:'https://picsum.photos/seed/abs38/600/600',     title:'Vector Velocity',      cat:'abstract',     w:600, h:600  },
  { id:39, src:'https://picsum.photos/seed/ppl39/600/800',     title:'Lyric Soul',           cat:'people',       w:600, h:800  },
  { id:40, src:'https://picsum.photos/seed/nat40/700/550',     title:'Vapor Haze',           cat:'nature',       w:700, h:550  },
  { id:41, src:'https://picsum.photos/seed/arc41/600/700',     title:'Columnar Reach',       cat:'architecture', w:600, h:700  },
  { id:42, src:'https://picsum.photos/seed/urb42/700/500',     title:'Motion Static',        cat:'urban',        w:700, h:500  },
  { id:43, src:'https://picsum.photos/seed/abs43/600/650',     title:'Cobalt Depth',         cat:'abstract',     w:600, h:650  },
  { id:44, src:'https://picsum.photos/seed/ppl44/600/700',     title:'Dusk Promenade',       cat:'people',       w:600, h:700  },
  { id:45, src:'https://picsum.photos/seed/nat45/700/500',     title:'Azure Reef',           cat:'nature',       w:700, h:500  },
  { id:46, src:'https://picsum.photos/seed/arc46/600/800',     title:'Glazed Geometry',      cat:'architecture', w:600, h:800  },
  { id:47, src:'https://picsum.photos/seed/urb47/700/500',     title:'Amber Transit',        cat:'urban',        w:700, h:500  },
  { id:48, src:'https://picsum.photos/seed/abs48/600/600',     title:'Entropy Drive',        cat:'abstract',     w:600, h:600  },
  { id:49, src:'https://picsum.photos/seed/ppl49/600/800',     title:'Creative Spark',       cat:'people',       w:600, h:800  },
  { id:50, src:'https://picsum.photos/seed/nat50/700/550',     title:'Velvet Highlands',     cat:'nature',       w:700, h:550  },
  { id:51, src:'https://picsum.photos/seed/arc51/600/700',     title:'Lithic Block',         cat:'architecture', w:600, h:700  },
  { id:52, src:'https://picsum.photos/seed/urb52/700/500',     title:'Obsidian Flow',        cat:'urban',        w:700, h:500  },
  { id:53, src:'https://picsum.photos/seed/abs53/600/650',     title:'Crystalline Light',    cat:'abstract',     w:600, h:650  },
  { id:54, src:'https://picsum.photos/seed/ppl54/600/700',     title:'Terrace Whispers',     cat:'people',       w:600, h:700  },
  { id:55, src:'https://picsum.photos/seed/nat55/700/500',     title:'Solar Sanctuary',      cat:'nature',       w:700, h:500  },
  { id:56, src:'https://picsum.photos/seed/arc56/600/800',     title:'Geometric Dome',       cat:'architecture', w:600, h:800  },
  { id:57, src:'https://picsum.photos/seed/urb57/700/500',     title:'Cobblestone Echo',     cat:'urban',        w:700, h:500  },
  { id:58, src:'https://picsum.photos/seed/abs58/600/600',     title:'Shadow Dialogue',      cat:'abstract',     w:600, h:600  },
  { id:59, src:'https://picsum.photos/seed/ppl59/600/800',     title:'Intellectual Gaze',    cat:'people',       w:600, h:800  },
  { id:60, src:'https://picsum.photos/seed/nat60/700/550',     title:'Tempest Surge',        cat:'nature',       w:700, h:550  },
  { id:61, src:'https://picsum.photos/seed/arc61/600/700',     title:'Industrial Lattice',   cat:'architecture', w:600, h:700  },
  { id:62, src:'https://picsum.photos/seed/urb62/700/500',     title:'Urban Flavor',         cat:'urban',        w:700, h:500  },
  { id:63, src:'https://picsum.photos/seed/abs63/600/650',     title:'Resonance Frequency',  cat:'abstract',     w:600, h:650  },
  { id:64, src:'https://picsum.photos/seed/ppl64/600/700',     title:'Petrichor Walk',       cat:'people',       w:600, h:700  },
  { id:65, src:'https://picsum.photos/seed/nat65/700/500',     title:'Magma Veins',          cat:'nature',       w:700, h:500  },
  { id:66, src:'https://picsum.photos/seed/arc66/600/800',     title:'Baroque Splendor',     cat:'architecture', w:600, h:800  },
  { id:67, src:'https://picsum.photos/seed/urb67/700/500',     title:'Steel Connection',     cat:'urban',        w:700, h:500  },
  { id:68, src:'https://picsum.photos/seed/abs68/600/600',     title:'Monochrome Bloom',     cat:'abstract',     w:600, h:600  },
  { id:69, src:'https://picsum.photos/seed/ppl69/600/800',     title:'The Form-Giver',       cat:'people',       w:600, h:800  },
  { id:70, src:'https://picsum.photos/seed/nat70/700/550',     title:'Pebble Rhythm',        cat:'nature',       w:700, h:550  },
  { id:71, src:'https://picsum.photos/seed/arc71/600/700',     title:'Chronos Tower',        cat:'architecture', w:600, h:700  },
  { id:72, src:'https://picsum.photos/seed/urb72/700/500',     title:'Glow Junction',        cat:'urban',        w:700, h:500  },
  { id:73, src:'https://picsum.photos/seed/abs73/600/650',     title:'Fractured Circuit',    cat:'abstract',     w:600, h:650  },
  { id:74, src:'https://picsum.photos/seed/ppl74/600/700',     title:'Checkmate Focus',      cat:'people',       w:600, h:700  },
  { id:75, src:'https://picsum.photos/seed/nat75/700/500',     title:'Jade Pillars',         cat:'nature',       w:700, h:500  },
  { id:76, src:'https://picsum.photos/seed/arc76/600/800',     title:'Sedimentary Arch',     cat:'architecture', w:600, h:800  },
  { id:77, src:'https://picsum.photos/seed/urb77/700/500',     title:'Iron Transit',         cat:'urban',        w:700, h:500  },
  { id:78, src:'https://picsum.photos/seed/abs78/600/600',     title:'Ghostly Radiance',     cat:'abstract',     w:600, h:600  },
  { id:79, src:'https://picsum.photos/seed/ppl79/600/800',     title:'Artisanal Loom',       cat:'people',       w:600, h:800  },
  { id:80, src:'https://picsum.photos/seed/nat80/700/550',     title:'Sulfuric Mist',        cat:'nature',       w:700, h:550  },
  { id:81, src:'https://picsum.photos/seed/arc81/600/700',     title:'Warehouse Soul',       cat:'architecture', w:600, h:700  },
  { id:82, src:'https://picsum.photos/seed/urb82/700/500',     title:'Passage Depth',        cat:'urban',        w:700, h:500  },
  { id:83, src:'https://picsum.photos/seed/abs83/600/650',     title:'Biomorphic Flow',      cat:'abstract',     w:600, h:650  },
  { id:84, src:'https://picsum.photos/seed/ppl84/600/700',     title:'Melodic Spirit',       cat:'people',       w:600, h:700  },
  { id:85, src:'https://picsum.photos/seed/nat85/700/500',     title:'Ashen Plain',          cat:'nature',       w:700, h:500  },
  { id:86, src:'https://picsum.photos/seed/arc86/600/800',     title:'Louvered Peak',        cat:'architecture', w:600, h:800  },
  { id:87, src:'https://picsum.photos/seed/nat87/700/500',     title:'Frozen Horizon',       cat:'nature',       w:700, h:500  },
  { id:88, src:'https://picsum.photos/seed/arc88/600/750',     title:'Gothic Ribs',          cat:'architecture', w:600, h:750  },
  { id:89, src:'https://picsum.photos/seed/urb89/700/500',     title:'Dockside Glow',        cat:'urban',        w:700, h:500  },
  { id:90, src:'https://picsum.photos/seed/abs90/600/600',     title:'High Tension',         cat:'abstract',     w:600, h:600  },
  { id:91, src:'https://picsum.photos/seed/ppl91/600/800',     title:'Master Strategy',      cat:'people',       w:600, h:800  },
  { id:92, src:'https://picsum.photos/seed/nat92/700/550',     title:'Jagged Shore',         cat:'nature',       w:700, h:550  },
  { id:93, src:'https://picsum.photos/seed/arc93/600/700',     title:'Void Ascent',          cat:'architecture', w:600, h:700  },
  { id:94, src:'https://picsum.photos/seed/urb94/700/500',     title:'Retro Diner',          cat:'urban',        w:700, h:500  },
  { id:95, src:'https://picsum.photos/seed/abs95/600/650',     title:'Argent Flow',          cat:'abstract',     w:600, h:650  },
  { id:96, src:'https://picsum.photos/seed/ppl96/600/700',     title:'The Explorer',         cat:'people',       w:600, h:700  },
  { id:97, src:'https://picsum.photos/seed/nat97/700/500',     title:'Veiled Falls',         cat:'nature',       w:700, h:500  },
  { id:98, src:'https://picsum.photos/seed/arc98/600/800',     title:'Angular Reach',        cat:'architecture', w:600, h:800  },
  { id:99, src:'https://picsum.photos/seed/urb99/700/500',     title:'Vibrant Social',       cat:'urban',        w:700, h:500  },
  { id:100, src:'https://picsum.photos/seed/abs100/600/600',   title:'Infinite Echo',        cat:'abstract',     w:600, h:600  },
  { id:101, src:'https://picsum.photos/seed/nat101/700/500',   title:'Jade Sanctuary',       cat:'nature',       w:700, h:500  },
  { id:102, src:'https://picsum.photos/seed/arc102/600/800',   title:'Doric Resonance',      cat:'architecture', w:600, h:800  },
  { id:103, src:'https://picsum.photos/seed/urb103/700/500',   title:'Plaza Vitality',       cat:'urban',        w:700, h:500  },
  { id:104, src:'https://picsum.photos/seed/abs104/600/600',   title:'Fractured Essence',    cat:'abstract',     w:600, h:600  },
  { id:105, src:'https://picsum.photos/seed/ppl105/600/800',   title:'Market Hearth',        cat:'people',       w:600, h:800  },
  { id:106, src:'https://picsum.photos/seed/nat106/700/550',   title:'Glacial Ribbon',       cat:'nature',       w:700, h:550  },
  { id:107, src:'https://picsum.photos/seed/arc107/600/700',   title:'Zenith Void',          cat:'architecture', w:600, h:700  },
  { id:108, src:'https://picsum.photos/seed/urb108/700/500',   title:'Iron Rhythm',          cat:'urban',        w:700, h:500  },
  { id:109, src:'https://picsum.photos/seed/abs109/600/650',   title:'Nebulous Drift',       cat:'abstract',     w:600, h:650  },
  { id:110, src:'https://picsum.photos/seed/ppl110/600/700',   title:'Steel Nomad',          cat:'people',       w:600, h:700  },
  { id:111, src:'https://picsum.photos/seed/nat111/700/500',   title:'Botanical Haze',       cat:'nature',       w:700, h:500  },
  { id:112, src:'https://picsum.photos/seed/arc112/600/800',   title:'Brutalist Surge',      cat:'architecture', w:600, h:800  },
  { id:113, src:'https://picsum.photos/seed/urb113/700/500',   title:'Urban Confluence',     cat:'urban',        w:700, h:500  },
  { id:114, src:'https://picsum.photos/seed/abs114/600/600',   title:'Binaric Flow',         cat:'abstract',     w:600, h:600  },
  { id:115, src:'https://picsum.photos/seed/ppl115/600/800',   title:'Expressive Motion',    cat:'people',       w:600, h:800  },
  { id:116, src:'https://picsum.photos/seed/nat116/700/550',   title:'Amber Horizon',        cat:'nature',       w:700, h:550  },
  { id:117, src:'https://picsum.photos/seed/arc117/600/700',   title:'Obsidian Pillar',      cat:'architecture', w:600, h:700  },
  { id:118, src:'https://picsum.photos/seed/urb118/700/500',   title:'Alley Sentinel',       cat:'urban',        w:700, h:500  },
  { id:119, src:'https://picsum.photos/seed/abs119/600/650',   title:'Refractive Dreams',    cat:'abstract',     w:600, h:650  },
  { id:120, src:'https://picsum.photos/seed/ppl120/600/700',   title:'Solitary Scholar',     cat:'people',       w:600, h:700  },
  { id:121, src:'https://picsum.photos/seed/nat121/700/500',   title:'Abyssal Woods',        cat:'nature',       w:700, h:500  },
  { id:122, src:'https://picsum.photos/seed/arc122/600/800',   title:'Columnar Silence',     cat:'architecture', w:600, h:800  },
  { id:123, src:'https://picsum.photos/seed/urb123/700/500',   title:'Aerial Sanctuary',     cat:'urban',        w:700, h:500  },
  { id:124, src:'https://picsum.photos/seed/abs124/600/600',   title:'Filigree Light',       cat:'abstract',     w:600, h:600  },
  { id:125, src:'https://picsum.photos/seed/ppl125/600/800',   title:'Wisdom Etched',        cat:'people',       w:600, h:800  },
  { id:126, src:'https://picsum.photos/seed/nat126/700/550',   title:'Crystalline Shore',    cat:'nature',       w:700, h:550  },
  { id:127, src:'https://picsum.photos/seed/arc127/600/700',   title:'Helix Ascent',         cat:'architecture', w:600, h:700  },
  { id:128, src:'https://picsum.photos/seed/urb128/700/500',   title:'Iron Departure',       cat:'urban',        w:700, h:500  },
  { id:129, src:'https://picsum.photos/seed/abs129/600/650',   title:'Electric Aura',        cat:'abstract',     w:600, h:650  },
  { id:130, src:'https://picsum.photos/seed/ppl130/600/700',   title:'Shared Joy',           cat:'people',       w:600, h:700  },
  { id:131, src:'https://picsum.photos/seed/nat131/700/500',   title:'Crimson Gorge',        cat:'nature',       w:700, h:500  },
  { id:132, src:'https://picsum.photos/seed/arc132/600/800',   title:'Concrete Geometry',    cat:'architecture', w:600, h:800  },
  { id:133, src:'https://picsum.photos/seed/urb133/700/500',   title:'Street Alchemy',       cat:'urban',        w:700, h:500  },
  { id:134, src:'https://picsum.photos/seed/abs134/600/600',   title:'Melted Bronze',        cat:'abstract',     w:600, h:600  },
  { id:135, src:'https://picsum.photos/seed/ppl135/600/800',   title:'Silent Gaze',          cat:'people',       w:600, h:800  },
  { id:136, src:'https://picsum.photos/seed/nat136/700/550',   title:'Emerald Veil',         cat:'nature',       w:700, h:550  },
  { id:137, src:'https://picsum.photos/seed/arc137/600/700',   title:'Vitrine Mirage',       cat:'architecture', w:600, h:700  },
  { id:138, src:'https://picsum.photos/seed/urb138/700/500',   title:'Motion Streak',        cat:'urban',        w:700, h:500  },
  { id:139, src:'https://picsum.photos/seed/abs139/600/650',   title:'Resonance Chamber',    cat:'abstract',     w:600, h:650  },
  { id:140, src:'https://picsum.photos/seed/ppl140/600/700',   title:'Dusk Travelers',       cat:'people',       w:600, h:700  },
  { id:141, src:'https://picsum.photos/seed/nat141/700/500',   title:'Alpenglow Peak',       cat:'nature',       w:700, h:500  },
  { id:142, src:'https://picsum.photos/seed/arc142/600/800',   title:'Lithic Path',          cat:'architecture', w:600, h:800  },
  { id:143, src:'https://picsum.photos/seed/urb143/700/500',   title:'Mirror City',          cat:'urban',        w:700, h:500  },
  { id:144, src:'https://picsum.photos/seed/abs144/600/600',   title:'Static Echo',          cat:'abstract',     w:600, h:600  },
  { id:145, src:'https://picsum.photos/seed/ppl145/600/800',   title:'Harmonic Soul',        cat:'people',       w:600, h:800  },
  { id:146, src:'https://picsum.photos/seed/nat146/700/550',   title:'Silvered Mist',        cat:'nature',       w:700, h:550  },
  { id:147, src:'https://picsum.photos/seed/arc147/600/700',   title:'Modernist Archive',    cat:'architecture', w:600, h:700  },
  { id:148, src:'https://picsum.photos/seed/urb148/700/500',   title:'Neon Diner',           cat:'urban',        w:700, h:500  },
  { id:149, src:'https://picsum.photos/seed/abs149/600/650',   title:'Chromatic Abyss',      cat:'abstract',     w:600, h:650  },
  { id:150, src:'https://picsum.photos/seed/ppl150/600/700',   title:'Merchant Story',       cat:'people',       w:600, h:700  },
  { id:151, src:'https://picsum.photos/seed/nat151/700/500',   title:'Sands of Time',        cat:'nature',       w:700, h:500  },
  { id:152, src:'https://picsum.photos/seed/arc152/600/800',   title:'Steel Skeleton',       cat:'architecture', w:600, h:800  },
  { id:153, src:'https://picsum.photos/seed/urb153/700/500',   title:'Subterranean Flow',    cat:'urban',        w:700, h:500  },
  { id:154, src:'https://picsum.photos/seed/abs154/600/600',   title:'Luminous Aura',        cat:'abstract',     w:600, h:600  },
  { id:155, src:'https://picsum.photos/seed/ppl155/600/800',   title:'The Chronologist',     cat:'people',       w:600, h:800  },
  { id:156, src:'https://picsum.photos/seed/nat156/700/550',   title:'Tempest Breath',       cat:'nature',       w:700, h:550  },
  { id:157, src:'https://picsum.photos/seed/arc157/600/700',   title:'Parian Vault',         cat:'architecture', w:600, h:700  },
  { id:158, src:'https://picsum.photos/seed/urb158/700/500',   title:'Petrichor Glow',       cat:'urban',        w:700, h:500  },
  { id:159, src:'https://picsum.photos/seed/abs159/600/650',   title:'Parallel Voids',       cat:'abstract',     w:600, h:650  },
  { id:160, src:'https://picsum.photos/seed/ppl160/600/700',   title:'Vibrant Gathering',    cat:'people',       w:600, h:700  },
  { id:161, src:'https://picsum.photos/seed/nat161/700/500',   title:'Azure Cove',           cat:'nature',       w:700, h:500  },
  { id:162, src:'https://picsum.photos/seed/arc162/600/800',   title:'Copper Zenith',        cat:'architecture', w:600, h:800  },
  { id:163, src:'https://picsum.photos/seed/urb163/700/500',   title:'Amber Transit',        cat:'urban',        w:700, h:500  },
  { id:164, src:'https://picsum.photos/seed/abs164/600/600',   title:'Binary Mirage',        cat:'abstract',     w:600, h:600  },
  { id:165, src:'https://picsum.photos/seed/ppl165/600/800',   title:'The Cultivator',       cat:'people',       w:600, h:800  },
  { id:166, src:'https://picsum.photos/seed/nat166/700/550',   title:'Boreal Frost',         cat:'nature',       w:700, h:550  },
  { id:167, src:'https://picsum.photos/seed/arc167/600/700',   title:'Glass Helix',          cat:'architecture', w:600, h:700  },
  { id:168, src:'https://picsum.photos/seed/urb168/700/500',   title:'Corner Relic',         cat:'urban',        w:700, h:500  },
  { id:169, src:'https://picsum.photos/seed/abs169/600/650',   title:'Cobalt Shards',        cat:'abstract',     w:600, h:650  },
  { id:170, src:'https://picsum.photos/seed/ppl170/600/700',   title:'Waiting Pulse',        cat:'people',       w:600, h:700  },
  { id:171, src:'https://picsum.photos/seed/nat171/700/500',   title:'Russet Stream',        cat:'nature',       w:700, h:500  },
  { id:172, src:'https://picsum.photos/seed/arc172/600/800',   title:'Curvature Haze',       cat:'architecture', w:600, h:800  },
  { id:173, src:'https://picsum.photos/seed/urb173/700/500',   title:'Civic Heart',          cat:'urban',        w:700, h:500  },
  { id:174, src:'https://picsum.photos/seed/abs174/600/600',   title:'Onyx Flow',            cat:'abstract',     w:600, h:600  },
  { id:175, src:'https://picsum.photos/seed/ppl175/600/800',   title:'Youthful Spark',       cat:'people',       w:600, h:800  },
  { id:176, src:'https://picsum.photos/seed/nat176/700/550',   title:'Shattered Sky',        cat:'nature',       w:700, h:550  },
  { id:177, src:'https://picsum.photos/seed/arc177/600/700',   title:'Winged Modernism',     cat:'architecture', w:600, h:700  },
  { id:178, src:'https://picsum.photos/seed/urb178/700/500',   title:'Shadowed Pass',        cat:'urban',        w:700, h:500  },
  { id:179, src:'https://picsum.photos/seed/abs179/600/650',   title:'Phantom Shift',        cat:'abstract',     w:600, h:650  },
  { id:180, src:'https://picsum.photos/seed/ppl180/600/700',   title:'Resonant Smile',       cat:'people',       w:600, h:700  },
  { id:181, src:'https://picsum.photos/seed/nat181/700/500',   title:'Lithic Ridge',         cat:'nature',       w:700, h:500  },
  { id:182, src:'https://picsum.photos/seed/arc182/600/800',   title:'Suspended Glass',      cat:'architecture', w:600, h:800  },
  { id:183, src:'https://picsum.photos/seed/urb183/700/500',   title:'Stellar Skyline',      cat:'urban',        w:700, h:500  },
  { id:184, src:'https://picsum.photos/seed/abs184/600/600',   title:'Geometric Soul',       cat:'abstract',     w:600, h:600  },
  { id:185, src:'https://picsum.photos/seed/ppl185/600/800',   title:'The Form-Giver',       cat:'people',       w:600, h:800  },
  { id:186, src:'https://picsum.photos/seed/nat186/700/550',   title:'Dark Grotto',          cat:'nature',       w:700, h:550  },
  { id:187, src:'https://picsum.photos/seed/arc187/600/700',   title:'Grooved Monolith',     cat:'architecture', w:600, h:700  },
  { id:188, src:'https://picsum.photos/seed/urb188/700/500',   title:'Alley Contours',       cat:'urban',        w:700, h:500  },
  { id:189, src:'https://picsum.photos/seed/abs189/600/650',   title:'Celestial Pulse',      cat:'abstract',     w:600, h:650  },
  { id:190, src:'https://picsum.photos/seed/ppl190/600/700',   title:'Metropolitan Pulse',   cat:'people',       w:600, h:700  },
  { id:191, src:'https://picsum.photos/seed/nat191/700/500',   title:'Rugged Solitude',      cat:'nature',       w:700, h:500  },
  { id:192, src:'https://picsum.photos/seed/arc192/600/800',   title:'Brutalist Pillar',     cat:'architecture', w:600, h:800  },
  { id:193, src:'https://picsum.photos/seed/urb193/700/500',   title:'Gilded Junction',      cat:'urban',        w:700, h:500  },
  { id:194, src:'https://picsum.photos/seed/abs194/600/600',   title:'Noetic Drift',         cat:'abstract',     w:600, h:600  },
  { id:195, src:'https://picsum.photos/seed/ppl195/600/800',   title:'Quiet Watcher',        cat:'people',       w:600, h:800  },
  { id:196, src:'https://picsum.photos/seed/nat196/700/550',   title:'Pristine Dew',         cat:'nature',       w:700, h:550  },
  { id:197, src:'https://picsum.photos/seed/arc197/600/700',   title:'Contemporary Arch',    cat:'architecture', w:600, h:700  },
  { id:198, src:'https://picsum.photos/seed/urb198/700/500',   title:'Violet Hour',          cat:'urban',        w:700, h:500  },
  { id:199, src:'https://picsum.photos/seed/abs199/600/650',   title:'Spectral Flow',        cat:'abstract',     w:600, h:650  },
  { id:200, src:'https://picsum.photos/seed/ppl200/600/700',   title:'The Curator',          cat:'people',       w:600, h:700  },
  { id:201, src:'https://picsum.photos/seed/nat201/700/500',   title:'Obsidian Peak',        cat:'nature',       w:700, h:500  },
  { id:202, src:'https://picsum.photos/seed/arc202/600/800',   title:'Brutalist Ribs',       cat:'architecture', w:600, h:800  },
  { id:203, src:'https://picsum.photos/seed/urb203/700/500',   title:'Neon Arteries',        cat:'urban',        w:700, h:500  },
  { id:204, src:'https://picsum.photos/seed/abs204/600/600',   title:'Static Flux',          cat:'abstract',     w:600, h:600  },
  { id:205, src:'https://picsum.photos/seed/ppl205/600/800',   title:'The Artisan',          cat:'people',       w:600, h:800  },
  { id:206, src:'https://picsum.photos/seed/nat206/700/550',   title:'Verdant Mist',         cat:'nature',       w:700, h:550  },
  { id:207, src:'https://picsum.photos/seed/arc207/600/700',   title:'Glass Spire',          cat:'architecture', w:600, h:700  },
  { id:208, src:'https://picsum.photos/seed/urb208/700/500',   title:'Steel Pulse',          cat:'urban',        w:700, h:500  },
  { id:209, src:'https://picsum.photos/seed/abs209/600/650',   title:'Binaric Shift',        cat:'abstract',     w:600, h:650  },
  { id:210, src:'https://picsum.photos/seed/ppl210/600/700',   title:'Silent Observer',      cat:'people',       w:600, h:700  },
  { id:211, src:'https://picsum.photos/seed/nat211/700/500',   title:'Glacial Echo',         cat:'nature',       w:700, h:500  },
  { id:212, src:'https://picsum.photos/seed/arc212/600/800',   title:'Steel Sinew',          cat:'architecture', w:600, h:800  },
  { id:213, src:'https://picsum.photos/seed/urb213/700/500',   title:'Concrete Jungle',      cat:'urban',        w:700, h:500  },
  { id:214, src:'https://picsum.photos/seed/abs214/600/600',   title:'Prismatic Void',       cat:'abstract',     w:600, h:600  },
  { id:215, src:'https://picsum.photos/seed/ppl215/600/800',   title:'Street Soul',          cat:'people',       w:600, h:800  },
  { id:216, src:'https://picsum.photos/seed/nat216/700/550',   title:'Solar Flare',          cat:'nature',       w:700, h:550  },
  { id:217, src:'https://picsum.photos/seed/arc217/600/700',   title:'Doric Shadow',         cat:'architecture', w:600, h:700  },
  { id:218, src:'https://picsum.photos/seed/urb218/700/500',   title:'Asphalt Veins',        cat:'urban',        w:700, h:500  },
  { id:219, src:'https://picsum.photos/seed/abs219/600/650',   title:'Kinetic Static',       cat:'abstract',     w:600, h:650  },
  { id:220, src:'https://picsum.photos/seed/ppl220/600/700',   title:'The Thinker',          cat:'people',       w:600, h:700  },
  { id:221, src:'https://picsum.photos/seed/nat221/700/500',   title:'Crimson Tide',         cat:'nature',       w:700, h:500  },
  { id:222, src:'https://picsum.photos/seed/arc222/600/800',   title:'Modernist Shell',      cat:'architecture', w:600, h:800  },
  { id:223, src:'https://picsum.photos/seed/urb223/700/500',   title:'Twilight Transit',     cat:'urban',        w:700, h:500  },
  { id:224, src:'https://picsum.photos/seed/abs224/600/600',   title:'Liquid Neon',          cat:'abstract',     w:600, h:600  },
  { id:225, src:'https://picsum.photos/seed/ppl225/600/800',   title:'Quiet Strength',       cat:'people',       w:600, h:800  },
  { id:226, src:'https://picsum.photos/seed/nat226/700/550',   title:'Amber Grove',          cat:'nature',       w:700, h:550  },
  { id:227, src:'https://picsum.photos/seed/arc227/600/700',   title:'Lithic Arch',          cat:'architecture', w:600, h:700  },
  { id:228, src:'https://picsum.photos/seed/urb228/700/500',   title:'Metro Glow',           cat:'urban',        w:700, h:500  },
  { id:229, src:'https://picsum.photos/seed/abs229/600/650',   title:'Vector Heart',         cat:'abstract',     w:600, h:650  },
  { id:230, src:'https://picsum.photos/seed/ppl230/600/700',   title:'Bazaar Spirit',        cat:'people',       w:600, h:700  },
  { id:231, src:'https://picsum.photos/seed/nat231/700/500',   title:'Primal Shore',         cat:'nature',       w:700, h:500  },
  { id:232, src:'https://picsum.photos/seed/arc232/600/800',   title:'Curvilinear Void',     cat:'architecture', w:600, h:800  },
  { id:233, src:'https://picsum.photos/seed/urb233/700/500',   title:'Alleyway Soul',        cat:'urban',        w:700, h:500  },
  { id:234, src:'https://picsum.photos/seed/abs234/600/600',   title:'Digital Bloom',        cat:'abstract',     w:600, h:600  },
  { id:235, src:'https://picsum.photos/seed/ppl235/600/800',   title:'The Dreamer',          cat:'people',       w:600, h:800  },
  { id:236, src:'https://picsum.photos/seed/nat236/700/550',   title:'Arctic Silence',       cat:'nature',       w:700, h:550  },
  { id:237, src:'https://picsum.photos/seed/arc237/600/700',   title:'Iron Skeleton',        cat:'architecture', w:600, h:700  },
  { id:238, src:'https://picsum.photos/seed/urb238/700/500',   title:'Skyscraper Gaze',      cat:'urban',        w:700, h:500  },
  { id:239, src:'https://picsum.photos/seed/abs239/600/650',   title:'Fractured Flow',       cat:'abstract',     w:600, h:650  },
  { id:240, src:'https://picsum.photos/seed/ppl240/600/700',   title:'Steel Worker',         cat:'people',       w:600, h:700  },
  { id:241, src:'https://picsum.photos/seed/nat241/700/550',   title:'Emerald Abyss',        cat:'nature',       w:700, h:550  },
  { id:242, src:'https://picsum.photos/seed/arc242/600/800',   title:'Marble Breath',        cat:'architecture', w:600, h:800  },
  { id:243, src:'https://picsum.photos/seed/urb243/700/500',   title:'Crosswalk Rhythm',     cat:'urban',        w:700, h:500  },
  { id:244, src:'https://picsum.photos/seed/abs244/600/600',   title:'Neural Mesh',          cat:'abstract',     w:600, h:600  },
  { id:245, src:'https://picsum.photos/seed/ppl245/600/800',   title:'Urban Nomad',          cat:'people',       w:600, h:800  },
  { id:246, src:'https://picsum.photos/seed/nat246/700/550',   title:'Shadowed Vale',        cat:'nature',       w:700, h:550  },
  { id:247, src:'https://picsum.photos/seed/arc247/600/700',   title:'Tectonic Form',        cat:'architecture', w:600, h:700  },
  { id:248, src:'https://picsum.photos/seed/urb248/700/500',   title:'Urban Vapor',          cat:'urban',        w:700, h:500  },
  { id:249, src:'https://picsum.photos/seed/abs249/600/650',   title:'Spectral Grain',       cat:'abstract',     w:600, h:650  },
  { id:250, src:'https://picsum.photos/seed/ppl250/600/700',   title:'The Storyteller',      cat:'people',       w:600, h:700  },
  { id:251, src:'https://picsum.photos/seed/nat251/700/500',   title:'Lunar Tide',           cat:'nature',       w:700, h:500  },
  { id:252, src:'https://picsum.photos/seed/arc252/600/800',   title:'Geometric Pulse',      cat:'architecture', w:600, h:800  },
  { id:253, src:'https://picsum.photos/seed/urb253/700/500',   title:'Midnight Transit',     cat:'urban',        w:700, h:500  },
  { id:254, src:'https://picsum.photos/seed/abs254/600/600',   title:'Electric Breath',      cat:'abstract',     w:600, h:600  },
  { id:255, src:'https://picsum.photos/seed/ppl255/600/800',   title:'Market Wisdom',        cat:'people',       w:600, h:800  },
  { id:256, src:'https://picsum.photos/seed/nat256/700/550',   title:'Solar Whisper',        cat:'nature',       w:700, h:550  },
  { id:257, src:'https://picsum.photos/seed/arc257/600/700',   title:'Vertical Silence',     cat:'architecture', w:600, h:700  },
  { id:258, src:'https://picsum.photos/seed/urb258/700/500',   title:'Gilded Street',        cat:'urban',        w:700, h:500  },
  { id:259, src:'https://picsum.photos/seed/abs259/600/650',   title:'Chrome Drift',         cat:'abstract',     w:600, h:650  },
  { id:260, src:'https://picsum.photos/seed/ppl260/600/700',   title:'The Visionary',        cat:'people',       w:600, h:700  },
  { id:261, src:'https://picsum.photos/seed/nat261/700/500',   title:'Frozen Pulse',         cat:'nature',       w:700, h:500  },
  { id:262, src:'https://picsum.photos/seed/arc262/600/800',   title:'Brutalist Echo',       cat:'architecture', w:600, h:800  },
  { id:263, src:'https://picsum.photos/seed/urb263/700/500',   title:'Iron Horizon',         cat:'urban',        w:700, h:500  },
  { id:264, src:'https://picsum.photos/seed/abs264/600/600',   title:'Quantum Pulse',        cat:'abstract',     w:600, h:600  },
];

/* ─── STATE ─── */
let activeFilter = 'all';
let currentIndex = 0;
let activeFilter_lb = 'none';
let filteredImages = [...images];
let itemsPerPage = 24;
let displayedCount = 0;

/* ─── HELPERS ─── */
function getThumb(src, w, h) {
  // Reduces dimensions by 50% for grid thumbnails
  return src.replace(`/${w}/${h}`, `/${Math.round(w/2)}/${Math.round(h/2)}`);
}

function getMicroThumb(src, w, h) {
  // Very small for lightbox strip
  return src.replace(`/${w}/${h}`, `/80/60`);
}

/* ─── BUILD GALLERY ─── */
const gallery = document.getElementById('gallery');
const countDisplay = document.getElementById('count-display');

// Create sentinel for infinite scroll
const sentinel = document.createElement('div');
sentinel.id = 'gallery-sentinel';
sentinel.style.height = '100px';
document.querySelector('.gallery-wrap').appendChild(sentinel);

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && displayedCount < filteredImages.length) {
    renderNextBatch();
  }
}, { rootMargin: '400px' });

function buildGallery() {
  gallery.innerHTML = '';
  displayedCount = 0;
  filteredImages = activeFilter === 'all'
    ? [...images]
    : images.filter(img => img.cat === activeFilter);

  countDisplay.textContent = `${filteredImages.length} PHOTOGRAPHS`;
  
  renderNextBatch();
  observer.observe(sentinel);
}

function renderNextBatch() {
  const start = displayedCount;
  const end = Math.min(start + itemsPerPage, filteredImages.length);
  
  if (start >= filteredImages.length) {
    sentinel.style.display = 'none';
    return;
  }

  for (let i = start; i < end; i++) {
    const img = filteredImages[i];
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    // Smooth stagger for batch entry
    const localIdx = i - start;
    item.style.animationDelay = `${localIdx * 0.05}s`;
    
    item.innerHTML = `
      <img src="${getThumb(img.src, img.w, img.h)}" alt="${img.title}" onload="this.classList.add('loaded')" />
      <div class="item-overlay">
        <div class="item-cat">${img.cat}</div>
        <div class="item-title">${img.title}</div>
      </div>
      <div class="item-expand">
        <svg viewBox="0 0 24 24" stroke-width="2">
          <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
          <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
        </svg>
      </div>`;
    
    // Fallback for cached images
    const imgElement = item.querySelector('img');
    if (imgElement.complete) {
      imgElement.classList.add('loaded');
    }

    item.addEventListener('click', () => openLightbox(i));
    gallery.appendChild(item);
  }
  
  displayedCount = end;
  if (displayedCount >= filteredImages.length) {
    observer.unobserve(sentinel);
    sentinel.style.display = 'none';
  } else {
    sentinel.style.display = 'flex';
  }
}

/* ─── CATEGORY FILTER ─── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    window.scrollTo({ top: gallery.offsetTop - 150, behavior: 'smooth' });
    buildGallery();
  });
});

/* ─── HERO LINKS ─── */
document.querySelectorAll('.hero-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (filterBtn) {
      filterBtn.click();
    }
  });
});

/* ─── LIGHTBOX ─── */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbTitle  = document.getElementById('lb-title');
const lbMeta   = document.getElementById('lb-meta');
const lbCounter = document.getElementById('lb-counter');
const lbThumbs = document.getElementById('lb-thumbs');

function openLightbox(idx) {
  currentIndex = idx;
  buildThumbs();
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox(switching = false) {
  const img = filteredImages[currentIndex];
  if (switching) {
    lbImg.classList.add('switching');
    setTimeout(() => {
      lbImg.src = img.src;
      lbImg.alt = img.title;
      lbImg.classList.remove('switching');
      applyLbFilter(activeFilter_lb);
    }, 220);
  } else {
    lbImg.src = img.src;
    lbImg.alt = img.title;
    applyLbFilter(activeFilter_lb);
  }
  lbTitle.textContent = img.title;
  lbMeta.textContent = img.cat.toUpperCase();
  lbCounter.textContent = `${currentIndex + 1} / ${filteredImages.length}`;
  updateThumbActive();
}

function buildThumbs() {
  lbThumbs.innerHTML = '';
  // Optimization: Only render thumbnails in chunks or use a more efficient way
  // For 264 images, we'll render all but use micro-thumbnails to save bandwidth
  const fragment = document.createDocumentFragment();
  filteredImages.forEach((img, idx) => {
    const t = document.createElement('img');
    t.src = getMicroThumb(img.src, img.w, img.h);
    t.alt = img.title;
    t.loading = "lazy";
    t.className = 'lb-thumb' + (idx === currentIndex ? ' active' : '');
    t.addEventListener('click', () => {
      if (idx === currentIndex) return;
      currentIndex = idx;
      renderLightbox(true);
    });
    fragment.appendChild(t);
  });
  lbThumbs.appendChild(fragment);
}

function updateThumbActive() {
  const thumbs = lbThumbs.querySelectorAll('.lb-thumb');
  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === currentIndex);
  });
  // scroll into view
  const active = lbThumbs.querySelector('.lb-thumb.active');
  if (active) active.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
}

function navigate(dir) {
  currentIndex = (currentIndex + dir + filteredImages.length) % filteredImages.length;
  renderLightbox(true);
}

function applyLbFilter(f) {
  lbImg.style.filter = f === 'none' ? '' : f;
}

// CSS filter buttons
document.querySelectorAll('.lbf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lbf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter_lb = btn.dataset.cssFilter;
    applyLbFilter(activeFilter_lb);
  });
});

document.getElementById('lb-prev').addEventListener('click', () => navigate(-1));
document.getElementById('lb-next').addEventListener('click', () => navigate(1));
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-backdrop').addEventListener('click', closeLightbox);

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  navigate(-1);
  if (e.key === 'ArrowRight') navigate(1);
  if (e.key === 'Escape')     closeLightbox();
});

// Touch swipe
let touchStart = 0;
lightbox.addEventListener('touchstart', e => touchStart = e.touches[0].clientX);
lightbox.addEventListener('touchend',   e => {
  const diff = touchStart - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
});

/* ─── INIT ─── */
buildGallery();
