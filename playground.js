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
