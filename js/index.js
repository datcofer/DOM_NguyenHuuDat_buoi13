
// Bài tập 1: Tính tiền lương nhân viên

document.querySelector(".btn-success").onclick = function () {
    // Truy xuất dữ liệu
    let luongMotNgay = document.getElementById("luongMotNgay").value * 1;
    let soNgayLam = document.getElementById("soNgayLam").value * 1;
    // xử lí tính tiền lương nhân viên nhận được
    let tienLuongNhanVien = 0;
    tienLuongNhanVien = luongMotNgay * soNgayLam;
    console.log(tienLuongNhanVien);
    document.getElementById("ketQua").innerHTML = `Tiền lương nhân viên là: ${tienLuongNhanVien.toLocaleString()}`;
}

// Bài tập 2: Tính giá trị trung bình

document.querySelector(".btn-warning").onclick = function () {
    // Truy xuất dữ liệu
    let soThuNhat = document.getElementById("soThuNhat").value * 1;
    let soThuHai = document.getElementById("soThuHai").value * 1;
    let soThuBa = document.getElementById("soThuBa").value * 1;
    let soThuTu = document.getElementById("soThuTu").value * 1;
    let soThuNam = document.getElementById("soThuNam").value * 1;
    let giaTriTrungBinh = 0;
    // Xử lí tính giá trị trung bình
    giaTriTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    console.log(giaTriTrungBinh);

    document.getElementById("ketQua_2").innerHTML += giaTriTrungBinh;

}


// Bài tập 3: Quy đổi tiền
document.querySelector(".btn-danger").onclick = function () {
    const exchangeRates = 23500;
    let soTienUSD = document.getElementById("soTienUSD").value * 1;
    // xử lí quy đổi tiền
    let giaTriQuyDoi = 0;
    giaTriQuyDoi = soTienUSD * exchangeRates;
    console.log(giaTriQuyDoi);
    document.getElementById("ketQua_3").innerHTML = ` Số tiền quy đổi ${soTienUSD} USD là: ${giaTriQuyDoi.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
    })}`;
    
}


// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
document.querySelector(".btn-primary").onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;
    let chuVi = 0;
    let dienTich = 0;
    // Xử lí tính chu vi và diện tích hình chữ nhật
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    console.log(chuVi);
    console.log(dienTich);
    document.getElementById("ketQua_4").innerHTML = `Diện tích hình chữ nhật là: ${dienTich} và chu vi hình chữ nhật là: ${chuVi}`;
}
    document.getElementById("btn_reset").onclick = function () {
        document.getElementById("chieuDai").value = "";
        document.getElementById("chieuRong").value = "";
        document.getElementById("ketQua_4").innerHTML = `Vui lòng nhập chiều dài và chiều rộng`;

    }


// Bài tập 5: Tính tổng 2 ký số
document.querySelector(".btn-secondary").onclick = function () {
    let soHaiChuSo = document.getElementById("soHaiChuSo").value * 1;
    if (soHaiChuSo < 10 || soHaiChuSo > 99) {
        document.getElementById("ketQua_5").innerHTML = `Vui lòng nhập vào số có 2 chữ số`;
    } else {
            
                let hangChuc = Math.floor(soHaiChuSo / 10);
                let hangDonVi = soHaiChuSo % 10;
                console.log(hangChuc);
                console.log(hangDonVi);
                let tinhTong = 0;
                tinhTong = hangChuc + hangDonVi;
                console.log(tinhTong);
            
                document.getElementById("ketQua_5").innerHTML = `Tổng 2 ký số là: ${tinhTong}`;
        
        }
          
}
document.getElementById("btn_clear").onclick = function () {
    document.getElementById("soHaiChuSo").value = "";
    document.getElementById("ketQua_5").innerHTML = `Vui lòng nhập vào số có 2 chữ số`;
    }
    
   
