export const CalculateRate = (rate) => {
  let value = Math.round((rate / 10 ) * 100) + "%"
  return value;

}
  
  export const ShowYear = (year) => {
    return  year.slice(0, 4);
   }


export const CheckGenre = ( genre ) => {
   switch (genre) {

     case 28: 
        return "action"
      case 16:
        return "animated"
      case 99: 
      return "documentary"
      case 10751: 
        return "family"
      case 14:
        return "fantasy"
      case 36:
        return "history"
      case 35: 
        return "comedy"
      case 10752: 
        return "war"
      case 9648: 
        return "mystery"
      case 10402: 
        return "music"
      case 80: 
        return "crime"
      case 10770:
        return "TV movie"
      case 27: 
      return "horror"
      case 878: 
        return"sci fi"
      case 53: 
        return "thriller"
      case 37: 
        return "western"
      case 12: 
      return "adventure"      
     default:
       return "unknown"
   }
  }