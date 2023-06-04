import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  
  test("getUser debe de retornar un objetos", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    // console.log(user)

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const name = "Gabriel mancilla ducuara";

    const ActioUserTest = getUsuarioActivo(name);
    console.log(ActioUserTest);

    expect(ActioUserTest).toStrictEqual({
      uid: "ABC567",
      username: name
    });
  });
});
