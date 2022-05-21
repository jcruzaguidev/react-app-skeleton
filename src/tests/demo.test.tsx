describe("Pruebas en el archivo demo.test.tsx", () => {
   test("Debe ser true", () => {
      const msg = "hola mundo";
      const msg2 = "hola mundo";

      expect(msg).toBe(msg2);
   })
})

export {}