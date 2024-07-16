/*
export const getImageUrl = (path)=> { /*ANONMOUS FUNCTION 1. the realitive path we are passing to it
    return new URL('./../assets/${path}' 3. appending the path to url,import.meta.url).href; 2. taking the base url of the website passing us back the absolute path
};
/* this is basically help us to dynamically import images into our different components*/

/*Template Literals in JavaScript: In JavaScript, backticks are used to create template literals, which allow for multi-line strings and string interpolation. For example:*/
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };