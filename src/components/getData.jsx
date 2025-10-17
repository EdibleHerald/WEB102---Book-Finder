// I need this to return an object with all necessary data
// What data I'll need: 
// (all within "items" which is an array which hold objects)
//  "isEbook" - true/false (in "saleInfo")
//  "categories" - nature (array)
//  "country" - "US" (in "saleInfo")
//  "language" - "en" 
//
//
// Title
// Author (in array, just the first)
//

//return object:
//{
//  title: "title",
//  author: "author",
//  isEbook: true/false,
//  category: "genre",
//  language: "lang",
//  image: "link to image",
//  publishedDate: int,
//  pageCount: int,
//  averageRating: int (1.0-5.0),
//  saleability: FREE,FORSALE,NOTFORSALE,FORPREORDER (on google books of course),
//  canonicalVolumeLink: link (on google books),
//  acsTokenLink: 
//    
//}
// Assume jsonData is already parsed (an object)
function getData(jsonData){
    let defaultObject = {
        title: null,
        author: null,
        isEbook: null,
        category: null,
        language: null,
        image: null,
        publishedDate: null,
        averageRating: null,
        saleability:null,
        canonicalVolumeLink: null,
        acsTokenLink:null
    }

    if(jsonData && typeof jsonData === "object"){
        // Checks if jsonData exists and is an object
        const link = jsonData?.accessInfo?.pdf?.isAvailable ? jsonData?.accessInfo?.pdf?.acsTokenLink : null;
        const authorArr = jsonData?.volumeInfo?.authors;
        const categoryArr = jsonData?.volumeInfo?.categories;

        let singleAuthor=null;
        if(authorArr.length > 0){
            // Chooses first author returned to save space when displayed
            singleAuthor = jsonData?.volumeInfo?.authors[0];
        }

        let singleCategory=null;
        if(categoryArr.length > 0){
            // Chooses the first category to reduce complexity
            singleCategory = jsonData?.volumeInfo?.categories[0];
        }

        defaultObject = {
            title: jsonData?.volumeInfo?.title,
            author: singleAuthor,
            isEbook: jsonData?.saleInfo?.isEbook,
            category: singleCategory,
            language: jsonData?.volumeInfo?.language,
            image: jsonData?.volumeInfo?.imageLinks?.small ??
            jsonData?.volumeInfo?.imageLinks?.medium ??
            jsonData?.volumeInfo?.imageLinks?.thumbnail ??
            "fallback.jpg", // Tries getting multiple possible images
            publishedDate: jsonData?.volumeInfo?.publishedDate,
            averageRating: jsonData?.volumeInfo?.averageRating,
            saleability: jsonData?.saleInfo?.saleability,
            canonicalVolumeLink: jsonData?.volumeInfo?.canonicalVolumeLink,
            acsTokenLink: link
        }

    }

    return defaultObject;
}

export default getData