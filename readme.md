# alerting-cli

> This is a Alert CLI made with nodejs. It has colors and symbols for success, error, warning and info. It is compatible with all platforms.

## Installation

```sh
npm i alerting-cli
```

## Usage

```sh
const alert = require('alerting-cli');
```

```dart
    alert({
        type: "error",
        msg: "hello, it is a error!",
        name: "FAILURE"
    });

    //provide the type, msg and name.
```

### Examples:

```dart
const alert = require("./index.js");

alert({
  type: "info",
  msg: "hello, it is a info!",
  name: "Important Notice",
});

alert({
  type: "success",
  msg: "hello, it is a success!",
});

alert({
  type: "warning",
  msg: "hello, it is a warning!",
});

alert({
  type: "error",
  msg: "hello, it is a error!",
});
```

## API

### alert(options)

<br>

#### > options

Type: object <br>
Default : {}

#### > name

Type: string <br>
Default : ""

#### > msg

Type: string <br>
Default : "all options not defined!"

<br>

## Options Explained

- type - "error" , "success" , "warning" , "info"
- msg - you can provide any message you want.
- name - default name are: "SUCCESS","ERROR","WARNING" and "INFO". you can provide your own name as well
