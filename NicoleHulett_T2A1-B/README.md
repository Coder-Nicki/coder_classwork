# T2A1 Workbook - Part B
By Nicole Hulett 


## Q1 Identify and explain the workings of TWO sorting algorithms and discuss and compare their performance/efficiency (i.e. Big O) 	

Sorting algorithms are used to rearrange a given list or array into a defined order. Two types of sorting algorithms are; Merge sort and Bubble sort.

Merge sort works by dividing an array or list into smaller subarrays or lists and then merging the smaller subarrays back together in the defined order (Merge Sort Algorithm, 2023). The given array is continuously divided in half, until it can no longer be divided and the array is empty or there is only one element left. Next the merge operation is utilised. Two smaller arrays are compared and combined into another array in a sorted manner. This continues until all the subarrays are compared and sorted into a new large array. 

```python
def mergeSort(array):
    if len(array) > 1:

        #  d is the point where the array is divided into two subarrays
        d = len(array)//2
        L = array[:d]
        M = array[d:]

        # Sort the two halves
        mergeSort(L)
        mergeSort(M)

        i = j = k = 0

        # Until we reach either end of either L or M, pick larger among
        # elements L and M and place them in the correct position at A[p..r]
        while i < len(L) and j < len(M):
            if L[i] < M[j]:
                array[k] = L[i]
                i += 1
            else:
                array[k] = M[j]
                j += 1
            k += 1

        # When we run out of elements in either L or M,
        # pick up the remaining elements and put in A[p..r]
        while i < len(L):
            array[k] = L[i]
            i += 1
            k += 1

        while j < len(M):
            array[k] = M[j]
            j += 1
            k += 1
```

Bubble sort is one of the simplest sorting algorithms. It works by repeatedly swapping the adjacent element pairs if they are in the wrong order and continues checking for the entire array or list. This requires many iterations of the list. Over the first pass of the list, the bubble sort will take the first two elements, compare them to check which is greater and then swap them if in the wrong order. Next, the algorithm will take elements 2 and 3 and compare them and continue this process until the end of the list. Once this is completed, bubble sort will start at the start again and repeat the process. This will occur until the algorithm completes a whole pass without needing to swap any numbers. 

```python
def bubble_sort(array):

  # loop to access each array element
  for i in range(len(array)):

    # loop to compare array elements
    for j in range(0, len(array) - i - 1):

      # compare two adjacent elements
      # change > to < to sort in descending order
      if array[j] > array[j + 1]:

        # swapping elements if elements
        # are not in the intended order
        temp_array = array[j]
        array[j] = array[j+1]
        array[j+1] = temp_array
```

Merge sort and Bubble sort are two quite different sorting algorithms. Both algorithms are easy to understand and implement. Some differences between the two are; Merge sort requires some additional memory space to store the temporary subarrays, whereas bubble sort does not require any additional memory space. Merge sort is a stable sorting algorithm and the order of elements with equal value is preserved during the sort and bubble sort is not stable sorting. Merge sort is great for external sorting where the data does not fit in memory, however, requires more code to implement since the array is divided into smaller arrays and then merged back together sorted. Bubble sort is adaptable to different types of data and the code needed is simple and straightforward.

Merge sort has a time complexity (Big O notation) of O(n log n) in the worst case scenario and it is relatively efficient for sorting large datasets. O(n log n) is also called loglinear complexity. It implies that 'log n' operations will occur 'n' times. The running time grows in proportion to the logarithm of the input size. This means that the run time increases slowly as the input increases exponentially. Bubble sort has Big O complexity of O(n^2) which makes it very slow and inefficient for large data sets. This type of Big O notation has a performance which is proportional to the square size of the imput elements. The run time increases very sharply with a growth of input elements.

In conclusion, Bubble sort and Merge sort have many advantages and drawbacks. In regards to Big O complexity, Bubble sort is better used for small data sets and Merge sort is much more effective when dealing with larger data sets. 

## Q2 Identify and explain the workings of TWO search algorithms and discuss and compare their performance/efficiency (i.e. Big O) 	

Search algorithms use a step-by-step method to locate and retrieve specific data among a collection of data. Two very common search algorithms are; Linear search and Binary search. (Krishna, 2022)

Linear search, also called Sequential search works by sequentially iterating through the whole array or list from one end until the target element is found. This approach starts with the element at index 0 then compares it to the target element. If the two elements match, then the index is returned. If the elements are not equal, then the target is not found and -1 is returned. 

```python
def linearSearch(array, n, x):

    # Going through array sequentially
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1
```

Binary search is used on a sorted array. This algorithm works by continually dividing the array in half to narrow down the search field or until the element is found. First step is to find the middle element of the array or list. This middle element is then compared to the target element. If it is equal to the target element, then its index is returned, else if the target element is greater than the middle element, the search will continue in the right half of the array. Or if the target element is less than the middle element, then the search continues in the left half. This process is then repeated until the middle element is equal to the target element or the target element is not found. When the target element is found, the index of that position is returned. 

```python
def binarySearch(array, x, low, high):

    # Repeat until the pointers low and high meet each other
    while low <= high:

        mid = low + (high - low)//2

        if array[mid] == x:
            return mid

        elif array[mid] < x:
            low = mid + 1

        else:
            high = mid - 1

    return -1
```

These two searching algorithms are very simple to understand. Linear search has a big O notation or time complexity in its worst case of O(n). That would be when the element to be found is the very last element of the array, so every element beforehand would need to be compared. O(n) has a linear complexity. Basically the run time increases at exactly the same pace as the input. If there are 24 elements, the runtime will be 24 steps. Binary search has a big O notation of O(log n) in its worst-case scenario when the target element is either not in the list or well away from the middle of the array. O(log n) means that the running time grows in proportion to the logarithm of the input size. The input can exponentially grow, but the runtime barely increases. Both searching algorithms have a similar best case scenario of O(1), meaning that the target element is found at the first comparison, either it is at the start of the list for a Linear search or it is in the middle of a list for a Binary search. After comparing these two search algorithms using time complexity and Big O notation, Linear search would be better utilised if it is an unsorted array and the array isn’t too large. Binary search would work better for sorted arrays and for large datasets of any size. 

## References

Krishna, A. (2022, 1 11). Search Algorithms – Linear Search and Binary Search Code Implementation and Complexity Analysis. Retrieved from freeCodeCamp: https://www.freecodecamp.org/news search-algorithms-linear-and-binary-search-explained/

Merge Sort Algorithm. (2023, 1 11). Retrieved from Geeks for Geeks: https://www.geeksforgeeks.org/merge-sort/

