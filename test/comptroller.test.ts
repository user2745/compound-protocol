import { ethers } from "hardhat";

describe("Basic Test", function () {
  it("Should deploy the Comptroller contract", async () => {
    const Comptroller = await ethers.getContractFactory("Comptroller");
    const comptroller = await Comptroller.deploy();
    await comptroller.deployed();

    console.log("Comptroller deployed to:", comptroller.address);

    // Check if address exists
    if (!comptroller.address) {
      throw new Error("Comptroller address is invalid");
    }
  });
});
