const test="HAI SEMUA";
let usia=3;
console.log(`woi...${test} umur saya ${usia}`);

function bmi(){
    let choice = document.querySelector('input[name="gender"]:checked');
    let usia = document.getElementById("umur").value;

    if(usia>=5){
        return document.getElementById("testing").innerText="Itu Bukan balita.";
    }

    let berat = document.getElementById("berat").value;
    let tinggi = document.getElementById("tinggi").value;

    if(choice.value=="Laki-Laki"){
        let ideal = (2*usia)+8;
        let needs = (100*ideal)+(100*usia);
        document.getElementById("testing").innerText=`Berat Badan Ideal untuk Balita Laki-Laki Berusia ${usia} Tahun dengan tinggi ${tinggi} Cm adalah ${ideal} kg`;
        document.getElementById("normal").innerText=`Kalori ideal untuk anak anda adalah sebesar ${needs} Kalori/Hari`;
    }else if(choice.value=="Perempuan"){
        let ideal = (2*usia)+7;
        let needs = (95*ideal)+(90*usia);
        document.getElementById("testing").innerText=`Berat Badan Ideal untuk Balita Perempuan Berusia ${usia} Tahun dengan tinggi ${tinggi} Cm adalah ${ideal} kg`;
        document.getElementById("normal").innerText=`Kalori ideal untuk anak anda adalah sebesar ${needs} Kalori/Hari`;
    }

    let persen=((berat-ideal)/ideal)*100;
    

}

const foods = [
    { name: "Pancake Pisang Keju", calories: 450, protein: 12, carbs: 60, fat: 15 },
    { name: "Nasi Tim Ayam & Wortel", calories: 500, protein: 18, carbs: 65, fat: 10 },
    { name: "Puding Susu Alpukat", calories: 200, protein: 6, carbs: 20, fat: 10 },
    { name: "Omelet Sayur", calories: 250, protein: 10, carbs: 15, fat: 18 },
    { name: "Sup Ayam Jagung", calories: 300, protein: 20, carbs: 30, fat: 8 },
    { name: "Salad Buah Yoghurt", calories: 150, protein: 5, carbs: 25, fat: 2 },
    { name: "Soto Ayam Bening", calories: 400, protein: 22, carbs: 45, fat: 12 },
    { name: "Tahu Bacem", calories: 350, protein: 15, carbs: 30, fat: 10 },
    { name: "Smoothie Alpukat", calories: 180, protein: 4, carbs: 20, fat: 8 },
    { name: "Ayam Panggang Madu", calories: 600, protein: 35, carbs: 50, fat: 20 }
];

function result(){
    let target = document.getElementById("calorie").value;
    let mealcount = document.getElementById("perday").value;
    let listmakanan = [];
    let count=0;
    while(count<1000){
        let gacha = foods.sort(()=>0.5-Math.random()).slice(0,mealcount);
        let total = gacha.reduce((sum,food)=>sum+food.calories,0);
        if(Math.abs(total-target)<=100){
            listmakanan=gacha;
            break;
        }
        count++;
    }
    if(listmakanan.length>0){
        document.getElementById("hasil").innerText = listmakanan.map(food=> `✅ ${food.name} (${food.calories} kkal)`).join("\n");
    }else{
        document.getElementById("hasil").innerText = "Tidak ditemukan kombinasi yang cocok.";
    }


}
