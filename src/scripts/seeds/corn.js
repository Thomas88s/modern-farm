 const getCorn = [
     {
         type: "Corn",
         Height: 180,
         output: 6
     },
     {
         type: "Corn",
         Height: 180,
         output: 6
     }  
 ]

export const createCorn = () => {
    return getCorn.slice()
}