function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let resultArray: number[] = [];
  let rev_col2: number[] = [];
  let index_1 = 0;
  let index_2 = 0;
  let index_3 = 0;
  for (let i = collection_2.length - 1; i >= 0; i--) {
    rev_col2.push(collection_2[i]);
  }
  while (
    index_1 < collection_1.length ||
    index_2 < rev_col2.length ||
    index_3 < collection_3.length
  ) {
    const val_1 =
      index_1 < collection_1.length ? collection_1[index_1] : Infinity;
    const val_2 = index_2 < rev_col2.length ? rev_col2[index_2] : Infinity;
    const val_3 =
      index_3 < collection_3.length ? collection_3[index_3] : Infinity;

    if (val_1 <= val_2 && val_1 <= val_3) {
      resultArray.push(val_1);
      index_1++;
    } else if (val_2 <= val_1 && val_2 <= val_3) {
      resultArray.push(val_2);
      index_2++;
    } else {
      resultArray.push(val_3);
      index_3++;
    }
  }

  return resultArray;
}

export default merge;
