let matsedill = [
  { id: 1, nafn: "Rúgbrauð með síld", verd: 1890, flokkur: "Forréttur", vegan: false },
  { id: 2, nafn: "Grænmetissúpa",     verd: 1690, flokkur: "Forréttur", vegan: true },
  { id: 3, nafn: "Plokkfiskur",       verd: 2890, flokkur: "Aðalréttur", vegan: false },
  { id: 4, nafn: "Lambakjötsúpa",     verd: 2490, flokkur: "Aðalréttur", vegan: false },
  { id: 5, nafn: "Linsubaunakarrí",   verd: 2690, flokkur: "Aðalréttur", vegan: true },
  { id: 6, nafn: "Skyrkaka",          verd: 1490, flokkur: "Eftirréttur", vegan: false },
  { id: 7, nafn: "Sorbet",            verd: 1290, flokkur: "Eftirréttur", vegan: true },
];

console.log(matsedill.length);
console.log(matsedill[0]);
console.log(matsedill[0].nafn);
console.log(matsedill[matsedill.length - 1].nafn);

for(const rettur of matsedill){
    console.log(`${rettur.nafn} - ${rettur.verd} kr.`)
}

console.table(matsedill)

const nofn = matsedill.map((r)=> r.nafn);

console.log(nofn);

const veganRettir = matsedill.filter((r) => r.vegan);
console.log(veganRettir)
const sum = matsedill.filter((r) => r.vegan).reduce((sum,acc) => sum + acc.verd, 0);
console.log(sum);

const adalrettir = matsedill.filter((r) => r.flokkur === "Aðalréttur");
console.log(adalrettir);

const plokkari = matsedill.find((r) => r.nafn === "Plokkfiskur");
console.log(plokkari)

const sveppasalat = matsedill.find((r) => r.nafn === "sveppasalat");
console.log(sveppasalat);

const pontun = [matsedill[0],matsedill[2],matsedill[5]];
const samtals = pontun.reduce((sum,rettur)=> sum + rettur.verd, 0);
console.log(pontun);
console.log(samtals);



const eftirVerdi = [...matsedill].sort((a,b)=> a.verd - b.verd);
console.log(eftirVerdi);
console.log(matsedill);

const erVegan = matsedill.some((r) => r.vegan);
const erAlltVegan = matsedill.every((r) => r.verd < 3000);
console.log(erVegan);
console.log(erAlltVegan);

const veganNofn = matsedill.filter((r)=> r.vegan).sort((a,b) => a.verd - b.verd).map((r) => r.nafn);
console.log(veganNofn);


