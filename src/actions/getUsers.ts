"use server";

export const getUsers = async (offset: number, limit: number) => {
  try {
    const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const data = (await response.json()) as USERAPIResponse;
    return data.users;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happend: ${error}`);
  }
};
