

function lihatHasil(){

    let jumlahA = 0;
    let jumlahB = 0;
    let jumlahC = 0;

    const jawaban = document.querySelectorAll('input[type="radio"]:checked');

    jawaban.forEach(item => {
        if(item.value === "A") jumlahA++;
        if(item.value === "B") jumlahB++;
        if(item.value === "C") jumlahC++;
    });

    let hasil = "";

    if(jumlahA > jumlahB && jumlahA > jumlahC){
        hasil = "Hasil Anda: A";
    }
    else if(jumlahB > jumlahA && jumlahB > jumlahC){
        hasil = "Hasil Anda: B";
    }
    else if(jumlahC > jumlahA && jumlahC > jumlahB){
        hasil = "Hasil Anda: C";
    }
    else{
        hasil = "Hasil tidak dapat ditentukan karena jumlah pilihan sama.";
    }

    document.getElementById("hasil").innerHTML = hasil;
}

function ulangTes(){
    document.getElementById("quizForm").reset();
    document.getElementById("hasil").innerHTML = "";
}

