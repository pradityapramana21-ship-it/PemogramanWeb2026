async function loadDataPS() {
    const tbody = document.querySelector("#tabelPSBody");
    const loading = document.querySelector("#loading-indicator");

    try {
        await new Promise(function(resolve) {
            setTimeout(resolve, 600);
        });

        const response = await fetch("../data/ps.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data PS");
        }

        const data = await response.json();

        tbody.innerHTML = "";

        data.forEach(function(ps, index) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${ps.kode_ps}</td>
                <td>${ps.nama_unit}</td>
                <td>${ps.kategori}</td>
                <td>Rp ${ps.tarif.toLocaleString("id-ID")}</td>
                <td>${ps.status}</td>
                <td>
                    <button class="btn btn-danger btn-sm btn-hapus">
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
                    Gagal memuat data PS.
                </td>
            </tr>
        `;
    } finally {
        loading.style.display = "none";
    }
}

loadDataPS();