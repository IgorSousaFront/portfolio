# Componentização de elementos
Exemplo de componentização.

### Como usar

*Para criar o componente: 
```sh
<div class="post-item">
	<a href="#">
		<figure>
			<img src="@@img" alt="">
		</figure>
	</a>
	<div class="post-item__content">
		<h2 class="title">@@title</h2>
		<p class="legend">@@text</p>
		<a href="#" class="btn-primary" data-active="@@active">Veja Mais</a>
	</div>
</div>
```

* Para usar o componente

```sh
@@include('components/post-item.php', {
	"img" : "img/item-content-04.png",
	"title" : "O que é a abnominoplastia?",
	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime.",
	"active": "false"
})
```
