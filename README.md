# Front-End
Este repositório contém o código-fonte para uma aplicação React construída com Vite.

## Como Desenvolver
Para o deploy em desenvolvimento no domínio de dev do projeto. É necessário seguir alguns passos...
1. Primeiro de tudo crie sua branch `git checkout -b nome_branch`
2. Após as mudanças no código faça o seu commit do jeito que achar melhor. (recomendo interface do vscode)
3. No repositório do GitHub, clique em Novo Pull Request na [página com a listagem dos PR's](https://github.com/UP-TSI/app-frontend/pulls)
4. Aonde estará escrito `base:main`, mude para `base:develop` e abra o PR
5. Agora, resolva os conflitos (caso tenha) e faça o merge com a branch develop
6. E pronto o CI/CD já vai rodar e em alguns minutos o seu código estará no domínio em DEV.

## Utilização

1. Clonar o projeto `git clone https://github.com/UP-TSI/app-frontend`
2. Navegue até o diretório e instale as dependências `npm install`
3. Inicie o servidor `npm run dev`
