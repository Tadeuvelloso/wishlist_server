# wishlist_Api

## Uma api para você organizar os filmes, series e jogos que gostaria de ver e poder dar e ver os feedbacks dos mesmos se já vistos pelo usuários.

>get("/movies")
##### A rota que lista todos os filmes, series ou jogos.

>get("/movies/:gênero")
##### A rota lista todos os entreterimentos de acordo com o gênero desejado por exemplo: terror, ação ou aventura.

>post("/movies")
##### A rota para inserir novos entretenimentos na sua lista, o usuário deve mandar o seguinte objeto.
```
{
  genre: terror
	name: chuck,
	platform: netflix,
	description: "",
	watched: false,
	entity: filme
}
```


>put("/movies")
##### A rota que da atualização, onde o usuário manda o objeto com a descrição e o valor de wached: true para marcar como já assistido ou jogado.

```
{
  genre: terror
	name: chuck,
	platform: netflix,
	description: "Não recomento para quem tem problemas de coração",
	watched: true,
	entity: filme
}
```

>delete("/movies/:id")
##### Rota pra deletar algum item da lista com a id do item enviado via params
