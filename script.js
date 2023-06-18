video.addEventListener("click", function video(){
    alert("ini video Pablo Escobar");
});

audio.addEventListener("click", function audio(){
    alert("ini audio Pablo Escobar");
});

gambar.addEventListener("click", function gambar(){
    alert("ini gambar Pablo Escobar");
});

function kirimData(){
    var name = document.getElementById("nama").value
    var nim = document.getElementById("nim").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var Alamat = document.getElementById("alamat").value
    var inputTanggal = document.getElementById("tanggalInput").value
    var angkatanSelect = document.getElementById("angkatanSelect").value

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + Alamat +
        "\nAngkatan : " +angkatanSelect +
        "\nTanggal : " +inputTanggal 
    )
}