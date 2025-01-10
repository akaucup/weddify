    function generateLinks(event) {
        event.preventDefault(); // Mencegah form submit

        const linkWA = document.getElementById(&#39;linkWA&#39;).value.trim();
        const invitationLink = document.getElementById(&#39;invitationLink&#39;).value.trim();
        const daftarTamu = document.getElementById(&#39;daftarTamu&#39;).value.trim().split(&quot;\n&quot;);
        let waChatTemplate = document.getElementById(&#39;waChat&#39;).value.trim();

        // Mendapatkan data yang sudah ada di localStorage
        let savedLinks = JSON.parse(localStorage.getItem(&#39;generatedLinks&#39;)) || {};

        let results = `
        <table class='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Nama Tamu</th>
                    <th>Nomor Telepon</th>
                    <th>Link WhatsApp</th>
                </tr>
            </thead>
            <tbody>
        `;

        daftarTamu.forEach(tamuData =&gt; {
            let [namaTamu, nomorTelepon] = tamuData.split(&#39;|&#39;);

            if (namaTamu &amp;&amp; nomorTelepon) {
                // Memeriksa apakah data untuk tamu ini sudah ada di localStorage
                if (!savedLinks[namaTamu.trim()]) {
                    // Membuat link undangan dengan nama tamu di-encode untuk URL
                    const tamuLink = `${invitationLink}?tamu=${encodeURIComponent(namaTamu.trim())}`;

                    // Ganti {tamu} dan {invitationLink} dalam template waChat
                    let waChat = waChatTemplate
                        .replace(&#39;{tamu}&#39;, namaTamu.trim())
                        .replace(&#39;{invitationLink}&#39;, tamuLink);

                    // Encode pesan waChat agar sesuai dengan URL encoding
                    let encodedWaChat = encodeURIComponent(waChat)
                        .replace(/%20/g, &#39;+&#39;)       // Mengganti spasi dengan &quot;+&quot;
                        .replace(/&#39;/g, &#39;%27&#39;)        // Apostrof diubah ke %27
                        .replace(/%0A/g, &#39;%0A&#39;);    // Baris baru tetap dalam %0A

                    // Membuat link WhatsApp dengan pesan yang sudah dienkode
                    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(nomorTelepon.trim())}&amp;text=${encodedWaChat}`;

                    // Simpan link yang sudah tergenerate ke localStorage
                    savedLinks[namaTamu.trim()] = whatsappLink;

                    // Tambahkan hasil ke variabel results dalam bentuk baris tabel
                    results += `
                        <tr>
                            <td>${namaTamu}</td>
                            <td>${nomorTelepon.trim()}</td>
                            <td><a href='${whatsappLink}' target='_blank'>Kirim Pesan WA</a></td>
                        </tr>
                    `;
                } else {
                    // Jika data sudah ada di localStorage, gunakan data yang tersimpan
                    results += `
                        <tr>
                            <td>${namaTamu}</td>
                            <td>${nomorTelepon.trim()}</td>
                            <td><a href='${savedLinks[namaTamu.trim()]}' target='_blank'>Kirim Pesan WA (Tersimpan)</a></td>
                        </tr>
                    `;
                }
            }
        });

        results += `
            </tbody>
        </table>
        `;

        // Simpan data ke localStorage setelah loop selesai
        localStorage.setItem(&#39;generatedLinks&#39;, JSON.stringify(savedLinks));

        // Tampilkan hasil dalam bentuk tabel
        document.getElementById(&#39;result&#39;).innerHTML = results;
    }

    // Fungsi untuk memuat data yang sudah ada di localStorage ketika halaman dimuat
    window.onload = function () {
        let savedLinks = JSON.parse(localStorage.getItem(&#39;generatedLinks&#39;)) || {};
        if (Object.keys(savedLinks).length &gt; 0) {
            let results = `
            <table class='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Nama Tamu</th>
                        <th>Nomor Telepon</th>
                        <th>Link WhatsApp</th>
                    </tr>
                </thead>
                <tbody>
            `;

            for (let namaTamu in savedLinks) {
                results += `
                    <tr>
                        <td>${namaTamu}</td>
                        <td>-</td>
                        <td><a href='${savedLinks[namaTamu]}' target='_blank'>Kirim Pesan WA (Tersimpan)</a></td>
                    </tr>
                `;
            }

            results += `
                </tbody>
            </table>
            `;

            // Tampilkan hasil tersimpan
            document.getElementById(&#39;result&#39;).innerHTML = results;
        }
    };
