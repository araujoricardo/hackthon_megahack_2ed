# Sejam bem vindos ao projeto Move

## Evento
2ª Edição do MegaHack</br>
Desafio: Pequenas Empresas & Grandes Negócios e Revista Época.</br>
Data: Abr/2020</br>

## Desafio
A atual pandemia do coronavírus, nos provou o quanto precisamos estar habituados a mudanças, certamente teremos um novo normal depois que tudo isso passar. E dentro desse contexto, o mundo de eventos, certamente passará por grande transformação. Com o isolamento social o formato de atividades online teve um aumento absurdo, e se popularizou entre as empresas de modo inimaginável.
Para as marcas PEGN e Época Negócios que tem como forma de levar conteúdo o modelo presencial, também foram englobadas nesse novo normal, mas o grande desafio é justamente esse: com um grande número de atividades online, como levar experiência, qualidade e diferencial aos usuários de maneira geral?
Como proporcionar a experiência mais visceral e rica, que um evento presencial proporciona a marca e/ou usuário dentro do ambiente online?
Vamos repensar esse novo formato de consumirmos conteúdo?

## Descrição da solução
Nossa solução tem como principal objetivo trazer uma maior facilidade na comunicação entre investidores e empreendedores. 
Os **investidores** nos dias de hoje, tem certa dificuldade de encontrar uma empresa que tenha um projeto bem estruturado, ou que seja interessante. E quando encontra, tem que ler muito conteúdo para saber se é realmente nesta empresa, e neste projeto que deseja investir. 
Já o **empreendedor** não tem tanta divulgação para os investidores saberem a respeito do seu projeto.
Com isto pensamos na Move, uma plataforma simples onde o empreendedor cadastra a sua ideia e com poucos clicks já ganha visibilidade para o seu projeto.
E para o investidor, do conforto de sua casa ou de onde estiver, ele pode acompanhar eventos ao vivo, onde poderá, fazer perguntas sobre o projeto, ver o perfil, a equipe, contatos e todas as demais informações de quem está apresentando. E caso perca a live , tudo bem, pois o conteúdo ficará gravado para assistir quando quiser.  
Alem disso a plataforma conta com um ranking com as ideias mais votadas. Garantindo assim que o investidor não perca o que está bombando no momento.
Sobre os eventos ao vivo, eles são feitos uma vez por mês, onde as 5 empresas mais votadas pelo ranking mensal apresentarão suas ideias, dentro de um limite de tempo. Os investidores poderão perguntar pelo chat, ou dar um feedback a respeito do projeto apresentado.

## Público alvo
Empresas, empreendedores e investidores

## Features Implementadas

**FRONT-END**
 - Layout HomePage
 - Layout da FeedPage
 - Layout do Login
 - Layout do Cadastro
 - Layout da LivestreamPage
 - Layout do profile da empresa
 - Layout do chat da Livestream
 - Layout da agenda

**BACK-END** 
 - FeedPage integrada com o back-end
 - Sistema de Login

## Futuras Features

 - Salvar mensagens do chat diretamente com back-end
 - Sistema de voz na própria plataforma com os eventos ao vivo. O palestrante ou o staff de apoio conseguirá desmutar os viewers para perguntas.
 - Sistema de cadastro específico para empresas
 - Tela para adicionar postagens no feed
 - Integrar agenda com API do Google Schedule
 - Utilizar APIs como Google, Facebook e LinkedIn para cadastro
 - Livestream direto da plataforma, sem precisar usar plataformas de terceiros.
 - Sistema diferenciado para jornalistas integrarem seus perfis diretamente com seus blogs.

## Tecnologias utilizadas
**DESIGN**

 - InvisioApp

**Organização de Features e Versionamento**

 - Github
 - Trello

**FRONT-END**

 - React/Redux
 - Material-UI

**BACK-END**

Para o deploy da nossa aplicação escolhemos a infraestrutura da AWS, devido a sua agilidade nos serviços, baixo custo de operação, por possuir serviços flexiveis e ser altamente segura. tudo isso favorecendo a escalabilidade e a qualidade do nosso produto.

**Serviços Utilizados:**

EC2 - Utilizamos para armazenar o banco de dados relacional.
Lambda - Utilizada para executar o backend da aplicação.
API Gateway - Utilizada para gerenciar e redirecionar as requisições para a lambda.
S3 - Utilizada para hospedar o frontend da nossa aplicação.

## Links e informações úteis
```
Usuário para teste:

Login: fernanda@hartmann.com
Senha: fernanda
```
[Apresentação](https://drive.google.com/file/d/1S6D87BA-l5k4de0NVxO6rok4O8SlzncF/view?usp=sharing)</br>
[Pitch](https://youtu.be/Fx6QeuSnYYU)</br>
[Site Hospedado](http://pegn.s3-website-us-east-1.amazonaws.com)</br>
[Trello](https://trello.com/b/Ldo0iXyx/pegn)</br>
[InvisioApp](https://diogogaspar462897.invisionapp.com/board/Mockup------Layout-ck9og55lh01wy17vj240vste5?v=Byt5WyH2piftRaSXbfQA5A%3D%3D&linkshare=urlcopied)

## Desenvolvido por:
* [Diogo Gaspar](https://github.com/gaspar-d)</br>
* [Icaro de Souza](https://github.com/icarohadouken)</br>
* [Igor Alves](https://github.com/igoralvesantos)</br>
* [Lorenzo No](https://github.com/future4code/Lorenzo-No)</br>
* [Ricardo Araujo](https://github.com/araujoricardo)</br>
