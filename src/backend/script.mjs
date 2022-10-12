;(async () => {
  const { initPostsToDB } = await import('./init.mjs')
  await initPostsToDB()
})()