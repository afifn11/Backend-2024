/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };
  
  /**
   * Fungsi untuk download file menggunakan Promise
   * @returns {Promise} - Promise yang mengembalikan nama file
   */
  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result); // Mengembalikan hasil setelah 3 detik
      }, 3000);
    });
  };
  
  // Menggunakan Promise
  download()
    .then((result) => showDownload(result)) // Menampilkan hasil download setelah selesai
    .catch((error) => console.error("Download failed", error)); // Tangani error jika ada
  