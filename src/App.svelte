<script>
  import { Router, Link, Route } from "svelte-routing";



  
  import About from "./routes/About.svelte";
  import Upload from "./routes/Upload.svelte";
  

  import Profil from './components/Profil.svelte'
  import Feed from './components/Feed.svelte'


  import { auth, googleProvider } from "./firebase.js"
	import { authState } from "rxfire/auth"
  import {db} from "./firebase.js" 
  import {onMount} from "svelte"

  export let url = "";

  let articles = []
  onMount(()=>{
    const motearkiv = db.collection("motebilder")
    motearkiv.onSnapshot(snap => {
      articles=snap.docs
      console.log(articles)
    })
  })

let user
const subscribe = authState(auth).subscribe(u => user = u)




let count = 0;
	
function handleClick() {
		count += 1;
	}

	const login = () => {
		auth.signInWithPopup(googleProvider)
  }
  
  
  const logout = () => {
		auth.signOut()
	}


/* 	up top button */

let y;

$: x = console.log(y)
 
</script>

<svelte:window bind:scrollY={y}/>

<header>



<Router url="{url}">
  <nav>
    <img src="./images/shoedoglogo.png" alt="logo">
	<li id="liste">
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
	<button class="login" on:click={login}>Login or sign up</button>
{/if}
</section>

<Feed/>

{#each articles as article}
<article >
<div class="container">
<h2>{article.data().overskrift}</h2>

{#if article.data().url==null}
<img src="./images/shoedoglogo.png" alt="no photo" /> 
{:else}
<img id="box" src={article.data().url} alt="bilde">
 {/if}
<p>{article.data().beskrivelse}</p>
<div id="brand">Brand: {article.data().merke}</div>
<p>Posted by {user.displayName} date:{article.data().opprettet} </p>
</div>
</article>
{:else}
<div id="loading">Loading</div>
{/each}

{#if y > 3500}
<!--Back to top button-->
    <div  id="back-to-top" class="yellow-shadow" title="Go to top">
	<a href="#liste">back to top</a>
    
	 
    </div>
  {/if}


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

#loading{
	display: grid;
	margin: auto;
}

.login{
	display: grid;
	grid-auto-columns: auto;
	margin: auto;
	margin-top: 2rem;
	
}

section{
	margin-bottom: 100px;
}

#brand{
	background-color: orange;

	border-radius: 20px;

}

#back-to-top{
background-color: orange;
position: fixed;
left: 5rem;
bottom: 10rem;
z-index: 100;
border-radius: 20px;
width: 10rem;
text-align: center;


}

#back-to-top a{
text-decoration: none;
color: white;
}

#back-to-top:hover{
	transform: scale(1.5);
}



</style>

