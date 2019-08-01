const config = {
    bucket_name: process.env.JAMSTACK_APP_BUCKET_SLUG || "JAMStackNuxtApp",
    bucket_slug: process.env.JAMSTACK_APP_BUCKET_SLUG || "jamstacknuxtapp",
    bucket_id: process.env.JAMSTACK_APP_BUCKET_ID || "5d42732d26afa82693a15c6e",
    read_key: process.env.JAMSTACK_APP_BUCKET_READ_KEY || "YFz8It4qb7gc6f8WIdpvUDSenBC5qLKNxH9hShzQ1W6nzqTlSd",
    write_key: process.env.JAMSTACK_APP_BUCKET_WRITE_KEY || "0RRf9NzvHVpTZWay6bBWRLVe9Y2X5VKFiHLxnDxQnhDXf3hYFd",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;