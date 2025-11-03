# Tugas JavaScript ES6+

## 📚 Deskripsi
Aplikasi **Electrical Engineering Score Analyzer** - sebuah sistem analisis nilai mahasiswa yang dibuat menggunakan JavaScript modern (ES6+).

---

## 🎯 Konsep JavaScript yang Dipelajari

### 1. **Deklarasi Variabel**
- `const` - variabel yang tidak dapat diubah
- `let` - variabel yang dapat diubah
- Perbedaan dengan `var` (ES5)

### 2. **Fungsi**
- **Function Declaration**: `function greet(name) { ... }`
- **Arrow Function**: `const sayHello = (name) => { ... }`
- Arrow function dengan implicit return

### 3. **Array & Object**
- Membuat array of objects
- Mengakses properti object
- Loop `for...of`

### 4. **Destructuring**
- Object destructuring: `const { name, score } = student`
- Array destructuring: `const [first, ...rest] = students`
- Destructuring di parameter fungsi

### 5. **Spread Operator (`...`)**
- Menyalin array: `[...students]`
- Menambah elemen baru tanpa mutasi
- Menyalin object dengan properti tambahan

### 6. **Array Methods Modern**
- **`filter()`** - menyaring data berdasarkan kondisi
- **`map()`** - transformasi setiap elemen
- **`reduce()`** - akumulasi nilai
- **`forEach()`** - iterasi tanpa return value
- **`sort()`** - mengurutkan data

### 7. **Template Literals**
- String interpolation: `` `Halo ${name}` ``
- Multi-line strings
- Expression dalam template

### 8. **ESNext Features**
- **Optional Chaining** (`?.`) - akses properti dengan aman
- **Nullish Coalescing** (`??`) - default value untuk null/undefined

---

## 🚀 Cara Menjalankan

1. Clone atau download repository ini
2. Buka file `index.html` di browser
3. Tekan `F12` untuk membuka Developer Console
4. Lihat hasil output program
5. Atau menggunakan Terminal dari VSCode

---

## 📁 Struktur File

```
project/
├── index.html      # File HTML utama
├── main.js         # Script JavaScript ES6+
└── README.md       # Dokumentasi
```

---

## 💡 Fitur Utama

- ✅ Analisis nilai mahasiswa
- ✅ Filter mahasiswa yang lulus (≥80)
- ✅ Hitung rata-rata nilai
- ✅ Ranking mahasiswa
- ✅ Konversi nilai ke huruf (A-E)
- ✅ Informasi dosen pembimbing
- ✅ Laporan statistik lengkap

---

## 📊 Output Program

Program akan menampilkan:
- Daftar semua mahasiswa
- Mahasiswa yang lulus
- Top 3 mahasiswa terbaik
- Rata-rata nilai kelas
- Distribusi nilai huruf
- Informasi dosen pembimbing

---

## 👨‍💻 Author

**[Ivan Admaja Kuncoro]** - Tugas Mata Kuliah Pengembangan Web JavaScript

---

## 📖 Referensi

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)