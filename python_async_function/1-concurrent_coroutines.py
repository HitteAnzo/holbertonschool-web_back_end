#!/usr/bin/env python3
""" Take in an integer and a max_delay integer as arguments """

import asyncio
from typing import List
import random


async def wait_random(max_delay: int) -> float:
    """ Waits for a random delay between 0 and max_delay """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ Returns a list of delays in ascending order """
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    return sorted(delays)
