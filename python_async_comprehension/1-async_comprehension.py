#!/usr/bin/env python3
""" Async comprehension """

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Asynchronous function that collects values
    yielded by async_generator
    into a list and then prints that list.
    """

    return [i async for i in async_generator()]
