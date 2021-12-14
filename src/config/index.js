

const config = {
    BASE_API_URL: 'http://localhost:9000/api/v1',
    IMAGE_CDN_BASE_URL: 'https://ik.imagekit.io/a6n7g8ldqgi/fooddelivery',
    BANNER_IMAGE_KEY: 'banner_yxocxn3KgV1.jpeg?updatedAt=1638912407414'
}


const getImageUrl = (imageKey) => {
    return `${config.IMAGE_CDN_BASE_URL}/${imageKey}`;
}

export { config, getImageUrl};