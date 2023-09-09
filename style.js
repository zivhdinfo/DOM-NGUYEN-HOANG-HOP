// bài tập tính lương nè 
function TinhLuong(){
    var ngaydilam = document.getElementById("ngaydilam");
    var luonghangngay =document.getElementById
    ("luonghangngay");

    ngaydilam = ngaydilam.value;
    luonghangngay = luonghangngay.value;

    console.log("Check | Ngày Đi Làm: ",ngaydilam, " | Lương: ",luonghangngay)

    // tính lương nè 🫥
    luongcuaban = ngaydilam * luonghangngay;

    console.log("Lương Của Bạn Là 💶: ",luongcuaban)

    document.getElementById("luongnhanvien").innerText=("Lương Của Bạn Là 💶: ",luongcuaban)
}
// Bài tập 2 nè 
function BaiTap2(){
    var trungbinh1 = document.getElementById("trungbinh1");
    trungbinh1 = parseInt(trungbinh1.value);
    
    var trungbinh2 = document.getElementById("trungbinh2");
    trungbinh2 = parseInt(trungbinh2.value);
    
    var trungbinh3 = document.getElementById("trungbinh3");
    trungbinh3 = parseInt(trungbinh3.value);
    
    var trungbinh4 = document.getElementById("trungbinh4");
    trungbinh4 = parseInt(trungbinh4.value);
    
    var Tong = trungbinh1 + trungbinh2 + trungbinh3 + trungbinh4;
    
    console.log("Check Log| Tổng Các Số: ",Tong)

    TrungBinh= Tong/4;
    
    document.getElementById("tinhtrungbinh").innerText=("Trung Bình Tính Ra Được Là: 💶: ",TrungBinh)
}

// bài tập quy đổi nè 
function quyDoi() {
    console.log("Check Log| OK ")
    var usdInput = document.getElementById("usdInput");
    usdInput = parseInt(usdInput.value);
    console.log("Check Log| USD Nhập: ",usdInput)
    
    usdToVnd = usdInput*23500;

    var formattedVND = usdToVnd.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
     document.getElementById("ketquaquydoi").innerText = 
    `Kết Quả Sau Khi Quy Đổi ${usdInput} USD Sang VND Được Là 💶 ${formattedVND}`;
}
// tính chu vi với diện tính nè 💚
function TinhChuVi() {
    console.log("Check Log Step 1 | Status: OK ✅ ")
    var chieudai = parseInt(document.getElementById("chieudai").value);
    var chieurong = parseInt(document.getElementById("chieurong").value);
    console.log(`Chiều Dài Ghi Nhận: ${chieudai} Chiều Rộng Ghi Nhận: ${chieurong}`);

    dientich = chieudai*chieurong;
    chuvi =  (chieudai+chieurong) *2;
    console.log(`Diện Tính : ${dientich} Chu Vi: ${chuvi}`);
    document.getElementById("ketquachuvi").innerText = `Diện Tích: ${dientich} Chu Vi: ${chuvi}`
}
// bài tập ký số nè :3 🫥

function TinhKySo(){
    console.log("Check Log  Ký Số | Status: OK ✅ ")
    var so = document.getElementById("kyso").value;
    var a = Math.floor(so / 10); // Lấy chữ số hàng chục
    var b = so % 10; // Lấy chữ số hàng đơn vị
    tong = a+b;
    console.log(`A : ${a} B: ${b} Tổng: ${tong}` );
    document.getElementById("ketquakyso").innerText = `Ký số tính được là :${tong}`
    

}