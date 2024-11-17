import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("UnitrollerDeployment", (m) => {
    const Unitroller = m.contract("Unitroller", []); // Deploy the Unitroller logic
    return { Unitroller };
});