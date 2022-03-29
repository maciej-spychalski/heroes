import axios from 'axios';

const ACCESS_TOKEN = 10218900778221638;

export const getBasicHeroInfoById = async id => {
  const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`);
  const { data: image } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`);
  return { 
    name: powerstats.name,
    powerstats,   
    imgUrl: image.url,
    id: powerstats.id,
  }
}

export const searchHeroesByName = name => {
  return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`)
}
