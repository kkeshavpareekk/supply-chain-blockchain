var SupplyChainContract = artifacts.require("./SupplyChain.sol");
var RolesContract = artifacts.require("./rolesUtils/Roles.sol");
var ManufacturerContract = artifacts.require("./rolesUtils/Manufacturer.sol");
var DeliveryHubContract = artifacts.require("./rolesUtils/DeliveryHub.sol");
var SortationHubContract = artifacts.require("./rolesUtils/SortationHub.sol");
var ThirdpartyContract = artifacts.require("./rolesUtils/Thirdparty.sol");
var CustomerContract = artifacts.require("./rolesUtils/Customer.sol");

module.exports = function (deployer) {
  deployer.deploy(ManufacturerContract);
  deployer.deploy(RolesContract);
  deployer.deploy(SupplyChainContract);
  deployer.deploy(DeliveryHubContract);
  deployer.deploy(SortationHubContract);
  deployer.deploy(ThirdpartyContract);
  deployer.deploy(CustomerContract);
};
