# Matching Pairs
Given two strings s and t of length N, find the maximum number of possible matching pairs in strings s and t after swapping exactly two characters within s.

A swap is switching **s[i]** and **s[j]**, where **s[i]** and **s[j]** denotes the character that is present at the ith and jth index of s, respectively. The matching pairs of the two strings are defined as the number of indices for which **s[i]** and **t[i]** are equal.

Note: This means you **must** swap two characters at different indices.

### Signature

int matchingPairs(String s, String t)

### Input
- **s** and t are strings of length **N**
- **N** is between 1 and 1,000,000

### Output

Return an integer denoting the maximum number of matching pairs

### Example

**s** = "abcd"

**t** = "adcb"

**output** = 4

### Explanation:

Using 0-based indexing, and with i = 1 and j = 3, **s[1]** and **s[3]** can be swapped, making it  "adcb".
Therefore, the number of matching pairs of s and t will be 4.