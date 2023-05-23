<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let position: GeolocationPosition;
    let error: string | undefined;

	onMount(() => {
	  navigator.geolocation.watchPosition(
	    (p) => (position = p),
	    (e) => error = e.message, {
	    enableHighAccuracy: true,
	    timeout: 5000,
	    maximumAge: 0
	  });
	});
</script>

<main class="p-5 text-zinc-9 inline-block">
	<h1>Select your volume.</h1>
	<div class="text-zinc-7 font-500 text-sm">
		Walk until your coordinates absolute value add up to your desired volume.
	</div>
	{#if position}
		<div class="text-lg my-4 text-zinc-8">
			<div class="flex items-center gap-1">
                <span class="i-heroicons:arrow-right-20-solid"></span>
				<span class="font-semibold">Current Latitude: </span>
				<span class="text-zinc-9">
					{position.coords.latitude}
				</span>
			</div>
			<div class="flex items-center gap-1">
                <span class="i-heroicons:arrow-right-20-solid"></span>
				<span class="font-semibold">Current Longitude: </span>
				<span class="text-zinc-9">
					{position.coords.longitude}
				</span>
			</div>
		</div>
        <h1>Current volume:</h1>
        <div class="flex gap-2 w-full items-center">
            <div class="rounded-full w-full h-2 bg-zinc-4 my-2 relative">
                <div
                    class="rounded-full h-2 bg-zinc-8 my-2 absolute -top-2 left-0"
                    style="width: {Math.abs(position.coords.longitude + position.coords.latitude)}%">
                    <div class="h-4 w-4 rounded-full bg-zinc-8 absolute right-0 -translate-y-1/2 top-1/2"/>
                </div>
            </div>
            <div>{Math.abs(Math.floor((position.coords.longitude + position.coords.latitude) * 100)/100)}%</div>
        </div>
    {:else if error}
        <div
            class="w-full flex items-center mt-5 gap-2 overflow-hidden text-red-7 font-semibold">
            <div class="i-heroicons:x-circle-20-solid text-5xl"></div>
            <div>Error when fetching your location: {error}</div>
        </div>
    {:else}
        <div
            class="w-full flex justify-center items-center mt-5 gap-2 flex-col">
            <div class="i-svg-spinners:3-dots-rotate text-5xl text-zinc-8"></div>
            <div>Getting your location</div>
        </div>
	{/if}
</main>
