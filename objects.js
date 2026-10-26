console.log("Hello world")

let retturNafn = "Stöppuð ýsa með tómatsósu";
let retturVerd = 1990;

console.log(`Réttur dagsins er ${retturNafn} - Verð: ${retturVerd} kr.`)
console.log("Réttur dagsins er" + retturNafn + "- verð:" + retturVerd + "kr.")

let lykill = "nafn";

const rettur = {
    nafn:"Stöppuð ýsa með tómatsósu",
    verd: 1990,
    flokkur: "Aðalrettur",
    vegan: false
};


rettur.isGood = true;
rettur.nafn = "Jón"
delete rettur.nafn;


const rettur2 = {
    nafn:"Nautasteik",
    verd: 5990,
    flokkur: "Aðalrettur",
    multiply: function multiply(a,b){
        return a * b;
    },
    vegan: false,
    ofnaemi: ["selleri"],
    naeringagildi: { kcal: 520, protein: 32}
};


for ([lykill, gildi] of Object.entries(rettur2)){
    console.log(`${lykill},${gildi}`);
}




const matsedill = [
    {
    nafn:"Stöppuð ýsa með tómatsósu",
    verd: 1990,
    flokkur: "Aðalrettur",
    vegan: false
},{
    nafn:"Nautasteik",
    verd: 5990,
    flokkur: "Aðalrettur",
    myMapp: (list, func) => {
        let temp = [];
        for(item of list){
            temp.push(func(item))
        }
        return temp;
    },
    vegan: false,
    ofnaemi: ["selleri"],
    naeringagildi: { kcal: 520, protein: 32}
}
]

const myList = ["jon","omar","kristofer"]
const myList2 = [30,20,10]

console.log(matsedill[1].myMapp(myList,(item) => {
    return item + "jaja"
}))

console.log(typeof(matsedill))
console.log(typeof(matsedill))

function yell(name){
    return name + "!";
}

console.log(myList2.map((number) => yell(number)))