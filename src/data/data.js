import bulbasaur from "../imgPokemones/bulbasaur.png";
import charmander from "../imgPokemones/charmander.png";
import squirtle from "../imgPokemones/squirtle.png";
import butterfree from "../imgPokemones/butterfree.png";
import pikachu from "../imgPokemones/pikachu.png";
import gastly from "../imgPokemones/gastly.png";
import ditto from "../imgPokemones/ditto.png";
import mew from "../imgPokemones/mew.png";
import aron from "../imgPokemones/aron.png";


let pokemones = [
    {
        id: "001",
        nombre: "Bulbasaur", 
        img: bulbasaur,
        tipo1: "Grass",
        tipo2:  "Poison",
        color1: "#74CB48", 
        color2: "#A43E9E",
        peso: "6,9 kg",
        altura: "0,7 m",
        movimientos: "Chlorophyll Overgrow",
        descripcion: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        baseStates: {
            hp: "045",
            atk: "049",
            def: "049",
            satk: "065",
            sdef: "065",
            spd: "045",
        },

    },

    {
        id: "004",
        nombre: "Charmander", 
        img: charmander, 
        tipo1: "Fire",
        color1: "#F57D31", 
        peso: "8,5 kg",
        altura: "0,6 m",
        movimientos: "Mega-Punch Fire-Punch",
        descripcion: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        baseStates: {
            hp: "039",
            atk: "052",
            def: "043",
            satk: "060",
            sdef: "050",
            spd: "065",
        },

    },

    {
        id: "007",
        nombre: "Squirtle", 
        img: squirtle,
        tipo1: "Water",
        color1: "#6493EB",
        peso: "9,0 kg",
        altura: "0,5 m",
        movimientos: "Torrent Rain-Dish",
        descripcion: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        baseStates: {
            hp: "044",
            atk: "048",
            def: "065",
            satk: "050",
            sdef: "064",
            spd: "043",
        },

    },

    {
        id: "012",
        nombre: "Butterfree", 
        img: butterfree,
        tipo1: "Bug",
        tipo2: " Flying",
        color1: "#A7B723", 
        color2: "#A891EC",
        peso: "32 kg",
        altura: "1,1 m",
        movimientos: "Compound-Eyes Tinted-Lens",
        descripcion: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        baseStates: {
            hp: "060",
            atk: "045",
            def: "050",
            satk: "090",
            sdef: "080",
            spd: "070",
        },

    },

    {
        id: "025",
        nombre: "Pikachu", 
        img: pikachu,
        tipo1: "Electric",
        color1: "#F9CF30", 
        peso: "6,0 kg",
        altura: "0,4 m",
        movimientos: "Mega-Punch Pay-Day",
        descripcion: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        baseStates: {
            hp: "035",
            atk: "055",
            def: "040",
            satk: "050",
            sdef: "050",
            spd: "090",
        },

    },

    {
        id: "082",
        nombre: "Gastly",
        img: gastly,
        tipo1: "ghost",
        color1: "#70559B", 
        peso: "0.1 kg",
        altura: "1.3 m",
        movimientos: "levitate",
        descripcion: "Born from gases, anyone would faint if engulfed by its gaseous body, wich contains poison.",
        baseStats: {
            hp: "030",
            atk: "035",
            def: "030",
            satk: "100",
            sdef: "035",
            spd: "080",
        },
    },

    {
        id: "132",
        nombre: "Ditto",
        img: ditto,
        tipo1: "normal",
        color1: "#AAA67F", 
        peso: "4 kg",
        altura: "0.3 m",
        movimientos: "Limber Imposter",
        descripcion: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
        baseStats: {
            hp: "048",
            atk: "048",
            def: "048",
            satk: "048",
            sdef: "048",
            spd: "048",
        },
    },

    {
        id: "152",
        nombre: "Mew", 
        img: mew,
        tipo1: "Psychic",
        color1: "#FB5584", 
        peso: "4,0 kg",
        altura: "0,4 m",
        movimientos: "Synchronize",
        descripcion: "When viewed through a microscope, this Pokémon´s short, fine, delicate hair can be seen.",
        baseStates: {
            hp: "100",
            atk: "100",
            def: "100",
            satk: "100",
            sdef: "100",
            spd: "100",
        },

    },

    {
        id: "304",
        nombre: "Aron",
        img: aron,
        tipo1: "steel",
        tipo2: " rock",
        color1: "#B7B9D0", 
        color2: "#B69E31",
        peso: "60,0 kg",
        altura: "0.4 m",
        movimientos: "Sturdy Rock-Head",
        descripcion: "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
        baseStats: {
            hp: "050",
            atk: "070",
            def: "100",
            satk: "040",
            sdef: "040",
            spd: "030",
        },
    },
];

export default pokemones;