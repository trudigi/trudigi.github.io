(this["webpackJsonptrudigi.id"]=this["webpackJsonptrudigi.id"]||[]).push([[0],{110:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(43),l=t.n(r),o=(t(61),t(62),t(63),t(64),t(65),t(66),t(67),t(9)),u=t(10),s=t(8),c=t(12),m=t(11),p=t(13),d=t(46),v=t(47),h=t(31),k=t.n(h);function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(Object(t),!0).forEach((function(a){Object(v.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var f=function(e){function a(){var e;Object(u.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).setSchemeProp=function(a){window.location.search.includes("invoice")||(e.setState((function(e){return{pesanan:JSON.parse(JSON.stringify(e.paket[a].pesanan))}})),e.calculate())},e.setPesananProp=function(a){if(!window.location.search.includes("invoice")){var t={};"radio"===a.target.type?a.target.checked&&(t[a.target.name]=a.target.value):"checkbox"===a.target.type?t[a.target.name]=a.target.checked:"range"===a.target.type||"number"===a.target.type?t[a.target.name]=Number(a.target.value):t[a.target.name]=a.target.value,e.setState((function(e){return{pesanan:b({},e.pesanan,{},t)}})),e.calculate()}},e.submitPesanan=function(a){window.location.search.includes("invoice")?(e.clearCheckout(a),e.setState((function(e){return{uri:""}}))):(window.location.hash="#checkout",window.history.replaceState("checkout","Checkout","?invoice="+k.a.compressToEncodedURIComponent(JSON.stringify(b({context:e.state.konten.id},e.state.pesanan)))+"#"+e.state.konten.id),a.preventDefault(),e.setState((function(e){return{uri:window.location.href}})))},e.clearCheckout=function(e){window.history.replaceState("checkout","Checkout","/")};var t=e.konten().title.replace(" ","").toLowerCase();return e.state={konten:b({},e.konten(),{id:t}),paket:e.listPaket(),pesanan:b({},e.tracePesanan(t)),listing:{price:0,duration:0,revision:0},uri:window.location.search.includes("invoice")?window.location.href:"",error:""},e}return Object(p.a)(a,e),Object(s.a)(a,[{key:"tracePesanan",value:function(e){try{var a=JSON.parse(k.a.decompressFromEncodedURIComponent(new URLSearchParams(window.location.search).get("invoice")));if(a.context===e){var t=JSON.parse(JSON.stringify(this.listPaket()[0].pesanan));return Object.keys(t).forEach((function(e){return t[e]=a.hasOwnProperty(e)?a[e]:t[e]})),t}}catch(n){}return JSON.parse(JSON.stringify(this.listPaket()[0].pesanan))}}]),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.calculate()}},{key:"listPaket",value:function(){return[]}},{key:"konten",value:function(){return{title:"Title",deskripsi:"Lorem Ipsum",color:"gray"}}},{key:"calculate",value:function(){}},{key:"checkout",value:function(){return{}}},{key:"renderControls",value:function(){return i.a.createElement("div",null)}}]),a}(n.Component),E={frameworks:{bootstrap:{name:"Bootstrap",price:1e5,title:"Website konvensional berbasis Bootstrap",group:"Web",duration:7},react:{name:"React",price:15e4,title:"Website interaktif berbasis ekosistem React",group:"Web",duration:10},ci:{name:"CodeIgniter",title:"Server konvensional berbasis PHP CodeIgniter",price:2e5,group:"Server",duration:14},express:{name:"Express",title:"Server modern berbasis Node.JS Express",price:3e5,group:"Server",duration:14},laravel:{name:"Laravel",title:"Server kompleks berbasis PHP Laravel",price:5e5,group:"Server",duration:21},pyqt:{name:"Python (Qt)",title:"Aplikasi Desktop sederhana berbasis Qt + Python",price:15e4,group:"Desktop",duration:7},electron:{name:"NodeJS (Electron)",title:"Aplikasi Desktop interaktif berbasis Teknologi Web",price:2e5,group:"Desktop",duration:14},javafx:{name:"Java (JavaFX)",title:"Aplikasi Desktop kompleks berbasis OOP dari Java",price:3e5,group:"Desktop",duration:14},pwa:{name:"PWA",title:"Website didalam Aplikasi Mobile",price:1e5,group:"Mobile",duration:7},flutter:{name:"Flutter",title:"Aplikasi Mobile modern berbasis Flutter dari Google",price:2e5,group:"Mobile",duration:14},ionic:{name:"Ionic React",title:"Aplikasi Mobile interaktif berbasis Ionic + React Native",price:2e5,group:"Mobile",duration:14},android:{name:"Android",title:"Aplikasi Android Native berbasis Android Studio",price:4e5,group:"Mobile",duration:21},python:{name:"Python",title:"Aplikasi komputasi untuk A.I.",price:2e5,group:"Computing",duration:7},node:{name:"NodeJS",title:"Aplikasi komputasi untuk microservice dan cloud-computing",price:3e5,group:"Computing",duration:14},cpp:{name:"C++",title:"Aplikasi komputasi dengan performa tinggi",price:4e5,group:"Computing",duration:14},manual:{name:"Manual PDF",title:"Dokumentasi dan Buku Manual",price:1e5,group:"Integration",duration:14},rest:{name:"REST API",title:"Standar REST API untuk konsumen publik",price:2e5,group:"Integration",duration:14},media:{name:"Media Processing",title:"Proses Pengolahan Media untuk optimasi data dan penyimpanan",price:3e5,group:"Integration",duration:14},graphql:{name:"GraphQL Endpoint",title:"GraphQL server untuk konsumen publik",price:4e5,group:"Integration",duration:21},livechat:{name:"Live Chat",title:"1-in-1 realtime chat antar user",price:5e5,group:"Integration",duration:21}},database:{none:{name:"Tanpa Database",title:"Software tanpa ada data masuk maupun keluar",price:0,duration:0},mini:{name:"Mini",title:"Database untuk mengumpulkan data sederhana dan autentikasi admin saja",price:1e5,duration:3},regular:{name:"Regular",title:"Database ukuran sedang untuk autentikasi admin dan pengguna",price:2e5,duration:7},complex:{name:"Kompleks",title:"Database kompleks menampung berbagai jenis user dan konten",price:5e5,duration:14},mega:{name:"Forensik",title:"Database sangat kompleks menyediakan analisa statis, laporan, fitur impor/ekspor dan fitur tambahan lainnya",price:1e6,duration:21}},media:{flyer:{name:"Flyer",title:"Desain Grafis untuk Poster, Pamflet, Banner dan selebaran lainnya",group:"Grafis",volume:"1 desain",price:1e4,priceVolume:1e4,duration:1,durationVolume:2},infographic:{name:"Infografis",title:"Desain grafis yang memuat banyak info termasuk CV, infografis dan poster skripsi maupun penelitian",group:"Grafis",volume:"1 desain",price:1e4,priceVolume:15e3,duration:2,durationVolume:3},branding:{name:"Branding",title:"Desain Brand termasuk Logo, Produk, Stiker dan Kartu Nama",group:"Grafis",volume:"1 desain",price:1e4,priceVolume:5e3,duration:3,durationVolume:2},feed:{name:"Instagram",title:"Desain untuk Instagram Feed",group:"Grafis",volume:"1 petak",price:2e4,priceVolume:5e3,duration:4,durationVolume:1},humanoid2D:{name:"Karakter 2D",title:"Karakter Dinamis, Humanoid 2D",group:"Props",volume:"1 desain karakter",price:6e4,priceVolume:4e4,duration:5,durationVolume:7},humanoid3D:{name:"Karakter 3D",title:"Karakter Dinamis, Humanoid 3D",group:"Props",volume:"1 desain karakter",price:15e4,priceVolume:1e5,duration:10,durationVolume:7},props2D:{name:"Props 2D",title:"Desain grafis mentah untuk elemen media 2D",group:"Props",volume:"1 jenis prop",price:4e4,priceVolume:2e4,duration:3,durationVolume:5},props3D:{name:"Props 3D",title:"Desain grafis mentah untuk elemen media 3D",group:"Props",volume:"1 jenis prop",price:1e5,priceVolume:5e4,duration:5,durationVolume:5},audioSFX:{name:"Audio SFX",title:"Sound Effect untuk elemen media tertentu",group:"Props",volume:"1 jenis FX",price:5e4,priceVolume:1e4,duration:5,durationVolume:3},audioMusic:{name:"Background Music",title:"Background Music untuk elemen media tertentu",group:"Props",volume:"1 musik",price:15e4,priceVolume:4e4,duration:5,durationVolume:7},powerpoint:{name:"Powerpoint",title:"Media Pembelajaran berbasis Powerpoint",group:"Media",volume:"10 slide",price:2e4,priceVolume:1e4,duration:7,durationVolume:2},flash:{name:"Flash",title:"Media Pembelajaran berbasis Flash",group:"Media",volume:"100 frame",price:1e5,priceVolume:25e3,duration:15,durationVolume:5},construct:{name:"Arcade Games",title:"Permainan Arcade berbasis Construct 2",group:"Media",volume:"1 level desain",price:2e5,priceVolume:5e4,duration:14,durationVolume:7},unity:{name:"Unity Games",title:"Permainan berbasis Unity",group:"Media",volume:"1 level desain",price:3e5,priceVolume:1e5,duration:21,durationVolume:7},video:{name:"Video Editing",title:"Potong dan Gabung video mentahan menjadi satu",group:"Video",volume:"5 menit",price:5e4,priceVolume:1e4,duration:5,durationVolume:1},compositing:{name:"Video Composition",title:"Potong gabung video footage dengan animasi grafis",group:"Video",volume:"2 menit",price:1e5,priceVolume:2e4,duration:7,durationVolume:3},motion:{name:"Video Motion",title:"Video dengan elemen geometris bergerak sebagai bahan utama",group:"Video",volume:"30 detik",price:2e5,priceVolume:5e4,duration:14,durationVolume:2},"2d":{name:"Animasi Grafis",title:"Video dengan elemen dinamis bergerak sebagai bahan utama",group:"Video",volume:"15 detik",price:3e5,priceVolume:5e4,duration:21,durationVolume:3},"3d":{name:"Animasi 3D",title:"Video dengan elemen 3D sebagai bahan utama",group:"Video",volume:"15 detik",price:5e5,priceVolume:5e4,duration:21,durationVolume:5}}},y={framework:{name:"Framework",highlight:"Komponen aplikasi yang ingin digunakan"},database:{name:"Database",highlight:"Ukuran database yang anda gunakan"},media:{name:"Media",highlight:"Jenis media yang diinginkan"},price:{name:"Harga",highlight:"Alokasi budget"},duration:{name:"Durasi",highlight:"Durasi pengerjaan"},revision:{name:"Revisi",highlight:"Durasi revisi setelah pengerjaan"},quick:{name:"Kilat",highlight:"Ingin pengerjaan yang lebih cepat?"},security:{name:"Audit Keamanan",highlight:"Butuh jaminan agar software bebas dari bug dan pembobolan hacker?"},quality:{name:"High Quality",highlight:"Butuh revisi lama untuk perbaikan kualitas?"},deploy:{name:"Asistensi Pemasangan",highlight:"Butuh bantuan untuk hosting, distribusi dan migrasi data?"}},P=t(5),D=t(16),w=t(2),j=t(7),M=t(50),O=t(51);function I(e){var a=e.name,t=y[a];return t?i.a.createElement(i.a.Fragment,null,i.a.createElement(P.Label,null,t.name),i.a.createElement(P.Hint,null,t.highlight)):i.a.createElement(P.Label,null,a)}function q(e){var a=e.onClick;return i.a.createElement(D.IconButton,{danger:!0,onClick:a,size:"small"},i.a.createElement(D.Icon,null,i.a.createElement(M.a,null)))}function S(e){var a=e.label,t=e.children;return i.a.createElement(P.Field,null,i.a.createElement(w.Grid,null,i.a.createElement(w.Row,null,i.a.createElement(w.Col,{md:4},i.a.createElement(I,{name:a})),i.a.createElement(w.Col,{md:8},t))))}function V(e){var a=e.event,t=e.options,n="";return i.a.createElement(j.Dropdown,{sm:!0,onSelect:a},i.a.createElement(j.Trigger,null,i.a.createElement(D.IconButton,{primary:!0,size:"small"},i.a.createElement(D.Icon,null,i.a.createElement(O.a,null)))),i.a.createElement(j.Menu,{placement:"start",arrow:!0},Object.keys(t).map((function(e){var a=t[e];return a.group!==n?(n=a.group,i.a.createElement(i.a.Fragment,{key:e},i.a.createElement(j.HeaderItem,null,n),i.a.createElement(j.Item,{value:e},a.name))):i.a.createElement(j.Item,{value:e,key:e},a.name)}))))}function T(e){var a=e.value,t=e.event;return i.a.createElement(S,{label:"framework"},i.a.createElement("div",{className:"control-list"},a.map((function(e,n){var r=E.frameworks[e];return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:"control-list-item"},i.a.createElement("div",null,r.name),i.a.createElement(q,{onClick:function(){return function(e){a.splice(e,1),t({target:{value:a,type:"list",name:"framework"}})}(n)}})),i.a.createElement(P.Hint,null,r.title))})),i.a.createElement("div",{className:"control-list-item"},i.a.createElement(V,{event:function(e){a.includes(e)||(a.push(e),t({target:{value:a,type:"list",name:"framework"}}))},options:E.frameworks}))))}function A(e){var a=e.value,t=e.event,n=e.quick;return i.a.createElement(S,{label:"media"},i.a.createElement("div",{className:"control-list"},Object.keys(a).map((function(e){var r=E.media[e];return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:"control-list-item"},i.a.createElement("div",null,r.name),i.a.createElement(q,{onClick:function(){return delete a[e],void t({target:{value:a,type:"list",name:"media"}})}})),i.a.createElement(P.Hint,null,r.title),i.a.createElement(P.Range,{value:a[e],min:1,max:15,onChange:function(n){return function(e,n){a[n]=e,t({target:{value:a,type:"list",name:"media"}})}(n.target.value,e)}}),i.a.createElement(P.Hint,null,"".concat(a[e]," \xd7 ").concat(r.volume,", selanjutnya "),"".concat(F(r.priceVolume*(n?3:1))," per ").concat(r.volume)))})),i.a.createElement("div",{className:"control-list-item"},i.a.createElement(V,{event:function(e){a.hasOwnProperty(e)||(a[e]=1,t({target:{value:a,type:"list",name:"media"}}))},options:E.media}))))}function C(e){var a=e.value,t=e.event,n=Object.keys(E.database),r=E.database[a];return i.a.createElement(P.Field,null,i.a.createElement(j.Dropdown,{selectedItem:a,onSelect:function(e){t({target:{value:e,type:"text",name:"database"}})}},i.a.createElement(j.Field,null,i.a.createElement(S,{label:"database"},i.a.createElement(j.Select,null,r.name),i.a.createElement(P.Hint,null,r.title))),i.a.createElement(j.Menu,null,n.map((function(e){return i.a.createElement(j.Item,{key:e,value:e},E.database[e].name)})))))}function z(e){var a=e.value,t=e.event;return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,{value:a,event:t,name:"quick"}),i.a.createElement(R,{value:a,event:t,name:"security"}),i.a.createElement(R,{value:a,event:t,name:"deploy"}))}function N(e){var a=e.value,t=e.event;return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,{value:a,event:t,name:"quick"}),i.a.createElement(R,{value:a,event:t,name:"quality"}))}function B(e){var a=e.value;return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,{value:a.price,label:"price"}),i.a.createElement(J,{value:a.duration,label:"duration"}),i.a.createElement(J,{value:a.revision,label:"revision"}))}function R(e){var a=e.value,t=e.event,n=e.name;return i.a.createElement(P.Field,null,i.a.createElement(P.Toggle,{name:n,checked:!0===a[n],onChange:t},i.a.createElement(I,{name:n})))}function G(e){var a=e.children,t=e.label;return i.a.createElement(S,{label:t},a)}var F=function(e){return e.toLocaleString("id-ID",{style:"currency",currency:"IDR"})};function x(e){var a=e,t=e>=2e6?.25:e>=1e6?.2:e>=5e5?.1:e>=25e4?.05:0;return{normal:a,discount:t,discounted:Math.floor(a*(1-t))}}function U(e){var a,t=e.value,n=e.label,r=x(t),l=r.normal,o=r.discount,u=r.discounted;return a=o>0?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"listing-old"},F(l)),i.a.createElement("div",{className:"listing"},F(u)),i.a.createElement(P.Hint,null,"Promo Grand Launching: ",i.a.createElement("b",null,"Diskon ",100*o,"%"))):i.a.createElement("div",{className:"listing"},F(l)),i.a.createElement(G,{label:n},a)}function J(e){var a=e.value,t=e.label;return i.a.createElement(G,{label:t},0===a?i.a.createElement("b",null,"< 24 Jam"):1===a?i.a.createElement("b",null,"< 48 Jam"):i.a.createElement("span",null,a+" Hari"))}function K(e){var a=e.list,t=e.event;return i.a.createElement("div",{className:"scheme-group"},a.map((function(e,a){return i.a.createElement("button",{className:"scheme-item",key:e.nama,onClick:function(){return t(a)}},i.a.createElement("div",{className:"scheme-title"},e.nama),i.a.createElement("small",null,e.deskripsi))})))}function L(e){var a=e.error;return a?i.a.createElement(P.Message,{validation:"error"},a):i.a.createElement(P.Message,{validation:"success"},"OK")}function H(e){var a=e.event,t=e.uri,n=e.title,r=e.price,l=e.quick,o=e.disabled;if(t){var u="Permisi mas Julius, saya pesan ".concat(n," seharga ")+"".concat(Math.floor(x(r).discounted/1e3),"k").concat(l?" paket kilat":"",", detail ").concat(t),s="https://wa.me/".concat("6285257284172","?text=").concat(encodeURIComponent(u));return i.a.createElement(i.a.Fragment,null,i.a.createElement(D.Button,{onClick:a},"Tarik"),i.a.createElement(P.Field,null,i.a.createElement(P.Textarea,{readOnly:!0,value:u,rows:6,resizable:!0})),i.a.createElement("a",{className:"hero-submit",href:s,_target:"blank"},"Kirim"))}return i.a.createElement(D.Button,{primary:!0,onClick:a,disabled:o},"Pesan")}var W=function(e){function a(){return Object(u.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"listPaket",value:function(){return d}},{key:"calculate",value:function(){this.setState((function(e){var a=e.pesanan,t=a.framework,n=a.database,i=a.quick,r=a.security,l=a.deploy,o=t.map((function(e){return E.frameworks[e]})).reduce((function(e,a){return{price:e.price+a.price,duration:e.duration+a.duration}}),{price:0,duration:0}),u=E.database[n],s="",c=t.includes("bootstrap")||t.includes("react")||t.includes("pwa"),m=t.includes("ci")||t.includes("express")||t.includes("laravel");return 0===t.length?s="Framework kosong":!r&&l?s="Jika aplikasi benar-benar ingin dipasang maka audit keamanan harus ada":r&&"none"===n?s="Tidak ada pembobolan yang perlu dikhawatirkan jika aplikasi tidak mempunyai database":m&&"none"===n?s="Database tidak bisa kosong apabila memasang Server (CI/Express/Laravel)":"none"!==n&&!m&&c?s="Web statis tidak dapat mengakses database tanpa Server (CI/Express/Laravel)":"none"!==n&&r&&!m?s="Server (CI/Express/Laravel) harus ada untuk melindungi database":"mega"!==n&&"complex"!==n&&(t.includes("rest")||t.includes("media"))?s="REST API dan Media Processing hanya tersedia untuk database tingkat kompleks atau forensik":"mega"!==n&&(t.includes("livechat")||t.includes("graphql"))&&(s="GraphQL dan Live Chat hanya tersedia untuk database tingkat forensik"),{listing:{price:[o.price,u.price,r?2*u.price:0,l?1e3*("mega"===n?2:1)*1e3:0].reduce((function(e,a){return e+a}),0)*(i?2:1),duration:Math.floor((o.duration+u.duration)/(i?3:1)),revision:[7,30,60,90][(r?1:0)+(l?"mega"===n?2:1:0)]},error:s}}))}},{key:"render",value:function(){var e=this.state.pesanan,a=this.state.listing;return i.a.createElement("div",{style:{"--scheme":"#035"},className:"calculator-container"},i.a.createElement(w.Grid,null,i.a.createElement(w.Row,null,i.a.createElement(w.Col,{md:6,lg:4},i.a.createElement(K,{list:this.state.paket,event:this.setSchemeProp})),i.a.createElement(w.Col,{md:6,lg:8},i.a.createElement("div",{className:"control-item"},i.a.createElement(C,{value:e.database,event:this.setPesananProp,name:"database"}),i.a.createElement(T,{value:e.framework,event:this.setPesananProp,name:"framework"}),i.a.createElement(z,{value:e,event:this.setPesananProp}),i.a.createElement(B,{value:a}),i.a.createElement(L,{error:this.state.error}),i.a.createElement(H,{uri:this.state.uri,event:this.submitPesanan,disabled:Boolean(this.state.error),price:a.price,quick:e.quick,title:"Aplikasi"}))))))}}]),a}(f),Q=t(52),X=function(e){function a(){return Object(u.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"listPaket",value:function(){return Q}},{key:"calculate",value:function(){this.setState((function(e){var a=e.pesanan,t=a.media,n=a.quick,i=a.quality,r=Object.keys(t).map((function(e){var a=E.media[e];return{price:a.price,priceVolume:a.priceVolume*t[e],duration:a.duration+a.durationVolume*t[e],commitment:5e4+a.price}})).reduce((function(e,a){return{price:e.price+a.price,priceVolume:e.priceVolume+a.priceVolume,duration:e.duration+a.duration,commitment:e.commitment+a.commitment}}),{price:0,priceVolume:0,duration:0,commitment:0});return{listing:{price:[r.price*(n?2:1),r.priceVolume*(n?3:1),i?r.commitment:0].reduce((function(e,a){return e+a}),0),duration:Math.floor(r.duration/(n?4:1)),revision:[3,30][i?1:0]}}}))}},{key:"render",value:function(){var e=this.state.pesanan,a=this.state.listing;return i.a.createElement("div",{style:{"--scheme":"#530"},className:"calculator-container"},i.a.createElement(w.Grid,null,i.a.createElement(w.Row,null,i.a.createElement(w.Col,{md:6,lg:4},i.a.createElement(K,{list:this.state.paket,event:this.setSchemeProp})),i.a.createElement(w.Col,{md:6,lg:8},i.a.createElement("div",{className:"control-item"},i.a.createElement(A,{value:e.media,event:this.setPesananProp,quick:e.quick,name:"media"}),i.a.createElement(N,{value:e,event:this.setPesananProp}),i.a.createElement(B,{value:a}),i.a.createElement(H,{uri:this.state.uri,event:this.submitPesanan,price:a.price,quick:e.quick,title:"Media"}))))))}}]),a}(f);function $(){return($=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function _(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var Y=i.a.createElement("g",{fill:"#231F20"},i.a.createElement("path",{d:"M503 622v-3h12v3h-4v12h-4v-12h-4zM538 633v1h-5l-3-5h-2v5h-4v-15h7c7 0 8 7 4 9l3 5zm-7-11h-3v4h3c2 0 2-3 0-4zM556 629v-10h4v10c0 3-3 5-7 5-3 0-6-2-6-5v-10h4v10l2 1 3-1zM575 627v7h-5v-15h2l8 7v-7h4v15h-1l-8-7zM594 626c0-10 17-10 17 0s-17 10-17 0zm13 0c0-5-9-5-9 0 0 6 9 6 9 0zM632 629c0 3-3 5-6 5s-7-2-7-5v-2h4v2l3 1 2-1v-7h-3v-3h7v10zM642 626c0-10 16-10 16 0s-16 10-16 0zm12 0c0-5-8-5-8 0 0 6 8 6 8 0zM676 634h-4v-6l-6-8v-1h5l3 5 3-5h4v1l-5 8v6zM689 626c0-10 17-10 17 0s-17 10-17 0zm13 0c0-5-9-5-9 0 0 6 9 6 9 0zM728 634h-6v-15h6c11 0 11 15 0 15zm-2-4h2c6 0 6-7 0-7h-2v7zM753 630v4h-8v-4h2v-8h-2v-3h8v3h-2v8h2zM770 619c3 0 6 2 7 5h-4l-3-2c-3 0-4 2-4 4 0 3 1 4 4 4l3-1h-3v-4h7v5c-1 3-4 4-7 4-5 0-9-3-9-8s4-7 9-7zM794 630v4h-8v-4h2v-8h-2v-3h8v3h-2v8h2zM802 622v-3h12v3h-4v12h-4v-12h-4zM833 632h-7l-1 2h-4v-1l7-14h2l8 14v1h-4l-1-2zm-4-7l-2 4h4l-2-4zM850 630h6v4h-10v-15h4v11zM877 629v5h-5v-15h11v3h-6v4h5v3h-5zM906 633v1h-5l-2-5h-3v5h-4v-15h7c7 0 8 7 4 9l3 5zm-7-11h-3v4h3c3 0 3-3 0-4zM925 622h-6v3h6v3h-6v2h7v4h-11v-15h10v3zM946 622h-6v3h5v3h-5v2h6v4h-10v-15h10v3zM960 630h6v4h-10v-15h4v11zM985 632h-6l-1 2h-4v-1l7-14h2l7 14v1h-4l-1-2zm-3-7l-2 4h4l-2-4zM1003 627v7h-4v-15h2l8 7v-7h4v15h-1l-9-7zM1031 619c4 0 7 2 8 6h-4c-1-2-2-3-4-3s-4 2-4 4c0 3 2 4 4 4s3 0 4-2h4c-1 4-4 6-8 6s-8-3-8-8c0-4 4-7 8-7zM1059 622h-6v3h6v3h-6v2h6v4h-10v-15h10v3zM1083 633v1h-4l-3-5h-3v5h-4v-15h8c6 0 7 7 3 9l3 5zm-6-11h-4v4h4c2 0 2-3 0-4z"})),Z=i.a.createElement("g",{fill:"#231F20"},i.a.createElement("path",{d:"M556 509c0 1-2 3-4 3h-18v85c0 1-1 3-3 3h-18l-3-3v-85h-18c-2 0-4-2-4-3v-16l4-2h60l4 2v16zM599 556h-8v41c0 1-1 3-3 3h-17c-2 0-3-2-3-3V494c0-1 1-2 3-2h34c6 0 37 0 37 32 0 17-8 25-19 29l10 22 10 21c0 2-1 4-3 4h-19l-3-2-19-42zm-8-20h14c3 0 13-1 13-11s-11-11-13-11h-14v22zM661 564v-69l3-2h17l4 2v69c1 9 9 15 18 15 8 0 17-5 17-15v-69l4-2h17l3 2v69c0 24-18 37-41 37s-42-14-42-37zM788 491c27 0 64 6 64 54 0 47-37 55-64 55h-17c-2 0-4-2-4-3V493l4-2h17zm3 86c13 0 37-2 37-32 0-23-16-32-37-32v64zM899 512v66h9c2 0 3 2 3 3v16c0 1-1 3-3 3h-42c-2 0-3-2-3-3v-16c0-1 1-3 3-3h9v-66h-8c-2 0-3-2-3-3v-16c0-1 1-2 3-2h40l4 2v16c0 1-2 3-4 3h-8zM1021 535l3 3v59c0 2-2 3-3 3h-16c-1 0-3-1-3-3v-5c-7 6-16 9-27 9-30 0-53-20-53-56 0-32 25-56 55-56 15 0 30 7 39 16v4l-12 12h-4c-6-6-14-9-23-9-17 0-31 12-31 33 0 24 14 33 31 33 9 0 17-3 23-10v-11h-15c-2 0-4-1-4-3v-16c0-1 2-3 4-3h36zM1074 512v66h9c2 0 3 2 3 3v16c0 1-1 3-3 3h-42c-2 0-3-2-3-3v-16c0-1 1-3 3-3h9v-66h-8c-2 0-3-2-3-3v-16c0-1 1-2 3-2h41c2 0 3 1 3 2v16c0 1-1 3-3 3h-9z"})),ee=i.a.createElement("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:406.1,y1:412.2,x2:66.1,y2:702.8},i.a.createElement("stop",{offset:0,stopColor:"#00aeef"}),i.a.createElement("stop",{offset:1,stopColor:"#21409a"})),ae=i.a.createElement("path",{fill:"url(#a)",d:"M284 404H100v37h1c0 20 15 37 36 37v1h94v127h1c2 16 16 28 32 28v1h32v-32-1-121c10 1 18 2 22 4a91 91 0 11-125 89v-6c0-20-16-36-37-37h-38v38h1a165 165 0 10165-165z"}),te=i.a.createElement("linearGradient",{id:"b",gradientUnits:"userSpaceOnUse",x1:208.7,y1:600.9,x2:519.1,y2:603.7},i.a.createElement("stop",{offset:0,stopColor:"#00aeef"}),i.a.createElement("stop",{offset:1,stopColor:"#21409a"})),ne=i.a.createElement("path",{fill:"url(#b)",d:"M296 600v0z"}),ie=i.a.createElement("linearGradient",{id:"c",gradientUnits:"userSpaceOnUse",x1:210.7,y1:600.6,x2:514,y2:603.3},i.a.createElement("stop",{offset:0,stopColor:"#00aeef"}),i.a.createElement("stop",{offset:1,stopColor:"#21409a"})),re=i.a.createElement("path",{fill:"url(#c)",d:"M312 479l-16 1v1c10 1 18 2 22 4a91 91 0 11-125 89v-5a123 123 0 10119-90z"}),le=function(e){var a=e.svgRef,t=e.title,n=_(e,["svgRef","title"]);return i.a.createElement("svg",$({viewBox:"0 400 1200 360",ref:a},n),t?i.a.createElement("title",null,t):null,Y,Z,ee,ae,te,ne,ie,re)},oe=i.a.forwardRef((function(e,a){return i.a.createElement(le,$({svgRef:a},e))})),ue=(t.p,t(53));function se(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("div",null,i.a.createElement(oe,{className:"App-logo"}),i.a.createElement("h1",null,"Trunojoyo Digital Freelancer"),i.a.createElement("div",{className:"sale-countdown"},i.a.createElement(w.Grid,null,i.a.createElement(w.Row,null,i.a.createElement(w.Col,{md:12},i.a.createElement("h2",null,"PROMO GRAND LAUNCHING"))),i.a.createElement(w.Row,null,i.a.createElement(w.Col,{md:6},i.a.createElement("h4",null,"Project Digital Discount UP TO 25%!"),i.a.createElement("h5",null,"Pesan sebelum 21 Januari 2020.",i.a.createElement("br",null)," SK Berlaku.")),i.a.createElement(w.Col,{md:6,className:"countdown"},i.a.createElement(ue.a,{date:"2020-01-21T00:00:00"})))))))}var ce=[{q:"Apa itu TRUDIGI?",a:"Trudigi adalah Komunitas Mahasiswa Unijoyo yang bergerak membangun IT. Kami melayani pemesanan media dan pengerjaan project software dengan tujuan membantu percepatan perubahan melalui IT pada lingkungan Universitas Trunojoyo Madura."},{q:"Siapa yang merintis TRUDIGI?",a:"Komunitas kecil mahasiswa dari UTM yang memiliki visi untuk meningkatkan IT di kampus dan sekitarnya."},{q:"Apa motivasi dibelakang TRUDIGI?",a:"Infrastruktur khusus nya pada bidang IT pada lingkungan kampus sendiri masih kurang baik sehingga disitu sebenarnya banyak peluang untuk dapat berkontribusi dalam pengembangan infratruktur tersebut. Tidak hanya itu dari situ juga ada peluang untuk para Mahasiswa yang ingin membangun Universitas menjadi lebih baik lagi dapat belajar tentunya hal tersebut juga di butuhkan lingkungan yang baik sehingga kita menghadirkan juga Trudigi community."},{q:"Bagaimana cara kerja TRUDIGI?",a:"Kami membuat plaform agar memudahkan pemesanan project, setelah project di pesan, kami akan merancang agar project tersebut selesai tepat waktu termasuk mengalokasikan dana dan mencari atau merekrut personil tambahan jika di perlukan."},{q:"Bagaimana cara memesan projek di TRUDIGI?",a:"Di Trudigi.id anda dapat menyesuaikan kebutuhan sesuai dengan budget anda jika project sudah detail bisa melalui Whatsapp."},{q:"Bagaimana sistem pembayaran di TRUDIGI?",a:"TBD."},{q:"Bagaimana alur pengerjaan projek di TRUDIGI?",a:"TBD."},{q:"Bagaimana penghitungan harga di TRUDIGI?",a:"TBD."},{q:"Bagaimana penghitungan durasi pengerjaan di TRUDIGI?",a:"TBD."},{q:"Bagaimana penghitungan durasi revisi di TRUDIGI?",a:"TBD."},{q:"Bagaimana jika saya butuh lebih banyak revisi diluar pemesanan?",a:"TBD."},{q:"Apa itu opsi kilat di TRUDIGI?",a:"TBD."},{q:"Saya butuh lebih cepat dari opsi kilat. Bisa?",a:"TBD."},{q:"Apa itu opsi keamanan di TRUDIGI?",a:"TBD."},{q:"Apa saja contoh karya TRUDIGI?",a:"TBD."},{q:"Dapatkah saya berpartisipasi di TRUDIGI?",a:"TBD."},{q:"Apa relasi antara UTM dan TRUDIGI?",a:"TBD."},{q:"Kontak yang bisa dihubungi untuk pertanyaan lain?",a:"TBD."}];function me(){return i.a.createElement("div",null,i.a.createElement(w.Grid,null,i.a.createElement(w.Row,null,i.a.createElement(w.Col,{md:6,style:{"--scheme":"#500"},className:"calculator-container"},i.a.createElement("h3",null,"S&K PROMO"),i.a.createElement("ol",{style:{textAlign:"left",margin:"2em"}},i.a.createElement("li",null,"Promo Berlaku untuk semua jenis pemesanan Aplikasi dan Media Digital"),i.a.createElement("li",null,"Promo Berlaku untuk semua pemesanan dari 21 Desember 2019 hingga 20 Januari 2020 23:59 Waktu WIB terhitung dari chat pertama"),i.a.createElement("li",null,"Promo Berlaku untuk pemesanan via Website trudigi.id"),i.a.createElement("li",null,"Promo Hanya Berlaku untuk pemesanan pertama individu/institusi/lembaga terkait"))),i.a.createElement(w.Col,{md:6,className:"App-qa"},i.a.createElement("h3",null,"FAQ"),ce.map((function(e){return i.a.createElement("div",{className:"App-qa-item",key:e.q},i.a.createElement("div",{className:"App-qa-q"},e.q),i.a.createElement("div",{className:"App-qa-a"},e.a))}))))))}var pe=t(22),de=(t(110),function(e){function a(){return Object(u.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(se,null),i.a.createElement(pe.Tabs,null,i.a.createElement(pe.TabPanel,{label:"Pesan Aplikasi",key:"tab-1"},i.a.createElement("main",{className:"App-calculator"},i.a.createElement(W,null))),i.a.createElement(pe.TabPanel,{label:"Pesan Media",key:"tab-2"},i.a.createElement("main",{className:"App-calculator"},i.a.createElement(X,null))),i.a.createElement(pe.TabPanel,{label:"Pertanyaan?",key:"tab-3"},i.a.createElement("main",{className:"App-calculator"},i.a.createElement(me,null)))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(o.ThemeProvider,null,i.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e){e.exports=JSON.parse('[{"nama":"Front Web","deskripsi":"Halaman CV atau Portofolio","pesanan":{"framework":["bootstrap"],"database":"none","quick":false,"security":false,"deploy":false}},{"nama":"Arsip","deskripsi":"Aplikasi untuk menata arsip","pesanan":{"framework":["pyqt"],"database":"mini","quick":false,"security":false,"deploy":false}},{"nama":"Data Science","deskripsi":"Aplikasi untuk analisa berbasis A.I.","pesanan":{"framework":["bootstrap","ci","python"],"database":"regular","quick":false,"security":false,"deploy":false}},{"nama":"Lifestyle","deskripsi":"Aplikasi untuk pengguna Mobile","pesanan":{"framework":["express","flutter"],"database":"regular","quick":false,"security":true,"deploy":false}},{"nama":"Administrasi","deskripsi":"Website untuk otorisasi sistem","pesanan":{"framework":["bootstrap","ci"],"database":"complex","quick":false,"security":true,"deploy":false}},{"nama":"Kantor","deskripsi":"Aplikasi untuk ukuran jaringan kantor","pesanan":{"framework":["bootstrap","ci","javafx","manual"],"database":"complex","quick":false,"security":true,"deploy":false}},{"nama":"Semua Platform","deskripsi":"Aplikasi modern terjangkau untuk semua platform","pesanan":{"framework":["react","express","electron","ionic"],"database":"complex","quick":false,"security":true,"deploy":false}},{"nama":"Distruptive IT","deskripsi":"Aplikasi distruptif untuk solusi industri C2C","pesanan":{"framework":["react","laravel","ionic","media","rest","livechat"],"database":"mega","quick":false,"security":true,"deploy":true}}]')},52:function(e){e.exports=JSON.parse('[{"nama":"Poster Kilat","deskripsi":"Satu desain poster same day","pesanan":{"media":{"flyer":1},"quick":true,"quality":false}},{"nama":"CV","deskripsi":"Satu set dokumen CV, logo dan kartu nama","pesanan":{"media":{"branding":2,"infographic":1},"quick":false,"quality":false}},{"nama":"Flash","deskripsi":"Materi Flash 20 detik","pesanan":{"media":{"flash":3},"quick":false,"quality":false}},{"nama":"Video Edit","deskripsi":"Potong sambung video 10 menit","pesanan":{"media":{"video":2},"quick":false,"quality":false}},{"nama":"Video Komposisi","deskripsi":"Video dengan FX 5 menit","pesanan":{"media":{"compositing":3},"quick":false,"quality":false}},{"nama":"Animasi 2D","deskripsi":"Video animasi 2D 2 menit","pesanan":{"media":{"2d":6},"quick":false,"quality":false}},{"nama":"Storyboard Game","deskripsi":"Platformer 2D berbasis Storyboard","pesanan":{"media":{"unity":3,"humanoid2D":1,"props2D":5,"audioMusic":2},"quick":false,"quality":true}},{"nama":"Storyboard Combat Game","deskripsi":"Platformer 3D berbasis Storyboard dan multi-player combat","pesanan":{"media":{"unity":3,"humanoid3D":2,"props3D":5,"audioMusic":3,"audioSFX":8},"quick":false,"quality":true}}]')},56:function(e,a,t){e.exports=t(111)},67:function(e,a,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.8f9166de.chunk.js.map