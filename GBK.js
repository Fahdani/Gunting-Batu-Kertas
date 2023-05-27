function PilihanKomputer() {
let nomor =  Number(Math.floor(Math.random() * 3));
switch (nomor) {
case 0: return 'gunting';
break;
case 1: return 'batu';
break;
case 2: return 'kertas'; } }

function playRound(PilihanKamu, Pilihan) { 
if ((PilihanKamu == 'batu') && (Pilihan == 'gunting')) {SkorKamu++; return `Anda Menang! ${PilihanKamu} beats ${Pilihan}`;}
else if ((PilihanKamu == 'gunting') && (Pilihan == 'kertas')) {SkorKamu++; return `Anda Menang! ${PilihanKamu} beats ${Pilihan}`;}
else if ((PilihanKamu == 'kertas') && (Pilihan == 'batu')) {SkorKamu++; return `Anda Menang! ${PilihanKamu} beats ${Pilihan}`;}
else if ((PilihanKamu == 'gunting') && (Pilihan == 'batu')) {CompSkor++; return `Anda Kalah! ${Pilihan} beats ${PilihanKamu}`;}
else if ((PilihanKamu =='kertas') && (Pilihan == 'gunting')) {CompSkor++; return `Anda Kalah! ${Pilihan} beats ${PilihanKamu}`;} 
else if ((PilihanKamu =='batu') && (Pilihan == 'kertas')) {CompSkor++; return `Anda Kalah! ${Pilihan} beats ${PilihanKamu}`;}
else if (Pilihan == PilihanKamu) {return 'Eh,, Seri :)'; }
else {return 'Input anda salah';} }

let SkorKamu = parseInt(0);
let CompSkor = parseInt(0);

for (let step = 0; step < 2; step++) { 
let PilihanKamu = prompt("Mari Bermain Gunting Batu Kertas. Ketik Pilihanmu: ").toLowerCase();
let Pilihan = PilihanKomputer();
console.log(playRound(PilihanKamu, Pilihan)) 
console.log("Skor Anda = " + SkorKamu);
console.log("Skor Admin = " + CompSkor);
}

// showing overall winner


