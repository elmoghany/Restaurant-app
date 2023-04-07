import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses', //no slash at the end!
    headers: {
        Authorization: 'Bearer 8st6ErBmmnlI-u3CYn7DLsCC_dg6_wFuUYr50ij8styoG9W48onhALTV5gcenXl8zPfYbOn7_vs_9j9zUx4a6b0K3lcYm4HqngCOdtlxc-lobnzPGXHYafBVegQuZHYx'
    }
})

//yelp.get('/search',)