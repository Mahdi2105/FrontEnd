/**
 * Delete a restaurant
 *
 */
async function deleteRestaurant(id) {
  //console.log(id);
  const response = await fetch(`http://localhost:3000/api/restaurants/${id}`, {
    method: "DELETE",
  })

  if (response.ok) {
    window.location.reload();
  }

}
/**
 * Updates a restaurant via a put request
 *
 */

async function updateRestaurant(event) {

  event.preventDefault();

  const form = event.target

  const data = {
    id: form.restaurantID.value,
    name: form.name.value,
    imagelink: form.imagelink.value
  }

  const response = await fetch(`http://localhost:3000/api/restaurants/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      'content-type' : 'application/json',
    }
  })
  //make fetch request to PUT


  console.log(data)

}
