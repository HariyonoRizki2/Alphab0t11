exports.wait = () => {
	return `\`\`\`[ ! ] Sedang Diproses, Mohon Tunggu...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Proses Selesai...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Broadcast Selesai`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Format Salah, Silahkan Cek Menu`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Stiker Tidak Terdeteksi`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Silahkan Reply/Tag`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Link/URL Error`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Hanya Bisa digunakan di Group`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Hanya Bisa Digunakan Oleh Owner`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Maaf, Nomor Kamu Telah Diblokir!`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Hanya Bisa Digunakan oleh Admin Group`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` Sedang Mencari Cecan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Sedang Mencari Cogan`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Silahkan Reply Chat Botnya`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Silahkan Reply Fotonya`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Tag @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` Pesan Yang Kamu Reply, Tidak Mengandung Reply`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Berhasil Mengganti Nama Grub`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Berhasil Mengganti Deskripsi Grub`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} teks|jumlah`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} test|lagi`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} test`
	}
exports.botNotAdm = () => {
	return `Jadikan Bot Sebagai Admin Grub Terlebih Dahulu!`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\` Yah gagal, coba ulangi ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Aktifkan`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Nonaktifkan`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\`Masukan Angka Dengan Benar`
 }
exports.adminGc = () => {
 return `Karena lu adalah admin jadi bot gk bakal kick lu`
 }
 exports.izinDt = () => {
 return `Izin diterima`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Di Aktifkan`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Di Nonaktifkan`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} sudah aktif`
	}
exports.anjawaUdhOon = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.onORoff = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.gcOpen = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Berhasil membuka grup`
	}
exports.gcClose = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Berhasil Menutup grup`
	}
exports.nsfwmo= () => {
	return `Fitur nsfw belum di aktifkan, hubungi owner bot u/ mengaktifkan`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Hubungi owner untuk menggunakan fitur ini`
 }
 //vote
exports.noSesiVote = () => {
 	return`Tidak ada sesi voting`
 }
exports.suksesDelVot = () => {
	return`Sukses Menghapus sesi Voting Di Grup Ini`
	}
exports.adaVoting = () => {
	return`Sesi Voting Sedang Berlangsung Di Grup Ini`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voting*\n\n${prefix + command} @tag target | reason  | 1 (1 = 1 Menit)`
    }
exports.caraVot = () => {
 	return`masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit`
    }
//ttt
exports.noSesiTtt = () =>{
	return`Tidak ada sesi tictactoe di grup ini`
	}
exports.suksesDelTtt = () =>{
	return`Berhasil menghapus sesi tictactoe di grup ini`
	}
//on & off
exports.ownerOff = () =>{
	return`Owner saya telah off`
	}
exports.ownerOn = () =>{
	return`Owner saya kembali on`
	}
