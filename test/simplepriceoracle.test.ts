import { ethers } from "hardhat";

describe(
    "SimplePriceOracle",
    function () {
        it(
        "Should deploy the SimplePriceOracle contract",
        async () => {
            const SimplePriceOracle = await ethers.getContractFactory("SimplePriceOracle");
            const simplePriceOracle = await SimplePriceOracle.deploy();
            await simplePriceOracle.deployed();
    
            console.log("SimplePriceOracle deployed to:", simplePriceOracle.address);
    
            // Check if address exists
            if (!simplePriceOracle.address) {
            throw new Error("SimplePriceOracle address is invalid");
            }
        }
        );
    }
);