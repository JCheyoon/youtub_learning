const fn = require("./app");

// 이것은 유닛테스트이다
/*
test("1 is 1",() => {
  expect(1).toBe(1)
})

test("2+3 is 5",() => {
  expect(fn.add(2,3)).toBe(5)
})

test("2+3 is 5",() => {
  expect(fn.add(2,3)).toEqual(5)
})


test("4+3 is not 6",() => {
  expect(fn.add(4,3)).not.toBe(6)
})

//tobe,toEqual 등을 -> Matcher 라고 부르며 숫자나 문자등 기본타입을 검사할때 쓴다
it("같은 값 다른 object" => {
  const obj = {};
  const obj2 = obj;
  const obj3 = {...obj};

  expect(obj).toBe(obj2); // pass
  expect(obj).toBe(obj3); // fail
  expect(obj).toEqual(obje2); // pass
  expect(obj).toEqual(obj3); // pass
});

test("get name, age and return object ",() => {
  expect(fn.makeUser("peti",37)).toBe({
    name:"peti",
    age:37
  })
})

test("get name, age and return object ",() => {
  expect(fn.makeUser("peti",36)).toStrictEqual({
    name:"peti",
    age:36
  })
})

test("get name, age and return object ",() => {
  expect(fn.makeUser("peti",36)).toEqual({
    name:"peti",
    age:36
  })
})



test("null is null ",() => {
  expect(null).toBeNull()
})

test("0 is false",() => {
  expect(fn.add(1,-1)).toBeFalsy()
})
test("Not empty string is truth",() => {
  expect(fn.add("HELLO","WORLD")).toBeTruthy()
})



test("ID must be less than 10 letters ", () => {
  const id = "THE_ORANGE";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("length of password should be 4", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

//ERROR floating number
test("0.1+0.2 =0.3 ", () => {
  expect(fn.add(0.1, 0.2)).toBe(0.3);
});

test("0.1+0.2 =0.3 ", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

*/

//with Regular Expressions
test("Hello world has 'e' ", () => {
  expect("Hello world").toMatch(/e/);
});

test("Userlist has 'peti'? ", () => {
  const user = "peti";
  const userList = ["cheyoon", "peti", "spider"];
  expect(userList).toContain(user);
});



test("Error expected ", () => {
  expect(() => fn.throwError()).toThrow("ERROR");
});


test("after 3sec get a name peti ", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("peti");
      done();
    } catch (error) {
      done(error);
    }
  }
  fn.getName(callback);
});

test("after 3sec get a age", () => {
  return expect(fn.getAge()).resolve.toBe(30);
});



// let num = 0;
//
// beforeEach(() => {
//   num = 0;
// });
//
// test("0 + 1 = 1", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });
//
// test("0 + 2 = 2", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });
//
// test("0 + 3 = 3", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });
