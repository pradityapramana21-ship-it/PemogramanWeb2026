async function loadDataPelanggan() {
    const tbody = document.querySelector("#tabelPelangganBody");
    const loading = document.querySelector("#loading-indicator");

    try {
        await new Promise(function(resolve) {
            setTimeout(resolve, 600);
        });

        const response = await fetch("../data/pelanggan.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data pelanggan");
        }

        const data = await response.json();

        tbody.innerHTML = "";

        data.forEach(function(pelanggan, index) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${pelanggan.kode_pelanggan}</td>
                <td>${pelanggan.nama_pelanggan}</td>
                <td>${pelanggan.no_whatsapp}</td>
                <td>${pelanggan.alamat}</td>
                <td>${pelanggan.status_member}</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm btn-hapus">
                        Hapus
                    </button>
                </td>
            `;

            tbody.appendChild(row);
        });

    } catch (error) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-danger">
                    Gagal memuat data pelanggan.
                </td>
            </tr>
        `;
    } finally {
        loading.style.display = "none";
    }
}

loadDataPelanggan();