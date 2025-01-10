function showToast(message) {
	// Update the message in the toast body
	document.querySelector( & quot; #copyToast.toast - body & quot;).textContent = message;

	// Get the toast element
	var toastEl = document.getElementById( & quot; copyToast & quot;);

	// Initialize and show the toast
	var toast = new bootstrap.Toast(toastEl);
	toast.show();
}

function salinRekening(rekId, bankName) {
	// Get the text content of the element with the specific ID
	var copyText = document.getElementById(rekId).textContent.trim();

	// Create a temporary input to copy the text to clipboard
	var tempInput = document.createElement( & quot; input & quot;);
	document.body.appendChild(tempInput);
	tempInput.value = copyText;
	tempInput.select();
	document.execCommand( & quot; copy & quot;);
	document.body.removeChild(tempInput);

	// Show the toast notification
	showToast( & quot; Nomor Rekening & quot; + bankName + & quot; telah disalin: & quot; + copyText);
}



// Tentukan tanggal acara
var eventDate = new Date( & quot; January 22, 2025 10: 00: 00 & quot;).getTime();

// Update hitungan mundur setiap detik
var countdownFunction = setInterval(function() {

	// Mendapatkan waktu saat ini
	var now = new Date().getTime();

	// Menghitung jarak waktu antara sekarang dan tanggal acara
	var distance = eventDate - now;

	// Hitung waktu untuk hari, jam, menit, dan detik
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Menampilkan hasil di elemen HTML dengan ID yang sesuai
	document.getElementById( & quot; days & quot;).innerText = days;
	document.getElementById( & quot; hours & quot;).innerText = hours;
	document.getElementById( & quot; minutes & quot;).innerText = minutes;
	document.getElementById( & quot; seconds & quot;).innerText = seconds;

	// Jika hitungan mundur selesai, tampilkan pesan
	if (distance & lt; 0) {
		clearInterval(countdownFunction);
		document.getElementById( & quot; countdown & quot;).innerHTML = & quot;
		Acara telah dimulai! & quot;;
	}
}, 1000);


// Ambil semua item navigasi
const navItems = document.querySelectorAll( & #39;.indicator-item&# 39;);

// Tambahkan event listener untuk setiap item navigasi
navItems.forEach(item = & gt;
{
	item.addEventListener( & #39;click&# 39;, function() {
		// Hapus kelas &#39;active&#39; dari semua item
		navItems.forEach(i = & gt; i.classList.remove( & #39;active&# 39;));

		// Tambahkan kelas &#39;active&#39; ke item yang diklik
		this.classList.add( & #39;active&# 39;);
	});
});





function hideAllExceptCover() {
	// Tambahkan d-flex untuk membuat cover di tengah
	var cover = document.getElementById( & #39;cover&# 39;);
	cover.classList.add( & #39;d-flex&# 39;);
	cover.style.display = & #39;block&# 39;; // Tampilkan cover

	// Sembunyikan elemen lainnya
	document.getElementById( & #39;wedding-couple&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;wedding-event&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;wedding-info&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;wedding-message&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;wedding-location&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;navigation&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;alayah1&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;wedding-date&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;invitation&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;footer&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;ending-invitation&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;wedding-gift&# 39;).style.display = & #39;none&# 39;;
}

function bukaUndangan() {
	// Hapus d-flex untuk menyembunyikan cover
	var cover = document.getElementById( & #39;cover&# 39;);
	cover.classList.remove( & #39;d-flex&# 39;);
	cover.style.display = & #39;none&# 39;; // Sembunyikan cover

	// Tampilkan elemen lainnya
	document.getElementById( & #39;wedding-couple&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;wedding-event&# 39;).style.display = & #39;none&# 39;;
	document.getElementById( & #39;wedding-info&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;wedding-message&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;wedding-location&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;navigation&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;alayah1&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;wedding-date&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;footer&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;ending-invitation&# 39;).style.display = & #39;block&# 39;;
	document.getElementById( & #39;wedding-gift&# 39;).style.display = & #39;block&# 39;;
}




// Fungsi untuk menghapus fragment URL tanpa menghilangkan nama tamu
function removeUrlFragment() {
	const url = window.location.href;
	const tamuIndex = url.indexOf( & #39;?tamu= & #39;);
        if (tamuIndex != = -1) {
			const newUrl = url.split( & #39;# & #39;)[0]; // Hapus fragment URL
            history.replaceState(null, null, newUrl); // Ganti URL tanpa reload
        }
    }

    window.onload =
					function() {
						// Menyembunyikan elemen selain cover saat pertama kali dimuat
						hideAllExceptCover();
						updateGuestName();
						removeUrlFragment(); // Hapus fragment URL setelah halaman dimuat
					};




					document.getElementById( & #39;bukaButton&# 39;).addEventListener( & #39;click&# 39;, function() {
						var sections = document.querySelectorAll( & #39;.poff&# 39;);
						var audio = document.getElementById( & #39;invitation-music&# 39;);
						var audioControl = document.getElementById( & #39;audio-control&# 39;);
						var audioIcon = document.getElementById( & #39;audio-control&# 39;);

						// Mulai memutar audio saat tombol &quot;Buka Undangan&quot; diklik
						audio.play().then(function() {
							// Tampilkan kontrol audio play/pause dan tambahkan animasi putar setelah audio diputar
							audioControl.style.display = & #39;block&# 39;;
							audioIcon.classList.add( & #39;spin&# 39;); // Memulai rotasi ikon saat audio mulai diputar
						}).catch(function(error) {
							console.log( & #39;Audio gagal diputar: &# 39;, error);
						});

						// Proses transisi elemen undangan satu per satu
						sections.forEach(function(poff, index) {
							setTimeout(function() {
								poff.classList.add( & #39;visible&# 39;);
							}, index * 200); // Menambahkan delay untuk transisi berurutan
						});

						// Tambahkan event listener untuk play/pause kontrol
						audioControl.addEventListener( & #39;click&# 39;, function() {
							if (audio.paused) {
								audio.play();
								audioIcon.classList.add( & #39;spin&# 39;); // Tambahkan animasi rotasi saat audio diputar
								audioIcon.classList.replace( & #39;bi-play-circle&# 39;, & #39;bi-disc&# 39;); // Kembali ke ikon disk
							} else {
								audio.pause();
								audioIcon.classList.remove( & #39;spin&# 39;); // Hentikan animasi rotasi saat audio dijeda
								audioIcon.classList.replace( & #39;bi-disc&# 39;, & #39;bi-play-circle&# 39;); // Ganti ikon menjadi play saat audio dijeda
							}
						});
					});




					const scriptURL = & #39;https://script.google.com/macros/s/AKfycbwl7mJW9zlsN6L0dlRksiI7Q9wsOr7lnPWAxoT6zGNP0hkeP_3cxn40S4hnlaJ-1rSQ/exec&# 39;;

					let allData = [];
					let currentPage = 1;
					const commentsPerPage = 6;
					let isLoading = false;
					let isSubmitting = false;

					// Function to fetch and display data
					function fetchDataAndDisplay() {
						fetch(scriptURL)
							.then(response = & gt; response.json())
							.then(responseData = & gt;
							{
								allData = responseData.data.reverse();
								currentPage = 1;
								document.getElementById( & #39;comments&# 39;).innerHTML = & #39;&# 39;;
								displayComments();
								updateTotalCount(responseData);
								setupInfiniteScroll();
							})
							.catch(error = & gt; console.error( & #39;Error fetching data:&# 39;, error));
					}

					// Function to display comments
					function displayComments() {
						const commentsContainer = document.getElementById( & #39;comments&# 39;);
						const start = (currentPage - 1) * commentsPerPage;
						const end = start + commentsPerPage;
						const dataToShow = allData.slice(start, end);

						dataToShow.forEach(row = & gt;
						{
							const commentDiv = document.createElement( & #39;div&# 39;);
							commentDiv.classList.add( & #39;comment&# 39;);

							const headerDiv = document.createElement( & #39;div&# 39;);
							headerDiv.classList.add( & #39;header&# 39;);

							const nameSpan = document.createElement( & #39;span&# 39;);
							nameSpan.classList.add( & #39;name&# 39;);
							nameSpan.textContent = row[1]; // Nama pengguna

							const attendanceIcon = document.createElement( & #39;i&# 39;);
							attendanceIcon.classList.add( & #39;attendance-icon&# 39;);

							// Pilih ikon berdasarkan kehadiran
							switch (row[2].toLowerCase()) {
								case & #39;hadir&# 39;:
									attendanceIcon.classList.add( & #39;bi&# 39;, & #39;bi-check-circle-fill&# 39;); // Ikon hadir
									break;
								case & #39;tidak hadir&# 39;:
									attendanceIcon.classList.add( & #39;bi&# 39;, & #39;bi-x-circle-fill&# 39;); // Ikon tidak hadir
									break;
								case & #39;bimbang&# 39;:
									attendanceIcon.classList.add( & #39;bi&# 39;, & #39;bi-slash-circle-fill&# 39;); // Ikon bimbang
									break;
								default:
									attendanceIcon.textContent = & #39;&# 39;; // Tidak ada ikon jika status kehadiran tidak dikenal
							}

							const timestampDiv = document.createElement( & #39;div&# 39;);
							timestampDiv.classList.add( & #39;timestamp&# 39;);
							timestampDiv.textContent = new Date(row[0]).toLocaleString(); // Waktu

							const messageDiv = document.createElement( & #39;div&# 39;);
							messageDiv.classList.add( & #39;message&# 39;);
							messageDiv.textContent = row[3]; // Pesan

							// Gabungkan nama dan ikon ke dalam header
							headerDiv.appendChild(nameSpan);
							headerDiv.appendChild(attendanceIcon);
							headerDiv.appendChild(timestampDiv);

							commentDiv.appendChild(headerDiv);
							commentDiv.appendChild(messageDiv);
							commentsContainer.appendChild(commentDiv);
						});

						isLoading = false;
					}



					// Infinite Scroll Setup
					function setupInfiniteScroll() {
						const commentsContainer = document.getElementById( & #39;comments-container&# 39;);

						commentsContainer.addEventListener( & #39;scroll&# 39;, function() {
							if (commentsContainer.scrollTop + commentsContainer.clientHeight & gt; = commentsContainer.scrollHeight & amp; & amp; !isLoading) {
								if (currentPage * commentsPerPage & lt; allData.length) {
									isLoading = true;
									currentPage++;
									displayComments();
								}
							}
						});
					}

					// Update total counts for attendance
					function updateTotalCount(responseData) {
						document.getElementById( & #39;hadirCount&# 39;).textContent = responseData.hadir;
						document.getElementById( & #39;tidakHadirCount&# 39;).textContent = responseData.tidakHadir;
						document.getElementById( & #39;bimbangCount&# 39;).textContent = responseData.bimbang;
					}

					// Handle form submission
					document.getElementById( & #39;rsvpForm&# 39;).addEventListener( & #39;submit&# 39;, function(e) {
						e.preventDefault();

						if (isSubmitting) return;

						const form = this;
						const formData = new FormData(form);
						isSubmitting = true;

						fetch(scriptURL, {
								method: & #39;POST&# 39;,
								body: formData
							})
							.then(response = & gt; response.text())
							.then(data = & gt;
							{
								form.querySelectorAll( & #39;input, select, textarea, button&# 39;).forEach(function(el) {
									el.disabled = true;
								});
								form.reset();
								setTimeout(() = & gt;
								{
									// Fetch new data with random delay
									fetchDataAndDisplay();
									isSubmitting = false;
								}, Math.random() * 2000 + 500);
							})
							.catch(error = & gt;
							{
								console.error( & #39;Error submitting data:&# 39;, error);
								isSubmitting = false;
							});
					});

					// Initial data fetch on page load
					document.addEventListener( & #39;DOMContentLoaded&# 39;, function() {
						fetchDataAndDisplay();
					});


					const messageTextarea = document.getElementById( & #39;messageTextarea&# 39;);
					const charCount = document.getElementById( & #39;charCount&# 39;);
					const maxChars = 300;

					// Update character count as user types
					messageTextarea.addEventListener( & #39;input&# 39;, function() {
						const remainingChars = maxChars - messageTextarea.value.length;
						charCount.textContent = remainingChars + & #39; karakter tersisa&# 39;;

						// Optionally, you can add a warning color when nearing the limit
						if (remainingChars & lt; = 50) {
							charCount.style.color = & #39;red&# 39;;
						} else {
							charCount.style.color = & #39;black&# 39;;
						}
					});

					// Mengambil tahun saat ini dan menggantinya pada elemen dengan id &quot;current-year&quot;
					document.getElementById( & #39;current-year&# 39;).innerText = new Date().getFullYear();
