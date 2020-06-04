

<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Upload from "./routes/Upload.svelte";

  import Article from "./components/Article.svelte"

  //	import { auth, googleProvider } from "./firebase.js" //
	import { authState } from "rxfire/auth"
	
 

  export let url = "";

  	let user;
	let beskrivelse;
	let merke;
	let overskrift
	let count = 0;
	

	const subscribe = authState(auth).subscribe(u => user = u)

	const login = () => {
		auth.signInWithPopup(googleProvider)
	}

	const logout = () => {
		auth.signOut()
	}

	
	
 




</script>



<header>



<Router url="{url}">
  <nav>
    <img src="./images/shoedoglogo.png" alt="logo">
	<li>
    <Link  to="/">Home</Link>
    <Link  to="upload">Upload</Link>
	<Link  to="about">About</Link>
	</li>
  </nav>
  <div>
    
    <Route path="upload" component="{Upload}" />
    <Route path="about" component="{About}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>
</header>

	<section id="profil">
	<img src={user.photoURL} alt="pb">
	<button class="logout" on:click={logout}>Logg ut {user.displayName}</button>
	</section>

	<img id="forsidebilde" alt='klær' src="images/shoedoglogo.png"> 
	
	

	


<article>


<div class="container">
<header id="litenProfil" > <img src="/images/footprint2.png" alt="logo">  <img src={user.photoURL} alt="pb"> {user.displayName}  </header>
 <h1>overskriften!!!</h1>
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
 <h1>overskrift</h1>
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
section{
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	align-items: center;
	gap: 1rem;
}








nav {
  background-color: orange;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  height: 45px;
  color: black;
  
}

li{
	display: inline;
	float:right;
	background-color: red;
	
}

nav.link{
	background-color: blue;
}


nav img {
	width: 5rem;
margin: 0;
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

	button.login{
		background-color: black;
		color: white;
		margin: auto;

	}

	section.innlogging{
		display: grid;
		grid-auto-flow: row;
		background-color: orange;
		width: 25%;
		height: 500px;
		margin:auto; 
		padding: 0.5rem;
		color: white;
	}

	section.innlogging img{
		width: 100%;
		max-width: 80px;
	}

	



</style>

