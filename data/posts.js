const posts = [
  // {
  //   id: 1,
  //   title: "Ciambellone",
  //   slug: "ciambellone",
  //   content: "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come le crostate, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino. Ecco la nostra ricetta del ciambellone a quale atmosfera si ispira, quella di casa e genuinità: con una manciata di scorze di limone o di arancia e una spolverata di zucchero a velo renderete questa soffice delizia profumata e invitante. E per una volta sarà la nonna a farvi i complimenti per aver preparato un morbido ciambellone, così buono che non passa mai di moda!",
  //   image: "ciambellone.jpeg",
  //   tags: ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno"],
  //   published: true,
  //   category: 'Tech',
  // },
  // {
  //   id: 2,
  //   title: "Cracker alla barbabietola",
  //   slug: "cracker-alla-barbabietola",
  //   content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
  //             Cracker di farro
  //             Cracker di lupini
  //             Cracker allo zafferano
  //             Cracker ai semi`,
  //   image: "cracker_barbabietola.jpeg",
  //   tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
  //   published: true,
  //   category: 'Tech',
  // },
  // {
  //   id: 3,
  //   title: "Pasta barbabietola e gorgonzola",
  //   slug: "pasta-barbabietola-e-gorgonzola",
  //   content: `La nostra ricetta della pasta barbabietola e gorgonzola vuole ricreare in questo primo piatto un abbinamento appetitoso, già proposto con la torta salata alla barbabietola! Per un pranzo veloce ma gustoso, per chi ama giocare con consistenze e colori naturali in cucina, questa pasta è perfetta! La dolcezza della barbabietola smorza il gusto deciso che caratterizza questo formaggio erborinato molto amato, un'abbinata vincente e molto gustosa. Provate un nuovo condimento per la vostra pasta e sperimentate altre sfiziose varianti:
  //           Pasta con barbabietola e pecorino
  //           Gnocchi di barbabietola
  //           Tagliatelle alla barbabietola con asparagi`,
  //   image: "pasta_barbabietola.jpeg",
  //   tags: ["Primi piatti", "Ricette vegetariane"],
  //   published: true,
  //   category: 'Tech',
  // },
  // {
  //   id: 4,
  //   title: "Pane fritto dolce",
  //   slug: "pane-fritto-dolce",
  //   content: `Il pane fritto dolce è la versione più antica dell'odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, utilizzando gli ingredienti che si avevano sempre a disposizione in casa: pane raffermo, uova, latte e zucchero, che noi abbiamo deciso di aromatizzare con un pizzico di cannella. Facile e veloce da realizzare, il pane fritto dolce vi riporterà con la mente ai sapori dell'infanzia… gustatelo da solo o accompagnatelo con frutta fresca e yogurt per uno spuntino tanto goloso quanto genuino!`,
  //   image: "pane_fritto_dolce.jpeg",
  //   tags: ["Dolci", "Dolci veloci", "Ricette veloci", "Ricette vegetariane"],
  //   published: false,
  //   category: 'Tech',
  // },
  // {
  //   id: 5,
  //   title: "Torta paesana",
  //   slug: "torta-paesana",
  //   content: `La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E' un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E' infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l'uvetta o chi i pinoli ad esempio. Noi vi presentiamo la nostra versione con l'aggiunta di cacao e amaretti: perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!`,
  //   image: "torta_paesana.jpeg",
  //   tags: ["Dolci", "Dolci al cioccolato", "Torte", "Ricette vegetariane", "Ricette al forno"],
  //   published: true,
  //   category: 'Tech',
  // },
    {
      id: 1,
      title: "Top 5 Gaming Laptops of 2024",
      content: "Discover the best gaming laptops available this year with cutting-edge performance.",
      image: "https://picsum.photos/300/300?random=1",
      tags: ["laptops", "gaming"],
      slug: "top-5-gaming-laptops-2024",
      published: true,
      category: "Hardware"
    },
    {
      id: 2,
      title: "How to Build a Custom Gaming PC",
      content: "Step-by-step guide to assembling your own powerful gaming computer.",
      image: "https://picsum.photos/300/300?random=2",
      tags: ["pc-building", "custom-pc"],
      slug: "how-to-build-custom-gaming-pc",
      published: true,
      category: "DIY"
    },
    {
      id: 3,
      title: "The Future of Gaming Graphics",
      content: "What to expect from next-gen GPUs and their impact on gaming.",
      image: "https://picsum.photos/300/300?random=3",
      tags: ["graphics", "gpu"],
      slug: "future-of-gaming-graphics",
      published: true,
      category: "Technology"
    },
    {
      id: 4,
      title: "Best Budget Gaming Monitors",
      content: "Affordable monitors that deliver great performance for gamers.",
      image: "https://picsum.photos/300/300?random=4",
      tags: ["monitors", "budget"],
      slug: "best-budget-gaming-monitors",
      published: true,
      category: "Hardware"
    },
    {
      id: 5,
      title: "Gaming Keyboards: Mechanical vs. Membrane",
      content: "A comprehensive comparison of mechanical and membrane keyboards.",
      image: "https://picsum.photos/300/300?random=5",
      tags: ["keyboards", "comparison"],
      slug: "gaming-keyboards-mechanical-vs-membrane",
      published: true,
      category: "Peripherals"
    },
    {
      id: 6,
      title: "The Evolution of Gaming Chairs",
      content: "From basic chairs to ergonomic masterpieces for long gaming sessions.",
      image: "https://picsum.photos/300/300?random=6",
      tags: ["chairs", "ergonomics"],
      slug: "evolution-of-gaming-chairs",
      published: true,
      category: "Accessories"
    },
    {
      id: 7,
      title: "VR Gaming: What You Need to Get Started",
      content: "Essential gear and tips for diving into virtual reality gaming.",
      image: "https://picsum.photos/300/300?random=7",
      tags: ["vr", "virtual-reality"],
      slug: "vr-gaming-get-started",
      published: true,
      category: "Technology"
    },
    {
      id: 8,
      title: "Top 10 Indie Games to Watch in 2024",
      content: "Upcoming indie games that are redefining the gaming industry.",
      image: "https://picsum.photos/300/300?random=8",
      tags: ["indie-games", "2024"],
      slug: "top-10-indie-games-2024",
      published: true,
      category: "Games"
    },
    {
      id: 9,
      title: "Understanding GPU Benchmarks",
      content: "How to interpret GPU benchmarks to find the best card for your setup.",
      image: "https://picsum.photos/300/300?random=9",
      tags: ["gpu", "benchmarks"],
      slug: "understanding-gpu-benchmarks",
      published: true,
      category: "Hardware"
    },
    {
      id: 10,
      title: "Gaming Accessories You Didn’t Know You Needed",
      content: "Hidden gems that enhance your gaming experience.",
      image: "https://picsum.photos/300/300?random=10",
      tags: ["accessories", "hidden-gems"],
      slug: "gaming-accessories-you-didnt-know",
      published: true,
      category: "Accessories"
    }
  ]
  
module.exports = posts