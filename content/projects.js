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
  object: {
    kind: "phone",
    image: "assets/projects/atlas/object-phone.webp"
  },
  cover: {
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
  object: {
    kind: "print",
    image: "assets/projects/lufe/object-dossier.webp"
  },
  cover: {
    src: "assets/projects/lufe/09-comparison.webp",
    alt: {
      en: "Dossier page comparing the three proposals by investment, duration, objectives covered and risk",
      es: "Página del dossier que compara las tres propuestas por inversión, duración, objetivos cubiertos y riesgo"
    }
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
      en: "Positioning, SWOT, journey mapping, Scrum",
      es: "Posicionamiento, DAFO, journey mapping, Scrum"
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
    en: "Academic project about a real brand. Lufe did not commission it and is not involved. Market figures come from public sources, and the impact numbers are my own estimates.",
    es: "Proyecto académico sobre una marca real. Lufe no lo encargó ni participa. Las cifras de mercado vienen de fuentes públicas y las de impacto son estimaciones mías."
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
    type: "split",
    title: {
      en: "A strength and a gap in the same sentence",
      es: "Una fortaleza y un hueco en la misma frase"
    },
    body: {
      en: [ "Lufe was already doing a lot right: revenue up sevenfold between 2019 and 2024, 377K Instagram followers, and a position nobody else holds, low price with certified sustainability.", "People trust the brand enough to buy furniture they have never seen in person. That trust is the strength. The missing touch is the gap." ],
      es: [ "Lufe ya hacía muchas cosas bien: facturación multiplicada por siete entre 2019 y 2024, 377K seguidores en Instagram y una posición que nadie más ocupa, precio bajo con sostenibilidad certificada.", "La gente confía en la marca lo bastante como para comprar muebles que no ha visto en persona. Esa confianza es la fortaleza. El tacto que falta es el hueco." ]
    },
    image: {
      src: "assets/projects/lufe/02-positioning-map.webp",
      alt: {
        en: "Positioning map placing Lufe at low price and high sustainability, apart from IKEA, Kave Home and others",
        es: "Mapa de posicionamiento que sitúa a Lufe en precio bajo y sostenibilidad alta, lejos de IKEA, Kave Home y otros"
      },
      caption: {
        en: "Price against sustainability. Lufe sits alone in its quadrant.",
        es: "Precio frente a sostenibilidad. Lufe está sola en su cuadrante."
      }
    }
  }, {
    type: "gallery",
    columns: 2,
    images: [ {
      src: "assets/projects/lufe/03-persona.webp",
      alt: {
        en: "User persona page: Sofía, 27, a UX designer furnishing her first flat",
        es: "Página de user persona: Sofía, 27 años, diseñadora UX que amuebla su primer piso"
      },
      caption: {
        en: "Who buys: the persona.",
        es: "Quién compra: la persona."
      }
    }, {
      src: "assets/projects/lufe/04-customer-journey.webp",
      alt: {
        en: "Customer journey from discovery to loyalty with touchpoints and pain points",
        es: "Customer journey desde el descubrimiento hasta la fidelización con puntos de contacto y de dolor"
      },
      caption: {
        en: "Where it hurts: the journey, stage by stage.",
        es: "Dónde duele: el journey, etapa a etapa."
      }
    } ]
  }, {
    type: "text",
    title: {
      en: "Why I ruled out two full proposals",
      es: "Por qué descarté dos propuestas enteras"
    },
    body: {
      en: [ "I designed three directions and presented all three. Explaining why something should not be built is part of the job.", "Directo was too cautious to change anything that mattered. Nodo covered every objective, but it asked a 48-person company for an investment and an operation it could not yet carry." ],
      es: [ "Diseñé tres caminos y presenté los tres. Explicar por qué algo no debería hacerse es parte del trabajo.", "Directo era demasiado prudente para cambiar nada importante. Nodo cubría todos los objetivos, pero pedía a una empresa de 48 personas una inversión y una operación que aún no podía sostener." ]
    }
  }, {
    type: "table",
    columns: [ {
      en: "Criterion",
      es: "Criterio"
    }, "Directo", "Studio", "Nodo" ],
    highlight: 2,
    rows: [ [ {
      en: "Investment",
      es: "Inversión"
    }, "12–18K €", "35–55K €", "90–140K €" ], [ {
      en: "Duration",
      es: "Duración"
    }, {
      en: "3–4 months",
      es: "3–4 meses"
    }, {
      en: "5 months",
      es: "5 meses"
    }, {
      en: "8–10 months",
      es: "8–10 meses"
    } ], [ {
      en: "Objectives covered",
      es: "Objetivos cubiertos"
    }, "3 / 6", "5 / 6", "6 / 6" ], [ {
      en: "Operational risk",
      es: "Riesgo operativo"
    }, {
      en: "Low",
      es: "Bajo"
    }, {
      en: "Medium",
      es: "Medio"
    }, {
      en: "High",
      es: "Alto"
    } ], [ {
      en: "Solves the touch gap",
      es: "Resuelve el hueco táctil"
    }, {
      en: "No",
      es: "No"
    }, {
      en: "Yes",
      es: "Sí"
    }, {
      en: "Yes",
      es: "Sí"
    } ], [ {
      en: "Viable for 48 people",
      es: "Viable con 48 personas"
    }, {
      en: "Yes",
      es: "Sí"
    }, {
      en: "Yes",
      es: "Sí"
    }, {
      en: "No",
      es: "No"
    } ] ],
    footnote: {
      en: "The chosen proposal is the one that solves the most objectives at the lowest risk for the company.",
      es: "La propuesta elegida es la que más objetivos resuelve con el menor riesgo para la empresa."
    }
  }, {
    type: "gallery",
    columns: 3,
    images: [ {
      src: "assets/projects/lufe/06-proposal-directo.webp",
      alt: {
        en: "Dossier page for the Directo proposal",
        es: "Página del dossier de la propuesta Directo"
      },
      caption: {
        en: "Directo: optimise what exists.",
        es: "Directo: optimizar lo que ya existe."
      }
    }, {
      src: "assets/projects/lufe/07-proposal-studio.webp",
      alt: {
        en: "Dossier page for the Studio proposal",
        es: "Página del dossier de la propuesta Studio"
      },
      caption: {
        en: "Studio: the website becomes the showroom.",
        es: "Studio: la web se convierte en showroom."
      }
    }, {
      src: "assets/projects/lufe/08-proposal-nodo.webp",
      alt: {
        en: "Dossier page for the Nodo proposal",
        es: "Página del dossier de la propuesta Nodo"
      },
      caption: {
        en: "Nodo: showrooms, an app and co-design.",
        es: "Nodo: showrooms, app y codiseño."
      }
    } ]
  }, {
    type: "split",
    title: {
      en: "Planning it like a product team would",
      es: "Planificarlo como lo haría un equipo de producto"
    },
    body: {
      en: [ "Ten two-week sprints over five months, with something testable on real users from the first month. The three pillars are independent, so a delay in the configurator does not stop the club or the TikTok plan.", "The team is six roles: product manager, UX/UI designer, front-end developer, 3D artist, content manager and digital marketing." ],
      es: [ "Diez sprints de dos semanas a lo largo de cinco meses, con algo que probar con usuarios reales desde el primer mes. Los tres pilares son independientes, así que un retraso en el configurador no frena el club ni el plan de TikTok.", "El equipo son seis roles: product manager, diseñador UX/UI, desarrollador front-end, artista 3D, content manager y marketing digital." ]
    },
    image: {
      src: "assets/projects/lufe/10-scrum.webp",
      alt: {
        en: "Scrum cycle diagram with the reasons for choosing the method",
        es: "Diagrama del ciclo Scrum con las razones para elegir el método"
      },
      caption: {
        en: "Why Scrum, and how the sprint cycle runs.",
        es: "Por qué Scrum y cómo corre el ciclo de sprint."
      }
    }
  }, {
    type: "image",
    src: "assets/projects/lufe/11-gantt.webp",
    alt: {
      en: "Gantt chart of the five-month plan across ten sprints",
      es: "Diagrama de Gantt del plan de cinco meses en diez sprints"
    },
    caption: {
      en: "The five-month plan. Analysis, production, rollout, then tracking against KPIs.",
      es: "El plan de cinco meses. Análisis, producción, implementación y seguimiento con KPIs."
    }
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
  object: {
    kind: "print",
    image: "assets/projects/sal/object-cover.webp"
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
  }, {
    type: "gallery",
    columns: 1,
    images: [ {
      src: "assets/projects/sal/04-article-opening.webp",
      alt: {
        en: "Opening spread of the feature The Core, Pioneras 2025",
        es: "Doble página de apertura del reportaje The Core, Pioneras 2025"
      },
      caption: {
        en: "The opening: photograph first, then the text.",
        es: "La apertura: primero la fotografía, luego el texto."
      }
    }, {
      src: "assets/projects/sal/05-article-continued.webp",
      alt: {
        en: "Second spread of the feature on a red background",
        es: "Segunda doble página del reportaje sobre fondo rojo"
      },
      caption: {
        en: "The second spread turns red and the column narrows.",
        es: "La segunda doble página se vuelve roja y la columna se estrecha."
      }
    }, {
      src: "assets/projects/sal/03-summary.webp",
      alt: {
        en: "Contents page of SAL issue 01",
        es: "Sumario de SAL número 01"
      },
      caption: {
        en: "Contents page. Photography in the layouts is stock from Unsplash.",
        es: "Sumario. Las fotografías de las maquetas son de archivo, de Unsplash."
      }
    } ]
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
  object: {
    kind: "card",
    image: "assets/projects/artecodigo/object-isotype.webp"
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
    type: "split",
    title: {
      en: "A logo built like code",
      es: "Un logo construido como código"
    },
    body: {
      en: [ "The logotype sits on an 8 × 8 module grid with 45° diagonals, as strict as any digital design system. The manual sets a clear space around it and a minimum size: 20 mm in print and 72 px on screen.", "Two typefaces carry the two halves of the name. Anonymous Pro, technical and monospaced, for the logotype. Roboto Mono for everything else." ],
      es: [ "El logotipo se asienta sobre una retícula de 8 × 8 módulos con diagonales a 45°, tan estricta como cualquier sistema de diseño digital. El manual fija un área de respeto y un tamaño mínimo: 20 mm en impresión y 72 px en pantalla.", "Dos tipografías llevan las dos mitades del nombre. Anonymous Pro, técnica y monoespaciada, para el logotipo. Roboto Mono para todo lo demás." ]
    },
    image: {
      src: "assets/projects/artecodigo/03-logo-construction.webp",
      alt: {
        en: "Brand manual page with the logo construction grid, clear space and minimum size",
        es: "Página del manual con la retícula de construcción del logo, el área de respeto y el tamaño mínimo"
      },
      caption: {
        en: "From the manual: construction grid and clear space.",
        es: "Del manual: retícula de construcción y área de respeto."
      }
    }
  }, {
    type: "gallery",
    columns: 2,
    images: [ {
      src: "assets/projects/artecodigo/04-colour.webp",
      alt: {
        en: "Colour palette with HEX, RGB, CMYK and Pantone values and the logo in each colour",
        es: "Paleta de color con valores HEX, RGB, CMYK y Pantone y el logo en cada color"
      },
      caption: {
        en: "Five colours, each with its values and its monochrome version.",
        es: "Cinco colores, cada uno con sus valores y su versión monocromática."
      }
    }, {
      src: "assets/projects/artecodigo/05-typography.webp",
      alt: {
        en: "Typography page showing Anonymous Pro and Roboto Mono with the type hierarchy",
        es: "Página de tipografía con Anonymous Pro y Roboto Mono y la jerarquía tipográfica"
      },
      caption: {
        en: "Type hierarchy, from logotype to body text.",
        es: "Jerarquía tipográfica, del logotipo al texto de lectura."
      }
    } ]
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
  object: {
    kind: "browser",
    image: "assets/projects/nexus/01-home.webp"
  },
  cover: {
    src: "assets/projects/nexus/01-home.webp",
    alt: {
      en: "Nexus home page with the headline We Build Digital Experiences That Matter",
      es: "Página de inicio de Nexus con el titular We Build Digital Experiences That Matter"
    },
    frame: "browser"
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
    type: "split",
    title: {
      en: "Accessible past what you can see",
      es: "Accesible más allá de lo que se ve"
    },
    body: {
      en: [ "The first element in the page is a skip link, hidden until it receives keyboard focus. Every form field has its own `label` and a visible focus state.", "Required fields are marked with `required` and `aria-required`, so a screen reader announces them. A coloured asterisk alone would not." ],
      es: [ "El primer elemento de la página es un enlace de salto, oculto hasta que recibe el foco del teclado. Cada campo del formulario tiene su `label` y un estado de foco visible.", "Los campos obligatorios llevan `required` y `aria-required`, para que un lector de pantalla los anuncie. Un asterisco de color por sí solo no lo haría." ]
    },
    image: {
      src: "assets/projects/nexus/02-contact.webp",
      frame: "browser",
      alt: {
        en: "Nexus contact page with a form for name, email, phone and company",
        es: "Página de contacto de Nexus con formulario de nombre, email, teléfono y empresa"
      },
      caption: {
        en: "The contact form, grouped with `fieldset` and `legend`.",
        es: "El formulario de contacto, agrupado con `fieldset` y `legend`."
      }
    }
  }, {
    type: "split",
    title: {
      en: "Markup that means something",
      es: "Marcado que significa algo"
    },
    body: {
      en: [ "The pricing table is a real `table` with a `caption` and `th scope=\"col\"` headers. It is not a grid of `div`s made to look like one.", "Each `section` is tied to its heading with `aria-labelledby`, the current page is marked with `aria-current`, and every page declares its language and its own title. None of this changes how the site looks. It changes who can use it." ],
      es: [ "La tabla de precios es una `table` de verdad, con `caption` y cabeceras `th scope=\"col\"`. No es una cuadrícula de `div` disfrazada.", "Cada `section` va ligada a su encabezado con `aria-labelledby`, la página actual se marca con `aria-current` y cada página declara su idioma y su propio título. Nada de esto cambia cómo se ve la web. Cambia quién puede usarla." ]
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