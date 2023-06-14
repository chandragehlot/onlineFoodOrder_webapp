function getBaseApiByENV(key){
    switch (key) {
        case 'LOCAL':
            return process.env.REACT_APP_LOCAL_SERVER_ENDPOINT;
        case 'UAT':
            return process.env.REACT_APP_UAT_SERVER_ENDPOINT;
            case 'PROD':
            return process.env.REACT_APP_PROD_SERVER_ENDPOINT;
        default:
            return process.env.REACT_APP_LOCAL_SERVER_ENDPOINT;
    }
}

const environment = process.env.REACT_APP_ENV;

const config = {
    BASE_API_URL: 'http://ec2-3-250-9-164.eu-west-1.compute.amazonaws.com:9000/api/v1',
    IMAGE_CDN_BASE_URL: 'https://ik.imagekit.io/a6n7g8ldqgi/fooddelivery',
    BANNER_IMAGE_KEY: 'banner_yxocxn3KgV1.jpeg?updatedAt=1638912407414'
}


const getImageUrl = (imageKey) => {
    return `${config.IMAGE_CDN_BASE_URL}/${imageKey}`;
}

export { config, getImageUrl};