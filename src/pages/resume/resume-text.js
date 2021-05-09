export const resumeText = {
  pt: {
    title: 'Currículo',
    education: {
      title: 'Educação',
      type: 'list',
      educationList: [
        [
          '2021',
          'Em andamento',
          'Skillcrush Coding Bootcamp',
          'Break Into Tech Course',
        ],
        [
          '09/2020',
          'IGTI - Full-Stack Developer Bootcamp',
          'Certificado de Desenvolvedora Full-Stack JavaScript',
        ],
        ['09/2020', 'Free Code Camp', 'Certificado de Web Design Responsivo'],
        [
          '08/2020',
          'IGTI - Evento Data Universe',
          'Certificado de participação',
        ],
        [
          '05/2020',
          'Sprint PrograMaria',
          'Inteligência Artificial para Devs, em parceria com a Intel',
        ],
        [
          '2019',
          'Edx - Curso do MIT',
          'Introdução a Computação e Programação usando Python',
        ],
        [
          '2007-2011',
          'PUC Campinas',
          'Graduada Bacharel em Direito',
          'Aprovada na OAB',
        ],
      ],
    },
    current: {
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
      projects: [
        {
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
          description: `Desenvolvi API para registro de notas escolares no NodeJS, integrei ao MongoDB, utilizei o Mongoose para definir o modelo do objeto json e gerenciar
                        as coleções. Implementei os endpoints com
                        Express, testei os middlewares com Insomnia e escrevi o tratamento de
                        erros. Fiz o deploy do aplicativo no Heroku.`,
          website: 'https://grades-app-front-end.herokuapp.com/grade',
          sourceCode: 'https://github.com/juTelles/grades-app',
        },
        {
          title: 'MyBank API',
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
          description: `Desenvolvi Web App que realiza operações bancárias simples.
                        Usando NodeJS implementei a API e a integrei ao MongoDB,
                        usei o Mongoose para estruturar o modelo do objeto json e manipular os dados.
                        Desenvolvi os endpoints com Express, testei as rotas com insomnia, e tratei possíveis erros.`,
          website: 'https://github.com/juTelles/my-bank-api',
          sourceCode: 'https://github.com/juTelles/my-bank-api',
        },
        {
          title: 'Calculadora de Juros Compostos',
          keyWords: [
            'react',
            'node',
            'hooks',
            'yarn',
            'front-end',
            'JavaScript',
          ],
          description: `Desenvolvi React App para
                        calcular juros compostos. Usei React Hooks em
                        ambiente Node.js. Design em andamento.`,
          website: 'https://jutelles.github.io/compound-interest-calculator/',
          sourceCode:
            'https://github.com/juTelles/compound-interest-calculator',
        },
        {
          title: 'Calculadora de Salário Líquido',
          keyWords: [
            'react',
            'node',
            'class',
            'yarn',
            'front-end',
            'JavaScript',
          ],
          description: `Programei React App para cálculo de salário
                        após retirado o valor do imposto de
                        renda e INSS. Usei React Class
                        Components no NodeJS. `,
          website: 'https://jutelles.github.io/salary-calculator/',
          sourceCode: 'https://github.com/juTelles/salary-calculator',
        },
        {
          title: 'Search Box App',
          keyWords: [
            'node',
            'assíncrono',
            'API',
            'JavaScript',
            'yarn',
            'front-end',
          ],
          description: `Desenvolvi aplicativo Web para pesquisa de perfis. Busquei os dados de
                        uma API Web pública usando JavaScript assíncrono em ambiente NodeJS.
                        Design ainda se encontra em andamento.`,
          website: 'https://jutelles.github.io/search-box/',
          sourceCode: 'https://github.com/juTelles/search-box',
        },
        {
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
          website: 'https://jutelles.github.io/radio-podcast',
          sourceCode: 'https://github.com/juTelles/radio-podcast',
        },
        {
          title: 'Color Picker App',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Programação Reativa',
            'Front-end',
            'Web Page',
            'Design',
          ],
          description: `Codifiquei aplicativo de escolha e análise de cores, tons e combinações, utilizei elementos HTML e declarações em CSS
                        combinados com JavaScript para fazer um app com programação reativa.
                        Todos os Designs são de minha autoria.`,
          website: 'https://jutelles.github.io/color-picker-ranges',
          sourceCode: 'https://github.com/juTelles/color-picker-ranges',
        },
        {
          title: 'Pesquisa Covid-19',
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
          description: `Construí Website totalmente responsivo no ambiente do Codepen.
                        Implementei formulário, com diversos elementos,
                        funcionais e responsivos, usando, quando possível,
                        apenas HTML e CSS e quando necessário JavaScript puro.
                        O design dos layout e da maioria de
                        seus elementos são de minha autoria.`,
          website: 'https://jutelles.github.io/covid-survey/',
          sourceCode: 'https://github.com/juTelles/covid-survey',
        },
        {
          title: 'JS Documentação',
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
          description: `Construí Website totalmente
                        responsivo no Codepen.
                        Implementei diversos elementos,
                        todos funcionais, reativos e responsivo,
                        usando, quando possível, apenas HTML e CSS e
                        quando necessário JavaScript puro.
                        O design dos layout e da maioria de
                        seus elementos são de minha autoria.`,
          website: 'https://jutelles.github.io/js-documentation-page/',
          sourceCode: 'https://github.com/juTelles/js-documentation-page',
        },
        {
          title: 'Ada Lovelace Webpage',
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
          description: `Construí Website totalmente
                        responsivo no Codepen. Implementei diversos elementos,
                        funcionais e responsivos, usando,
                        quando possível, apenas HTML e CSS e
                        quando necessário JavaScript puro.
                        O design dos layout e da maioria de
                        seus elementos são de minha autoria.`,
          website: 'https://jutelles.github.io/ada-lovelace-tribute-page/',
          sourceCode: 'https://github.com/juTelles/ada-lovelace-tribute-page',
        },
        {
          title: 'MySheet Website',
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
          description: `Construí Website totalmente
                        responsivo no Codepen. Implementei diversos elementos,
                        funcionais e responsivos, usando,
                        quando possível, apenas HTML e CSS e
                        quando necessário JavaScript puro.
                        O design dos layout e da maioria de
                        seus elementos são de minha autoria.`,
          website: 'https://jutelles.github.io/my-sheet-website/',
          sourceCode: 'https://github.com/juTelles/my-sheet-website',
        },
        {
          title: 'Jogo Magic8ball',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Programação Reativa',
            'Front-end',
            'Web Page',
            'Design',
          ],
          description: `Programei jogo simples, em webpage, simulando a famosa magic8ball,
          onde você faz uma pergunta, chacoalha a bola e uma resposta aparece em sua superfície.
          Utilizei JavaScript para a lógica do jogo e CSS para estilização.`,
          website: 'https://jutelles.github.io/magic8ball/',
          sourceCode: 'https://github.com/juTelles/magic8ball',
        },
        {
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
          description: `Programei Website totalmente
                        responsivo, usando apenas com HTML e CSS,
                        a partir de um photoshop comp.`,
          website: 'https://jutelles.github.io/unplugged-retreat-website',
          sourceCode: 'https://github.com/juTelles/unplugged-retreat-website',
        },
        {
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
          description: `Codifiquei Website totalmente
                        responsivo, usando apenas HTML e CSS,
                        a partir de um photoshop comp.`,
          website: 'https://jutelles.github.io/rogue-pickings',
          sourceCode: 'https://github.com/juTelles/rogue-pickings',
        },
        {
          title: 'Jubille Austen Portfólio',
          keyWords: [
            'HTML',
            'CSS',
            'Front-end',
            'Web Page',
            'Photoshop',
            'web design',
            'responsivo',
          ],
          description: `Codifiquei Website totalmente
                        responsivo, usando apenas HTML e CSS,
                        a partir de um photoshop comp.`,
          website: 'https://jutelles.github.io/jubilee-austen-repo/',
          sourceCode: 'https://github.com/juTelles/jubilee-austen-repo',
        },
      ],
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
      skillsSections: [
        {
          title: 'Code',
          color: 'pink',
          skills: [
            {
              name: 'CSS',
              level: 5,
            },
            { name: 'HTML', level: 5 },
            {
              name: 'JavaScript',
              level: 4,
            },
            {
              name: 'Node.js',
              level: 4,
            },
            {
              name: 'React',
              level: 4,
            },
            {
              name: 'Express',
              level: 3,
            },
            {
              name: 'MongoDB',
              level: 3,
            },
            {
              name: 'Mongoose',
              level: 3,
            },
            {
              name: 'Python',
              level: 3,
            },
            {
              name: 'PHP',
              level: 1,
            },
            {
              name: 'Ruby',
              level: 1,
            },
            {
              name: 'Wordpress',
              level: 1,
            },
          ],
        },
        {
          title: 'Ferramentas',
          color: 'blue',
          skills: [
            {
              name: 'GitHub',
              level: 5,
            },
            {
              name: 'Google Docs',
              level: 5,
            },
            {
              name: 'Office',
              level: 4,
            },
            {
              name: 'Photoshop',
              level: 3,
            },
            {
              name: 'Illustrator',
              level: 2,
            },
          ],
        },
        {
          title: 'Conhecimentos',
          color: 'yellow',
          skills: [
            {
              name: 'APIs',
              level: 4,
            },
            {
              name: 'UI design',
              level: 3,
            },
            {
              name: 'UX design',
              level: 3,
            },
            {
              name: 'IA',
              level: 2,
            },
          ],
        },
        {
          title: 'Idiomas',
          color: 'green',
          skills: [
            {
              name: 'Inglês',
              level: 5,
            },
            {
              name: 'Português',
              level: 5,
            },
          ],
        },
        {
          title: 'Pessoais',
          color: 'purple',
          skills: [
            {
              name: 'Criatividade',
              level: 5,
            },
            {
              name: 'Determinação',
              level: 5,
            },
            {
              name: 'Comunicação',
              level: 4,
            },
            {
              name: 'Concentração',
              level: 4,
            },
            {
              name: 'Organização',
              level: 4,
            },
          ],
        },
      ],
    },
  },
  // english text //

  en: {
    title: 'Resume',
    education: {
      title: 'Education',
      type: 'list',
      educationList: [
        [
          '2021',
          'In progress',
          'Skillcrush Bootcamp',
          'Break Into Tech Package',
        ],
        [
          '09/2020',
          'IGTI - Full-Stack Developer Bootcamp',
          'Certified Full-Stack Developer',
        ],
        ['09/2020', 'Free Code Camp', 'Certified Responsive Web Design'],
        [
          '08/2020',
          'IGTI - Data Universe event',
          'Certificate of participation',
        ],
        [
          '05/2020',
          'Sprint PrograMaria',
          'Artificial Intelligence for Devs, in partnership to Intel',
        ],
        [
          '2019',
          'Edx - MIT Course',
          'Introduction To Computer Science And Programming',
        ],
        [
          '2007-2011',
          'Pontifical Catholic University Of Campinas',
          'Bachelor of Science Laws',
          'Approved at the Brazilian Bar Exam',
        ],
      ],
    },
    current: {
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
      projectsList: [
        {
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
          website: 'https://grades-app-front-end.herokuapp.com/grade',
          sourceCode: 'https://github.com/juTelles/grades-app',
        },
        {
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
          website: 'https://github.com/juTelles/my-bank-api',
          sourceCode: 'https://github.com/juTelles/my-bank-api',
        },
        {
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
          website: 'https://jutelles.github.io/compound-interest-calculator/',
          sourceCode:
            'https://github.com/juTelles/compound-interest-calculator',
        },
        {
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
          website: 'https://jutelles.github.io/salary-calculator/',
          sourceCode: 'https://github.com/juTelles/salary-calculator',
        },
        {
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
          website: 'https://jutelles.github.io/search-box/',
          sourceCode: 'https://github.com/juTelles/search-box',
        },
        {
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
          website: 'https://jutelles.github.io/radio-podcast',
          sourceCode: 'https://github.com/juTelles/radio-podcast',
        },
        {
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
          website: 'https://jutelles.github.io/color-picker-ranges',
          sourceCode: 'https://github.com/juTelles/color-picker-ranges',
        },
        {
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
          website: 'https://jutelles.github.io/covid-survey/',
          sourceCode: 'https://github.com/juTelles/covid-survey',
        },
        {
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
          website: 'https://jutelles.github.io/js-documentation-page/',
          sourceCode: 'https://github.com/juTelles/js-documentation-page',
        },
        {
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
                        Made the designs of the layouts and most of its elements.`,
          website: 'https://jutelles.github.io/ada-lovelace-tribute-page/',
          sourceCode: 'https://github.com/juTelles/ada-lovelace-tribute-page',
        },
        {
          title: 'MySheet Website',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Reactive Programming',
            'Front-end',
            'Web Page',
            'Design',
            'CodePen',
            'responsivo',
          ],
          description: `Developed fully responsive websites in Codepen.
          Implemented responsive menus, forms and reactive
          programming using, when possible, only HTML and CSS and,
          when necessary, pure JavaScript.
          Made the designs of the layouts and most of its elements.`,
          website: 'https://jutelles.github.io/my-sheet-website/',
          sourceCode: 'https://github.com/juTelles/my-sheet-website',
        },
        {
          title: 'Magic8ball Game',
          keyWords: [
            'HTML',
            'css',
            'JavaScript',
            'Reactive Programming',
            'Front-end',
            'Web Page',
            'Design',
          ],
          description: `Programmed simple Magic8Ball game in webpage,
                      famous game where you make a question and shakes
                      the ball for a answer to appear in it's surface.
                      Made using JavaScript for the logic and CSS for styling.`,
          website: 'https://jutelles.github.io/magic8ball/',
          sourceCode: 'https://github.com/juTelles/magic8ball',
        },
        {
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
          website: 'https://jutelles.github.io/unplugged-retreat-website',
          sourceCode: 'https://github.com/juTelles/unplugged-retreat-website',
        },
        {
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
          website: 'https://jutelles.github.io/rogue-pickings',
          sourceCode: 'https://github.com/juTelles/rogue-pickings',
        },
        {
          title: 'Jubille Austen Portfólio',
          keyWords: [
            'HTML',
            'CSS',
            'Front-end',
            'Web Page',
            'Photoshop',
            'web design',
            'responsivo',
          ],
          description: `Programmed fully responsive website
                          with HTML and CSS from a photoshop comp.`,
          website: 'https://jutelles.github.io/jubilee-austen-repo/',
          sourceCode: 'https://github.com/juTelles/jubilee-austen-repo',
        },
      ],
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
    },
    skills: {
      title: 'Skills',
      type: 'skills',
      skillsSections: [
        {
          title: 'Code',
          color: 'pink',
          skills: [
            {
              name: 'CSS',
              level: 5,
            },
            { name: 'HTML', level: 5 },
            {
              name: 'JavaScript',
              level: 4,
            },
            {
              name: 'Node.js',
              level: 4,
            },
            {
              name: 'React',
              level: 4,
            },
            {
              name: 'Express',
              level: 3,
            },
            {
              name: 'MongoDB',
              level: 3,
            },
            {
              name: 'Mongoose',
              level: 3,
            },
            {
              name: 'Python',
              level: 3,
            },
            {
              name: 'PHP',
              level: 1,
            },
            {
              name: 'Ruby',
              level: 1,
            },
            {
              name: 'Wordpress',
              level: 1,
            },
          ],
        },
        {
          title: 'Tools',
          color: 'blue',
          skills: [
            {
              name: 'GitHub',
              level: 5,
            },
            {
              name: 'Google Docs',
              level: 5,
            },
            {
              name: 'Office',
              level: 4,
            },
            {
              name: 'Photoshop',
              level: 3,
            },
            {
              name: 'Illustrator',
              level: 2,
            },
          ],
        },
        {
          title: 'Adeptness',
          color: 'yellow',
          skills: [
            {
              name: 'APIs',
              level: 4,
            },
            {
              name: 'UI design',
              level: 3,
            },
            {
              name: 'UX design',
              level: 3,
            },
            {
              name: 'IA',
              level: 2,
            },
          ],
        },
        {
          title: 'Languages',
          color: 'green',
          skills: [
            {
              name: 'English',
              level: 5,
            },
            {
              name: 'Portuguese',
              level: 5,
            },
          ],
        },
        {
          title: 'SoftSkills',
          color: 'purple',
          skills: [
            {
              name: 'Creativity',
              level: 5,
            },
            {
              name: 'Determination',
              level: 5,
            },
            {
              name: 'Communication',
              level: 4,
            },
            {
              name: 'Concentration',
              level: 4,
            },
            {
              name: 'Organization',
              level: 4,
            },
          ],
        },
      ],
    },
  },
};
