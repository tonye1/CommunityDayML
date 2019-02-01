import requests

# URL
url = 'http://localhost:5001/api'

# Change the value of experience that you want to test
r = requests.post(url,json={'post':1.8,})
print(r.json())
