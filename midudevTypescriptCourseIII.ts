//===========================  Template Union Types  ===========================================

type HeroId = `${string}-${string}-${string}-${string}-${string}` // Create an ID that follows this style.

// let myHero: heroId = '234234' Gives an error because doesn't match the  type

let myHeroId: HeroId = crypto.randomUUID()

// Example with hexadecimals

const color = '0033ff'
const color2 = '#0033ff'

type HexadecimalColor = `#${string}`

// const color3: hexadecimalColor ='0033ff' reports an error because doesn't match the type
const color3: HexadecimalColor = '#0033ff'


// ==================================  Union types =======================================

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'unniversal' | 'multuversal'

let thorPower: HeroPowerScale = 'local'


// ==================================  Extend a type =================================


type HeroBasicInfo = {
    name: string,
    age: number,
}

type HeroProperties = {
    readonly id?: HeroId,
    isActive?: boolean,
    powerScale?: HeroPowerScale
}


type Hero4 = HeroBasicInfo & HeroProperties

// =================== Type indexing ============================

type HeroPropertiesInfo = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroPropertiesInfo['address'] = {
    planet: 'Earth',
    city: 'Madrid'
}



//================= Type from value ============================


type Address = typeof addressHero

const addreeTwitch: Address = {
    planet: 'Mars',
    city: "Twitch"
}

// =================== Type from return ============================

function createAdress() {
    return {
        planet: 'Earth',
        city: 'Barcelona'
    }
}

type Address2 = ReturnType<typeof createAdress>