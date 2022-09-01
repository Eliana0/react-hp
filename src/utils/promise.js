let value = true;

let promise = (asinc, time) => {
    return new Promise((resolve, reject) =>{
        if (value){
            setTimeout(() => {
                resolve(asinc)
            },time);
        }else {
            reject("Error")
        }
    })
}

export default promise;