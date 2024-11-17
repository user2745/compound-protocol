import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('WSX cToken', async () => {
    
        let cToken: any;
        let WSX: any;

        const WSX_TOKEN_ADDRESS = "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e";
        const UNITROLLER_ADDRESS = "0xB078459124e55Eb9F2937c86c0Ec893ff4FF082b";

        const enableAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const mintAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const withdrawAmount = ethers.utils.parseUnits("500", 6); // USDC uses 6 decimals

        it('should deploy the WSX cToken', async () => {
            const cWSX = await ethers.getContractFactory('CErc20Immutable');
            cToken = await cWSX.deploy(
                "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e", // Underlying WSX address
                "0xB078459124e55Eb9F2937c86c0Ec893ff4FF082b", // Unitroller address (proxy)
                "0x353e7839870604Edf9D766bEFb7929c95c215e00", // WSX interest rate model
                "20000000000000000", // Initial exchange rate (0.02 * 1e18)
                "Degen Wrapped SX", // Name
                "degenWSX", // Symbol
                18, // Decimals (WSX has 18 decimals)
                // "0x4869aF0Aed0a9948f724f809dC0DCcF9885cCe34", // Fee Receiver address
                // 250, // Minting fee (2.5% in basis points)
                "0x4869aF0Aed0a9948f724f809dC0DCcF9885cCe34" // Admin address
            ); // Incomplete, needs contract params
            expect(cToken.address).to.match(/^0x[0-9A-Fa-f]{40}$/);
        }
        );

        it('should enable the WSX cToken', async () => {
            
          
            await cToken.connect(owner).mint(enableAmount);
            expect(await cToken.balanceOf(owner.address)).to.equal(enableAmount);
        }
        );
        
    }
    );