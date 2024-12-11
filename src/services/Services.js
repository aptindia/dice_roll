import axios from 'axios';

const Services = async (serviceUrl, method = 'GET', requestBody) => {

  const options = {
    url: serviceUrl,
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: requestBody,
    timeout: 3000,
  };

  try {
    const response = await axios(options);
    if (response.status === 404) {
      throw Error('not found');
    }
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
    if (err.response.status === 0) {
      throw Error(err);
    }
  }
};

export default Services;

// class Services {
//     static addUser = async (name, email, score, answerJson) => {
//         const URL = `https://stratahealth.aptoms.com/api/user.php`;

//         const myHeaders = new Headers();
//         myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
//         // myHeaders.append("Access-Control-Allow-Origin", "*");
//         // myHeaders.append('Accept', 'application/json');

//         const myRequest = new Request(URL, {
//             // mode: 'no-cors',
//             method: 'POST',
//             headers: myHeaders,
//             body: new URLSearchParams({
//                 name: name,
//                 email: email,
//                 score: score,
//                 answerJson: JSON.stringify(answerJson),
//             }),
//         });

//         //POST request
//         // return (
//             fetch(myRequest)
//                 .then(response => response.json())
//                 //If response is in json then in success
//                 .then(responseJson => {
//                     return responseJson;
//                 })
//                 //If response is not in json then in error
//                 .catch(error => {
//                     //Error
//                     return error;
//                 })
//         // );



//         // const post = {
//         //     name: name,
//         //     email: email,
//         //     answerJson: answerJson,
//         // };
//         // axios.post(
//         //     `https://stratahealth.aptoms.com/api/user.php`,
//         //     { body: post }
//         // )
//         // .then((res) => {
//         //     console.log(res);
//         //     console.log(res.data);
//         // });
//     }
// }

// export default Services;
