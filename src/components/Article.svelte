<script>
let user;
let count = 0;

function handleClick() {
		count += 1;
	}

</script>


<article>


<div class="container">
<header id="litenProfil" >  <img src={user.photoURL} alt="pb"> {user.displayName} <img src="/images/footprint2.png" alt="logo"> </header>
 <div>overskrift</div>
 <hr/>
 <img id="artikler" src="images/nikeShoes.jpg" alt="bilde">
 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi reiciendis voluptates voluptatum accusamus dolorum veniam, iste soluta eius vero amet velit, illum libero magnam, consequuntur odio ab quibusdam a.</div>
 <hr/>
  <button on:click={handleClick}>
	Likes {count} {count === 1 ? '' : ''}
</button>
 
</div>





</article>