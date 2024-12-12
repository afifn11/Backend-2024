/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };
  
  /**
   * Fungsi untuk download file yang menggunakan Promise
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
  
  /**
   * Fungsi utama yang menggunakan Async/Await
   */
  const downloadFile = async () => {
    try {
      const result = await download(); // Tunggu hingga download selesai
      showDownload(result); // Menampilkan hasil download
    } catch (error) {
      console.error("Download failed", error); // Tangani error jika ada
    }
  };
  
  // Menjalankan fungsi downloadFile menggunakan Async/Await
  downloadFile();
  