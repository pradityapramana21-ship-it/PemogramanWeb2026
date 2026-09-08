# Wireframe dan User Flow Aplikasi Rental PS
## 1. Login
Wireframe:
```text
┌──────────────────────────────┐
│          LOGIN PETUGAS       │
│                              │
│ Username                     │
│ [__________________________] │
│                              │
│ Password                     │
│ [__________________________] │
│                              │
│          [ MASUK ]           │
└──────────────────────────────┘
```
### User Flow
Login
↓
Masukkan Username dan Password
↓
Klik tombol Masuk
↓
Dashboard Petugas
## 2. Dashboard Petugas
Wireframe:
```text
┌─────────────────────────────────────┐
│        DASHBOARD PETUGAS            │
├─────────────────────────────────────┤
│                                     │
│ Total PS       Total Pelanggan      │
│   [10]              [25]            │
│                                     │
│ PS Sedang Disewa                    │
│       [5]                           │
│                                     │
│ [ Peminjaman ]  [ Pengembalian ]    │
│                                     │
│ [ Riwayat ]                         │
└─────────────────────────────────────┘
```
### User Flow
Login Berhasil
↓
Dashboard Petugas
↓
Pilih Menu
├── Peminjaman
├── Pengembalian
└── Riwayat
## 3. Peminjaman
Wireframe:
```text
┌─────────────────────────────────────┐
│          DATA PEMINJAMAN            │
├─────────────────────────────────────┤
│                                     │
│ Nama Pelanggan                      │
│ [_______________________________]   │
│                                     │
│ Pilih PS                            │
│ [_______________________________]   │
│                                     │
│ Tanggal Peminjaman                  │
│ [_______________________________]   │
│                                     │
│ Lama Sewa                           │
│ [_______________________________]   │
│                                     │
│          [ SIMPAN ]                 │
└─────────────────────────────────────┘
```
### User Flow
Dashboard Petugas
↓
Pilih Peminjaman
↓
Masukkan Data Pelanggan
↓
Pilih PS
↓
Masukkan Tanggal dan Lama Sewa
↓
Klik Simpan
↓
Data Peminjaman Tersimpan
## 4. Pengembalian
Wireframe:
```text
┌─────────────────────────────────────┐
│         DATA PENGEMBALIAN           │
├─────────────────────────────────────┤
│                                     │
│ Pilih Data Peminjaman               │
│ [_______________________________]   │
│                                     │
│ Nama Pelanggan                      │
│ [_______________________________]   │
│                                     │
│ PS yang Disewa                      │
│ [_______________________________]   │
│                                     │
│ Tanggal Pengembalian                │
│ [_______________________________]   │
│                                     │
│ Total Biaya                         │
│ [_______________________________]   │
│                                     │
│       [ PROSES PENGEMBALIAN ]       │
└─────────────────────────────────────┘
```
### User Flow
Dashboard Petugas
↓
Pilih Pengembalian
↓
Pilih Data Peminjaman
↓
Periksa Data Pelanggan dan PS
↓
Masukkan Tanggal Pengembalian
↓
Hitung Total Biaya
↓
Proses Pengembalian
↓
Status Peminjaman Menjadi Selesai
## 5. Riwayat
Wireframe:
```text
┌──────────────────────────────────────────────┐
│              RIWAYAT RENTAL PS               │
├──────────────────────────────────────────────┤
│                                              │
│ Nama       PS       Tanggal       Status     │
│ ──────────────────────────────────────────── │
│ Budi       PS 1     01/09/2026     Selesai   │
│ Andi       PS 2     02/09/2026     Selesai   │
│ Citra      PS 3     03/09/2026     Aktif     │
│                                              │
└──────────────────────────────────────────────┘
```
### User Flow
Dashboard Petugas
↓
Pilih Riwayat
↓
Sistem Menampilkan Data Rental
↓
Petugas Melihat Riwayat Peminjaman dan Pengembalian