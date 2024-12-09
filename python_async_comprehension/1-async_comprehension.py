#!/usr/bin/env python3
from typing import List
""" Async comprehension """

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Asynchronous function that collects values
    yielded by async_generator
    into a list and then prints that list.
    """
    return [i async for i in async_generator()]
