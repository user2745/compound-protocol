import { expect } from "chai";
import { ethers } from "hardhat";

const SIMPLE_PRICE_ORACLE_ADDRESS = "0x1f98431c8ad98523631ae4a59f267346ea31f984";

describe ("Price Oracle", () => {
    it("should retrieve the Simple Price Oracle", async () => {
        let priceOracle: any;

        before(async () => {
            const SimplePriceOracle = await ethers.getContractAt(
                "SimplePriceOracle",
                SIMPLE_PRICE_ORACLE_ADDRESS
            );
            expect(SimplePriceOracle.address).to.equal(SIMPLE_PRICE_ORACLE_ADDRESS);
        });
    });

});