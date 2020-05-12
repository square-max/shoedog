<script>
import {onMount} from "svelte"

let db
let storage
let overskrift = ""
let beskrivelse = ""
let merke = ""
let progresjon = ""
let url = ""
let files = []
$: file = files[0]

onMount( async () => {
        db = firebase.firestore();
        storage = firebase.storage();
    }
)

const lastOpp = async () => {
    progresjon ="...laster opp din artikkel"

    const sti = storage
        .ref()
        .child("motebilder/" + file.name)

    const opplasting = await sti.put(file)
    const urlen = await opplasting.ref.getDownloadURL();
    url =urlen;

    progresjon = "Din artikkel er lastet opp"
    lagreArtikkel();
}

const lagreArtikkel = () => {
    const motearkiv = db.collection("motebilder")
    motearkiv.add({url, overskrift, beskrivelse, merke})
}

</script>


<svelte:head>
	<title>Mote</title>
</svelte:head>
<main>

<div>
<h1>Add your shoes to the community</h1>
<hr/>
<p>Sumbit your shoes by filling in the form below</p>
</div>
<section>
<form on:submit|preventDefault={lastOpp}>
<input bind:value={overskrift} placeholder="Headline" required>
<input bind:value={beskrivelse} placeholder="Description" required>
<input bind:value={merke} placeholder="Brand" required>
<input type="file" bind:files placeholder="Image" required>
<!--<input list="merker"> 
<!-- <datalist id="merker">
  <option value="Nike">
  <option value="Addidas">
  <option value="Puma">
  <option value="Yeezys">
  <option value="Converse">
  <option value="Supra">
</datalist> -->
{#if file}
		<div>selected file{file.name}</div>
		<button class="knapp">Upload</button> 
		{:else}
		<div class="select">Choose a file you want to upload</div>
		{/if}

</form>
</section>
</main>

<style>
form{
    display: flex;
    background-color: orange;
    align-items: center;
    margin: 0;
    height: 7rem;
    max-width:30rem;
    border: solid 2px black;
}

input{
  
    margin: 0.1rem; 
    width: 4rem; 

    border-radius: 5px;   
}

.select{
    max-width: 7rem;
    padding: 2rem;
}

.knapp{
    max-width: 3rem;
}

h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: black;
	}
</style>

