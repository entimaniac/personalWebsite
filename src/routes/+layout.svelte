<script lang="ts">
	import 'bulma/css/bulma.css';
	import 'bulma-timeline/dist/css/bulma-timeline.min.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import './styles.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Jesse Strode</title>
	<link rel="icon" type="image/x-icon" href="/assets/favicon.png" />
</svelte:head>

{@render children()}
