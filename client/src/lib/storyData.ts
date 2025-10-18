export interface Choice {
  text: string;
  next: string;
  chapter?: string;
}

export interface Stage {
  text: string;
  image: string;
  scene: { type: string };
  sound?: string;
  choices: Choice[];
}

export interface Chapter {
  title: string;
  startStage: string;
  stages: { [key: string]: Stage };
}

export const storyData: { [key: string]: Chapter } = {
  // --- Original Chapters 1-3 ---
  chapter1: {
    title: "Ahom Valor",
    startStage: "intro",
    stages: {
      intro: {
        text: "You drift through time to the 17th century. The Ahom Kingdom is at its peak, but the shadow of the Mughal Empire looms. You find yourself in the war council of King Chakradhwaj Singha. A young commander, Lachit Borphukan, awaits his moment.",
        image: "https://placehold.co/600x300/5a3d34/ffffff?text=Lachit+Borphukan",
        scene: { type: "ahom" },
        sound: "war_horn",
        choices: [{ text: "Observe the council", next: "council" }],
      },
      council: {
        text: "The King is furious over the Mughal occupation of Guwahati. 'How can my people thrive under foreign rule?' he roars. He needs a commander who can lead their forces. Who should he choose?",
        image: "https://placehold.co/600x300/784d3f/ffffff?text=The+Royal+Court",
        scene: { type: "ahom" },
        choices: [
          {
            text: "Advise him to trust the fiery passion of Lachit.",
            next: "lachit_chosen",
          },
          {
            text: "Suggest a more experienced, cautious general.",
            next: "cautious_general",
          },
        ],
      },
      lachit_chosen: {
        text: "The King sees the fire in Lachit's eyes and appoints him Borphukan, the commander-in-chief. Lachit's preparation for the Battle of Saraighat begins. His leadership is inspiring, uniting the kingdom.",
        image:
          "https://placehold.co/600x300/8b5d4a/ffffff?text=Battle+of+Saraighat",
        scene: { type: "ahom" },
        sound: "success",
        choices: [
          { text: "Witness the battle strategy", next: "battle_strategy" },
        ],
      },
      battle_strategy: {
        text: "As the Battle of Saraighat unfolds, Lachit faces a critical decision. The Mughal navy approaches with overwhelming force. Should he engage them in open water or use the narrow channels of the Brahmaputra to his advantage?",
        image:
          "https://placehold.co/600x300/6b4d3a/ffffff?text=The+Strategic+Choice",
        scene: { type: "ahom" },
        choices: [
          {
            text: "Use the narrow channels strategically",
            next: "narrow_victory",
          },
          {
            text: "Face them in open water with courage",
            next: "open_battle",
          },
        ],
      },
      narrow_victory: {
        text: "Lachit's brilliant use of terrain proves decisive. The Mughal fleet becomes disorganized in the narrow channels, and the Ahom forces achieve a legendary victory. This moment becomes immortalized in history as one of the greatest naval victories ever fought on Indian rivers.",
        image:
          "https://placehold.co/600x300/8b5d4a/ffffff?text=Historic+Victory",
        scene: { type: "ahom" },
        sound: "success",
        choices: [
          { text: "Journey to the next era", next: "intro", chapter: "chapter2" },
        ],
      },
      open_battle: {
        text: "Though courageous, the open water battle proves costly. The Ahom forces take heavy casualties but eventually prevail through sheer determination. Victory is won, but at a great price that could have been avoided with better strategy.",
        image:
          "https://placehold.co/600x300/7b4d3a/c0c0c0?text=Costly+Victory",
        scene: { type: "ahom" },
        sound: "war_horn",
        choices: [
          {
            text: "Reflect and move forward",
            next: "intro",
            chapter: "chapter2",
          },
        ],
      },
      cautious_general: {
        text: "The cautious general fails to inspire the troops. Disunity spreads, and the Ahom forces are unable to reclaim their territory. A pivotal moment is lost. Your thread unravels... but the tapestry of time allows you to weave again.",
        image:
          "https://placehold.co/600x300/4a3d34/c7c7c7?text=A+Lost+Opportunity",
        scene: { type: "ahom" },
        choices: [{ text: "Retry the choice", next: "council" }],
      },
    },
  },
  chapter2: {
    title: "The Maestro's Melody",
    startStage: "intro",
    stages: {
      intro: {
        text: "You arrive in the 20th century. The air is thick with artistic fervor and a quest for identity. You see a young man with a powerful voice and a pen that flows like the Brahmaputra itself: Bhupen Hazarika.",
        image:
          "https://placehold.co/600x300/1d3a58/ffffff?text=Bhupen+Hazarika",
        scene: { type: "maestro" },
        sound: "melody_note",
        choices: [{ text: "Listen to his music", next: "music" }],
      },
      music: {
        text: "Bhupen Hazarika's songs speak of unity, love, and the struggles of the common person. He has an opportunity to take his music to a global stage, but some fear it will dilute its Assamese soul. What should he do?",
        image:
          "https://placehold.co/600x300/2e4a6c/ffffff?text=The+Global+Stage",
        scene: { type: "maestro" },
        choices: [
          {
            text: "Encourage him to share Assam's voice with the world.",
            next: "global_voice",
          },
          {
            text: "Advise him to focus only on his regional audience.",
            next: "regional_focus",
          },
        ],
      },
      global_voice: {
        text: "He travels the world, becoming a cultural ambassador. His song 'Bistirno Parore' becomes a global anthem for humanism. He proves that a voice from the Brahmaputra valley can resonate in every corner of the earth.",
        image:
          "https://placehold.co/600x300/4a6c8c/ffffff?text=A+Voice+for+the+World",
        scene: { type: "maestro" },
        sound: "melody_note",
        choices: [
          {
            text: "Experience his final performance",
            next: "final_performance",
          },
        ],
      },
      final_performance: {
        text: "Years later, in one of his final concerts, Bhupen stands before thousands. His voice still powerful, his message timeless. As he sings 'Manuhe Manuhor Babe', tears flow freely. His legacy is secure—he has become the eternal voice of Assam and beyond.",
        image:
          "https.placehold.co/600x300/5a7c9c/ffffff?text=The+Eternal+Voice",
        scene: { type: "maestro" },
        sound: "success",
        choices: [
          { text: "Follow the next echo", next: "intro", chapter: "chapter3" },
        ],
      },
      regional_focus: {
        text: "He remains a beloved regional icon, but the world never fully experiences the depth of his artistry. His influence is immense, but a chance to build a global bridge is missed. The tapestry has a muted thread.",
        image:
          "https.placehold.co/600x300/1d2a38/c7c7c7?text=A+Regional+Treasure",
        scene: { type: "maestro" },
        choices: [{ text: "Retry the choice", next: "music" }],
      },
    },
  },
  chapter3: {
    title: "The Modern Heartbeat",
    startStage: "intro",
    stages: {
      intro: {
        text: "The timeline shifts to the vibrant, chaotic present. On a brightly lit stage, a man with a guitar and a rebellious spirit captures the heart of the youth. It is Zubeen Garg, a modern-day icon.",
        image: "https://placehold.co/600x300/111827/ffffff?text=Zubeen+Garg",
        scene: { type: "modern" },
        sound: "modern_beat",
        choices: [{ text: "Feel the energy of the crowd", next: "concert" }],
      },
      concert: {
        text: "Zubeen is known for his versatile music, blending folk with rock, but also for his outspoken nature. A producer offers him a massive commercial project that could compromise his artistic freedom. What path should he take?",
        image:
          "https://placehold.co/600x300/1f2937/ffffff?text=The+Crossroads",
        scene: { type: "modern" },
        choices: [
          {
            text: "Stay true to his independent spirit.",
            next: "independent_spirit",
          },
          {
            text: "Take the commercial route for wider reach.",
            next: "commercial_route",
          },
        ],
      },
      independent_spirit: {
        text: "He rejects the offer, continuing to produce music that is raw, honest, and deeply connected to his roots. He remains a powerful, independent voice, proving that success doesn't require compromise. His legacy as 'Zubeen Da' is cemented.",
        image:
          "https://placehold.co/600x300/374151/ffffff?text=An+Independent+Icon",
        scene: { type: "modern" },
        sound: "modern_beat",
        choices: [{ text: "Witness his impact", next: "cultural_impact" }],
      },
      cultural_impact: {
        text: "Zubeen's independence inspires a new generation of artists. They see that staying true to one's roots can be more powerful than chasing fame. The Assamese music scene flourishes with authentic voices, each carrying forward the torch of cultural pride he helped light.",
        image:
          "https://placehold.co/600x300/475161/ffffff?text=A+New+Generation",
        scene: { type: "modern" },
        sound: "success",
        choices: [
          {
            text: "Journey to the next echo",
            next: "intro",
            chapter: "chapter4",
          },
        ],
      },
      commercial_route: {
        text: "He accepts the deal. His popularity soars, but his core fans feel a disconnect. His music becomes polished but loses some of its edge. A legend is made, but a rebel's fire is tamed. The echo feels faint.",
        image:
          "https://placehold.co/600x300/1f2937/c7c7c7?text=The+Price+of+Fame",
        scene: { type: "modern" },
        choices: [{ text: "Retry the choice", next: "concert" }],
      },
    },
  },
  // --- Original Chapter 4 (Now links to Chapter 5) ---
  chapter4: {
    title: "The Future's Echo",
    startStage: "intro",
    stages: {
      intro: {
        text: "Your final jump lands you in the lush greenery of Kaziranga. A young conservationist is preparing a drone, her eyes scanning the grasslands. The future of the one-horned rhino rests on a blend of ancient dedication and modern technology.",
        image: "https://placehold.co/600x300/224b37/ffffff?text=Kaziranga+Rhino",
        scene: { type: "future" },
        sound: "drone_hum",
        choices: [{ text: "Ask about her mission", next: "drone_mission" }],
      },
      drone_mission: {
        text: "She explains the drone provides real-time monitoring. Suddenly, an alert flashes: a suspected poacher signal near the western range. At the same moment, a ranger calls in an injured rhino calf spotted near the eastern wetlands. You can only direct the drone to one.",
        image:
          "https://placehold.co/600x300/3a5a40/ffffff?text=A+Difficult+Choice",
        scene: { type: "future" },
        choices: [
          { text: "Prioritize the poacher threat.", next: "poacher_chase" },
          { text: "Prioritize the injured calf.", next: "calf_rescue" },
        ],
      },
      poacher_chase: {
        text: "You guide the drone, relaying coordinates to the ranger teams. They move in swiftly, apprehending the poachers. You've helped disrupt a network and protect the future of this magnificent species.",
        image:
          "https://placehold.co/600x300/4e6a50/ffffff?text=Threat+Neutralized",
        scene: { type: "future" },
        sound: "success",
        choices: [
          { text: "See the future you've secured", next: "legacy_secured" },
        ],
      },
      calf_rescue: {
        text: "You rush the drone to the calf's location. The vet team arrives and treats its minor injury. The calf is safe. However, by the time you check the poacher signal, the trail has gone cold. A life was saved, but a threat remains at large.",
        image: "https://placehold.co/600x300/5a7a60/ffffff?text=Calf+Saved",
        scene: { type: "future" },
        choices: [
          { text: "Reflect on the difficult choice", next: "legacy_secured" },
        ],
      },
      legacy_secured: {
        text: "Your journey through Assam's timeline is complete... or is it? You feel another pull, a thread from the 19th century. The smell of tea leaves fills the air.",
        image:
          "https://placehold.co/600x300/2a3a30/ffffff?text=The+Tapestry+Continues",
        scene: { type: "future" },
        // --- THIS CHOICE IS UPDATED to link to chapter5 ---
        choices: [
          {
            text: "Follow the scent of tea",
            next: "intro",
            chapter: "chapter5",
          },
        ],
      },
    },
  },
  // --- 10 NEW CHAPTERS ---
  chapter5: {
    title: "The Tea Planter's Dilemma",
    startStage: "intro",
    stages: {
      intro: {
        text: "You are in 1840s Assam. A British planter, Robert Bruce, has just discovered native tea. He needs to establish a garden. The land is wild, and the work is hard. He asks for your advice on labor.",
        image:
          "https://placehold.co/600x300/3a5a40/ffffff?text=Early+Tea+Garden",
        scene: { type: "tea" },
        sound: "jungle_ambience",
        choices: [{ text: "Assess the situation", next: "labor_choice" }],
      },
      labor_choice: {
        text: "Robert is struggling to find local laborers, who are self-sufficient. An agent suggests 'indentured labor' from Central India, a system rife with exploitation. What do you advise?",
        image: "https://placehold.co/600x300/4a3d34/ffffff?text=The+Planter's+Desk",
        scene: { type: "tea" },
        choices: [
          {
            text: "Warn him against the exploitative system.",
            next: "ethical_path",
          },
          {
            text: "Suggest it's the 'only way' to build the industry.",
            next: "industrial_path",
          },
        ],
      },
      ethical_path: {
        text: "You convince him to offer fair wages and better conditions to local tribes. Progress is slow, but a foundation of respect is built. The Assam Tea industry starts on a more equitable, though difficult, path.",
        image:
          "https://placehold.co/600x300/4e6a50/ffffff?text=A+Fair+Start",
        scene: { type: "tea" },
        sound: "success",
        choices: [
          { text: "See the result", next: "legacy" },
        ],
      },
      industrial_path: {
        text: "The agent brings in thousands of 'coolies'. The gardens flourish, and Assam Tea becomes world-famous. But this success is built on the suffering and exploitation of generations, a dark stain on the industry's history.",
        image:
          "https://placehold.co/600x300/5a3d34/c7c7c7?text=A+Dark+Legacy",
        scene: { type: "tea" },
        choices: [
          { text: "See the result", next: "legacy" },
        ],
      },
      legacy: {
        text: "The tea gardens transformed Assam's landscape and economy forever. As you sip a cup of the finest brew, you sense a new disturbance—the smell of kerosene and the rumble of machinery.",
        image: "https://placehold.co/600x300/6b4d3a/ffffff?text=First+Assam+Tea",
        scene: { type: "tea" },
        choices: [
          { text: "Follow the rumble", next: "intro", chapter: "chapter6" },
        ],
      },
    },
  },
  chapter6: {
    title: "The Digboi Oil Rush",
    startStage: "intro",
    stages: {
      intro: {
        text: "It's 1889 in Digboi. An elephant returning from the jungle has oil on its feet. Engineers are in a frenzy. They are about to drill Asia's first oil well. You stand with the chief engineer.",
        image: "https://placehold.co/600x300/1f2937/ffffff?text=Digboi+1889",
        scene: { type: "industrial" },
        sound: "machinery_hum",
        choices: [{ text: "'Dig, boy, dig!'", next: "the_strike" }],
      },
      the_strike: {
        text: "They strike oil! The jungle town explodes with activity. A refinery is planned. But the local forest is dense and home to many tribes and animals. A choice must be made about the refinery's location.",
        image:
          "https://placehold.co/600x300/374151/ffffff?text=Oil+Discovery",
        scene: { type: "industrial" },
        choices: [
          {
            text: "Build it close by, clearing the forest for efficiency.",
            next: "clear_forest",
          },
          {
            text: "Build it further away, preserving the core forest.",
            next: "preserve_forest",
          },
        ],
      },
      clear_forest: {
        text: "The refinery is built quickly. The town of Digboi booms, fueling the nation. However, the nearby Dehing-Patkai forest is heavily polluted, and wildlife vanishes. The cost of 'black gold' is green.",
        image:
          "https://placehold.co/600x300/475161/c7c7c7?text=Industrial+Pollution",
        scene: { type: "industrial" },
        choices: [
          { text: "Witness the legacy", next: "oil_legacy" },
        ],
      },
      preserve_forest: {
        text: "The construction is slower and more expensive, but the core of the rainforest is saved. The Digboi refinery operates in relative harmony with the 'Amazon of the East'. A balance is struck.",
        image:
          "https://placehold.co/600x300/1d3a58/ffffff?text=Harmony+with+Nature",
        scene: { type: "industrial" },
        sound: "success",
        choices: [
          { text: "Witness the legacy", next: "oil_legacy" },
        ],
      },
      oil_legacy: {
        text: "The Digboi oil field, still operational, stands as a testament to industrial history. As you leave, the sound of machinery fades, replaced by the gentle *clack-clack* of a weaver's loom.",
        image:
          "https://placehold.co/600x300/111827/ffffff?text=The+Old+Refinery",
        scene: { type: "industrial" },
        choices: [
          { text: "Follow the sound", next: "intro", chapter: "chapter7" },
        ],
      },
    },
  },
  chapter7: {
    title: "The Weaver's Thread",
    startStage: "intro",
    stages: {
      intro: {
        text: "You are in Sualkuchi, the 'Manchester of the East'. Every house echoes with the sound of looms. A master weaver is showing his daughter how to weave golden Muga silk. She has an idea for a new, modern design.",
        image:
          "https://placehold.co/600x300/8b5d4a/ffffff?text=Sualkuchi+Looms",
        scene: { type: "culture" },
        sound: "loom_clack",
        choices: [
          { text: "Examine the Muga silk", next: "design_choice" },
        ],
      },
      design_choice: {
        text: "The father is hesitant. 'We must preserve the traditional *kingkhap* motifs,' he says. 'But new designs will attract new buyers,' she argues. She looks to you for support.",
        image:
          "https://placehold.co/600x300/784d3f/ffffff?text=Tradition+vs+Modern",
        scene: { type: "culture" },
        choices: [
          {
            text: "Advise her to honor tradition above all.",
            next: "tradition_path",
          },
          {
            text: "Encourage her to blend tradition with her new idea.",
            next: "fusion_path",
          },
        ],
      },
      tradition_path: {
        text: "She follows her father's wish. The looms of Sualkuchi continue to produce exquisite traditional silks, revered by connoisseurs. However, they struggle to find a wider, younger market.",
        image: "https://placehold.co/600x300/6b4d3a/c7c7c7?text=Pure+Tradition",
        scene: { type: "culture" },
        choices: [
          { text: "Observe the silk's destiny", next: "silk_legacy" },
        ],
      },
      fusion_path: {
        text: "She skillfully weaves a new design, incorporating modern aesthetics with the traditional motifs. It's a huge success! Her work is featured in a national fashion magazine, bringing new life and global attention to Sualkuchi's weavers.",
        image: "https://placehold.co/600x300/8b5d4a/ffffff?text=Modern+Mekhela",
        scene: { type: "culture" },
        sound: "success",
        choices: [
          { text: "Observe the silk's destiny", next: "silk_legacy" },
        ],
      },
      silk_legacy: {
        text: "The golden thread of Muga silk remains one of Assam's greatest treasures. As the sun sets, a new thread pulls you back—back to the Ahom kingdom, but to a different battle, a different hero.",
        image: "https://placehold.co/600x300/5a3d34/ffffff?text=Golden+Silk",
        scene: { type: "culture" },
        choices: [
          { text: "Return to the past", next: "intro", chapter: "chapter8" },
        ],
      },
    },
  },
  chapter8: {
    title: "The Princess of Itakhuli",
    startStage: "intro",
    stages: {
      intro: {
        text: "You are back in the Ahom era, but it is 1671, just after Saraighat. The Mughals, led by Mir Jumla, had previously captured the capital. King Chakradhwaj's daughter, Ramani Gabharu, was sent to the Mughal harem as part of a peace treaty.",
        image: "https://placehold.co/600x300/5a3d34/ffffff?text=Ahom+Diplomacy",
        scene: { type: "ahom" },
        choices: [
          { text: "Learn her fate", next: "princess_choice" },
        ],
      },
      princess_choice: {
        text: "Now, after Lachit's victory, the Ahoms are debating. Should they try to 'rescue' Ramani Gabharu (now a Mughal queen, Bahar Banu) or focus on fortifying their new borders at Itakhuli?",
        image:
          "https://placehold.co/600x300/784d3f/ffffff?text=The+War+Council",
        scene: { type: "ahom" },
        choices: [
          {
            text: "Advise them to focus on military strategy at Itakhuli.",
            next: "itakhuli_victory",
          },
          {
            text: "Insist on a diplomatic mission to retrieve the princess.",
            next: "failed_mission",
          },
        ],
      },
      itakhuli_victory: {
        text: "They focus on the fort. The Battle of Itakhuli (1682) becomes the final, decisive blow. The Mughals are permanently expelled from Assam. Ramani Gabharu's personal sacrifice becomes a footnote in the story of her kingdom's enduring freedom.",
        image: "https://placehold.co/600x300/8b5d4a/ffffff?text=Fort+Itakhuli",
        scene: { type: "ahom" },
        sound: "success",
        choices: [
          { text: "See the kingdom's future", next: "ahom_legacy" },
        ],
      },
      failed_mission: {
        text: "The diplomatic mission fails. The Mughals see it as weakness and regroup. The focus on the princess distracts the Ahom commanders, leading to a setback in the war. The final victory is delayed.",
        image:
          "https://placehold.co/600x300/4a3d34/c7c7c7?text=Diplomatic+Failure",
        scene: { type: "ahom" },
        choices: [
          { text: "See the kingdom's future", next: "ahom_legacy" },
        ],
      },
      ahom_legacy: {
        text: "The Ahom dynasty's resilience is legendary. As you leave their court, the solid ground of the kingdom gives way to the shifting sands of the world's largest river island.",
        image:
          "https://placehold.co/600x300/5a3d34/ffffff?text=Ahom+Glory",
        scene: { type: "ahom" },
        choices: [
          { text: "Travel to the island", next: "intro", chapter: "chapter9" },
        ],
      },
    },
  },
  chapter9: {
    title: "The Mystical Isle",
    startStage: "intro",
    stages: {
      intro: {
        text: "You arrive in Majuli, a serene river island and the seat of Neo-Vaishnavite culture. You stand before a *Satra* (monastery). Monks are practicing the *Sattriya* dance. But the island itself is shrinking due to erosion from the Brahmaputra.",
        image:
          "https://placehold.co/600x300/3a5a40/ffffff?text=Majuli+Satra",
        scene: { type: "river" },
        sound: "river_flow",
        choices: [
          { text: "Speak to the Satradhikar (Head Monk)", next: "monk_choice" },
        ],
      },
      monk_choice: {
        text: "The Satradhikar is troubled. 'The river gives, and the river takes. Should we move our centuries-old Satra to the mainland, or trust in faith and new technology to protect this sacred ground?'",
        image:
          "https://placehold.co/600x300/4e6a50/ffffff?text=The+Monk's+Dilemma",
        scene: { type: "river" },
        choices: [
          {
            text: "Advise him to relocate the Satra to preserve its artifacts.",
            next: "relocate_satra",
          },
          {
            text: "Encourage him to stay and fight the erosion.",
            next: "stay_fight",
          },
        ],
      },
      relocate_satra: {
        text: "The painful decision is made. The Satra is painstakingly moved, piece by piece, to higher ground. The physical location is lost, but the culture, artifacts, and knowledge are saved for future generations.",
        image:
          "https://placehold.co/600x300/5a7a60/ffffff?text=Culture+Preserved",
        scene: { type: "river" },
        choices: [
          { text: "See the island's fate", next: "island_legacy" },
        ],
      },
      stay_fight: {
        text: "They stay. With government and community help, they build embankments. It's a constant battle, and some parts are lost, but the main Satra is saved. It becomes a symbol of resilience, a beacon of faith against the river's power.",
        image:
          "https://placehold.co/600x300/3a5a40/ffffff?text=Symbol+of+Resilience",
        scene: { type: "river" },
        sound: "success",
        choices: [
          { text: "See the island's fate", next: "island_legacy" },
        ],
      },
      island_legacy: {
        text: "Majuli remains a place of spiritual beauty, forever in a delicate dance with the mighty river. As you leave, you hear the drums of a different kind of devotion, from deep within the forest.",
        image: "https://placehold.co/600x300/2a3a30/ffffff?text=Majuli's+Spirit",
        scene: { type: "river" },
        choices: [
          { text: "Go deeper inland", next: "intro", chapter: "chapter10" },
        ],
      },
    },
  },
  chapter10: {
    title: "The Bodo Accord",
    startStage: "intro",
    stages: {
      intro: {
        text: "You are in Kokrajhar, the heart of the Bodo homeland. Years of armed conflict for a separate state have finally led to peace talks. You sit as an observer in a tense meeting between militant leaders and government interlocutors.",
        image: "https://placehold.co/600x300/2e4a6c/ffffff?text=Peace+Talks",
        scene: { type: "politics" },
        sound: "tense_atmosphere",
        choices: [
          { text: "Listen to the demands", next: "the_demand" },
        ],
      },
      the_demand: {
        text: "The Bodo leader demands full statehood. The government offers a 'Bodoland Territorial Region' (BTR) with significant autonomy and economic packages. Both sides are rigid.",
        image: "https://placehold.co/600x300/1d3a58/ffffff?text=The+Negotiation",
        scene: { type: "politics" },
        choices: [
          {
            text: "Subtly suggest to the Bodo leader that autonomy is a powerful first step.",
            next: "accord_signed",
          },
          {
            text: "Subtly suggest to the leader to hold out for full statehood.",
            next: "conflict_continues",
          },
        ],
      },
      accord_signed: {
        text: "He agrees. The Bodo Peace Accord is signed. The guns fall silent. The BTR is formed, and a new era of development and self-governance begins, bringing hope to the region after decades of violence.",
        image:
          "https://placehold.co/600x300/4a6c8c/ffffff?text=The+Bodo+Accord",
        scene: { type: "politics" },
        sound: "success",
        choices: [
          { text: "See the new beginning", next: "bodo_legacy" },
        ],
      },
      conflict_continues: {
        text: "The talks collapse. The leader returns to the jungle, and the conflict resumes. More lives are lost, and development is stalled for another decade. A chance for peace is lost in the quest for an all-or-nothing solution.",
        image:
          "https://placehold.co/600x300/1d2a38/c7c7c7?text=Talks+Collapse",
        scene: { type: "politics" },
        sound: "war_horn",
        choices: [
          { text: "See the consequence", next: "bodo_legacy" },
        ],
      },
      bodo_legacy: {
        text: "The journey for identity and self-rule is a complex one. As you leave the meeting, the passion of the leaders reminds you of another fiery soul, a poet who used his words as weapons for freedom.",
        image:
          "https://placehold.co/600x300/5a7c9c/ffffff?text=Bodo+Culture",
        scene: { type: "politics" },
        choices: [
          { text: "Seek out the poet", next: "intro", chapter: "chapter11" },
        ],
      },
    },
  },
  chapter11: {
    title: "The Poet's Rebellion",
    startStage: "intro",
    stages: {
      intro: {
        text: "You find yourself in 1930s Tezpur. A young Jyoti Prasad Agarwala, fresh from his studies in Europe, is writing a script. He's not just making a film; he's forging the identity of Assamese cinema with 'Joymoti'.",
        image:
          "https://placehold.co/600x300/784d3f/ffffff?text=Jyoti+Prasad+Agarwala",
        scene: { type: "artist" },
        sound: "melody_note",
        choices: [
          { text: "Watch him work", next: "film_choice" },
        ],
      },
      film_choice: {
        text: "He faces a choice. Should his first film be a safe, profitable mythological drama, or the politically charged story of Joymoti, an Ahom princess who died for her country? The latter is a huge financial risk.",
        image: "https://placehold.co/600x300/5a3d34/ffffff?text=The+First+Script",
        scene: { type: "artist" },
        choices: [
          { text: "Advise him to tell the story of Joymoti.", next: "joymoti_chosen" },
          { text: "Advise him to play it safe.", next: "safe_choice" },
        ],
      },
      joymoti_chosen: {
        text: "'Joymoti' (1935) is made. It's a commercial failure, bankrupting him. But it ignites a cultural fire. It's not just a film; it's a revolutionary act, laying the foundation for an entire industry. He becomes the 'Rupkonwar' (Prince of Art).",
        image: "https://placehold.co/600x300/8b5d4a/ffffff?text=Joymoti+-+The+Film",
        scene: { type: "artist" },
        sound: "success",
        choices: [
          { text: "See his legacy", next: "poet_legacy" },
        ],
      },
      safe_choice: {
        text: "He makes a financially successful film. The Assamese film industry gets a start, but it lacks the powerful, rebellious soul that 'Joymoti' would have given it. A defining moment of cultural assertion is missed.",
        image: "https://placehold.co/600x300/6b4d3a/c7c7c7?text=A+Missed+Chance",
        scene: { type: "artist" },
        choices: [
          { text: "See his legacy", next: "poet_legacy" },
        ],
      },
      poet_legacy: {
        text: "Jyoti Prasad's art and activism are intertwined. His pen was his sword. As you ponder his impact, the sky darkens, and you hear the distant, terrifying roar of a river overflowing its banks.",
        image: "https://placehold.co/600x300/4a3d34/ffffff?text=Rupkonwar's+Legacy",
        scene: { type: "artist" },
        choices: [
          { text: "Follow the sound of water", next: "intro", chapter: "chapter12" },
        ],
      },
    },
  },
  chapter12: {
    title: "The River's Fury",
    startStage: "intro",
    stages: {
      intro: {
        text: "You are on the bank of the Brahmaputra during a monsoon. The river is a raging giant. A village is about to be flooded. As a disaster response team member, you have a critical, immediate choice.",
        image: "https://placehold.co/600x300/1d3a58/ffffff?text=Brahmaputra+Flood",
        scene: { type: "disaster" },
        sound: "river_flow",
        choices: [
          { text: "Assess the situation", next: "flood_choice" },
        ],
      },
      flood_choice: {
        text: "You have one boat. You can go to a hamlet where a family is trapped on their roof. Or, you can go to the village school, where the community's entire store of grain and seeds is kept.",
        image: "https://placehold.co/600x300/2e4a6c/ffffff?text=One+Boat",
        scene: { type: "disaster" },
        choices: [
          { text: "Save the family.", next: "save_family" },
          { text: "Save the grain supply.", next: "save_grain" },
        ],
      },
      save_family: {
        text: "You race against the current and rescue the family just as their house is swept away. You saved lives, but the village has lost its food and seeds for the next season, ensuring a long, hard year of recovery.",
        image: "https://placehold.co/600x300/4a6c8c/ffffff?text=Family+Rescued",
        scene: { type: "disaster" },
        choices: [
          { text: "Face the aftermath", next: "flood_legacy" },
        ],
      },
      save_grain: {
        text: "You manage to save 80% of the grain. The village will be able to eat and replant. But as you return, you see the hamlet where the family was has vanished. You saved the community's future, but at an unbearable human cost.",
        image: "https://placehold.co/600x300/1d2a38/c7c7c7?text=Grain+Saved,+Lives+Lost",
        scene: { type: "disaster" },
        choices: [
          { text: "Face the aftermath", next: "flood_legacy" },
        ],
      },
      flood_legacy: {
        text: "The flood recedes, leaving a scar on the land and the heart. This annual battle defines life on the riverbank. As the survivors begin to rebuild, you see the lights of the city, a place of different struggles.",
        image: "https.placehold.co/600x300/5a7c9c/ffffff?text=The+Aftermath",
        scene: { type: "disaster" },
        choices: [
          { text: "Go to the city", next: "intro", chapter: "chapter13" },
        ],
      },
    },
  },
  chapter13: {
    title: "Guwahati's Urban Sprawl",
    startStage: "intro",
    stages: {
      intro: {
        text: "You are in modern-day Guwahati. The city is growing rapidly. You are an urban planner at a meeting. The debate: a new high-rise luxury apartment complex is proposed, but it will be built on a small, historic hill (tila).",
        image: "https://placehold.co/600x300/1f2937/ffffff?text=Guwahati+Cityscape",
        scene: { type: "modern" },
        sound: "city_traffic",
        choices: [
          { text: "Listen to the arguments", next: "city_choice" },
        ],
      },
      city_choice: {
        text: "The developer argues it's essential for a 'modern city' and brings in jobs. A local historian pleads that the hill has ancient ruins and is part of the city's soul. Your vote is the tie-breaker.",
        image:
          "https://placehold.co/600x300/374151/ffffff?text=Development+vs+Heritage",
        scene: { type: "modern" },
        choices: [
          { text: "Vote for the development.", next: "vote_develop" },
          { text: "Vote to protect the heritage site.", next: "vote_heritage" },
        ],
      },
      vote_develop: {
        text: "The high-rise is built. It's a marvel of glass and steel, and the city's skyline changes. But a piece of its history is paved over forever. The city grows richer, but feels shallower.",
        image:
          "https://placehold.co/600x300/475161/c7c7c7?text=Modern+High-rise",
        scene: { type: "modern" },
        choices: [
          { text: "See the new city", next: "city_legacy" },
        ],
      },
      vote_heritage: {
        text: "Your vote saves the hill. It's turned into a public park and heritage site. It becomes a beloved green space, a lung for the concrete jungle, reminding citizens of their ancient roots.",
        image: "https://placehold.co/600x300/3a5a40/ffffff?text=Heritage+Park",
        scene: { type: "modern" },
        sound: "success",
        choices: [
          { text: "See the new city", next: "city_legacy" },
        ],
      },
      city_legacy: {
        text: "Guwahati's story is one of constant change, a blend of ancient and new. As you stand on a bridge over the Brahmaputra, you hear the roar of a crowd from a nearby stadium.",
        image: "https://placehold.co/600x300/111827/ffffff?text=City+at+Night",
        scene: { type: "modern" },
        choices: [
          { text: "Follow the roar", next: "intro", chapter: "chapter14" },
        ],
      },
    },
  },
  chapter14: {
    title: "The Starlit Pitch",
    startStage: "intro",
    stages: {
      intro: {
        text: "You are at the Indira Gandhi Athletic Stadium in Guwahati. A young footballer from a small Assamese village is playing in the final match of the season. A national scout is in the audience.",
        image: "https://placehold.co/600x300/224b37/ffffff?text=The+Final+Match",
        scene: { type: "stadium" },
        sound: "stadium_cheer",
        choices: [
          { text: "Watch the final minute", next: "final_minute" },
        ],
      },
      final_minute: {
        text: "It's the 90th minute, 1-1. She gets the ball. She can either take a risky long shot, or pass to her teammate who is in a good, but not great, position.",
        image:
          "https://placehold.co/600x300/3a5a40/ffffff?text=The+Final+Choice",
        scene: { type: "stadium" },
        choices: [
          { text: "Take the shot!", next: "take_shot" },
          { text: "Pass to the teammate.", next: "pass_ball" },
        ],
      },
      take_shot: {
        text: "She takes the shot! The ball arcs perfectly, hitting the top corner. GOAL! The crowd erupts. The scout is impressed by her confidence and skill. She is selected for the national camp. Her journey to stardom begins.",
        image: "https://placehold.co/600x300/4e6a50/ffffff?text=GOAL!",
        scene: { type: "stadium" },
        sound: "success",
        choices: [
          { text: "Witness her future", next: "final_legacy" },
        ],
      },
      pass_ball: {
        text: "She makes the safe pass. Her teammate fumbles, and the defender clears the ball. The whistle blows. The match is a draw. The scout notes her teamwork but was hoping to see a spark of individual brilliance. It's a missed opportunity.",
        image:
          "https://placehold.co/600x300/5a7a60/c7c7c7?text=Missed+Opportunity",
        scene: { type: "stadium" },
        choices: [
          { text: "Witness her future", next: "final_legacy" },
        ],
      },
      final_legacy: {
        text: "The passion for sport, for art, for freedom, for survival... it all defines the spirit of this land. Your long journey through the tapestry of Assam is finally complete. You have seen its past, present, and its many possible futures.",
        image:
          "https://placehold.co/600x300/2a3a30/ffffff?text=The+Full+Tapestry",
        scene: { type: "stadium" },
        // --- THIS CHOICE links to the End Screen ---
        choices: [{ text: "Your journey ends", next: "THE_END" }],
      },
    },
  },
};