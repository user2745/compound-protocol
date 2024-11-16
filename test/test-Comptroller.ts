import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Comptroller', async () => {

    let comptroller: any;

    it('should deploy the Comptroller', async () => {
        const Comptroller = await ethers.getContractFactory('Comptroller');
        comptroller = await Comptroller.deploy();
        expect(comptroller.address).to.match(/^0x[0-9A-Fa-f]{40}$/);
    }
    );
    
});