class ScratchFetch {
  constructor() {
  }

  getInfo() {
    return {
      "id": "Fetch",
      "name": "Fetch",
      "blocks": [
                {
                    "opcode": "fetchURL",
                    "blockType": "reporter",
                    "text": "fetch data from [url]",
                    "arguments": {
                        "url": {
                            "type": "string",
                            "defaultValue": "https://api.weather.gov/stations/KNYC/observations"
                        },
                    }
                },
                {
                    "opcode": "jsonExtract",
                    "blockType": "reporter",
                    "text": "extract [name] from [data]",
                    "arguments": {
                        "name": {
                            "type": "string",
                            "defaultValue": "temperature"
                        },
                        "data": {
                            "type": "string",
                            "defaultValue": '{"temperature": 12.3}'
                        },
                    }
                },
]
    }
  }

  /* add methods for blocks */
}

Scratch.extensions.register(new ScratchFetch())
