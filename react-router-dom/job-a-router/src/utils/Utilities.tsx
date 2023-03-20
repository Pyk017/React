export function validateEmail(input: string): boolean {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) return true;

  return false;
}

//!loader function
//? http://localhost:4000/careers
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Couldn't not find all careeers");
  }

  return res.json();
};

//? to run json server
//! json-server -p 4000 -w ./src/data/db.json

//! career details loader function

export const careerDetailsLoader = async ({ params }: any) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Couldn't find that career.");
  }

  return res.json();
};
