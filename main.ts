

// const getResult = async (status: boolean) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (status) {
//                 resolve("Promis accept");
//             } else {
//                 reject("Mprimis reject")
//             }
//         }, 1000);
//     });
// };

// getResult(false)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Promise finally")
//     })

interface UserModel{
    name: string
    age: number
}


// const checkResult = async () => {
//     await getResult(false)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Promise finally")
//     });

//     console.log("privet")
// }

const getResult = async (status: boolean) => {
    return new Promise((resolve, reject) => {
        

        setTimeout(() => {
            if (status) {
                resolve("true");
            } else {
                reject("Error")
            }
        }, 1000)
    });
}

// const checkResult = async () => {
//     const user = (await getResult(false)) as UserModel;

//     console.log(`Privet, a ${user.name}, mne ${user.age}`);

// }

// checkResult().catch((error) => {
//     console.log(error)
// })

const getUser = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

const checkResult = async () => {
    const response = (await getUser()).json()
    console.log(response)

}

checkResult()

