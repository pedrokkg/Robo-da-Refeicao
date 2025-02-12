const bancoDeDados = [
    // Proteínas
    { id: 1, nome: "Frango Grelhado", receita: "Tempere o frango com alho, sal, limão, pimenta e deixe marinar por pelo menos 30 minutos. Aqueça uma frigideira com azeite e grelhe os filés até ficarem dourados e cozidos por dentro. ", tipo: "Proteína" },
    { id: 2, nome: "Peixe Assado", receita: "Tempere o peixe com ervas frescas, alho, sal, limão e azeite. Coloque-o em uma assadeira e leve ao forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourar.", tipo: "Proteína" },
    { id: 3, nome: "Carne de Panela", receita: "Refogue cebola e alho picados em um pouco de óleo, adicione a carne cortada em cubos e deixe dourar. Acrescente caldo de carne, cenoura e batatas. Cozinhe por cerca de 1h ou até a carne ficar bem macia.", tipo: "Proteína" },
    { id: 4, nome: "Omelete Simples", receita: "Bata os ovos com um pouco de sal e pimenta, adicione queijo e ervas finas a gosto. Cozinhe em uma frigideira antiaderente até que fique firme, virando para dourar dos dois lados.", tipo: "Proteína" },
    { id: 5, nome: "Tofu Grelhado", receita: "Corte o tofu em fatias e tempere com shoyu, gengibre e um toque de mel. Grelhe as fatias em uma frigideira com azeite até que fiquem douradas dos dois lados..", tipo: "Proteína" },
    { id: 6, nome: "Coxa de Frango Assada", receita: "Tempere as coxas de frango com limão, alho, sal, pimenta e páprica. Coloque-as em uma assadeira e asse em forno médio (180°C) por cerca de 1h até que fiquem douradas e crocantes. ", tipo: "Proteína" },
    { id: 7, nome: "Hambúrguer Caseiro", receita: "Misture carne moída com cebola, sal e temperos a gosto. Modele os hambúrgueres e grelhe em uma frigideira com azeite até que fiquem dourados.", tipo: "Proteína" },
    { id: 8, nome: "Bife Acebolado", receita: "Tempere os bifes com alho, sal e pimenta. Frite-os em uma frigideira com azeite até que fiquem dourados. Em outra frigideira, refogue cebolas até ficarem douradas e coloque-as sobre os bifes.", tipo: "Proteína" },
    { id: 9, nome: "Filé de Peixe Empanado", receita: "Passe o peixe em farinha de rosca temperada com sal e pimenta e frite até que fiquem crocantes e dourados.", tipo: "Proteína" },
    { id: 10, nome: "Frango Xadrez", receita: "Corte o frango em cubos e refogue com pimentões, cebola e molho shoyu. Cozinhe até o frango ficar completamente cozido e os legumes ainda crocantes. ", tipo: "Proteína" },
    { id: 11, nome: "Estrogonofe de Frango", receita: "Refogue o frango em cubos com cebola e alho. Adicione creme de leite, molho de tomate e temperos a gosto. Cozinhe por mais alguns minutos até o molho engrossar.", tipo: "Proteína" },
    { id: 12, nome: "Almôndegas ao Molho", receita: "Modele bolinhas de carne temperada com sal, alho e ervas finas. Cozinhe em molho de tomate caseiro até que fiquem bem cozidas.", tipo: "Proteína" },
    { id: 13, nome: "Filé Mignon ao Molho", receita: "Tempere o filé mignon com sal e pimenta. Grelhe os filés em uma frigideira quente até o ponto desejado. Prepare o molho madeira com vinho tinto, cogumelos e caldo de carne.", tipo: "Proteína" },
    { id: 14, nome: "Lombo Assado", receita: "Tempere o lombo com alho, sal, mostarda e mel. Asse por cerca de 1h a 180°C, até dourar. ", tipo: "Proteína" },
    { id: 15, nome: "Salmão ao Molho de Maracujá", receita: "Tempere o salmão com sal e pimenta. Grelhe o peixe até ficar dourado. Prepare um molho de maracujá com o suco da fruta, açúcar e um toque de gengibre.", tipo: "Proteína" },
    { id: 16, nome: "Cordeiro Assado", receita: "Tempere o cordeiro com alecrim, alho, sal e pimenta. Asse em forno a 180°C por 1h30 até ficar bem dourado.", tipo: "Proteína" },
    { id: 17, nome: "Costela de Porco", receita: "Tempere as costelas com sal, pimenta e um toque de mel. Asse por 2h a 160°C, pincelando com molho barbecue.", tipo: "Proteína" },
    { id: 18, nome: "Frango à Parmegiana", receita: "Empane o frango e frite até dourar. Cubra com molho de tomate e queijo mussarela. Leve ao forno para gratinar.", tipo: "Proteína" },
    { id: 19, nome: "Espetinho de Frango", receita: "Corte o frango em cubos e tempere com alho, limão e especiarias. Coloque os cubos nos espetos e grelhe até ficarem dourados.", tipo: "Proteína" },
    { id: 20, nome: "Peito de Peru", receita: "Tempere o peito de peru com ervas, sal e pimenta. Asse até que fique dourado e suculento.", tipo: "Proteína" },
    { id: 21, nome: "Bacalhau à Brás", receita: "Desfie o bacalhau cozido e refogue com cebola e batatas fritas. Adicione ovos batidos e misture até que fique cremoso.", tipo: "Proteína" },
    { id: 22, nome: "Robalo Grelhado", receita: "Tempere o robalo com sal, pimenta e limão. Grelhe até que fique dourado e suculento.", tipo: "Proteína" },
    { id: 23, nome: "Frango ao Curry", receita: "Cozinhe o frango em cubos com curry, leite de coco, cebola e alho. Deixe cozinhar até o molho engrossar.", tipo: "Proteína" },
    { id: 24, nome: "Salsichão", receita: "Frite o salsichão até que fique bem dourado.", tipo: "Proteína" },
    { id: 25, nome: "Linguiça Calabresa", receita: "Corte a linguiça em rodelas e frite até dourar.", tipo: "Proteína" },
    { id: 26, nome: "Peixe Grelhado com Ervas", receita: "Tempere o peixe com ervas, sal e pimenta. Grelhe até dourar.", tipo: "Proteína" },
    { id: 27, nome: "Tartar de Salmão", receita: "Corte o salmão em cubos pequenos e tempere com limão, azeite, sal e pimenta.", tipo: "Proteína" },
    { id: 28, nome: "Churrasco de Frango", receita: "Tempere as coxas e sobrecoxas com temperos de churrasco. Asse até ficarem crocantes e douradas.", tipo: "Proteína" },
    { id: 29, nome: "Carne Moída com Legumes", receita: "Refogue carne moída com alho, cebola e legumes variados. Cozinhe até que a carne esteja completamente dourada.", tipo: "Proteína" },
    { id: 30, nome: "Linguado Grelhado", receita: "Tempere o linguado com sal e limão. Grelhe em uma frigideira quente até ficar dourado.", tipo: "Proteína" },
    
    // Legumes
    { id: 31, nome: "Batata Doce Assada", receita: "Corte a batata doce em rodelas e asse com azeite, alecrim e sal até ficarem crocantes.", tipo: "Legume" },
    { id: 32, nome: "Cenoura Cozida", receita: "Cozinhe as cenouras até ficarem macias.", tipo: "Legume" },
    { id: 33, nome: "Abobrinha Grelhada", receita: "Corte a abobrinha em fatias e grelhe com azeite até ficarem macias.", tipo: "Legume" },
    { id: 34, nome: "Couve Manteiga Refogada", receita: "Refogue a couve manteiga com alho picado em azeite até ficar bem dourada. ", tipo: "Legume" },
    { id: 35, nome: "Alface Lisa", receita: "Sirva alface lisa em uma salada simples com pepino, cenoura ralada e molho de iogurte. Ideal como acompanhamento leve e saudável.", tipo: "Legume" },
    { id: 36, nome: "Agrião", receita: "Misture agrião com laranja, nozes e queijo feta para uma salada refrescante. ", tipo: "Legume" },
    { id: 37, nome: "Pepino", receita: "Corte o pepino em fatias finas e sirva com vinagre de maçã, azeite e sal.", tipo: "Legume" },
    { id: 38, nome: "Cebola Roxa", receita: "Corte a cebola roxa em rodelas finas e adicione a saladas. Também pode ser caramelizada para complementar pratos de carne.", tipo: "Legume" },
    { id: 39, nome: "Endívia", receita: "Tempere as folhas de endívia com azeite, vinagre e um toque de mel para uma salada refrescante. Combine com queijo de cabra para dar um sabor único.", tipo: "Legume" },
    { id: 40, nome: "Cebolinha", receita: "Corte a cebolinha finamente e adicione a sopas ou saladas como tempero fresco. Ótima para dar sabor a pratos simples.", tipo: "Legume" },
    { id: 41, nome: "Salsinha", receita: "Use salsinha picada para temperar pratos como arroz, feijão ou sopas. Pode ser adicionada no final do preparo para um toque de frescor.", tipo: "Legume" },
    { id: 42, nome: "Manjericão", receita: "Manjericão fresco é perfeito em molhos de tomate caseiros e para temperar massas. Também pode ser usado para temperar saladas de tomate.", tipo: "Legume" },
    { id: 43, nome: "Alho Poró", receita: "Refogue alho poró com azeite até murchar. Também pode ser usado em sopas e cremes.", tipo: "Legume" },
    { id: 44, nome: "Lettuce Romaine", receita: "Use folhas frescas de alface romana em saladas crocantes com molho de iogurte.", tipo: "Legume" },
    { id: 45, nome: "Basil", receita: "Prepare molho pesto com folhas frescas de manjericão, azeite, pinoli e queijo parmesão.", tipo: "Legume" },
    { id: 46, nome: "Pimentão", receita: "Refogue o pimentão com cebola e alho, e adicione ao arroz ou feijão para dar sabor. Também pode ser grelhado como acompanhamento de carnes.", tipo: "Legume" },
    { id: 47, nome: "Tomate", receita: "Use tomates frescos em saladas ou em molhos caseiros. Pode ser assado ou grelhado também para realçar o sabor.", tipo: "Legume" },
    { id: 48, nome: "Batata Inglesa", receita: "Corte a batata em cubos e asse com azeite e alecrim até ficarem douradas e crocantes.", tipo: "Legume" },
    { id: 49, nome: "Berinjela", receita: "Corte a berinjela em fatias, tempere com sal, pimenta e azeite, e asse até ficarem macias.", tipo: "Legume" },
    { id: 50, nome: "Milho Verde", receita: "Cozinhe o milho em água e sal até ficar macio. Sirva como acompanhamento ou utilize-o em saladas e sopas.", tipo: "Legume" },
    { id: 51, nome: "Vagem", receita: "Cozinhe as vagens até ficarem macias e tempere com azeite, sal e pimenta. ", tipo: "Legume" },
    { id: 52, nome: "Nabo", receita: "Refogue o nabo com cebola, alho e azeite até ficarem macios. ", tipo: "Legume" },
    { id: 53, nome: "Couve-flor", receita: "Cozinhe a couve-flor até ficar macia, depois refogue com alho e azeite até dourar. ", tipo: "Legume" },
    { id: 54, nome: "Brócolis", receita: "Cozinhe os brócolis até ficarem macios e depois salteie-os com alho e azeite.", tipo: "Legume" },
    { id: 55, nome: "Cenoura Ralada", receita: "Rale a cenoura e sirva com um molho de iogurte e limão como salada fresca. Também pode ser adicionada em bolos e tortas.", tipo: "Legume" },
    { id: 56, nome: "Abóbora", receita: "Cozinhe a abóbora até ficar bem macia e, em seguida, faça um purê. Tempere com sal, pimenta e um toque de azeite.", tipo: "Legume" },
    { id: 57, nome: "Beterraba", receita: "Cozinhe a beterraba até ficar macia, depois corte em rodelas e tempere com azeite e vinagre. Sirva como salada ou acompanhamento.", tipo: "Legume" },
    { id: 58, nome: "Rúcula", receita: "Sirva a rúcula fresca em uma salada simples com tomate, queijo de cabra e nozes. Regue com azeite e vinagre balsâmico.", tipo: "Legume" },
    { id: 59, nome: "Alcachofra", receita: "Cozinhe as alcachofras até ficarem macias, depois retire as folhas e sirva com molho de manteiga e alho.", tipo: "Legume" },
    { id: 60, nome: "Cogumelos", receita: "Refogue cogumelos frescos com alho e azeite até ficarem macios.", tipo: "Legume" },
    { id: 61, nome: "Aspargos", receita: "Cozinhe os aspargos até ficarem al dente, depois salteie-os com azeite, alho e um toque de limão.", tipo: "Legume" },
    { id: 62, nome: "Salsão", receita: "Refogue o salsão com cebola e alho até ficarem macios. Sirva como acompanhamento ou adicione a sopas e caldos.", tipo: "Legume" },
    { id: 63, nome: "Tomate Cereja", receita: "Sirva os tomates cereja frescos em saladas ou como aperitivo, temperados com azeite, sal e pimenta. Também pode ser assado.", tipo: "Legume" },
    { id: 64, nome: "Ervilha", receita: "Cozinhe as ervilhas até ficarem macias e sirva como acompanhamento.", tipo: "Legume" },
    { id: 65, nome: "Pimentão Verde", receita: "Refogue o pimentão verde com cebola e alho até murchar. Sirva como acompanhamento ou adicione a pratos de arroz.", tipo: "Legume" },
    { id: 66, nome: "Pimentão Amarelo", receita: "Grelhe o pimentão amarelo e sirva em saladas ou como parte de um prato principal.", tipo: "Legume" },
    { id: 67, nome: "Pimentão Vermelho", receita: "Corte o pimentão vermelho em tiras, tempere com azeite e asse até murchar.", tipo: "Legume" },
    { id: 68, nome: "Lichia", receita: "Retire a casca da lichia e sirva em saladas de frutas ou como sobremesa leve.", tipo: "Legume" },

    // Vegetais
    { id: 69, nome: "Espinafre Refogado", receita: "Refogue o espinafre com alho picado e azeite até murchar. Tempere com sal e pimenta e sirva como acompanhamento de carnes ou massas.", tipo: "Vegetal" },
    { id: 70, nome: "Brócolis com Alho", receita: "Cozinhe os brócolis até ficarem macios, depois refogue-os com alho picado e azeite.", tipo: "Vegetal" },
    { id: 71, nome: "Almeirão", receita: "Tempere o almeirão com azeite, vinagre e um toque de mel para equilibrar o amargor. Sirva como salada fresca.", tipo: "Vegetal" },
    { id: 72, nome: "Couve-flor Gratinada", receita: "Cozinhe a couve-flor até ficar macia, depois cubra com queijo ralado e leve ao forno para gratinar.", tipo: "Vegetal" },
    { id: 73, nome: "Escarola", receita: "Refogue a escarola com azeite e alho até murchar. Tempere com sal e pimenta e sirva como acompanhamento para carnes.", tipo: "Vegetal" },
    { id: 74, nome: "Rúcula com Laranja", receita: "Misture folhas de rúcula com gomos de laranja e regue com molho balsâmico. Sirva como entrada refrescante.", tipo: "Vegetal" },
    { id: 75, nome: "Pimentão Recheado", receita: "Corte o pimentão ao meio e recheie com arroz, legumes e carne moída. Asse no forno até ficar macio.", tipo: "Vegetal" },
    { id: 76, nome: "Alface Americana", receita: "Sirva as folhas de alface americana em uma salada crocante com tomate, pepino e molho de iogurte.", tipo: "Vegetal" },
    { id: 77, nome: "Batata Doce Amassada", receita: "Cozinhe a batata doce até ficar bem macia e depois amasse com manteiga e sal. ", tipo: "Vegetal" },
    { id: 78, nome: "Cogumelos Refogados", receita: "Refogue os cogumelos com alho, azeite e ervas finas até ficarem macios.", tipo: "Vegetal" },
    { id: 79, nome: "Tomate Assado", receita: "Corte os tomates ao meio, tempere com azeite e ervas, e asse até ficarem caramelizados.", tipo: "Vegetal" },
    { id: 80, nome: "Couve Manteiga", receita: "Refogue a couve manteiga com alho e azeite até dourar.", tipo: "Vegetal" },
    { id: 81, nome: "Abobrinha Recheada", receita: "Corte a abobrinha ao meio e retire o miolo. Recheie com carne moída e queijo, depois asse no forno até dourar.", tipo: "Vegetal" },
    { id: 82, nome: "Cenoura Assada com Mel", receita: "Corte as cenouras em tiras, tempere com azeite, mel e alecrim, e asse até ficarem macias e caramelizadas.", tipo: "Vegetal" },
    { id: 83, nome: "Beterraba Assada", receita: "Asse as beterrabas com azeite e sal até ficarem macias. Sirva como acompanhamento ou em saladas.", tipo: "Vegetal" },
    { id: 84, nome: "Batata Inglesa ao Forno", receita: "Corte as batatas em cubos, tempere com azeite e alecrim, e asse até ficarem crocantes por fora e macias por dentro.", tipo: "Vegetal" },
    { id: 85, nome: "Pepino em Conserva", receita: "Corte o pepino em fatias finas, adicione vinagre, açúcar e sal, e deixe descansar por algumas horas antes de servir.", tipo: "Vegetal" },
    { id: 86, nome: "Nabo Grelhado", receita: "Corte o nabo em fatias e grelhe com azeite e alecrim até ficarem dourados. ", tipo: "Vegetal" },
    { id: 87, nome: "Alho Poró com Creme", receita: "Corte o alho poró e cozinhe com creme de leite até ficar macio.", tipo: "Vegetal" },
    { id: 88, nome: "Rabanete", receita: "Corte o rabanete em rodelas finas e sirva em saladas ou como petisco, temperado com azeite e sal.", tipo: "Vegetal" },
    { id: 89, nome: "Alcachofra Cozida", receita: "Cozinhe as alcachofras até ficarem macias, depois retire as folhas e sirva com molho de azeite e alho.", tipo: "Vegetal" },
    { id: 90, nome: "Espinafre com Bacon", receita: "Refogue o espinafre com pedaços de bacon crocante até murchar.", tipo: "Vegetal" },
    { id: 91, nome: "Pimentão Assado", receita: "Corte o pimentão em tiras, asse com azeite e ervas até ficarem caramelizados.", tipo: "Vegetal" },
    { id: 92, nome: "Cebola Caramelizada", receita: "Refogue as cebolas lentamente até ficarem douradas e caramelizadas.", tipo: "Vegetal" },
    { id: 93, nome: "Ervilhas com Manteiga", receita: "Cozinhe as ervilhas até ficarem macias e depois misture com manteiga derretida. ", tipo: "Vegetal" },
    { id: 94, nome: "Couve-flor ao Curry", receita: "Cozinhe a couve-flor e depois refogue com curry e leite de coco.", tipo: "Vegetal" },
    { id: 95, nome: "Brócolis ao Alho", receita: "Refogue os brócolis com alho e azeite até ficarem dourados.", tipo: "Vegetal" },
    { id: 96, nome: "Abóbora Assada", receita: "Corte a abóbora em cubos, tempere com azeite, mel e especiarias e asse até ficarem douradas.", tipo: "Vegetal" },
    { id: 97, nome: "Almeirão Refogado", receita: "Refogue o almeirão com alho, azeite e pimenta até murchar.", tipo: "Vegetal" },
    { id: 98, nome: "Cenoura Glaceada", receita: "Cozinhe as cenouras e depois glaceie com mel e manteiga até ficarem douradas.", tipo: "Vegetal" },
    { id: 99, nome: "Couve Gratinada", receita: "Refogue a couve e depois cubra com queijo e creme de leite. Leve ao forno para gratinar.", tipo: "Vegetal" },
    { id: 100, nome: "Vagem com Alho", receita: "Cozinhe a vagem até ficarem macias e depois refogue com alho picado e azeite.", tipo: "Vegetal" },
    { id: 101, nome: "Pimentão Recheado de Quinoa", receita: "Recheie pimentões com quinoa cozida, legumes e ervas. Asse no forno até ficarem macios e dourados.", tipo: "Vegetal" },
    { id: 102, nome: "Beterraba com Queijo", receita: "Asse beterrabas e depois sirva com queijo feta esfarelado e nozes. Tempere com azeite e vinagre balsâmico.", tipo: "Vegetal" },
    { id: 103, nome: "Alho Poró com Limão", receita: "Refogue o alho poró com azeite e depois adicione suco de limão e sal.", tipo: "Vegetal" },

    // Complementos
    { id: 104, nome: "Arroz Branco", receita: "Cozinhe o arroz com água e sal até ficar macio e soltinho.", tipo: "Complemento" },
    { id: 105, nome: "Feijão Preto", receita: "Cozinhe o feijão com alho, cebola, louro e sal até ficar macio.", tipo: "Complemento" },
    { id: 106, nome: "Batata Frita", receita: "Corte as batatas em palitos e frite até ficarem douradas e crocantes.", tipo: "Complemento" },
    { id: 107, nome: "Farofa de Bacon", receita: "Frite o bacon até ficar crocante e depois misture com farinha de mandioca.", tipo: "Complemento" },
    { id: 108, nome: "Purê de Batata", receita: "Cozinhe as batatas e depois amasse com leite, manteiga e sal até formar um purê cremoso.", tipo: "Complemento" },
    { id: 109, nome: "Molho Bechamel", receita: "Prepare um molho bechamel com leite, manteiga, farinha e noz-moscada.", tipo: "Complemento" },
    { id: 110, nome: "Vinagrete", receita: "Misture tomate, cebola, pimentão e vinagre em um bowl. Tempere com azeite, sal e pimenta.", tipo: "Complemento" },
    { id: 111, nome: "Salada de Batata", receita: "Cozinhe batatas e misture com maionese, cebola picada, pimentão e cheiro verde. ", tipo: "Complemento" },
    { id: 112, nome: "Grão-de-Bico Temperado", receita: "Cozinhe o grão-de-bico e depois tempere com azeite, limão, sal e pimenta.", tipo: "Complemento" },
    { id: 113, nome: "Queijo Coalho", receita: "Grelhe o queijo coalho até dourar. Sirva com molho de melaço de cana como aperitivo ou acompanhamento de carnes.", tipo: "Complemento" },
    { id: 114, nome: "Molho Pesto", receita: "Prepare um molho pesto com manjericão, azeite, queijo parmesão, alho e pinoli.", tipo: "Complemento" },
    { id: 115, nome: "Cuscuz Paulista", receita: "Prepare o cuscuz com tomate, cenoura, ervilhas e peixe desfiado.", tipo: "Complemento" },
    { id: 116, nome: "Tartar de Abacate", receita: "Corte o abacate em cubos e misture com cebola roxa, tomate e suco de limão.", tipo: "Complemento" },
    { id: 117, nome: "Chimichurri", receita: "Misture alho, cebola, pimentão, vinagre, azeite e especiarias.", tipo: "Complemento" },
    { id: 118, nome: "Molho de Iogurte", receita: "Misture iogurte natural com limão, azeite e ervas finas. ", tipo: "Complemento" },
    { id: 119, nome: "Polenta Frita", receita: "Prepare a polenta e depois corte em tiras e frite até dourar.", tipo: "Complemento" },
    { id: 120, nome: "Batata Rosti", receita: "Rale as batatas e depois frite até ficarem crocantes.", tipo: "Complemento" },
    { id: 121, nome: "Maionese Caseira", receita: "Misture ovo, óleo, vinagre e mostarda até formar uma maionese cremosa.", tipo: "Complemento" },
    { id: 122, nome: "Arroz de Carreteiro", receita: "Prepare arroz e misture com carne seca desfiada, linguiça, tomate e cebola.", tipo: "Complemento" },
    { id: 123, nome: "Fritas", receita: "Corte as batatas em palitos e frite até ficarem douradas e crocantes.", tipo: "Complemento" },
    { id: 124, nome: "Sopa de Legumes", receita: "Cozinhe legumes variados e depois bata no liquidificador.", tipo: "Complemento" },
    { id: 125, nome: "Molho de Tomate Caseiro", receita: "Refogue alho, cebola e tomate até formar um molho espesso", tipo: "Complemento" },
    { id: 126, nome: "Cebola Crocante", receita: "Frite cebolas empanadas até ficarem crocantes.", tipo: "Complemento" },
    { id: 127, nome: "Pão de Alho", receita: "Misture alho, manteiga e salsinha e espalhe sobre o pão. Leve ao forno até ficar crocante..", tipo: "Complemento" },
    { id: 128, nome: "Abóbora com Mel", receita: "Corte a abóbora em cubos e asse com mel e especiarias até ficarem macias.", tipo: "Complemento" },
    { id: 129, nome: "Bacalhau Desfiado", receita: "Cozinhe o bacalhau e depois desfie. Misture com cebola, azeite e salsinha e sirva como recheio para tortas ou como prato principal.", tipo: "Complemento" },
    { id: 130, nome: "Cenoura Glaceada", receita: "Cozinhe as cenouras até ficarem macias, depois glaceie com mel e manteiga até ficarem douradas.", tipo: "Complemento" },
    { id: 131, nome: "Purê de Abóbora", receita: "Cozinhe a abóbora até amolecer e depois amasse com manteiga e sal até formar um purê suave. ", tipo: "Complemento" },
    { id: 132, nome: "Espaguete de Abobrinha", receita: "Corte a abobrinha em tiras finas e refogue com azeite e alho até ficarem macias", tipo: "Complemento" },
    { id: 133, nome: "Pão de Queijo", receita: "Prepare a massa com polvilho, queijo e leite, e asse até ficarem dourados.", tipo: "Complemento" },
    { id: 134, nome: "Batata Gratinada", receita: "Corte as batatas em rodelas, coloque em um refratário, cubra com creme de leite e queijo, e asse até dourar.", tipo: "Complemento" },
    { id: 135, nome: "Creme de Espinafre", receita: "Refogue espinafre e depois misture com creme de leite.", tipo: "Complemento" },
    { id: 136, nome: "Pasta de Abacate", receita: "Amasse o abacate e misture com limão, alho e pimenta.", tipo: "Complemento" },
    { id: 137, nome: "Mousse de Manga", receita: "Bata a manga com creme de leite até formar um mousse cremoso. ", tipo: "Complemento" },
    { id: 138, nome: "Farofa de Cenoura", receita: "Refogue cenoura ralada com alho e cebola, depois adicione farinha de mandioca.", tipo: "Complemento" }
];

// Preenche os datalists com as opções do banco de dados
function preencherDatalists() {
    const datalistProteina = document.getElementById('datalist-proteina');
    const datalistLegume = document.getElementById('datalist-legume');
    const datalistVegetal = document.getElementById('datalist-vegetal');
    const datalistComp1 = document.getElementById('datalist-comp1');
    const datalistComp2 = document.getElementById('datalist-comp2');
    const datalistComp3 = document.getElementById('datalist-comp3');

    bancoDeDados.forEach(item => {
        const option = document.createElement('option');
        option.value = item.nome;

        switch(item.tipo) {
            case "Proteína":
                datalistProteina.appendChild(option);
                break;
            case "Legume":
                datalistLegume.appendChild(option);
                break;
            case "Vegetal":
                datalistVegetal.appendChild(option);
                break;
            case "Complemento":
                // Para cada complemento, crie uma nova instância de option
                const option1 = document.createElement('option');
                option1.value = item.nome;
                if (!datalistComp1.querySelector(`option[value="${item.nome}"]`)) {
                    datalistComp1.appendChild(option1);
                }

                const option2 = document.createElement('option');
                option2.value = item.nome;
                if (!datalistComp2.querySelector(`option[value="${item.nome}"]`)) {
                    datalistComp2.appendChild(option2);
                }

                const option3 = document.createElement('option');
                option3.value = item.nome;
                if (!datalistComp3.querySelector(`option[value="${item.nome}"]`)) {
                    datalistComp3.appendChild(option3);
                }
                break;
        }
    });
}

// Adiciona evento para o botão de adicionar complemento extra
document.getElementById('add-complemento').addEventListener('click', function() {
    const novoComplemento = document.createElement('div');
    novoComplemento.classList.add('complemento');

    const label = document.createElement('label');
    label.textContent = 'Complemento adicional:';
    novoComplemento.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('list', 'datalist-comp-adicional');  // Referência ao novo datalist
    novoComplemento.appendChild(input);

    const datalist = document.createElement('datalist');
    datalist.id = 'datalist-comp-adicional';
    bancoDeDados.filter(item => item.tipo === "Complemento").forEach(item => {
        const option = document.createElement('option');
        option.value = item.nome;
        datalist.appendChild(option);
    });
    novoComplemento.appendChild(datalist);

    const container = document.getElementById('complementos-container');
    container.appendChild(novoComplemento);
});

// Função para gerar receitas
function gerarReceitas() {
    const selecionados = {
        proteina: document.getElementById("proteina").value,
        legume: document.getElementById("legume").value,
        vegetal: document.getElementById("vegetal").value,
        comp1: document.getElementById("comp1").value,
        comp2: document.getElementById("comp2").value,
        comp3: document.getElementById("comp3").value
    };

    const complementosExtras = [];
    const complementosContainer = document.getElementById('complementos-container');
    complementosContainer.querySelectorAll('input').forEach(input => {
        const complementoSelecionado = input.value;
        if (complementoSelecionado) {
            complementosExtras.push(complementoSelecionado);
        }
    });

    complementosExtras.forEach((complemento, index) => {
        selecionados[`compExtra${index + 1}`] = complemento;
    });

    let resultadoHtml = "";
    Object.entries(selecionados).forEach(([chave, valor]) => {
        if (valor) {
            const receita = bancoDeDados.find(item => item.nome.toLowerCase() === valor.toLowerCase());
            if (receita) {
                resultadoHtml += `
                    <div class="card">
                        <h3>${receita.tipo}</h3>
                        <h4>${receita.nome}</h4>
                        <p>${receita.receita}</p>
                    </div>
                `;
            }
        }
    });

    // Exibe as receitas ou mensagem de erro
    document.getElementById("resultado").innerHTML = resultadoHtml || "<p>Nenhuma receita encontrada.</p>";

    // Exibe o botão "Copiar Receita" depois de gerar as receitas
    const btnCopiarReceita = document.getElementById('copiar-receita');
    btnCopiarReceita.style.display = 'block'; // Torna o botão visível
}

// Função para rolar até o final da página
function rolarParaFinal() {
    window.scrollTo({
        top: document.body.scrollHeight, // Rola até o final da página
        behavior: 'smooth' // Rolagem suave
    });
}

// Função para copiar as receitas
function copiarReceita() {
    const cards = document.querySelectorAll('.card');
    let receitasTexto = '';

    cards.forEach(card => {
        const tipo = card.querySelector('h3') ? card.querySelector('h3').innerText : '';
        const nome = card.querySelector('h4') ? card.querySelector('h4').innerText : '';
        const receita = card.querySelector('p') ? card.querySelector('p').innerText : '';
        receitasTexto += `*Tipo*: ${tipo}\n*Nome*: ${nome}\n*Receita*: ${receita}\n\n`;
    });

    const textarea = document.createElement('textarea');
    textarea.value = receitasTexto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Receitas copiadas para a área de transferência!');
}

// Seleciona o botão "Gerar Receita"
const btnGerarReceita = document.getElementById('gerar-receita');

// Adiciona o evento de clique no botão "Gerar Receita"
btnGerarReceita.addEventListener('click', function() {
    gerarReceitas(); // Chama a função para gerar as receitas
    rolarParaFinal(); // Chama a função para rolar até o final da página
});

// Seleciona o botão "Copiar Receita"
const btnCopiarReceita = document.getElementById('copiar-receita');

// Adiciona o evento de clique no botão "Copiar Receita"
btnCopiarReceita.addEventListener('click', function() {
    copiarReceita();
});

// Esperar até que os cards sejam carregados e animações finalizadas
window.onload = function() {
    // Aqui você pode chamar outras funções se necessário
};

// Preencher os datalists ao carregar a página
window.onload = preencherDatalists;

