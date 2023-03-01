const main = async () => {
    const {ethers} = require('hardhat')
    const factory = await ethers.getContractFactory("Books");
    const contract = await factory.deploy();
    await contract.deployed();

    console.log(`${contract.address} has been deployed`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});