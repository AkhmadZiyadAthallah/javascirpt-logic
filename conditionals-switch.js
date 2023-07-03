// Buatlah program sederhana yang meminta pengguna untuk memasukkan nama bulan 
// dalam bentuk angka (1-12), dan tampilkan nama bulan yang sesuai.


// Meminta pengguna untuk memasukkan angka bulan
var monthNumber = 12
var monthName;

// Mengkonversi angka bulan menjadi nama bulan
// buat switch case dengan kentuan semisal jika variabel monthNumber 
// bernilai sama dengan 1 maka isi monthName sama dengan = JANUARI 

switch (monthNumber) {
  case 1:
    monthName = "Januari";
    break;
  case 2:
    monthName = "Februari";
    break;
  case 3:
    monthName = "Maret";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "Mei";
    break;
  case 6:
    monthName = "juni";
    break;
  case 7:
    monthName = "juli";
  case 8:
    monthName = "Agustus"
    break;
  case 9:
    monthName = "September"
    break;
  case 10:
    monthName = "Oktober"
    break;
  case 11:
    monthName = "November"
    break;
  case 12:
    monthName = "Desember"
    break;
default:
  monthName = "Tidak ada bulan yang >12"
}


console.log("Nama bulan: " + monthName);
