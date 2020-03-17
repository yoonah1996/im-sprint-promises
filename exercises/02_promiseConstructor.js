const fs = require("fs");
const request = require("request");

/*
 * 아래 함수는 파일에 있는 데이터들을 한 줄 씩 Array에 담아 callback 함수에 주어야합니다.
 *
 * 예)
 *
 * 파일 내용
 * 윤상호
 * 구일모
 * 이호용
 * 정진석, 박준홍
 * 최규홍
 *
 * callback 함수에 넘겨 줄 Array
 * ["윤상호", "구일모", "이호용", "정진석, 박준홍", "최규홍"]
 */
const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      // 에러일 경우
      if(err){
        reject(err);
      }else{
      // 정상 작동
        let result = data.toString().split('\n');
        resolve(result)
      }
    })
  })
};

/**
 * 아래 함수는 항상 Http Response의 Body를 callback함수에 넘겨주어야 합니다.
 */
const getBodyFromGetRequestPromise = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if(err){
        reject(err);
      }else{
        resolve(JSON.parse(body));
      }
    })
  })
};

module.exports = {
  getDataFromFilePromise,
  getBodyFromGetRequestPromise
};
