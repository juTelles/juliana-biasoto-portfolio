export const resumeText = {
  pt: {
    education: {
      title: 'Educação',
      type: 'list',
      text: [
        'Pontifícia Universidade Católica de Campinas',
        '2007-2011 - Graduada Bacharel em Direito',
        'Aprovada no exame da Ordem',
        '',
        'IGTI Full-Stack Developer Bootcamp',
        'Certificado de Desenvolvedora Full-Stack JavaScript',
        '',
        'Edx - Curso do Massachusetts Institute Of Technology',
        'Introdução a Computação e Programação usando Python',
        '',
        'Free Code Camp',
        'Certificado de Web Design Responsivo',
        '',
        'Sprint PrograMaria',
        'Inteligência Artificial para Devs, em parceria com a Intel',
        '',
        'IGTI - evento Data Universe - Certificado de participação',
        '',
        'Skillcrush - Break Into Tech Package',
        'Em andamento',
      ],
    },
    languages: {
      title: 'Idiomas',
      type: 'list',
      text: [
        'In Touch - Escola de Inglês Certificado de proficiência em inglês',
        '',
        'Português - Idioma Nativo',
      ],
    },
    currentWork: {
      title: 'Projeto Atual',
      type: 'oneText',
      text: `Atualmente eu estou trabalhando no front-end de um app de treino e
             nutrição, que é para ser utilizado por usuários de iphone na web view.
             O app é feito em react, redux, react router, styled components e
             axios. Meu trabalho é terminar o já parcialmente programado app, o
             desafio é que o código foi feito por vários programadores não
             relacionados que não se preocuparam em harmonizar e padronizar seu
             trabalho com o que já estava pronto, e agora temos uma grande bagunça
             para estruturar, organizar e arrumar.`,
    },
    projects: {
      title: 'Projetos',
      type: 'severalTexts',
      projects: {
        project1: {
          title: 'Grades App',
          keyWords: [
            'Node',
            'API',
            'MongoDB',
            'Mongoose',
            'Express',
            'Insomnia',
            'End-points',
            'Winston',
            'Deploy',
            'JavaScript',
            'Json',
            'Middleware',
            'HTTP',
            'coleções',
            'heroku',
            'tratamento de erros',
            'back-end',
          ],
          description: `Desenvolvi API para registro de notas escolares, usando Node.js e o
                        Nodemon, para acelerar o desenvolvimento, integrei a API ao MongoDB, e
                        utilizei o Mongoose para definir o modelo do objeto json e gerenciar
                        as coleções. Implementei os endpoints para solicitações HTTP com
                        Express e testei os middlewares com Insomnia, escrevi o tratamento de
                        erros e usei o Winston para gerenciar os logs. Fiz o deploy do
                        aplicativo e seu front-end no Heroku.`,
          link: 'grades-app-front-end.herokuapp.com/grade',
        },
        project2: {
          title: 'My Bank API',
          keyWords: [
            'node',
            'API',
            'MongoDB',
            'Mongoose',
            'Express',
            'Insomnia',
            'end-points',
            'winston',
            'deploy',
            'JavaScript',
            'json',
            'middleware',
            'HTTP',
            'coleções',
            'heroku',
            'tratamento de erros',
            'back-end',
          ],
          description: `Desenvolvi aplicativo web que realiza operações bancárias simples.
                        Usando Node.js implementei a API e a integrei ao MongoDB,
                        usei o Mongoose para estruturar o modelo do objeto json dos dados e manipulá-los.
                        Desenvolvi os endpoints para consumo da API com Express, testei as rotas com insomnia,
                        usei o Winston para gerenciar os logs e tratei possíveis erros.`,
          link: 'github.com/juTelles/my-bank-api',
        },
        project3: {
          title: 'Compound Interest Calculator',
          keyWords: [
            'react',
            'node',
            'hooks',
            'yarn',
            'front-end',
            'JavaScript',
          ],
          description: `Desenvolvi aplicativo React para
                        calcular juros compostos. Implementei o app com React Hooks em
                        ambiente Node.js com Yarn. Design em andamento.`,
          link: 'jutelles.github.io/compound-interest-calculator/',
        },
        project4: {
          title: 'Salary Calculator',
          keyWords: [
            'react',
            'node',
            'class',
            'yarn',
            'front-end',
            'JavaScript',
          ],
          description: `Programei aplicativo React para cálculo de salário
                        após retirado o valor do imposto de
                        renda e INSS. Implementei a lógica do aplicativo com React Class
                        Components no ambiente Node.js usando Yarn como gerenciador de
                        pacotes. `,
          link: 'github.com/juTelles/salary-calculator',
        },
        project5: {
          title: 'Search Box',
          keyWords: [
            'node',
            'assíncrono',
            'API',
            'JavaScript',
            'yarn',
            'front-end',
          ],
          description: `Desenvolvi aplicativo web para pesquisa de perfis. Busquei os dados de
                        uma API web pública usando JavaScript assíncrono em ambiente node.js.
                        Design ainda em andamento.`,
          link: 'jutelles.github.io/search-box/',
        },
        project6: {
          title: 'Radio PodCast',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Programação Reativa',
            'Front-end',
            'Web Page',
          ],
          description: `Codifiquei aplicativo JavaScript, fazendo uso de elementos HTML
                        combinados com programação reativa.
                        Os Designs são de minha autoria, utilizando principalmente CSS.`,
          link: 'jutelles.github.io/radio-podcast',
        },
        project7: {
          title: 'Color Picker',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Programação Reativa',
            'Front-end',
            'Web Page',
            'Design',
          ],
          description: `Codifiquei aplicativo JavaScript, fazendo uso de elementos HTML
                        combinados com programação reativa.
                        Os Designs são de minha autoria, utilizando principalmente CSS.`,
          link: 'jutelles.github.io/color-picker-ranges',
        },
        project8: {
          title: 'Covid Survey',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Programação Reativa',
            'Front-end',
            'Web Page',
            'Design',
            'CodePen',
            'formulario',
            'web design',
            'responsivo',
          ],
          description: `Construí Web site totalmente responsivo no Codepen.
                        Implementei formulário, com diversos elementos,
                        funcional e responsivo, usando, quando possível,
                        apenas HTML e CSS e quando necessário JavaScript puro.
                        O design dos layout e da maioria de
                        seus elementos são de minha autoria.`,
          link: 'codepen.io/julianatelles/full/OJyGxBp',
        },
        project9: {
          title: 'JS Documentation',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Programação Reativa',
            'Front-end',
            'Web Page',
            'Design',
            'CodePen',
            'web design',
            'responsivo',
          ],
          description: `Construí Web site totalmente
                        responsivo no Codepen.
                        Implementei diversos elementos,
                        todos funcionais, reativos e responsivo,
                        usando, quando possível, apenas HTML e CSS e
                        quando necessário JavaScript puro.
                        O design dos layout e da maioria de
                        seus elementos são de minha autoria.`,
          link: 'codepen.io/julianatelles/full/GRoyEwr',
        },
        project10: {
          title: 'Ada Lovelace',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Programação Reativa',
            'Front-end',
            'Web Page',
            'Design',
            'CodePen',
            'responsivo',
          ],
          description: `Construí Web site totalmente
                        responsivo no Codepen. Implementei diversos elementos,
                        funcionais e responsivos, usando,
                        quando possível, apenas HTML e CSS e
                        quando necessário JavaScript puro.
                        O design dos layout e da maioria de
                        seus elementos são de minha autoria.`,
          link: 'codepen.io/julianatelles/full/BaoMJwj',
        },
        project11: {
          title: 'Unplugged Retreat Website',
          keyWords: [
            'HTML',
            'CSS',
            'Front-end',
            'Web Page',
            'Photoshop',
            'web design',
            'responsivo',
          ],
          description: `Codifiquei website totalmente
                        responsivo, usando apenas com HTML e CSS,
                        a partir de um photoshop comp.`,
          link: 'jutelles.github.io/unplugged-retreat-website',
        },
        project12: {
          title: 'Rogue Pickings Website',
          keyWords: [
            'HTML',
            'CSS',
            'Front-end',
            'Web Page',
            'Photoshop',
            'web design',
            'responsivo',
          ],
          description: `Codifiquei website totalmente
                        responsivo, usando apenas com HTML e CSS,
                        a partir de um photoshop comp.`,
          link: 'jutelles.github.io/rogue-pickings-responsive',
        },
      },
    },
    aboutMe: {
      title: 'sobre mim',
      type: 'oneText',
      text: `Eu amo animais e seres humanos, já li tantos livros que confundo e
             misturo seus personagens, gosto de humor inteligente e jogos que
             desafiam o cérebro. Acho que a simpatia e civilidade são essenciais em
             qualquer ambiente, contanto que a verdade e o pensamento crítico
             também sejam uma presença constante. Acho importante estar em
             constante desenvolvimento, nesse mundo tão impressionante e complexo
             em que vivemos sempre a algo novo a aprender e conhecimentos antigos a
             relembrar e melhorar.`,
    },
    contact: {
      title: 'Contato',
      type: 'list',
      text: [
        '(19)986071260',
        'github.com/juTelles',
        'www.julianabiasoto.com',
        'mail@julianabiasoto.com',
        'juliana.biasoto@gmail.com',
        'linkedin.com/in/juliana-telles-biasoto',
      ],
    },
    skills: {
      title: 'Habilidades',
      type: 'skills',
      code: {
        title: 'Linguagens, frameworks e bibliotecas',
        skills: {
          html: {
            name: 'HTML',
            level: 5,
          },
          javaScript: {
            name: 'JavaScript',
            level: 4,
          },
          appScript: {
            name: 'App Script',
            level: 4,
          },
          formulas: {
            name: 'Formulas',
            level: 5,
          },
          python: {
            name: 'Python',
            level: 3,
          },
          node: {
            name: 'Node.js',
            level: 4,
          },
          express: {
            name: 'Express',
            level: 3,
          },
          react: {
            name: 'React',
            level: 4,
          },
          ruby: {
            name: 'Ruby',
            level: 1,
          },
          php: {
            name: 'PHP',
            level: 1,
          },
          wordpress: {
            name: 'Wordpress',
            level: 1,
          },
        },
        webDesign: {
          title: 'Web Design',
          skills: {
            css: {
              name: 'CSS',
              level: 5,
            },
            photoshop: {
              name: 'Photoshop',
              level: 3,
            },
            ux: {
              name: 'UX design',
              level: 3,
            },
            ui: {
              name: 'UI design',
              level: 3,
            },
            illustrator: {
              name: 'Illustrator',
              level: 2,
            },
            responsive: {
              name: 'Web Design Responsivo',
              level: 5,
            },
          },
        },
        data: {
          title: 'Relacionadas a dados',
          skills: {
            git: {
              name: 'Git/GitHub',
              level: 5,
            },
            mongodb: {
              name: 'MongoDB',
              level: 3,
            },
            mongoose: {
              name: 'Mongoose',
              level: 3,
            },
            apis: {
              name: 'APIs',
              level: 4,
            },
            ia: {
              name: 'IA e Machine Learning',
              level: 2,
            },
          },
        },
        softSkills: {
          title: 'Sociais e Pessoais',
          skills: {
            responsability: {
              name: 'Responsabilidade',
              level: 5,
            },
            determination: {
              name: 'Determinação',
              level: 5,
            },
            hardWork: {
              name: 'Esforço',
              level: 5,
            },
            focus: {
              name: 'Concentração',
              level: 4,
            },
            comunication: {
              name: 'Comunicação',
              level: 4,
            },
            criativite: {
              name: 'Criatividade',
              level: 4,
            },
            organization: {
              name: 'Organização',
              level: 4,
            },
            criticalThinking: {
              name: 'Pensamento Crítico',
              level: 5,
            },
          },
        },
      },
    },
  },

  // english text //

  en: {
    education: {
      title: 'Education',
      type: 'list',
      text: ['Pontifical Catholic University Of Campinas',
            'Bachelor of Science Laws',
            'Approved at the Brazilian Bar Exam in 2012',
            '',
            'IGTI - Full-Stack Developer Bootcamp',
            'Certified Full-Stack Developer',
            '',
            'Free Code Camp',
            'Free Code Camp Certified Responsive Web Design',
            '',
            'Edx - Massachusetts Institute Of Technology Course',
            'Introduction To Computer Science And Programming',
            '',
            'Sprint PrograMaria',
            'Artificial Intelligence for Devs, in partnership to Intel',
            '',
            'IGTI - Data Universe event - Certificate of participation',
            '',
            'Skillcrush - Break Into Tech Package',
            'In progress']
    },
    languages: {
      title: 'languages',
      type: 'list',
      text: ['In Touch - English School',
            'Certification of English Proficiency',
            '',
            'Portuguese - Native Language'],
    },
    currentWork: {
      title: 'Current work',
      type: 'oneText',
      text: `Currently I am working on the front-end portion of a workout and nutrition App, that is supposed to be used by iphone users in the web view.
            The app is made with  React, redux, react router, styled components and axios.
            My work is to fix and finish the already partially made app, the challenge is that several unrelated programmers have made some portion of the source code without concern to harmonizing their work with what was already there and now we have a big mess to organize, structure and fix, the good side of this is that I love a good challenge.
            I can't disponibilize the source code or any images at this moment.`,
    },
    projects: {
      title: 'Projects',
      type: 'severalTexts',
      projects: {
        project1: {
          title: 'Grades App',
          keyWords: [
            'node',
            'API',
            'MongoDB',
            'Mongoose',
            'Express',
            'Insomnia',
            'end-points',
            'winston',
            'deploy',
            'JavaScript',
            'json',
            'middleware',
            'HTTP',
            'collections',
            'heroku',
            'error treatment',
            'back-end',
          ],
          description: `Programmed API to register grades.
                        Used Node.js with Nodemon to accelerate development,
                        assembled MongoDB as the API’s database,
                        used Mongoose to define the json's object model
                        and manage collections.
                        Implemented the end-points for HTTP requests with Express,
                        tested the routes with Insomnia and wrote error treatment.
                        Deployed the application and its front-end in Heroku.`,
          link: 'grades-app-front-end.herokuapp.com/grade',
        },
        project2: {
          title: 'My Bank API',
          keyWords: [
            'node',
            'API',
            'MongoDB',
            'Mongoose',
            'Express',
            'Insomnia',
            'end-points',
            'winston',
            'deploy',
            'JavaScript',
            'json',
            'middleware',
            'HTTP',
            'collections',
            'heroku',
            'error treatment',
            'back-end',
          ],
          description: `Developed API to perform simple bank operations.
                        Using Node.js, implemented the API and integrated to MongoDB,
                        used Mongoose to structure the json’s object model of the data
                        and manipulate it. Programmed the end-points for the consumption of
                        the API with Express, tested the routes with insomnia
                        and wrote error treatment. `,
          link: 'github.com/juTelles/my-bank-api',
        },
        project3: {
          title: 'Compound Interest Calculator',
          keyWords: [
            'react',
            'node',
            'hooks',
            'yarn',
            'front-end',
            'JavaScript',
          ],
          description: `Developed React web app that works as
                        a compound interest calculator.
                        Used React Hooks in Node.js with Yarn as package manager.
                        App’s design is still in progress.`,
          link: 'jutelles.github.io/compound-interest-calculator/',
        },
        project4: {
          title: 'Salary Calculator',
          keyWords: [
            'react',
            'node',
            'class',
            'yarn',
            'front-end',
            'JavaScript',
          ],
          description: `Coded React web app to calculate the user's
                        salary after Brazilian income taxes.
                        Implemented the app’s logic with React components
                        in Node.js with Yarn as package manager`,
          link: 'github.com/juTelles/salary-calculator',
        },
        project5: {
          title: 'Search Box',
          keyWords: [
            'node',
            'asynchronous',
            'API',
            'JavaScript',
            'yarn',
            'front-end',
          ],
          description: `Programmed web application for searching public profiles.
                        Implemented asynchronous JavaScript to fetch the profiles`,
          link: 'jutelles.github.io/search-box/',
        },
        project6: {
          title: 'Radio PodCast',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Reactive Programming',
            'Front-end',
            'Web Page',
          ],
          description: `Coded JavaScript app making use of HTML
                        elements combined with reactive programming.
                        Made the designs myself, using mostly CSS.`,
          link: 'jutelles.github.io/radio-podcast',
        },
        project7: {
          title: 'Color Picker',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Reactive Programming',
            'Front-end',
            'Web Page',
            'Design',
          ],
          description: `Coded JavaScript app making use of HTML
                        elements combined with reactive programming.
                        Made the designs myself, using mostly CSS.`,
          link: 'jutelles.github.io/color-picker-ranges',
        },
        project8: {
          title: 'Covid Survey',
          keyWords: [
            'HTML',
            'CSS',
            'JavaScript',
            'Reactive Programming',
            'Front-end',
            'Web Page',
            'Design',
            'CodePen',
            'forms',
            'web design',
            'responsive',
          ],
          description: `Developed fully responsive websites in Codepen.
                        Implemented responsive menus, forms and reactive
                        programming using, when possible, only HTML and CSS and,
                        when necessary, pure JavaScript.
                        Made the designs of the layouts and most of its elements. `,
          link: 'codepen.io/julianatelles/full/OJyGxBp',
        },
        project9: {
          title: 'JS Documentation',
          keyWords: [
            'HTML',
            'CSS',
            'JavaScript',
            'Reactive Programming',
            'Front-end',
            'Web Page',
            'Design',
            'CodePen',
            'web design',
            'responsive',
            'documentation',
          ],
          description: `Developed fully responsive websites in Codepen.
                        Implemented responsive menus, forms and reactive
                        programming using, when possible, only HTML and CSS and,
                        when necessary, pure JavaScript.
                        Made the designs of the layouts and most of its elements. `,
          link: 'codepen.io/julianatelles/full/GRoyEwr',
        },
        project10: {
          title: 'Ada Lovelace',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Reactive Programming',
            'Front-end',
            'Web Page',
            'Design',
            'CodePen',
            'web design',
            'responsive',
          ],
          description: `Developed fully responsive websites in Codepen.
                        Implemented responsive menus, forms and reactive
                        programming using, when possible, only HTML and CSS and,
                        when necessary, pure JavaScript.
                        Made the designs of the layouts and most of its elements. .`,
          link: 'codepen.io/julianatelles/full/BaoMJwj',
        },
        project11: {
          title: 'Unplugged Retreat Website',
          keyWords: [
            'HTML',
            'CSS',
            'Front-end',
            'Web Page',
            'Photoshop',
            'web design',
            'responsive',
          ],
          description: `Programmed fully responsive website
                        with HTML and CSS from a photoshop comp.`,
          link: 'jutelles.github.io/unplugged-retreat-website',
        },
        project12: {
          title: 'Rogue Pickings Website',
          keyWords: [
            'HTML',
            'CSS',
            'Front-end',
            'Web Page',
            'Photoshop',
            'web design',
            'responsive',
          ],
          description: `Programmed fully responsive website
                        with HTML and CSS from a photoshop comp.`,
          link: 'jutelles.github.io/rogue-pickings-responsive',
        },
      },
    },
    aboutMe: {
      title: 'sobre mim',
      type: 'oneText',
      text: `I love animals and human beings,
             I have read so many books that I mix up their characters,
             I like intelligent humor and games that challenge the brain.
             I think sympathy and civility are essential to any environment
             as long as truth and critical thinking remain always present as well.
             I think it is important to be in constant development,
             in this impressive and complex world we live in,
             there is always something new to learn and old knowledge
             to be remembered and improved.`,
    },
    contact: {
      title: 'Contact',
      type: 'list',
      text: [
        '(19)986071260',
        'github.com/juTelles',
        'www.julianabiasoto.com',
        'mail@julianabiasoto.com',
        'juliana.biasoto@gmail.com',
        'linkedin.com/in/juliana-telles-biasoto',
      ],
    skills: {
      title: 'Skills',
      type: 'skills',
      code: {
        title: 'Languages, frameworks e libraries',
        skills: {
          html: {
            name: 'HTML',
            level: 5,
          },
          javaScript: {
            name: 'JavaScript',
            level: 4,
          },
          appScript: {
            name: 'App Script',
            level: 4,
          },
          formulas: {
            name: 'Formulas',
            level: 5,
          },
          python: {
            name: 'Python',
            level: 3,
          },
          node: {
            name: 'Node.js',
            level: 4,
          },
          express: {
            name: 'Express',
            level: 3,
          },
          react: {
            name: 'React',
            level: 4,
          },
          ruby: {
            name: 'Ruby',
            level: 1,
          },
          php: {
            name: 'PHP',
            level: 1,
          },
          wordpress: {
            name: 'Wordpress',
            level: 1,
          },
        },
        webDesign: {
          title: 'Web Design',
          skills: {
            css: {
              name: 'CSS',
              level: 5,
            },
            photoshop: {
              name: 'Photoshop',
              level: 3,
            },
            ux: {
              name: 'UX design',
              level: 3,
            },
            ui: {
              name: 'UI design',
              level: 3,
            },
            illustrator: {
              name: 'Illustrator',
              level: 2,
            },
          },
        },
        data: {
          title: 'Data Related',
          skills: {
            git: {
              name: 'Git/GitHub',
              level: 5,
            },
            mongodb: {
              name: 'MongoDB',
              level: 3,
            },
            mongoose: {
              name: 'Mongoose',
              level: 3,
            },
            apis: {
              name: 'APIs',
              level: 4,
            },
            ia: {
              name: 'IA and Machine Learning',
              level: 2,
            },
          },
        },
        softSkills: {
          title: 'Soft Skills',
          skills: {
            responsability: {
              name: 'Responsibility',
              level: 5,
            },
            determination: {
              name: 'Determination',
              level: 5,
            },
            hardWork: {
              name: 'Hard Work',
              level: 5,
            },
            focus: {
              name: 'Concentration',
              level: 4,
            },
            comunication: {
              name: 'Communication',
              level: 4,
            },
            criativite: {
              name: 'Creativity',
              level: 4,
            },
            organization: {
              name: 'Organization',
              level: 4,
            },
            criticalThinking: {
              name: 'Critical Thinking',
              level: 5,
            },
          },
        },
      },
    },
   },
  },
};