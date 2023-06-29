// function getBaseApiByENV(key){
//     switch (key) {
//         case 'LOCAL':
//             return process.env.REACT_APP_LOCAL_SERVER_ENDPOINT;
//         case 'UAT':
//             return process.env.REACT_APP_UAT_SERVER_ENDPOINT;
//             case 'PROD':
//             return process.env.REACT_APP_PROD_SERVER_ENDPOINT;
//         default:
//             return process.env.REACT_APP_LOCAL_SERVER_ENDPOINT;
//     }
// }

const environment = process.env.REACT_APP_ENV;

console.log("environment", environment);
console.log("environment", process.env.NODE_ENV);

const base_api_url =  (environment === 'development') ? `${window.location.href}api/v2`: 'http://localhost:8009/api/v2';

const config = {
    BASE_API_URL: base_api_url,
    IMAGE_CDN_BASE_URL: 'https://ik.imagekit.io/a6n7g8ldqgi/fooddelivery',
    BANNER_IMAGE_KEY: 'banner_yxocxn3KgV1.jpeg?updatedAt=1638912407414'
}


const getImageUrl = (imageKey) => {
    return `${config.IMAGE_CDN_BASE_URL}/${imageKey}`;
}

export { config, getImageUrl};