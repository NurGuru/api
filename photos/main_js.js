// комментарий не выполняется
/* Кооментарии для себя или других разработчиков 

*/
const btnGet = document.getElementById("btnGetPosts");

//для хранения полученных постов
const state = {
  posts: [],
};

btnGet.addEventListener("click", () => {
  const input_count = document.getElementById("input_count");
  GetPostsRequest(input_count.value);
});

function GetPostsRequest(count) {
  url = "https://jsonplaceholder.typicode.com";
  resources = "/photos";
  target_url = url + resources + "?_limit=" + count;

  fetch(target_url)
    .then((response) => response.json())
    .then((res_json) => console.log(res_json));
}
