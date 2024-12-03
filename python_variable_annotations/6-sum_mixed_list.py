#!/usr/bin/env python3
""" Sum mixed list """

from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Return the sum of a list of integers and floats.

    Args:
    mxd_lst (List[Union[int, float]]): The list of integers and float numbers.

    Returns:
    float: The sum of the numbers in the list.
    """
    return sum(mxd_lst)
