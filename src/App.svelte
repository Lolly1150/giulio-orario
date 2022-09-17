<script lang="ts">

</script>

<main>
    {#if localStorage.getItem('theme') == null || localStorage.getItem('theme') == undefined}
       {localStorage.setItem('theme', 'default')}
    {:else}
        {#if localStorage.getItem('theme') == 'dark'} {
            document.body.classList.add('dark')
        }

    {/if}
    {/if}
    
</main>
<style></style>