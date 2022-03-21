/**
 * 工具类
 */
import Vue from 'vue'
import CryptoJS from 'crypto-js'
export default {
  //加密
  encrypt(word){
    const key = CryptoJS.enc.Utf8.parse('2020081720200817') // 十六位十六进制数作为密钥
    let encrypted = CryptoJS.AES.encrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString()
  },

  //解密
  decrypt(word, keyStr){
    keyStr = keyStr ? keyStr : 'abcdefgabcdefg12';
    var key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }

}
