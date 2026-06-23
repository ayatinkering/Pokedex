export const pokemonTypeColors = {
    normal: {
        color: "#ffffffff",
        background: "#8e8e63ff"
    },
    fire: {
        color: "#FFFFFF",
        background: "#f87d1fff"
    },
    water: {
        color: "#FFFFFF",
        background: "#2e7692ff"
    },
    electric: {
        color: "#000000",
        background: "#fccc0cff"
    },
    grass: {
        color: "#FFFFFF",
        background: "#569e14ff"
    },
    ice: {
        color: "#000000",
        background: "#b2f9f5ff"
    },
    fighting: {
        color: "#FFFFFF",
        background: "#881b17ff"
    },
    poison: {
        color: "#FFFFFF",
        background: "#b544b3ff"
    },
    ground: {
        color: "#FFFFFF",
        background: "#896407ff"
    },
    flying: {
        color: "#000000",
        background: "#a98ff3ff"
    },
    psychic: {
        color: "#FFFFFF",
        background: "#dc4e79ff"
    },
    bug: {
        color: "#000000",
        background: "#7b843bff"
    },
    rock: {
        color: "#FFFFFF",
        background: "#B6A136"
    },
    ghost: {
        color: "#FFFFFF",
        background: "#735797"
    },
    dragon: {
        color: "#FFFFFF",
        background: "#5014e7ff"
    },
    dark: {
        color: "#FFFFFF",
        background: "#693f2eff"
    },
    steel: {
        color: "#000000",
        background: "#8f8f90ff"
    },
    fairy: {
        color: "#000000",
        background: "#f3bad6ff"
    }
}


export function getPokedexNumber(index) {
    return index + 1
}

export function getFullPokedexNumber(index) {
    return `${index + 1 > 99 ? index + 1 : index + 1 > 9 ? `0${index + 1}` : `00${index + 1}`}`
}