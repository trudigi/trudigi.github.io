
const WebFrameworks = {
	'none': {
		nama: "Statis",
		deskripsi: "Website yang hanya menyediakan konten. Cocok untuk pembuatan CV dan Landing Page",
		harga: 50000,
		durasi: 14
	},
	'php': {
		nama: "PHP (CodeIgniter)",
		deskripsi: "Website konvensional, LAMP stack. Cocok untuk pembuatan website apapun dengan model CMS",
		harga: 200000,
		durasi: 21,
	},
	'node': {
		nama: "NodeJS (Express)",
		deskripsi: "Website modern, MERN stack. Cocok untuk pembuatan website kompleks dengan model PWA",
		harga: 300000,
		durasi: 21,
	},
}

const DesktopFrameworks = {
	'pyqt': {
		nama: "Python (PyQt)",
		deskripsi: "Aplikasi Desktop Sederhana menggunakan bahasa Python yang simpel",
		harga: 100000,
		durasi: 14
	},
	'swing': {
		nama: "Java (JavaFX)",
		deskripsi: "Aplikasi Desktop untuk manajemen data kompleks berbasis OOP dari Java",
		harga: 150000,
		durasi: 14,
	},
	'electron': {
		nama: "Node.JS (Electron)",
		deskripsi: "Aplikasi Desktop berbasis Teknologi Web (HTML/CSS/JS) untuk desain fleksibel",
		harga: 200000,
		durasi: 21,
	},
}

const MobileFrameworks = {
	'android': {
		nama: "Android Studio",
		deskripsi: "Aplikasi Android Native untuk ukuran aplikasi apapun",
		harga: 300000,
		durasi: 21
	},
	'ionic': {
		nama: "Ionic (React Native)",
		deskripsi: "Aplikasi Mobile (Android/iOS) menggunakan teknologi React Native",
		harga: 400000,
		durasi: 28
	}
}

const Databases = {
	'none': {
		nama: "Tanpa Database",
		deskripsi: "Software statis tanpa ada data masuk/keluar",
		harga: 0,
		durasi: 0
	},
	'mini': {
		nama: "Mini",
		deskripsi: "Database dengan 1-3 tabel cocok untuk software dengan login admin atau mengumpulkan data sederhana",
		harga: 50000,
		durasi: 2,
	},
	'regular': {
		nama: "Regular",
		deskripsi: "Database dengan 3-7 tabel cocok untuk software lengkap dengan login admin dan pengguna",
		harga: 100000,
		durasi: 7,
	},
	'complex': {
		nama: "Kompleks",
		deskripsi: "Database kompleks untuk software yang mengelola beragam jenis konten dan pengguna.",
		harga: 400000,
		durasi: 14,
	},
	'mega': {
		nama: "Forensik",
		deskripsi: "Database super kompleks lengkap dengan laporan, data ekspor, dan analisa statis.",
		harga: 1000000,
		durasi: 21,
	},
}


const MediaFrameworks = {
	'powerpoint': {
		nama: "Powerpoint",
		deskripsi: "Solusi universal untuk Media Interaktif dengan navigasi sederhana",
		harga: 5000,
		durasi: 7
	},
	'construct': {
		nama: "Construct",
		deskripsi: "Framework paling cocok untuk Media 2D bergenre Game Arcade ataupun Platformer",
		harga: 50000,
		durasi: 10
	},
	'flash': {
		nama: "Flash/Animate CC",
		deskripsi: "Media Interaktif untuk konten 2D dengan navigasi fleksibel intuitif",
		harga: 150000,
		durasi: 14,
	},
	'unity': {
		nama: "Unity",
		deskripsi: "Solusi konvensional untuk konten kreatif maupun game 2D/3D dengan ukuran apapun",
		harga: 300000,
		durasi: 21,
	},
}

const MediaInteractivity = {
	'simple': {
		nama: "Sederhana",
		deskripsi: "Navigasi slide satu-satu sederhana",
		harga: 10000,
		revisi: 1000,
		durasi: 1
	},
	'click': {
		nama: "Tombol",
		deskripsi: "Navigasi konten dengan klik, seperti link menu dan kuis multiple choice",
		harga: 20000,
		revisi: 5000,
		durasi: 5,
	},
	'game': {
		nama: "Permainan",
		deskripsi: "Navigasi konten dengan permainan interaktif, seperti game arcade maupun platformer",
		harga: 100000,
		revisi: 10000,
		durasi: 10,
	},
	'storyboard': {
		nama: "Storyboard",
		deskripsi: "Progress level dengan interaksi bervariasi, termasuk menyisipkan story scene di setiap jeda level",
		harga: 400000,
		revisi: 50000,
		durasi: 30,
	},
}

const MediaGraphics = {
	'simple': {
		nama: "Sederhana",
		deskripsi: "Grafis geometris saja, selebihnya konten statis",
		harga: 10000,
		revisi: 1500,
		durasi: 1
	},
	'fluid': {
		nama: "Fluid",
		deskripsi: "Grafis dengan objek statis yang bergerak dengan animasi halus",
		harga: 50000,
		revisi: 5000,
		durasi: 3
	},
	'humanoid': {
		nama: "Humanoid",
		deskripsi: "Grafis dengan karakter kartun dan berinteraksi dengan objek sekitarnya secara dinamis",
		harga: 200000,
		revisi: 15000,
		durasi: 14
	},
	'fx': {
		nama: "Full FX",
		deskripsi: "Interaksi dengan bermacam-macam teknik grafis untuk membawa konten lebih hidup",
		harga: 400000,
		revisi: 30000,
		durasi: 21
	},
	'studio': {
		nama: "Studio",
		deskripsi: "Grafis, Audio, Enviroment dan Story scene kelas AAA",
		harga: 2000000,
		revisi: 100000,
		durasi: 90
	},
}

const VideoEditing = {
	'simple': {
		nama: "Sederhana",
		deskripsi: "Potong dan Sambung Video dengan transisi sederhana",
		harga: 10000,
		multi: 5000,
		revisi: 2500,
		durasi: 7,
		sprint: .5,
	},
	'composition': {
		nama: "Komposisi Fx",
		deskripsi: "Komposisi Gambar dan Video termasuk color-tuning video dan transisi intuitif",
		harga: 20000,
		multi: 10000,
		revisi: 5000,
		durasi: 14,
		sprint: 1,
	},
	'tracking': {
		nama: "Tracking Fx",
		deskripsi: "Penambahan elemen grafis dan FX yang melibatkan objeck tracking dan teknik komposisi lainnya",
		harga: 50000,
		multi: 20000,
		revisi: 10000,
		durasi: 18,
		sprint: 3,
	},
	'live': {
		nama: "Live Action",
		deskripsi: "Editing video yang melibatkan karakter atau objek CGI",
		harga: 200000,
		multi: 50000,
		revisi: 20000,
		durasi: 24,
		sprint: 5,
	}
}

export { WebFrameworks, DesktopFrameworks, MediaFrameworks,
	MobileFrameworks, Databases, MediaInteractivity, MediaGraphics, VideoEditing }