// Step 1 - If it is the first element, it is already sorted. return 1;
// Step 2 - Pick next element
// Step 3 - Compare with all elements in the sorted sub-list
// Step 4 - Shift all the elements in the sorted sub-list that is greater than the
//          value to be sorted
// Step 5 - Insert the value
// Step 6 - Repeat until list is sorted

// procedure insertionSort( A : array of items )
//    int holePosition
//    int valueToInsert

//    for i = 1 to length(A) inclusive do:

//       valueToInsert = A[i]
//       holePosition = i

//       while holePosition > 0 and A[holePosition-1] > valueToInsert do:
//          A[holePosition] = A[holePosition-1]
//          holePosition = holePosition -1
//       end while

//       A[holePosition] = valueToInsert

//    end for
// end 

let numbers = [3, 5, 1, 20, 15, 12, 8];

function insertionSort(arr) {
  let sortedArray;

  
  return sortedArray; 
}

console.log(insertionSort(numbers));
                  