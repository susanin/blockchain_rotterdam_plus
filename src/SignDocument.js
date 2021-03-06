export default {
  "contract_name": "SignDocument",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "signed",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "sign",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "stackeholders",
          "type": "address[]"
        }
      ],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "stackeholder",
          "type": "address"
        }
      ],
      "name": "StackeHolderSigns",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "FullySigned",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000c57fe5b604051610342380380610342833981016040528051015b60005b815181101561007e57600060006000848481518110151561004357fe5b602090810291909101810151600160a060020a03168252810191909152604001600020805460ff19169115159190911790555b600101610026565b81516100919060019060208501906100a9565b5060006002556003805460ff191690555b505061013a565b8280548282559060005260206000209081019282156100fe579160200282015b828111156100fe5782518254600160a060020a031916600160a060020a039091161782556020909201916001909101906100c9565b5b5061010b92915061010f565b5090565b61013791905b8082111561010b578054600160a060020a0319168155600101610115565b5090565b90565b6101f9806101496000396000f300606060405263ffffffff60e060020a600035041663232a6b9d811461002c5780632ca1512214610050575bfe5b341561003457fe5b61003c610062565b604080519115158252519081900360200190f35b341561005857fe5b61006061006b565b005b60035460ff1681565b60035460009060ff161561007f5760006000fd5b503361008a8161015e565b80156100af5750600160a060020a03811660009081526020819052604090205460ff16155b1561015957600160a060020a03811660008181526020818152604091829020805460ff19166001908117909155600280549091019055815192835290517f279b4986c14249b2dc44e5e702c8a0faf995b75265f377e1749370f0585814859281900390910190a16002546001541415610159576003805460ff191660011790556040517fcc378b5cd76725e01b60b99ecaa12d5f787726baead6ffb7cac8ba6bcda43ebd90600090a15b5b5b50565b6000805b6001548110156101c65782600160a060020a031660018281548110151561018557fe5b906000526020600020900160005b9054906101000a9004600160a060020a0316600160a060020a031614156101bd57600191506101c6565b5b600101610162565b5b509190505600a165627a7a72305820d18fa1c96b3569e1c4c8e566ee51a3fa6a81ef867a7d13b798369792765cc6200029",
  "networks": {
    "1497092301023": {
      "events": {
        "0x279b4986c14249b2dc44e5e702c8a0faf995b75265f377e1749370f058581485": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "stackeholder",
              "type": "address"
            }
          ],
          "name": "StackeHolderSigns",
          "type": "event"
        },
        "0xcc378b5cd76725e01b60b99ecaa12d5f787726baead6ffb7cac8ba6bcda43ebd": {
          "anonymous": false,
          "inputs": [],
          "name": "FullySigned",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x71875b5b7734bdbbdf5d3b7c6d62f5e9e84bcd66",
      "updated_at": 1497109790835
    },
    "1497110734226": {
      "events": {
        "0x279b4986c14249b2dc44e5e702c8a0faf995b75265f377e1749370f058581485": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "stackeholder",
              "type": "address"
            }
          ],
          "name": "StackeHolderSigns",
          "type": "event"
        },
        "0xcc378b5cd76725e01b60b99ecaa12d5f787726baead6ffb7cac8ba6bcda43ebd": {
          "anonymous": false,
          "inputs": [],
          "name": "FullySigned",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x09f190b6fc3ecafdbc594d445952d7821e4225b9",
      "updated_at": 1497114956383
    },
    "1497115615878": {
      "events": {
        "0x279b4986c14249b2dc44e5e702c8a0faf995b75265f377e1749370f058581485": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "stackeholder",
              "type": "address"
            }
          ],
          "name": "StackeHolderSigns",
          "type": "event"
        },
        "0xcc378b5cd76725e01b60b99ecaa12d5f787726baead6ffb7cac8ba6bcda43ebd": {
          "anonymous": false,
          "inputs": [],
          "name": "FullySigned",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x7b8cb8adc03bde3746b2337186bf2304801ffede",
      "updated_at": 1497115669279
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1497179898979
}