# Portfolio Rhyan Pablo de Bastos

Site estatico pronto para publicar no GitHub Pages.

## Estrutura

```text
portfolio-rhyan/
  index.html
  styles.css
  script.js
  assets/
    curriculo-rhyan-pablo-de-bastos.pdf
    favicon.svg
    hero-data-map.png
```

## Onde atualizar links

No arquivo `script.js`, preencha:

```js
const profileLinks = {
  github: "https://github.com/rhyan-rpone",
  linkedin: "https://www.linkedin.com/in/rhyan-pablo-40360320a/",
};
```

Para cada projeto, preencha `repoUrl` quando houver link publico:

```js
repoUrl: "https://github.com/seu-usuario/seu-projeto",
```

Atualmente, a seção de projetos está preenchida com notebooks públicos do repositório:

```text
https://github.com/rhyan-rpone/ai-and-data_analysis-notebooks
```

Categorias usadas:

- GenAI
- Data Science
- ML
- Data Analysis

## Deploy no GitHub Pages

1. Crie um repositorio no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositorio.
3. No GitHub, entre em `Settings` > `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch principal e a pasta `/root`.
6. Salve e aguarde a URL publicada.

## Observacoes

- A pagina nao precisa de build.
- O formulario usa FormSubmit com o e-mail `rhyanpaablo@gmail.com`.
- O primeiro envio pelo FormSubmit pode exigir confirmacao no e-mail.
- O curriculo ja esta em `assets/curriculo-rhyan-pablo-de-bastos.pdf`.
