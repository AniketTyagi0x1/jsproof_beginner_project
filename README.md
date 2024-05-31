# Project Introduction 

The objective of this project is to simulate the minting and management of NFTs (Non-Fungible Tokens) using JavaScript. While we won't be creating actual NFTs on a blockchain, we will emulate the process by writing JavaScript code to create objects that represent NFTs, complete with customizable metadata. This metadata can include attributes such as name, eye color, shirt type, bling, and more, allowing for creative and diverse NFT representations.

The project will involve the following key tasks:

- Variable to Store NFTs: Create a variable to hold multiple NFT objects. This will be an array that can dynamically grow as new NFTs are minted.
- Minting Function: Develop a mintNFT function that takes various metadata values as parameters, creates an NFT object using these values, and stores it in the array created in the first step.
- Listing Function: Implement a listNFTs function that loops through the array of NFTs and prints their metadata to the console, providing a detailed view of each NFT's attributes.
- Total Supply Function: Create a getTotalSupply function that returns the total number of NFTs minted and stored in the array.

# Introduction To NFT (Non-Fungible Token) 

NFT (Non-Fungible Token): An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, such as digital art, music, videos, virtual real estate, or other digital and physical goods. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, each NFT is unique or part of a limited series and cannot be exchanged on a like-for-like basis.

### Example of NFT 

<img src="https://cdn.mos.cms.futurecdn.net/mpGh6USjRkE3dPQnF8tXRC-1200-80.jpg"

### Example of NFT Meta-data

```json
{
  "name": "Monkey King",
  "description": "A unique digital artwork of the Monkey King, ruler of the jungle.",
  "image": "https://example.com/images/monkey-king.png",
  "attributes": [
    { "trait_type": "Background", "value": "Jungle" },
    { "trait_type": "Fur Color", "value": "Golden" },
    { "trait_type": "Clothing", "value": "Royal Robe" },
    { "trait_type": "Crown", "value": "Diamond Encrusted" },
    { "trait_type": "Eyes", "value": "Emerald Green" },
    { "trait_type": "Expression", "value": "Smirking" },
    { "trait_type": "Accessories", "value": "Scepter" }
  ]
}
```

# Project Program 

```javascript
// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Eye Color: " + nftCollection[i].eyeColor);
        console.log("Shirt Type: " + nftCollection[i].shirtType);
        console.log("Bling: " + nftCollection[i].bling);
        console.log("--------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line

// Mint some NFTs
mintNFT("NFT 1", "Blue", "T-Shirt", "Gold Chain");
mintNFT("NFT 2", "Green", "Hoodie", "Silver Bracelet");
mintNFT("NFT 3", "Brown", "Tank Top", "Diamond Ring");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total NFTs Minted: " + getTotalSupply());
```

JavaScript code simulates the minting and management of NFTs (Non-Fungible Tokens) by creating objects that represent NFTs and holding their metadata. It starts with the declaration of an array nftCollection to store the NFTs. The mintNFT function is then defined to take parameters for the NFT's metadata, such as name, eyeColor, shirtType, and bling. It creates an NFT object using these parameters and adds the object to the nftCollection array.

Next, the listNFTs function is created to loop through the nftCollection array and print each NFT's metadata to the console. This function uses a for loop to iterate over the array and console.log to display each NFT's details, including its name, eye color, shirt type, and bling.

The getTotalSupply function is defined to return the total number of NFTs stored in the nftCollection array by simply returning its length.

