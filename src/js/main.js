import '../css/main.css'
import request from './request'
import { createCountryies } from './updateUI'
const API = 'https://restcountries.com/v3.1/all'
request(API).then((data)=>{
    createCountryies(data);
}).catch((err)=>{
    alert(err.message);
})