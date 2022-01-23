

const config = {
    BASE_API_URL: 'http://ec2-54-90-242-254.compute-1.amazonaws.com/api/v1',
    IMAGE_CDN_BASE_URL: 'https://ik.imagekit.io/a6n7g8ldqgi/fooddelivery',
    BANNER_IMAGE_KEY: 'banner_yxocxn3KgV1.jpeg?updatedAt=1638912407414'
}


const getImageUrl = (imageKey) => {
    return `${config.IMAGE_CDN_BASE_URL}/${imageKey}`;
}

export { config, getImageUrl};

// dev : http://ec2-54-90-242-254.compute-1.amazonaws.com/api/v1
// local : http://localhost:9000/api/v1