import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('USDC cToken', async () => {
    
        let cToken: any;
        let USDC: any;

        const USDC_TOKEN_ADDRESS = "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e";
    
        const enableAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const mintAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const withdrawAmount = ethers.utils.parseUnits("500", 6); // US
        const borrowAmount = ethers.utils.parseUnits("100", 6); // USDC uses 6 decimals
        const repayAmount = ethers.utils.parseUnits("50", 6); // USDC uses 6 decimals

        it('should deploy the USDC cToken', async () => {
            const cUSDC = await ethers.getContractFactory('CErc20Immutable');
            cToken = await cUSDC.deploy(); // Incomplete, needs contract params
            expect(cToken.address).to.match(/^0x[0-9A-Fa-f]{40}$/);
        }
        );
});