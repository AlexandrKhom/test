function strip (x: string | number) {
    if (typeof x === 'string') {
        return x.trim();
    }
    return x.toFixed(2)
}

class MyResp {
    header = 'resp header'
    result = 'resp result'
}
class MyErr {
    header = 'err header'
    message = 'err messsage'
}

function handler(res: MyResp | MyErr) {
    if (res instanceof MyResp) {
        return {info: res.header + res.result}
    } else {
        return {info: res.header + res.message}}
}
////////////////

type Alert = 'good' | 'bad' | 'norm'
function setAlert(type: Alert) {
    //....
}
setAlert('good')
setAlert('bad')
//setAlert('qwerty') //err





