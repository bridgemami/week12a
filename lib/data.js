// import fs from 'fs';
// import path from 'path';
// get filepath to data directory
//Before using got must DO: npm install Got
import got from 'got';

// const dataJ = path.join( process.cwd(), 'data');
// define the url for rest endpoint
const dataUrl = 'https://dev-srjc-fall-2022-cs55.pantheonsite.io/wp-json/wp/v2/posts';


// function returns ids for all json objects in array
export async function getAllIds() {
    // let fileName = (isStarWars) ? "sw.json" : "not_sw.json";
//get filepath to json file
// const filePath = path.join( dataJ, fileName ); 
// const filePath2 = path.join( dataJ, 'jobs.json' ); 
//load json file contents
//const jsonData = fs.readFileSync( filePath, 'utf8' );
let jsonString;
try {
    //next line uses got synchronmously to retrieve via https our json from wp site 
    jsonString = await got(dataUrl)
    console.log(jsonString.body)
}
catch (error) {
jsonString =[]
console.log(error)
}


// const jsonData2 = fs.readFileSync( filePath2, 'utf8' );
//convert string from file into json array object
const jsonObj = JSON.parse( jsonString.body);
// const jsonObj2 = JSON.parse( jsonData2);
//use map() on array to extract just id properties into new array of object values
const returnData = jsonObj.map(item => {
    return {
        params: {
            id: item.id.toString()
        }
    }
}
);

console.log(returnData);
return returnData;
}

//function returns names and ids for all json objects in array, sorted by name property.

export async function getSortedList() {
// let fileName = (isStarWars) ? "sw.json" : "not_sw.json";
// const filePath = path.join(dataJ, fileName);
// const jsonInfo =fs.readFileSync(filePath, 'utf8');
// const jsonObj = JSON.parse(jsonInfo);
// jsonObj.sort(function(x,y) {
//     return x.author.localeCompare(y.author);
// });
// return jsonObj.map(item => {
//     return {
//         id: item.id.toString(),
//         quote: item.quote,
//         author: item.author,
//         source: item.source,
//         friend: item.friend.toString(),
//         youtube: item.youtube,
//         youtubeTitle: item.youtubeTitle
//     }
// })
let jsonString;
try {
    //next line uses got synchronmously to retrieve via https our json from wp site 
    jsonString = await got(dataUrl)
    console.log(jsonString.body)
}
catch (error) {
jsonString =[]
console.log(error)
}
const jsonObj = JSON.parse( jsonString.body);
jsonObj.sort(function(x,y) {
        return x.title.rendered.localeCompare(y.title.rendered);
    });

    return jsonObj.map(item => {
            return {
                id: item.id.toString(),
                title: item.title,
               content: item.content,
               link: item.link,
                date: item.date,
                modify: item.modified,
                // author: item.author,
                // source: item.source,
                // friend: item.friend.toString(),
                // youtube: item.youtube,
                // youtubeTitle: item.youtubeTitle
            }
        })
}

// export async function getDataCommon(){
//     let fileName = (isStarWars) ? "sw.json" : "not_sw.json";
// const filePath = path.join(dataJ, fileName);
// const jsonInfo =fs.readFileSync(filePath, 'utf8');
// const jsonObj = JSON.parse(jsonInfo);
// const objMatch = jsonObj.filter((obj) => { return(obj.id.toString() === id)})
// let objReturned = {};
// if (objMatch.length > 0) {
//     objReturned = objMatch[0];
//     objReturned["sw"] = isStarWars;}
//      console.log("found- " + objReturned["author"]);
//     return objReturned;
// }
//  export function getDataNoSW(isStarWars, id) {
//     let  notSW = getDataCommon(isStarWars, id);
//     return notSW;
//  }
//async function to get the complete data for just one author/person
// used by getStaticProps() in [id].js
export async function getData(isStarWars, id) {
    // let objReturned = getDataCommon(isStarWars, id);
    // objReturned["notSWData"] = getDataCommon(!isStarWars, objReturned.notSW);
    // return objReturned;
    let jsonString;
try {
    //next line uses got synchronmously to retrieve via https our json from wp site 
    jsonString = await got(dataUrl)
    console.log(jsonString.body)
}
catch (error) {
jsonString =[]
console.log(error)
}
const jsonObj = JSON.parse( jsonString.body);
if( objMatch.length >0) {
    objReturned = objMatch[0];
}
else {
objReturned = {};
}
return objReturned
}