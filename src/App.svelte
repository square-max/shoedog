<script>
  import { Router, Link, Route } from "svelte-routing";

  
  import About from "./routes/About.svelte";
  import Upload from "./routes/Upload.svelte";
  


  import Article from './components/Article.svelte'
  import Profil from './components/Profil.svelte'


  	import { auth, googleProvider } from "./firebase.js"
	import { authState } from "rxfire/auth"
	import {db} from "./firebase.js" 

  export let url = "";
 

let user;
const subscribe = authState(auth).subscribe(u => user = u)



let count = 0;
	
function handleClick() {
		count += 1;
	}

	const login = () => {
		auth.signInWithPopup(googleProvider)
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
 
   
  </div>
</Router>
</header>

<section>
{#if user}

<Profil />
{:else}
<button class="login" on:click={login}>Logg inn</button>
{/if}
</section>

<Article />



  <style>


nav {
  background-color: orange;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  height: 45px;
  color: black;
  
}

li{
	display: inline;
	float:right;
	background-color: none;
	
}




nav img {
	width: 5rem;
margin: 0;
}



</style>

