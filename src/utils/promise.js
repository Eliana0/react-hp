let value = true;

let promise = (asinc) => {
    return new Promise((resolve, reject) =>{
        if (value){
            setTimeout(() => {
                resolve(asinc)
            },2000);
        }else {
            reject("Error")
        }
    })
}

export default promise;