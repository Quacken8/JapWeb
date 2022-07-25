<head>
</head>

<script>
    import Sidebar from "./sidebar.svelte";
    
    export let smallScreen = false;
</script>

<body>

    <div class="pageContent">

        <Sidebar/>

        <div class="maintext">
            <slot name = "maintext">
            </slot>
        </div>
    </div>

</body>
{#if smallScreen}

<style>
body {
    font-family: 'Trebuchet MS';
    width: 100vw;
    overflow-x: hidden;
    color: black;
    background-color: rgb(250, 218, 169);
    display: flex;
    justify-content: center;
    height: 100vh;
    margin: 0%;
}

.pageContent {
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex-grow: 1;
    margin-top: 0em;
    margin-left: 20vw;
    margin-right: 20vw;
    min-width: 50em;
    background-color: rgb(255, 255, 255);
}

.maintext {
    background-color: none;
    color: black;
    width: 90%;
    left: 100px;
    padding-top: 10em;
    padding-right: 3em;
    padding-left: 3em;
    overflow: scroll;
}
</style>

{:else}
    
<style>
    body {
        font-family: 'Trebuchet MS';
        width: 100vw;
        overflow-x: hidden;
        color: black;
        background-color: rgb(250, 218, 169);
        display: flex;
        justify-content: center;
        height: 100vh;
        margin: 0%;
    }

    .pageContent {
        color: black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        flex-grow: 1;
        margin-top: 0em;
        margin-left: 20vw;
        margin-right: 20vw;
        min-width: 50em;
        background-color: rgb(255, 255, 255);
    }

    .maintext {
        background-color: none;
        color: black;
        width: 90%;
        left: 100px;
        padding-top: 10em;
        padding-right: 3em;
        padding-left: 3em;
        overflow: scroll;
    }
</style>

{/if}