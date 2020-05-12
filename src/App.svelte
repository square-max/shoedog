<script>

	import { auth, googleProvider } from "./firebase.js"
	import { authState } from "rxfire/auth"
	import {db} from "./firebase.js"

	

	let user;
	let beskrivelse;
	let merke;
	let overskrift
	let url;
	let count = 0;
	

	const unsubscribe = authState(auth).subscribe(u => user = u)

	const login = () => {
		auth.signInWithPopup(googleProvider)
	}

	const logout = () => {
		auth.signOut()
	}

	const motebilder = db.collection("motebilder") //datalag er navnet på base i firebase(bytt til motebilder)

	const addMote = () => {
		motebilder
		.set({
			
		})
	}

		beskrivelse:"";
		merke:"";
	
 


	function handleClick() {
		count += 1;
	}
	

</script>

<header>

{#if user}
	<section id="profil">
	<img src={user.photoURL} alt="pb">
	<button class="logout" on:click={logout}>Logg ut {user.displayName}</button>
	</section>

	<img id="forsidebilde" alt='klær' src="images/shoedoglogo.png"> 
	
	


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
<article>


<div class="container">
<header id="litenProfil" >  <img src={user.photoURL} alt="pb"> {user.displayName} <img src="/images/footprint2.png" alt="logo"> </header>
 <div>overskrift</div>
 <hr/>
 <img id="artikler" src="images/nikeShoes.jpg" alt="bilde">
 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi reiciendis voluptates voluptatum accusamus dolorum veniam, iste soluta eius vero amet velit, illum libero magnam, consequuntur odio ab quibusdam a.</div>
 <hr/>
 
</div>





</article>
<article>


<div class="container">
<header id="litenProfil" >  <img src={user.photoURL} alt="pb"> {user.displayName} </header>
 <div>overskrift</div>
 <hr/>
 <img id="artikler" src="images/nikeShoes.jpg" alt="bilde">
 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi reiciendis voluptates voluptatum accusamus dolorum veniam, iste soluta eius vero amet velit, illum libero magnam, consequuntur odio ab quibusdam a.</div>
 <hr/>
 
</div>





</article>
<article>


<div class="container">
<header id="litenProfil" >  <img src={user.photoURL} alt="pb"> {user.displayName} </header>
 <div>overskrift</div>
 <hr/>
 <img id="artikler" src="images/nikeShoes.jpg" alt="bilde">
 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi reiciendis voluptates voluptatum accusamus dolorum veniam, iste soluta eius vero amet velit, illum libero magnam, consequuntur odio ab quibusdam a.</div>
 <hr/>
 
</div>





</article>
<article>


<div class="container">
<header id="litenProfil" >  <img src={user.photoURL} alt="pb"> {user.displayName} </header>
 <div>overskrift</div>
 <hr/>
 <img id="artikler" src="images/nikeShoes.jpg" alt="bilde">
 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi reiciendis voluptates voluptatum accusamus dolorum veniam, iste soluta eius vero amet velit, illum libero magnam, consequuntur odio ab quibusdam a.</div>
 <hr/>
 
</div>





</article>
<article>


<div class="container">
<header id="litenProfil" >  <img src={user.photoURL} alt="pb"> {user.displayName} </header>
 <div>overskrift</div>
 <hr/>
 <img id="artikler" src="images/nikeShoes.jpg" alt="bilde">
 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi reiciendis voluptates voluptatum accusamus dolorum veniam, iste soluta eius vero amet velit, illum libero magnam, consequuntur odio ab quibusdam a.</div>
 <hr/>
 
</div>





</article>
<article>


<div class="container">
<header id="litenProfil" >  <img src={user.photoURL} alt="pb"> {user.displayName} </header>
 <div>overskrift</div>
 <hr/>
 <img id="artikler" src="images/nikeShoes.jpg" alt="bilde">
 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi reiciendis voluptates voluptatum accusamus dolorum veniam, iste soluta eius vero amet velit, illum libero magnam, consequuntur odio ab quibusdam a.</div>
 <hr/>
 
</div>





</article>



{:else}
	<button class="login" on:click={login}>Logg inn</button>

{/if}

</header>

<style>
section{
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	align-items: center;
	gap: 1rem;
}

#profil img {
	width: 100px;

	border-radius: 50%;
}
#litenProfil img{
	width: 25px;

	border-radius: 50%;
	padding: 0.5rem;

}
#litenProfil{
	background-color: orange;
	
	
}





	#forsidebilde{
		position: relative;
		width: 100%;
		max-width: 500px;
		margin-left:20%;
		margin-top: 0px;
		padding: 1rem;
	}



	#artikler {
		width: 100%;
		max-width: 400px;
		width: 50%;
		margin: 0 0 1em 0;
	}





	article{
		margin-top: 30rem;
		display: grid;
		grid-template-columns: auto auto;
		justify-content: center;

		gap: 0.5rem;
		width: 600px;
		margin: 3rem auto;
	}

	.container{
		max-width:  255px;
		text-align: center;
		padding: 2rem;
		margin-top: 5rem;
	}

	img{
		
		width: 100%;
		max-width: 600px;
	}



</style>