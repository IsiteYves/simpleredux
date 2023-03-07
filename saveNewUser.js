import fs from "fs";

export const saveNewUser = async (newUser) => {
  try {
    const req = await fetch("./src/data/users.json");
    const users = await req.json();
    users.push(newUser);
    await fetch("./src/data/users.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    });
  } catch (e) {
    alert(e.message);
  }
};
