// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
// Gợi ý: Sử dụng phương thức reduce

type Obj = {
  [key: string]: number | string;
};

const infoArr: (string | number)[][] = [
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
];
var arrToObj = (arr: (string | number)[][]) => {
  var obj: Obj = arr.reduce((acc: Obj, cur: (string | number)[]) => {
    return { ...acc, [cur[0]]: cur[1] };
  }, {});
  return obj;
};
// console.log(obj);
console.log(arrToObj(infoArr));
