const crypto = require("crypto");
const http = require("http");

const prefix = '/vrageremote/v1';
var credentials;

const httpOptions = (endPoint) => {
  input = credentials;
  const ip = input.ip;
  const port = input.port;
  const secret = input.secret;
  const getNonce = () => crypto.randomBytes(20).toString('base64');
  const getUtcDate = () => new Date().toUTCString();

  const nonce = getNonce();
  const date = getUtcDate();

  const key = Buffer.from(secret, 'base64');
  const message = `${prefix}${endPoint}\r\n${nonce}\r\n${date}\r\n`;
  const hash = crypto.createHmac('sha1', key).update(Buffer.from(message)).digest('base64');

  const options = {
    hostname: ip,
    port: port,
    path: prefix + endPoint,
    // method: 'GET',
    headers: {
      Authorization: `${nonce}:${hash}`,
      Date: date
    }
  };

  return options;
};

module.exports = {
  credentials: (input) => {
    credentials = input;
  },
  players: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/session/players"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  asteroids: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/session/asteroids"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  grids: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/session/grids"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  floatingObjects: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/session/floatingObjects"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  planets: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/session/planets"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  chat: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/session/chat"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  server: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/server"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  ping: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/server/ping"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  bannedPlayers: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/admin/bannedPlayers"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
  kickedPlayers: () => {
    return new Promise((resolve, reject) => {
      http.get(httpOptions("/admin/kickedPlayers"), res => {
        res.setEncoding("utf8");
        res.on("data", data => {
          resolve(JSON.parse(data));
        }).on("error", error => {
          reject(error);
        });
      });
    });
  },
};
