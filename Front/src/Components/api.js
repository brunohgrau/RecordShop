import axios from "axios";

//  Abstract data fetching functions

/* Products */

// getAllProducts

export const getAllProducts = async () => {
  const { data } = await axios.get(
    "https://dn4gl.sse.codesandbox.io/api/products"
  );
  return data;
};

export const getProduct = async ({ queryKey }) => {
  const [key, { id }] = queryKey;
  const response = await fetch(
    `https://dn4gl.sse.codesandbox.io/api/products/${id}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const deleteProducts = async (id) => {
  const response = await fetch(
    `https://dn4gl.sse.codesandbox.io/api/products/${id}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

export const updateProduct = async ({ id, ...data }) => {
  const response = await fetch(
    `https://dn4gl.sse.codesandbox.io/api/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const createProduct = async (data) => {
  const response = await fetch(
    `https://dn4gl.sse.codesandbox.io/api/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

/* Users */

export const getAllUsers = async () => {
  const { data } = await axios.get(
    `https://dn4gl.sse.codesandbox.io/api/users`
  );
  return data;
};

export const deleteUser = async (id) => {
  const response = await fetch(
    `https://dn4gl.sse.codesandbox.io/api/users/${id}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};
