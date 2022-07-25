export interface DictionaryEntry {
    kanji: string;
    kana: string;
    preklad: string;
}

export async function fetchDictionary(url: string): Promise<DictionaryEntry[]> {
    const tsv = await (await fetch(url)).text();
    const things = tsv.split('\r').map(x => x.split('\t'));
    console.log(things)
    return things.map(([kanji, kana, preklad]) => ({ kanji, kana, preklad }));
}
