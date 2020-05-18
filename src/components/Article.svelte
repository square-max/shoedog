<script>
import {db} from "../firebase.js"

let user;
let count = 0;

function handleClick() {
		count += 1;
	}

</script>


<article>


<div class="container">
<header id="litenProfil" >  <!-- <img src={user.photoURL} alt="pb"> {user.displayName}  --><img src="/images/footprint2.png" alt="logo"> </header>
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


<style>

article{
		margin-top: 30rem;
		display: grid;
		grid-template-columns: auto auto;
		justify-content: center;

		gap: 0.5rem;
		width: 800px;
		margin: 1rem auto;
	}

	.container{
		max-width:  1000px;
		text-align: center;
		padding: 1rem;
		margin-top: 5rem;
		
	}

	img{
		
		width: 100%;
		max-width: 600px;
    }
    
    #litenProfil img{
	width: 25px;

	border-radius: 50%;
	padding: 0.5rem;
	margin: auto;

}
#litenProfil{
	background-color: orange;
	display: grid;
	grid-auto-flow: row;
	margin: auto;
	border-radius: 20px;
	
	
	
}
</style>