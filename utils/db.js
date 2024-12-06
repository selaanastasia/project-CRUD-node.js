const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dapodik');

// //! Membuat Skema user 
// const UserSchema = new mongoose.Schema({ 
//     nama: { 
//         type: String, 
//         required: true, 
//     }, 
//     username: { 
//         type: String, 
//         required: true, 
//         unique: true, 
//     }, 
//     password: { 
//         type: String, 
//         required: true, 
//     } 
// }, { collection: 'user' }); 
// const User = mongoose.model('User', UserSchema);

// //! Membuat Skema siswa
// const SiswaSchema = new mongoose.Schema({
//     nama: {
//         type: String,
//         required: true,
//     },
//     jk: {
//         type: String,
//         required: true,
//     },
//     nisn: {
//         type: String,
//         required: true,
//     },
//     nik: {
//         type: String,
//         required: true,
//     },
//     nokk: {
//         type: String,
//         required: true,
//     },
//     tingkat: {
//         type: String,
//         required: true,
//     },
//     rombel: {
//         type: String,
//         required: true,
//     },
//     terdaftar: {
//         type: String,
//         required: true,
//     },
//     ttl: {
//         type: String,
//         required: true,
//     },
//     tgl_masuk: {
//         type: String,
//         required: true,
//     }
//     // timestamp: {
//     //     type: Date,
//     //     default: Date.now,
//     // }
// }, { collection: 'siswa' });
// const Siswa = mongoose.model('Siswa', SiswaSchema);

//! Menambah 1 data user
// const user1 = new User({
//     nama: 'Nisa',
//     username: 'admin',
//     password: 'admin123',
// });

//! Menambah 1 data siswa
// const siswa1 = new Siswa({
//     nama: 'Nisa Fairuz Jannah',
//     jk: 'Perempuan',
//     nisn: '12334567890',
//     nik: '2222222222222222',
//     nokk: '2222222222222220',
//     tingkat: 'XI',
//     rombel: 'RPL 1',
//     terdaftar: "Siswa Baru",
//     ttl: 'Cirebon, 09 Januari 2008',
//     tgl_masuk: '2024-11-24',
// });

//! Simpan ke collection user
// user1.save().then((user) => console.log(user));
//! Simpan ke collection siswa
// siswa1.save().then((siswa) => console.log(siswa));