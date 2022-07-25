<head>
    <link rel="stylesheet" href="style.css">
</head>

<script>
    import PageTemplate from "../pageTemplate.svelte";

    import Lipsum from "../lipsum.svelte";
</script>


<PageTemplate>
    <span slot="maintext">
        <h1>nadpis Hlavní strana</h1>
        <br>
        toto je příklad hlavní strany vyplněný random textem
        <br>
        toto je příklad odkazu znaku na význam ve slovníčku: <a href="/~janoska/slovnicek#renyoukei">連用形</a>
        <br>
        .
        <br>
        <Lipsum/>
    </span>
</PageTemplate>

<style>
    h1 {
        font-size: 40px;
        font-weight: 700;
    }
</style>