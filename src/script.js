// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

// username password
let elInputUsername = document.querySelector('#username');
let elInputPassword = document.querySelector('#password');

// 성공 메시지 실패 메시지
let elSuccessMessage = document.querySelector('.success-message');
let elFailureeMessage = document.querySelector('.failure-message');

// 2차 비밀번호
let elPasswordRetype = document.querySelector('#password-retype');
// 1차 비밀번호와 2비밀번호 체크
let elSuccessPassword = document.querySelector('.mismatch-message');

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    // 성공 메시지가 보입니다.
    elSuccessMessage.classList.remove('hide');

    // 실패 메시지가 가려져야 함
    elFailureeMessage.classList.add('hide');
  } else {
    // 성공 메시지가 가려집니다.
    elSuccessMessage.classList.add('hide');

    //실패 메시지가 보여야함
    elFailureeMessage.classList.remove('hide');
  }
};

elPasswordRetype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elPasswordRetype.value)) {
    elSuccessPassword.classList.add('hide');
  } else {
    elSuccessPassword.classList.remove('hide');
  }
};

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.

  return value.length >= 4;
}

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if (password1 === password2) {
    return true;
  } else {
    return false;
  }
}
