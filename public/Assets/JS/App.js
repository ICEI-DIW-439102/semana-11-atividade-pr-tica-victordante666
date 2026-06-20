const dados = {
  jogos: [
    {
      id: 1,
      nome: "The Legend of Zelda: Breath of the Wild",
      descricao: "Aventura em mundo aberto no reino de Hyrule.",
      conteudo: "Um dos maiores jogos de mundo aberto já criados. Explore montanhas, florestas e dungeons enquanto tenta salvar Hyrule de Calamity Ganon.",
      genero: "Aventura / RPG",
      desenvolvedora: "Nintendo",
      ano: 2017,
      destaque: true,
      imagem_principal: "assets/img/jogos/zelda.jpg",
      personagens: [
        { id: 1, nome: "Link", descricao: "Herói principal, guerreiro escolhido para salvar Hyrule.", imagem: "assets/img/personagens/link.jpg" },
        { id: 2, nome: "Zelda", descricao: "Princesa de Hyrule com poderes sagrados.", imagem: "assets/img/personagens/zelda_p.jpg" },
        { id: 3, nome: "Ganon", descricao: "A Calamidade que destruiu Hyrule há 100 anos.", imagem: "assets/img/personagens/ganon.jpg" }
      ]
    },
    {
      id: 2,
      nome: "God of War",
      descricao: "Kratos e seu filho Atreus viajam pelos Nove Reinos.",
      conteudo: "Uma jornada épica pela mitologia nórdica. Kratos, o Fantasma de Esparta, enfrenta deuses e monstros ao lado de seu filho Atreus.",
      genero: "Ação / Aventura",
      desenvolvedora: "Santa Monica Studio",
      ano: 2018,
      destaque: true,
      imagem_principal: "assets/img/jogos/gowofwar.jpg",
      personagens: [
        { id: 1, nome: "Kratos", descricao: "Guerreiro espartano, ex-deus da guerra grego.", imagem: "assets/img/personagens/kratos.jpg" },
        { id: 2, nome: "Atreus", descricao: "Filho de Kratos, meio deus com poderes de arqueiro.", imagem: "assets/img/personagens/atreus.jpg" },
        { id: 3, nome: "Baldur", descricao: "Filho de Odin, o principal antagonista do jogo.", imagem: "assets/img/personagens/baldur.jpg" }
      ]
    },
    {
      id: 3,
      nome: "Red Dead Redemption 2",
      descricao: "Faroeste épico sobre honra, lealdade e sobrevivência.",
      conteudo: "Acompanhe Arthur Morgan e a gangue Van der Linde no fim da era do velho oeste americano. Uma história profunda sobre redenção e escolhas morais.",
      genero: "Ação / Mundo Aberto",
      desenvolvedora: "Rockstar Games",
      ano: 2018,
      destaque: true,
      imagem_principal: "assets/img/jogos/rdr2.jpg",
      personagens: [
        { id: 1, nome: "Arthur Morgan", descricao: "Protagonista, membro leal da gangue Van der Linde.", imagem: "assets/img/personagens/arthur.jpg" },
        { id: 2, nome: "Dutch van der Linde", descricao: "Líder carismático e filosófico da gangue.", imagem: "assets/img/personagens/dutch.jpg" },
        { id: 3, nome: "John Marston", descricao: "Membro da gangue e protagonista do primeiro jogo.", imagem: "assets/img/personagens/jonh.jpg" }
      ]
    },
    {
      id: 4,
      nome: "Hollow Knight",
      descricao: "Metroidvania sombrio no reino subterrâneo de Hallownest.",
      conteudo: "Explore um vasto reino de insetos e cavernas. Um jogo de plataforma e ação com atmosfera única, chefes desafiadores e narrativa misteriosa.",
      genero: "Metroidvania",
      desenvolvedora: "Team Cherry",
      ano: 2017,
      destaque: false,
      imagem_principal: "assets/img/jogos/hollow.jpg",
      personagens: [
        { id: 1, nome: "The Knight", descricao: "Pequeno cavaleiro silencioso que explora Hallownest.", imagem: "assets/img/personagens/knight.jpg" },
        { id: 2, nome: "Hornet", descricao: "Guardiã de Hallownest, personagem misterioso.", imagem: "assets/img/personagens/hornet.jpg" },
        { id: 3, nome: "Grimm", descricao: "Líder do Grimm Troupe, chefe do DLC.", imagem: "assets/img/personagens/grimm.jpg" }
      ]
    },
    {
      id: 5,
      nome: "Cyberpunk 2077",
      descricao: "RPG futurista no mundo distópico de Night City.",
      conteudo: "Assuma o papel de V, um mercenário em busca de imortalidade em uma cidade controlada por megacorporações. Escolhas morais e customização profunda.",
      genero: "RPG / Ação",
      desenvolvedora: "CD Projekt Red",
      ano: 2020,
      destaque: false,
      imagem_principal: "assets/img/jogos/cyberpunk.jpg",
      personagens: [
        { id: 1, nome: "V", descricao: "Protagonista customizável, mercenário de Night City.", imagem: "assets/img/personagens/v.jpg" },
        { id: 2, nome: "Johnny Silverhand", descricao: "Rockstar rebelde vivido por Keanu Reeves.", imagem: "assets/img/personagens/johnny.jpg" },
        { id: 3, nome: "Jackie Welles", descricao: "Melhor amigo de V e parceiro de missões.", imagem: "assets/img/personagens/jackie.jpg" }
      ]
    }
  ]
};


function renderCarrossel() {
  const inner = document.getElementById("carousel-inner");
  if (!inner) return;

  const destaques = dados.jogos.filter(j => j.destaque);

  destaques.forEach((jogo, index) => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    if (index === 0) item.classList.add("active");

    item.innerHTML = `
      <img src="${jogo.imagem_principal}" class="d-block w-100 carousel-img" alt="${jogo.nome}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${jogo.nome}</h5>
        <p>${jogo.descricao}</p>
      </div>
    `;

    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      window.location.href = `detalhes.html?id=${jogo.id}`;
    });

    inner.appendChild(item);
  });
}

function renderCards() {
  const lista = document.getElementById("lista-jogos");
  if (!lista) return;

  dados.jogos.forEach(jogo => {
    const col = document.createElement("div");
    col.classList.add("col-sm-6", "col-md-4", "col-lg-4", "mb-4");

    col.innerHTML = `
      <div class="card h-100 card-jogo" onclick="window.location.href='detalhes.html?id=${jogo.id}'">
        <img src="${jogo.imagem_principal}" class="card-img-top card-img-jogo" alt="${jogo.nome}">
        <div class="card-body">
          <h5 class="card-title">${jogo.nome}</h5>
          <p class="card-text text-muted small">${jogo.genero} • ${jogo.ano}</p>
          <p class="card-text">${jogo.descricao}</p>
        </div>
        <div class="card-footer text-muted small">
          ${jogo.desenvolvedora}
        </div>
      </div>
    `;

    lista.appendChild(col);
  });
}

// ========================
// FUNÇÕES DA DETALHES.HTML
// ========================

function renderDetalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const jogo = dados.jogos.find(j => j.id === id);

  if (!jogo) return;

  // Seção 1 — Informações gerais
  const infoGeral = document.getElementById("info-geral");
  if (infoGeral) {
    infoGeral.innerHTML = `
      <div class="row">
        <div class="col-md-5 mb-3">
          <img src="${jogo.imagem_principal}" class="img-fluid rounded shadow" alt="${jogo.nome}">
        </div>
        <div class="col-md-7">
          <h2>${jogo.nome}</h2>
          <hr>
          <p><strong>Gênero:</strong> ${jogo.genero}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.desenvolvedora}</p>
          <p><strong>Ano de lançamento:</strong> ${jogo.ano}</p>
          <p><strong>Descrição:</strong> ${jogo.descricao}</p>
          <p><strong>Sobre o jogo:</strong> ${jogo.conteudo}</p>
          <a href="index.html" class="btn btn-secondary mt-2">← Voltar</a>
        </div>
      </div>
    `;
  }

  // Seção 2 — Personagens
  const listaPersonagens = document.getElementById("lista-personagens");
  if (listaPersonagens) {
    jogo.personagens.forEach(personagem => {
      const col = document.createElement("div");
      col.classList.add("col-sm-6", "col-md-4", "mb-4");

      col.innerHTML = `
        <div class="card h-100">
          <img src="${personagem.imagem}" class="card-img-top card-img-personagem" alt="${personagem.nome}">
          <div class="card-body">
            <h6 class="card-title">${personagem.nome}</h6>
            <p class="card-text small">${personagem.descricao}</p>
          </div>
        </div>
      `;

      listaPersonagens.appendChild(col);
    });
  }
}

// =====================
// INICIALIZAÇÃO
// =====================
renderCarrossel();
renderCards();
renderDetalhe();