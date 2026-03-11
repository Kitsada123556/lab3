const posts = [
    { title: 'Post A', likes: 120 },
    { title: 'Post B', likes: 300 },
    { title: 'Post C', likes: 150 }
];

console.log(sortPostsByLikes(posts));

function sortPostsByLikes(posts) {
    return posts.sort((a, b) => b.likes - a.likes);
}