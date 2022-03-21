export function GetQueryValue(queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}

//获取倒计时时间
export function countDownTime(value) {

    var date = new Date(value.replace(/\-/g, "/"));
    var time1 = Date.parse(date);
    var timestamp = new Date().getTime()
    if (time1 > timestamp) {
        return { type: 1, timestamp: Number(time1) - Number(timestamp) }
    } else {
        return { type: 2, timestamp: 0 }
    }
}

//时间戳转换为时分秒
export function formatDuring(mss) {
    var days = parseInt(mss / (1000 * 60 * 60 * 24));
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) >= 10 ? parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : '0' + parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60)) >= 10 ? parseInt((mss % (1000 * 60 * 60)) / (1000 * 60)) : '0' + parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt((mss % (1000 * 60)) / 1000) >= 10 ? parseInt((mss % (1000 * 60)) / 1000) : '0' + parseInt((mss % (1000 * 60)) / 1000);
    return days + " 天 " + hours + ":" + minutes + ":" + seconds;
}

//获取当前月天
export function getMonthAndDay() {
    var myDate = new Date();
    var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var d = myDate.getDate() >= 10 ? myDate.getDate() : '0' + myDate.getDate(); //获取当前日(1-31)
    return '' + m + d
}

//两数组去除重复数值
export function mergeArray(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1); //利用splice函数删除元素，从第i个位置，截取长度为1的元素
            }
        }
    }
    return arr1;
}


//过滤富文本 标签 和图片
export function formatContent(value) {
    var content = value.replace(/(\n)/g, "");
    content = content.replace(/(\t)/g, "");
    content = content.replace(/(\r)/g, "");
    content = content.replace(/<\/?[^>]*>/g, "");
    content = content.replace(/\s*/g, "");
    content = content.replace(/\&nbsp;/g, " ");
    return content;
}