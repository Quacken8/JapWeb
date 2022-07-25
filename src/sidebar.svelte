<script>
    import SidebarButton from "./sidebarButton.svelte";
</script>

<div class="sidebar">
    <button class="sidebarHeader" on:click="{() => location.href='/~janoska'}">猫</button>

    <SidebarButton buttonText="Lekce" link="https://google.com">
        <SidebarButton buttonText="Písmo" />
        <SidebarButton buttonText="Partikule" />
    </SidebarButton>
    <SidebarButton buttonText="O Japonsku">
        <SidebarButton buttonText="Aktuality" />
        <SidebarButton buttonText="Jazykověda" />
        <SidebarButton buttonText="Literatura" />
        <SidebarButton buttonText="Dějiny" />
        <SidebarButton buttonText="Společnost" />
        <SidebarButton buttonText="Umění" />
        <SidebarButton buttonText="Myšlení" />
        <SidebarButton buttonText="Česko-japonské vztahy" />
    </SidebarButton>

    <SidebarButton buttonText="Slovní druhy">
        <SidebarButton buttonText="Podstatná jména" />
        <SidebarButton buttonText="Přídavná jména">
            <SidebarButton buttonText="Časování" />
        </SidebarButton>
        <SidebarButton buttonText="Zájmena" />
        <SidebarButton buttonText="Číslovky/počítací výrazy" />
        <SidebarButton buttonText="Slovesa">
            <SidebarButton buttonText="Časování" />
            <SidebarButton buttonText="Tranzitivita" />
            <SidebarButton buttonText="Okurigana" />
            <SidebarButton buttonText="Partikule + sloveso - spešl" />
        </SidebarButton>
        <SidebarButton buttonText="Částice/ partikule" />
        <SidebarButton buttonText="Složený partikule" />
        <SidebarButton buttonText="Příslovce" />
        <SidebarButton buttonText="Onomatopoie" />
    </SidebarButton>

    <SidebarButton buttonText="Slovníček" link="/~janoska/slovnicek" />
</div>

<style>
    .sidebar {
        color: white;
        background-color: rgb(182, 13, 29);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 2%;
        padding-right: 2%;
        padding-left: 2%;
        width: 15em;
    }

    .sidebarHeader {
        font-size: 100px;
        display: flex;
        font-weight: 700;
        justify-content: center;
        align-content: center;
        margin-bottom: 0.2em;
    }
</style>
