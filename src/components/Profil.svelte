<script>

  import { auth, googleProvider } from "../firebase.js"
import { authState } from "rxfire/auth"
	
 

let user;
/* let displayName = user.displayName; */
let photoURL = user.photoURL;
    

const subscribe = authState(auth).subscribe(u => user = u)


	const logout = () => {
		auth.signOut()
	}
</script>



<section id="profil">



	<img src={user.photoURL} alt="pb"> 
	<button class="logout" on:click={logout}>Logg ut <!-- {user.displayName} --></button>
	</section>


    <style>
    
    #profil {
	padding: 1rem;
	margin-top: 1rem;
	float:right;
	background-color: red transparent(1,5)
}

#profil img {
	width: 100px;

	border-radius: 50%;
	
}
    </style>
