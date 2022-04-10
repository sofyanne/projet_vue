

async function setData(value) {
  const data = await fetch("http://127.0.0.1:3000/api/v1/todos/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description: value.description,
      done: value.done
    }),
  })

  const result = await data.json();
  return result;
}

async function getData() {
  const data = await fetch("http://127.0.0.1:3000/api/v1/todos");
  const todos = await data.json()
  return todos.reverse();

}

async function deleteData(id) {
  console.log(id)
  const data = await fetch("http://127.0.0.1:3000/api/v1/todos/");
  const result = await data.json();
  return result;
}

export { setData, getData, deleteData };
