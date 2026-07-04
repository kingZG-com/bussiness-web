# SantriCode.Labs 🚀

> Dari Ide ke Produk Digital — Kami yang Eksekusi.

![SantriCode.Labs](https://img.shields.io/badge/Status-Active-brightgreen.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES6-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

**SantriCode.Labs** adalah website _Company Profile_ resmi untuk layanan jasa pembuatan website, aplikasi, dan penyelesaian tugas/projek IT secara profesional, transparan, dan terpercaya. Didesain dengan estetika modern, _dark mode_ bawaan, dan animasi _reveal_ yang halus untuk pengalaman pengguna yang maksimal.

---

## ✨ Fitur Utama

- 🌗 **Dark & Light Mode**: Sistem tema yang dikelola menggunakan Vanilla Javascript dan terintegrasi dengan preferensi lokal (_localStorage_).
- ⚡ **Animasi Scroll Dinamis**: Menggunakan `ScrollReveal.js` untuk memunculkan elemen secara elegan saat _scrolling_.
- 💻 **Terminal Interaktif**: Simulasi animasi _typing_ gaya terminal pada bagian Hero Section.
- 🧩 **Arsitektur Komponen Modular**: Meskipun menggunakan Vanilla HTML, _Navbar_ dan _Footer_ dipisahkan menjadi komponen modular dan dimuat secara asinkron (menggunakan `fetch() API`).
- 🎨 **Desain Khusus (Bespoke Design)**: Dibangun dengan palet warna utama `Soft Cyan (#38D9C0)` dan palet gelap kustom, jauh dari desain generik pada umumnya.

---

## 🛠️ Tech Stack

- **HTML5 & CSS3**
- **Tailwind CSS v4.0** (Konfigurasi via `@theme` di `src/input.css`)
- **Vanilla Javascript** (Tidak ada _framework_ berat)
- **ScrollReveal.js** (Untuk animasi elemen)
- **FontAwesome 6** (Ikonografi lokal)
- **PNPM** (Package Manager)

---

## 📂 Struktur Direktori

```text
📦 bussiness-web
 ┣ 📂 components/       # Komponen global (Modular HTML)
 ┃ ┣ 📜 footer.html     # Footer global
 ┃ ┗ 📜 navbar.html     # Navbar global
 ┣ 📂 legal/            # Halaman statis tambahan
 ┃ ┣ 📜 privacy.html    # Kebijakan Privasi
 ┃ ┗ 📜 terms.html      # Syarat & Ketentuan
 ┣ 📂 src/              # Source file CSS & JS
 ┃ ┣ 📜 input.css       # Tailwind directives & CSS Kustom
 ┃ ┣ 📜 main.js         # Logika Utama (Theme, Loader, Animasi)
 ┃ ┗ 📜 output.css      # Hasil build Tailwind
 ┣ 📜 index.html        # Halaman Utama (Landing Page)
 ┣ 📜 package.json      # Dependensi Node.js
 ┗ 📜 README.md         # Dokumentasi Repositori
```

---

## 🚀 Cara Menjalankan Secara Lokal

Karena proyek ini menggunakan fitur `fetch()` API untuk memuat komponen _Navbar_ dan _Footer_, Anda **tidak bisa** sekadar membuka `index.html` dengan _double-click_ (URL `file:///`). Anda **harus** menjalankannya melalui _Local Server_ untuk menghindari masalah CORS.

### Prasyarat

- **Node.js** & **pnpm** terinstal.
- Editor kode seperti **VS Code** dengan ekstensi **Live Server** (Sangat disarankan).

### Langkah Instalasi:

1. **Kloning Repositori**

   ```bash
   git clone https://github.com/kingZG-com/bussiness-web.git
   cd bussiness-web
   ```

2. **Instal Dependensi**
   Dependensi ini berguna untuk animasi dan ikon lokal.

   ```bash
   pnpm install
   ```

3. **Kompilasi Ulang Tailwind CSS (Jika ada perubahan desain)**
   Jika Anda memodifikasi kelas HTML atau variabel di `input.css`, _build_ ulang _output_-nya:

   ```bash
   pnpm tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```

4. **Jalankan Proyek**
   Buka file `index.html` di VS Code, klik kanan, lalu pilih **"Open with Live Server"**. Proyek akan terbuka otomatis di `http://127.0.0.1:5500/`.

---

## 🤝 Kontribusi & Dukungan

Proyek ini merupakan repositori internal **SantriCode.Labs**. Apabila Anda memiliki pertanyaan, tertarik berkolaborasi, atau membutuhkan jasa kami untuk mengeksekusi ide Anda menjadi produk digital, jangan ragu untuk menghubungi:

💬 **WhatsApp**: [+62 838-2631-4405](https://wa.me/6283826314405)

---

_We Build. You Graduate._
&copy; 2026 SantriCode.Labs
