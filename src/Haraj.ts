const omar = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: `query($tag:String,$city:String,$page:Int) { posts( tag:$tag, city:$city, page:$page) {\n\t\titems {\n\t\t\tid status authorUsername title city postDate updateDate hasImage thumbURL authorId\n\t\t}\n\t\tpageInfo {\n\t\t\thasNextPage\n\t\t}\n\t\t} }`,
        variables: 
        { "tag": "حراج الأجهزة", "city": "الشرقيه", "page":1 
         },
    }),
}
let pageNumber=1;
//let city='الرياض'
const url = 'https://graphql.haraj.com.sa/'
export let posts;
export async function fetchAds() {
    const response = await fetch(url, omar);
    // waits until the request completes...
    let res = await response.json();
     posts=res.data.posts.items
    //console.log(res.data.posts.items);
    //posts.forEach(item=>{console.log(item);})
    //console.log(res)
    return posts;
}
fetchAds()