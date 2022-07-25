<script>
    export let expanded = false;
    export let buttonText = "button text";
    export let link = "http://google.com";
    let hasChildern = Object.keys($$slots).length>0
</script>

<span class = "theWholeThing">
    <span class="item">
        <div class="expandIcon" on:click="{() => expanded = !expanded}" style:background-color="{expanded ? 'darkred' : ''}" style:visibility= "{!hasChildern ? 'hidden' : ''}">
            {#if expanded}
                —
            {:else}
                ＋
            {/if}
        </div>

        <a class="buttonItself" href = {link}>
            {buttonText}
        </a>
    </span>

    <span class = "childern" style:display = "{expanded ? '' : 'none'}">
        <slot/>
    </span>

</span>

<style>
    .theWholeThing {
        user-select: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .item {
        display: grid; 
        grid-template-columns: 34px 1fr;
    }
    .expandIcon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 1em;
        aspect-ratio: 1;
        font-weight: 700;
        font-size: 20px;
        line-height: 1;
        border: 2px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        padding: 6px;
    }
    .buttonItself {
        color: inherit;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        padding: 6px;
    }

    .expandIcon:hover{
        background-color:lightcoral;
    }
    .buttonItself:hover {
        background-color: lightcoral;
    }

    .childern {
        margin-left: 0.7em;
    }
</style>