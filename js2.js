// Program Mencari Mahasiswa

let nama = ["Alice", "Bob", "Charlie", "David"];
let ditemukan = false;
let jawaban = "ya";

// While statement
while (jawaban === 'ya') {  

    let namaCari = prompt("Cari Nama Siswa:");
    console.log("You entered: " + namaCari);

    // Function
    function cari(){
        // For looping statement
        for (let i = 0; i < nama.length; i++) {
            // If statement
            if (nama[i] === namaCari) {
                ditemukan = true;
                break; // Keluar dari loop jika ditemukan
            }
        }
        
        // If statement
        if (ditemukan) {
            console.log(namaCari + " ditemukan dalam data.");
        } else {
            console.log(namaCari + " tidak ditemukan dalam data.");
        }
        
        jawaban = prompt("Apakah Anda ingin melanjutkan? ( ya / tidak)");
        // Switch case statement
        switch(jawaban){
            case "ya":
                jawaban = "ya";
                break;
            case "tidak":
                jawaban = "tidak";
                break;
            default:
                console.log("Bukan jawaban")
                break;
        }
    }        
    cari()    
}
console.log("Program Berhenti.");