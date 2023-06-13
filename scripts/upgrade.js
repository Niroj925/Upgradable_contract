const { ethers, upgrades } = require("hardhat");


async function main(){

    const Boxv2=await ethers.getContractFactory("Boxv2")

    let box=await upgrades.upgradeProxy("0x0113E20d8b716086a124a4897f679d1335B4f1a9",Boxv2);

    console.log("your upgraded proxy is done",box.address);
 
}

main()
.then(()=>process.exit(0))
.catch(error=>{
  console.log(error);
  process.exit(1);
})