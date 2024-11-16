import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('WSX cToken', async () => {
    
        let cToken: any;

        const enableAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const mintAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const withdrawAmount = ethers.utils.parseUnits("500", 6); // USDC uses 6 decimals

        it('should deploy the WSX cToken', async () => {
            const cWSX = await ethers.getContractFactory('CErc20Immutable');
            cToken = await cWSX.deploy(); // Incomplete, needs contract params
            expect(cToken.address).to.match(/^0x[0-9A-Fa-f]{40}$/);
        }
        );
        
    }
    );