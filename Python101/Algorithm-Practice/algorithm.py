# 1. Given an array of integers, find if the array contains any duplicates.

# MY ANSWER


# def check_set(num):
#     num_set = set(num)
#     if len(num_set) < len(num):
#         print('Yes the original list contained duplicates.')
#         return True
#     else:
#         return False


# check_set([2, 5, 5, 6, 6, 6.5, 3, 2, 3.5, 2])

# -- Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
# -- LeetCode link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/


# 2. Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
# -- The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
# -- You may assume the integer does not contain any leading zero, except the number 0 itself.
# -- LeetCode link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

# MY ANSWER

# def go_up(nums):


# 3. Given two arrays, write a function to compute their intersection.
# -- LeetCode link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

def meet_up(l1, l2):
    intersect = [num for num in l1 if num in l2]
    return intersect


print(meet_up([4, 3, 4, 2, 3], [5, 6, 8, 8, 9, 4]))


# JEREMY'S CHALLENGE:
# Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
# increasing sequence by removing no more than one element from the array.
# Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
# A sequence containing only one element is also considered to be strictly increasing.
# Example
# For sequence = [1, 3, 2, 1], the output should be
#        almostIncreasingSequence(sequence) = false.
# As there is no one element in this array that can be removed in order to get a strictly increasing sequence.
# For sequence = [1, 3, 2], the output should be
#    almostIncreasingSequence(sequence) = true.
# You can remove 3 from the array to get the strictly increasing sequence [1, 2].
# Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
# Hint: first define another function that tests if a sequence is strictly increasing across all elements
