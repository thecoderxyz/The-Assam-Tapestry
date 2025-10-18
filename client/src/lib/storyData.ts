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
  chapter1: {
    title: "Ahom Valor",
    startStage: "intro",
    stages: {
      intro: {
        text: "You drift through time to the 17th century. The Ahom Kingdom is at its peak, but the shadow of the Mughal Empire looms. You find yourself in the war council of King Chakradhwaj Singha. A young commander, Lachit Borphukan, awaits his moment.",
        image: "https://placehold.co/600x300/5a3d34/ffffff?text=Lachit+Borphukan",
        scene: { type: 'ahom' },
        sound: 'war_horn',
        choices: [{ text: "Observe the council", next: "council" }]
      },
      council: {
        text: "The King is furious over the Mughal occupation of Guwahati. 'How can my people thrive under foreign rule?' he roars. He needs a commander who can lead their forces. Who should he choose?",
        image: "https://placehold.co/600x300/784d3f/ffffff?text=The+Royal+Court",
        scene: { type: 'ahom' },
        choices: [
          { text: "Advise him to trust the fiery passion of Lachit.", next: "lachit_chosen" },
          { text: "Suggest a more experienced, cautious general.", next: "cautious_general" }
        ]
      },
      lachit_chosen: {
        text: "The King sees the fire in Lachit's eyes and appoints him Borphukan, the commander-in-chief. Lachit's preparation for the Battle of Saraighat begins. His leadership is inspiring, uniting the kingdom.",
        image: "https://placehold.co/600x300/8b5d4a/ffffff?text=Battle+of+Saraighat",
        scene: { type: 'ahom' },
        sound: 'success',
        choices: [{ text: "Witness the battle strategy", next: "battle_strategy" }]
      },
      battle_strategy: {
        text: "As the Battle of Saraighat unfolds, Lachit faces a critical decision. The Mughal navy approaches with overwhelming force. Should he engage them in open water or use the narrow channels of the Brahmaputra to his advantage?",
        image: "https://placehold.co/600x300/6b4d3a/ffffff?text=The+Strategic+Choice",
        scene: { type: 'ahom' },
        choices: [
          { text: "Use the narrow channels strategically", next: "narrow_victory" },
          { text: "Face them in open water with courage", next: "open_battle" }
        ]
      },
      narrow_victory: {
        text: "Lachit's brilliant use of terrain proves decisive. The Mughal fleet becomes disorganized in the narrow channels, and the Ahom forces achieve a legendary victory. This moment becomes immortalized in history as one of the greatest naval victories ever fought on Indian rivers.",
        image: "https://placehold.co/600x300/8b5d4a/ffffff?text=Historic+Victory",
        scene: { type: 'ahom' },
        sound: 'success',
        choices: [{ text: "Journey to the next era", next: "intro", chapter: "chapter2" }]
      },
      open_battle: {
        text: "Though courageous, the open water battle proves costly. The Ahom forces take heavy casualties but eventually prevail through sheer determination. Victory is won, but at a great price that could have been avoided with better strategy.",
        image: "https://placehold.co/600x300/7b4d3a/c0c0c0?text=Costly+Victory",
        scene: { type: 'ahom' },
        sound: 'war_horn',
        choices: [{ text: "Reflect and move forward", next: "intro", chapter: "chapter2" }]
      },
      cautious_general: {
        text: "The cautious general fails to inspire the troops. Disunity spreads, and the Ahom forces are unable to reclaim their territory. A pivotal moment is lost. Your thread unravels... but the tapestry of time allows you to weave again.",
        image: "https://placehold.co/600x300/4a3d34/c7c7c7?text=A+Lost+Opportunity",
        scene: { type: 'ahom' },
        choices: [{ text: "Retry the choice", next: "council" }]
      }
    }
  },
  chapter2: {
    title: "The Maestro's Melody",
    startStage: "intro",
    stages: {
      intro: {
        text: "You arrive in the 20th century. The air is thick with artistic fervor and a quest for identity. You see a young man with a powerful voice and a pen that flows like the Brahmaputra itself: Bhupen Hazarika.",
        image: "https://placehold.co/600x300/1d3a58/ffffff?text=Bhupen+Hazarika",
        scene: { type: 'maestro' },
        sound: 'melody_note',
        choices: [{ text: "Listen to his music", next: "music" }]
      },
      music: {
        text: "Bhupen Hazarika's songs speak of unity, love, and the struggles of the common person. He has an opportunity to take his music to a global stage, but some fear it will dilute its Assamese soul. What should he do?",
        image: "https://placehold.co/600x300/2e4a6c/ffffff?text=The+Global+Stage",
        scene: { type: 'maestro' },
        choices: [
          { text: "Encourage him to share Assam's voice with the world.", next: "global_voice" },
          { text: "Advise him to focus only on his regional audience.", next: "regional_focus" }
        ]
      },
      global_voice: {
        text: "He travels the world, becoming a cultural ambassador. His song 'Bistirno Parore' becomes a global anthem for humanism. He proves that a voice from the Brahmaputra valley can resonate in every corner of the earth.",
        image: "https://placehold.co/600x300/4a6c8c/ffffff?text=A+Voice+for+the+World",
        scene: { type: 'maestro' },
        sound: 'melody_note',
        choices: [{ text: "Experience his final performance", next: "final_performance" }]
      },
      final_performance: {
        text: "Years later, in one of his final concerts, Bhupen stands before thousands. His voice still powerful, his message timeless. As he sings 'Manuhe Manuhor Babe', tears flow freely. His legacy is secure—he has become the eternal voice of Assam and beyond.",
        image: "https://placehold.co/600x300/5a7c9c/ffffff?text=The+Eternal+Voice",
        scene: { type: 'maestro' },
        sound: 'success',
        choices: [{ text: "Follow the next echo", next: "intro", chapter: "chapter3" }]
      },
      regional_focus: {
        text: "He remains a beloved regional icon, but the world never fully experiences the depth of his artistry. His influence is immense, but a chance to build a global bridge is missed. The tapestry has a muted thread.",
        image: "https://placehold.co/600x300/1d2a38/c7c7c7?text=A+Regional+Treasure",
        scene: { type: 'maestro' },
        choices: [{ text: "Retry the choice", next: "music" }]
      }
    }
  },
  chapter3: {
    title: "The Modern Heartbeat",
    startStage: "intro",
    stages: {
      intro: {
        text: "The timeline shifts to the vibrant, chaotic present. On a brightly lit stage, a man with a guitar and a rebellious spirit captures the heart of the youth. It is Zubeen Garg, a modern-day icon.",
        image: "https://placehold.co/600x300/111827/ffffff?text=Zubeen+Garg",
        scene: { type: 'modern' },
        sound: 'modern_beat',
        choices: [{ text: "Feel the energy of the crowd", next: "concert" }]
      },
      concert: {
        text: "Zubeen is known for his versatile music, blending folk with rock, but also for his outspoken nature. A producer offers him a massive commercial project that could compromise his artistic freedom. What path should he take?",
        image: "https://placehold.co/600x300/1f2937/ffffff?text=The+Crossroads",
        scene: { type: 'modern' },
        choices: [
          { text: "Stay true to his independent spirit.", next: "independent_spirit" },
          { text: "Take the commercial route for wider reach.", next: "commercial_route" }
        ]
      },
      independent_spirit: {
        text: "He rejects the offer, continuing to produce music that is raw, honest, and deeply connected to his roots. He remains a powerful, independent voice, proving that success doesn't require compromise. His legacy as 'Zubeen Da' is cemented.",
        image: "https://placehold.co/600x300/374151/ffffff?text=An+Independent+Icon",
        scene: { type: 'modern' },
        sound: 'modern_beat',
        choices: [{ text: "Witness his impact", next: "cultural_impact" }]
      },
      cultural_impact: {
        text: "Zubeen's independence inspires a new generation of artists. They see that staying true to one's roots can be more powerful than chasing fame. The Assamese music scene flourishes with authentic voices, each carrying forward the torch of cultural pride he helped light.",
        image: "https://placehold.co/600x300/475161/ffffff?text=A+New+Generation",
        scene: { type: 'modern' },
        sound: 'success',
        choices: [{ text: "Complete the tapestry", next: "end" }]
      },
      commercial_route: {
        text: "He accepts the deal. His popularity soars, but his core fans feel a disconnect. His music becomes polished but loses some of its edge. A legend is made, but a rebel's fire is tamed. The echo feels faint.",
        image: "https://placehold.co/600x300/1f2937/c7c7c7?text=The+Price+of+Fame",
        scene: { type: 'modern' },
        choices: [{ text: "Retry the choice", next: "concert" }]
      }
    }
  }
};
