export type SurahInfo = {
    index: number,
    name: string,
}

export type Surah = {
    index: number,
    name: string,
    ayas: Ayah[]
}

export type Ayah = {
    index: number,
    text: string
}

export const getSurahNames = () :Promise<SurahInfo[]> =>  {
    return Promise.resolve(require("../../resources/surah-names.json"))
    // return new Promise(resolve => setTimeout(() => resolve(require("../../resources/surah-names.json")), 200))
}
export const getSurah = (index: number) :Promise<Surah> => { 
    return Promise.resolve(require(`../../resources/surahs/${index}.json`))
    // return new Promise(resolve => setTimeout(() => resolve(require(`../../resources/surahs/${index}.json`)), 200))
}
