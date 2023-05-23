import { styled } from ".."

export const HistoryContainer = styled('div', { 

    width: "100%",
    maxWidth: "1216px",
    margin: "0 auto",
   
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",

 }) 


 export const HistoryContent = styled('section', {

     width: "795px",
     marginTop: "62px",
     marginBottom: "92px",
     
    h2: {
         fontWeight: "bold",
         fontSize: "3rem",
         marginBottom: "2rem",
         color: "$gray900",
    },

    p: {
         fontWeight: "400",
         fontSize: "1.25rem",
         lineHeight: "160%",
         letterSpacing: "0.04em",
         color: "$gray-800",
      }
 })

 export const CardsContainer = styled('section', {
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: "16rem",
      position: "relative",
})

export const Card = styled('div', {
   textAlign: "left",
   alignItems: "flex-end",
   padding: "2rem",
   boxSizing: "border-box",
   maxWidth: "590px",
   borderRadius: "1rem",
   background:" rgba(255, 255, 255, 0.5)",
   paddingBlock: "2rem",

   div: {
      display: "flex",
      alignItems: "center",
   },

   h3: {
      fontWeight: "700",
      fontSize: "2rem",
      margin: "0",
      marginLeft: "1.25rem",
      color: "$gray-900",
   },

   p: {
      fontWeight: "400",
      fontSize: "1.125rem",
      letterSpacing:" 0.06em",
      color: "$gray-900",
      lineHeight: "160%",
   }
})

export const Container = styled('section', {
   width: "800px",
   height: "477px",
    
})

export const ContainerPresident = styled('section', {
   // display: "flex",
   alignItems: "center", 
   
   h2: {
      fontWeight: "700",
      fontSize: "2rem",
      lineHeight: "41.6px",
      paddingBottom: "6.25rem",
   },
})

export const Wrapper = styled('div', {
  
   display: "flex",
   flexWrap: "wrap",
   gap: "2rem",
   width: "800px",   

   img: {
      maxWidth: "318px",
      height: "477px",
      objectFit: "cover",
   },

   div: {
      textAlign: "left",

   },

   h3: {
      fontWeight: "700",
      fontSize: "2.2925rem",
      color: "$gray900",
      letterSpacing: "0.04em",
      lineHeight: "130%",
   }

})