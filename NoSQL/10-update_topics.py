#!/usr/bin/env python3
""" Update a document in Python """
from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")
db = client.mydatabase
mongo_collection = db.school

def update_topics(mongo_collection, name, topics):
    """ changes all topics of a school document based on the name """
    return mongo_collection.updateMany({"name": name}, {"$set": {"topics": topics}})
