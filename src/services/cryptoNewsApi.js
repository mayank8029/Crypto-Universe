import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const cryptoNewsApiHeaders={
    'X-BingApis-SDK': 'true',
   'X-RapidAPI-Key': '172d0ef3dbmshc6f3a3b1e180f32p124edbjsnce767bb9f03e',
   'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com/news';

const createRequest =(url)=>({url,headers:cryptoNewsApiHeaders})


export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory ,count})=>createRequest(`/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
    })

})
});

 export const {
     useGetCryptoNewsQuery
 }=cryptoNewsApi;

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '172d0ef3dbmshc6f3a3b1e180f32p124edbjsnce767bb9f03e',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });