var nama = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmpassword = document.getElementById('confirmpassword');
var form = document.getElementById('form');

//fungsi validasi form
function validateForm() {
  //check username kosong
  if (nama.value.trim() === '') {
    alert('Masukkan nama');
  }
  //check email kosong
  if (email.value.trim() === '') {
    alert('Masukkan email.');
  }
  //check password
  if (password.value.trim() === '') {
    alert('Masukkan password.');
  }
  //check apakah password sama
  if (confirmpassword.value.trim() === '') {
    alert('Konfirmasi password.');
  } else {
    if (password.value.trim() !== confirmpassword.value.trim()) {
      alert('Password tidak sama.');
    }
  }
}

//tidak menuju halaman href jika klik tombol submit
document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});
