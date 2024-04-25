import merge from "./interview";

describe("merge test", () => {
  it("merge 3 collection follow by the instruction that given", () => {
    const collection_1 = [0, 1, 4]; //min to max
    const collection_2 = [9, 8, 3]; //max to min
    const collection_3 = [2, 6, 7]; //min to max
    const merge_test = merge(collection_1, collection_2, collection_3);
    console.log(merge_test);
    expect(merge_test).toEqual([0, 1, 2, 3, 4, 6, 7, 8, 9]);
  });
});
