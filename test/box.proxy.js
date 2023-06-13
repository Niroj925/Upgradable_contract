
//test 


const{expect}=require("chai");
const { ethers, upgrades } = require("hardhat");


let Box
let box;

//start test box
describe('Box (proxy)',function(){
  beforeEach(async function(){
    Box=await ethers.getContractFactory("Box")
    box=await upgrades.deployProxy(Box,[42],{initializer:'store'})
  })

  //test case
  it("retrieve returns a value previously initialized",async function(){
    //test it the returned value is the same one
    //note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('42')
  }) 
})