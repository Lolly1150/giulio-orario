<script lang="ts">
    import Loader from './components/Loader.svelte';
    import Table from './components/Tables.svelte';
    import { onMount } from 'svelte';
    let loaded = false;
    onMount(() => {
        setTimeout(() => {
            loaded = true;
        } , 1500)
    })
</script>
<main>
    {#if loaded == false}
        <Loader />
    {:else}
        <Table/>
    {/if}
</main>
<style></style>