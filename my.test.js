const edad=require ('./src/index.js');

// test ("testing age", () =>{
//   expect(edad(18)).toBe("puedes conducir");
// });

test ("testing age", () =>{
  expect(edad(10)).toBe("Introduce una edad valida");
});

test ("testing age", () =>{
  expect(edad(76)).toBe("no puedes conducir");
});

