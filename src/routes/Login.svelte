<script>

    import { auth, googleProvider } from "../firebase.js"
    import { authState } from "rxfire/auth"
    

const subscribe = authState(auth).subscribe(u => user = u)

	const login = () => {
		auth.signInWithPopup(googleProvider)
	}

	const logout = () => {
		auth.signOut()
	}


</script>


	<section class="innlogging">
	<h1>Hi and welcome to Shoedog the Shoe community</h1>
	<img src="/images/footprint2.png" alt="logo">
	<h2>Please sign in to continue</h2>
	<hr/>
	
	<button class="login" on:click={login}>Logg inn</button>

	</section>

    <section id="profil">
	<img src={user.photoURL} alt="pb">
	<button class="logout" on:click={logout}>Logg ut {user.displayName}</button>
	</section>


    <style>
    
    
    </style>

