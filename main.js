// Deklarasi Variabel dan Tipe Data
const appName = "Electrical Engineering Score Analyzer";
let version = 1.0;
const author = "Ivan Admaja Kuncoro";
console.log(`Aplikasi: ${appName} v${version} oleh ${author}`);

version = 1.1; // Ini tidak error karena menggunakan let
console.log(`Version sekarang: ${version}`);

// Membuat Fungsi dan Arrow Function
function greet(name) {
    return `Halo, ${name}!`;
}

const sayHello = (name) => `Selamat datang, ${name}!`;
console.log("\n=== FUNGSI DAN ARROW FUNCTION ===");
console.log(greet("Rina"));
console.log(sayHello("Doni"));

// Membuat Array dan Object
const students = [
    { name: "Rina", score: 88 },
    { name: "Doni", score: 72 },
    { name: "Ayu", score: 95 },
    { name: "Bima", score: 67 },
    { name: "Lala", score: 82 },
];

console.log("\n=== DAFTAR MAHASISWA ===");
for (const s of students) {
    console.log(s.name);
}

// Destructuring & Spread Operator
const { name, score } = students[0];
console.log(`\nMahasiswa pertama: ${name} (${score})`);

const newStudents = [...students, { name: "Eka", score: 90 }];
console.log("\nSetelah menambah mahasiswa baru:");
console.log(newStudents);
console.log(`\nJumlah mahasiswa awal: ${students.length}`);
console.log(`Jumlah mahasiswa baru: ${newStudents.length}`);

// Array Methods: map, filter, dan reduce
// Filter - mahasiswa yang lulus (nilai >= 80)
const passed = students.filter(s => s.score >= 80);
console.log("\n=== MAHASISWA LULUS ===");
console.log(passed);

// Map - ubah nama menjadi huruf besar
const names = students.map(s => s.name.toUpperCase());
console.log("\n=== NAMA MAHASISWA (UPPERCASE) ===");
console.log(names);

// Reduce - hitung rata-rata nilai
const avg = students.reduce((acc, s) => acc + s.score, 0) / students.length;
console.log(`\nRata-rata nilai: ${avg.toFixed(2)}`);

// Fungsi Utility
const getAverage = arr => arr.reduce((sum, s) => sum + s.score, 0) / arr.length;
const getPassed = arr => arr.filter(s => s.score >= 80);
const getTopStudent = arr => arr.reduce((best, s) => s.score > best.score ? s : best);

// Cetak hasil
console.log("\n=== ANALISIS NILAI ===");
console.log("Nilai rata-rata:", getAverage(students).toFixed(2));
console.log("Lulus:", getPassed(students).map(s => s.name).join(", "));
console.log("Mahasiswa terbaik:", getTopStudent(students).name);

// Template Literal dan Output Rapi
const avgScore = getAverage(students).toFixed(2);
const topStudentLangkah8 = getTopStudent(students);
console.log(`\nRingkasan Nilai Mahasiswa
📊 Rata-rata         : ${avgScore}
🏆 Mahasiswa Terbaik : ${topStudentLangkah8.name} ${topStudentLangkah8.score}
✅ Jumlah Lulus      : ${getPassed(students).length}/${students.length}
`);

// Menambahkan Fungsi Peringkat
const rankStudents = (arr) => {
    // Menggunakan spread operator agar tidak mengubah array asli
    return [...arr].sort((a, b) => b.score - a.score);
};

const rankedStudents = rankStudents(students);

console.log("\n🏅 === PERINGKAT MAHASISWA ===");
console.log("\nTop 3 Mahasiswa:");
for (let i = 0; i < 3 && i < rankedStudents.length; i++) {
    console.log(`${i + 1}. ${rankedStudents[i].name} - ${rankedStudents[i].score}`);
}

// Verifikasi array asli tidak berubah
console.log("\n✅ Verifikasi - Array asli tetap:");
console.log("Mahasiswa pertama di array asli :", students[0].name);
console.log("Mahasiswa pertama di ranking    :", rankedStudents[0].name);

// Menambahkan Nilai Huruf
const toLetter = (score) => {
    if (score >= 85) return "A";
    if (score >= 80) return "AB";
    if (score >= 70) return "B";
    if (score >= 60) return "C+";
    if (score >= 50) return "C";
    if (score >= 40) return "D";
    return "E";
};

// Menambahkan properti grade baru ke setiap mahasiswa
const studentsWithGrade = students.map(student => ({
    ...student,
    grade: toLetter(student.score)
}));

console.log("\n📝 === MAHASISWA DENGAN NILAI HURUF ===");
studentsWithGrade.forEach(s => {
    console.log(`${s.name}: ${s.score} (Grade ${s.grade})`);
});

// Tampilkan dalam bentuk tabel
console.log("\n📊 Tabel Nilai:");
console.table(studentsWithGrade);

// Gunakan Destructuring di Fungsi
// Versi dengan destructuring parameter
const getTopStudentV2 = ([first, ...rest]) => {
    if (!first) return null; // Handle array kosong
    return rest.reduce((best, current) => 
        current.score > best.score ? current : best, 
        first
    );
};

const topStudent = getTopStudentV2(students);
console.log("\n=== MAHASISWA TERBAIK (dengan destructuring) ===");
console.log(`${topStudent.name} - ${topStudent.score}`);

// Contoh destructuring lainnya dalam fungsi
const displayStudent = ({ name, score, grade = "N/A" }) => {
    return `Nama: ${name}, Nilai: ${score}, Grade: ${grade}`;
};

console.log("\n📌 Contoh display dengan destructuring:");
studentsWithGrade.slice(0, 3).forEach(student => {
    console.log(displayStudent(student));
});

// ESNext Features
// Tambahkan data dengan advisor
const studentsWithAdvisor = [
    { name: "Rina", score: 88, advisor: { name: "Dr. Ivan", email: "ivan@undip.ac.id" } },
    { name: "Doni", score: 72, advisor: null },
    { name: "Ayu", score: 95, advisor: { name: "Dr. Alfath" } }, // tidak memiliki email
    { name: "Bima", score: 67 },
    { name: "Lala", score: 82, advisor: { name: "Dr. Banar", email: "banar@undip.ac.id" } },
];

console.log("\n👨‍🏫 === INFORMASI DOSEN PEMBIMBING ===");
studentsWithAdvisor.forEach(student => {
    // Optional chaining (?.) dan nullish coalescing (??)
    const advisorName = student.advisor?.name ?? "Belum ada pembimbing";
    const advisorEmail = student.advisor?.email ?? "Email tidak tersedia";
    
    console.log(`${student.name}:`);
    console.log(`  Pembimbing: ${advisorName}`);
    console.log(`  Email: ${advisorEmail}`);
    console.log("---");
});

// Mengakses nested property dengan aman dalam bentuk lain
const getAdvisorInfo = (student) => {
    return {
        mahasiswa: student.name,
        hasAdvisor: !!student.advisor,
        advisorName: student.advisor?.name ?? "N/A",
        advisorEmail: student.advisor?.email ?? "N/A"
    };
};

console.log("\n📋 Info Pembimbing Lengkap:");
console.table(studentsWithAdvisor.map(getAdvisorInfo));

// RINGKASAN LENGKAP - LAPORAN AKHIR
console.log(`
╔════════════════════════════════════════════╗
║     LAPORAN AKHIR ANALISIS NILAI           ║
╚════════════════════════════════════════════╝

📊 STATISTIK:
   • Total Mahasiswa       : ${students.length}
   • Rata-rata Nilai       : ${getAverage(students).toFixed(2)}
   • Mahasiswa Lulus       : ${getPassed(students).length} orang
   • Mahasiswa Tidak Lulus : ${students.length - getPassed(students).length} orang

🏆 TOP 3 MAHASISWA:
${rankedStudents.slice(0, 3).map((s, i) => 
    `   ${i + 1}. ${s.name} - ${s.score} (Grade ${toLetter(s.score)})`
).join('\n')}

📈 DISTRIBUSI NILAI HURUF:
${Object.entries(
    studentsWithGrade.reduce((acc, s) => {
        acc[s.grade] = (acc[s.grade] || 0) + 1;
        return acc;
    }, {})
).map(([grade, count]) => `   Grade ${grade}: ${count} mahasiswa`).join('\n')}

Aplikasi: ${appName} v${version}
Dibuat oleh: ${author}
`);