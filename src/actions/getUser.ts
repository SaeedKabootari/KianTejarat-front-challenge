"use server";

export const getUser = async (id: number) => {
  try {
    const url = `https://api.slingacademy.com/v1/sample-data/users/${id}`;
    const response = await fetch(url);
    const data = (await response.json()).user as User;
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happend: ${error}`);
  }
};
