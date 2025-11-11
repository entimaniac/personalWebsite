<script lang="ts">
	import Links from './Links.svelte';
</script>

<section id="aboutSectionId" class="hero is-dark is-fullheight">
	<div class="hero-body">
		<div class="container has-text-grey">
			<div class="columns">
				<div class="column is-half">
					<h1 class="title is-1">Hi, I'm Jesse.</h1>
					<h2 class="subtitle is-4 is-uppercase">Software Engineer</h2>
				</div>
			</div>
			<hr />
			<div class="is-pulled-right">
				<Links />
			</div>
		</div>
	</div>
</section>

<style>
	#aboutSectionId {
		background-image: url('/assets/asoggetti-1400386-unsplash.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		position: relative;
		/* Zoom in the background slightly */
		transform: scale(1.2);
		transform-origin: center center;
	}

	/* Fade overlay at the bottom */
	#aboutSectionId::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 150px;
		background: linear-gradient(to bottom, transparent, #2e333d);
		pointer-events: none;
	}

	/* Ensure content is above the overlay */
	#aboutSectionId .hero-body {
		position: relative;
		z-index: 1;
	}
</style>

