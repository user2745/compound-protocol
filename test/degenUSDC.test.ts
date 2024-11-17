import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('USDC cToken', async () => {
    
        let cToken: any;
        let USDC: any;

        const USDC_TOKEN_ADDRESS = "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e";
        const DEGEN_USDC_ADDRESS = "0x57009222E71921F396A00D33BeF59f4bEDf83397";
    
        const enableAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const mintAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const withdrawAmount = ethers.utils.parseUnits("500", 6); // US
        const borrowAmount = ethers.utils.parseUnits("100", 6); // USDC uses 6 decimals
        const repayAmount = ethers.utils.parseUnits("50", 6); // USDC uses 6 decimals

        // it('should deploy the USDC cToken', async () => {
        //     const cUSDC = await ethers.getContractFactory('CErc20Immutable');
        //     cToken = await cUSDC.deploy(); // Incomplete, needs contract params
        //     expect(cToken.address).to.match(/^0x[0-9A-Fa-f]{40}$/);
        // }
        // );

        it('should retrieve the USDC Token', async () => {
            cToken = await ethers.getContractAt('ERC20', DEGEN_USDC_ADDRESS);
            expect(cToken.address).to.equal(DEGEN_USDC_ADDRESS);
        }
        );

        it('should show the name & ticker of the USDC cToken', async () => {
            const name = await cToken.name();
            expect(name).to.equal("Degen USDC");
            const symbol = await cToken.symbol();
            expect(symbol).to.equal("degenUSDC");
        }
        );

        it('should enable the USDC cToken', async () => {
            USDC = await ethers.getContractAt('ERC20', USDC_TOKEN_ADDRESS);
            const signer = await ethers.getSigner(); // Get the signer object
            const signerAddress = await signer.getAddress(); // Get the address of the signer

            await USDC.approve(DEGEN_USDC_ADDRESS, "1000000000");

            const allowance = await USDC.allowance(signerAddress, DEGEN_USDC_ADDRESS);

            expect(allowance.toString()).to.equal(enableAmount.toString());
        }
        );

});