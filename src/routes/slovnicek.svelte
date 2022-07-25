<head>
    <link rel="stylesheet" href="style.css">
</head>

<script>
    import PageTemplate from '../pageTemplate.svelte';
    import DictionaryContent from '../dictionaryContent.svelte'
</script>

<PageTemplate>
    <div slot = "maintext">
        
        <h1>Slovníček</h1>
        
        <div>To do list</div>
        <ul style="text-align:left">
            <li>vyhledávání</li>
            <li>lepší kopírovatelnost</li>
            <li>adaptivní velikost fontu: kanji fixně velké, kana tak aby byl přepis stejně vysoký jako, kanji</li>
            <li>generic design overhaul, velikosti textů, jejich rozložení etc etc</li>
            <li>cross odkazy jednotlivých znaků kanji (bude vůbec potřeba?)</li>
            <li>generátor of dictionary entries aby sem mohli přidávat věci i neprogramátoři — done ✓</li>
            <li>automatická výslovnost z kany — done ✓</li>
        </ul>
        
            
        <DictionaryContent/>

    </div>

</PageTemplate>
<style>
    h1 {
        font-size: 60px;
        font-weight: 700;
    }

</style>