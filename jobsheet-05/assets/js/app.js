function initNavbar() {
    const button = document.querySelector(".navbar-toggler");
    const nav = document.querySelector("#navMenu");

    if (button && nav) {
        button.addEventListener("click", function() {
            nav.classList.toggle("nav-open");
        });
    }
}

function initValidasiForm() {
    const form = document.querySelector("form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function(event) {
        const inputWajib = form.querySelectorAll("[required]");

        inputWajib.forEach(function(input) {
            if (input.value.trim() === "") {
                event.preventDefault();

                const pesan = document.createElement("div");
                pesan.className = "text-danger small mt-1";
                pesan.textContent = "Field ini wajib diisi.";

                input.insertAdjacentElement("afterend", pesan);
            }
        });

        const tarif = document.querySelector("#tarif");

        if (tarif && tarif.value < 1000) {
            event.preventDefault();

            const pesan = document.createElement("div");
            pesan.className = "text-danger small mt-1";
            pesan.textContent = "Tarif minimal Rp 1.000.";

            tarif.insertAdjacentElement("afterend", pesan);
        }
    });
}
function initTableFilter() {
    const inputPS = document.querySelector("#cariPS");
    const tabelPS = document.querySelector("#tabelPS");

    const inputPelanggan = document.querySelector("#cariPelanggan");
    const tabelPelanggan = document.querySelector("#tabelPelanggan");

    if (inputPS && tabelPS) {
        inputPS.addEventListener("keyup", function() {
            const kataKunci = inputPS.value.toLowerCase();
            const baris = tabelPS.querySelectorAll("tbody tr");

            baris.forEach(function(row) {
                const data = row.textContent.toLowerCase();

                if (data.includes(kataKunci)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }

    if (inputPelanggan && tabelPelanggan) {
        inputPelanggan.addEventListener("keyup", function() {
            const kataKunci = inputPelanggan.value.toLowerCase();
            const baris = tabelPelanggan.querySelectorAll("tbody tr");

            baris.forEach(function(row) {
                const data = row.textContent.toLowerCase();

                if (data.includes(kataKunci)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
}
function initHapusData() {
    const tombolHapus = document.querySelectorAll(".btn-hapus");

    tombolHapus.forEach(function(tombol) {
        tombol.addEventListener("click", function() {
            const yakin = confirm("Apakah kamu yakin ingin menghapus data ini?");

            if (yakin) {
                const baris = tombol.closest("tr");
                baris.remove();
            }
        });
    });
}

initNavbar();
initValidasiForm();
initTableFilter();
initHapusData();