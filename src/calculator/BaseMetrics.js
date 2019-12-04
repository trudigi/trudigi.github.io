
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
		nama: "Java (Swing)",
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

const MediaFrameworks = {
	'powerpoint': {
		nama: "Powerpoint",
		deskripsi: "Media Interaktif untuk navigasi konten sederhana",
		harga: 50000,
		durasi: 7
	},
	'construct': {
		nama: "Construct",
		deskripsi: "Media Interaktif untuk 2D dengan Gameplay sederhana",
		harga: 100000,
		durasi: 14
	},
	'flash': {
		nama: "Flash/Animate CC",
		deskripsi: "Media Interaktif untuk konten 2D dengan navigasi intuitif",
		harga: 200000,
		durasi: 14,
	},
	'unity': {
		nama: "Unity",
		deskripsi: "Media Interaktif untuk konten kreatif maupun game 2D/3D ukuran apapun",
		harga: 300000,
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
		deskripsi: "Website statis tanpa ada data masuk/keluar",
		harga: 0,
		durasi: 0
	},
	'mini': {
		nama: "Mini",
		deskripsi: "Database dengan 1-3 tabel cocok untuk website login admin atau mengumpulkan survey sederhana",
		harga: 50000,
		durasi: 2,
	},
	'regular': {
		nama: "Regular",
		deskripsi: "Database dengan 3-7 tabel cocok untuk website dengan login admin dan pengguna",
		harga: 100000,
		durasi: 7,
	},
	'complex': {
		nama: "Kompleks",
		deskripsi: "Database kompleks untuk website yang mengelola beragam jenis konten dan pengguna.",
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

export { WebFrameworks, DesktopFrameworks, MediaFrameworks, MobileFrameworks, Databases }