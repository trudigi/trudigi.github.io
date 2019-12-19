
const props = {
	'frameworks': {
		'static': {
			name: 'HTML Statis',
			price: 100000,
			title: "Website Full Client yang hanya menyediakan konten. Cocok untuk pembuatan CV dan Landing Page",
			group: 'Web',
			duration: 7,
		},
		'ci': {
			name: 'CodeIgniter',
			title: "Website PHP konvensional menggunakan CodeIgniter yang simpel digunakan. Cocok untuk pembuatan website bisnis dengan model CMS",
			price: 200000,
			group: 'Web',
			duration: 14,
		},
		'express': {
			name: 'Express',
			title: "Website modern, MERN stack. Cocok untuk pembuatan website interaktif dengan model PWA",
			price: 400000,
			group: 'Web',
			duration: 14,
		},
		'laravel': {
			name: 'Laravel',
			title: "Website modern, MERN stack. Cocok untuk pembuatan website interaktif dengan model PWA",
			price: 600000,
			group: 'Web',
			duration: 21,
		},
		'pyqt': {
			name: 'Python (Qt)',
			title: "Aplikasi Desktop Sederhana menggunakan bahasa Python yang simpel",
			price: 150000,
			group: 'Desktop',
			duration: 7,
		},
		'javafx': {
			name: 'Java (JavaFX)',
			title: "Aplikasi Desktop untuk manajemen data kompleks berbasis OOP dari Java",
			price: 250000,
			group: 'Desktop',
			duration: 14,
		},
		'electron': {
			name: 'NodeJS (Electron)',
			title: "Aplikasi Desktop berbasis Teknologi Web (HTML/CSS/JS) untuk desain fleksibel",
			price: 300000,
			group: 'Desktop',
			duration: 14,
		},
		'pwa': {
			name: 'PWA',
			title: "",
			price: 100000,
			group: 'Mobile',
			duration: 7,
		},
		'android': {
			name: 'Android Native',
			title: "Aplikasi Android Native untuk ukuran aplikasi apapun",
			price: 200000,
			group: 'Mobile',
			duration: 14,
		},
		'ionic': {
			name: 'Ionic React',
			title: "Aplikasi Mobile (Android/iOS) menggunakan teknologi React Native",
			price: 300000,
			group: 'Mobile',
			duration: 21,
		},
		'python': {
			name: 'Python',
			title: "Aplikasi Mobile (Android/iOS) menggunakan teknologi React Native",
			price: 150000,
			group: 'Computing',
			duration: 7,
		},
		'node': {
			name: 'NodeJS',
			title: "Aplikasi Mobile (Android/iOS) menggunakan teknologi React Native",
			price: 300000,
			group: 'Computing',
			duration: 14,
		},
		'cpp': {
			name: 'C++',
			title: "Aplikasi Mobile (Android/iOS) menggunakan teknologi React Native",
			price: 500000,
			group: 'Computing',
			duration: 14,
		},
	},
	'database': {
		'none': {
			name: "Tanpa Database",
			title: "Software tanpa ada data masuk maupun keluar",
			price: 0,
			duration: 0
		},
		'mini': {
			name: "Mini",
			title: "Database untuk mengumpulkan data sederhana dan autentikasi admin saja",
			price: 100000,
			duration: 3,
		},
		'regular': {
			name: "Regular",
			title: "Database ukuran sedang untuk autentikasi admin dan pengguna",
			price: 200000,
			duration: 7,
		},
		'complex': {
			name: "Kompleks",
			title: "Database kompleks menampung berbagai jenis user dan konten",
			price: 500000,
			duration: 14,
		},
		'mega': {
			name: "Forensik",
			title: "Database sangat kompleks menyediakan analisa statis, laporan dan fitur ekspor pada",
			price: 1000000,
			duration: 21,
		},
	},
	'media': {
		'pamflet': {
			name: "Pamflet",
			title: "Pamflet",
			group: 'Grafis',
			price: 0,
			duration: 0,
		},
		'infographic': {
			name: "Inforgrafis",
			title: "Inforgrafis",
			group: 'Grafis',
			price: 0,
			duration: 0
		},
	}
}

export default props;