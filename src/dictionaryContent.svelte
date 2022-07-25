<script>
    import Slovicko from "./slovicko.svelte";
    import { fetchDictionary } from './csvReader';

    const p = fetchDictionary('slovicka.tsv');
</script>

{#await p}
    Načítá se...
{:then slovicka}
    {#each slovicka as data}
        <Slovicko {...data} />
    {/each}
{/await}
