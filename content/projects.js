window.PROJECTS = [ {
  id: "atlas",
  title: "Atlas",
  tagline: {
    en: "A travel diary app built around a research finding I didn't expect.",
    es: "Una app de diario de viajes construida a partir de un hallazgo que no esperaba."
  },
  kind: {
    en: "Mobile app · UX research and UI",
    es: "App móvil · Investigación UX y UI"
  },
  year: "2026",
  theme: {
    bg: "#0b17ff",
    fg: "#ffffff"
  },
  thumb: {
    video: "assets/projects/atlas/flow.mp4",
    image: "assets/projects/atlas/flow-poster.webp"
  },
  cover: {
    video: "assets/projects/atlas/flow.mp4",
    poster: "assets/projects/atlas/flow-poster.webp",
    src: "assets/projects/atlas/01-home.webp",
    alt: {
      en: "Atlas home screen showing the active trip to Paris and recent activities",
      es: "Pantalla de inicio de Atlas con el viaje activo a París y las actividades recientes"
    }
  },
  meta: [ {
    label: {
      en: "Context",
      es: "Contexto"
    },
    value: {
      en: "Interaction Design, UOC",
      es: "Diseño de Interacciones, UOC"
    }
  }, {
    label: {
      en: "My role",
      es: "Mi rol"
    },
    value: {
      en: "Everything: research, IA, UI, prototype, testing",
      es: "Todo: investigación, AI, UI, prototipo y test"
    }
  }, {
    label: {
      en: "Tools",
      es: "Herramientas"
    },
    value: "Figma, Lucid"
  } ],
  links: [ {
    label: {
      en: "Open the prototype",
      es: "Abrir el prototipo"
    },
    url: "https://www.figma.com/proto/uur1UpVNmK17WV3qkZo8TT/Atlas?node-id=0-1&t=OLoRJsELm8IN4C6I-1"
  }, {
    label: {
      en: "Figma file",
      es: "Archivo de Figma"
    },
    url: "https://www.figma.com/design/uur1UpVNmK17WV3qkZo8TT/Atlas?node-id=0-1&t=0VEcethqkfzlbltE-1"
  }, {
    label: {
      en: "Full report (PDF, Spanish)",
      es: "Informe completo (PDF)"
    },
    url: "https://drive.google.com/file/d/1i6EHQKnDwtfOfUJvgEel3RiLMTws6qEB/view?usp=sharing"
  } ],
  summary: [ {
    label: {
      en: "Problem",
      es: "Problema"
    },
    text: {
      en: "People already capture plenty on a trip. What they lose is the memory afterwards, buried in a camera roll.",
      es: "La gente ya captura de sobra durante un viaje. Lo que pierde es el recuerdo después, enterrado en la galería."
    }
  }, {
    label: {
      en: "Solution",
      es: "Solución"
    },
    text: {
      en: "A diary where saving a memory takes one tap, and the current trip is kept apart from the archive.",
      es: "Un diario donde guardar un recuerdo cuesta un toque y el viaje actual está separado del archivo."
    }
  }, {
    label: {
      en: "What I did",
      es: "Qué hice"
    },
    text: {
      en: "Interviews, two personas, card sorting, information architecture, a 23-screen Figma prototype and a usability test.",
      es: "Entrevistas, dos personas, card sorting, arquitectura de la información, un prototipo de 23 pantallas en Figma y un test de usabilidad."
    }
  }, {
    label: {
      en: "Result",
      es: "Resultado"
    },
    text: {
      en: "All four test tasks completed without blockers. One usability issue found and documented.",
      es: "Las cuatro tareas del test se completaron sin bloqueos. Un problema de usabilidad detectado y documentado."
    }
  } ],
  blocks: [ {
    type: "text",
    title: {
      en: "The assumption I started with was wrong",
      es: "La suposición con la que empecé era errónea"
    },
    body: {
      en: [ "I assumed people don't document their trips well enough. The interviews corrected that quickly. People photograph and note things down all the time. What gets lost comes later, when those memories sit unopened on a phone.", "So Atlas is built for the second part: organising, finding and keeping a memory, with capture reduced to the smallest possible gesture." ],
      es: [ "Di por hecho que la gente no documentaba bien sus viajes. Las entrevistas lo corrigieron enseguida. La gente fotografía y apunta cosas todo el rato. Lo que se pierde viene después, cuando esos recuerdos se quedan sin abrir en el móvil.", "Por eso Atlas está pensada para la segunda parte: organizar, encontrar y conservar un recuerdo, con la captura reducida al gesto más pequeño posible." ]
    }
  }, {
    type: "split",
    title: {
      en: "What card sorting showed me",
      es: "Lo que me enseñó el card sorting"
    },
    body: {
      en: [ "I wrote two personas, Sofía and Mateo, expecting them to behave differently. In the card sorting sessions both of them, separately, split \"my current trip\" from \"all my past trips\".", "That changed the structure. The map became two things: a map of one trip, and a map of everything. I stopped designing what felt intuitive to me and followed what they were already doing." ],
      es: [ "Escribí dos personas, Sofía y Mateo, esperando que se comportaran distinto. En las sesiones de card sorting los dos, por separado, separaron \"mi viaje actual\" de \"todos mis viajes anteriores\".", "Eso cambió la estructura. El mapa pasó a ser dos cosas: el mapa de un viaje y el mapa de todo. Dejé de diseñar lo que a mí me parecía intuitivo y seguí lo que ellos ya hacían." ]
    },
    image: {
      src: "assets/projects/atlas/02-card-sorting.webp",
      alt: {
        en: "Card sorting board with the groups My trips, Log things, Before I go and Search memories",
        es: "Tablero de card sorting con los grupos Mis viajes, Apuntar cosas, Antes de ir y Buscar recuerdos"
      },
      caption: {
        en: "The groups that came out of the sessions, without me suggesting them.",
        es: "Los grupos que salieron de las sesiones, sin que yo los sugiriera."
      }
    }
  }, {
    type: "note",
    body: {
      en: "If saving something takes more than one tap, people don't do it.",
      es: "Si guardar algo cuesta más de un toque, la gente no lo hace."
    },
    by: {
      en: "the insight the whole app hangs on",
      es: "el hallazgo del que cuelga toda la app"
    }
  }, {
    type: "split",
    title: {
      en: "The riskiest call",
      es: "La decisión más arriesgada"
    },
    body: {
      en: [ "Putting \"add memory\" in the centre of the tab bar, as the main action, was the decision I doubted most. The research backed it, so I chose the bolder layout over one nobody would use.", "Saving a memory is a stack of layers over the current screen. You never leave what you were doing just to save something." ],
      es: [ "Poner \"añadir recuerdo\" en el centro de la barra inferior, como acción principal, fue la decisión que más dudé. La investigación la respaldaba, así que elegí el diseño más atrevido antes que uno que nadie usara.", "Guardar un recuerdo es una pila de capas sobre la pantalla actual. Nunca sales de lo que estabas haciendo solo para guardar algo." ]
    },
    image: {
      src: "assets/projects/atlas/03-register-flow.webp",
      alt: {
        en: "Three screens of the register flow: capture, review and confirmation",
        es: "Tres pantallas del flujo de registro: captura, revisión y confirmación"
      },
      caption: {
        en: "Capture, review, saved. The home screen stays visible underneath.",
        es: "Captura, revisión, guardado. La pantalla de inicio sigue visible debajo."
      }
    }
  }, {
    type: "image",
    src: "assets/projects/atlas/04-figma-file.webp",
    alt: {
      en: "Overview of the Atlas Figma file with the Home and Trip flows connected",
      es: "Vista general del archivo de Figma de Atlas con los flujos Home y Trip conectados"
    },
    caption: {
      en: "23 frames in six sections: Splash, Home, Trip, Register, Explore and Profile.",
      es: "23 frames en seis secciones: Splash, Home, Trip, Register, Explore y Profile."
    }
  }, {
    type: "stats",
    title: {
      en: "Usability test",
      es: "Test de usabilidad"
    },
    items: [ {
      value: "2:12",
      label: {
        en: "Create a trip and its itinerary",
        es: "Crear un viaje y su itinerario"
      }
    }, {
      value: "1:33",
      label: {
        en: "Capture a memory",
        es: "Registrar un recuerdo"
      }
    }, {
      value: "1:47",
      label: {
        en: "Find a past memory",
        es: "Encontrar un recuerdo pasado"
      }
    }, {
      value: "0:56",
      label: {
        en: "Edit the profile",
        es: "Editar el perfil"
      }
    } ],
    footnote: {
      en: "One participant, moderated, thinking aloud. Read these times as a sanity check, not a benchmark.",
      es: "Una participante, sesión moderada, pensando en voz alta. Estos tiempos son una comprobación, no una referencia."
    }
  }, {
    type: "finding",
    title: {
      en: "What the test revealed",
      es: "Lo que reveló el test"
    },
    body: {
      en: [ "On the preview screen she asked \"can I tap this?\" about the label that shows which trip the memory goes to. It was tappable. It just didn't look like it.", "My proposed fix is to turn that label into a selector with a visible chevron. It is documented but not yet built into the prototype." ],
      es: [ "En la pantalla de preview preguntó \"¿esto lo puedo tocar?\" sobre la etiqueta que indica a qué viaje va el recuerdo. Se podía tocar. Solo que no lo parecía.", "La solución que propongo es convertir esa etiqueta en un selector con un chevron visible. Está documentada, pero aún no está construida en el prototipo." ]
    }
  }, {
    type: "list",
    title: {
      en: "What I'd do differently",
      es: "Qué haría distinto"
    },
    items: [ {
      en: "Interview more people, and more varied travellers, from the start.",
      es: "Entrevistar a más gente, y a viajeros más variados, desde el principio."
    }, {
      en: "Build the content tree in Figma first, so structure and screens live in one place.",
      es: "Construir el árbol de contenidos en Figma desde el inicio, para que estructura y pantallas vivan en un solo sitio."
    }, {
      en: "Start on paper. I jumped to high fidelity before the structure was settled.",
      es: "Empezar en papel. Salté a alta fidelidad antes de tener la estructura cerrada."
    } ]
  } ]
}, {
  id: "lufe",
  title: "Lufe",
  tagline: {
    en: "Three ways to solve the same problem, and why I ruled out two.",
    es: "Tres formas de resolver el mismo problema, y por qué descarté dos."
  },
  kind: {
    en: "Brand experience strategy",
    es: "Estrategia de experiencia de marca"
  },
  year: "2026",
  theme: {
    bg: "#c4956a",
    fg: "#231c15"
  },
  thumb: {
    image: "assets/projects/lufe/thumb.webp"
  },
  meta: [ {
    label: {
      en: "Context",
      es: "Contexto"
    },
    value: {
      en: "Design Management, UOC",
      es: "Gestión del Diseño, UOC"
    }
  }, {
    label: {
      en: "My role",
      es: "Mi rol"
    },
    value: {
      en: "Analysis, proposals, selection, delivery plan",
      es: "Análisis, propuestas, selección y plan de ejecución"
    }
  }, {
    label: {
      en: "Method",
      es: "Método"
    },
    value: {
      en: "Positioning, persona, journey mapping, Scrum",
      es: "Posicionamiento, persona, journey mapping, Scrum"
    }
  } ],
  links: [ {
    label: {
      en: "Full dossier (PDF, Spanish)",
      es: "Dossier completo (PDF)"
    },
    url: "https://drive.google.com/file/d/1-Kwr3uFyvknkRUWqKx8-8s95nbLQ63Rq/view?usp=sharing"
  } ],
  disclaimer: {
    en: "Academic project about a real brand. Lufe did not commission it and is not involved. Brand photos are Lufe's own, as collected in my dossier. Market figures come from public sources; the impact numbers are my estimates.",
    es: "Proyecto académico sobre una marca real. Lufe no lo encargó ni participa. Las fotos son de la propia marca, tal como las recogí en mi dossier. Las cifras de mercado vienen de fuentes públicas; las de impacto son estimaciones mías."
  },
  summary: [ {
    label: {
      en: "Problem",
      es: "Problema"
    },
    text: {
      en: "Lufe sells solid-wood furniture online only. Customers never touch the product before they buy it.",
      es: "Lufe vende muebles de madera maciza solo online. El cliente nunca toca el producto antes de comprarlo."
    }
  }, {
    label: {
      en: "Solution",
      es: "Solución"
    },
    text: {
      en: "Lufe Studio: a 3D configurator on the website, a loyalty club and a structured TikTok plan.",
      es: "Lufe Studio: un configurador 3D en la web, un club de fidelización y un plan estructurado de TikTok."
    }
  }, {
    label: {
      en: "What I did",
      es: "Qué hice"
    },
    text: {
      en: "Analysed the brand and its market, designed three proposals, compared them on cost and risk, and planned the delivery.",
      es: "Analicé la marca y su mercado, diseñé tres propuestas, las comparé por coste y riesgo y planifiqué la ejecución."
    }
  }, {
    label: {
      en: "Target",
      es: "Objetivo"
    },
    text: {
      en: "Estimated: 3× TikTok reach, +60% retention at 12 months, +40% web conversion.",
      es: "Estimado: ×3 de alcance en TikTok, +60% de retención a 12 meses, +40% de conversión web."
    }
  } ],
  blocks: [ {
    type: "gallery",
    columns: 3,
    crop: true,
    images: [ {
      src: "assets/projects/lufe/photos/storefront.webp",
      alt: {
        en: "Lufe shop sign on a street: 100% natural furniture with plenty of style",
        es: "Cartel de Lufe en la calle: muebles 100% naturales y con mucho estilo"
      }
    }, {
      src: "assets/projects/lufe/photos/sanding.webp",
      alt: {
        en: "A pine board being sanded in the workshop",
        es: "Un tablero de pino lijándose en el taller"
      }
    }, {
      src: "assets/projects/lufe/photos/drawers.webp",
      alt: {
        en: "A solid pine chest of drawers in a bedroom",
        es: "Una cómoda de pino macizo en un dormitorio"
      }
    } ]
  }, {
    type: "text",
    title: {
      en: "The brand",
      es: "La marca"
    },
    body: {
      en: [ "Lufe makes solid pine furniture in the Basque Country and sells it direct, with no shops and no middlemen. It grew on honest pricing, certified wood and a lot of organic reach on Instagram.", "The brief asked for an omnichannel experience aimed at millennials, new technology, and a brand that feels disruptive without losing its sustainability." ],
      es: [ "Lufe fabrica muebles de pino macizo en el País Vasco y los vende directamente, sin tiendas ni intermediarios. Creció con precios honestos, madera certificada y mucho alcance orgánico en Instagram.", "El encargo pedía una experiencia omnicanal para millennials, nuevas tecnologías y una marca que se sintiera disruptiva sin perder su sostenibilidad." ]
    }
  }, {
    type: "stats",
    items: [ {
      value: "×7",
      label: {
        en: "Revenue growth, 2019 to 2024",
        es: "Crecimiento de facturación, 2019 a 2024"
      }
    }, {
      value: "377K",
      label: {
        en: "Instagram followers",
        es: "Seguidores en Instagram"
      }
    }, {
      value: "48",
      label: {
        en: "People in the company",
        es: "Personas en la empresa"
      }
    }, {
      value: "32%",
      label: {
        en: "Share of Spanish furniture sales already online",
        es: "Parte de las ventas de mueble en España que ya es online"
      }
    } ],
    footnote: {
      en: "Public figures gathered for the dossier.",
      es: "Cifras públicas recogidas para el dossier."
    }
  }, {
    type: "map",
    title: {
      en: "A position nobody else holds",
      es: "Una posición que nadie más ocupa"
    },
    body: {
      en: [ "Price against sustainability. Lufe is the only brand combining certified solid wood, local production and factory prices. Hover a brand to see why it sits where it does." ],
      es: [ "Precio frente a sostenibilidad. Lufe es la única marca que junta madera maciza certificada, fabricación local y precio de fábrica. Pasa por encima de una marca para ver por qué está ahí." ]
    },
    axes: {
      left: {
        en: "Lower price",
        es: "Precio bajo"
      },
      right: {
        en: "Higher price",
        es: "Precio alto"
      },
      top: {
        en: "More sustainable",
        es: "Más sostenible"
      },
      bottom: {
        en: "Less sustainable",
        es: "Menos sostenible"
      }
    },
    points: [ {
      name: "Lufe",
      x: 25,
      y: 22,
      highlight: true,
      note: {
        en: "Solid wood · direct to consumer · made locally",
        es: "Madera maciza · venta directa · fabricación local"
      }
    }, {
      name: "Kave Home",
      x: 70,
      y: 27,
      note: {
        en: "Premium · design-led",
        es: "Premium · diseño"
      }
    }, {
      name: "La Redoute",
      x: 62,
      y: 61,
      note: {
        en: "Fashion · catalogue",
        es: "Moda · catálogo"
      }
    }, {
      name: "IKEA",
      x: 14,
      y: 70,
      note: {
        en: "Laminate · global",
        es: "Laminado · global"
      }
    }, {
      name: "Sklum",
      x: 36,
      y: 79,
      note: {
        en: "Trend-led · online",
        es: "Tendencia · online"
      }
    }, {
      name: "El Corte Inglés",
      x: 89,
      y: 75,
      note: {
        en: "Generalist · expensive",
        es: "Generalista · caro"
      }
    } ]
  }, {
    type: "persona",
    title: {
      en: "Who buys",
      es: "Quién compra"
    },
    name: "Sofía Martínez, 27",
    role: {
      en: "UX designer · Barcelona · €1,600 a month",
      es: "Diseñadora UX · Barcelona · 1.600 € al mes"
    },
    image: {
      src: "assets/projects/lufe/photos/desk.webp",
      alt: {
        en: "A pine desk with a sketchbook and brushes",
        es: "Un escritorio de pino con un cuaderno y pinceles"
      }
    },
    sections: [ {
      label: {
        en: "Who she is",
        es: "Quién es"
      },
      text: {
        en: "Part of the first generation furnishing a home without parents' hand-me-downs. No car, so buying in a physical store means extra logistics and cost.",
        es: "Parte de la primera generación que amuebla su casa sin muebles heredados. No tiene coche, así que comprar en tienda física implica logística y coste extra."
      }
    }, {
      label: {
        en: "Digital habits",
        es: "Hábitos digitales"
      },
      text: {
        en: "Instagram and Pinterest for ideas, TikTok to discover brands, YouTube for assembly tutorials. 90% of her shopping is online.",
        es: "Instagram y Pinterest para inspirarse, TikTok para descubrir marcas, YouTube para tutoriales de montaje. El 90% de sus compras son online."
      }
    }, {
      label: {
        en: "What she needs",
        es: "Qué necesita"
      },
      text: {
        en: "A home with a personal touch and an environmental commitment, without going over budget, and delivery she can rely on.",
        es: "Un hogar con toque personal y compromiso medioambiental, sin pasarse de presupuesto, y una entrega en la que pueda confiar."
      }
    }, {
      label: {
        en: "How she buys",
        es: "Cómo compra"
      },
      text: {
        en: "Two to four weeks of research and reviews before paying. Certified sustainability is a deciding factor, not just an ideal.",
        es: "De dos a cuatro semanas investigando y leyendo opiniones antes de pagar. La sostenibilidad certificada es un factor decisivo, no solo un ideal."
      }
    } ]
  }, {
    type: "list",
    title: {
      en: "Where the experience breaks",
      es: "Dónde se rompe la experiencia"
    },
    items: [ {
      en: "The customer never touches the product before buying. This is the gap that matters most.",
      es: "El cliente nunca toca el producto antes de comprar. Es el hueco que más importa."
    }, {
      en: "No 3D configurator or AR to see the piece at home.",
      es: "Ni configurador 3D ni AR para ver el mueble en casa."
    }, {
      en: "No formal loyalty programme.",
      es: "Ningún programa de fidelización formal."
    }, {
      en: "TikTok, where her generation discovers brands, is barely used.",
      es: "TikTok, donde su generación descubre marcas, apenas se usa."
    }, {
      en: "Outsourced delivery and assembly instructions that could be clearer.",
      es: "Logística subcontratada e instrucciones de montaje mejorables."
    } ]
  }, {
    type: "text",
    title: {
      en: "Three directions, one recommendation",
      es: "Tres caminos, una recomendación"
    },
    body: {
      en: [ "I designed three directions and presented all three. Explaining why something should not be built is part of the job.", "Directo was too cautious to change anything that mattered. Nodo covered every objective, but it asked a 48-person company for an investment and an operation it could not yet carry." ],
      es: [ "Diseñé tres caminos y presenté los tres. Explicar por qué algo no debería hacerse es parte del trabajo.", "Directo era demasiado prudente para cambiar nada importante. Nodo cubría todos los objetivos, pero pedía a una empresa de 48 personas una inversión y una operación que aún no podía sostener." ]
    }
  }, {
    type: "options",
    objectives: [ {
      en: "Omnichannel for millennials",
      es: "Omnicanal millennial"
    }, {
      en: "A unique customer experience",
      es: "Experiencia de cliente única"
    }, {
      en: "Integrated digital strategy",
      es: "Estrategia digital integrada"
    }, {
      en: "Consistent touchpoints",
      es: "Coherencia entre puntos de contacto"
    }, {
      en: "New technology",
      es: "Nuevas tecnologías"
    }, {
      en: "Disruptive, sustainable brand",
      es: "Marca disruptiva y sostenible"
    } ],
    items: [ {
      name: "Directo",
      label: {
        en: "Conservative",
        es: "Conservadora"
      },
      text: {
        en: "Optimise what exists: live order tracking, assembly instructions with QR videos, segmented email and better packaging.",
        es: "Optimizar lo que existe: seguimiento del pedido en tiempo real, instrucciones con vídeos por QR, email segmentado y mejor packaging."
      },
      specs: [ [ {
        en: "Investment",
        es: "Inversión"
      }, "€12–18K" ], [ {
        en: "Duration",
        es: "Duración"
      }, {
        en: "3–4 months",
        es: "3–4 meses"
      } ], [ {
        en: "Risk",
        es: "Riesgo"
      }, {
        en: "Low",
        es: "Bajo"
      } ] ],
      levels: [ 2, 3, 1, 3, 1, 2 ],
      verdict: {
        en: "Doesn't solve the touch gap.",
        es: "No resuelve el hueco táctil."
      }
    }, {
      name: "Studio",
      label: {
        en: "Continuity",
        es: "Continuista"
      },
      chosen: true,
      text: {
        en: "The website becomes a showroom with a 3D configurator, the first loyalty club, and a TikTok plan with a content system behind it.",
        es: "La web se convierte en showroom con un configurador 3D, el primer club de fidelización y un plan de TikTok con sistema de contenido detrás."
      },
      specs: [ [ {
        en: "Investment",
        es: "Inversión"
      }, "€35–55K" ], [ {
        en: "Duration",
        es: "Duración"
      }, {
        en: "5 months",
        es: "5 meses"
      } ], [ {
        en: "Risk",
        es: "Riesgo"
      }, {
        en: "Medium",
        es: "Medio"
      } ] ],
      levels: [ 3, 3, 3, 3, 3, 2 ],
      verdict: {
        en: "Most objectives at the lowest risk. Chosen.",
        es: "Más objetivos con el menor riesgo. La elegida."
      }
    }, {
      name: "Nodo",
      label: {
        en: "Innovative",
        es: "Innovadora"
      },
      text: {
        en: "Rotating showrooms in three cities, a native AR app, community co-design and an ambassador programme.",
        es: "Showrooms rotativos en tres ciudades, app nativa con AR, codiseño con la comunidad y programa de embajadores."
      },
      specs: [ [ {
        en: "Investment",
        es: "Inversión"
      }, "€90–140K" ], [ {
        en: "Duration",
        es: "Duración"
      }, {
        en: "8–10 months",
        es: "8–10 meses"
      } ], [ {
        en: "Risk",
        es: "Riesgo"
      }, {
        en: "High",
        es: "Alto"
      } ] ],
      levels: [ 3, 3, 3, 3, 3, 3 ],
      verdict: {
        en: "Right in 3–5 years. Too early for a 48-person company.",
        es: "Correcta a 3–5 años. Demasiado pronto para una empresa de 48 personas."
      }
    } ],
    footnote: {
      en: "Bars show how well each proposal covers each of the client's six objectives: low, medium or high.",
      es: "Las barras muestran cuánto cubre cada propuesta cada uno de los seis objetivos del cliente: bajo, medio o alto."
    }
  }, {
    type: "cards",
    title: {
      en: "Lufe Studio in three pillars",
      es: "Lufe Studio en tres pilares"
    },
    items: [ {
      image: {
        src: "assets/projects/lufe/photos/shelf.webp",
        alt: {
          en: "A pine shelf with a bowl of apples",
          es: "Una estantería de pino con un cuenco de manzanas"
        }
      },
      title: {
        en: "3D configurator",
        es: "Configurador 3D"
      },
      text: {
        en: "Choose size and finish on the product page and see the piece rendered. AR on mobile comes in a second phase. It answers the touch gap directly.",
        es: "Eliges medidas y acabado en la ficha del producto y ves el mueble renderizado. La AR en móvil llega en una segunda fase. Responde directamente al hueco táctil."
      }
    }, {
      image: {
        src: "assets/projects/lufe/photos/wood.webp",
        alt: {
          en: "Stacked pine offcuts",
          es: "Recortes de pino apilados"
        }
      },
      title: "Club LUFE",
      text: {
        en: "Three tiers named after wood: Madera, Pino and Roble. Points for purchases, reviews and content, plus early access to new drops.",
        es: "Tres niveles con nombre de madera: Madera, Pino y Roble. Puntos por compras, reseñas y contenido, y acceso anticipado a los nuevos lanzamientos."
      }
    }, {
      image: {
        src: "assets/projects/lufe/photos/rack.webp",
        alt: {
          en: "A pine clothes rail with knitwear",
          es: "Un perchero de pino con jerséis"
        }
      },
      title: "TikTok System",
      text: {
        en: "An editorial calendar, a behind-the-scenes series from the factory called \"Serrín y Diseño\", micro-influencers and before-and-after posts from real club members.",
        es: "Calendario editorial, una serie de backstage en fábrica llamada \"Serrín y Diseño\", microinfluencers y antes y después con miembros reales del club."
      }
    } ]
  }, {
    type: "timeline",
    title: {
      en: "Planning it like a product team would",
      es: "Planificarlo como lo haría un equipo de producto"
    },
    body: {
      en: [ "Ten two-week sprints over five months, with something testable on real users from the first month. The pillars are independent, so a delay in the configurator doesn't stop the club or TikTok.", "Six roles: product manager acting as Scrum master, UX/UI designer, front-end developer, 3D artist, content manager and digital marketing." ],
      es: [ "Diez sprints de dos semanas en cinco meses, con algo que probar con usuarios reales desde el primer mes. Los pilares son independientes, así que un retraso en el configurador no frena el club ni TikTok.", "Seis roles: product manager que hace de Scrum master, diseñador UX/UI, desarrollador front-end, artista 3D, content manager y marketing digital." ]
    },
    units: 10,
    unitLabel: {
      en: "S",
      es: "S"
    },
    groups: [ {
      name: {
        en: "Analysis",
        es: "Análisis"
      },
      rows: [ {
        label: {
          en: "Kick-off and team briefing",
          es: "Kick-off y briefing del equipo"
        },
        from: 1,
        to: 2
      }, {
        label: {
          en: "Design sprint (5 days)",
          es: "Design sprint (5 días)"
        },
        from: 1,
        to: 1
      }, {
        label: {
          en: "Scrum set-up and backlog",
          es: "Montaje de Scrum y backlog"
        },
        from: 1,
        to: 2
      } ]
    }, {
      name: {
        en: "Production",
        es: "Producción"
      },
      rows: [ {
        label: {
          en: "3D configurator",
          es: "Configurador 3D"
        },
        from: 3,
        to: 6
      }, {
        label: {
          en: "Club LUFE platform",
          es: "Plataforma Club LUFE"
        },
        from: 3,
        to: 5
      }, {
        label: {
          en: "TikTok System",
          es: "TikTok System"
        },
        from: 4,
        to: 6
      } ]
    }, {
      name: {
        en: "Launch",
        es: "Lanzamiento"
      },
      rows: [ {
        label: {
          en: "Rollout and beta with club members",
          es: "Implementación y beta con el club"
        },
        from: 7,
        to: 7
      }, {
        label: {
          en: "Tracking, KPIs and iteration",
          es: "Seguimiento, KPIs e iteración"
        },
        from: 9,
        to: 10
      } ]
    } ]
  }, {
    type: "stats",
    title: {
      en: "What it aims for",
      es: "A qué aspira"
    },
    items: [ {
      value: "×3",
      label: {
        en: "TikTok reach",
        es: "Alcance en TikTok"
      }
    }, {
      value: "+60%",
      label: {
        en: "Retention at 12 months",
        es: "Retención a 12 meses"
      }
    }, {
      value: "+40%",
      label: {
        en: "Web conversion",
        es: "Conversión web"
      }
    } ],
    footnote: {
      en: "Targets I estimated for the proposal. None of this was implemented or measured.",
      es: "Objetivos que estimé para la propuesta. Nada de esto se implementó ni se midió."
    }
  } ]
}, {
  id: "sal",
  title: "Sal",
  tagline: {
    en: "A magazine about radical cooking, laid out with the same restraint.",
    es: "Una revista sobre cocina radical, maquetada con la misma contención."
  },
  kind: {
    en: "Editorial design",
    es: "Diseño editorial"
  },
  year: "2026",
  theme: {
    bg: "#8e1a24",
    fg: "#f4f1ea"
  },
  thumb: {
    image: "assets/projects/sal/thumb.webp"
  },
  cover: {
    src: "assets/projects/sal/01-covers-n01.webp",
    alt: {
      en: "Cover and back cover of SAL issue 01, Pioneras",
      es: "Portada y contraportada de SAL número 01, Pioneras"
    }
  },
  meta: [ {
    label: {
      en: "Context",
      es: "Contexto"
    },
    value: {
      en: "Editorial Design, UOC",
      es: "Diseño Editorial, UOC"
    }
  }, {
    label: {
      en: "My role",
      es: "Mi rol"
    },
    value: {
      en: "Concept, art direction, layout",
      es: "Concepto, dirección de arte y maquetación"
    }
  }, {
    label: {
      en: "Format",
      es: "Formato"
    },
    value: {
      en: "230 × 300 mm, six-column grid",
      es: "230 × 300 mm, retícula de seis columnas"
    }
  } ],
  links: [ {
    label: {
      en: "Read the issue (PDF, Spanish)",
      es: "Leer el número (PDF)"
    },
    url: "https://drive.google.com/file/d/1yWVafKXT-B782ivs3-IvM2Z67s4DlNmu/view?usp=sharing"
  } ],
  summary: [ {
    label: {
      en: "Brief",
      es: "Encargo"
    },
    text: {
      en: "Design the covers and a feature article for a new food magazine.",
      es: "Diseñar las portadas y un reportaje para una nueva revista gastronómica."
    }
  }, {
    label: {
      en: "Idea",
      es: "Idea"
    },
    text: {
      en: "The chefs in it gave up decoration. The magazine does too.",
      es: "Las chefs que aparecen renunciaron al adorno. La revista también."
    }
  }, {
    label: {
      en: "System",
      es: "Sistema"
    },
    text: {
      en: "Six columns, two typefaces and one accent colour per issue.",
      es: "Seis columnas, dos tipografías y un color de acento por número."
    }
  }, {
    label: {
      en: "Output",
      es: "Resultado"
    },
    text: {
      en: "Two covers, a contents page and a four-page feature.",
      es: "Dos portadas, un sumario y un reportaje de cuatro páginas."
    }
  } ],
  blocks: [ {
    type: "text",
    title: {
      en: "Nothing decorative",
      es: "Nada decorativo"
    },
    body: {
      en: [ "SAL is about chefs who left technical perfection behind for something more honest and less comfortable. I wanted the magazine to behave the same way. Every blank space and every page break had to earn its place." ],
      es: [ "SAL habla de chefs que dejaron atrás la perfección técnica por algo más honesto y menos cómodo. Quise que la revista se comportara igual. Cada espacio en blanco y cada corte de página tenía que ganarse su sitio." ]
    }
  }, {
    type: "flipbook",
    title: {
      en: "Turn the pages",
      es: "Pasa las páginas"
    },
    pages: [ {
      src: "assets/projects/sal/book/00-cover.webp",
      alt: {
        en: "Cover of SAL issue 01, Pioneras",
        es: "Portada de SAL número 01, Pioneras"
      }
    }, {
      src: "assets/projects/sal/book/01-p02.webp",
      alt: {
        en: "Page 2: editor's quote on a red page",
        es: "Página 2: cita editorial sobre página roja"
      }
    }, {
      src: "assets/projects/sal/book/02-p03.webp",
      alt: {
        en: "Page 3: contents",
        es: "Página 3: sumario"
      }
    }, {
      src: "assets/projects/sal/book/03-p04.webp",
      alt: {
        en: "Page 4: full-bleed photograph of a chef plating",
        es: "Página 4: fotografía a sangre de una chef emplatando"
      }
    }, {
      src: "assets/projects/sal/book/04-p05.webp",
      alt: {
        en: "Page 5: opening of the feature The Core, Pioneras 2025",
        es: "Página 5: apertura del reportaje The Core, Pioneras 2025"
      }
    }, {
      src: "assets/projects/sal/book/05-p06.webp",
      alt: {
        en: "Page 6: the feature continues on red",
        es: "Página 6: el reportaje sigue sobre rojo"
      }
    }, {
      src: "assets/projects/sal/book/06-p07.webp",
      alt: {
        en: "Page 7: closing page with a narrow column",
        es: "Página 7: cierre con columna estrecha"
      }
    }, {
      src: "assets/projects/sal/book/07-back.webp",
      alt: {
        en: "Back cover with a quote",
        es: "Contraportada con una cita"
      }
    } ],
    caption: {
      en: "Issue 01, from cover to back. Click or use the arrows to turn the page. Photography in the layouts is stock from Unsplash.",
      es: "Número 01, de portada a contraportada. Haz clic o usa las flechas para pasar página. Las fotografías de las maquetas son de archivo, de Unsplash."
    }
  }, {
    type: "split",
    title: {
      en: "A system you only notice when it's gone",
      es: "Un sistema que solo se nota cuando falta"
    },
    body: {
      en: [ "A six-column grid on a 230 × 300 mm page. Fraunces for impact and Syne for long reading. Text set ragged right, with no hyphenation.", "If something drew the eye without a reason, I took it out." ],
      es: [ "Una retícula de seis columnas sobre página de 230 × 300 mm. Fraunces para el impacto y Syne para la lectura larga. Texto en bandera, sin partición de palabras.", "Si algo llamaba la atención sin motivo, lo quité." ]
    },
    image: {
      src: "assets/projects/sal/06-grid.webp",
      alt: {
        en: "Article spread with the six-column grid and guides visible",
        es: "Doble página del artículo con la retícula de seis columnas y las guías visibles"
      },
      caption: {
        en: "The spread with its grid switched on.",
        es: "La doble página con la retícula a la vista."
      }
    }
  }, {
    type: "image",
    src: "assets/projects/sal/02-covers-n02.webp",
    alt: {
      en: "Cover and back cover of SAL issue 02 in yellow, Fermentación salvaje",
      es: "Portada y contraportada de SAL número 02 en amarillo, Fermentación salvaje"
    },
    caption: {
      en: "Issue 02. The accent colour changes. The structure does not.",
      es: "Número 02. Cambia el color de acento. La estructura no."
    }
  }, {
    type: "text",
    title: {
      en: "Designing the pace",
      es: "Diseñar el ritmo"
    },
    body: {
      en: [ "The feature opens with a full-bleed photograph. The next page slows down with a pull quote. The close narrows the column so you read more slowly. That sequence was the plan from the first sketch." ],
      es: [ "El reportaje abre con una fotografía a sangre. La página siguiente frena con una cita destacada. El cierre estrecha la columna para que leas más despacio. Esa secuencia era el plan desde el primer boceto." ]
    }
  } ]
}, {
  id: "artecodigo",
  title: "ArteCódigo",
  tagline: {
    en: "A fictional brand, a real design system.",
    es: "Una marca ficticia, un sistema de diseño real."
  },
  kind: {
    en: "Brand identity",
    es: "Identidad de marca"
  },
  year: "2025",
  theme: {
    bg: "#0a0a0a",
    fg: "#ffffff"
  },
  thumb: {
    image: "assets/projects/artecodigo/thumb.webp"
  },
  cover: {
    src: "assets/projects/artecodigo/01-applications.webp",
    alt: {
      en: "ArteCódigo business cards, tote bag, lanyard and event poster",
      es: "Tarjetas, tote bag, acreditación y cartel de evento de ArteCódigo"
    }
  },
  meta: [ {
    label: {
      en: "Context",
      es: "Contexto"
    },
    value: {
      en: "Identity and Brand, UOC",
      es: "Identidad y Marca, UOC"
    }
  }, {
    label: {
      en: "My role",
      es: "Mi rol"
    },
    value: {
      en: "Concept, logo, system, brand manual",
      es: "Concepto, logotipo, sistema y manual de marca"
    }
  }, {
    label: {
      en: "Output",
      es: "Entregable"
    },
    value: {
      en: "Brand manual and applications",
      es: "Manual de marca y aplicaciones"
    }
  } ],
  links: [],
  summary: [ {
    label: {
      en: "Brief",
      es: "Encargo"
    },
    text: {
      en: "Create the identity for a cultural centre where art and technology meet.",
      es: "Crear la identidad de un centro cultural donde se encuentran arte y tecnología."
    }
  }, {
    label: {
      en: "Idea",
      es: "Idea"
    },
    text: {
      en: "\"Where art meets code\". Every element is either organic, systematic, or a deliberate mix.",
      es: "\"Donde el arte se encuentra con el código\". Cada elemento es orgánico, sistemático o una mezcla deliberada."
    }
  }, {
    label: {
      en: "System",
      es: "Sistema"
    },
    text: {
      en: "A pixel isotype on an 8 × 8 grid, two monospaced typefaces and five colours.",
      es: "Un isotipo de píxeles sobre retícula de 8 × 8, dos tipografías monoespaciadas y cinco colores."
    }
  }, {
    label: {
      en: "Output",
      es: "Resultado"
    },
    text: {
      en: "A brand manual with rules for size, colour and type, applied to print, signage, merchandise and screens.",
      es: "Un manual de marca con normas de tamaño, color y tipografía, aplicado a papelería, señalética, merchandising y pantallas."
    }
  } ],
  blocks: [ {
    type: "logo",
    title: {
      en: "A logo built like code",
      es: "Un logo construido como código"
    },
    body: {
      en: [ "The isotype is three pixels in a 2 × 3 module area, set on an 8 × 8 grid with 45° diagonals, as strict as any digital design system. The wordmark is Anonymous Pro Bold, technical and monospaced.", "The rule for colour is simple: the logo always appears in a single tone, ideally black or white. Try it on each brand colour." ],
      es: [ "El isotipo son tres píxeles en un área de 2 × 3 módulos, sobre una retícula de 8 × 8 con diagonales a 45°, tan estricta como cualquier sistema de diseño digital. El wordmark es Anonymous Pro Bold, técnica y monoespaciada.", "La norma de color es simple: el logo siempre va en un solo tono, idealmente blanco o negro. Pruébalo sobre cada color de la marca." ]
    },
    cells: [ [ 0, 0 ], [ 1, 1 ], [ 0, 2 ] ],
    cols: 2,
    rows: 3,
    wordmark: "ArteCódigo",
    font: "'Anonymous Pro'",
    backgrounds: [ {
      name: "Black",
      hex: "#000000"
    }, {
      name: "White",
      hex: "#ffffff"
    }, {
      name: "Red",
      hex: "#ff0040"
    }, {
      name: "Blue",
      hex: "#0040ff"
    }, {
      name: "Yellow",
      hex: "#ffe100"
    } ],
    caption: {
      en: "Rebuilt live from the manual's rules. Minimum size: 20 mm in print, 72 px on screen.",
      es: "Reconstruido en vivo con las normas del manual. Tamaño mínimo: 20 mm en impresión y 72 px en pantalla."
    }
  }, {
    type: "palette",
    title: {
      en: "Five colours, one job each",
      es: "Cinco colores, una función cada uno"
    },
    colors: [ {
      name: "Black",
      hex: "#000000",
      role: {
        en: "The logo, by default",
        es: "El logo, por defecto"
      },
      rgb: "0 0 0",
      cmyk: "100 61 32 96",
      pms: "PMS Black 6 C"
    }, {
      name: "White",
      hex: "#ffffff",
      role: {
        en: "Logo in negative",
        es: "Logo en negativo"
      },
      rgb: "255 255 255",
      cmyk: "0 0 0 0",
      pms: "PMS Bright White"
    }, {
      name: "Red",
      hex: "#ff0040",
      role: {
        en: "Accent",
        es: "Acento"
      },
      rgb: "255 0 64",
      cmyk: "0 89 69 0",
      pms: "PMS 1788 C"
    }, {
      name: "Blue",
      hex: "#0040ff",
      role: {
        en: "Accent",
        es: "Acento"
      },
      rgb: "0 64 255",
      cmyk: "84 62 0 0",
      pms: "PMS 2935 C"
    }, {
      name: "Yellow",
      hex: "#ffe100",
      role: {
        en: "Accent",
        es: "Acento"
      },
      rgb: "255 225 0",
      cmyk: "0 2 99 0",
      pms: "PMS 108 C"
    } ],
    caption: {
      en: "Click a colour to copy its HEX.",
      es: "Haz clic en un color para copiar su HEX."
    }
  }, {
    type: "type",
    title: {
      en: "Two monospaced voices",
      es: "Dos voces monoespaciadas"
    },
    sample: {
      en: "Where art meets code.",
      es: "Donde el arte se encuentra con el código."
    },
    fonts: [ {
      name: "Anonymous Pro",
      family: "'Anonymous Pro'",
      role: {
        en: "logotype",
        es: "logotipo"
      },
      weights: [ {
        name: "Regular",
        value: 400
      }, {
        name: "Bold",
        value: 700
      } ]
    }, {
      name: "Roboto Mono",
      family: "'Roboto Mono'",
      role: {
        en: "everything else",
        es: "todo lo demás"
      },
      weights: [ {
        name: "Light",
        value: 300
      }, {
        name: "Regular",
        value: 400
      }, {
        name: "Medium",
        value: 500
      }, {
        name: "Bold",
        value: 700
      } ]
    } ],
    caption: {
      en: "The sample text is editable. Type anything.",
      es: "El texto de muestra se puede editar. Escribe lo que quieras."
    }
  }, {
    type: "split",
    title: {
      en: "Out of the PDF",
      es: "Fuera del PDF"
    },
    body: {
      en: [ "A brand manual only proves something if the system survives outside the document. So I took it to a wall sign, a shopfront, a T-shirt and a phone screen." ],
      es: [ "Un manual de marca solo demuestra algo si el sistema sobrevive fuera del documento. Así que lo llevé a una señal de pared, una fachada, una camiseta y la pantalla de un móvil." ]
    },
    image: {
      src: "assets/projects/artecodigo/06-signage-facade.webp",
      alt: {
        en: "Interior wayfinding signs and the shopfront with the ArteCódigo logo",
        es: "Señalética interior y la fachada con el logotipo de ArteCódigo"
      },
      caption: {
        en: "Wayfinding and the shopfront.",
        es: "Señalética y fachada."
      }
    }
  }, {
    type: "gallery",
    columns: 3,
    images: [ {
      src: "assets/projects/artecodigo/02-app.webp",
      alt: {
        en: "Splash screen and events feed of the ArteCódigo app",
        es: "Splash y lista de eventos de la app de ArteCódigo"
      },
      caption: {
        en: "The events app.",
        es: "La app de eventos."
      }
    }, {
      src: "assets/projects/artecodigo/08-merch.webp",
      alt: {
        en: "Hoodie, T-shirts and joggers with the isotype",
        es: "Sudadera, camisetas y pantalón con el isotipo"
      },
      caption: {
        en: "Merchandise.",
        es: "Merchandising."
      }
    }, {
      src: "assets/projects/artecodigo/07-social.webp",
      alt: {
        en: "Letterhead and social media posts for an event",
        es: "Papel de carta y publicaciones en redes para un evento"
      },
      caption: {
        en: "Stationery and social posts.",
        es: "Papelería y redes."
      }
    } ]
  }, {
    type: "image",
    src: "assets/projects/artecodigo/03-logo-construction.webp",
    alt: {
      en: "Brand manual page with the logo construction grid, clear space and minimum size",
      es: "Página del manual con la retícula de construcción del logo, el área de respeto y el tamaño mínimo"
    },
    caption: {
      en: "The original manual page: construction grid and clear space.",
      es: "La página original del manual: retícula de construcción y área de respeto."
    }
  } ]
}, {
  id: "nexus",
  title: "Nexus",
  tagline: {
    en: "Four pages, coded by hand, built to be accessible.",
    es: "Cuatro páginas, maquetadas a mano, pensadas para ser accesibles."
  },
  kind: {
    en: "Front-end build · HTML and CSS",
    es: "Maquetación · HTML y CSS"
  },
  year: "2026",
  theme: {
    bg: "#c8ff4d",
    fg: "#0a0a0a"
  },
  thumb: {
    image: "assets/projects/nexus/thumb.webp"
  },
  meta: [ {
    label: {
      en: "Context",
      es: "Contexto"
    },
    value: {
      en: "HTML and CSS, UOC",
      es: "HTML y CSS, UOC"
    }
  }, {
    label: {
      en: "My role",
      es: "Mi rol"
    },
    value: {
      en: "All the code. The visual design was supplied by the course.",
      es: "Todo el código. El diseño visual lo daba la asignatura."
    }
  }, {
    label: {
      en: "Standard",
      es: "Estándar"
    },
    value: {
      en: "Valid HTML5, WCAG 2.0 AA",
      es: "HTML5 válido, WCAG 2.0 AA"
    }
  } ],
  links: [ {
    label: {
      en: "Visit the live site",
      es: "Ver la web en vivo"
    },
    url: "https://dsporraso21.github.io/practica-html-css/index.html"
  }, {
    label: {
      en: "Code on GitHub",
      es: "Código en GitHub"
    },
    url: "https://github.com/dsporraso21/practica-html-css"
  } ],
  summary: [ {
    label: {
      en: "Brief",
      es: "Encargo"
    },
    text: {
      en: "Code a four-page agency site from a supplied design: home, services, about and contact.",
      es: "Maquetar una web de agencia de cuatro páginas a partir de un diseño dado: inicio, servicios, sobre nosotros y contacto."
    }
  }, {
    label: {
      en: "Constraint",
      es: "Restricción"
    },
    text: {
      en: "Semantic markup, organised CSS that can grow, valid code, and WCAG AA accessibility.",
      es: "Marcado semántico, CSS organizado y ampliable, código válido y accesibilidad WCAG AA."
    }
  }, {
    label: {
      en: "What I did",
      es: "Qué hice"
    },
    text: {
      en: "Wrote the HTML and CSS by hand with flexbox and grid, and documented every structure for whoever maintains it next.",
      es: "Escribí el HTML y el CSS a mano con flexbox y grid, y documenté cada estructura para quien lo mantenga después."
    }
  }, {
    label: {
      en: "Why it's here",
      es: "Por qué está aquí"
    },
    text: {
      en: "I design better when I know what the handoff costs to build.",
      es: "Diseño mejor cuando sé lo que cuesta construir lo que entrego."
    }
  } ],
  blocks: [ {
    type: "device",
    title: {
      en: "Browse the live build",
      es: "Recorre la web en vivo"
    },
    body: {
      en: [ "All four pages as they run online today. Switch pages and screen sizes, and scroll inside the frame." ],
      es: [ "Las cuatro páginas tal como funcionan hoy en internet. Cambia de página y de tamaño de pantalla, y desplázate dentro del marco." ]
    },
    url: "https://dsporraso21.github.io/practica-html-css/index.html",
    alt: {
      en: "Full-page capture of the Nexus site",
      es: "Captura completa de la web de Nexus"
    },
    sizes: [ {
      key: "desktop",
      label: {
        en: "Desktop",
        es: "Escritorio"
      }
    }, {
      key: "tablet",
      label: "Tablet"
    }, {
      key: "mobile",
      label: {
        en: "Mobile",
        es: "Móvil"
      }
    } ],
    pages: [ {
      label: {
        en: "Home",
        es: "Inicio"
      },
      path: "index.html",
      shots: {
        desktop: "assets/projects/nexus/live/desktop-index.webp",
        tablet: "assets/projects/nexus/live/tablet-index.webp",
        mobile: "assets/projects/nexus/live/mobile-index.webp"
      }
    }, {
      label: {
        en: "Services",
        es: "Servicios"
      },
      path: "services.html",
      shots: {
        desktop: "assets/projects/nexus/live/desktop-services.webp",
        tablet: "assets/projects/nexus/live/tablet-services.webp",
        mobile: "assets/projects/nexus/live/mobile-services.webp"
      }
    }, {
      label: {
        en: "About",
        es: "Nosotros"
      },
      path: "about.html",
      shots: {
        desktop: "assets/projects/nexus/live/desktop-about.webp",
        tablet: "assets/projects/nexus/live/tablet-about.webp",
        mobile: "assets/projects/nexus/live/mobile-about.webp"
      }
    }, {
      label: {
        en: "Contact",
        es: "Contacto"
      },
      path: "contact.html",
      shots: {
        desktop: "assets/projects/nexus/live/desktop-contact.webp",
        tablet: "assets/projects/nexus/live/tablet-contact.webp",
        mobile: "assets/projects/nexus/live/mobile-contact.webp"
      }
    } ]
  }, {
    type: "text",
    title: {
      en: "Accessible past what you can see",
      es: "Accesible más allá de lo que se ve"
    },
    body: {
      en: [ "The first element in the page is a skip link, hidden until it receives keyboard focus. Every form field has its own `label` and a visible focus state.", "Required fields are marked with `required` and `aria-required`, so a screen reader announces them. A coloured asterisk alone would not." ],
      es: [ "El primer elemento de la página es un enlace de salto, oculto hasta que recibe el foco del teclado. Cada campo del formulario tiene su `label` y un estado de foco visible.", "Los campos obligatorios llevan `required` y `aria-required`, para que un lector de pantalla los anuncie. Un asterisco de color por sí solo no lo haría." ]
    }
  }, {
    type: "code",
    title: {
      en: "The skeleton every page shares",
      es: "El esqueleto que comparten todas las páginas"
    },
    body: {
      en: [ "None of this changes how the site looks. It changes who can use it. Hover a note to find its line." ],
      es: [ "Nada de esto cambia cómo se ve la web. Cambia quién puede usarla. Pasa por encima de una nota para ver su línea." ]
    },
    code: "<body>\n  <a class=\"skip-link\" href=\"#main-content\">…</a>\n  <header class=\"header\">\n    <nav aria-label=\"Main navigation\">\n      <a href=\"index.html\" class=\"active\" aria-current=\"page\">Portfolio</a>\n    </nav>\n  </header>\n  <main id=\"main-content\">\n    <section aria-labelledby=\"…\">\n      <h2 id=\"…\">…</h2>\n    </section>\n  </main>\n  <footer class=\"footer\">\n    <address>…</address>\n    <nav aria-label=\"Social media links\">…</nav>\n  </footer>\n</body>",
    notes: [ {
      line: 2,
      text: {
        en: "Skip link: the first thing a keyboard reaches, hidden until it has focus.",
        es: "Enlace de salto: lo primero que alcanza el teclado, oculto hasta que tiene el foco."
      }
    }, {
      line: 4,
      text: {
        en: "The menu is named, so a screen reader can tell it apart from the footer's.",
        es: "El menú tiene nombre, así que un lector de pantalla lo distingue del del pie."
      }
    }, {
      line: 5,
      text: {
        en: "The current page is announced, not just underlined.",
        es: "La página actual se anuncia, no solo se subraya."
      }
    }, {
      line: 8,
      text: {
        en: "Where the skip link lands.",
        es: "Donde aterriza el enlace de salto."
      }
    }, {
      line: 9,
      text: {
        en: "Each section takes its name from its own heading.",
        es: "Cada sección toma su nombre de su propio encabezado."
      }
    }, {
      line: 14,
      text: {
        en: "Contact details marked as contact details.",
        es: "Los datos de contacto marcados como datos de contacto."
      }
    } ]
  }, {
    type: "split",
    title: {
      en: "Markup that means something",
      es: "Marcado que significa algo"
    },
    body: {
      en: [ "The pricing table is a real `table` with a `caption` and `th scope=\"col\"` headers. It is not a grid of `div`s made to look like one.", "Every page declares its language and its own title and description." ],
      es: [ "La tabla de precios es una `table` de verdad, con `caption` y cabeceras `th scope=\"col\"`. No es una cuadrícula de `div` disfrazada.", "Cada página declara su idioma y su propio título y descripción." ]
    },
    image: {
      src: "assets/projects/nexus/03-pricing.webp",
      frame: "browser",
      alt: {
        en: "Nexus pricing table comparing Starter, Professional and Enterprise plans",
        es: "Tabla de precios de Nexus que compara los planes Starter, Professional y Enterprise"
      },
      caption: {
        en: "The pricing table.",
        es: "La tabla de precios."
      }
    }
  } ]
}, {
  id: "liner-notes",
  draft: true,
  title: "Liner Notes",
  tagline: {
    en: "A reading companion that cannot spoil the book.",
    es: "Un compañero de lectura que no puede destriparte el libro."
  },
  kind: {
    en: "AI product · Design and build",
    es: "Producto con IA · Diseño y desarrollo"
  },
  year: "2026",
  theme: {
    bg: "#1f2a44",
    fg: "#f3efe4"
  },
  object: {
    kind: "card",
    image: ""
  },
  cover: {
    src: "",
    alt: ""
  },
  meta: [ {
    label: {
      en: "Context",
      es: "Contexto"
    },
    value: {
      en: "Personal project",
      es: "Proyecto personal"
    }
  }, {
    label: {
      en: "My role",
      es: "Mi rol"
    },
    value: {
      en: "Product, design and build",
      es: "Producto, diseño y desarrollo"
    }
  }, {
    label: {
      en: "Stack",
      es: "Tecnología"
    },
    value: "Next.js, Claude API, Project Gutenberg"
  } ],
  links: [],
  summary: [ {
    label: {
      en: "Problem",
      es: "Problema"
    },
    text: {
      en: "Asking an AI about the book you are reading risks spoilers.",
      es: "Preguntarle a una IA por el libro que estás leyendo es arriesgarte a un spoiler."
    }
  }, {
    label: {
      en: "Solution",
      es: "Solución"
    },
    text: {
      en: "You declare your chapter, and the model only ever receives the text up to that point.",
      es: "Declaras tu capítulo y el modelo solo recibe el texto hasta ese punto."
    }
  } ],
  blocks: [ {
    type: "text",
    title: {
      en: "Spoilers made structurally impossible",
      es: "Spoilers estructuralmente imposibles"
    },
    body: {
      en: [ "Write this section." ],
      es: [ "Escribe esta sección." ]
    }
  } ]
} ];