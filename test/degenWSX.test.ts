import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('WSX cToken', async () => {
    
        let cToken: any;
        let WSX: any;

        const WSX_TOKEN_ADDRESS = "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e";
        const UNITROLLER_ADDRESS = "0xB078459124e55Eb9F2937c86c0Ec893ff4FF082b";

        const DEGEN_WSX_ADDRESS = "0xd91C7392EF0bD03504811bb4055d9572B59426E7";

        const enableAmount = ethers.utils.parseUnits("1000", 18); // USDC uses 6 decimals
        const mintAmount = ethers.utils.parseUnits("1000", 6); // USDC uses 6 decimals
        const withdrawAmount = ethers.utils.parseUnits("500", 6); // USDC uses 6 decimals

        // it('should deploy the WSX cToken', async () => {
        //     const cWSX = await ethers.getContractFactory('CErc20Immutable');
        //     cToken = await cWSX.deploy(
        //         "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e", // Underlying WSX address
        //         "0xB078459124e55Eb9F2937c86c0Ec893ff4FF082b", // Unitroller address (proxy)
        //         "0x353e7839870604Edf9D766bEFb7929c95c215e00", // WSX interest rate model
        //         "20000000000000000", // Initial exchange rate (0.02 * 1e18)
        //         "Degen Wrapped SX", // Name
        //         "degenWSX", // Symbol
        //         18, // Decimals (WSX has 18 decimals)
        //         "0x4869aF0Aed0a9948f724f809dC0DCcF9885cCe34" // Admin address
        //     ); // Incomplete, needs contract params
        //     expect(cToken.address).to.match(/^0x[0-9A-Fa-f]{40}$/);
        // }
        // );

        it('should retrieve the WSX Token', async () => {
            cToken = await ethers.getContractAt('CErc20Immutable', DEGEN_WSX_ADDRESS);
            expect(cToken.address).to.equal(DEGEN_WSX_ADDRESS);
        }
        );

        it('should show the name & ticker of the WSX cToken', async () => {
            const name = await cToken.name();
            expect(name).to.equal("Degen Wrapped SX");
            const symbol = await cToken.symbol();
            expect(symbol).to.equal("degenWSX");
        }
        );

        it('should enable the WSX cToken', async () => {
            WSX = await ethers.getContractAt('ERC20', WSX_TOKEN_ADDRESS);
        
            const signer = await ethers.getSigner(); // Get the signer object
            const signerAddress = await signer.getAddress(); // Get the address of the signer
        
            const txn = await WSX.approve(DEGEN_WSX_ADDRESS, "1000000000000000000000");
            await txn.wait();


            const allowance = await WSX.allowance(signerAddress, DEGEN_WSX_ADDRESS);
            
            // Compare the values using .toString() or .eq()
            expect(allowance.toString()).to.equal(enableAmount.toString());
            // Alternatively:
            // expect(allowance.eq(enableAmount)).to.be.true;
        });


        it('should mint the WSX cToken', async () => {
            const signer = await ethers.getSigner(); // Get the signer object
            const signerAddress = await signer.getAddress(); // Get the address of the signer
        
            const txn = await cToken.mint(mintAmount);
            await txn.wait();
        
            const balance = await cToken.balanceOf(signerAddress);
            expect(balance.toString()).to.equal(mintAmount.toString());
        });

        it('should withdraw the WSX cToken', async () => {      
            const signer = await ethers.getSigner(); // Get the signer object
            const signerAddress = await signer.getAddress(); // Get the address of the signer
        
            const txn = await cToken.redeemUnderlying(withdrawAmount);
            await txn.wait();
        
            const balance = await cToken.balanceOf(signerAddress);
            expect(balance.toString()).to.equal(withdrawAmount.toString());
        }
    );
        
        
    }
    );