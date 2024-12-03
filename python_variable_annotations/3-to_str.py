#!/usr/bin/env python3
""" Module to demonstrate the use of type annotations in Python. """


def to_str(n: float) -> str:
    """
    Return the string representation of the given float.

    Args:
    n (float): The float number.

    Returns:
    str: The string representation of the float number.
    """
    return str(n)
