# Program menghitung rata-rata nilai dan menentukan kelulusan

jumlah_nilai = 0
banyak_nilai = int(input("Masukkan jumlah mata pelajaran: "))

for i in range(1, banyak_nilai + 1):
    nilai = float(input(f"Masukkan nilai ke-{i}: "))
    jumlah_nilai += nilai

rata_rata = jumlah_nilai / banyak_nilai

print("\n=== Hasil Akhir ===")
print(f"Rata-rata nilai: {rata_rata:.2f}")

if rata_rata >= 80:
    print("Status: Lulus dengan predikat A (Sangat Baik)")
elif rata_rata >= 70:
    print("Status: Lulus dengan predikat B (Baik)")
elif rata_rata >= 60:
    print("Status: Lulus dengan predikat C (Cukup)")
else:
    print("Status: Tidak Lulus")

print("\nProgram selesai. Terima kasih telah menggunakan program ini!")
