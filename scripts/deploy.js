const { ethers, upgrades } = require("hardhat");


async function main(){

  const Box=await ethers.getContractFactory("Box");
  console.log("deploying proxy, box implementation and proxy admin");
   const boxProxy=await  upgrades.deployProxy(Box,[42],{initializer:'store'});

   console.log("BoxProxy deployed to:",boxProxy.address);

}

main()
.then(()=>process.exit(0))
.catch(error=>{
  console.log(error);
  process.exit(1);
})