// const status = true;
// const marks = 78;
// console.log("Task 01");
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         if (marks >= 79) {
//             res("Eligible for the next class");
//         } else {
//             rej("Not eligible for the next class");
//         }
//     });
// });
// // CALL PROMISE
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const paymentSuccess = true;
const marks = 71;
console.log('Course details')
const enroll = () => {
    console.log('Course enrollment is processing');
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (paymentSuccess) {
                res();
            }
            else {
                rej('Payment faild')
            }
        }, 2000)
    })
    return promise
}
const progress = () => {
    console.log('Course on progress')
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (marks >= 70) {
                res()
            }
            else {
                rej('You could not get enought marks to get the certificate')
            }
        }, 2000)
    })
    return promise
}
const getCertificate = () => {
    console.log('Preparing your certificate')
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res('Congrates! you got the certificate')
        }, 1000)
    })
    return promise
}
enroll()
    .then(progress)
    .then(getCertificate)
    .then((v) => {
        console.log(v)
    })
    .catch((err) => {
        console.log(err)
    })