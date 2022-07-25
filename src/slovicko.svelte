<script lang="ts">
    let expanded = false;
    import { pronounce } from "./prounanciator.js";
    import { onMount } from "svelte";

    export let kana = "chybí kana";
    export let kanji = "";
    export let preklad = "chybí překlad";

    let root: HTMLElement;
    $: romanji = pronounce(kana);

    let isTarget = false;
    function checkTarget() {
        isTarget = location.hash.slice(1) === root.id;
    }
    onMount(checkTarget);

    $: if (isTarget) {
        expanded = true;
        root.scrollIntoView({behavior: "smooth", block: "start"});
    }
</script>

<svelte:window on:hashchange={checkTarget} />

<button
    id={romanji}    
    class="wholeLine"
    aria-expanded={expanded}
    bind:this={root}
    on:click={() => (expanded = !expanded)}
>
    <div
        class="kanji"
        style:display={kanji.length > 0 ? "" : "none"}
        class:bigkanji={expanded === true}
    >
        {kanji}
    </div>

    <div
        class="kana"
        class:bigkana={expanded === true}
        hidden={expanded === !true && kanji.length === 0}
    >
        {kana}
    </div>

    <div style="text-align:justify">
        <div class="vyslovnost" hidden={expanded === !true}>
            [{romanji}]
        </div>

        <div class="preklad">
            {preklad}
        </div>
    </div>
</button>

<style>
    .wholeLine {
        display: grid;
        grid-template-columns: 6em 7em auto;
        column-gap: 30px;
    }

    .kanji {
        font-size: 20px;
        text-align: justify;
        text-justify: inter-character;
    }
    .bigkanji {
        writing-mode: tb-rl;
        font-size: 80px;
    }

    .kana {
        font-size: 20px;
        text-align: justify;
        text-justify: inter-character;
    }
    .bigkana {
        width: fit-content;
        display: flex;
        align-content: center;
        writing-mode: tb-rl;
        text-align: left;
        text-justify: inter-character;
        font-size: 40px;
    }

    .preklad {
        width: 100%;
        padding-right: 10px;
    }

    .vyslovnost {
        padding-right: 10px;
        font-style: italic;
    }

    button {
        display: flex;
        flex-grow: 1;
        background-color: inherit;
        flex-direction: row;
        border-right: none;
        border-left: none;
        border-top: none;
        border-radius: 4px;
        padding: 10px;
        margin: 4px;
        font-size: 20px;
        font-weight: 400;
        width: 100%;
        user-select: text;
    }

    button[aria-expanded="true"] {
        background-color: lightgray;
    }
    button:hover {
        background-color: lightgray;
    }
</style>
