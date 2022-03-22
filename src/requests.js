import axios from 'axios';

const ACCESS_TOKEN = 112367020895106;

export const getBasicHeroInfoById = async id => {
  const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`);
  const { data: image } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`);
  return { 
    name: powerstats.name,
    powerstats,   // dzięki EC6 nie musimy pisać tu powerstats: powerstats poniewąż włąściwość i parametr mają taką samą nazwę
    imgUrl: image.url
  }
}
