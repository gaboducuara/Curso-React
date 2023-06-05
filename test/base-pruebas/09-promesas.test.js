import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

// jest.useFakeTimers("legacy");

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync tendra un error si heroe no existe", ( done ) => {

    const id = 100;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy();
        done();
      })

      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el heroe ${id}`);

        done();
      });
  });

  // test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
  //     const id = 1;
  //     getHeroeByIdAsync(id).then((hero) => {
  //       expect(hero).toEqual({
  //         id: 1,
  //         name: "Batman",
  //         owner: "DC",
  //       });
  //       done();
  //     });
  //   });

  //   });
});
