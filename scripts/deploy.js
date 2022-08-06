main()

async function main () {
  try {
    const SusukidaCoin = await ethers.getContractFactory("SusukidaCoin")
    const susukidaCoin = await SusukidaCoin.deploy()

    console.info(`Token address: ${susukidaCoin.address}`)
  } catch (err) {
    console.error(err)
  }
}
