module.exports = async (hre) => {
  const accounts = await hre.getNamedAccounts();
  const deployer = accounts.admin;

  console.log((await hre.ethers.provider.getBalance(deployer)).toString());
  const {address} = await hre.deployments.deploy("GemDao", {
    from: deployer,
    log: true,
  });
  console.log((await hre.ethers.provider.getBalance(deployer)).toString());
};

module.exports.tags = ['GemDao'];

module.exports.dependencies = ["Swap"];